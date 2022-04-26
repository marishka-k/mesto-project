export default class FormValidator {
  constructor({validationConfig}, formSelector) {
    this._formSelector = formSelector;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
  }

  _showError(errorElement, inputElement) {
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
  }

  _hideError(errorElement, inputElement) {
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
  }

  _checkInputValidity(inputElement, formElement) {
    const _isInputValid = inputElement.validity.valid;
    const _errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    if (!_isInputValid) {
      this._showError(_errorElement, inputElement);
    } else {
      this._hideError(_errorElement, inputElement);
    }
  }

  _activateSubmitButton(button, isActive) {
    if (isActive) {
      button.classList.remove(this._inactiveButtonClass);
      button.disabled = false;
    } else {
      button.classList.add(this._inactiveButtonClass);
      button.disabled = "disabled";
    }
  }

  _setEventListner(formElement) {
    const inputLists = Array.from(formElement.querySelectorAll(this._inputSelector));
    const popupButton = formElement.querySelector(this._submitButtonSelector);

    inputLists.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input, formElement);
        this._activateSubmitButton(popupButton, formElement.checkValidity());
      });
    });
  }

  enableValidation() {
    const forms = document.querySelectorAll(this._formSelector);
    forms.forEach((form) => {
      this._setEventListner(form);
    });
  }
}
