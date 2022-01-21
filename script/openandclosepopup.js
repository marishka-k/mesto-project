const closeButtons = document.querySelectorAll(".popup__close");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector("#popup_profile");
const profileAddButton = document.querySelector(".profile__add-button");
const popupCard = document.querySelector("#popup_card");

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

for (let i = 0; i < closeButtons.length; i += 1) {
  closeButtons[i].addEventListener("click", function () {
    closePopup(closeButtons[i].parentElement.parentElement);
  });
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

profileEditButton.addEventListener("click", function () {
  openPopup(popupProfile);
});

profileAddButton.addEventListener("click", function () {
  openPopup(popupCard);
});
