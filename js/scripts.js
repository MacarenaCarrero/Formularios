const formElement = document.getElementById("form");
const numberCvcElement = document.getElementById("numberCvc");
const nameTitularElement = document.getElementById("nameTitular");
const monthCaducityElement = document.getElementById("monthCaducity");
const yearCaducityElement = document.getElementById("yearCaducity");
const numeroPanElement = document.getElementById("numeroPan");
const name1Element = document.getElementById("name1");
const numberElement = document.getElementById("number");
const fechaElement = document.getElementById("fecha");
const cvcElement = document.getElementById("cvc");
const fecha2Element = document.getElementById("fecha2");
const buttonConfirmElement = document.getElementById("buttonConfirm");

const formInfo = (event) => {
  event.preventDefault();
  const nameUserValue = formElement.nameUser.value;
  const panValue = formElement.pan.value;
  const monthValue = formElement.month.value;
  const yearValue = formElement.year.value;
  const cvcValue = formElement.cvc.value;

  if (nameUserValue === "") {
    name1Element.classList.add("borderRed");
  } else {
    name1Element.classList.remove("borderRed");
  }

  if (panValue === "") {
    numberElement.classList.add("borderRed");
  } else {
    numberElement.classList.remove("borderRed");
  }
  if (monthValue === "") {
    fechaElement.classList.add("borderRed");
  } else {
    fechaElement.classList.remove("borderRed");
  }
  if (yearValue === "") {
    fecha2Element.classList.add("borderRed");
  } else {
    fecha2Element.classList.remove("borderRed");
  }
  if (cvcValue === "") {
    cvcElement.classList.add("borderRed");
  } else {
    cvcElement.classList.remove("borderRed");
  }
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
buttonConfirmElement.addEventListener("click", formInfo);
