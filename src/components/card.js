import { openPopup } from "./modal.js";
import { userId } from "./index.js";
import {
  popupImage,
  popupImageItem,
  popupHeadingPlaceImage,
} from "./constants";
// import { removeCardToServer, addLike, removeLike } from "./api";
import { api } from "./api";


export function addCard(card) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardName = cardElement.querySelector(".card__name");
  const cardReaction = cardElement.querySelector(".card__reaction");
  const cardRemove = cardElement.querySelector(".card__remove");
  const cardLikeQuantity = cardElement.querySelector(".card__like-quantity");
  cardName.textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardLikeQuantity.textContent = card.likes.length;

  if (card.owner._id === userId) {
    cardRemove.classList.add("card__remove_active");
  }

   if (card.likes.find (like => like._id === userId)) {
    cardReaction.classList.add("card__reaction_active")
  }

  cardImage.addEventListener("click", function () {
    openPopup(popupImage);
    popupImageItem.src = card.link;
    popupImageItem.alt = card.name;
    popupHeadingPlaceImage.textContent = card.name;
  });

  cardReaction.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("card__reaction_active")) {
      api.removeLike(card._id)
        .then((card) => {
          cardLikeQuantity.textContent = card.likes.length;
          evt.target.classList.remove("card__reaction_active");
        })
        .catch((err) => {
          return Promise.reject(`Ошибка: ${err.status}`);
        });
    } else {
      api.addLike(card._id)
        .then((card) => {
          cardLikeQuantity.textContent = card.likes.length;
          evt.target.classList.add("card__reaction_active");
        })
        .catch((err) => {
          return Promise.reject(`Ошибка: ${err.status}`);
        });
    }
  });

  cardRemove.addEventListener("click", function () {
    api.removeCardToServer(card._id)
      .then((dataFromServer) => {
        cardElement.remove();
      })
      .catch((err) => {
        return Promise.reject(`Ошибка: ${err.status}`);
      });
  });

  return cardElement;
}
