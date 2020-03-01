const glob = require('glob')
const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts');
const webpack = require('webpack')
require("dotenv").config();  
const fetch = require('isomorphic-unfetch')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});
const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const copyFile = promisify(fs.copyFile);
module.exports = withFonts(withCSS({
        webpack: config => {
          // Fixes npm packages that depend on `fs` module
          config.node = {
            fs: 'empty'
          },
          config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
          }),
          config.plugins.push(
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
            })
        )
      
          return config
        },
        exportPathMap: async function() {
          const routes = {
            '/': { page : '/'},
          }
          //get all .md files in the posts dir
          const blogs = glob.sync('src/services/**/*.md')
      
          //remove path and extension to leave filename only
          const blogSlugs = blogs.map(file => file.split('/')[2].replace(/ /g, '-').slice(0, - 3).trim())
          
          //add each blog to the routes obj
          blogSlugs.forEach(blog => {
            routes[`/insurance/${blog}`] = { page: '/insurance/[slug]', query: { slug: blog } };
          });
        
          return routes
        },
       
        env: {
          API_URL: process.env.API_URL
        },
      })
);

// module.exports = ({
//   webpack: function(config) {
//     config.module.rules.push({
//       test: /\.md$/,
//       use: "raw-loader"
//     });
//     return config;
//   },
//    exportPathMap: async function() {
//     const routes = {
//       '/': { page : '/'},
//       "/info": { page: "/info"},
// "/services": { page: "/services"}
//     }
//     //get all .md files in the posts dir
//     const blogs = glob.sync('src/services/**/*.md')

//     //remove path and extension to leave filename only
//     const blogSlugs = blogs.map(file => file.split('/')[2].replace(/ /g, '-').slice(0, - 3).trim())
    
//     //add each blog to the routes obj
//     blogSlugs.forEach(blog => {
//       routes[`/services/${blog}`] = { page: '/services/[slug]', query: { slug: blog } };
//     });
  
//     return routes
//   }
// });
