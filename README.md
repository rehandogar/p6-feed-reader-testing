# p6-feed-reader-testing

In this project, my task is to write a number of tests against a given web-based application that reads RSS feeds. The project uses [Jasmine](https://jasmine.github.io/) to test the underlying logic of the application as well as DOM manipulation and asynchronous function testing. The live demo of this project is available [here](https://rehanumar.github.io/p6-feed-reader-testing/index.html). (it's dependent on 3rd party apis like jsapi of google)

## How to run the application
* Download the repository as zip file in your computer or fork it
* Run local server

## Brief explanation of tests
1. Make sure that the `allFeeds` variable has been defined and that it is not empty.
2. Make sure that each object in `allFeeds` array has a URL defined and that the URL is not empty.
3. Make sure that each object in `allFeeds` array has a name defined and that the name is not empty.
4. Make sure that the menu element is hidden by default. I will have to analyze the HTML and the CSS to determine how the application is performing the hiding/showing of the menu element.
5. Make sure that the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
6. Make sure that when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed container`. As, `loadFeed()` is asynchronous so this test will require the use of Jasmine's `beforeEach` and asynchronous `done()` function.
7. Make sure that when a new feed is loaded by the `loadFeed` function that the content actually changes.

## Questions?
If you have any questions, then don't hesitate to email me (rehanumardogar[at]gmail.com)
