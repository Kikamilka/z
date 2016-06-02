import drawSpringForce from "draw-spring-force";
import SpringForce from "spring-force";
import Point from "point";

chai.config.includeStack = true;
var sinon = require("sinon");

describe("Draw Spring force", function () {

	it("should draw spring force", function () {
    let springForce = new SpringForce(new Point(20), new Point(5));
		var obj = {canvas: document.createElement("canvas"),
			draw: drawSpringForce};
		let mock = sinon.mock(obj);
		let ctx = obj.canvas.getContext("2d");
		mock.expects("draw").withArgs(ctx, springForce).once();
		obj.draw(ctx, springForce);
		mock.verify();
	});
});
