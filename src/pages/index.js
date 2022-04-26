import '../styles/index.css';
import Api from '../components/Api';
import UserInfo from '../components/UserInfo';
import PopupWithForm from '../components/PopupWithForm';
import PopupWithImage from '../components/PopupWithImage';
import FormValidator from '../components/FormValidator';
import Card from '../components/Card';
import Section from '../components/Section';
import renderLoading from '../utils/renderLoading';

import {
  profileName,
  profileContactInfo,
  profileEditButton,
  profileNameEdit,
  contactInfoEdit,
  profileAvatarButton,
  validationConfig,
  profileAddButton,
  createCardButton,
} from "../utils/constants";

export let userId = "";

// запуск валидации полей
const formValidator = new FormValidator({ validationConfig }, ".popup__form");
formValidator.enableValidation();

export const api = new Api({
  url: 'https://nomoreparties.co/v1/plus-cohort-8',
  headers: {
    authorization: 'f6f0e19f-3261-436f-8b67-2b9918fd933f',
    'Content-Type': 'application/json'
  }
});

const userInfo = new UserInfo({
  selectorUserName: '.profile__name',
  selectorAboutSelf: '.profile__contact-info',
  selectorAvatar: '.profile__image'}
);

// загружаем профиль и карточки с сервера
Promise.all([api.getProfileInformation(), api.getCardsArray()])
  .then(([userData, cards]) => {
    userId = userData._id;
    userInfo.addUserInfoToDom(userData.name, userData.about);
    userInfo.addUserAvatarToDom(userData.avatar);
    const cardList = new Section({
      items: cards,
      renderer: (item) => {
        const card = new Card(item, '#card-template');
        const cardElement = card.generateCard();
        cardList.addItem(cardElement, 'append');
      }
    }, '.cards__content')
    cardList.renderItems();
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
  profileNameEdit.value = profileName.textContent;
  contactInfoEdit.value = profileContactInfo.textContent;
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
  renderLoading(true, changeProfileButton);
  api
    .editProfileInformation({
      name: profileNameEdit.value,
      about: contactInfoEdit.value,
    })
    .then((dataFromServer) => {
      editProfile(dataFromServer.name, dataFromServer.about);
      closePopup(popupProfile);
    })
    .catch((err) => {
      return Promise.reject(`Ошибка: ${err.status}`);
    })
    .finally(() => renderLoading(false, changeProfileButton, "Сохранить"));
}

function submitProfileAvatarChange(evt) {
  evt.preventDefault();
  renderLoading(true, changeAvatarButton);
  api
    .editProfileAvatar({ avatar: profileImageEdit.value })
    .then((dataFromServer) => {
      profileImage.src = dataFromServer.avatar;
      closePopup(popupAvatar);
      changeAvatarButton.classList.add("popup__button_disabled");
      changeAvatarButton.disabled = "disabled";
      profileAvatarEditForm.reset();
    })
    .catch((err) => {
      return Promise.reject(`Ошибка: ${err.status}`);
    })
    .finally(() => renderLoading(false, changeAvatarButton, "Сохранить"));
}

function submitFormNewCard(evt) {
  evt.preventDefault();
  renderLoading(true, createCardButton);
  api
    .addCardToServer({ link: placeAdres.value, name: placeName.value })
    .then((dataFromServer) => {
      const card = new Card(dataFromServer);
      const cardElement = card.generate();
      cardsContent.prepend(cardElement);
      closePopup(popupCard);
      createCardButton.classList.add("popup__button_disabled");
      createCardButton.disabled = "disabled";
      addCardForm.reset();
    })
    .catch((err) => {
      return Promise.reject(`Ошибка: ${err.status}`);
    })
    .finally(() => renderLoading(false, createCardButton, "Создать"));
}

profileEditForm.addEventListener("submit", submitProfileFormChange);

profileAvatarEditForm.addEventListener("submit", submitProfileAvatarChange);

addCardForm.addEventListener("submit", submitFormNewCard);
