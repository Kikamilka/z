import animate from "animate";

chai.config.includeStack = true;

describe("Function animate", function () {
    it("should animate without error", function (done) {
        const ANIMATABLES_LIST = [];
        const STARTED = true;
        animate(dt => {
            if (STARTED) {
                ANIMATABLES_LIST.forEach(animatable => animatable(dt));
            }
        });
        done();
    });
});
