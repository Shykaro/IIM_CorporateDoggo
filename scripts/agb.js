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
});
