import { api, userId, popupWithImage } from "../pages/index";

export default class Card {
  constructor(data, selector) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._owner = data.owner;
    this._selector = selector;
    this._id = data._id;
  }

  // получаем шаблон разметки
  _getTemplateCard() {
    const templateCard = document.querySelector(this._selector).content.querySelector(".card").cloneNode(true);
    return templateCard;
  }

  // создание карточки
  generateCard() {
    this._card = this._getTemplateCard();
    this._handleAddBasket();
    this._findUserLikes();
    this.setEventListeners();
    this._card.querySelector(".card__name").textContent = this._name;
    this._card.querySelector(".card__image").alt = this._name;
    this._card.querySelector(".card__image").src = this._link;
    this._card.querySelector(".card__like-quantity").textContent = this._likes.length;
    return this._card;
  }

  // метод добавления корзинки нашим карточкам
  _handleAddBasket() {
    if (this._owner._id === userId) {
      this._card.querySelector(".card__remove").classList.add("card__remove_active");
    }
  }

  // метод поиска наших лайков
  _findUserLikes() {
    if (this._likes.find((like) => like._id === userId)) {
      this._card.querySelector(".card__reaction").classList.add("card__reaction_active");
    }
  }

  // установка всех обработчиков
  setEventListeners() {
    const cardReaction = this._card.querySelector(".card__reaction");
    cardReaction.addEventListener('click', this._cardReaction);
    const cardImage = this._card.querySelector(".card__image");
    cardImage.addEventListener('click', this._openPopupImage);
    const cardRemove = this._card.querySelector(".card__remove");
    cardRemove.addEventListener('click', this._removeCard);
  }

  //обработчик - нажатие на картинку
  _openPopupImage = () => {
    popupWithImage.open(this._name, this._link);
  }

  // обработчик - нажатие на кнопку лайка
  _cardReaction = (evt) => {
    const cardLikeQuantity = this._card.querySelector(".card__like-quantity");
    if (evt.target.classList.contains("card__reaction_active")) {
      api.removeLike(this._id)
      .then((card) => {
        cardLikeQuantity.textContent = card.likes.length;
        evt.target.classList.remove("card__reaction_active");
      })
      .catch((err) => {
        return Promise.reject(`Ошибка: ${err.status}`);
      })
    } else {
      api.addLike(this._id)
      .then((card) => {
        cardLikeQuantity.textContent = card.likes.length;
        evt.target.classList.add("card__reaction_active");
      })
      .catch((err) => {
        return Promise.reject(`Ошибка: ${err.status}`);
      });
    }
  }

  // обработчик - нажатие на кнопку удаления карточки
  _removeCard = () => {
    api.removeCardToServer(this._id)
    .then(() => {
      this._card.remove();
    })
    .catch((err) => {
      return Promise.reject(`Ошибка: ${err.status}`);
    });
  }
}
