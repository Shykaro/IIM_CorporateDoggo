document.addEventListener('DOMContentLoaded', () => {

  createRewardSystem();
  rewardSystemFunctionality();
  addCoins();
  //enterFullScreen(document.documentElement); // für den gesamten Tab

  const delay = 5000; // Verzögerung von 5 Sekunden
  const adVideoSources = [
    'img/Werbevideos/Pflanzen_shopping.mp4',
    //'img/Werbevideos/second_part_short.mp4',
    'img/Werbevideos/Waschmaschine_werbung.mp4',
    //'img/Werbevideos/Werbevideo.mp4'
  ]

  setTimeout(() => {
    const videoPopup = document.getElementById('videoPopup');
    const videoElement = document.getElementById('adVideo');

    //Choose Random Video
    var randomVideoAdNumber = Math.floor(Math.random() * adVideoSources.length);
    var randomVideoAd = adVideoSources[randomVideoAdNumber];
    videoElement.src = randomVideoAd;

    if (videoElement) {
      videoElement.onended = () => {

        showBubble("Scheint als ist die Aufgabe schon verschwunden. Aber macht nichts. Danke!", 8000);

        setTimeout(() => {
          chooseRandomTask(); // URL anpassen
        }, 3000); // 3000 Millisekunden Verzögerung
      };
    }

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
      const videoElement = document.getElementById('adVideo'); //erneute referenzierung

      if (videoPopup) {
        videoPopup.style.display = 'none';
        if (videoElement) {
          console.log("Schließbutton wurde geklickt, versuche Video zu pausieren.");
          videoElement.pause(); //Video anhalten
          videoElement.currentTime = 0;
        } else {
          console.error("Video-Element wurde nicht gefunden.");
        }
      }
    });
  }

  document.addEventListener('mousemove', (event) => {
    const closeButton = document.querySelector('.close');
    const modalContent = document.querySelector('.modal-content');
    if (!closeButton || !modalContent) return;

    const bounds = closeButton.getBoundingClientRect();
    const modalBounds = modalContent.getBoundingClientRect();
    const distance = 50; // Distanz ab wann X ausweicht

    if (event.clientX < bounds.right + distance && event.clientX > bounds.left - distance &&
      event.clientY < bounds.bottom + distance && event.clientY > bounds.top - distance) {

      // Neue Position innerhalb der modal-content div berechnen
      const newLeft = Math.random() * (modalBounds.width - bounds.width) + modalBounds.left - modalContent.offsetLeft;
      const newTop = Math.random() * (modalBounds.height - bounds.height) + modalBounds.top - modalContent.offsetTop;

      closeButton.style.position = 'absolute';
      closeButton.style.left = `${Math.max(0, newLeft)}px`;
      closeButton.style.top = `${Math.max(0, newTop)}px`;
    }
  });



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
      showBubble("Max hat sich verlaufen. Helfe Max aus dem Labyrinth!", 3000);
    }, 1000);

    setTimeout(() => {
      showBubble("Oh da kam wohl eine Werbeanzeige dazwischen, die ist bestimmt gleich wieder weg.", 6000);
    }, 6000);
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