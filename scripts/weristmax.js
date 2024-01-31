document.addEventListener('DOMContentLoaded', function () {

    const container1 = document.getElementById('container1');
    const container2 = document.getElementById('container2');
    const container3 = document.getElementById('container3');
    const container4 = document.getElementById('container4');
    const container5 = document.getElementById('container5');
    let isAnimating = false;
    var scrollStep = 0;

    // Listen for wheel events to detect scrolling
    document.addEventListener('wheel', function (event) {
        if (!isAnimating) {
            if (event.deltaY > 0 && window.scrollY === 0) {
                // Scroll down and start animation if scrolled down enough
                console.log('scroll down')
                startAnimation('down');
            } else if (event.deltaY < 0 && window.scrollY === 0) {
                // Scroll up and start animation if scrolled up to the top
                console.log('scroll up')
                startAnimation('up');
            }
        }
    });

    function startAnimation(direction) {
        isAnimating = true;

        if (direction == 'down') {
            // Move the first container based on the scroll direction
            container1.style.transform = direction === 'down' ? 'translateX(-100%)' : 'translateX(0)';

            // Move the second container based on the scroll direction
            container2.style.transform = direction === 'down' ? 'translateX(0)' : 'translateX(100%)';

            if (scrollStep != 5) {
                scrollStep++;
            }
            console.log('scrollStep: ' + scrollStep)
        } else {
            // Move the first container based on the scroll direction
            container1.style.transform = direction === 'up' ? 'translateX(0)' : 'translateX(-100%)';

            // Move the second container based on the scroll direction
            container2.style.transform = direction === 'up' ? 'translateX(100%)' : 'translateX(0)';
        
            if ( scrollStep != 0) {
                scrollStep--;
            }
            console.log('scrollStep: ' + scrollStep)
        }

        isAnimating = false;

        // Simulate loading or any other asynchronous task
        /* setTimeout(function () {
            // Reset the containers' positions after the animation
            container.style.transform = 'translateX(0)';
            container2.style.transform = 'translateX(100%)';
            isAnimating = false;
        }, 500); */
    }
});