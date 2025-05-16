//ball.js
class Ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.vx = -1;
    this.vy = 1;
    this.ax = 0;
    this.ay = 0;
    this.r = r;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }

  wall() {
    if (this.x < this.r) {
      this.x = this.r;
      this.vx *= -1;
    } else if (this.x > width - this.r) {
      this.x = width - this.r;
      this.vx *= -1;
    }
    if (this.y > height - this.r) {
      this.y = height - this.r;
      this.vy *= -1;
    }
  }

  render() {
    noStroke();
    fill('black');
    circle(this.x, this.y, 2 * this.r);
  }
}
