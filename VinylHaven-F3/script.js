document.addEventListener('DOMContentLoaded', () => {

const form = document.querySelector('.contact-form');
if (form) {
form.addEventListener('submit', e => {
e.preventDefault();
alert('This is a placeholder. No backend yet.');
});
}

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
card.addEventListener('click', () => {
alert(card.querySelector('h3').textContent);
});
});

});

function checkout() {
    alert("Checkout succcess");
}
