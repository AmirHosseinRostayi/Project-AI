const check = document.getElementById('check');
const btn = document.getElementById('btn');
const massage = document.getElementById('massage');

btn.addEventListener('click', function() {
    btn.classList.add('hide');
    check.classList.add('rotateIn');
    massage.classList.add('fadeIn');
});