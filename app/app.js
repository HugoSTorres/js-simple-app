var Posts = require('./collections/posts');
var PostListView = require('./views/post-list');

var posts = new Posts;
posts.fetch({
  success: function(collection, response, options) {
    var postList = new PostListView({ el: '#app', model: collection.toJSON() });
    postList.render();
  },

  error: function(collection, response, options) {
    alert("ERROR");
  }
});
