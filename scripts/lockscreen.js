function enterFullScreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { /* Firefox */
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE/Edge */
      element.msRequestFullscreen();
    }
  }
  
  // Rufen Sie diese Funktion irgendwo in Ihrem Code auf, z. B. nach einem Button-Klick:
  
//document.addEventListener('contextmenu', event => event.preventDefault());
