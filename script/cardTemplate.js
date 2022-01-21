const cards = document.querySelector(".cards");
const cardsContent = cards.querySelector(".cards__content");
const popupImage = document.querySelector("#popup_image");
const popupImageItem = document.querySelector(".popup__image");
const popupHeadingPlaceImage = document.querySelector(
  ".popup__heading_place_image"
);
const addCardForm = popupCard.querySelector("#popup-add-card-form");
const placeAdres = document.querySelector("#place_adres");
const placeName = document.querySelector("#place_name");

function addCard(cardImageValue, cardNameValue) {
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

initialCards.forEach((item) => {
  cardsContent.append(addCard(item.link, item.name));
});

const submitFormNewCard = (evt) => {
  evt.preventDefault();
  cardsContent.prepend(addCard(placeAdres.value, placeName.value));
  closePopup(popupCard);
  placeAdres.value = "";
  placeName.value = "";
};

addCardForm.addEventListener("submit", submitFormNewCard);
