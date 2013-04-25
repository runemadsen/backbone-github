/* Repo
------------------------------------------------------------------- */

describe("Repo", function() {

  beforeEach(function() {
    API.xhr_fake();
  });

  afterEach(function() {
    API.xhr_restore();
  });

	it("should call correct URL in Repo.fetch()", function()
	{
  	GitHub.Repo.fetch('runemadsen', 'Hello-World');
  	expect(API.xhr_last().url).toEqual("https://api.github.com/repos/runemadsen/Hello-World");
	});

  it("should call correct URL in Repo.fetch() with only full_name", function()
  {
    var r = new GitHub.Repo({full_name:"runemadsen/Hello-World"})
    r.fetch();
    expect(API.xhr_last().url).toEqual("https://api.github.com/repos/runemadsen/Hello-World");
  });

  it("should call correct URL in Repo.fetch() with only url", function()
  {
    var r = new GitHub.Repo({url:"https://api.github.com/repos/runemadsen/Hello-World"})
    r.fetch();
    expect(API.xhr_last().url).toEqual("https://api.github.com/repos/runemadsen/Hello-World");
  });

  it("should call correct URL in Repo.fetch() with only login and name", function()
  {
    var r = new GitHub.Repo({owner:{login:"runemadsen"}, name:"Hello-World"})
    r.fetch();
    expect(API.xhr_last().url).toEqual("https://api.github.com/repos/runemadsen/Hello-World");
  });

  it("should fetch a tree from the given sha", function() {
    var tree;
    var r = Helpers.get_repo();
    r.tree("master", {
      success : function(t) { tree = t }
    })
    expect(API.xhr_last().url).toEqual("https://api.github.com/repos/runemadsen/Hello-World/git/trees/master");
  })

  it("should fetch collaborators", function() {
    var collab;
    var r = Helpers.get_repo();
    r.collaborators({
      success : function(c) { collab = c }
    })
    expect(API.xhr_last().url).toEqual("https://api.github.com/repos/runemadsen/Hello-World/collaborators");
  })

});

describe("GitHub.repo.contents()", function() {

  /*var r;

  beforeEach(function() {
    r = Helpers.get_repo();
  });

  it("should call correct URL in Repo.contents()", function()
  {
    API.xhr_fake();
    r.contents("master", "docs/hello.txt")
    expect(API.xhr_last().url).toEqual("https://api.github.com/repos/runemadsen/Hello-World/contents/docs/hello.txt?ref=master");
    API.xhr_restore();
  });

  it("should return GitHub.File in Repo.contents()", function()
  {
    API.server_fake();
    API.server.respondWith("get", "https://api.github.com/repos/runemadsen/Hello-World/contents/docs/hello.txt?ref=master", [200, {}, to_s(GitHubObjects.contents.show.file)]);
    var result;
    r.contents("master", "docs/hello.txt", {
      success : function(o) { result = o; }
    });
    API.server.respond();
    expect(result.backboneClass).toBe("File")
  });

  it("should return GitHub.Dir in Repo.contents()", function()
  {
  });

  it("should call options success callback on success", function()
  {

  });

  it("should preserve options attributes to add to ajax call", function()
  {

  });*/

});