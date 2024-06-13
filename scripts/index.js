function App() {}

window.onload = function(event) {
    var app = new App();
    window.app = app;

    const buttons = document.querySelectorAll('[data-button]');
    buttons.forEach(button => button.addEventListener('click', app.processingButton.bind(app)));
}

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const carruselList = btn.closest('.carrusel-list');
    const track = carruselList.querySelector('#track');
    const carrusel = track.querySelectorAll('.carrusel');

    const carruselWidth = carrusel[0].offsetWidth;
    const trackWidth = track.scrollWidth;
    const listWidth = carruselList.offsetWidth;

    let leftPosition = track.style.left ? parseFloat(track.style.left.slice(0, -2)) * -1 : 0;

    if (btn.dataset.button == "button-prev") {
        this.prevAction(leftPosition, carruselWidth, track);
    } else {
        this.nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track);
    }
}

App.prototype.prevAction = function(leftPosition, carruselWidth, track) {
    if (leftPosition > 0) {
        track.style.left = `${-1 * (leftPosition - carruselWidth)}px`;
    }
}

App.prototype.nextAction = function(leftPosition, trackWidth, listWidth, carruselWidth, track) {
    if (leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + carruselWidth)}px`;
    }
}
