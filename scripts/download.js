document.addEventListener('DOMContentLoaded', (event) => {

    createRewardSystem();
    rewardSystemFunctionality();
    addCoins();
    //enterFullScreen(document.documentElement); // für den gesamten Tab


    var images = ['./img/Malware_anzeige.png', './img/Upload_green_fake.png', './img/Download_red_fake.png', './img/Download_blue_fake.png', './img/Upload_purple_fake.png'];
    var divs = []; // Array zum Speichern der erstellten divs
    const downloadNamesArray = ['malware.exe', 'anti-virus.exe', 'ghx44sfe_53x.msi', '16kVideoDownloader.exe', 'maxthedog.png.exe']
    var downloadListlength = 0;
    var finishedDownloadListLength = 0;
    var rightDownloadclicked = false;

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

    function showDownloadList() {
        const downloadList = document.getElementById('download-list-id');
        const allDownloads = document.getElementById('all-downloads-id');

        downloadList.classList.add('download-list-shown');

        var newDownload = document.createElement('li');
        var downloadName = document.createElement('span');

        if (rightDownloadclicked == true) {
            downloadName.textContent = 'max-finanz-software.exe';
        } else {
            var randomDownloadName = Math.floor(Math.random() * downloadNamesArray.length);
            downloadName.textContent = downloadNamesArray[randomDownloadName];
        }

        var downloadIcon = document.createElement('img');


        downloadIcon.setAttribute('src', 'img/downloads_icon.png');

        newDownload.appendChild(downloadName);
        newDownload.appendChild(downloadIcon);
        allDownloads.appendChild(newDownload);

        downloadListlength++;
        /* console.log('finishedDownloadListLength' + finishedDownloadListLength)
        console.log('downloadListlength' + downloadListlength) */

        setTimeout(() => {
            finishedDownloadListLength++;
            if (downloadListlength == finishedDownloadListLength) {
                downloadList.classList.remove('download-list-shown');
            }
        }, 10000);
    }

    var redirectToIndex = getRandomNumber(0, 9); // Wählt einen Index von 0 bis 9

    // Function to create a random div
    // Funktion zum Erstellen eines zufälligen div
    function createRandomDiv(index) {
        var img = new Image();
        var randomImage = images[getRandomNumber(0, images.length - 1)];
        img.src = randomImage;

        var scaleFactor = getRandomNumber(50, 100) / 100; // Zufälliger Skalierungsfaktor zwischen 0.5 und 1.0
        var div = document.createElement('div');
        div.className = 'random-div';
        div.style.width = img.width * scaleFactor + 'px';
        div.style.height = img.height * scaleFactor + 'px';
        document.body.appendChild(div); // Temporär hinzufügen, um getBoundingClientRect zu verwenden
        div.appendChild(img); // Move this line before setting the onload event of the img element

        img.onload = function () {
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
            var maxTries = 10;
            var tries = 0;

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

                tries++
                if (tries === maxTries) {
                    console.warn('Maximum tries reached. Aborting placement of div.');
                    document.body.removeChild(div);
                    break;
                }
            } while (overlap || (x + img.width * scaleFactor > narratorExclusionZone.x && y + img.height * scaleFactor > narratorExclusionZone.y));

            if (index === redirectToIndex) {
                var link = document.createElement('div');
                link.className = 'right-download';

                var buttonColors = ['#FF0000', '#3BB143', '#006FB9'];
                var buttonColor = buttonColors[Math.floor(Math.random() * buttonColors.length)];

                var button = document.createElement('button');
                button.textContent = 'Download';
                button.style.backgroundColor = buttonColor; // Set the background color to the random color
                button.style.color = 'white';
                button.style.padding = '15px 50px';
                button.style.border = 'none';
                button.style.borderRadius = '23px';
                button.style.cursor = 'pointer';
                button.style.fontSize = '30px';
                button.style.fontFamily = '"Inter-Regular", Helvetica';
                button.style.border = '3px ridge grey';
                button.style.transition = 'background-color 0.3s ease';
                button.style.position = 'relative'; // Set the position property to relative
                button.style.zIndex = 1;
                button.addEventListener("mouseover", function () {
                    button.style.backgroundColor = '#544C4A';
                });
                button.addEventListener("mouseout", function () {
                    button.style.backgroundColor = buttonColor;
                });
                var randomDivClone = div.cloneNode(false); // Clone the div without children
                randomDivClone.appendChild(button); // Append the button to the cloned "random-div" element
                link.appendChild(randomDivClone);
                document.body.appendChild(link);
                var buttonWidth = button.offsetWidth;
                var buttonHeight = button.offsetHeight;
                randomDivClone.style.width = buttonWidth + 'px'
                randomDivClone.style.height = buttonHeight + 'px'
                link.addEventListener("click", function () {
                    rightDownloadclicked = true;
                    showDownloadList(showDownloadList, chooseRandomTask);
                });
                document.body.removeChild(div); // Move this line after adding the event listener
            } else {
                div.appendChild(img);
                divs.push(div);
                document.body.appendChild(div);
            }
        };
    }

    // Erstellen Sie 10 zufällige divs und übergeben Sie den aktuellen Index
    for (var i = 0; i < 20; i++) {
        createRandomDiv(i);
    }
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
            showBubble("Max braucht eine Software für seine Finanzen. Hilf Max den richtigen Button zu finden.", 8000);
        }, 1000);

        setTimeout(() => {
            showBubble("Achte mal auf deine Maus, vielleicht findest du ihn so.", 8000);
        }, 20000);

        setTimeout(() => {
            showBubble("Vielleicht klickst du einfach mal auf irgendeinen drauf. Wir achten sehr genau darauf, welche Werbung wir anzeigen lassen;)", 10000);
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
