export const profileEditButton = document.querySelector(".profile__edit-button");
export const popupProfile = document.querySelector("#popup_profile");
export const cardsContent = document.querySelector(".cards__content");
export const profileAvatarButton = document.querySelector(".profile__avatar-button");
export const popupAvatar = document.querySelector("#popup_avatar");
export const profileAddButton = document.querySelector(".profile__add-button");
export const popupCard = document.querySelector("#popup_card");
export const popupImage = document.querySelector("#popup_image");
export const popupImageItem = document.querySelector(".popup__image");
export const popupDelete = document.querySelector("#popup_delete");
export const popupHeadingPlaceImage = document.querySelector(".popup__heading_place_image");
export const profileName = document.querySelector(".profile__name");
export const profileContactInfo = document.querySelector(".profile__contact-info");
export const profileImage = document.querySelector(".profile__image");
export const profileEditForm = document.forms.profile_edit;
export const profileNameEdit = profileEditForm.elements.profile_name;
export const contactInfoEdit = profileEditForm.elements.contact_info;
export const changeProfileButton = profileEditForm.elements.change_profile;
export const profileAvatarEditForm = document.forms.profile_avatar_edit;
export const profileImageEdit = profileAvatarEditForm.elements.profile_image;
export const changeAvatarButton = profileAvatarEditForm.elements.change_avatar;
export const addCardForm = document.forms.add_card;
export const placeAdres = addCardForm.elements.place_adres;
export const placeName = addCardForm.elements.place_name;
export const createCardButton = addCardForm.elements.create_card;
export const deleteCardForm = document.forms.delete_card;

export const validationConfig = {
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__item_error'
};
