import constants = require("./constants");

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

  constructor() {
    this.canvas = <HTMLCanvasElement>document.getElementById(constants.CANVAS_ID);
    this.ctx = this.canvas.getContext("2d");
    this.width = this.canvas.clientWidth;
    this.height = this.canvas.clientHeight;
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

    return game;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.beginPath();
    this.ctx.fillStyle = "skyblue";
    this.ctx.strokeStyle = "gray";
    this.ctx.rect(this.mouse_x, 200, 60, 20);
    this.ctx.fill();
    this.ctx.stroke();
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
