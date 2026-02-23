let Login = document.getElementById('login');
let signup = document.getElementById('signup');
let shade = document.getElementById('switch');

Login.addEventListener('click', function(){
    shade.classList.remove('toRight');
    shade.classList.add('toLeft');
});

signup.addEventListener('click', function(){
    shade.classList.remove('toLeft');
    shade.classList.add('toRight');
});