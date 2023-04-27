const form = document.querySelector("form");

const dayInput = document.getElementById("day-inp");
const dayDisplay = document.getElementById("day-dis");

const monthInput = document.getElementById("month-inp");
const monthDisplay = document.getElementById("month-dis");

const yearInput = document.getElementById("year-inp");
const yearDisplay = document.getElementById("year-dis");

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();

const validate = () => {
  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    const parent = input.parentElement;
    if (input.value === "") {
      input.style.borderColor = "hsl(0, 100%, 67%)";
      parent.querySelector("small").innerText = "This field is required";
      parent.querySelector("label").style.color = "hsl(0, 100%, 67%)";
    }
  });

  if (dayInput.value > 31) {
    dayInput.style.borderColor = "hsl(0, 100%, 67%)";
    dayInput.parentElement.querySelector("small").innerText =
      "Must be a valid day";
    dayInput.parentElement.querySelector("label").style.color =
      "hsl(0, 100%, 67%)";
  }

  if (monthInput.value > 12) {
    monthInput.style.borderColor = "hsl(0, 100%, 67%)";
    monthInput.parentElement.querySelector("small").innerText =
      "Must be a valid month";
    monthInput.parentElement.querySelector("label").style.color =
      "hsl(0, 100%, 67%)";
  }

  if (yearInput.value > currentYear) {
    yearInput.style.borderColor = "hsl(0, 100%, 67%)";
    yearInput.parentElement.querySelector("small").innerText =
      "Must not be a future year";
    yearInput.parentElement.querySelector("label").style.color =
      "hsl(0, 100%, 67%)";
  }
};

const calcAge = () => {
  const birthDate = new Date(
    `${monthInput.value} ${dayInput.value} ${yearInput.value}`
  );

  const birthMonth = birthDate.getMonth() + 1;

  let year = currentYear - birthDate.getFullYear();
  let month = currentMonth - birthMonth;
  let day = currentDay - birthDate.getDate();

  if (month < 0 || (month === 0 && day < 0)) {
    year--;
  }

  let deficitMonth;
  if (birthMonth >= currentMonth) {
    deficitMonth = birthMonth - currentMonth;
  } else {
    let remain = currentMonth - birthMonth;
    deficitMonth = 12 - remain;
  }

  let deficitDay = day < 0 ? 30 + day : day;

  yearDisplay.innerText = year;
  monthDisplay.innerText = deficitMonth;
  dayDisplay.innerText = deficitDay;
};

form.addEventListener("submit", (e) => {
  e.preventDefault;

  validate();
  calcAge();

  // if (validate()) {
  //   calcAge();
  // }
});
