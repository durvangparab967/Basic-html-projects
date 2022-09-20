let header = document.querySelector("h1");
let parentDiv = document.querySelector(".parent");

const digitalClock = () => {
  const dateObj = new Date();
  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();
  let seconds = dateObj.getSeconds();

  if (+hours <= 9) {
    hours = `0${hours}`;
  }
  if (+minutes <= 9) {
    minutes = `0${minutes}`;
  }
  if (+seconds <= 9) {
    seconds = `0${seconds}`;
  }

  header.innerHTML = `${hours}:${minutes}:${seconds}`;

};
setInterval(digitalClock,1000);
