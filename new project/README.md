# Student Registration Form

A simple, responsive web application for student registration and login using HTML, CSS, and vanilla JavaScript with browser localStorage.

## Features

- **Registration Form** — Collect student details (roll number, name, email, DOB, gender, phone, course, address)
- **Form Validation** — HTML5 validation + client-side checks
- **Persistence** — Saves registration data to browser localStorage
- **Login Page** — Verify login using email or roll number against saved registration
- **Responsive Design** — Mobile-friendly layout
- **Success Feedback** — User-friendly success and error messages

## Files

- `index.html` — Registration form page
- `login.html` — Login page
- `style.css` — Styles for registration form
- `login.css` — Styles for login page
- `script.js` — Registration logic (validation, persistence, success UI)
- `login.js` — Login logic (credential matching)
- `README.md` — This file
- `.gitignore` — Git ignore rules

## Getting Started

1. Clone or download this repository
2. Open `index.html` in a web browser
3. Fill out the registration form and click "Register"
4. Go to `login.html` and log in with your email or roll number

### Local Storage

- Registration data is stored in browser localStorage under key `lastRegistration`
- Clear browser data or use DevTools (F12 → Application → localStorage) to reset

## Browser Support

- Chrome, Firefox, Safari, Edge (latest versions)
- HTML5 date and tel inputs supported

## Project Structure

```
student-registration-form/
├── index.html
├── login.html
├── style.css
├── login.css
├── script.js
├── login.js
├── README.md
└── .gitignore
```

## Usage

### Register
1. Navigate to `index.html`
2. Fill all required fields
3. Click "Register" — data saves to localStorage and shows success message
4. Click "Edit" to modify or "New" to clear and start fresh

### Login
1. Navigate to `login.html`
2. Enter your email or roll number
3. Click "Login" — validates against saved registration data
4. View success or error message

## Notes

- This is a **client-side only** demo. For production, integrate with a backend server and database
- Passwords are optional in this demo; use proper authentication (bcrypt, JWT) in production
- localStorage data persists until browser cache is cleared

## License

Open source — feel free to use and modify
