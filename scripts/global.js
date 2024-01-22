var globalData = {
    coinCount: 0,
    rewardCount: 6
};

//Punkte erhöhen und in HTML Updaten
function addCoins() {
    globalData.coinCount += 2450; //Coins um Wert erhöhen

    for (var i = 1; i <= globalData.rewardCount; i++) {
      var rew = document.getElementById('reward' + i + '-coins');
      rew.innerHTML = globalData.coinCount;
    }
  }