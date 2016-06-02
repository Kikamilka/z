import drawBackground from "draw-background";
import sinon from "sinon";

chai.config.includeStack = true;

describe("View background", function () {

	it("View background should draw background", function () {
		let canv = document.createElement("canvas");
		let ctx = canv.getContext("2d");
		let mock = sinon.mock(ctx);
		mock.expects("fillRect").withArgs(0, 0, canv.width, canv.height).once();
		drawBackground(ctx, canv);
		mock.verify();
	});
});
