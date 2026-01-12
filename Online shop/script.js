document.addEventListener('DOMContentLoaded', () => {

  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // prevent actual submission
      const name = contactForm.querySelector('input').value.trim();
      const message = contactForm.querySelector('textarea').value.trim();

      if (!name || !message) {
        alert('Please fill in all fields before sending.');
      } else {
        alert(`Thank you for your message, ${name}!`);
        contactForm.reset();
      }
    });
  }

  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const albumName = card.querySelector('h3').textContent;
      const price = card.querySelector('p').textContent;
      alert(`${albumName}\nPrice: ${price}`);
    });

    card.style.cursor = 'pointer';
  });

});
