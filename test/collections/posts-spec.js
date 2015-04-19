var Posts = require('../../app/collections/posts');

describe("The Posts collection", function() {
  var posts;

  it("should have the url: /posts", function() {
    posts = new Posts();

    expect(posts.url).toEqual('/posts');
  });

  it("should fetch data", function() {
    server = sinon.fakeServer.create();

    server.respondWith("GET", "/posts",
    [200, { "Content-Type": "application/json" }, JSON.stringify(
    [{
      "title": "Test Post 1",
      "content": "This is a test."
    }, {
      "title": "Test Post 2",
      "content": "This is another test."
    }, {
      "title": "Test Post 3",
      "content": "This is a third test."
    }]
    )]);

    posts = new Posts();
    posts.fetch();
    server.respond();

    expect(posts.length).toEqual(3);
  });
});
