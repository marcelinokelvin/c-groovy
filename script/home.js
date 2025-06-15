let currentCard = 1;
slideHandler(currentCard);

function moveSlides(n) {
    slideHandler(currentCard += n);
}

function slideHandler(n) {

    let totalCards = $('.slide');
    console.log("Total cards: ", totalCards.length);

    if (currentCard < 1) {
        currentCard = totalCards.length;
    }

    if (currentCard > totalCards.length) {
        currentCard = 1;
    }

    for (let i = 0; i < totalCards.length; i++) {
        totalCards[i].style.display = "none";
    }

    totalCards[currentCard - 1].style.display = "block";
}