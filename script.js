// script.js

document.addEventListener('DOMContentLoaded', function() {
    const paintings = document.querySelectorAll('.painting');
  
    paintings.forEach(painting => {
      painting.addEventListener('click', function() {
        // Remove previous border classes
        paintings.forEach(p => {
          p.classList.remove('active', 'inactive');
        });
  
        // Add border based on the clicked image
        if (this.id === 'mypainting') {
          this.classList.add('active');  // Green for "my painting"
        } else {
          this.classList.add('inactive');  // Red for others
        }
      });
    });
  });