document.addEventListener('DOMContentLoaded', () => {

  createNarrator();
  createRewardSystem();
  rewardSystemFunctionality();
  addCoins();
  enterFullScreen(document.documentElement); // für den gesamten Tab

  var allMovingAdsArray = [];

  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createMovingAds(adNumber) {
    var movingAd = document.createElement('div');
    movingAd.className = 'moving-ad';
    movingAd.id = 'ad-' + adNumber;
    movingAd.style = 'z-index: ' + adNumber + ';';

    var innerAd = document.createElement('div');
    innerAd.className = 'inner-ad';

    var adVideo = document.createElement('video');
    adVideo.className = 'ad-video';
    adVideo.src = 'img/Werbevideos/Waschmaschine_werbung.mp4';

    var adClose = document.createElement('div');
    adClose.className = 'ad-close-x';
    adClose.style = 'z-index: ' + adNumber + 1 + ';';

    innerAd.appendChild(adClose);
    innerAd.appendChild(adVideo);
    movingAd.appendChild(innerAd);
    document.body.appendChild(movingAd);

    adVideo.muted = true;
    adVideo.loop = true;

    adVideo.play().catch(e => {
      console.error('Fehler beim Abspielen des Videos: ', e);
    });

    allMovingAdsArray.push(movingAd);

    //Ad event listener for closing the ads
    adClose.addEventListener('click', () => {
      console.log('Close Btuuon cicken')
      document.body.removeChild(document.getElementById('ad-'+adNumber));
      allMovingAdsArray.pop();
      console.log('MovingAds Array:' + allMovingAdsArray + 'length:' + allMovingAdsArray.length)

      //Go to other task when all ads were closed
      if (allMovingAdsArray.length == 0) {
        chooseRandomTask();
      }
  });

    return movingAd;
  }

  function moveDiv(div, speedX, speedY) {
    var rect = div.getBoundingClientRect();

    if (rect.left + speedX < 0 || rect.right + speedX > window.innerWidth) {
      speedX = -speedX;
    }

    if (rect.top + speedY < 0 || rect.bottom + speedY > window.innerHeight) {
      speedY = -speedY;
    }

    div.style.left = rect.left + speedX + 'px';
    div.style.top = rect.top + speedY + 'px';

    requestAnimationFrame(() => moveDiv(div, speedX, speedY));
  }

  for (let i = 0; i < 10; i++) {
    var div = createMovingAds(i);

    //Aspect Ratio for the created divs
    var aspectRatioWidth = 1280;
    var aspectRatioHeight = 720;

    //Min and Max sizes for the ad divs
    var min = 300;
    var max = 600;

    var width = getRandomNumber(min, max);
    var height = (width / aspectRatioWidth) * aspectRatioHeight;
    
    var x = getRandomNumber(0, window.innerWidth - width);
    var y = getRandomNumber(0, window.innerHeight - height);

    div.style.width = width + 'px';
    div.style.height = height + 'px';
    div.style.left = x + 'px';
    div.style.top = y + 'px';

    var speedX = getRandomNumber(1, 1.5) * (Math.random() < 0.5 ? 1 : -1);
    var speedY = getRandomNumber(1, 1.5) * (Math.random() < 0.5 ? 1 : -1);
    /* speedX = 0;
    speedY = 0; */

    moveDiv(div, speedX, speedY);
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
      showBubble("Schnell, schließe die Werbeanzeigen!", 3000);
    }, 1000);

    setTimeout(() => {
      showBubble("Echt schlimm mit dieser ganzen Werbung online. Wer lässt sowas bitte auf seiner Webseite zu?", 8000);
    }, 10000);
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