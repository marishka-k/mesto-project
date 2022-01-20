const popupClose = document.querySelectorAll(".popup__close");

for (let i = 0; i < popupClose.length; i += 1) {
  popupClose[i].addEventListener("click", function () {
    popupClose[i].parentElement.parentElement.classList.remove("popup_opened");
  });
  console.log(popupClose.length.parentElement);
}
