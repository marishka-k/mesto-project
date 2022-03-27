const popups = document.querySelectorAll(".popup");

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupWithEsc);
}

export function closePopup(popup) {
  const cardDeletTarget = document.querySelector(".card_target_delete");
  popup.classList.remove("popup_opened");
  if (cardDeletTarget) {
    cardDeletTarget.classList.remove("card_target_delete");
  }
  document.removeEventListener("keydown", closePopupWithEsc);
}

function closePopupWithEsc(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (
      evt.target.classList.contains("popup_opened") ||
      evt.target.classList.contains("popup__close")
    ) {
      closePopup(popup);
    }
  });
});
