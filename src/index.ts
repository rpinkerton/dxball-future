export function initGame(): void {
  var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("dxball-canvas");

  var context = canvas.getContext("2d");
  context.rect(20, 20, 150, 100);
  context.stroke();
}

