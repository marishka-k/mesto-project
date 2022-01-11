const cardReaction = document.querySelectorAll(".card__reaction");

for(let i = 0; i < cardReaction.length; i += 1) {
  cardReaction[i].addEventListener("click", function () {
    if (cardReaction[i].classList.contains("card__reaction_active")) {
      cardReaction[i].classList.remove("card__reaction_active");
    } else {
      cardReaction[i].classList.add("card__reaction_active");
    }
  });
}
