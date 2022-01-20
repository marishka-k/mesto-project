const cards = document.querySelector(".cards");
const profileAddButton = document.querySelector(".profile__add-button");
const cardsContent = cards.querySelector(".cards__content");
const popupCards = document.querySelector("#popup_cards");
const popupImage = document.querySelector("#popup_image");
const popupImageItem = document.querySelector(".popup__image");
const popupHeadingPlaceImage = document.querySelector(
  ".popup__heading_place_image"
);
const addCardForm = popupCards.querySelector("#popup-add-card-form");
const placeAdres = document.querySelector("#place_adres");
const placeName = document.querySelector("#place_name");

profileAddButton.addEventListener("click", function () {
  popupCards.classList.add("popup_opened");
});

function addCard(cardImageValue, cardNameValue) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__image").src = cardImageValue;
  cardElement.querySelector(".card__image").alt = cardNameValue;
  cardElement.querySelector(".card__name").textContent = cardNameValue;
  cardElement
    .querySelector(".card__image")
    .addEventListener("click", function () {
      popupImage.classList.add("popup_opened");
      popupImageItem.src = cardImageValue;
      popupImageItem.alt = cardNameValue;
      popupHeadingPlaceImage.textContent = cardNameValue;
    });
  cardElement
    .querySelector(".card__reaction")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("card__reaction_active");
    });
  cardElement
    .querySelector(".card__remove")
    .addEventListener("click", function () {
      cardElement.remove();
    });
  return cardElement;
}

initialCards.forEach((item) => {
  cardsContent.append(addCard(item.link, item.name)); //создаем 6 карт по умолчанию
});

const submitFormNewCard = (evt) => {
  evt.preventDefault(); //отменяем перезагрузку при добавлении
  cardsContent.prepend(addCard(placeAdres.value, placeName.value));
  popupCards.classList.remove("popup_opened");
  placeAdres.value = ""; // сброс текста в поле
  placeName.value = ""; // сброс текста в поле
};

addCardForm.addEventListener("submit", submitFormNewCard); //отправляем форму
