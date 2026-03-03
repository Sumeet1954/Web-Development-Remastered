let input = document.querySelector("#guessInput");
let num = 0;
let btn = document.querySelector(".button-30");
let flag = document.querySelector(".flags img");
let det1 = document.querySelector(".flags h2");
let det2 = document.querySelector(".flags h6");
let main = document.querySelector("main");
let h1 = document.querySelector("main > h1");

const t20WorldCupTeams = [
  {
    name: "India",
    imgSrc:
      "https://i.pinimg.com/736x/b3/74/0c/b3740c2ab8059b6892545a61d4f8ca4b.jpg",
    trophies: 2,
    color: "#1C2C5B", // India Blue
  },
  {
    name: "Australia",
    imgSrc:
      "https://i.pinimg.com/1200x/62/2b/89/622b892bb6997df9ac5e5490b4876c33.jpg",
    trophies: 1,
    color: "#FECB00", // Australia Gold
  },
  {
    name: "England",
    imgSrc:
      "https://i.pinimg.com/1200x/63/62/fc/6362fc39ed62983d425be1dd0e635c0b.jpg",
    trophies: 2,
    color: "#00247D", // England Navy Blue
  },
  {
    name: "West Indies",
    imgSrc:
      "https://i.pinimg.com/736x/82/80/e5/8280e5b5b3306bc2dd0d073b92c7b42a.jpg",
    trophies: 2,
    color: "#7A0026", // Maroon
  },
  {
    name: "Sri Lanka",
    imgSrc:
      "https://i.pinimg.com/1200x/cf/a5/8b/cfa58b96d642ce0e44dc6ce08b842334.jpg",
    trophies: 1,
    color: "#0033A0", // Sri Lanka Blue
  },
  {
    name: "New Zealand",
    imgSrc:
      "https://i.pinimg.com/1200x/52/db/25/52db25e11b15633151d48a0927c7a0f9.jpg",
    trophies: 0,
    color: "#000000", // Black Caps
  },
  {
    name: "South Africa",
    imgSrc:
      "https://i.pinimg.com/1200x/d5/71/9c/d5719c3df0dc5f4c4957106b705f1ed8.jpg",
    trophies: 0,
    color: "#006644", // Proteas Green
  },
  {
    name: "Afghanistan",
    imgSrc:
      "https://i.pinimg.com/736x/18/03/27/180327475182f57fe33a4f9f6179b2d9.jpg",
    trophies: 0,
    color: "#D32011", // Afghanistan Red
  },
  {
    name: "Nepal",
    imgSrc:
      "https://i.pinimg.com/736x/0e/9c/47/0e9c476ba66185456d51ec1c87b788e8.jpg",
    trophies: 0,
    color: "#DC143C", // Nepal Crimson
  },
  {
    name: "Scotland",
    imgSrc:
      "https://i.pinimg.com/1200x/16/95/cf/1695cf9749d461c8d9fa3ab0d1724656.jpg",
    trophies: 0,
    color: "#005EB8", // Scotland Blue
  },
];

let count = 0;
btn.addEventListener("click", () => {
  num = Number(input.value);
  if (!num || num <= 0) {
    alert("Please enter a valid number");
    return;
  }

  let rand = Math.floor(Math.random() * t20WorldCupTeams.length);
  flag.src = t20WorldCupTeams[rand].imgSrc;
  det1.innerHTML = t20WorldCupTeams[rand].name;
  det2.innerHTML = `Trophies: ${t20WorldCupTeams[rand].trophies}`;
  main.style.backgroundColor = `${t20WorldCupTeams[rand].color}`;
  count++;
  if (count === num) {
    h1.innerHTML = `🏆 Winner is ${t20WorldCupTeams[rand].name}!`;
    h1.classList.add("winner");
  }
});

btn.addEventListener("click", () => {
  btn.innerHTML = "Guess";
});
