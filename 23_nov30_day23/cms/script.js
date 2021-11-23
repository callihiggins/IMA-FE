const app = {
  initialize: function() {
    app.client = contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: "m2z618t6nurx",
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: "gpwHzQ87ZadBhVqj4PYizaRiy_0LRFwHcZul_kTCM28"
    });
  },

  getEntry: function(entry) {
    // fetch a particular project
    const options = {
      renderNode: {
          'embedded-asset-block': ({ data: { target: { fields }}}) => {
            debugger;
            return `<img src="${fields.file.url}" height="${fields.file.details.image.height}" width="${fields.file.details.image.width}" alt="${fields.description}"/>`;
          }
      }
    };
    app.client.getEntry(entry).then(project => {
      debugger;
      const projectData = {
        title: project.fields.title,
        imageUrl: `http:${project.fields.image.fields.file.url}`,
        imageTitle: project.fields.image.fields.title,
        description: documentToHtmlString(project.fields.description, options)
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

  getAllEntries: function() {
    // fetch all entries
    app.client.getEntries().then(response => {
      // go through each one
      debugger;
      response.items.forEach(project => {
        // pull out the data you're interested in
        const projectData = {
          title: project.fields.title,
          imageUrl: `http:${project.fields.image.fields.file.url}`,
          imageTitle: project.fields.image.fields.title,
          slug: `${project.fields.slug}.html`
        };
        // load the template for this item from a local file
        fetch('projectOnHome.mustache')
          .then(response => response.text())
          .then(template => {
            // render the template with the data
            const rendered = Mustache.render(template, projectData);
            // add the element to the container
            $('.container').append(rendered);
          }
        );
      });
    });
  }
};