
document.addEventListener('DOMContentLoaded', () => {

  createRewardSystem();
  rewardSystemFunctionality();
  addCoins();
  //enterFullScreen(document.documentElement); // für den gesamten Tab

  //////////////////////////////// NARRATOR CODE ////////////////////////////////
  const characterIcon = document.getElementById('character-icon');
  const speechBubble = document.getElementById('speech-bubble');

  // Speechbubble anzeigen
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
      }, 500); // Warten auf Ausblend-Animation
    }, duration);
  }

  // Beinhalteter Text, wie lang er angezeigt wird und der Timestamp wann er spawned
  function updateBubbleText() {
    setTimeout(() => {
      showBubble("Hey, vielen Dank, dass du Max helfen möchtest! Hier hast du zur Belohnung einen Cookie.", 8000);
    }, 2000);

    setTimeout(() => {
      showBubble("Es würde uns freuen, wenn du deinen Belohnungs-Cookie annimmst!", 7000);
    }, 20000);

    setTimeout(() => {
      showBubble("Bitte nimm den Cookie an.", 7000);
    }, 35000);
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
