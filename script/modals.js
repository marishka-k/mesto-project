const closeButtons = document.querySelectorAll(".popup__close");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector("#popup_profile");
const profileAddButton = document.querySelector(".profile__add-button");
const popupCard = document.querySelector("#popup_card");


function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupWithEsc);
}

function closePopupWithEsc(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

document.addEventListener("click", function (evt) {
  if (
    evt.target.classList.contains("popup") ||
    evt.target.classList.contains("popup__close")
  ) {
    closePopup(document.querySelector(".popup_opened"));
  }
});

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupWithEsc);
}

profileEditButton.addEventListener("click", function () {
  openPopup(popupProfile);
});

profileAddButton.addEventListener("click", function () {
  openPopup(popupCard);
});
