// Dark/Light Mode Toggle
const toggle = document.getElementById('toggle-dark');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  if(document.body.classList.contains('light-mode')){
    document.body.style.background = '#f4f4f4';
    document.body.style.color = '#121212';
  } else {
    document.body.style.background = '#121212';
    document.body.style.color = '#e0e0e0';
  }
});

// EmailJS Initialization
(function(){
  emailjs.init("AYtEuYgvllrRxeueM"); // Replace with your EmailJS public key
})();

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event){
  event.preventDefault();
  emailjs.sendForm("service_mbvuilc", "template_0idcc09", this)
  .then(function(){
    alert("Message sent successfully!");
  }, function(error){
    alert("Failed to send message. Try again.");
  });
});