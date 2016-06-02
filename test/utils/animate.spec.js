import animate from "animate";
import sinon from "sinon";

chai.config.includeStack = true;

describe("Function animate", function () {
    it("should be done", function (done) {
        let draw = function () {};
        let spy = sinon.spy(draw);
        // animate(draw);
        // console.log(spy.callCount);
        setTimeout(function () {
            animate(draw);
            if (spy.called) {
                done();
        }
         }, 200);
    });
});
