const chai = require("chai");
const assert = require("chai").assert;
const app = require("../app");

const sumResult1 = app.sum(5, 5);
const sumResult2 = app.sum(-10, 10);

describe("App", function() {
  describe("sum()", function() {
    it("sum should return 10", function() {
      assert.equal(sumResult1, 10);
    });
    it("sum should return 0", function() {
      assert.equal(sumResult2, 0);
    });
  });
});
