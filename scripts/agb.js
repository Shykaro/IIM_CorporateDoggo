document.addEventListener("DOMContentLoaded", function () {

    createRewardSystem();
    rewardSystemFunctionality();
    addCoins();

    var scrollContainer = document.querySelector('.rectangle-3');
    var customScrollbar = document.querySelector('.rectangle-2');
    var textList = [
        "Erster zusätzlicher Text...",
        "Zweiter zusätzlicher Text...",
        "Dritter zusätzlicher Text...",
        // Text der hinzugefügt werden soll
    ];


    function updateScrollbar() {
        var scrollableHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
        var scrollbarHeight = (scrollContainer.clientHeight / scrollContainer.scrollHeight) * 100;
        var scrollbarTop = (scrollContainer.scrollTop / scrollableHeight) * (scrollContainer.clientHeight - (scrollbarHeight / 100 * scrollContainer.clientHeight));

        customScrollbar.style.height = scrollbarHeight + "%";
        customScrollbar.style.top = scrollbarTop + "px"; // Hier wird 'px' verwendet
    }

    var currentTextIndex = 0; // Hält den Index des aktuellen Textes

    function loadMoreContent() {
        if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
            if (currentTextIndex < textList.length) {
                var newText = document.createElement("p");
                newText.classList.add("lorem-ipsum-dolor");
                newText.textContent = textList[currentTextIndex];
                scrollContainer.appendChild(newText);
    
                if (currentTextIndex === textList.length - 1) { // Überprüfen, ob es das Ende der Liste ist
                    handleSpecialAction();
                }
    
                updateScrollbar();
                currentTextIndex++;
            }
        }
    }
    
    
    function handleSpecialAction() {
        var specialMessage = document.createElement("p");
        specialMessage.classList.add("lorem-ipsum-dolor");
        specialMessage.textContent = "Danke fürs Annehmen.";
        scrollContainer.appendChild(specialMessage);
    
        // Weiterleitung nach einer kurzen Verzögerung
        setTimeout(function() {
            window.location.href = '/IIM_CorporateDoggo/formular.html'; // Setzen Sie hier Ihre Ziel-URL ein
        }, 2000); // Verzögerung von 2 Sekunden
    }

    scrollContainer.addEventListener('scroll', function () {
        updateScrollbar();
        loadMoreContent(); // Rufe diese Funktion beim Scrollen auf
    });

    updateScrollbar(); // Initialer Aufruf zum Setzen der Scrollbar

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
