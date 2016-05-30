import Force from "force";
import Point from "point";
import SpringForce from "spring-force";

chai.config.includeStack = true;

let expect = chai.expect;

describe("SpringForce", function () {
    it("should be Force", function () {
        var pointA = new Point(5);
        var pointB = new Point(10);
        var k = 10;
        var length = 100;
        var springForce = new SpringForce(pointA, pointB, k, length);
        expect(springForce).to.be.an.instanceof(Force);
    });
});
