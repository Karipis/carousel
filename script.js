const images = document.getElementsByClassName('image');

Array.from(images).forEach((image) => {
    image.addEventListener('click', () => {

        let activeImg = document.querySelector('.image.active');
        activeImg.classList.toggle('active');
        image.classList.toggle('active');

    });
});