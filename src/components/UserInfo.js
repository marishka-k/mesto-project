import { api } from "../pages/index";
import { changeProfileButton, changeAvatarButton } from "../utils/constants";
import renderLoading from "../utils/renderLoading";

export default class UserInfo {
  // Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
  constructor({ selectorUserName, selectorAboutSelf, selectorAvatar }) {
    this._name = document.querySelector(selectorUserName);
    this._aboutSelf = document.querySelector(selectorAboutSelf);
    this._avatar = document.querySelector(selectorAvatar);
  }

  /* Содержит публичный метод getUserInfo, который возвращает объект
    с данными пользователя. НЕ ИСПОЛЬЗУЕТСЯ, тк Promise.all. */
  getUserInfo() {
    this.userInfo = {};
    api.getProfileInformation().then((data) => {
        this.userInfo.name = data.name;
        this.userInfo.about = data.about;
        this._name.textContent = data.name;
        this._aboutSelf.textContent = data.about;
      })
      .catch((err) => {
        return Promise.reject(`Ошибка: ${err.status}`);
      });
    return this.userInfo;
  }

  // Метод добавления данных профиля на страницу
  addUserInfoToDom(name, about) {
    this._name.textContent = name;
    this._aboutSelf.textContent = about;
  }

  // Метод добавления аватарки на страницу
  addUserAvatarToDom(avatar) {
    this._avatar.src = avatar;
  }

  // метод получает новые данные пользователя, отправляет их на сервер и добавляет их на страницу.
  setUserInfo(newUserInfo) {
    renderLoading(true, changeProfileButton);
    api
      .editProfileInformation({
        name: newUserInfo.profile_name,
        about: newUserInfo.contact_info,
      })
      .then((data) => {
        changeProfileButton.classList.add("popup__button_disabled");
        changeProfileButton.disabled = "disabled";
        this.addUserInfoToDom(data.name, data.about);
      })
      .catch((err) => {
        return Promise.reject(`Ошибка: ${err.status}`);
      })
      .finally(() => renderLoading(false, changeProfileButton, "Сохранить"));
  }

  // Метод смены аватарки
  setUserAvatar(newUserAvatar) {
    renderLoading(true, changeAvatarButton);
    api.editProfileAvatar({ avatar: newUserAvatar.profile_image }).then((data) => {
        changeAvatarButton.classList.add("popup__button_disabled");
        changeAvatarButton.disabled = "disabled";
        this.addUserAvatarToDom(data.avatar);
      })
      .catch((err) => {
        return Promise.reject(`Ошибка: ${err.status}`);
      })
      .finally(() => renderLoading(false, changeAvatarButton, "Сохранить"));
  }
}
