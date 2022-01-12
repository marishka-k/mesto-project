const cardReaction = document.querySelectorAll(".card__reaction");

for(let i = 0; i < cardReaction.length; i += 1) {
  cardReaction[i].addEventListener("click", function () {
    cardReaction[i].classList.toggle("card__reaction_active");
  });
}
