let hour = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

setInterval(() => {
  const now = new Date();
  document.documentElement.style.setProperty(
    "--sec",
    now.getSeconds() * 6 - 89 + "deg",
  );
  document.documentElement.style.setProperty(
    "--min",
    now.getMinutes() * 6 - 89 + "deg",
  );
  document.documentElement.style.setProperty(
    "--hour",
    now.getHours() > 12
      ? (now.getHours() - 12) * 30 - 90 + "deg"
      : now.getHours() * 30 - 90 + "deg",
  );

  console.log(now.getMinutes());
}, 1000);
