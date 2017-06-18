var calculator = require("../calculator/calculator")
const {expect} = require("chai");

describe('calculator', function () {
    before(function () {
    });

    describe('#sum', function () {
        it('Should return 4', function () {
            expect(calculator.sum(2,2)).to.be.equal(4);
        });
    })

})