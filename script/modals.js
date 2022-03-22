const closeButtons = document.querySelectorAll(".popup__close");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector("#popup_profile");
const profileAvatarButton = document.querySelector(".profile__avatar-button");
const popupAvatar = document.querySelector("#popup_avatar");
const profileAddButton = document.querySelector(".profile__add-button");
const popupCard = document.querySelector("#popup_card");
const profileImage = document.querySelector(".profile__image");
const profileName = document.querySelector(".profile__name");
const profileContactInfo = document.querySelector(".profile__contact-info");
const profileEditForm = document.forms.profile_edit;
const profileNameEdit = profileEditForm.elements.profile_name;
const contactInfoEdit = profileEditForm.elements.contact_info;
const profileAvtarEditForm = document.forms.profile_avatar_edit;
const profileImageEdit = profileAvtarEditForm.elements.profile_image;
const addCardForm = document.forms.add_card;
const placeName = addCardForm.elements.place_name;
const placeAdres = addCardForm.elements.place_adres;

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

profileAvatarButton.addEventListener("click", function () {
  openPopup(popupAvatar);
});

profileAddButton.addEventListener("click", function () {
  openPopup(popupCard);
});

function editProfile(profileNameValue, contactInfoValue) {
  profileName.textContent = profileNameValue;
  profileContactInfo.textContent = contactInfoValue;
}

function submitProfileFormChange(evt) {
  evt.preventDefault();
  editProfile(profileNameEdit.value, contactInfoEdit.value);
  closePopup(popupProfile);
}

function submitProfileAvatarChange(evt) {
  evt.preventDefault();
  profileImage.src = profileImageEdit.value;
  closePopup(popupAvatar);
}

function submitFormNewCard(evt) {
  evt.preventDefault();
  cardsContent.prepend(addCard(placeAdres.value, placeName.value));
  closePopup(popupCard);
  addCardForm.reset();
}

profileEditForm.addEventListener("submit", submitProfileFormChange);

profileAvtarEditForm.addEventListener("submit", submitProfileAvatarChange);

addCardForm.addEventListener("submit", submitFormNewCard);
