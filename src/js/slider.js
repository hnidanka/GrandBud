import { fetchData } from "./helper";

function slider() {
    const addZero = num => num <= 9 ? `0${num}` : num;

    function changeActiveBlock(arr, indx) {
        arr.forEach(item => item.classList.remove('active'));
        arr[indx].classList.add('active');
        console.log(`World ChangeActive ${indx}`);
    }

    function setSlider(sliderWrapper, slidesField, slides, total, navItems, currentIndx) {
        let slideIndx = 1,
            slideWidth = 0,
            offset = 0,
            sliderWrapperWidth = window.getComputedStyle(sliderWrapper).width;
        slidesField.style.width = `${sliderWrapperWidth.slice(0, sliderWrapperWidth.length - 2) * slides.length}px`;
        total.textContent = addZero(slides.length);
        changeActiveBlock(navItems, 0);
        slides.forEach(elem => {
            slideWidth = elem.clientWidth;
        });
        slides[0].classList.add('focused');

        const updateSliderPosition = (offset, slideIndx) => {
            slides[slideIndx - 1].classList.add('focused');
            currentIndx.textContent = addZero(slideIndx);
            slidesField.style.transform = `translateX(-${offset}px)`;
        };

        const nextSlideHandler = () => {
            slides[slideIndx - 1].classList.remove('focused');
            if (offset >= slideWidth * (slides.length - 1)) {
                offset = 0;
                slideIndx = 1;
            } else {
                offset += slideWidth;
                slideIndx += 1;
            }
            updateSliderPosition(offset, slideIndx);
            return slideIndx - 1;
        };

        const prevSlideHandler = () => {
            slides[slideIndx - 1].classList.remove('focused');
            if (offset === 0) {
                offset = slideWidth * (slides.length - 1);
                slideIndx = slides.length;
            } else {
                offset -= slideWidth;
                slideIndx -= 1;
            }
            updateSliderPosition(offset, slideIndx);
            return slideIndx - 1;
        };

        return {
            nextSlide: nextSlideHandler,
            prevSlide: prevSlideHandler,
            navToSlide: (index) => {
                slides[slideIndx - 1].classList.remove('focused');
                slideIndx = parseInt(index);
                offset = (slideIndx - 1) * slideWidth;
                updateSliderPosition(offset, slideIndx);
                return slideIndx - 1;
            }
        };
    }

    async function updateSlideDescription(slideIndex, slideData) {
        let sliderDescriptionData = await fetchData(slideData);
        const description = sliderDescriptionData.works[slideIndex - 1];
        if (description) {
            worksSlideDescr.innerHTML = `
                <h2>${description.header}</h2>
                <p>${description.location}</p>
                <p>${description.leadTime}</p>
                <p>${description.scopeOfWork}</p>
            `;
        } else {
            worksSlideDescr.innerHTML = 'No description available.';
        }
    }

    const handleSlideChange = (slideIndx) => {
        changeActiveBlock(worksNavItems, slideIndx);
        updateSlideDescription(slideIndx + 1, '/src/data/works.json');
    };

    const worksSliderCounter = document.querySelector('.works-slider-actions'),
        worksCurrentIndx = worksSliderCounter.querySelector('.current'),
        worksTotal = worksSliderCounter.querySelector('.total'),
        worksNextButton = document.querySelector('.next-action'),
        worksPrevButton = document.querySelector('.prev-action'),
        worksSliderWrapper = document.querySelector('.works-slider'),
        worksSlidesField = document.querySelector('.works-slider-inner'),
        worksSlides = document.querySelectorAll('.works-slide'),
        worksSliderNav = document.querySelector('.slider-nav'),
        worksNavItems = worksSliderNav.querySelectorAll('.block'),
        worksSlideDescr = document.querySelector('.work-slide-descr');

    const worksSlider = setSlider(worksSliderWrapper, worksSlidesField, worksSlides, worksTotal, worksNavItems, worksCurrentIndx);
    updateSlideDescription(1, '/src/data/works.json');

    worksNextButton.addEventListener('click', (e) => {
        e.preventDefault();
        handleSlideChange(worksSlider.nextSlide());
    });

    worksPrevButton.addEventListener('click', (e) => {
        handleSlideChange(worksSlider.prevSlide());
    });

    worksNavItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            const slideIndx = e.target.getAttribute('data-to-slide');
            handleSlideChange(worksSlider.navToSlide(slideIndx));
        });
    });

    let startX = 0;
    let currentX = 0;
    let isSwiping = false;

    worksSliderWrapper.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isSwiping = true;
    });

    worksSliderWrapper.addEventListener('touchmove', (e) => {
        if (!isSwiping) return;
        currentX = e.touches[0].clientX;
    });

    worksSliderWrapper.addEventListener('touchend', () => {
        if (!isSwiping) return;
        const diff = startX - currentX;

        if (diff > 50) {
            handleSlideChange(worksSlider.nextSlide());
        } else if (diff < -50) {
            handleSlideChange(worksSlider.prevSlide());
        }

        isSwiping = false;
    });
}

export default slider;
