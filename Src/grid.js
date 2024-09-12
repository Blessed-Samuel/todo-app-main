const parentNode = document.querySelector('.parentNode');
const button = document.querySelector('.btn');

// Add a new card to the card node
button.addEventListener('click', () => {
    const newCard = document.createElement('div');
    newCard.textContent = 'Card 7';

    newCard.classList.add("cards", "bg-blue-700", "p-4", "text-white");
    parentNode.appendChild(newCard);

    // Changing the colors of the cards onClick
    const newCards = document.querySelectorAll(".cards");
    newCards.forEach((card) => {
      card.style.backgroundColor = "darkblue";
    });
});