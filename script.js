//This is a Age calculator which calculate the age with years, months and days.

//Method to get input from user.
const getInput = function () {
  return {
    birthMonth: document.getElementById("birth__month").value,
    birthDate: document.getElementById("birth__date").value,
    birthYear: document.getElementById("birth__year").value,
    currentMonth: document.getElementById("current__month").value,
    currentDate: document.getElementById("current__date").value,
    currentYear: document.getElementById("current__year").value,
  };
};

//All the selected elements.
const result = document.querySelector(".results");
const button = document.querySelector(".btn");

const allResult = document.querySelector(".data");

//Method to calculate years.
const yearCalc = function (cYear, bYear) {
  return cYear - bYear;
};

//Method to calculate months.
const monthCalc = function (cMonth, bMonth) {
  if (cMonth >= bMonth) {
    return cMonth - bMonth;
  } else {
    return bMonth - cMonth;
  }
};

//Method to calculate days.
const dateCalc = function (cDate, bDate) {
  if (cDate >= bDate) {
    return cDate - bDate;
  } else {
    return bDate - cDate;
  }
};

//Call back function which displays the result.
const results = function () {
  const inputs = getInput();
  const year = Math.abs(yearCalc(inputs.currentYear, inputs.birthYear));
  const month = Math.abs(monthCalc(inputs.currentMonth, inputs.birthMonth));
  const date = Math.abs(dateCalc(inputs.currentDate, inputs.birthDate));

  result.style.display = "block";
  button.innerHTML = `click on me to get the results 😲`;
  allResult.innerHTML = `You're ${year} years, ${month} months and ${date} days old  😃`;
};

//All the event listeners.
button.addEventListener(
  "mouseout",
  (_) => (button.innerHTML = `click on me to get the results 😊`)
);
button.addEventListener(
  "mouseover",
  (_) => (button.innerHTML = `click on me to get the results 😀`)
);
button.addEventListener("click", results);
