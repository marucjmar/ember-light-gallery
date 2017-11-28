# Ember Light Gallery integration Addon

Lightweight, and full customizable addon for [lightGallery](http://sachinchoolur.github.io/lightGallery/) plugin!

# Installation
```bash
ember install ember-light-gallery
```

# Configuration
environment.js

```
ENV = {
  ...,
  'ember-light-gallery': {
    plugins: ['thumbnail', 'fullscreen', 'zoom'],
    transitions: true
  }
}
```

| Key           | Type             | Available Values  | Default Value |
| ------------- |:----------------:|:-----------------:|:-------------:|
| plugins       | Array of string  |  ['thumbnail', 'autoplay', 'video', 'fullscreen', 'pager', 'zoom', 'hash', 'share'] | ['thumbnail', 'fullscreen']
| transitions   | Boolean| true, false | true


# Usage documentation

Simple component

```hbs
{{#light-gallery-content as |gallery|}}
  {{gallery.image href="http://my-image1.jpg"}}
  {{gallery.image href="http://my-image2.jpg"}}
  {{gallery.image href="http://my-image3.jpg"}}
{{/light-gallery-content}}
```

With provide collection param
```js
export default Controller.extend({
  images: ['http://my-image1.jpg', 'http://my-image2.jpg', 'http://my-image3.jpg']
})
```

```hbs
{{#light-gallery-content collection=images as |image gallery|}}
  {{gallery.image href=image}}
{{/light-gallery-content}}
```

# Customization

Params is full suported to [lightgallery documentation](http://sachinchoolur.github.io/lightGallery/docs/api.html)

You can provide explicit params to component
```hbs
{{#light-gallery-content collection=images thumbnail=false as |image gallery|}}
  {{gallery.image href=image}}
{{/light-gallery-content}}
```

Or with options param
```js
export default Controller.extend({
  images: ['http://my-image1.jpg', 'http://my-image2.jpg', 'http://my-image3.jpg'],
  options: {thumbnail: false}
})
```
```hbs
{{#light-gallery-content collection=images thumbnail=false as |image gallery|}}
  {{gallery.image href=image}}
{{/light-gallery-content}}
```

You can mixin explicit params and `options` param
```js
export default Controller.extend({
  images: ['http://my-image1.jpg', 'http://my-image2.jpg', 'http://my-image3.jpg'],
  options: { mode: 'lg-zoom-in-out' }
})
```
```hbs
{{#light-gallery-content collection=images thumbnail=false options=options as |image gallery|}}
  {{gallery.image href=image}}
{{/light-gallery-content}}

To do
- [ ] Captions
- [ ] Videos
- [ ] Demo