document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const formMessage = document.getElementById("form-message");
    formMessage.textContent = "Thank you for reaching out! We'll get back to you soon.";
    form.reset();
  });
});
