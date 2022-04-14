import { openPopup, closePopup } from "./modal";
import { Card } from "./card";
import { profileEditButton, popupProfile, cardsContent, profileAvatarButton, popupAvatar,
         profileAddButton, popupCard, profileEditForm, profileNameEdit, contactInfoEdit,
         profileAvatarEditForm, profileImageEdit, addCardForm, placeName, placeAdres,
         changeAvatarButton, changeProfileButton, createCardButton, validationConfig, profileName,
         profileContactInfo, profileImage } from "./constants";
import {enableValidation} from "./validate"
/*import {getCardsArray, addCardToServer, getProfileInfotmation, editProfileInformation, editProfileAvatar} from "./api"*/
import { api } from "./api"

import {renderLoading} from "./utils"
import '../styles/index.css';

export let userId =""

Promise.all([api.getProfileInfotmation(), api.getCardsArray()])
  .then(([userData, cards]) => {
    editProfile(userData.name, userData.about)
    profileImage.src = userData.avatar;
    userId = userData._id;
    cards.forEach((card) => {
      cardsContent.append(Card.generate(card));
    });
  })
  .catch((err) => {
    return Promise.reject(`Ошибка: ${err.status}`);
  })

//запуск вылидации полей
enableValidation(validationConfig);

// открыть попап "обновить аватар"
profileAvatarButton.addEventListener("click", function () {
  openPopup(popupAvatar);
});

// открыть попап "редактировать профиль"
profileEditButton.addEventListener("click", function () {
  profileNameEdit.value = profileName.textContent
  contactInfoEdit.value = profileContactInfo.textContent
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
  renderLoading (true, changeProfileButton)
  editProfileInformation ({name: profileNameEdit.value, about: contactInfoEdit.value })
    .then ((dataFromServer) => {
      editProfile(dataFromServer.name, dataFromServer.about);
      closePopup(popupProfile);
    })
    .catch((err) => {
      return Promise.reject(`Ошибка: ${err.status}`);
    })
    .finally (() =>  renderLoading (false, changeProfileButton, "Сохранить"))
}

function submitProfileAvatarChange(evt) {
  evt.preventDefault();
  renderLoading (true, changeAvatarButton)
  api.editProfileAvatar ({avatar: profileImageEdit.value})
    .then ((dataFromServer) => {
      profileImage.src = dataFromServer.avatar;
      closePopup(popupAvatar);
      changeAvatarButton.classList.add("popup__button_disabled");
      changeAvatarButton.disabled = "disabled";
      profileAvatarEditForm.reset();
    })
    .catch((err) => {
      return Promise.reject(`Ошибка: ${err.status}`);
    })
    .finally (() =>  renderLoading (false, changeAvatarButton, "Сохранить"))

}

function submitFormNewCard(evt) {
  evt.preventDefault();
  renderLoading (true, createCardButton)
  addCardToServer({link: placeAdres.value, name: placeName.value})
  .then ((dataFromServer) => {
    cardsContent.prepend(addCard(dataFromServer));
    closePopup(popupCard);
    createCardButton.classList.add("popup__button_disabled");
    createCardButton.disabled = "disabled"
    addCardForm.reset();
  })
  .catch((err) => {
    return Promise.reject(`Ошибка: ${err.status}`);
  })
  .finally (() =>  renderLoading (false, createCardButton, "Создать"))
}

profileEditForm.addEventListener("submit", submitProfileFormChange);

profileAvatarEditForm.addEventListener("submit", submitProfileAvatarChange);

addCardForm.addEventListener("submit", submitFormNewCard);
