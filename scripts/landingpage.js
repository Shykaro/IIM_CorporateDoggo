document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Old coinCount: ' + globalData.coinCount)
    globalData.coinCount = 0;
    localStorage.setItem('coinCount', globalData.coinCount.toString());
    globalData.completedRewards = 0;
    localStorage.setItem('completedRewards', globalData.completedRewards.toString());
    console.log('New coinCount: ' + globalData.coinCount)
    enterFullScreen(document.documentElement); // für den gesamten Tab
});
