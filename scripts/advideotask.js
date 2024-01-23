document.addEventListener('DOMContentLoaded', () => {

    createRewardSystem();
    rewardSystemFunctionality();
    addCoins();

    const delay = 5000; // Verzögerung von 5 Sekunden

    setTimeout(() => {
        const videoPopup = document.getElementById('videoPopup');
        const videoElement = document.getElementById('adVideo');

        if (videoPopup && videoElement) {
            videoPopup.style.display = 'block';

            videoElement.play().catch(e => {
                console.error('Fehler beim Abspielen des Videos: ', e);
            });
        }
    }, delay);

    const closeButton = document.querySelector('.close');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            const videoPopup = document.getElementById('videoPopup');
            const videoElement = document.getElementById('adVideo'); // Stellen Sie sicher, dass das Video-Element hier erneut referenziert wird

            if (videoPopup) {
                videoPopup.style.display = 'none';
                if (videoElement) {
                    console.log("Schließbutton wurde geklickt, versuche Video zu pausieren.");
                    videoElement.pause(); // Versuche, das Video anzuhalten
                    videoElement.currentTime = 0;
                } else {
                    console.error("Video-Element wurde nicht gefunden.");
                }
            }
        });
    }

      //////////////////////////////// NARRATOR CODE ////////////////////////////////
  const characterIcon = document.getElementById('character-icon');
  const speechBubble = document.getElementById('speech-bubble');

  // Funktion, um die Speechbubble anzuzeigen
  function showBubble(tempText, duration) {
    speechBubble.textContent = tempText;
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
      showBubble("Hey, vielen Dank, dass du Max helfen möchtest! Hier hast du zur Belohnung einen Cookie.", 7000);
    }, 2000);

    setTimeout(() => {
      showBubble("Es würde uns freuen, wenn du deinen Belohnungs-Cookie annimmst!", 5000);
    }, 20000);

    setTimeout(() => {
      showBubble("Bitte nimm den Cookie an.", 5000);
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