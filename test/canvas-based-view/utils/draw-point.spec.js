import drawPoint from "draw-point";
import Point from "point";
import Vector from "vector";
import PointState from "point-state";

chai.config.includeStack = true;
var sinon = require("sinon");

describe("Draw point", function () {

	it("should draw point", function () {
    let pointState = new PointState(new Point(), new Vector(100, -20));
		var obj = {canvas: document.createElement("canvas"),
			draw: drawPoint};
		let mock = sinon.mock(obj);
		let ctx = obj.canvas.getContext("2d");
		mock.expects("draw").withArgs(ctx, pointState).once();
		obj.draw(ctx, pointState);
		mock.verify();
	});
});
