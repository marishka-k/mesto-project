const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const popupProfile = document.querySelector("#popup_profile");
const popupCards = document.querySelector("#popup_cards");
const popupClose = document.querySelectorAll(".popup__close");

profileEditButton.addEventListener("click", function () {
  popupProfile.classList.add("popup_opened");
});

profileAddButton.addEventListener("click", function () {
  popupCards.classList.add("popup_opened");
});

for (let i = 0; i < popupClose.length; i += 1) {
  popupClose[i].addEventListener("click", function () {
    if (popupProfile.classList.contains("popup_opened")) {
      popupProfile.classList.remove("popup_opened");
    } else if (popupCards.classList.contains("popup_opened")) {
      popupCards.classList.remove("popup_opened");
    }
  });
}
