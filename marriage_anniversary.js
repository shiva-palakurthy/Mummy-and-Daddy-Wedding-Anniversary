// MUSIC

const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');

let isPlaying = false;

musicBtn.addEventListener('click', () => {

    if(isPlaying){

        bgMusic.pause();
        isPlaying = false;

    }else{

        bgMusic.play();
        isPlaying = true;

    }

});


// CHANGING LOVE QUOTES

const quotes = [

    '"True love never gets old ❤️"',

    '"Together is the best place to be 💞"',

    '"Every love story is beautiful ❤️"',

    '"Forever starts with family 💖"'

];

let index = 0;

const quote = document.getElementById('quote');

setInterval(() => {

    index++;

    if(index >= quotes.length){
        index = 0;
    }

    quote.innerHTML = quotes[index];

}, 4000);
// SLIDESHOW

let slideIndex = 0;

showSlides();

function showSlides(){

    let slides = document.getElementsByClassName("slide");

    for(let i = 0; i < slides.length; i++){

        slides[i].style.display = "none";

    }

    slideIndex++;

    if(slideIndex > slides.length){

        slideIndex = 1;

    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000);

}
// FLOATING EMOJIS

const emojiContainer = document.querySelector('.emoji-container');

const emojis = ['❤️','💖','💞','💕','🌸','✨','🥰','💍','🌹'];

function createEmoji(){

    const emoji = document.createElement('div');

    emoji.classList.add('emoji');

    emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.left = Math.random() * 100 + 'vw';

    emoji.style.animationDuration = (Math.random() * 5 + 5) + 's';

    emoji.style.fontSize = (Math.random() * 20 + 20) + 'px';

    emojiContainer.appendChild(emoji);

    setTimeout(() => {

        emoji.remove();

    }, 10000);

}

setInterval(createEmoji, 500);