import { popupImageItem, popupHeadingPlaceImage } from "./constants";

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupWithEsc);
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupWithEsc);
}

function closePopupWithEsc(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
    if (popupImageItem.src !== "#") {
      popupImageItem.src = "#";
      popupImageItem.alt = "#";
      popupHeadingPlaceImage.textContent = "#";
    }
  }
}

document.addEventListener("click", function (evt) {
  if (
    evt.target.classList.contains("popup") ||
    evt.target.classList.contains("popup__close")
  ) {
    closePopup(document.querySelector(".popup_opened"));
    if (popupImageItem.src !== "#") {
      popupImageItem.src = "#";
      popupImageItem.alt = "#";
      popupHeadingPlaceImage.textContent = "#";
    }
  }
});
