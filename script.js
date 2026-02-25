// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Contact Form Validation
function validateForm(event) {
  event.preventDefault();

  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let message = document.getElementById('message').value.trim();
  let error = document.getElementById('error');

  if (name === "" || email === "" || message === "") {
    error.textContent = "Please fill out all fields.";
    return false;
  }

  if (!email.includes("@")) {
    error.textContent = "Please enter a valid email.";
    return false;
  }

  error.textContent = "";
  alert("Form submitted successfully! (Demo)");
}
