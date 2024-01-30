document.addEventListener('DOMContentLoaded', () => {

  createRewardSystem();
  rewardSystemFunctionality();
  addCoins();
  enterFullScreen(document.documentElement); // für den gesamten Tab


  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  function moveDiv(div, speedX, speedY) {
    var rect = div.getBoundingClientRect();

    if (rect.left + speedX < 0 || rect.right + speedX > window.innerWidth) {
      speedX = -speedX;
    }

    if (rect.top + speedY < 0 || rect.bottom + speedY > window.innerHeight) {
      speedY = -speedY;
    }

    div.style.left = rect.left + speedX + 'px';
    div.style.top = rect.top + speedY + 'px';

    requestAnimationFrame(() => moveDiv(div, speedX, speedY));
  }

  function createDivs() {
    console.log("start creating divs")

    for (let i = 0; i < 5; i++) {
      var div = document.createElement('div');
      div.className = 'moving-ad';
      document.body.appendChild(div);

      var min = 20;
      var max = 100

      var size = getRandomNumber(min, max);
      var x = getRandomNumber(0, window.innerWidth - size);
      var y = getRandomNumber(0, window.innerHeight - size);

      div.style.width = size + 'px';
      div.style.height = size + 'px';
      div.style.left = x + 'px';
      div.style.top = y + 'px';

      var speedX = getRandomNumber(1, 5) * (Math.random() < 0.5 ? 1 : -1);
      var speedY = getRandomNumber(1, 5) * (Math.random() < 0.5 ? 1 : -1);

      moveDiv(div, speedX, speedY);
    }
  }

  createDivs();

  //////////////////////////////// NARRATOR CODE ////////////////////////////////
  const characterIcon = document.getElementById('character-icon');
  const speechBubble = document.getElementById('speech-bubble');

  // Funktion, um die Speechbubble anzuzeigen
  function showBubble(tempText, duration) {
    speechBubble.innerHTML = '';
    typeWriter(speechBubble, tempText);
    //speechBubble.textContent = tempText;
    speechBubble.style.animation = ''; // Setzt vorherige Animation zurück
    speechBubble.classList.add('visible');
    speechBubble.style.animation = 'blop-in 0.5s ease'; // Startet die Einblend-Animation

    setTimeout(() => {
      speechBubble.style.animation = 'blop-out 0.5s ease'; // Startet die Ausblend-Animation
      setTimeout(() => {
        speechBubble.classList.remove('visible');
        speechBubble.style.animation = ''; // Setzt Animation zurück
      }, 500); // Warten, bis die Ausblend-Animation abgeschlossen ist
    }, duration);
  }

  // Funktion, um den Text zu verschiedenen Zeiten zu aktualisieren und die Speechbubble zu zeigen
  function updateBubbleText() {
    setTimeout(() => {
      showBubble("Max hat sich verlaufen. Helfe Max aus dem Labyrinth!", 3000);
    }, 1000);

    setTimeout(() => {
      showBubble("Oh da kam wohl eine Werbeanzeige dazwischen, die ist bestimmt gleich wieder weg.", 6000);
    }, 6000);

    setTimeout(() => {
      showBubble("Scheint als ist die Aufgabe schon verschwunden. Aber macht nichts. Danke!", 8000);
    }, 20000);
  }

  updateBubbleText();

  characterIcon.addEventListener('click', () => {
    if (!speechBubble.classList.contains('visible')) {
      speechBubble.style.animation = '';
      speechBubble.classList.add('visible');
      speechBubble.style.animation = 'blop-in 0.5s ease';
    } else {
      speechBubble.style.animation = 'blop-out 0.5s ease';
      setTimeout(() => {
        speechBubble.classList.remove('visible');
        speechBubble.style.animation = '';
      }, 500);
    }
  });
  //////////////////////////////// NARRATOR END ////////////////////////////////
});