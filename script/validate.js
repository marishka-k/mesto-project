const profileName = document.querySelector(".profile__name");
const profileContactInfo = document.querySelector(".profile__contact-info");
const profileEditForm = document.forms.profile_edit;
const profileNameEdit = profileEditForm.elements.profile_name;
const contactInfoEdit = profileEditForm.elements.contact_info;
const addCardForm = document.forms.add_card;
const placeName = addCardForm.elements.place_name;
const placeAdres = addCardForm.elements.place_adres;

function showError(errorElement, inputElement) {
  inputElement.classList.add("popup__item_error");
  errorElement.textContent = inputElement.validationMessage;
}

function hideError(errorElement, inputElement) {
  inputElement.classList.remove("popup__item_error");
  errorElement.textContent = inputElement.validationMessage;
}

function checkInputValidity(inputElement, formElement) {
  const isInputValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  if (!isInputValid) {
    showError(errorElement, inputElement);
  } else {
    hideError(errorElement, inputElement);
  }
}

function activateSubmitButton(button, isActive) {
  if (isActive) {
    button.classList.remove("popup__save_disabled");
    button.disabled = false;
  } else {
    button.classList.add("popup__save_disabled");
    button.disabled = "disabled";
  }
}

function editProfile(profileNameValue, contactInfoValue) {
  profileName.textContent = profileNameValue;
  profileContactInfo.textContent = contactInfoValue;
}

function submitProfileFormChange(evt) {
  editProfile(profileNameEdit.value, contactInfoEdit.value);
  closePopup(popupProfile);
}

function submitFormNewCard(evt) {
  cardsContent.prepend(addCard(placeAdres.value, placeName.value));
  closePopup(popupCard);
  addCardForm.reset();
}

function setEventListner(formElement) {
  const inputLists = document.querySelectorAll(".popup__item");
  const saveButton = formElement.querySelector(".popup__save");

  formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    if ((formElement.id = profile_edit)) {
      submitProfileFormChange();
    }
    if ((formElement.id = add_card)) {
      submitFormNewCard();
    }
  });

  inputLists.forEach((input) => {
    input.addEventListener("input", () => {
      checkInputValidity(input, formElement);
      activateSubmitButton(saveButton, formElement.checkValidity());
    });
  });
}

function enableValidation() {
  const forms = document.querySelectorAll(".popup__form");
  forms.forEach((form) => {
    setEventListner(form);
  });
}

enableValidation();
