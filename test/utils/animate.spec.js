import animate from "animate";
import PointsSystem from "points-system";
import PointState from "point-state";
import Point from "point";
import SoftBoxForce from "soft-box-force";

chai.config.includeStack = true;

describe("Function animate", function() {
    it("should animate without error", function(done) {
        let pointState = new PointState(new Point(10));
        let softBoxForce = new SoftBoxForce();
        let pointsSystem = new PointsSystem([pointState], [softBoxForce]);
        let animatablesList = [
            dt => pointsSystem.evolve(Math.min(0.1, dt)),
            dt => pointsSystem.evolve(Math.min(0.5, dt))
        ];
        setTimeout(function() {
            animate(dt =>
                animatablesList.forEach(animatable => animatable(dt)), done()
            );
        }, 200);
    });
});