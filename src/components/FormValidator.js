export default class FormValidator {
  constructor({validationConfig}, formSelector) {
  this._formSelector = formSelector;
  this._inputSelector = validationConfig.inputSelector;
  this._submitButtonSelector = validationConfig.submitButtonSelector;
  this._inactiveButtonClass = validationConfig.inactiveButtonClass;
  this._inputErrorClass = validationConfig.inputErrorClass;
  }





}
