import { api, popupWithImage } from "../pages/index";

export default class Card {
  constructor(data, selector, userId) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._owner = data.owner;
    this._selector = selector;
    this._id = data._id;
    this._userId = userId;
  }

  // получаем шаблон разметки
  _getTemplateCard() {
    const templateCard = document.querySelector(this._selector).content.querySelector(".card").cloneNode(true);
    return templateCard;
  }

  // создание карточки
  generateCard() {
    this._card = this._getTemplateCard();
    this._cardName = this._card.querySelector(".card__name");
    this._cardImage = this._card.querySelector(".card__image");
    this._likeQuantity = this._card.querySelector(".card__like-quantity");
    this._cardReactionButton = this._card.querySelector(".card__reaction");
    this._cardRemove = this._card.querySelector(".card__remove");
    this._handleAddBasket();
    this._findUserLikes();
    this.setEventListeners();
    this._cardName.textContent = this._name;
    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;
    this._likeQuantity.textContent = this._likes.length;
    return this._card;
  }

  // метод добавления корзинки нашим карточкам
  _handleAddBasket() {
    if (this._owner._id === this._userId) {
      this._cardRemove.classList.add("card__remove_active");
    }
  }

  // метод поиска наших лайков
  _findUserLikes() {
    if (this._likes.find((like) => like._id === this._userId)) {
      this._cardReactionButton.classList.add("card__reaction_active");
    }
  }

  // установка всех обработчиков
  setEventListeners() {
    this._cardReactionButton.addEventListener("click", this._cardReaction);
    this._cardImage.addEventListener("click", this._openPopupImage);
    this._cardRemove.addEventListener("click", this._removeCard);
  }

  //обработчик - нажатие на картинку
  _openPopupImage = () => {
    popupWithImage.open(this._name, this._link);
  }

  // обработчик - нажатие на кнопку лайка
  _cardReaction = (evt) => {
    if (evt.target.classList.contains("card__reaction_active")) {
      api.removeLike(this._id)
      .then((card) => {
        this._likeQuantity.textContent = card.likes.length;
        evt.target.classList.remove("card__reaction_active");
      })
      .catch((err) => {
        console.log (`Ошибка: ${err.message}`);
      })
    } else {
      api.addLike(this._id)
      .then((card) => {
        this._likeQuantity.textContent = card.likes.length;
        evt.target.classList.add("card__reaction_active");
      })
      .catch((err) => {
        console.log (`Ошибка: ${err.message}`);
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
      console.log (`Ошибка: ${err.message}`);
    });
  }
}
