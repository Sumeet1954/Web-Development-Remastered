let h2 = document.querySelector("h2");
let inc = document.querySelector(".btn-inc");
let dec = document.querySelector(".btn-dec");
let det = document.querySelector(".details");

let count = 0;
let curr = 0;

let details = () => {
  let p = document.createElement("p");
  det.appendChild(p);
  p.innerHTML = `The Count is shifted to ${curr} to ${count}`;
  console.log(p);
};

inc.addEventListener("click", () => {
  curr = count;
  count++;
  details();
  h2.innerHTML = count;
});
dec.addEventListener("click", function () {
  curr = count;
  count--;
  details();
  h2.innerHTML = count;
});
