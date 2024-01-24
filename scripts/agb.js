document.addEventListener("DOMContentLoaded", function () {

    createRewardSystem();
    rewardSystemFunctionality();
    addCoins();
    enterFullScreen(document.documentElement); // für den gesamten Tab

    var scrollContainer = document.querySelector('.rectangle-3');
    var customScrollbar = document.querySelector('.rectangle-2');
    var textList = [
        "Abschnitt II: Optimierung der Spielerfahrung: Zugriff auf Gerätefunktionen<br><br>Durch die aktive Teilnahme an diesem Spiel erklären Sie Ihr ausdrückliches Einverständnis, dass The Happy Company berechtigt ist, auf verschiedene Funktionen Ihres Geräts zuzugreifen. Dazu gehören, sind jedoch nicht darauf beschränkt, das Mikrofon, die Kamera und andere Eingabemöglichkeiten. Diese Berechtigungen sind strikt darauf ausgerichtet, die Funktionalität des Spiels zu optimieren und Ihre gesamte Spielerfahrung zu verbessern.<br><br>Konkret bedeutet dies, dass das Spiel beispielsweise auf das Mikrofon zugreifen kann, um Ihnen interaktive Audioelemente zu bieten oder möglicherweise Sprachsteuerungsfunktionen zu ermöglichen. Der Zugriff auf die Kamera könnte für Augmented-Reality-Features oder personalisierte visuelle Elemente innerhalb des Spiels genutzt werden. Die Erlaubnis für andere Eingabemöglichkeiten könnte dazu dienen, die Interaktion und Steuerung im Spiel zu erleichtern.<br><br>Es ist wichtig zu betonen, dass diese Zugriffe ausschließlich dem Zweck dienen, Ihr Spielerlebnis zu bereichern, und The Happy Company wird Ihre persönlichen Informationen mit höchster Vertraulichkeit behandeln. Ihre Zustimmung zu diesen Zugriffen ermöglicht es uns, innovative Funktionen zu entwickeln und Ihnen eine unterhaltsame und interaktive Spielerfahrung zu bieten.<br><br><br>",
        "Abschnitt III: Münzen und Belohnungen im Spiel<br><br>Durch Ihre Beteiligung am Spiel Hilf Max dem Hund! haben Sie die Möglichkeit, Münzen zu sammeln und verschiedene Belohnungen zu erwerben. Es ist wichtig zu betonen, dass diese Münzen keinen monetären Wert haben und in keiner Weise in echte Währung umgewandelt werden können. Die gesammelten Münzen sind ausschließlich für den Gebrauch innerhalb des Spiels bestimmt und haben keinerlei Verwendungszweck außerhalb des virtuellen Spielszenarios.<br><br>Die angebotenen Belohnungen im Spiel dienen als Anreiz für Ihr Engagement und Ihre aktive Teilnahme. Es ist jedoch wichtig zu verstehen, dass die Verfügbarkeit und Einlösung dieser Belohnungen vollständig im Ermessen von The Happy Company liegen. Wir behalten uns das Recht vor, die Art, den Umfang und die Verfügbarkeit der Belohnungen jederzeit und ohne vorherige Ankündigung zu ändern.<br><br>Wir weisen darauf hin, dass die im Spiel angepriesenen Belohnungen lediglich virtuelle Güter darstellen und keinerlei materiellen oder realen Wert haben. The Happy Company behält sich außerdem das Recht vor, Belohnungen nach eigenem Ermessen einzulösen oder nicht, ohne dass dies zu einer Verpflichtung gegenüber den Spielern führt.<br><br>Wir bitten Sie, diese Informationen sorgfältig zu berücksichtigen und zu akzeptieren, dass die Münzen und Belohnungen im Spiel ausschließlich für den virtuellen Gebrauch bestimmt sind und nicht übertragbar oder in irgendeiner Form außerhalb des Spiels genutzt werden können.<br><br><br>",
        "Abschnitt IV: Verantwortung für Max den Hund<br><br>Durch die Teilnahme am Spiel Hilf Max dem Hund! erklären Sie sich ausdrücklich damit einverstanden, dass Sie die volle Verantwortung für das Wohlergehen von Max, dem Hund, übernehmen. Die im Spiel dargestellten und erwähnten Handlungen, einschließlich, aber nicht beschränkt auf, Füttern, Spielen und Pflegen, spiegeln echte Pflegehandlungen für einen Hund wider.<br><br>Es ist wichtig zu beachten, dass die im Spiel erworbenen Fähigkeiten und Belohnungen direkten Einfluss auf das Wohlbefinden von Max haben. Durch Ihre Entscheidungen und Aktionen im Spiel gestalten Sie aktiv die Lebensqualität von Max. Wir betonen, dass die im Spiel gezeigten Handlungen keine symbolische Darstellung der realen Verantwortlichkeiten eines Hundebesitzers sind.<br><br>Wir appellieren an Ihr Verantwortungsbewusstsein und Ihre Sorgfalt im Umgang mit Max. Jegliche Vernachlässigung, Missbrauch oder unsachgemäße Pflege kann sich negativ auf den Zustand von Max auswirken. Bitte nehmen Sie diese Verantwortung ernst und handeln Sie stets im besten Interesse von Max, um eine positive Spielerfahrung zu gewährleisten.<br><br>Durch die Fortsetzung der Spielteilnahme erklären Sie Ihr ausdrückliches Einverständnis mit diesen Bedingungen der Verantwortung für Max den Hund.",
        "Wenn sie weiter scrollen nehmen sie die AGBs an.",// Text der hinzugefügt werden soll
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
                newText.innerHTML = textList[currentTextIndex];
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
            window.location.href = './formular.html'; // Setzen Sie hier Ihre Ziel-URL ein
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
      showBubble("Du musst die AGBs annehmen, dass wir weiter Max helfen können.", 8000);
    }, 2000);

    setTimeout(() => {
      showBubble("Komm schon, tu es doch für Max!", 7000);
    }, 20000);

    setTimeout(() => {
      showBubble("Solche AGBs kennst du doch sowieso schon, ist wie bei jeder anderen Anwendung auch.", 8000);
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
