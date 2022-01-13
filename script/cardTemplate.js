const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
const cards = document.querySelector(".cards");
const profileAddButton = document.querySelector(".profile__add-button");
const cardsContent = cards.querySelector(".cards__content");
const popupCards = document.querySelector("#popup_cards");
const popupCardClose = document.querySelector("#popup_card-close");
const createCard = document.querySelector("#create-card");

profileAddButton.addEventListener("click", function () {
  popupCards.classList.add("popup_opened");
});

popupCardClose.addEventListener("click", function () {
  popupCards.classList.remove("popup_opened");
});

function addCard(cardImageValue, cardNameValue) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__image").src = cardImageValue;
  cardElement.querySelector(".card__image").alt = cardImageValue;
  cardElement.querySelector(".card__name").textContent = cardNameValue;
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
  cardsContent.append(cardElement);
}

for (let i = 0; i < initialCards.length; i += 1) {
  addCard(initialCards[i].link, initialCards[i].name);
  }

createCard.addEventListener("click", function () {
  const placeAdres = document.querySelector("#place_adres");
  const placeName = document.querySelector(".#place_name");
  addCard(placeAdres.value, placeName.value);
});

