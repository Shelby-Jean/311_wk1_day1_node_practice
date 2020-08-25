// import moment here; use this package in each function
let moment = require('moment'); // require
moment().format(); 


const today = () => {
  // write code for dates.today
  let day = moment().format("dddd");
  return day;

}

const calendar = () => {
  // write code for dates.calendar
  let date = moment().format("MMM DD, YYYY");
  return date;
}

const currentTime = () => {
  // write code for dates.currentTime
  let time = moment().format("hh:mm:ss A")
  return time;
}

module.exports = {
  today,
  calendar,
  currentTime
}