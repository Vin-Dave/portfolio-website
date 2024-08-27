document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = contactForm
      .querySelector(".contact__input--first-name")
      .value.trim();
    const lastName = contactForm
      .querySelector(".contact__input--last-name")
      .value.trim();
    const email = contactForm
      .querySelector(".contact__input--email")
      .value.trim();
    const jobRole = contactForm
      .querySelector(".contact__input--job-role")
      .value.trim();
    const message = contactForm
      .querySelector(".contact__textarea")
      .value.trim();

    if (!firstName || !lastName || !email || !jobRole || !message) {
      formMessage.textContent = "Proszę wypełnić wszystkie pola.";
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      formMessage.textContent = "Proszę podać poprawny adres email.";
      return;
    }

    const companyEmail = "YOUR_COMPANY_EMAIL";
    const mailtoLink = `mailto:${companyEmail}?subject=${encodeURIComponent(
      jobRole
    )}&body=${encodeURIComponent(
      message +
        "\n\n" +
        "From: " +
        firstName +
        " " +
        lastName +
        " (" +
        email +
        ")"
    )}`;

    window.location.href = mailtoLink;

    formMessage.textContent = "Wiadomość została wysłana.";
  });
});
