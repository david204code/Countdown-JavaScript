const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// select the html elements
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
// console.log(items);

// date= year/months(0 index based), date, hours, minutes, seconds
let futureDate = new Date(2021, 5, 01, 18, 10, 0);
// console.log(futureDate);

// extract the year
const year = futureDate.getFullYear();
// extract the hours
const hours = futureDate.getHours();
// extract the minutes
const minutes = futureDate.getMinutes();
// month 0 index based
let month = futureDate.getMonth();
// console.log(months[month]);
month = months[month];
// extract date
const date = futureDate.getDate();
// console.log(date);
// day...getDate 0 to 6 Sunday===0
const weekday = weekdays[futureDate.getDay()];
// console.log(weekdays[weekday]);

// functionality to update the year in the HTML
giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}pm`;
