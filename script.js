document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.querySelector('#yesButton');
    const noButton = document.querySelector('#noButton');

    yesButton.addEventListener('click', () => {
        alert('You clicked Yes!');
    });

    noButton.addEventListener('mouseover', moveButton);
});

function moveButton() {
    const noButton = document.querySelector('#noButton');

    const rect = noButton.getBoundingClientRect();
    const oldX = rect.left + window.scrollX;
    const oldY = rect.top + window.scrollY;

    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.left = `${oldX}px`;
    dot.style.top = `${oldY}px`;
    document.body.appendChild(dot);

    setTimeout(() => {
        dot.remove();
    }, 1000);
}
