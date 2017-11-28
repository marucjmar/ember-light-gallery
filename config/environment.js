/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    'ember-light-gallery': {
      plugins: ['thumbnail', 'fullscreen'],
      tansitions: true
    }
  };
};
