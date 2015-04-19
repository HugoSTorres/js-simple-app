var Backbone = require('backbone');
var $ = require('jquery/dist/jquery');

var Post = require('../models/post');

Backbone.$ = $;

module.exports = Backbone.Collection.extend({
  url: "/posts",
  model: Post
});
