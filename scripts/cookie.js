
document.addEventListener('DOMContentLoaded', () => {

  createRewardSystem();
  rewardSystemFunctionality();
  addCoins();

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
});
