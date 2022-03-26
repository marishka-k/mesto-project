import { openPopup, closePopup } from "./modals.js";
import { addCard } from "./cardTemplate.js";
import { initialCards } from "./initialCards.js";

const cards = document.querySelector(".cards");
const cardsContent = cards.querySelector(".cards__content");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector("#popup_profile");
const profileAvatarButton = document.querySelector(".profile__avatar-button");
const popupAvatar = document.querySelector("#popup_avatar");
const profileAddButton = document.querySelector(".profile__add-button");
const popupCard = document.querySelector("#popup_card");
const profileEditForm = document.forms.profile_edit;
const profileNameEdit = profileEditForm.elements.profile_name;
const contactInfoEdit = profileEditForm.elements.contact_info;
const profileAvtarEditForm = document.forms.profile_avatar_edit;
const profileImageEdit = profileAvtarEditForm.elements.profile_image;
const addCardForm = document.forms.add_card;
const placeName = addCardForm.elements.place_name;
const placeAdres = addCardForm.elements.place_adres;

// открыть попап "обновить аватар"
profileAvatarButton.addEventListener("click", function () {
  openPopup(popupAvatar);
});

// открыть попап "редактировать профиль"
profileEditButton.addEventListener("click", function () {
  openPopup(popupProfile);
});

// открыть попап "новое место"
profileAddButton.addEventListener("click", function () {
  openPopup(popupCard);
});

function editProfile(profileNameValue, contactInfoValue) {
  const profileName = document.querySelector(".profile__name");
  const profileContactInfo = document.querySelector(".profile__contact-info");
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
  const profileImage = document.querySelector(".profile__image");
  profileImage.src = profileImageEdit.value;
  closePopup(popupAvatar);
  profileAvtarEditForm.reset();
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

//создание массива карточек
initialCards.forEach((item) => {
  cardsContent.append(addCard(item.link, item.name));
});
