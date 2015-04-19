var Backbone = require('backbone');
var Handlebars = require('handlebars');
var $ = require('jquery/dist/jquery');
var fs = require('fs');

Backbone.$ = $;

postTemplate = fs.readFileSync('./app/templates/post.hbs');

module.exports = Backbone.View.extend({
  template: Handlebars.compile(postTemplate.toString()),

  render: function() {
    this.$el.html(this.template(this.model));

    return this;
  }
});
