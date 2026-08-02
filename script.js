document.addEventListener('DOMContentLoaded', () => {

  // ===== Tab Navigation =====
  const navLinks = document.querySelectorAll('.main-nav .nav-link');
  const sections = document.querySelectorAll('.page-section');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');

      sections.forEach((sec) => sec.classList.remove('active'));
      document.getElementById(targetId).classList.add('active');

      navLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // ===== Registration Form Validation =====
  const form = document.getElementById('registrationForm');
  const message = document.getElementById('formMessage');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('studentName').value.trim();
    const dept = document.getElementById('studentDept').value;
    const email = document.getElementById('studentEmail').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !dept || !email) {
      message.innerHTML =
        '<div class="alert alert-danger">Please fill in all fields.</div>';
      return;
    }

    if (!emailPattern.test(email)) {
      message.innerHTML =
        '<div class="alert alert-danger">Please enter a valid email address.</div>';
      return;
    }

    message.innerHTML = `<div class="alert alert-success">Thank you, ${name}! Your registration for ${dept} has been submitted.</div>`;
    form.reset();
  });

  // ===== Footer Year =====
  document.getElementById('year').textContent = new Date().getFullYear();
});
