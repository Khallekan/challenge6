const container = document.getElementById("container");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const slide = document.getElementsByClassName('div');


let slideNumber = 1;

const showSlides = (n) => {
    if (n > slide.length) {
        slideNumber = 1
    }
    if (n < 1) {
        slideNumber = slide.length;
    }
    for (let i = 0; i < slide.length; i++) {
        const element = slide[i];
        element.classList.add('hidden');
        element.classList.remove('left');
    }    
    slide[slideNumber - 1].classList.remove('hidden');
    slide[slideNumber -1].classList.add('left');
}

showSlides(slideNumber);

const goBack = (e) => {
    e.preventDefault()
    showSlides(slideNumber -= 1);
}
const goForward = (e) => {
    e.preventDefault()
    showSlides(slideNumber += 1);
}


prev.addEventListener('click', goBack);
next.addEventListener('click', goForward);