import { openPopup, closePopup } from "./modal.js";
import { addCard } from "./card.js";
import { profileEditButton, popupProfile, cardsContent, profileAvatarButton,
  popupAvatar, profileAddButton, popupCard, profileEditForm, profileNameEdit, contactInfoEdit,
  profileAvtarEditForm, profileImageEdit, addCardForm, placeName, placeAdres, initialCards } from "./constants";
import {enableValidation} from "./validate"
import '../styles/index.css';

//создание массива карточек
initialCards.forEach((item) => {
  cardsContent.append(addCard(item.link, item.name));
});

//запуск вылидации полей
enableValidation();

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
