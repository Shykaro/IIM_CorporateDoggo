document.addEventListener('DOMContentLoaded', () => {

    createRewardSystem();
    rewardSystemFunctionality();
    addCoins();
    enterFullScreen(document.documentElement); // für den gesamten Tab

    const delay = 5000; // Verzögerung von 5 Sekunden

    setTimeout(() => {
        const videoPopup = document.getElementById('videoPopup');
        const videoElement = document.getElementById('adVideo');
    
        if (videoElement) {
            videoElement.onended = () => {
                setTimeout(() => {
                    window.location.href = 'sponsormemory.html'; // URL anpassen
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

    document.addEventListener('mousemove', (event) => {
      const closeButton = document.querySelector('.close');
      const modalContent = document.querySelector('.modal-content');
      if (!closeButton || !modalContent) return;
  
      const bounds = closeButton.getBoundingClientRect();
      const modalBounds = modalContent.getBoundingClientRect();
      const distance = 50; // Distanz, in der der Button reagieren soll
  
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
      showBubble("Max hat sich verlaufen. Helfe Max aus dem Labirint!", 2000);
    }, 500);

    setTimeout(() => {
      showBubble("Oh da kam wohl eine Werbeanzeige dazwischen, die ist bestimmt gleich wieder weg.", 5000);
    }, 100);

    setTimeout(() => {
      showBubble("Scheint als ist die Aufgabe schon verschwunden. Aber macht nichts, ich geb dir für die Werbung auch ein paar Münzen.", 5000);
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