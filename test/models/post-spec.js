var Post = require('../../app/models/post');

describe("The Post model", function() {
  var post;

  it("should have a blank default title", function() {
    post = new Post();

    expect(post.get('title')).toEqual('');
  });

  it("should have a blank default content", function() {
    post = new Post();

    expect(post.get('content')).toEqual('');
  });
});
