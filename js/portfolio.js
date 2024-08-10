const menu = document.querySelector('nav');

const colors = [
    { bg: '#e3f2fd', text: '#1e88e5', scrollbar: '#1e88e5' },
    { bg: '#f3e5f5', text: '#6a1b9a', scrollbar: '#6a1b9a' },
    { bg: '#ffebee', text: '#d32f2f', scrollbar: '#d32f2f' },
    { bg: '#fff8e1', text: '#f57c00', scrollbar: '#f57c00' },
    { bg: '#e8f5e9', text: '#388e3c', scrollbar: '#388e3c' }
    // Add more colors if needed
];

// Mouseover event
menu.addEventListener('mouseover', () => {
    menu.style.backgroundColor = 'lightblue';
    menu.style.color = 'white';
});

// Mouseout event
menu.addEventListener('mouseout', () => {
    menu.style.backgroundColor = 'rgb(234, 185, 27)';
    menu.style.color = 'silver';
});

// Scroll event for color synchronization
window.addEventListener('scroll', () => {
    const index = Math.floor(window.scrollY / 500) % colors.length;

    // Update background, text, and scrollbar colors
    menu.style.backgroundColor = colors[index].bg;
    document.body.style.color = colors[index].text;
    document.body.style.backgroundColor = colors[index].bg;
    document.documentElement.style.setProperty('--scrollbar-thumb-color', colors[index].scrollbar);
});

// Select all elements with the class 'skill-bar'
const skillBars = document.querySelectorAll('.skill-bar');

// Create a new Intersection Observer
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      skillObserver.unobserve(entry.target); // Stop observing once the animation has been triggered
    }
  });
}, {
  threshold: 0.1 // Trigger when 10% of the element is visible
});

// Observe each skill bar
skillBars.forEach(bar => {
  skillObserver.observe(bar);
});

// Observe other elements on the page
document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.second, .project');
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  });

  elements.forEach(element => {
      observer.observe(element);
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Basic validation
      if (form.checkValidity()) {
          const formData = new FormData(form);
          const data = {
              name: formData.get('name'),
              email: formData.get('email'),
              subject: formData.get('subject'),
              message: formData.get('message')
          };

          console.log('Form Data Submitted:', data);

          // Optionally send data to server
          // fetch('/your-endpoint', { ... });

          form.reset(); // Reset form after submission
      } else {
          console.log('Form validation failed');
          // Optionally show validation errors to the user
      }
  });
});
