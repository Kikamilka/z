import drawBackground from "draw-background";

chai.config.includeStack = true;
var sinon = require("sinon");

describe("Draw background", function () {

	it("should draw background", function () {
		var obj = {canvas: document.createElement("canvas"),
		draw: drawBackground};
		let mock = sinon.mock(obj);
		let ctx = obj.canvas.getContext("2d");
		mock.expects("draw").withArgs(ctx).once();
		obj.draw(ctx);
		mock.verify();
	});
});
