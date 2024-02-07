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

    // Fürs Randomizen der Images die verwendet werden
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
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

    var redirectToIndex = getRandomNumber(0, 9);

    // Funktion zum Erstellen eines zufälligen div
    function createRandomDiv(index) {
        var img = new Image();
        var randomImage = images[getRandomNumber(0, images.length - 1)];

        var div = document.createElement('div');
        div.className = 'random-div';
        document.body.appendChild(div);

        img.onload = function () {
            var scaleFactor = getRandomNumber(50, 100) / 100;
            div.style.width = img.width * scaleFactor + 'px';
            div.style.height = img.height * scaleFactor + 'px';

            var x = getRandomNumber(0, window.innerWidth - parseInt(div.style.width));
            var y = getRandomNumber(0, window.innerHeight - parseInt(div.style.height));
            div.style.left = x + 'px';
            div.style.top = y + 'px';

            if (index === redirectToIndex) {
                var link = document.createElement('div');
                link.className = 'right-download';

                var buttonColors = ['#FF0000', '#3BB143', '#006FB9'];
                var buttonColor = buttonColors[Math.floor(Math.random() * buttonColors.length)];

                var button = document.createElement('button');
                button.textContent = 'Download';
                button.style.backgroundColor = buttonColor; // Setzt random Background color
                button.style.color = 'white';
                button.style.padding = '15px 50px';
                button.style.border = 'none';
                button.style.borderRadius = '23px';
                button.style.cursor = 'pointer';
                button.style.fontSize = '30px';
                button.style.fontFamily = '"Inter-Regular", Helvetica';
                button.style.border = '3px ridge grey';
                button.style.transition = 'background-color 0.3s ease';
                button.style.position = 'relative'; // Muss relative/absolut sein wegen zIndex
                button.style.zIndex = 1;
                button.addEventListener("mouseover", function () {
                    button.style.backgroundColor = '#544C4A';
                });
                button.addEventListener("mouseout", function () {
                    button.style.backgroundColor = buttonColor;
                });
                var randomDivClone = div.cloneNode(false); // Clone ohne childs
                randomDivClone.appendChild(button); // button an cloned div hängen
                link.appendChild(randomDivClone);
                document.body.appendChild(link);
                var buttonWidth = button.offsetWidth;
                var buttonHeight = button.offsetHeight;
                randomDivClone.style.width = buttonWidth + 'px'
                randomDivClone.style.height = buttonHeight + 'px'
                button.onclick = function () {
                    rightDownloadclicked = true;
                    showDownloadList();
                    setTimeout(() => {
                        chooseRandomTask();
                    }, 8000);
                };
                link.appendChild(button);

                // Bestimmen der Position des link Divs
                link.style.position = 'absolute';
                link.style.left = `${x}px`;
                link.style.top = `${y}px`;
                link.style.width = `${button.offsetWidth}px`;
                link.style.height = `${button.offsetHeight}px`;
                createRightDownloadButton(div, x, y);

            } else {
                div.appendChild(img); // Bild wird angehängt
                divs.push(div);
                div.addEventListener("click", showDownloadList);
            }
        };
        img.src = randomImage;
    }

    //Erstellung nur für den Right-Download Button
    function createRightDownloadButton(div, x, y) {
        var link = document.createElement('div');
        link.className = 'right-download';
        link.style.position = 'absolute';
        link.style.left = `${x}px`;
        link.style.top = `${y}px`;

        var buttonColors = ['#FF0000', '#3BB143', '#006FB9'];
        var buttonColor = buttonColors[Math.floor(Math.random() * buttonColors.length)];

        var button = document.createElement('button');
        button.textContent = 'Download';
        button.style.backgroundColor = buttonColor;
        button.style.color = 'white';
        button.style.padding = '15px 50px';
        button.style.border = 'none';
        button.style.borderRadius = '23px';
        button.style.cursor = 'pointer';
        button.style.fontSize = '30px';
        button.style.fontFamily = '"Inter-Regular", Helvetica';
        button.style.border = '3px ridge grey';
        button.style.transition = 'background-color 0.3s ease';
        button.style.zIndex = 10; // Stellt den Button nach vorne

        button.addEventListener("mouseover", function () {
            button.style.backgroundColor = '#544C4A';
        });
        button.addEventListener("mouseout", function () {
            button.style.backgroundColor = buttonColor;
        });
        button.addEventListener("click", function () {
            rightDownloadclicked = true;
            showDownloadList();
            setTimeout(() => {
                chooseRandomTask();
            }, 8000);
        });

        link.appendChild(button); // Button wird zum link div hinzugefügt
        document.body.appendChild(link); // link div wird zum Dokument hinzugefügt
    }

    for (var i = 0; i < 30; i++) {
        createRandomDiv(i);
    }
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