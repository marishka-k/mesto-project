const profileEditButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector("#popup_profile");
const profileEditForm = document.querySelector("#popup-profile-edit-form");
const profileName = document.querySelector(".profile__name");
const profileContactInfo = document.querySelector(".profile__contact-info");
const profileNameEdit = document.querySelector("#profile_name");
const contactInfoEdit = document.querySelector("#contact-info");

profileEditButton.addEventListener("click", function () {
  popupProfile.classList.add("popup_opened");
});

function editProfile(profileNameValue, contactInfoValue) {
  profileName.textContent = profileNameValue;
  profileContactInfo.textContent = contactInfoValue;
}

function formSubmitHandler(evt) {
  evt.preventDefault(); //отменяем перезагрузку при добавлении
  editProfile(profileNameEdit.value, contactInfoEdit.value);
  popupProfile.classList.remove("popup_opened");
  console.log(profileNameEdit.value);
  profileNameEdit.value = '';
  contactInfoEdit.value = '';
}

profileEditForm.addEventListener("submit", formSubmitHandler);
