export default class FormValidator {
  constructor({validationConfig}, formSelector) {
  this._formSelector = formSelector;
  this._inputSelector = validationConfig.inputSelector;
  this._submitButtonSelector = validationConfig.submitButtonSelector;
  this._inactiveButtonClass = validationConfig.inactiveButtonClass;
  this._inputErrorClass = validationConfig.inputErrorClass;
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
}
