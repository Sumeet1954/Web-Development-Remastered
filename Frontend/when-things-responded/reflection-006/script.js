let piano = document.querySelector(".piano");
const letter = [
  "C",
  "D",
  "E",
  "F",
  "G",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

letter.forEach((val) => {
  let button = document.createElement("button");
  button.innerHTML = val;
  button.classList.add("wt-btn");
  piano.appendChild(button);
});

// Functinality
const keyMap = {
  z: 28,
  x: 29,
  c: 30,
  v: 31,
  b: 32,
  n: 33,
  m: 34,
  a: 35,
  s: 36,
  d: 37,
  f: 38,
  g: 39,
  h: 40,
  j: 41,
  k: 42,
  l: 43,
  q: 44,
  w: 45,
  e: 46,
  r: 47,
  t: 48,
  y: 49,
  u: 50,
  i: 51,
  o: 52,
  p: 53,
};

const keyNoteMap = {
  z: 1,
  x: 2,
  c: 3,
  v: 4,
  b: 5,
  n: 6,
  m: 7,
  a: 8,
  s: 9,
  d: 10,
  f: 11,
  g: 12,
  h: 13,
  j: 14,
  k: 15,
  l: 16,
  q: 17,
  w: 16,
  e: 1,
  r: 2,
  t: 3,
  y: 4,
  u: 5,
  i: 6,
  o: 7,
  p: 8,
};

document.body.addEventListener("keydown", (det) => {
  let pressedKey = det.key.toLowerCase();

  let audio = new Audio(`./Sound-pack/${keyMap[pressedKey]}.mp3`);
  audio.play();
  let button = document.querySelector(
    `.piano button:nth-child(${keyNoteMap[pressedKey]})`,
  );
  button.classList.add("active");
  setTimeout(() => button.classList.remove("active"), 100);
});



// Listen for clicks
document.querySelectorAll(".wt-btn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let audio = new Audio(`./Sound-pack/${index+27}.mp3`);
    audio.play();
    btn.classList.add("active");
    setTimeout(() => btn.classList.remove("active"), 100);
  });
});
