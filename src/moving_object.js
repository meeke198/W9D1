function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
};

MovingObject.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
    ctx.fillStyle = 'gray';
    ctx.fill();
};

MovingObject.prototype.move = function(ctx) {
    // debugger
    const dY = this.vel[1];
    const dX = this.vel[0];
    // debugger
    this.pos = [this.pos[0] + dX, this.pos[1] + dY];
    // debugger
};


module.exports = MovingObject;

