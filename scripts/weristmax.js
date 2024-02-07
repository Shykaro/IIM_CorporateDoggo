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

    window.scrollTo(0, 0);

    window.addEventListener("scroll", setScrollVar);
    window.addEventListener("resize", setScrollVar);

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
});