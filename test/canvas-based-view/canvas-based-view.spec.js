import CanvasBasedView from "canvas-based-view";
import Vector from "vector";
import Point from "point";
import PointState from "point-state";
import PointsSystem from "points-system";
import SpringForce from "spring-force";
import GravityForce from "gravity-force";

chai.config.includeStack = true;
var sinon = require("sinon");

describe("Canvas based view", function () {
	let pointsSystem;
	let springForce;

	beforeEach(function () {
		let pointA = new Point();
		let pointB = new Point(20);
    springForce = new SpringForce(pointA, pointB);
		pointsSystem = new PointsSystem([new PointState(pointA), 
			new PointState(pointB, new Vector(0, 100))], [springForce]);		
	});

	it("Canvas based view should draw", function () {
		let canv = document.createElement("canvas");
		let canvasBasedView = new CanvasBasedView(canv, pointsSystem);
		let ctx = canv.getContext("2d");
		let mock = sinon.mock(ctx);
		mock.expects("fillRect").once();		
		mock.expects("arc").twice();
		mock.expects("moveTo").once();
		canvasBasedView.draw();
		mock.verify();
	});
});
