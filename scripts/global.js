// globals.js
var globalData = {
    coinCount: 0,
    rewardCount: 6
};

// Load existing data from local storage
var savedCoinCount = localStorage.getItem('coinCount');
if (savedCoinCount !== null) {
    globalData.coinCount = parseInt(savedCoinCount);
}

// Punkte erhöhen und in HTML Updaten
function addCoins() {
    globalData.coinCount += 2450; // Coins um Wert erhöhen

    for (var i = 1; i <= globalData.rewardCount; i++) {
        var rew = document.getElementById('reward' + i + '-coins');
        rew.innerHTML = globalData.coinCount;
    }

    console.log("coinCount:" + globalData.coinCount);

    // Save the updated coin count to local storage
    localStorage.setItem('coinCount', globalData.coinCount.toString());
}

function createRewardSystem() {
    // Create rewards header
    var rewardsHeader = document.createElement('div');
    rewardsHeader.id = 'rewards-toggle';
    rewardsHeader.className = 'rewards-header';

    // Create trophy image
    var trophyImage = document.createElement('img');
    trophyImage.className = 'trophy-img';
    trophyImage.src = 'img/rewards_trophy_icon.png';
    trophyImage.alt = 'reward icon';

    // Create rewards headline
    var rewardsHeadline = document.createElement('p');
    rewardsHeadline.className = 'rewards-headline';
    rewardsHeadline.textContent = 'Rewards';

    // Create rewards arrow
    var rewardsArrow = document.createElement('span');
    rewardsArrow.id = 'reward-header-arrow';
    rewardsArrow.className = 'rewards-arrow';

    // Create SVG for arrow
    var arrowSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    arrowSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    arrowSvg.setAttribute('width', '38');
    arrowSvg.setAttribute('height', '32');
    arrowSvg.setAttribute('viewBox', '0 0 38 32');
    arrowSvg.setAttribute('fill', 'none');

    var arrowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    arrowPath.setAttribute('d', 'M19 32L0.813469 0.5H37.1865L19 32Z');
    arrowPath.setAttribute('fill', 'white');

    arrowSvg.appendChild(arrowPath);
    rewardsArrow.appendChild(arrowSvg);

    // Append elements to rewards header
    rewardsHeader.appendChild(trophyImage);
    rewardsHeader.appendChild(rewardsHeadline);
    rewardsHeader.appendChild(rewardsArrow);

    // Append rewards header to body
    document.body.appendChild(rewardsHeader);

    // Create reward system container
    var rewardSystemContainer = document.createElement('div');
    rewardSystemContainer.id = 'reward-system-id';
    rewardSystemContainer.className = 'reward-system';

    // Create rewards list
    var rewardsList = document.createElement('ul');
    rewardsList.className = 'all-rewards';
    rewardsList.id = 'all-rewards-id';

    // Create individual reward items
    for (var i = 1; i <= globalData.rewardCount; i++) {
        var rewardItem = document.createElement('li');
        rewardItem.id = 'reward' + i;

        var rewardImage = document.createElement('img');
        rewardImage.className = 'reward-img';
        rewardImage.src = 'img/rewards_trophy_icon.png';

        var rewardTextContainer = document.createElement('div');

        var rewardTitle = document.createElement('p');
        rewardTitle.textContent = 'Reward Title ' + i;

        var rewardCoins = document.createElement('p');
        var rewardCoinsSpan = document.createElement('span');
        rewardCoinsSpan.id = 'reward' + i + '-coins';
        rewardCoins.appendChild(rewardCoinsSpan);
        rewardCoins.innerHTML += '/' + 5000 * i + 'Münzen';

        rewardTextContainer.appendChild(rewardTitle);
        rewardTextContainer.appendChild(rewardCoins);

        rewardItem.appendChild(rewardImage);
        rewardItem.appendChild(rewardTextContainer);

        rewardsList.appendChild(rewardItem);
    }

    // Append rewards list to reward system container
    rewardSystemContainer.appendChild(rewardsList);

    // Append reward system container to body
    document.body.appendChild(rewardSystemContainer);
}

function rewardSystemFunctionality() {
    const rewardsHeader = document.getElementById('rewards-toggle');
    const rewardSystem = document.getElementById('reward-system-id');
    const rewardSystemList = document.getElementById('all-rewards-id');
    const rewardsArrow = document.getElementById('reward-header-arrow');

    rewardsHeader.addEventListener('click', () => {
        rewardSystem.classList.toggle('rewards-open'); // öffnet die Rewards-Anzeige
        rewardSystemList.classList.toggle('rewardList-open');
        rewardsArrow.classList.toggle('arrow-flipped'); // Pfeil flippen
        rewardsHeader.classList.toggle('header-wide'); // Header breiter machen bei klick
    });
}