import Component from '@ember/component';
import layout from '../templates/components/gallery-image';

export default Component.extend({
  layout,
  tagName: 'a',
  attributeBindings: ['href']
});
