import Popup from "./popup";

//открытие попапа с картинкой
export default class PopupWithImage extends Popup {
  constructor(popupId, headingPlaceImage, imageItem) {
    super(popupId);
    this._headingPlaceImage = document.querySelector(headingPlaceImage);
    this._imageItem = document.querySelector(imageItem);
  }

  open(name, link) {
    super.open();
    this._headingPlaceImage.textContent = name;
    this._imageItem.alt = name;
    this._imageItem.src = link;
  }
}
