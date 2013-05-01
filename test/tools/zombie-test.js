var Browser = require("zombie");
var assert = require("assert");
var util = require('util');
//var process = require('process');

Browser.debug = false;

browser = new Browser()

//var apiName = "webinos-api-geolocation";
//var pathToHtml = "../jasmine/SpecRunner.html";
//var totalPath = "file:///" + __dirname + "/" + pathToHtml;

var totalPath = "file://" + process.argv[2];

console.log("Visiting: " + totalPath);

browser.visit(totalPath).
  then(function () {
      //assert.ok(browser.success);
      var document = browser.document;
      var results = document.querySelector(".symbolSummary");
      var failed = results.querySelector(".failed");
      var succeeded = results.querySelector(".passed");
      if (failed !== null) {
        console.log("Failed some tests");
        console.log(browser.HTML(".results"));
        return onFailure("Tests failed");
      }
      if (succeeded !== null) {
        console.log("Successfully passed some tests");
      } 
      onSuccess(browser);
  }).
  fail(onFailure);

function onSuccess(browser) {
  browser.close();
  console.log("Successfully completed tests");
  process.exit(0);
}

function onFailure(error) {
  console.log("Test failed: " + error);
  process.exit(-1);
}
