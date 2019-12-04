const chai = require("chai");
const assert = require("chai").assert;
const app = require("../app");

const sumResult1 = app.sum(5, 5);

describe("App", function() {
  describe("sum()", function() {
    it("sum should return 10", function() {
      assert.equal(sumResult1, 10);
    });
  });
});
