(function() {

    const slides = document.querySelectorAll('.fade-slider__item');
    const activeClass = "fade-slider__item--visble";
    let index = 0;

     setInterval(function() {
        slides[index].classList.remove(activeClass);
        index++;

        if (index + 1 > slides.length) {
            index = 0;
        }

        slides[index].classList.add(activeClass);

        console.log(index);

    }, 5000);  

}())