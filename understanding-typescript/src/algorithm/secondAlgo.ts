// Write a JavaScript program to get the volume of a Cylinder
// with four decimal places using object classes.
//Volume of a cylinder : V = πr2h
// Where r is the radius and h is the height of the cylinder.

class Cylinder {
    radius: number;
    height: number;

    constructor(rad: number, height: number) {
        this.radius = rad;
        this.height = height;
    }

    getVolume(r: number = this.radius, h: number = this.height): number {
        const volume = 2 * Math.PI * r * h;
        return Number(volume.toFixed(4));
    }
}

const cylinder = new Cylinder(5, 2);

console.log(cylinder.getVolume());
