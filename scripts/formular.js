document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('cameraFeed');

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                videoElement.srcObject = stream;
            })
            .catch(function(error) {
                console.log("Something went wrong accessing the camera!", error);
            });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Referenzen auf die Formularfelder und den Submit-Button
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const genderSelect = document.getElementById('gender');
    const submitButton = document.querySelector('.submit-btn');

    // Funktion, um zu überprüfen, ob alle Felder ausgefüllt sind
    function checkFormInputs() {
        // Prüft, ob jedes Feld einen Wert hat
        const allFilled = nameInput.value && ageInput.value && genderSelect.value;
        
        // Aktiviert oder deaktiviert den Submit-Button
        submitButton.disabled = !allFilled;
    }

    // Event-Listener für Formularfelder
    [nameInput, ageInput, genderSelect].forEach(input => {
        input.addEventListener('change', checkFormInputs);
        input.addEventListener('keyup', checkFormInputs);
    });

    // Initialer Aufruf, um den Zustand des Submit-Buttons zu setzen
    checkFormInputs();
});