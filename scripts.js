const API_URL = 'https://3b471814-a80b-4fa9-9748-57658b004926-00-17m98o8uu2o55.riker.replit.dev';

// Registrierung
document.getElementById('register-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    });

    const result = await response.json();
    document.getElementById('register-response').textContent = result.message;
});

// Bestätigung
document.getElementById('confirm-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('confirm-email').value;
    const confirmationCode = document.getElementById('confirmation-code').value;

    const response = await fetch(`${API_URL}/confirm`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, confirmation_code: confirmationCode })
    });

    const result = await response.json();
    document.getElementById('confirm-response').textContent = result.message;
});

// Anmeldung
document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const result = await response.json();
    document.getElementById('login-response').textContent = result.message;
});