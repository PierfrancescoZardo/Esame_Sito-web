document.addEventListener('DOMContentLoaded', function () {
    
    var logojpg = document.querySelector('.animated-image');
    anime({
        targets: logojpg,
        opacity: [0, 1], // Effetto dissolvenza in entrata
        duration: 2500, // Durata dell'animazione
        easing: 'easeInOutQuad' // Tipo di easing
    });
});