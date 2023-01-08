"use strict";
class Cylinder {
    constructor(rad, height) {
        this.radius = rad;
        this.height = height;
    }
    getVolume(r = this.radius, h = this.height) {
        const volume = 2 * Math.PI * r * h;
        return Number(volume.toFixed(4));
    }
}
const cylinder = new Cylinder(5, 2);
console.log(cylinder.getVolume());
//# sourceMappingURL=secondAlgo.js.map