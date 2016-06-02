import drawPoint from "draw-point";
import Point from "point";
import Vector from "vector";
import PointState from "point-state";

chai.config.includeStack = true;
var sinon = require("sinon");

describe("View point", function () {
	let pointState;

	beforeEach(function () {
		pointState = new PointState(new Point(), new Vector(100, -20));
	});
	
	it("View point should draw point", function () {		
		let canv = document.createElement("canvas");
		let ctx = canv.getContext("2d");
		let mock = sinon.mock(ctx);
		mock.expects("stroke").withArgs().once();
		drawPoint(ctx, canv, pointState);
		mock.verify();
	});
});
