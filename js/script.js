document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const message = document.getElementById("form-message");
      message.textContent = "Thank you! We'll be in touch.";
      form.reset();
    });
  }
});
