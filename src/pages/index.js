import { openPopup, closePopup } from "./modal";
import { Card } from "../components/card1";
import { profileEditButton, popupProfile, cardsContent, profileAvatarButton, popupAvatar,
         profileAddButton, popupCard, profileEditForm, profileNameEdit, contactInfoEdit,
         profileAvatarEditForm, profileImageEdit, addCardForm, placeName, placeAdres,
         changeAvatarButton, changeProfileButton, createCardButton, validationConfig, profileName,
         profileContactInfo, profileImage } from "./constants";
import FormValidator from "../components/FormValidator"
import {api} from "../components/api"

import {renderLoading} from "./utils"
import '../styles/index.css';

export let userId =""

// ЭКЗЕМПЛЯР запуск валидации полей
const formValidator = new FormValidator({validationConfig}, '.popup__form');
formValidator.enableValidation();

Promise.all([api.getProfileInfotmation(), api.getCardsArray()])
  .then(([userData, cards]) => {
    editProfile(userData.name, userData.about)
    profileImage.src = userData.avatar;
    userId = userData._id;
    cards.forEach((item) => {
      const card = new Card(item);
      const cardElement = card.generate();
      cardsContent.append(cardElement);
    });
  })
  .catch((err) => {
    return Promise.reject(`Ошибка: ${err.status}`);
  })

// открыть попап "обновить аватар"
profileAvatarButton.addEventListener("click", () => {
  openPopup(popupAvatar);
});

// открыть попап "редактировать профиль"
profileEditButton.addEventListener("click", () => {
  profileNameEdit.value = profileName.textContent
  contactInfoEdit.value = profileContactInfo.textContent
  openPopup(popupProfile);
});

// открыть попап "новое место"
profileAddButton.addEventListener("click", () => {
  openPopup(popupCard);
});

function editProfile(profileNameValue, contactInfoValue) {
  profileName.textContent = profileNameValue;
  profileContactInfo.textContent = contactInfoValue;
}

function submitProfileFormChange(evt) {
  evt.preventDefault();
  renderLoading (true, changeProfileButton)
  api.editProfileInformation ({name: profileNameEdit.value, about: contactInfoEdit.value })
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
  api.addCardToServer({link: placeAdres.value, name: placeName.value})
  .then ((dataFromServer) => {
    const card = new Card(dataFromServer);
    const cardElement = card.generate();
    cardsContent.prepend(cardElement);
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
