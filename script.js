// Get the form element by its ID
const contactForm = document.getElementById('contactForm');
// Get the confirmation message area by its ID
const confirmationMessage = document.getElementById('confirmationMessage');

// Listen for the submit event on the form
contactForm.addEventListener('submit', function(event) {
    // Prevent the default form submission (page reload)
    event.preventDefault();

    // Get the values entered by the user in the form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if all fields are filled out
    if (!name || !email || !message) {
        alert('Please fill in all fields!');
        return; // Stop further execution if validation fails
    }

    // If all fields are valid, show the confirmation message
    confirmationMessage.textContent = `Thank you, ${name}! We will get back to you at ${email}.`;

    // Optionally, reset the form after submission
    contactForm.reset();
});

// Smooth scroll for links
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust scroll position
            behavior: 'smooth' // Smooth scroll effect
        });
    });
});
