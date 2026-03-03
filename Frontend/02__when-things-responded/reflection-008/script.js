let main = document.querySelector("main");
let cursor = document.querySelector("#cursor");
document.body.style.cursor = "none";

addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
  cursor.style.left = e.x + "px";
  cursor.style.top = e.y + 180 + "px";
  cursor.style.rotate = 340 + "deg";
});

document.addEventListener("mousemove", (e) => {});
