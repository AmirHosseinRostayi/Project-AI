const btn = document.getElementById('exploreButton');
const card = document.getElementById('welcomeCard');
const socials =document.getElementById('socials');

btn.addEventListener('click', () => {
    //Set opacity to 0 for btn and card
    btn.style.opacity = '0';
    card.style.opacity = '0';
    socials.style.display = 'flex';

    //Set timer to change the opacity of socials after 2 seconds
    setTimeout(() => {
        socials.style.opacity = '1';
    }, 500);
});