let slider = document.querySelector('.slider');
let slImg = document.querySelectorAll('.sl__img');
let slLine = document.querySelector('.sl__line');

let slCount = 0;
let slWidth = slider.offsetWidth;

function rollSl() {
    slLine.style.transform = `translateX(${-slCount * slWidth}px)`;
}

setInterval(() => {
    nextSlide()
}, 4000);

function nextSlide() {
    slCount++;

    if (slCount >= slImg.length) {
        slCount = 0;
    }

    rollSl();
}

