export const profileEditButton = document.querySelector(".profile__edit-button");
export const popupProfile = document.querySelector("#popup_profile");
export const cardsContent = document.querySelector(".cards__content");
export const profileAvatarButton = document.querySelector(".profile__avatar-button");
export const popupAvatar = document.querySelector("#popup_avatar");
export const profileAddButton = document.querySelector(".profile__add-button");
export const popupCard = document.querySelector("#popup_card");
export const popupImage = document.querySelector("#popup_image");
export const popupDelete = document.querySelector("#popup_delete");
export const popupImageItem = document.querySelector(".popup__image");
export const popupHeadingPlaceImage = document.querySelector(
  ".popup__heading_place_image"
);
export const profileEditForm = document.forms.profile_edit;
export const profileNameEdit = profileEditForm.elements.profile_name;
export const contactInfoEdit = profileEditForm.elements.contact_info;
export const profileAvtarEditForm = document.forms.profile_avatar_edit;
export const profileImageEdit = profileAvtarEditForm.elements.profile_image;
export const addCardForm = document.forms.add_card;
export const placeAdres = addCardForm.elements.place_adres;
export const placeName = addCardForm.elements.place_name;
export const deleteCardForm = document.forms.delete_card;

export const initialCards = [
  {
    name: "Эльбрус",
    link: "https://images.unsplash.com/photo-1640957671688-d5f49e109c1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    name: "Алтай",
    link: "https://images.unsplash.com/photo-1635499829690-47846948b60b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },
  {
    name: "Хребет Нургуш",
    link: "https://images.unsplash.com/photo-1503943196655-59560afb7902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2085&q=80",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Карелия",
    link: "https://images.unsplash.com/photo-1624709426203-f25e3c81bd3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },
  {
    name: "Байкал",
    link: "https://images.unsplash.com/photo-1552321570-b74810c6265d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];
