const MovingObject = require("./moving_object");
const { inherits, randomVec } = require("./utils");

// const DEFAULT = {
//     COLOR = '';
//     RADIUS = ;
// }
function Asteroid(pos) {
   MovingObject(options);
   this.pos = pos;
    this.color = options.color;
    this.radius = options.radius;
    this.vel = randomVec(10);
};
inherits(Asteroid, MovingObject);