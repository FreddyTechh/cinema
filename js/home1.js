// Mobile menu toggle functionality
      document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.getElementById('mobile-menu');
        const navList = document.getElementById('nav-list');
        
        menuToggle.addEventListener('click', function() {
          navList.classList.toggle('active');
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: 'smooth'
              });
            }
          });
        });
        
        // Book Now button functionality
        const bookNowBtn = document.getElementById('book-now-btn');
        if (bookNowBtn) {
          bookNowBtn.addEventListener('click', function() {
            window.location.href = 'reservation.html';
          });
        }
        
        // Showtime button functionality
        const showtimeButtons = document.querySelectorAll('.showtime-btn');
        showtimeButtons.forEach(button => {
          button.addEventListener('click', function() {
            const movieTitle = this.closest('.movie-card').querySelector('.movie-title').textContent;
            const showtime = this.textContent.trim();
            alert(`You've selected ${showtime} for ${movieTitle}. Redirecting to booking page...`);
            window.location.href = 'reservation.html';
          });
        });
        
        // Cinema selector change event
        const cinemaSelector = document.getElementById('cinema-selector');
        if (cinemaSelector) {
          cinemaSelector.addEventListener('change', function() {
            const selectedCinema = this.value;
            alert(`You've selected ${selectedCinema}. Filtering showtimes...`);
            // In a real application, you would filter showtimes based on the selected cinema
          });
        }
        
        // Newsletter form submission
        const newsletterForm = document.getElementById('newsletter-form');
        if (newsletterForm) {
          newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            alert(`Thank you for subscribing with ${email}. We'll contact you soon!`);
            this.reset();
          });
        }
        
        // Date selector functionality
        const dateLinks = document.querySelectorAll('.scroll-container a');
        dateLinks.forEach(link => {
          link.addEventListener('click', function(e) {
            e.preventDefault();
            dateLinks.forEach(l => l.style.backgroundColor = 'transparent');
            this.style.backgroundColor = 'rgba(216, 43, 43, 0.8)';
            const selectedDate = this.textContent;
            alert(`Showing movies for ${selectedDate}`);
            // In a real application, you would filter movies by the selected date
          });
        });
      });