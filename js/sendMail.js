const mailForm = document.querySelector("form");

mailForm.addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm('service_cj3lehg', 'template_q16qt3i', this)
    .then(() => {
        console.log('SUCCESS!');
    }, (error) => {
        console.log('FAILED...', error);
    });
});