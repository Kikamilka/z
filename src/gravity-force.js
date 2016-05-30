import Force from "force";
import Vector from "vector";
/**
 * TODO Implement GravityForce = m*g
 */
const G = Symbol();
export default class GravityForce extends Force {
    constructor() {
        super();
        this[G] = new Vector(0, 1);
    }

    f(pointState) {
        return this[G].mul(pointState.point.m);
    }
}
