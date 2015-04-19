var Backbone = require('backbone');
var $ = require('jquery/dist/jquery');

Backbone.$ = $;

/**
 * Post model
 * title: String
 * content: String
 */
module.exports = Backbone.Model.extend({
  defaults: {
    "title": "",
    "content": ""
  }
});
