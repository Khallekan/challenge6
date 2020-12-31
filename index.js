const previous = document.getElementsByClassName('previous');
const next = document.getElementsByClassName('next');
const testimonial = document.getElementsByClassName('testimonial');
const picture = document.getElementsByClassName('picture');
const profile = document.getElementsByClassName('profile');

let counter = 1;

const show = (arg) => {
    if(arg < 1) {
        counter = testimonial.length;
    }
    if(arg > picture.length) {
        counter = 1;
    }
    for (let i = 0; i < testimonial.length; i++) {
        const e = testimonial[i];
        e.classList.add('hidden');      
    }
    for (let i = 0; i < picture.length; i++) {
        const e = picture[i];
        e.classList.add('hidden');
        e.classList.remove('left');
        e.classList.remove('right');
    }
    for (let i = 0; i < profile.length; i++) {
        const e = profile[i];
        e.classList.add('hidden');
    }
    picture[counter - 1].classList.remove('hidden');
    testimonial[counter - 1].classList.remove('hidden');
    profile[counter - 1].classList.remove('hidden');
}

const showProfile = (arg) => {
    show(arg);
    picture[counter - 1].classList.add('left');
}
const showProfile2 = (arg) => {
    show(arg);
    picture[counter - 1].classList.add('right');
}      

showProfile(counter);

const goForward = (e) => {
    e.preventDefault();
 
    return showProfile2(counter += 1);
}

const goBack = (e) => {
    e.preventDefault();

    return showProfile(counter -= 1);
}
for (let a = 0; a < previous.length; a++) {
    const e = previous[a];
    e.addEventListener('click',goBack);
}

for (let a = 0; a < next.length; a++) {
    const e = next[a];
    e.addEventListener('click',goForward);    
}