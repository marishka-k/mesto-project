const closeButtons = document.querySelectorAll(".popup__close");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector("#popup_profile");
const profileAddButton = document.querySelector(".profile__add-button");
const popupCard = document.querySelector("#popup_card");
const profileEditForm = document.querySelector("#popup-profile-edit-form");
const profileName = document.querySelector(".profile__name");
const profileContactInfo = document.querySelector(".profile__contact-info");
const profileNameEdit = document.querySelector("#profile_name");
const contactInfoEdit = document.querySelector("#contact-info");

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

closeButtons.forEach ((buttons) => {
  buttons.addEventListener("click", function () {
    closePopup(buttons.closest(".popup_opened"));
  });
});

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

profileEditButton.addEventListener("click", function () {
  openPopup(popupProfile);
});

profileAddButton.addEventListener("click", function () {
  openPopup(popupCard);
});

function editProfile(profileNameValue, contactInfoValue) {
  profileName.textContent = profileNameValue;
  profileContactInfo.textContent = contactInfoValue;
}

function hanldeProfileFormSubmit(evt) {
  evt.preventDefault();
  editProfile(profileNameEdit.value, contactInfoEdit.value);
  closePopup(popupProfile);
}

profileEditForm.addEventListener("submit", hanldeProfileFormSubmit);
