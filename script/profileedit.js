const profileEditForm = document.querySelector("#popup-profile-edit-form");
const profileName = document.querySelector(".profile__name");
const profileContactInfo = document.querySelector(".profile__contact-info");
const profileNameEdit = document.querySelector("#profile_name");
const contactInfoEdit = document.querySelector("#contact-info");

function editProfile(profileNameValue, contactInfoValue) {
  profileName.textContent = profileNameValue;
  profileContactInfo.textContent = contactInfoValue;
}

function hanldeProfileFormSubmit(evt) {
  evt.preventDefault();
  editProfile(profileNameEdit.value, contactInfoEdit.value);
  closePopup(popupProfile);
}

profileEditForm.addEventListener("submit", hanldeProfileFormSubmit);
