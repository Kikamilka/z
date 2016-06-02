import CanvasBasedView from "canvas-based-view";
import Vector from "vector";
import Point from "point";
import PointState from "point-state";
import PointsSystem from "points-system";
import SpringForce from "spring-force";
import GravityForce from "gravity-force";

chai.config.includeStack = true;
var sinon = require("sinon");

describe("Draw canvas view", function () {

	it("should draw ", function () {
		let canvas = document.createElement("canvas");
		let pointStateA = new PointState(new Point(20)),
			pointStateB = new PointState(new Point(), new Vector(0, 100));
		let springAB = new SpringForce(new Point(20), new Point());
		let gravityForce = new GravityForce();
		let pointsSystem = new PointsSystem([pointStateA, pointStateB],
			[springAB, gravityForce]);
		let canvasBasedView = new CanvasBasedView(canvas, pointsSystem);

		var obj = {canvas: canvasBasedView.canvas,
			pointsSystem: canvasBasedView.pointsSystem,
			draw: canvasBasedView.draw};
		let mock = sinon.mock(obj);
		mock.expects("draw").once();
		obj.draw();
		mock.verify();
	});
});
