/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
  /* This is our first test suite - a test suite just contains
  * a related set of tests. This suite is all about the RSS
  * feeds definitions, the allFeeds variable in our application.
  */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
    });

    /* A test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('each feed has a url defined', function(){
      allFeeds.forEach(function(feed){
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      });
    });

    /* A test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('each feed has a name defined', function(){
     allFeeds.forEach(function(feed){
       expect(feed.name).toBeDefined();
       expect(feed.name.length).not.toBe(0);
     });
    });
  });

  describe('The menu', function(){
    var $menuIcon, $body;

    beforeEach(function(){
     $menuIcon = $('.menu-icon-link');
     $body = $('body')[0];
    });

    afterEach(function(){
     $menuIcon = null;
     $body = null;
    });

    /* A test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */
    it('is hidden by default', function(){
      expect($body.classList).toContain('menu-hidden');
    });

    /* A test that ensures the menu changes
    * visibility when the menu icon is clicked. This test
    * should have two expectations: does the menu display when
    * clicked and does it hide when clicked again.
    */
    it('should change visibility onclick', function(){
      $menuIcon.trigger('click');
      expect($body.classList).not.toContain('menu-hidden');
      $menuIcon.trigger('click');
      expect($body.classList).toContain('menu-hidden');
    });
  });

  describe('Initial Entries', function(){
    beforeEach(function(done){
      loadFeed(0, done);
    });

    /* A test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */
    it('should have at least a single .entry element ',function(){
     expect($('.feed .entry')[0]).toBeTruthy();
    });
  });

  describe('New Feed Selection', function(){
    var oldFeed;
    beforeEach(function(done){
      loadFeed(1, function(){
        oldFeed = $('.feed')[0].innerHTML;
        loadFeed(2, done);
      });
    });

    /* A test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
    it('should change content', function(){
     expect(oldFeed).not.toEqual($('.feed')[0].innerHTML);
    });
  });
}());
