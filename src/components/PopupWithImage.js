import Popup from "./popup";
import { popupHeadingPlaceImage, popupImageItem } from "../utils/constants";


//открытие попапа с картинкой
export default class PopupWithImage extends Popup {
  open(name, link) {
    super.open();
    popupHeadingPlaceImage.textContent = name;
    popupImageItem.alt = name;
    popupImageItem.src = link;
  }
}
