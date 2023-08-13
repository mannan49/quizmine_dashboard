import React from "react";

function TodayDate() {
  const currentDate = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
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

  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const month = months[currentDate.getMonth()];

  // Add the appropriate suffix to the dayOfMonth
  const dayOfMonthSuffix = getDayOfMonthSuffix(dayOfMonth);

  const formattedDate = `${dayOfWeek}, ${dayOfMonth}${dayOfMonthSuffix} ${month}`;

  return (
    <div>
      <p>{formattedDate}</p>
    </div>
  );
}

// Function to get the suffix for the day of the month (e.g., 1st, 2nd, 3rd, 4th)
function getDayOfMonthSuffix(day) {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export default TodayDate;
