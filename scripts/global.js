// globals.js
var globalData = {
    coinCount: 0,
    coinAdd: 2450,
    rewardCount: 20,
    completedRewards: 0,
    lastTask: 0
};

var rewardArrayCoins = [];
const rewardArrayNames = ['Essen für Max', 'Einen Knochen', 'Max darf aus dem Käfig', 'Frühstück für Max', 'Darf mit anderen Hunden spielen'];

const infiniteTasks = ['advideotask', 'download', 'sponsormemory', 'closetheads'];

for (var i = 1; i <= globalData.rewardCount; i++) {
    rewardArrayCoins.push(i * 5000);
}

// Load existing CointCount from local storage
var savedCoinCount = localStorage.getItem('coinCount');
if (savedCoinCount !== null) {
    globalData.coinCount = parseInt(savedCoinCount);
}

// Load existing completedRewards from local storage
var savedCompletedRewards = localStorage.getItem('completedRewards');
if (savedCompletedRewards !== null) {
    globalData.completedRewards = parseInt(savedCompletedRewards);
}

// Load existing lastTask from local storage
var savedLastTask = localStorage.getItem('lastTask');
if (savedLastTask !== null) {
    globalData.lastTask = parseInt(savedLastTask);
}

///////////////////////// GO BACK TO INDEX ////////////////////////
document.addEventListener('keydown', function (event) {
    //go back to the landingpage by pressing shift and +
    if (event.key == '*') {
        console.log('both key pressed!');
        window.location.href = 'index.html';
    }
});

function createRewardSystem() {
    ///////////////////////// CREATE REWARDS HEADER ELEMENT ////////////////////////
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
    ///////////////////////// END REWARDS HEADER ELEMENT ////////////////////////

    ////////////////////////// CREATE REWARDS ELEMENT ////////////////////////////
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
            //console.log(randomReward);
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
    ////////////////////////// END REWARDS ELEMENT ////////////////////////////

    ////////////////// CREATE NEW REWARD UNLOCKED ELEMENT /////////////////////
    // Create reward unlock
    var rewardUnlocked = document.createElement('div');
    rewardUnlocked.id = 'reward-unlocked-id';
    rewardUnlocked.className = 'reward-unlocked';

    // Create unlock image
    var unlockImage = document.createElement('img');
    unlockImage.className = 'unlock-img';
    unlockImage.src = 'img/rewards_trophy_icon.png';
    unlockImage.alt = 'unlock icon';

    // Create unlock text
    var unlockTextWrap = document.createElement('div');
    unlockTextWrap.className = 'unlock-text-wrap';

    var unlockText = document.createElement('p');
    unlockText.className = 'unlock-text';
    unlockText.textContent = 'Neuer Reward freigeschalten!';

    var unlockRewardTitle = document.createElement('p');
    unlockRewardTitle.className = 'unlock-reward-title';
    unlockRewardTitle.textContent = 'Placeholder-Text for Title';

    unlockTextWrap.appendChild(unlockText);
    unlockTextWrap.appendChild(unlockRewardTitle);

    // Append elements to rewards header
    rewardUnlocked.appendChild(unlockImage);
    rewardUnlocked.appendChild(unlockTextWrap);

    // Append rewards header to body
    document.body.appendChild(rewardUnlocked);
    ////////////////// END NEW REWARD UNLOCKED ELEMENT /////////////////////

    //////////////////// CREATE GET COINS ELEMENT //////////////////////////
    var getCoinsDiv = document.createElement('div');

    // Set attributes for the div
    getCoinsDiv.id = 'get-coins-id';
    getCoinsDiv.className = 'get-coins';

    // Create an image element
    var coinsImg = document.createElement('img');

    // Set attributes for the image
    coinsImg.className = 'get-coins-img';
    coinsImg.src = 'img/bone_coin.png';
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
    console.log("coinCount: " + globalData.coinCount);

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
                document.getElementById('reward-unlocked-id').classList.toggle('show-unlock');
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

//////////////////// CREATE NARRATOR ELEMENT //////////////////////////
function createNarrator() {
    // Create the character-container div
    const characterContainer = document.createElement('div');
    characterContainer.id = 'character-container';

    // Create the character-icon div with an image
    const characterIcon = document.createElement('div');
    characterIcon.id = 'character-icon';

    const narratorImg = document.createElement('img');
    narratorImg.id = 'narrator_img';
    narratorImg.src = 'img/happy_user_cut.png';
    narratorImg.alt = 'narrator';

    characterIcon.appendChild(narratorImg);

    // Create the speech-bubble div (initially hidden)
    const speechBubble = document.createElement('div');
    speechBubble.id = 'speech-bubble';
    speechBubble.classList.add('hidden');

    // Append the elements to the character-container
    characterContainer.appendChild(characterIcon);
    characterContainer.appendChild(speechBubble);

    // Append the character-container to the document body
    document.body.appendChild(characterContainer);
}
//////////////////// END NARRATOR ELEMENT //////////////////////////

/* function typeWriter(textElement, textContent) {
    console.log(textContent);

    var i = 0;
    var speed = 0.1; // Adjust the typing speed (milliseconds per character)
  
    function type() {
      if (i < textContent.length) {
        var randomDelay = Math.random() * 5; // Random delay between 0 and 100 milliseconds

        setTimeout(function() {
            if (textContent.charAt(i) == '<') {
                textElement.appendChild(document.createElement('br'));
                i += 3;
            } else {
                textElement.innerHTML += textContent.charAt(i);
            }
            i++;

            type();
          }, speed + randomDelay);
      }
    }
  
    type();
  } */

function typeWriter(textElement, textContent) {
    //console.log(textContent);

    var i = 0;
    var speed = 0.001; // Adjust the typing speed (milliseconds per character)

    function type(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;

        if (progress > speed) {
            start = timestamp;
            if (i < textContent.length) {
                if (textContent.charAt(i) == '<') {
                    textElement.appendChild(document.createElement('br'));
                    i += 3;
                } else {
                    textElement.innerHTML += textContent.charAt(i);
                }
                i++;
            }
        }

        if (i < textContent.length) {
            requestAnimationFrame(type);
        }
    }

    var start = null;
    requestAnimationFrame(type);
}

function chooseRandomTask() {

    var randomTaskNumber = Math.round(Math.random() * 3);
    console.log('lasttask' + globalData.lastTask)
    console.log('Tasknumber: ' + randomTaskNumber + ',' + infiniteTasks[randomTaskNumber])
    if (randomTaskNumber != globalData.lastTask) {
        var randomTask = infiniteTasks[randomTaskNumber];
        globalData.lastTask = randomTaskNumber;

        // Save the updated coin count to local storage
        localStorage.setItem('lastTask', globalData.lastTask.toString());

        // Use a switch statement to determine which HTML file to open based on the task
        switch (randomTask) {
            case 'advideotask':
                setTimeout(() => {
                    window.location.href = 'advideotask.html';
                }, "2000");
                break;
            case 'download':
                setTimeout(() => {
                    window.location.href = 'download.html';
                }, "2000");
                break;
            case 'sponsormemory':
                setTimeout(() => {
                    window.location.href = 'sponsormemory.html';
                }, "2000");
                break;
            case 'closetheads':
                setTimeout(() => {
                    window.location.href = 'closetheads.html';
                }, "2000");
                break;
            default:
                console.log("Unknown task:", randomTask);
        }
    } else {
        chooseRandomTask();
    }
};