function toggleFavourite() {
    const starIcon = document.getElementById('favouriteIcon');

    if (starIcon.classList.contains('bi-star')) {
        //If 'bi-star' class is present, remove it and add 'bi-star-fill'
        starIcon.classList.remove('bi-star');
        starIcon.classList.add('bi-star-fill');
    } else {
        //If 'bi-star' class is not present, remove 'bi-star-fill'and add'bi-star'
        starIcon.classList.remove('bi-star-fill');
        starIcon.classList.add('bi-star')
    }
}