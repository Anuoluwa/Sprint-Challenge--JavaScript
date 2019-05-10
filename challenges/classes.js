// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMakerClass {
  constructor(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

class cubeMaker extends CuboidMakerClass {
  constructor(attributes) {
    // this is not actually needed is optional, it is for readability
    super(attributes); // this is from the parent
  }
  volume() {
    return this.width ** 3;
  }
  surfaceArea() {
    return 6 * this.width ** 2;
  }
}

const cuboidClass = new CuboidMakerClass({
  length: 4,
  width: 5,
  height: 5
});

const cube = new cubeMaker({
  width: 7
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.volume()); // 343 for cube
console.log(cube.surfaceArea()); // 294 for cube

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
