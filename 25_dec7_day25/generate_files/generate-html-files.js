#!/usr/bin/env node

const fs = require('fs');
var contentful = require('contentful');

var client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "m2z618t6nurx",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "gpwHzQ87ZadBhVqj4PYizaRiy_0LRFwHcZul_kTCM28"
});

client.getEntries().then(response => {
  response.items.forEach(item => {
    // manually set the name of the file using the project's slug field
    const fileName = `${item.fields.slug}.html`;
    const { id } = item.sys;
    fs.writeFile(fileName, buildHtml(id), err => {if (err) console.log(err)});
  })
}).catch(err => { if (err) console.log(err)});

const buildHtml = id =>  
`<!DOCTYPE html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="container"></div>
        
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <!-- contentful apis-->
    <script src="https://cdn.jsdelivr.net/npm/contentful@latest/dist/contentful.browser.min.js"></script>
    <script>
      var exports = {}; // quick fix because 'exports' is not defined in rich-text bundle below
    </script>
    <script src="https://unpkg.com/@contentful/rich-text-html-renderer@12.0.0/dist/rich-text-html-renderer.es5.js"></script>
    <!-- mustache api-->
    <script src="https://unpkg.com/mustache@latest"></script>
    <script src="script.js"></script>
    <script>
      (function(){
        app.initialize();
        // project id you get from contentful
        app.getEntry('${id}');
      })();
    </script>
  </body>
</html>`
