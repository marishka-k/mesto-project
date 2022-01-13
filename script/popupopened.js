const profileEditButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector("#popup_profile");
const popupProfileClose = document.querySelector("#popup_profile-close");

profileEditButton.addEventListener("click", function () {
  popupProfile.classList.add("popup_opened");
});

popupProfileClose.addEventListener("click", function () {
  popupProfile.classList.remove("popup_opened");
});
