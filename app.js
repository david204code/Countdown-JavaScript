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

// functionality to display the year in the HTML
giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}pm`;

// future time in milisecond
const futureTime = futureDate.getTime();
// console.log(futureTime);

// functionality for the countdown subtract the future day to current day
function getRemainingTime() {
  // get current date and time
  const today = new Date().getTime();
  // console.log(today);
  // future time - current time
  const t = futureTime - today;
  // value in minisecond
  // console.log(t);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60minutes
  // 1 day = 24 hours

  // minisecond in 1 day...24(24hours in a day)*60(60 minutes in an hour)*60(60 seconds in 1 minute)*(1000ms in 1s)
  const oneDay = 24 * 60 * 60 * 1000;
  // console.log(oneDay);
  // value of how many minisecond in 1 hour
  const oneHour = 60 * 60 * 1000;
  // value of how many minisecond in 1 minute
  const oneMinute = 60 * 1000;
  // console.log(oneMinute);

  // calculate the value
  let days = t / oneDay;
  // console.log(days);

  days = Math.floor(days);
  // console.log(days);

  let hours = Math.floor((t % oneDay) / oneHour);
  // console.log(hours);

  let minutes = Math.floor((t % oneHour) / oneMinute);
  // console.log(minutes);
  let seconds = Math.floor((t % oneMinute) / 1000);
  // console.log(seconds);

  // set values array
  const values = [days, hours, minutes, seconds];
  // console.log(values);

  // if the value of hour is less than 10 then add 0
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
}

getRemainingTime();
