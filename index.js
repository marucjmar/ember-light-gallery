/* eslint-env node */
'use strict';

let requiredPath = {
  css: ['lightgallery/src/css/lightgallery.css'],
  fonts: ['lightgallery/src/fonts/lg.ttf', 'lightgallery/src/fonts/lg.woff', 'lightgallery/src/fonts/lg.eot'],
  images: ['lightgallery/src/img/loading.gif'],
  vendor: ['lightgallery/src/js/lightgallery.js']
}
const availablePlugins = ['thumbnail', 'autoplay', 'video', 'fullscreen', 'pager', 'zoom', 'hash', 'share']
const transitionsCss = 'lightgallery/src/css/lg-transitions.css'
const Funnel = require('broccoli-funnel');
const Merge = require('broccoli-merge-trees');
const fastbootTransform = require('fastboot-transform');
const path = require('path');
const existSync = require('exists-sync');


module.exports = {
  name: 'ember-light-gallery',
  treeForVendor(tree, app) {
    let trees = [];
    
    if (tree) {
      trees.push(tree);
    }

    for( var i in requiredPath ){
      requiredPath[i].forEach((url) => {
        let folderName = url.split('/')[0]
        let assetDir = path.join(this.project.root, 'node_modules', folderName)

        if (existSync(assetDir)) {
          let options = {
            files: [
              url.replace(folderName, '')
            ]
          }
          if (i !== 'vendor') {
            options.destDir = i
          }
          var browserTrees = fastbootTransform(new Funnel(assetDir, options));
          trees.push(browserTrees);
        }
      })
    }

    return new Merge(trees);
  },
  
  included(app, parentAddon) {
    this._super.included(app);

    let target = parentAddon || app;
    
    if (target.app) {
      target = target.app;
    }

    var config = target.project.config(target.env) || {};
    var addonConfig = config[this.name] || {};

    addonConfig.plugins.forEach((pluginName) => {
      if (!pluginAvailable(pluginName)) { return; }
      requiredPath['vendor'].push(`lg-${pluginName}/src/lg-${pluginName}.js`)
    })

    if (addonConfig['tansitions']) {
      requiredPath['css'].push(transitionsCss)
    }

    for( var i in requiredPath ){
      requiredPath[i].forEach((url) => {
        let folderName = url.split('/')[0]
        let options = {}
        if (i !== 'vendor') {
          options.destDir = i
        } else {
          options.destDir = folderName
        }
        let urls = url.replace(url.split('/')[0], '')

        let x = i !== 'vendor' ? `vendor/${i}/` : 'vendor';
        app.import(`${x}${urls}`, options);
      })
    }
  },
};

function pluginAvailable(pluginName = '') {
  return availablePlugins.includes(pluginName)
}
