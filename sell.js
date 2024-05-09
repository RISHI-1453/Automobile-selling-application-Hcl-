const rentCarForm = document.getElementById('rent-car-form');

rentCarForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  emailjs.sendForm('your_service_id', 'your_template_id', rentCarForm)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      // Show a success message to the user
    }, (err) => {
      console.log('FAILED...', err);
      // Show an error message to the user
    });
});
