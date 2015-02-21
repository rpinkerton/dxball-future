import constants = require("./constants");

export class Paddle {
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

    // TODO: Change this.
    this.pos = 0;
  }
}
