document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Old coinCount: ' + globalData.coinCount)
    globalData.coinCount = 0;
    localStorage.setItem('coinCount', globalData.coinCount.toString());
    console.log('New coinCount: ' + globalData.coinCount)
});
