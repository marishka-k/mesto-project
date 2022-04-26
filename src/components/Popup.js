export default class Popup {
  constructor (selector){
    this._popup = document.querySelector(selector);
    this._buttonPopupClose = this._popup.querySelector('.popup__close');
  }

   // устанавливает слушателей
   setEventListeners() {
    this._buttonPopupClose.addEventListener('click', this._нandleButtonClose);
    document.addEventListener("keydown", this._нandleEscClose);
    document.addEventListener('mousedown', this._handleOverlayClose);
  }

  // удаляет слушателей
  removeEventListeners() {
    this._buttonPopupClose.removeEventListener('click', this._нandleButtonClose);
    document.removeEventListener('keydown', this._нandleEscClose);
    document.removeEventListener('mousedown', this._handleOverlayClose);
  }

  // открытие попапа
  open() {
    this._popup.classList.add("popup_opened");
    this.setEventListeners();
  }

  //закрытие попапа
  close() {
    this._popup.classList.remove("popup_opened");
    this.removeEventListeners();
  }








}
