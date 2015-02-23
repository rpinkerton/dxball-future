import constants = require("./constants");
import Paddle = require("./paddle");

class Game {

  /**
   * The canvas element.
   */
  canvas: HTMLCanvasElement;

  /**
   * A 2d context for the canvas.
   */
  ctx: CanvasRenderingContext2D;

  /**
   * Width of the canvas in pixels.
   */
  width: number;

  /**
   * Height of the canvas in pixels.
   */
  height: number;

  /**
   * Current x position of the mouse.
   */
  mouse_x: number;

  /**
   * Current y position of the mouse.
   */
  mouse_y: number;

  /**
   * The paddle game object that the user controls.
   */
  paddle: Paddle;

  constructor() {
    this.canvas = <HTMLCanvasElement>document.getElementById(constants.CANVAS_ID);
    this.ctx = this.canvas.getContext("2d");
    this.width = this.canvas.clientWidth;
    this.height = this.canvas.clientHeight;
    this.paddle = new Paddle();
  }

  /**
   * Initialize a new Game instance and set up required event listeners.
   *
   * @returns {Game}
   */
  static init() {
    var game = new Game();

    game.canvas.addEventListener("mousemove", game.storeMousePosition.bind(game), false);

    setInterval(game.draw.bind(game), constants.INITIAL_INTERVAL_MS);

    game.canvas.style.cursor = "none";

    return game;
  }

  draw() {
    /* Clear the screen for redraw */
    this.ctx.clearRect(0, 0, this.width, this.height);

    /* Draw the paddle */
    this.paddle.draw(this.ctx, this.mouse_x);
  }

  /**
   * Store the mouse position for later use.
   * Clamp values to be within the canvas width/height.
   *
   * @param event
   */
  storeMousePosition(event: MouseEvent) {
    this.mouse_x = Math.min(event.clientX, this.width);
    this.mouse_y = Math.min(event.clientY, this.height);
  }
}
export = Game;
