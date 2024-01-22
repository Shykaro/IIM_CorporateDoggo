
document.addEventListener('DOMContentLoaded', () => {

  //////////////////////////////// NARRATOR CODE ////////////////////////////////
    const characterIcon = document.getElementById('character-icon');
    const speechBubble = document.getElementById('speech-bubble');
  
    characterIcon.addEventListener('click', () => {
      speechBubble.classList.toggle('visible'); // Toggles visibility and animation
    });
  
    // Function to update text at different times
    function updateBubbleText() {
      setTimeout(() => {
        speechBubble.textContent = "Es würde uns freuen wenn du deinen Belohnungs-Cookie annimmst!";
      }, 15000); // Changes text after 15 seconds
  
      setTimeout(() => {
        speechBubble.textContent = "Bitte nimm den Cookie an.";
      }, 30000); // Changes text after 30 seconds
    }
  
    updateBubbleText();
    //////////////////////////////// NARRATOR END ////////////////////////////////

    //////////////////////////////// REWARD CODE ////////////////////////////////
    const rewardsHeader = document.getElementById('rewards-toggle');
    const rewardSystem = document.getElementById('reward-system-id');
    const rewardsArrow = document.getElementById('reward-header-arrow');

    rewardsHeader.addEventListener('click', () => {
      rewardSystem.classList.toggle('rewards-open'); // öffnet die Rewards-Anzeige
      rewardsArrow.classList.toggle('arrow-flipped'); // Pfeil flippen
      rewardsHeader.classList.toggle('header-wide'); // Header breiter machen bei klick
      addCoins();
    });

    //////////////////////////////// REWARD END ////////////////////////////////
  });
  