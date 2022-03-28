import { openPopup, closePopup } from "./modal.js";
import { addCard } from "./card.js";
import { profileEditButton, popupProfile, cardsContent, profileAvatarButton, popupAvatar,
         profileAddButton, popupCard, profileEditForm, profileNameEdit, contactInfoEdit,
         profileAvatarEditForm, profileImageEdit, addCardForm, placeName, placeAdres,
         initialCards, changeAvatarButton, createCardButton, validationConfig } from "./constants";
import {enableValidation} from "./validate"
import '../styles/index.css';

const profileName = document.querySelector(".profile__name");
const profileContactInfo = document.querySelector(".profile__contact-info");
const profileImage = document.querySelector(".profile__image");

//создание массива карточек
initialCards.forEach((item) => {
  cardsContent.append(addCard(item.link, item.name));
});

//запуск вылидации полей
enableValidation(validationConfig);

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
  changeAvatarButton.classList.add("popup__button_disabled");
  changeAvatarButton.disabled = "disabled";
  profileAvatarEditForm.reset();
}

function submitFormNewCard(evt) {
  evt.preventDefault();
  cardsContent.prepend(addCard(placeAdres.value, placeName.value));
  closePopup(popupCard);
  createCardButton.classList.add("popup__button_disabled");
  createCardButton.disabled = "disabled"
  addCardForm.reset();
}

profileEditForm.addEventListener("submit", submitProfileFormChange);

profileAvatarEditForm.addEventListener("submit", submitProfileAvatarChange);

addCardForm.addEventListener("submit", submitFormNewCard);
