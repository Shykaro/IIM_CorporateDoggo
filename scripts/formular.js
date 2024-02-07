document.addEventListener('DOMContentLoaded', () => {

  const videoElement = document.getElementById('cameraFeed');

  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function (stream) {
        videoElement.srcObject = stream;
      })
      .catch(function (error) {
        console.log("Something went wrong accessing the camera!", error);
      });
  }

  createRewardSystem();
  rewardSystemFunctionality();
  addCoins();
  //enterFullScreen(document.documentElement); // für den gesamten Tab
  // Referenzen für die Formularfelder und den Submit-Button
  const nameInput = document.getElementById('name');
  const ageInput = document.getElementById('age');
  const genderSelect = document.getElementById('gender');
  const submitButton = document.querySelector('.submit-btn');

  // Funktion um zu schauen ob alle Felder ausgefüllt sind
  function checkFormInputs() {
    // Checks every field
    const allFilled = nameInput.value && ageInput.value && genderSelect.value;

    // Aktiviert oder deaktiviert den Submit-Button
    submitButton.disabled = !allFilled;
  }

  // Event-Listener für Formularfelder
  [nameInput, ageInput, genderSelect].forEach(input => {
    input.addEventListener('change', checkFormInputs);
    input.addEventListener('keyup', checkFormInputs);
  });

  // setzt Zustand des Submit-Buttons
  checkFormInputs();
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
      showBubble("Gib bitte deine Daten an, damit wir wissen, wer Max hilft. Vielleicht gibt es ja eine Belohnung.", 7000);
    }, 2000);

    setTimeout(() => {
      showBubble("Füll bitte das Formular aus, wir wollen ja auch nicht so viele Informationen. Das Profilbild hab ich schon für dich erstellt. Gerngeschehen!", 10000);
    }, 20000);

    setTimeout(() => {
      showBubble("Hast du deinen Namen vergessen oder was?", 8000);
    }, 35000);

    setTimeout(() => {
      showBubble("Max wüsste glaube ich echt gerne, wer da für sein Essen verantwortlich ist!", 9000);
    }, 45000);
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