document.addEventListener('DOMContentLoaded', () => {
    const delay = 5000; // Verzögerung von 5 Sekunden

    setTimeout(() => {
        const videoPopup = document.getElementById('videoPopup');
        const videoElement = document.getElementById('adVideo');

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
});