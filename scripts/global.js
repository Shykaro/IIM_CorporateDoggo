// globals.js
var globalData = {
    coinCount: 0,
    coinAdd: 2450,
    rewardCount: 10,
    completedRewards: 0
};

var rewardArrayCoins = [];
var rewardArrayNames = ['Essen für Max', 'Einen Knochen', 'Max darf aus dem Käfig', 'Frühstück für Max', 'Darf mit anderen Hunden spielen'];

for (var i = 1; i <= globalData.rewardCount; i++) {
    rewardArrayCoins.push(i * 5000);
}

console.log(rewardArrayCoins)

// Load existing data from local storage
var savedCoinCount = localStorage.getItem('coinCount');
if (savedCoinCount !== null) {
    globalData.coinCount = parseInt(savedCoinCount);
}

// Load existing data from local storage
var savedCompletedRewards = localStorage.getItem('completedRewards');
if (savedCompletedRewards !== null) {
    globalData.completedRewards = parseInt(savedCompletedRewards);
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
        if ((i - 1) >= rewardArrayNames.length) {
            var randomReward = Math.floor(Math.random() * (rewardArrayNames.length - 1)) + 1;
            console.log(randomReward);
            rewardTitle.textContent = rewardArrayNames[randomReward];
        } else {
            rewardTitle.textContent = rewardArrayNames[i - 1];
        }

        var rewardCoins = document.createElement('p');
        var rewardCoinsSpan = document.createElement('span');
        rewardCoinsSpan.id = 'reward' + i + '-coins';
        rewardCoins.appendChild(rewardCoinsSpan);
        rewardCoins.innerHTML += '/' + rewardArrayCoins[i - 1] + ' Münzen';

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



    //////////////////// CREATE GET COINS ELEMENT //////////////////////////
    var getCoinsDiv = document.createElement('div');

    // Set attributes for the div
    getCoinsDiv.id = 'get-coins-id';
    getCoinsDiv.className = 'get-coins';

    // Create an image element
    var coinsImg = document.createElement('img');

    // Set attributes for the image
    coinsImg.className = 'get-coins-img';
    coinsImg.src = 'img/happy_company_logo_cut.png';
    coinsImg.alt = 'coin icon';

    // Create a paragraph element
    var coinsHeadline = document.createElement('p');
    coinsHeadline.className = 'get-coins-headline';
    coinsHeadline.innerHTML = '+ ' + globalData.coinAdd;

    // Append the image and paragraph to the div
    getCoinsDiv.appendChild(coinsImg);
    getCoinsDiv.appendChild(coinsHeadline);

    // Append the div to the body or any other container element
    document.body.appendChild(getCoinsDiv);
    //////////////////// END GET COINS ELEMENT //////////////////////////
}

// Punkte erhöhen und in HTML Updaten
function addCoins() {
    globalData.coinCount += globalData.coinAdd; // Coins um Wert erhöhen

    for (var i = 1; i <= globalData.rewardCount; i++) {
        var rew = document.getElementById('reward' + i + '-coins');
        rew.innerHTML = globalData.coinCount;
    }

    checkForRewards();

    //Show the get Coins animation
    var showAddCoins = document.getElementById('get-coins-id');

    setTimeout(() => {
        showAddCoins.classList.toggle('receive-coins');
    }, "500");
    console.log("coinCount:" + globalData.coinCount);

    // Save the updated coin count to local storage
    localStorage.setItem('coinCount', globalData.coinCount.toString());

    setTimeout(() => {
        showAddCoins.classList.toggle('receive-coins');
    }, "4000");
}

function checkForRewards() {

    console.log('Check for rewards' + globalData.completedRewards)

    for (var i = 1; i <= globalData.rewardCount; i++) {
        if (globalData.coinCount >= i * 5000) {
            var thisReward = document.getElementById('reward' + i);
            thisReward.classList.toggle('reward-completed');

            if (i > globalData.completedRewards) {
                console.log("completedRewards" + globalData.completedRewards);
                globalData.completedRewards++;
                //alert("Reward " + i + " unlocked!"); /

                // Save the updated coin count to local storage
                localStorage.setItem('completedRewards', globalData.completedRewards.toString());
            }
        }
    }
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