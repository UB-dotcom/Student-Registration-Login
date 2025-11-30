document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const msgEl = document.getElementById('message');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    msgEl.textContent = '';
    msgEl.className = '';

    const id = form.identifier.value.trim();
    if (!id) {
      msgEl.textContent = 'Enter email or roll number.';
      msgEl.classList.add('error');
      return;
    }

    let stored = null;
    try {
      stored = JSON.parse(localStorage.getItem('lastRegistration') || 'null');
    } catch (err) {
      stored = null;
    }

    if (!stored) {
      msgEl.textContent = 'No registered user found in this browser. Please register first.';
      msgEl.classList.add('error');
      return;
    }

    const matches = (stored.email && stored.email.toLowerCase() === id.toLowerCase()) ||
                    (stored.rollNumber && stored.rollNumber === id);

    if (matches) {
      msgEl.textContent = `Login successful. Welcome ${stored.firstName || ''} ${stored.lastName || ''}`.trim();
      msgEl.classList.add('success');
    } else {
      msgEl.textContent = 'Credentials do not match our records.';
      msgEl.classList.add('error');
    }
  });
});
