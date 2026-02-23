document.addEventListener('DOMContentLoaded' , function() {
    const cart = document.getElementById('cart');
    const shoppingList = document.getElementById('shopping-list');
    let clicked = false;

    cart.addEventListener('click' , function() {
        if (clicked) {
            shoppingList.classList.remove('animate');
            shoppingList.style.opacity = '0';
            clicked = false;
        } else {
            shoppingList.classList.add('animate');
            shoppingList.style.opacity = '1';
            clicked = true;
        }
    });
});