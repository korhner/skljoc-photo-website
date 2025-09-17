document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (!name || !email || !message) {
                alert('Molimo popunite sva obavezna polja.');
                return;
            }

            // Email validation with regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Molimo unesite validnu email adresu.');
                return;
            }

            // In a real implementation, you would send the data to a server here
            // For now, we'll just show a success message
            alert('Hvala na vašoj poruci! Odgovoriću vam uskoro.');
            contactForm.reset();
        });
    }
});