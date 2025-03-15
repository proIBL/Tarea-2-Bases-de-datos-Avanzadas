document.addEventListener("DOMContentLoaded", ()=> {
    const images = [
        "/static/images/Mapa%20Suelo.png",
        "/static/images/Mapa%20Suelo%20Apto.png",
        "/static/images/Mapa%20Sismo%206_5.png",
        "/static/images/Mapa%20Sismo%207_5.png",
        "/static/images/Sismos%20de%20Peligro%20en%20Relacion%20a%20Posibles%20Suelos.png",
        "/static/images/Pisos%20Mas%20Estables.png",
        "/static/images/Mapa%20Chihuahua.png",
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