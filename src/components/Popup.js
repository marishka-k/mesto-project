export default class Popup {
  constructor (selector){
    this._popup = document.querySelector(selector);
    this._buttonPopupClose = this._popup.querySelector('.popup__close');
  }

  // открытие попапа
  open() {
    this._popup.classList.add('popup_opened');
    this.setEventListeners();
  };

  //закрытие попапа
  close() {
    this._popup.classList.remove('popup_opened');
    this.removeEventListeners();
  };

  // устанавливает слушателей
   setEventListeners() {
    this._buttonPopupClose.addEventListener('click', this._нandleButtonClose);
    document.addEventListener('keydown', this._нandleEscClose);
    document.addEventListener('mousedown', this._handleOverlayClose);
  };

  // удаляет слушателей
  removeEventListeners() {
    this._buttonPopupClose.removeEventListener('click', this._нandleButtonClose);
    document.removeEventListener('keydown', this._нandleEscClose);
    document.removeEventListener('mousedown', this._handleOverlayClose);
  };

  // Методы закрытия попапа
  _нandleButtonClose = () => {
    this.close();
  };
  _нandleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  };
  _handleOverlayClose = (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      this.close();
    }
  };
}
