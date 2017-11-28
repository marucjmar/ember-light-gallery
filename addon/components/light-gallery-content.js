import Component from '@ember/component';
import layout from '../templates/components/light-gallery-content';
import { merge } from '@ember/polyfills';
import $ from 'jquery';
import { on } from '@ember/object/evented';

export default Component.extend({
  layout,
  _galleryInstance: undefined,
  options: {},
  collection: undefined,

  onInit: on('didInsertElement', 'didReceiveAttrs', function() {
    let mergedOptions = merge(this.get('options'), this.get('attrs'))
    let gallery = $(`#${this.elementId}`).lightGallery(mergedOptions)

    this.set('_galleryInstance', gallery)
  }),

  onDestroy: on('willDestroy', function() {
    this.get('_galleryInstance').destroy()
  })
});
