const mailForm = document.querySelector("form");
const emailInput = document.getElementById("mail");
const objectInput = document.getElementById("object");
const messageInput = document.getElementById("msg");

console.log(mailForm);
console.log(emailInput);
console.log(objectInput);
console.log(messageInput);



mailForm.addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm('contact_service', 'contact_form', this);
});