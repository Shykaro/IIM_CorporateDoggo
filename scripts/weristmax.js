document.addEventListener('DOMContentLoaded', function () {

    const container1 = document.getElementById('container1');
    const container2 = document.getElementById('container2');
    const container3 = document.getElementById('container3');
    const container4 = document.getElementById('container4');
    const container5 = document.getElementById('container5');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    const image3 = document.getElementById('image3');
    const image4 = document.getElementById('image4');
    const image5 = document.getElementById('image5');
    const werHeader = document.getElementById('wer-header-id');
    const scrollArrow = document.getElementById('scroll-arrow-id');

    const scrollStep1 = 30;
    const scrollStep2 = 80;
    const scrollStep3 = 130;
    const scrollStep4 = 180;
    const scrollStep5 = 230;
    const scrollStepLast = 280;

    let isAnimating = false;
    var scrollStep = 0;

    window.scrollTo(0, 0);

    window.addEventListener("scroll", setScrollVar);
    window.addEventListener("resize", setScrollVar);

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

            if (scrollStep != 0) {
                scrollStep--;
            }
            console.log('scrollStep: ' + scrollStep)
        }

        isAnimating = false;
    }

    function moveContainer() {

    }

    function setScrollVar() {
        const htmlElement = document.documentElement;
        const percentOfScreenHeightScrolled = (htmlElement.scrollTop / htmlElement.clientHeight) * 100;
        console.log(percentOfScreenHeightScrolled)
        htmlElement.style.setProperty("--scroll", percentOfScreenHeightScrolled);

        //header animations
        if (percentOfScreenHeightScrolled <= scrollStep1) {
            werHeader.classList.remove('wer-moved');
        }
        if (percentOfScreenHeightScrolled > scrollStep1 && percentOfScreenHeightScrolled < scrollStep2) {
            werHeader.classList.add('wer-moved');
            werHeader.classList.remove('wer-out');
        }
        if (percentOfScreenHeightScrolled >= scrollStep2) {
            werHeader.classList.remove('wer-moved');
            werHeader.classList.add('wer-out');
        }

        //scroll aufforderung animations
        if (percentOfScreenHeightScrolled <= scrollStep1) {
            scrollArrow.classList.remove('scroll-out');
        }
        if (percentOfScreenHeightScrolled > scrollStep1) {
            scrollArrow.classList.add('scroll-out');
        }

        //container1 animations
        if (percentOfScreenHeightScrolled <= scrollStep1) {
            container1.classList.remove('container1-moved');
            image1.classList.remove('image1-moved');
        }
        if (percentOfScreenHeightScrolled > scrollStep1 && percentOfScreenHeightScrolled < scrollStep2) {
            container1.classList.add('container1-moved');
            container1.classList.remove('container1-out');
            image1.classList.add('image1-moved');
            image1.classList.remove('image1-out');
        }
        if (percentOfScreenHeightScrolled >= scrollStep2) {
            container1.classList.remove('container1-moved');
            container1.classList.add('container1-out');
            image1.classList.remove('image1-moved');
            image1.classList.add('image1-out');
        }
        //container2 animations
        if (percentOfScreenHeightScrolled <= scrollStep2) {
            container2.classList.remove('container2-moved');
            image2.classList.remove('image2-moved');
        }
        if (percentOfScreenHeightScrolled > scrollStep2 && percentOfScreenHeightScrolled < scrollStep3) {
            container2.classList.add('container2-moved');
            container2.classList.remove('container2-out');
            image2.classList.add('image2-moved');
            image2.classList.remove('image2-out');
        }
        if (percentOfScreenHeightScrolled >= scrollStep3) {
            container2.classList.remove('container2-moved');
            container2.classList.add('container2-out');
            image2.classList.remove('image2-moved');
            image2.classList.add('image2-out');
        }
        //container3 animations
        if (percentOfScreenHeightScrolled <= scrollStep3) {
            container3.classList.remove('container3-moved');
            image3.classList.remove('image3-moved');
        }
        if (percentOfScreenHeightScrolled > scrollStep3 && percentOfScreenHeightScrolled < scrollStep4) {
            container3.classList.add('container3-moved');
            container3.classList.remove('container3-out');
            image3.classList.add('image3-moved');
            image3.classList.remove('image3-out');
        }
        if (percentOfScreenHeightScrolled >= scrollStep4) {
            container3.classList.remove('container3-moved');
            container3.classList.add('container3-out');
            image3.classList.remove('image3-moved');
            image3.classList.add('image3-out');
        }
        //container4 animations
        if (percentOfScreenHeightScrolled <= scrollStep4) {
            container4.classList.remove('container4-moved');
            image4.classList.remove('image4-moved');
        }
        if (percentOfScreenHeightScrolled > scrollStep4 && percentOfScreenHeightScrolled < scrollStep5) {
            container4.classList.add('container4-moved');
            container4.classList.remove('container4-out');
            image4.classList.add('image4-moved');
            image4.classList.remove('image4-out');
        }
        if (percentOfScreenHeightScrolled >= scrollStep5) {
            container4.classList.remove('container4-moved');
            container4.classList.add('container4-out');
            image4.classList.remove('image4-moved');
            image4.classList.add('image4-out');
        }
        //container5 animations
        if (percentOfScreenHeightScrolled <= scrollStep5) {
            container5.classList.remove('container5-moved');
            image5.classList.remove('image5-moved');
        }
        if (percentOfScreenHeightScrolled > scrollStep5 && percentOfScreenHeightScrolled < scrollStepLast) {
            container5.classList.add('container5-moved');
            container5.classList.remove('container5-out');
            image5.classList.add('image5-moved');
            image5.classList.remove('image5-out');
        }
        /* if (percentOfScreenHeightScrolled >= 400) {
            container5.classList.remove('container5-moved');
            container5.classList.add('container5-out');
        } */
    }

    setScrollVar();

    const zoom = document.querySelector('.zoom');
    const minZoom = 1;
    const maxZoom = 2;

    /* addEventListener('scroll', e => {
        /* const vh = window.innerHeight / 100;
        const scrollTop = document.documentElement.scrollTop;
        const start = 50 * vh;
        const stop = 150 * vh;
        if (scrollTop > start && scrollTop < stop) {
            //const scale = Math.max(2.2 - (scrollTop - start) / 500, 1);
            //zoom.style.transform = `scale(${scale})`;
            const distance = (scrollTop - start) / 10;
            container1.style.left = `${((100 - distance) * -1)}%`;
            var opacity = Math.max(100 - (scrollTop - start) / 500, 100);
            container1.style.opacity = `${opacity}%`;
        }

        if (scrollTop > (20 * vh) && scrollTop < (80 * vh)) {
            var h1Scale = Math.max(1.7 - (scrollTop - start) / 500, 1);
            var h1Top = (scrollTop - start) / 10;
            werHeader.style.transform = `scale(${h1Scale})`;
            werHeader.style.top = `${10 + h1Top}%`;
        }

        const vh = window.innerHeight / 100;
        const scrollTop = document.documentElement.scrollTop;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const startMoving = 0.2 * totalHeight;
        const stopMoving = 0.8 * totalHeight;

        // Move the element along with the scroll when 20% to 80% of the page is scrolled
        if (scrollTop >= startMoving && scrollTop <= stopMoving) {
            const distance = (scrollTop - startMoving) / (stopMoving - startMoving);
            const topPosition = -30 + (distance * 20);
            werHeader.style.top = `${topPosition}%`;
        }

        // After 80% of the page is scrolled, fix the element at -10%
        if (scrollTop > stopMoving) {
            werHeader.style.top = '-10%';
        }
    }) */
});