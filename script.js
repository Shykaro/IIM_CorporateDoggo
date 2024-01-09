document.addEventListener("DOMContentLoaded", function(event) {
    console.log("Dokument loaded");
    speechRecognition();
});

function speechRecognition () {
    const speechRecognition = window.speechRecognition || webkitSpeechRecognition;
    const recognition = new speechRecognition;
    recognition.start();

    recognition.onresult() = event => {
        const lastResult = event.results[event.results.length - 1];
        transcript.innerHTML = lastResult[0];
    }
}