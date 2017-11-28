import Component from '@ember/component';
import layout from '../templates/components/light-gallery-content';
import { merge } from '@ember/polyfills';

export default Component.extend({
  layout,
  _galleryInstance: undefined,
  options: {},
  collection: undefined,

  onInit: Ember.on('didInsertElement', 'didReceiveAttrs', function(e) {
    let mergedOptions = merge(this.get('options'), this.get('attrs'))
    let gallery = $(`#${this.elementId}`).lightGallery(mergedOptions)

    this.set('_galleryInstance', gallery)
  }),

  onDestroy: Ember.on('willDestroy', function() {
    this.get('_galleryInstance').destroy()
  })
});
