import { api } from "../pages/index";
import { changeProfileButton, changeAvatarButton } from "../utils/constants";
import renderLoading from "../utils/renderLoading";

export default class UserInfo {
  // Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
  constructor({selectorUserName, selectorAboutSelf, selectorAvatar}) {
    this._name = document.querySelector(selectorUserName);
    this._aboutSelf = document.querySelector(selectorAboutSelf);
    this._avatar = document.querySelector(selectorAvatar);
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
}
