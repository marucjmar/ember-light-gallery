/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    'ember-light-gallery': {
      plugins: ['thumbnail', 'autoplay', 'video', 'fullscreen', 'pager', 'zoom', 'hash', 'share'],
      tansitions: true
    }
  };
};
