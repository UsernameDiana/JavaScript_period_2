//var expect = require("chai").expect;
const {expect} = require("chai");

describe("Testing async behaviour", function () {
    var foo = false;
    before(function (done) {
        setTimeout(function () {
            foo = true;
            done();  //signals to mocha
        }, 1000);
    });

    it("should pass (with done called)", function () { // handles asyncronus code
        expect(foo).to.equal(true);
    });
});   