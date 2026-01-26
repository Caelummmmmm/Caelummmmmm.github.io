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
function loadReceipt() {
  const data = {
    cart: [
      { name: "Ariana Grande – Eternal Sunshine", price: 2300 },
      { name: "Laufey – Bewitched", price: 2100 }
    ],
    paymentMethod: "Cash on Delivery",
    deliveryMethod: null
  };

  const itemsList = document.getElementById("items-list");
  let total = 0;

  data.cart?.forEach(item => { 
    total += item.price ?? 0; 
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₱${item.price ?? "N/A"}`;
    itemsList.appendChild(li);
  });

  document.getElementById("total-price").textContent = total ?? 0;
  document.getElementById("payment-method").textContent = data.paymentMethod ?? "Not selected";
  document.getElementById("delivery-method").textContent = data.deliveryMethod ?? "Standard Delivery";
}
