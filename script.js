const downButton = document.querySelector(`.down-button`),
      upButton = document.querySelector(`.up-button`),
      container = document.querySelector(`.container`),
      sidebar = document.querySelector(`.sidebar`),
      mainSlide = document.querySelector(`.main-slide`),
      countSlides = mainSlide.querySelectorAll(`div`).length;

sidebar.style.top = `-${(countSlides - 1) * 100}vh`;

let activSlideIndex = 0;

upButton.addEventListener(`click`, () => {
    changesSlide(`up`)
});

downButton.addEventListener(`click`, () => {
    changesSlide(`down`)
});

function changesSlide(action) {
    if (action === `up`) {
        activSlideIndex++;
        if (activSlideIndex > (countSlides - 1)) {
            activSlideIndex = 0;
        }
    }

    if (action === `down`) {
        activSlideIndex--;
        if (activSlideIndex < 0) {
            activSlideIndex = (countSlides - 1);
        }
    }

    const heightContainer = container.clientHeight;

    mainSlide.style.transform = `translateY(-${heightContainer * activSlideIndex}px)`;

    sidebar.style.transform = `translateY(${heightContainer * activSlideIndex}px)`;

}