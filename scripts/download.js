document.addEventListener('DOMContentLoaded', (event) => {

    createRewardSystem();
    rewardSystemFunctionality();
    addCoins();

    var images = ['./img/Malware_anzeige.png', './img/Upload_green_old.png', './img/Download_red_old.png', './img/Download_blue_old.png', './img/Upload_purple_old.png'];
    var divs = []; // Array zum Speichern der erstellten divs

    // Function to get a random number within a range
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to check if two divs overlap
    function doDivsOverlap(div1, div2) {
        var rect1 = div1.getBoundingClientRect();
        var rect2 = div2.getBoundingClientRect();

        return (
            rect1.left < rect2.right &&
            rect1.right > rect2.left &&
            rect1.top < rect2.bottom &&
            rect1.bottom > rect2.top
        );
    }

    // Function to create a random div
    // Funktion zum Erstellen eines zufälligen div
    function createRandomDiv() {
        var img = new Image();
        var randomImage = images[getRandomNumber(0, images.length - 1)];
        img.src = randomImage;

        img.onload = function () {
            var scaleFactor = getRandomNumber(50, 100) / 100; // Zufälliger Skalierungsfaktor zwischen 0.5 und 1.0
            var div = document.createElement('div');
            div.className = 'random-div';
            div.style.width = img.width * scaleFactor + 'px';
            div.style.height = img.height * scaleFactor + 'px';
            document.body.appendChild(div); // Temporär hinzufügen, um getBoundingClientRect zu verwenden

            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;

            var gridColumns = 3;
            var gridRows = 3;

            var cellWidth = windowWidth / gridColumns;
            var cellHeight = windowHeight / gridRows;

            var narratorExclusionZone = {
                x: window.innerWidth - 300, // Narrator-Breite anpassen
                y: window.innerHeight - 300, // Narrator-Höhe anpassen
            };

            var overlap, x, y;
            do {
                overlap = false;
                var columnIndex = getRandomNumber(0, gridColumns - 1);
                var rowIndex = getRandomNumber(0, gridRows - 1);

                x = columnIndex * cellWidth + getRandomNumber(0, cellWidth - img.width * scaleFactor);
                y = rowIndex * cellHeight + getRandomNumber(0, cellHeight - img.height * scaleFactor);
                div.style.left = x + 'px';
                div.style.top = y + 'px';

                for (var i = 0; i < divs.length; i++) {
                    if (doDivsOverlap(div, divs[i])) {
                        overlap = true;
                        break;
                    }
                }
            } while (overlap || (x + img.width * scaleFactor > narratorExclusionZone.x && y + img.height * scaleFactor > narratorExclusionZone.y));

            div.appendChild(img);

            if (Math.random() < 0.2) {
                var link = document.createElement('a');
                link.href = 'advideotask.html';
                link.appendChild(div.cloneNode(true));
                document.body.appendChild(link);
                document.body.removeChild(div);
            } else {
                divs.push(div);
            }
        };
    }


    // Erstellen Sie 10 zufällige divs
    for (var i = 0; i < 10; i++) {
        createRandomDiv();
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
