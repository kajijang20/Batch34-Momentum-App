// Functions for displaying date, time, and greetings

const date = new Date(),
      hr = date.getHours(),
      mins = date.getMinutes(),
      year = date.getFullYear(),
      month = date.getMonth(),
      day = date.getDay(),
      numdate = date.getDate();

function hour() {   // Function for displaying hours
  let hrs = hr;
  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  let clock = hrs;
  document.getElementById("hour").innerText = `${clock}:`;
  let t = setTimeout(function() { hour(); }, 1000);
}

function minute() {   // Function for displaying minutes
  let minuto = mins;
  if (minuto < 10) {
    minuto = "0" + minuto;
  }
  let clock = minuto;
  document.getElementById("minute").innerText = clock;
  let t = setTimeout(function() { minute(); }, 1000);
}

function daydate() {  // Function for displaying day and date
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];
  let displayDate = weekday[day] + " | " + year + " " + months[month] + " " + numdate;
  document.getElementById("wkdate").innerText = displayDate;
}

hour();
minute();
daydate();

export {hr};
