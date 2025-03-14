document.addEventListener("DOMContentLoaded", ()=> {
    const images = [
        "/static/images/Mapa%20Suelo.png",
        "/static/images/Mapa%20Suelo%20Apto.png",
    ];

    let index = 0;
    const slide = document.getElementById("slide");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    function showSlide() {
        slide.src = images[index];
    }

    function nextSlide() {
        index = (index + 1) % images.length;
        showSlide();
    }

    function prevSlide() {
        index = (index - 1 + images.length) % images.length;
        showSlide();
    }

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
    showSlide()
});