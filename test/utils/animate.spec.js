import animate from "animate";
import sinon from "sinon";

var EventEmitter = require("events").EventEmitter;

chai.config.includeStack = true;

describe("Function animate", function () {
    it("should be done", function () {
        let spy = sinon.spy();
        let emitter = new EventEmitter();
        emitter.on(animate, spy);
        emitter.emit(animate);
        spy.called.should.equal.true;
    });
});
