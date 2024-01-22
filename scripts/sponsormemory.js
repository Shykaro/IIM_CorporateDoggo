document.addEventListener('DOMContentLoaded', (event) => {

    createRewardSystem();
    rewardSystemFunctionality();
    addCoins();

    let cards = ['./img/MemoryPics/img1.png', './img/MemoryPics/img2.png', './img/MemoryPics/img3.png', './img/MemoryPics/img4.png', './img/MemoryPics/img5.png', './img/MemoryPics/img6.png']; // 6 unique images
    let game = document.getElementById('memory-game');

    // Duplicate, shuffle and create cards
    cards = [...cards, ...cards];
    cards.sort(() => 0.5 - Math.random());

    cards.forEach(card => {
        let cardElement = document.createElement('div');
        cardElement.classList.add('memory-card');
        cardElement.innerHTML = `
            <div class="card-front" style="background-image: url('${card}')"></div>
            <div class="card-back"></div>
        `;
        cardElement.addEventListener('click', flipCard);
        game.appendChild(cardElement);
    });

    let hasFlippedCard = false;
    let lockBird = false;
    let firstCard, secondCard;
    let img1Found = false; // Neue Zustandsvariable
    let img1Found2 = false;

    function flipCard() {
        if (lockBird || this === firstCard) return;

        this.classList.toggle('flip');

        // Überprüfung, ob img1.png auf dieser Karte ist, wenn noch nicht gefunden
        if (!img1Found && this.querySelector('.card-front').style.backgroundImage.includes('img1.png')) {
            img1Found = true; // Setzen des Zustands auf true
        }

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        if (!img1Found2 && this.querySelector('.card-front').style.backgroundImage.includes('img1.png') && firstCard.innerHTML === secondCard.innerHTML) {
            img1Found2 = true; // Setzen des Zustands auf true
            if(img1Found && img1Found2){
            setTimeout(() => { // Weiterleitung nach einer kurzen Verzögerung
                window.location.href = 'download.html'; // Ersetzen Sie dies mit der URL Ihrer Zielseite
            }, 3000);}
        }

        checkForMatch();
    }

    function checkForMatch() {
        let isMatch = firstCard.innerHTML === secondCard.innerHTML;
        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
    }

    function unflipCards() {
        lockBird = true;
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 1500);
    }

    function resetBoard() {
        [hasFlippedCard, lockBird] = [false, false];
        [firstCard, secondCard] = [null, null];
    }
});
