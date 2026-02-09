var main = document.querySelector("main");
var btn = document.querySelector(".button-92");

// btn.addEventListener("mouseover", () => {
//   let x = Math.random() * 90;
//   let y = Math.random() * 90;

//   //   colors
//   let r = Math.floor(Math.random() * 256);
//   let g = Math.floor(Math.random() * 256);
//   let b = Math.floor(Math.random() * 256);
//   btn.style.position = "absolute";
//   btn.style.top = x + "%";
//   btn.style.left = y + "%";
//   btn.style.rotate = x + "deg";
//   main.style.backgroundColor = `rgb(${r},${g},${b})`;
// });

btn.addEventListener("click", () => {
  let div = document.createElement("div");
  main.appendChild(div);
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  div.style.background = `rgb(${r},${g},${b})`;

  let x = Math.random() * 90;
  let y = Math.random() * 90;
  div.style.position = "absolute";
  div.style.top = x + "%";
  div.style.left = y + "%";
  div.style.height = "120px";
  div.style.width = "120px";
  div.style.zIndex = -1;
});
