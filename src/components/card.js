import { openPopup } from "./modal.js";
import { popupImage, popupImageItem, popupHeadingPlaceImage } from "./constants";

export function addCard(cardImageValue, cardNameValue) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardName = cardElement.querySelector(".card__name");
  const cardReaction = cardElement.querySelector(".card__reaction");
  const cardRemove = cardElement.querySelector(".card__remove");
  cardName.textContent = cardNameValue;
  cardImage.src = cardImageValue;
  cardImage.alt = cardNameValue;

  cardImage.addEventListener("click", function () {
    openPopup(popupImage);
    popupImageItem.src = cardImageValue;
    popupImageItem.alt = cardNameValue;
    popupHeadingPlaceImage.textContent = cardNameValue;
  });

  cardReaction.addEventListener("click", function (evt) {
    evt.target.classList.toggle("card__reaction_active");
  });

  cardRemove.addEventListener("click", function () {
    cardElement.remove();
  });

  return cardElement;
}
