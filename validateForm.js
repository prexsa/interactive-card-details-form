document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("cardName");
    const number = document.getElementById("cardNumber");
    const month = document.getElementById("month");
    const year = document.getElementById("year");
    const cvc = document.getElementById("cvc");

    name.addEventListener("focus", function () {
      const errorElement = document.getElementsByClassName("cardName-error")[0];
      errorElement.style.display = "none";
    });

    number.addEventListener("focus", function () {
      const errorElement =
        document.getElementsByClassName("cardNumber-error")[0];
      errorElement.style.display = "none";
    });

    month.addEventListener("focus", function () {
      const errorElement = document.getElementsByClassName("month-error")[0];
      errorElement.style.display = "none";
    });

    year.addEventListener("focus", function () {
      const errorElement = document.getElementsByClassName("year-error")[0];
      errorElement.style.display = "none";
    });

    cvc.addEventListener("focus", function () {
      const errorElement = document.getElementsByClassName("cvc-error")[0];
      errorElement.style.display = "none";
    });

    if (name.value === "") {
      const errorElement = document.getElementsByClassName("cardName-error")[0];
      errorElement.style.display = "block";
    }
    if (number.value === "") {
      const errorElement =
        document.getElementsByClassName("cardNumber-error")[0];
      errorElement.style.display = "block";
    }
    if (month.value === "") {
      const errorElement = document.getElementsByClassName("month-error")[0];
      errorElement.style.display = "block";
    }
    if (year.value === "") {
      const errorElement = document.getElementsByClassName("year-error")[0];
      errorElement.style.display = "block";
    }
    if (cvc.value === "") {
      const errorElement = document.getElementsByClassName("cvc-error")[0];
      errorElement.style.display = "block";
    }
    if (name.value !== "") {
      validateName(name.value);
    }
    if (number.value !== "") {
      validateCardNumber(number.value);
    }
    if (month.value !== "") {
      validateMonth(month.value);
    }
    if (year.value !== "") {
      validateYear(year.value);
    }
    if (cvc.value !== "") {
      validateCvc(cvc.value);
    }
    if (
      validateName(name) &&
      validateCardNumber(number) &&
      validateMonth(month) &&
      validateYear(year) &&
      validateCvc(cvc)
    ) {
      window.location.replace("/success.html");
    }
  });
});

function validateName(name) {
  // name should not have numbers
  const value = name.value;
  if (value === "") return;
  if (!isNaN(value)) {
    setErrorToFormField("cardName", "Name may not contain numbers");
    return false;
  }
  return true;
}

function validateCardNumber(name) {
  // card should not have alphabets
  const value = name.value;
  if (value === "") return;
  if (isNaN(value)) {
    setErrorToFormField("cardNumber", "Card number may not contain alphabets");
    return false;
  }

  return true;
}

function validateMonth(name) {
  const value = name.value;
  if (value === "") return;
  if (isNaN(value)) {
    setErrorToFormField("month", "Month may not contain alphabets");
    return false;
  }
  const num = Number(value);

  if (num == 0) {
    setErrorToFormField("month", "A month can't be less than 1");
    return false;
  } else if (num > 12) {
    setErrorToFormField("month", "A month can't be greater than 12");
    return false;
  }
  return true;
}

function validateYear(name) {
  const value = name.value;
  if (value === "") return;
  if (isNaN(value)) {
    setErrorToFormField("year", "Year may not contain alphabets");
    return false;
  }
  const date = new Date();
  const year = date.getFullYear().toString().substr(-2);
  const num = Number(value);
  if (num < year) {
    setErrorToFormField("year", "Year can't be less than current year");
    return false;
  }
  return true;
}

function validateCvc(name) {
  const value = name.value;
  if (value === "") return;
  if (isNaN(value)) {
    setErrorToFormField("cvc", "CVC may not contain alphabets");
    return false;
  }
  return true;
}

function setErrorToFormField(name, errorMessage) {
  const errorElement = document.getElementsByClassName(`${name}-error`)[0];
  errorElement.style.display = "block";
  errorElement.innerHTML = errorMessage;
}
