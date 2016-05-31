import Force from "force";
import Point from "point";
import Vector from "vector";
import PointSystem from "points-system";
import PointState from "point-state";
import SpringForce from "spring-force";
import SoftBoxForce from "soft-box-force";
import GravityForce from "gravity-force";
import DissipativeForce from "dissipative-force.js";

chai.config.includeStack = true;

let expect = chai.expect;

describe("SpringForce", function() {

    it("should be Force", function() {
        var pointA = new Point(5);
        var pointB = new Point(10);
        var k = 10;
        var length = 100;
        var springForce = new SpringForce(pointA, pointB, k, length);
        expect(springForce).to.be.an.instanceof(Force);
    });

    it("should have same to state's velocity direction", function() {
        var pointA = new Point(5);
        var pointB = new Point(10);
        var k = 10;
        var length = 100;
        var springForce = new SpringForce(pointA, pointB, k, length);
        var state1 = new PointState(pointA, new Vector(0, 0)).moveBy(new Vector(10, -10), 1);
        var state2 = new PointState(pointB, new Vector(0, 0)).moveBy(new Vector(-5, 7), 1);
        var gravityForce = new GravityForce();
        var softBoxForce = new SoftBoxForce();
        var pSys = new PointSystem([state1, state2],
        	[softBoxForce, gravityForce]);
        var f = springForce.f(state1, pSys);
        expect(f.x(0)).to.be.above(0);
        expect(f.x(1)).to.be.below(0);

        pSys = new PointSystem([state1, state2],
        	[softBoxForce, gravityForce]);
        f = springForce.f(state2, pSys);
        expect(f.x(0)).to.be.below(0);
        expect(f.x(1)).to.be.above(0);
    });
});