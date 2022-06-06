const year = document.getElementById("rok");
const monthName = document.getElementById("miesiac");
const dayNumber = document.getElementById("nr-dnia");
const day = document.getElementById("dzien");

const date = new Date();
const month = date.getMonth();

monthName.innerText = date.toLocaleString("pl", {
  month: "long",
});

day.innerText = date.toLocaleString("pl", {
  weekday: "long",
});

dayNumber.innerText = date.getDate();
year.innerText = date.getFullYear();