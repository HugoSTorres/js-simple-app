var Backbone = require('backbone');
var Handlebars = require('handlebars');
var $ = require('jquery/dist/jquery');

var PostView = require('./post');

Backbone.$ = $;

module.exports = Backbone.View.extend({
  render: function() {
    this.model.forEach(function(post) {
      p = new PostView({ model: post });

      this.$el.append(p.render());
    }.bind(this));
  }
});
