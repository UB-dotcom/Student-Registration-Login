document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');
  if (!form) return;

  // repopulate form from last saved registration (if any)
  try {
    const saved = JSON.parse(localStorage.getItem('lastRegistration') || 'null');
    if (saved) {
      Object.keys(saved).forEach(k => {
        const el = form.elements[k];
        if (!el) return;
        if (el.type === 'radio' || el.type === 'checkbox') {
          if (el.length) { // radio NodeList
            Array.from(el).forEach(r => { if (r.value === saved[k]) r.checked = true; });
          } else {
            el.checked = saved[k] === 'on' || saved[k] === true;
          }
        } else {
          el.value = saved[k];
        }
      });
    }
  } catch (e) {
    console.warn('Failed to restore saved registration', e);
  }

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    // Use browser validation first
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = {};
    new FormData(form).forEach((v, k) => { data[k] = v; });

    // Save last registration
    try {
      localStorage.setItem('lastRegistration', JSON.stringify(data));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }

    // Show a lightweight success message and hide the form
    const msg = document.createElement('div');
    msg.className = 'submission-success';
    msg.innerHTML = `
      <h2>Registration successful</h2>
      <p>Thank you, ${data.firstName || ''} ${data.lastName || ''}. Your registration has been recorded.</p>
      <button type="button" id="editBtn">Edit</button>
      <button type="button" id="newBtn">New</button>
    `;
    form.style.display = 'none';
    form.parentElement.appendChild(msg);

    // Edit => show form again
    document.getElementById('editBtn').addEventListener('click', () => {
      msg.remove();
      form.style.display = '';
    });

    // New => clear form and storage
    document.getElementById('newBtn').addEventListener('click', () => {
      form.reset();
      try { localStorage.removeItem('lastRegistration'); } catch (e) {}
      msg.remove();
      form.style.display = '';
    });
  });

  // Optional: clear saved data when user resets the form
  form.addEventListener('reset', () => {
    setTimeout(() => {
      try { localStorage.removeItem('lastRegistration'); } catch (e) {}
    }, 0);
  });
});
