/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-light-gallery',

  included(app, parentAddon) {
    this._super.included(app);

    //Css
    app.import('node_modules/lightgallery/src/css/lightgallery.css');

    //Fonts
    app.import('node_modules/lightgallery/src/fonts/lg.ttf', {
      destDir: 'fonts'
    });
    app.import('node_modules/lightgallery/src/fonts/lg.woff', {
      destDir: 'fonts'
    });
    app.import('node_modules/lightgallery/src/fonts/lg.eot', {
      destDir: 'fonts'
    });

    //assets
    app.import('node_modules/lightgallery/src/img/loading.gif', {
      destDir: 'img'
    });

    //core
    app.import('node_modules/lightgallery/src/js/lightgallery.js');

    let target = parentAddon || app;

    if (target.app) {
      target = target.app;
    }

    var config = target.project.config(target.env) || {};
    var addonConfig = config[this.name] || {};

    addonConfig['plugins'].forEach((pluginName) => {
      app.import(`node_modules/lg-${pluginName}/src/lg-${pluginName}.js`);
    })

    if (addonConfig['tansitions']) {
      app.import('node_modules/lightgallery/src/css/lg-transitions.css');
    }
  }
};
