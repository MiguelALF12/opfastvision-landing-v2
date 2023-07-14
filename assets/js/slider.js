const premiumCardContainer = document.getElementById('product-slider-container');

const premiumCards = Array.from(document.querySelectorAll('.product-card'));

function scrollCards() {
    const premiumFirstCard = premiumCards.shift();
    premiumCards.push(premiumFirstCard);
    premiumCards.forEach(card => card.style.transform = 'none');
    setTimeout(() => {
        //         premium
        premiumCardContainer.removeChild(premiumFirstCard);
        premiumCardContainer.appendChild(premiumFirstCard);
    }, 1500);
}

// Scroll the cards every 2 seconds
setInterval(scrollCards, 3000);