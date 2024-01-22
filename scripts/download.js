document.addEventListener('DOMContentLoaded', (event) => {

    createRewardSystem();
    rewardSystemFunctionality();
    addCoins();

    var images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
    var divs = []; // Array to store the created divs

    // Function to get a random number within a range
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to check if two divs overlap
    function doDivsOverlap(div1, div2) {
        return (
            div1.offsetLeft < div2.offsetLeft + div2.offsetWidth &&
            div1.offsetLeft + div1.offsetWidth > div2.offsetLeft &&
            div1.offsetTop < div2.offsetTop + div2.offsetHeight &&
            div1.offsetTop + div1.offsetHeight > div2.offsetTop
        );
    }

    // Function to create a random div
    function createRandomDiv() {
        var div = document.createElement('div');
        div.className = 'random-div';

        // Set random size within a range (minimum size is 50x50)
        var width, height;

        // Randomly choose between 16:9 and 1:1 aspect ratios
        if (Math.random() < 0.5) {
            // 16:9 aspect ratio
            width = getRandomNumber(50, 200);
            height = Math.floor(width * 9 / 16);
        } else {
            // 1:1 aspect ratio
            height = width = getRandomNumber(50, 200);
        }

        div.style.width = width + 'px';
        div.style.height = height + 'px';

        // Set random position within the window grid
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;

        var gridColumns = 3;
        var gridRows = 3;

        var cellWidth = windowWidth / gridColumns;
        var cellHeight = windowHeight / gridRows;

        var columnIndex = getRandomNumber(0, gridColumns - 1);
        var rowIndex = getRandomNumber(0, gridRows - 1);

        var x, y;

        // Try to find a position that does not overlap with existing divs
        do {
            x = columnIndex * cellWidth + getRandomNumber(0, cellWidth - width);
            y = rowIndex * cellHeight + getRandomNumber(0, cellHeight - height);
        } while (divs.some(existingDiv => doDivsOverlap(div, existingDiv)));

        div.style.left = x + 'px';
        div.style.top = y + 'px';

        // Set random image
        var randomImage = images[getRandomNumber(0, images.length - 1)];
        var img = document.createElement('img');
        img.src = randomImage;
        div.appendChild(img);

        // Make one of the divs a link
        if (Math.random() < 0.2) { // Adjust the probability as needed
            var link = document.createElement('a');
            link.href = 'target.html'; // Replace with the actual target HTML page
            link.appendChild(div.cloneNode(true)); // Clone the div content into the anchor
            document.body.appendChild(link);
        } else {
            document.body.appendChild(div);
        }

        divs.push(div); // Add the created div to the array
    }

    // Create 10 random divs
    for (var i = 0; i < 10; i++) {
        createRandomDiv();
    }
});
