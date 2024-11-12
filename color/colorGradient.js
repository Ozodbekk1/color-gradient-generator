'use strict'
const bodyy = document.querySelector('body');
const divClick = document.querySelector('.random-gradient');
const colorText = document.querySelector('h3');

const values = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f',
];

// Random color gradient generator function
function randomGradient() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        const randomColor = Math.trunc(Math.random() * values.length);
        color += values[randomColor];
    }
    return color;
}

// Set color to body
function setColor() {
    const color1 = randomGradient();
    const color2 = randomGradient();
    const randomDeg = Math.trunc(Math.random() * 360);
    const bgColor = `linear-gradient(${randomDeg}deg, ${color1}, ${color2})`; // Corrected here
    bodyy.style.background = bgColor; // Changed to background
    colorText.textContent = bgColor; // Display the gradient string
}

divClick.addEventListener('click', () => {
    setColor();
});