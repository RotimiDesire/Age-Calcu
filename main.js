const form = document.querySelector("form");

const dayInput = document.getElementById("day-inp");
const dayDisplay = document.getElementById("day-dis");

const monthInput = document.getElementById("month-inp");
const monthDisplay = document.getElementById("month-dis");

const yearInput = document.getElementById("year-inp");
const yearDisplay = document.getElementById("year-dis");

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();

const validate = () => {
  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    const parent = input.parentElement;
    if (input.value === "") {
      input.style.borderColor = "hsl(0, 100%, 67%)";
      parent.querySelector("small").innerText = "This field is required";
      parent.querySelector("p").style.color = "hsl(0, 100%, 67%)";
    }
  });

  if (dayInput.value > 31) {
    dayInput.style.borderColor = "hsl(0, 100%, 67%)";
    dayInput.parentElement.querySelector("small").innerText =
      "Must be a valid day";
    dayInput.parentElement.querySelector("p").style.color = "hsl(0, 100%, 67%)";
  }

  if (monthInput.value > 12) {
    monthInput.style.borderColor = "hsl(0, 100%, 67%)";
    monthInput.parentElement.querySelector("small").innerText =
      "Must be a valid month";
    monthInput.parentElement.querySelector("p").style.color =
      "hsl(0, 100%, 67%)";
  }

  if (yearInput.value > currentYear) {
    yearInput.style.borderColor = "hsl(0, 100%, 67%)";
    yearInput.parentElement.querySelector("small").innerText =
      "Must be a past year";
    yearInput.parentElement.querySelector("p").style.color =
      "hsl(0, 100%, 67%)";
  }
};

const calcAge = () => {
  const birthDate = new Date(
    `${monthInput.value} ${dayInput.value} ${yearInput.value}`
  );

  let year = currentYear - birthDate.getFullYear();
  let month = currentMonth - (birthDate.getMonth() + 1);
  let day = currentDay - birthDate.getDate();

  // console.log(year);
  // console.log(month);
  // console.log(day);

  console.log(birthDate.getFullYear());

  if (month < 0 || (month === 0 && day < 0)) {
    year--;
  }

  let deficitMonth;
  if (currentMonth < birthDate.getMonth() + 1) {
    currentMonth += 12;
    deficitMonth = currentMonth - (birthDate.getMonth() + 1);
  } else {
    deficitMonth = currentMonth - (birthDate.getMonth() + 1);
  }

  // let deficitDay = day < 0 ? 30 + day : day;

  yearDisplay.innerText = year;
  monthDisplay.innerText = deficitMonth;
  dayDisplay.innerText = deficitDay;
};

form.addEventListener("submit", (e) => {
  e.preventDefault;
  validate();
  calcAge();
});
