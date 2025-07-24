document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const email = document.getElementById('email').value;
      const msg = document.getElementById('formMessage');

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {
        msg.innerText = "Please enter a valid email address.";
        msg.style.color = "red";
      } else {
        msg.innerText = "Form submitted successfully!";
        msg.style.color = "green";
        this.reset();
      }
    });