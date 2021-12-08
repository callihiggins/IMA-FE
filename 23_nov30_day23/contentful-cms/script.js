const app = {
  initialize: () => {
    app.client = contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: "m2z618t6nurx",
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: "gpwHzQ87ZadBhVqj4PYizaRiy_0LRFwHcZul_kTCM28"
    });
  },

  // fetch a particular project
  getEntry: entry => {
    // a known issue with the contentful library is that embedded images are ignored in rich text
    // this is the current workaround: https://github.com/contentful/rich-text/issues/61
    const options = {
      renderNode: {
          'embedded-asset-block': ({ data: { target: { fields }}}) => {
            return `<img src="${fields.file.url}" height="${fields.file.details.image.height}" width="${fields.file.details.image.width}" alt="${fields.description}"/>`;
          }
      }
    };
    app.client.getEntry(entry).then(project => {
      const projectData = {
        title: project.fields.title,
        imageUrl: `http:${project.fields.image.fields.file.url}`,
        imageTitle: project.fields.image.fields.title,
        description:  project.fields.description ? documentToHtmlString(project.fields.description, options) : '' // passing in the options obj i created above for the bug
      };
      // load the template for this item from a local file
      fetch('projectPage.mustache')
        .then(response => response.text())
        .then(template => {
          // render the template with the data
          const rendered = Mustache.render(template, projectData);
          // add the element to the container
          $('.container').append(rendered);
        }
      );
    });
  },

  getAllEntries: async () => {
    // first make sure we have our template loaded
    // i can use the word await along with async to pause the program until this function is finished
    const template = await app.loadTemplateForProjectOnHome();
    // fetch all entries
    app.client.getEntries().then(response => {
      // go through each one
      response.items.forEach(project => {
        // pull out the data you're interested in
        const projectData = {
          title: project.fields.title,
          imageUrl: `http:${project.fields.image.fields.file.url}`,
          imageTitle: project.fields.image.fields.title,
          slug: `${project.fields.slug}.html`
        };
        const rendered = Mustache.render(template, projectData);
        // add the element to the container
        $('.container').append(rendered);
      });
    });
  },

  getEntriesByTag: async tag => {
    // first make sure we have our template loaded
    // i can use the word await along with async to pause the program until this function is finished
    const template = await app.loadTemplateForProjectOnHome();
    // fetch entries with a specfic tag
    app.client.getEntries({'metadata.tags.sys.id[in]': tag}).then(response => {
      // go through each one
      response.items.forEach(project => {
        // pull out the data you're interested in
        const projectData = {
          title: project.fields.title,
          imageUrl: `http:${project.fields.image.fields.file.url}`,
          imageTitle: project.fields.image.fields.title,
          slug: `${project.fields.slug}.html`
        };
        const rendered = Mustache.render(template, projectData);
        // add the element to the container
        $('.container').append(rendered);
      });
    });
  },

  loadTemplateForProjectOnHome: () => fetch('projectOnHome.mustache').then(response => response.text()).then(template => template)

};