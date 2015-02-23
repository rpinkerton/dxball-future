import constants = require("./constants");

class Paddle {
  /**
   * Current width of the paddle
   */
  width: number;

  /**
   * Current x-position of the left edge of the paddle.
   */
  pos: number;

  constructor() {
    this.width = constants.INITIAL_PADDLE_WIDTH;
    this.pos = constants.SCREEN_WIDTH_PX / 2;
  }

  draw(ctx: CanvasRenderingContext2D, mouse_x: number) {
    var leftEdge = mouse_x - this.width / 2;
    var rightEdge = mouse_x + this.width / 2;

    /* First check to see if we are at the edge of the screen. If we aren't,
       we should update the position */
    if (!(leftEdge < 0 || rightEdge > constants.SCREEN_WIDTH_PX)) {
      this.pos = mouse_x;
    }

    /* Draw the rectangle */
    ctx.beginPath();
    ctx.fillStyle = "skyblue";
    ctx.strokeStyle = "gray";
    ctx.rect(this.pos - this.width / 2, 400, this.width, 20);
    ctx.fill();
    ctx.stroke();
  }
}
export = Paddle;
