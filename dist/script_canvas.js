const dibujo = document.getElementById("mi_canvas");
const c = dibujo.getContext("2d");
var isDrawing = false;

function draw(x, y) {

    c.fillStyle = `rgb(
        ${Math.floor(255 - x/2.6)},
        ${Math.floor(255 - y*3)},
        0)`;

  if (isDrawing) {
    c.beginPath();
    c.arc(x, y, 5, 0, Math.PI * 2);
    c.closePath();
    c.fill();
  }
}

dibujo.addEventListener("mousemove", (event) =>
  draw(event.offsetX, event.offsetY)
);
dibujo.addEventListener("mousedown", () => (isDrawing = true));
dibujo.addEventListener("mouseup", () => (isDrawing = false));

document
  .getElementById("mi_arte")
  .addEventListener(
    "click",
    (event) => (event.target.href = dibujo.toDataURL())
  );