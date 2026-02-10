let btn = document.querySelector(".data button");
let h2 = document.querySelector(".data h2");
let inner = document.querySelector(".inner");
let main = document.querySelector("main");
let p = document.createElement("p");

btn.addEventListener("click", () => {
  let time = 50 + Math.floor(Math.random() * 100);
  let a = 0;

  const intr = setInterval(() => {
    a++;
    inner.style.width = a + "%";
    h2.innerHTML = a + "%";
    p.innerHTML = `Downloaded in ${time / 10} seconds.`;
    p.style.fontSize = `2rem`
    p.style.paddingTop = `3rem`
  }, time);

  setTimeout(() => {
    clearInterval(intr);
    main.appendChild(p);
  }, time * 100);
});
