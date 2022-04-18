/* function showError(errorElement, inputElement, config) {
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
}

function hideError(errorElement, inputElement, config) {
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
} */

// function checkInputValidity(inputElement, formElement, config) {
//   const isInputValid = inputElement.validity.valid;
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//   if (!isInputValid) {
//     showError(errorElement, inputElement, config);
//   } else {
//     hideError(errorElement, inputElement, config);
//   }
// }

function activateSubmitButton(button, isActive, config) {
  if (isActive) {
    button.classList.remove(config.inactiveButtonClass);
    button.disabled = false;
  } else {
    button.classList.add(config.inactiveButtonClass);
    button.disabled = "disabled";
  }
}

function setEventListner(formElement, config) {
  const inputLists = Array.from(formElement.querySelectorAll(config.inputSelector));
  const popupButton = formElement.querySelector(config.submitButtonSelector);

  inputLists.forEach((input) => {
    input.addEventListener("input", () => {
      checkInputValidity(input, formElement, config);
      activateSubmitButton(popupButton, formElement.checkValidity(), config);
    });
  });
}

export function enableValidation(config) {
  const forms = document.querySelectorAll(config.formSelector);
  forms.forEach((form) => {
    setEventListner(form, config );
  });
}

