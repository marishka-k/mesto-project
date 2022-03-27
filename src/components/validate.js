function showError(errorElement, inputElement) {
  inputElement.classList.add("popup__item_error");
  errorElement.textContent = inputElement.validationMessage;
}

function hideError(errorElement, inputElement) {
  inputElement.classList.remove("popup__item_error");
  errorElement.textContent = inputElement.validationMessage;
}

function checkInputValidity(inputElement, formElement) {
  const isInputValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  if (!isInputValid) {
    showError(errorElement, inputElement);
  } else {
    hideError(errorElement, inputElement);
  }
}

function activateSubmitButton(button, isActive) {
  if (isActive) {
    button.classList.remove("popup__button_disabled");
    button.disabled = false;
  } else {
    button.classList.add("popup__button_disabled");
    button.disabled = "disabled";
  }
}

function setEventListner(formElement) {
  const inputLists = Array.from(formElement.querySelectorAll(".popup__item"));
  const popupButton = formElement.querySelector(".popup__button");

  inputLists.forEach((input) => {
    input.addEventListener("input", () => {
      checkInputValidity(input, formElement);
      activateSubmitButton(popupButton, formElement.checkValidity());
    });
  });
}

export function enableValidation() {
  const forms = document.querySelectorAll(".popup__form");
  forms.forEach((form) => {
    setEventListner(form);
  });
}