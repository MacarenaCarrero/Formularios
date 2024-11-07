const formElement = document.getElementById("form");
const numberCvcElement = document.getElementById("numberCvc");
const nameTitularElement = document.getElementById("nameTitular");
const monthCaducityElement = document.getElementById("monthCaducity");
const yearCaducityElement = document.getElementById("yearCaducity");
const numeroPanElement = document.getElementById("numeroPan");

const formInfo = (event) => {
  event.preventDefault();
  const nameUserValue = formElement.nameUser.value;
  const panValue = formElement.pan.value;
  const monthValue = formElement.month.value;
  const yearValue = formElement.year.value;
  const cvcValue = formElement.cvc.value;
};

const printInfo = () => {
  const cvcValue = formElement.cvc.value;
  const nameUserValue = formElement.nameUser.value;
  const panValue = formElement.pan.value;
  const monthValue = formElement.month.value;
  const yearValue = formElement.year.value;

  if (cvcValue === "") {
    numberCvcElement.textContent = "000";
  } else {
    numberCvcElement.textContent = cvcValue;
  }

  if (nameUserValue === "") {
    nameTitularElement.textContent = "Jane Appleseed";
  } else {
    nameTitularElement.textContent = nameUserValue.toUpperCase();
  }

  if (panValue === "") {
    numeroPanElement.textContent = "0000 0000 0000 0000";
  } else {
    numeroPanElement.textContent = panValue;
  }
  if (monthValue === "") {
    monthCaducityElement.textContent = "00";
  } else {
    monthCaducityElement.textContent = monthValue;
  }
  if (yearValue === "") {
    yearCaducityElement.textContent = "/00";
  } else {
    yearCaducityElement.textContent = "/ " + yearValue;
  }
};

formElement.addEventListener("submit", formInfo);
formElement.addEventListener("input", printInfo);
