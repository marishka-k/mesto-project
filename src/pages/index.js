import "../styles/index.css";
import Api from "../components/Api";
import UserInfo from "../components/UserInfo";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithImage from "../components/PopupWithImage";
import FormValidator from "../components/FormValidator";
import Card from "../components/Card";
import Section from "../components/Section";
import renderLoading from "../utils/renderLoading";

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
const formProfileEdit = new FormValidator({ validationConfig }, document.forms.profile_edit);
formProfileEdit.enableValidation();

const formAvatarEdit = new FormValidator({ validationConfig }, document.forms.profile_avatar_edit);
formAvatarEdit.enableValidation();

const formAddCard = new FormValidator({ validationConfig }, document.forms.add_card);
formAddCard.enableValidation();


export const api = new Api({
  url: "https://nomoreparties.co/v1/plus-cohort-8",
  headers: {
    authorization: "f6f0e19f-3261-436f-8b67-2b9918fd933f",
    "Content-Type": "application/json",
  },
});

const userInfo = new UserInfo({
  selectorUserName: ".profile__name",
  selectorAboutSelf: ".profile__contact-info",
  selectorAvatar: ".profile__image",
});

// загружаем профиль и карточки с сервера
Promise.all([api.getProfileInformation(), api.getCardsArray()])
  .then(([userData, cards]) => {
    userId = userData._id;
    userInfo.addUserInfoToDom(userData.name, userData.about);
    userInfo.addUserAvatarToDom(userData.avatar);
    const cardList = new Section(
      {
        items: cards,
        renderer: (item) => {
          const card = new Card(item, "#card-template", userId);
          const cardElement = card.generateCard();
          cardList.addItem(cardElement, "append");
        },
      },
      ".cards__content"
    );
    cardList.renderItems();
  })
  .catch((err) => {
    console.log (`Ошибка: ${err.message}`);
  });

// popupWithImage
export const popupWithImage = new PopupWithImage("#popup_image");

// popupWithFormAvatar
const popupWithFormAvatar = new PopupWithForm({
  selector: "#popup_avatar",
  callback: (data) => {
    userInfo.setUserAvatar(data);
  },
});

// popupWithFormProfile
const popupWithFormProfile = new PopupWithForm({
  selector: "#popup_profile",
  callback: (data) => {
    userInfo.setUserInfo(data);
  },
});

// popupWithFormCard
const popupWithFormCard = new PopupWithForm({
  selector: "#popup_card",
  callback: (data) => {
    renderLoading(true, createCardButton);
    api.addCardToServer({ link: data.place_adres, name: data.place_name })
      .then((data) => {
        const card = new Card(data, "#card-template", userId);
        const cardElement = card.generateCard();
        const cardList = new Section({ items: [] }, ".cards__content");
        cardList.addItem(cardElement);
      })
      .catch((err) => {
        console.log (`Ошибка: ${err.message}`);
      })
      .finally(() => renderLoading(false, createCardButton, "Создать"));
  },
});

// слушатель - нажатие на кнопку открытия редактирования аватара
profileAvatarButton.addEventListener("click", () => {
  formAvatarEdit.resetValidation();
  popupWithFormAvatar.open();
});

// слушатель - нажатие на кнопку открытия редактирования профиля
profileEditButton.addEventListener("click", () => {
  profileNameEdit.value = profileName.textContent;
  contactInfoEdit.value = profileContactInfo.textContent;
  formProfileEdit.resetValidation();
  popupWithFormProfile.open();
});

// слушатель - нажатие на кнопку открытия создания места
profileAddButton.addEventListener("click", () => {
  formAddCard.resetValidation();
  popupWithFormCard.open();
});
