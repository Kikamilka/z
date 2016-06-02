import drawSpringForce from "draw-spring-force";
import SpringForce from "spring-force";
import Point from "point";
import PointState from "point-state";
import PointsSystem from "points-system";
import Vector from "vector";

chai.config.includeStack = true;
var sinon = require("sinon");

describe("View spring force", function () {
	let pointsSystem;
	let springForce;

	beforeEach(function () {
		let pointA = new Point();
		let pointB = new Point(20);
    springForce = new SpringForce(pointA, pointB);
		pointsSystem = new PointsSystem([new PointState(pointA), 
			new PointState(pointB, new Vector(0, 100))], [springForce]);
	});

	it("View spring force should draw spring force", function () {		
		let ctx = document.createElement("canvas").getContext("2d");
		let mock = sinon.mock(ctx);
		mock.expects("moveTo").once();
		drawSpringForce(ctx, pointsSystem, springForce);
		mock.verify();
	});
});
