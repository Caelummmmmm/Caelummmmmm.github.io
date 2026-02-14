const { createApp } = Vue;

createApp({
    data() {
        return {
            currentView: 'home',
            menu: [
                { id: 'home', name: 'Home' },
                { id: 'product', name: 'Product Catalog' },
                { id: 'cart', name: 'Your Cart' },
                { id: 'about', name: 'About' },
                { id: 'contact', name: 'Contact Us' },
                { id: 'profile', name: 'Profile' },
                { id: 'login', name: 'Login' }
            ],
            order: {
                payment: 'Cash on Delivery',
                delivery: 'Standard Delivery (3-5 days)'
            },
            cart: [
                { name: "Ariana Grande – Eternal Sunshine", price: 2300 },
                { name: "Laufey – Bewitched", price: 2100 }
            ],
            featured: [
                { title: 'Laufey – Bewitched', price: 2100, img: 'https://images.genius.com/78f51488478adb399013e7b57857615e.1000x1000x1.png' },
                { title: 'Ariana Grande – Eternal Sunshine', price: 2300, img: 'https://images.genius.com/08e2633706582e13bc20f44637441996.1000x1000x1.png' },
                { title: 'Wave 2 Earth – Wave 0.01', price: 2000, img: 'https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F3a0d21dabd12f60225241633dd94295b.1000x1000x1.png' }
            ],
            catalog: {
                "Ariana Grande": [
                    { title: "Positions", price: 2100, img: "https://upload.wikimedia.org/wikipedia/en/a/a0/Ariana_Grande_-_Positions.png" },
                    { title: "Sweetener", price: 2200, img: "https://static.wikia.nocookie.net/arianagrande/images/e/ec/Sweetener_Artwork.jpg" }
                ],
                "Wave to Earth": [
                    { title: "0.1 flaws and all", price: 2100, img: "https://i.scdn.co/image/ab67616d0000b273c21555708975ad94b1faf422" },
                    { title: "play with earth! 0.03", price: 2200, img: "https://i.scdn.co/image/ab67616d0000b273bed6cba62070aabe116791ad" }
                ],
                "Laufey": [
                    { title: "Everything I Know About Love", price: 2100, img: "https://upload.wikimedia.org/wikipedia/en/5/57/Laufey_-_Everything_I_Know_About_Love.png" },
                    { title: "Bewitched", price: 2200, img: "https://upload.wikimedia.org/wikipedia/en/0/06/Laufey_-_Bewitched.png" }
                ]
                
            }
        }
    },
    computed: {
        cartTotal() {
            return this.cart.reduce((total, item) => total + item.price, 0);
        }
    },
    methods: {
        alertTitle(title) {
            alert("Album: " + title);
        },
        mockSubmit() {
            alert('Success! Logged In');
            this.currentView = 'home';
        },
        mockSubmit1() {
            alert('Success! Signed In.');
            this.currentView = 'home';
        }
    }
}).mount('#app');