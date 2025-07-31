
        document.addEventListener('DOMContentLoaded', function() {
            // Mobile Menu Toggle
            const menuToggle = document.getElementById('mobile-menu');
            const navList = document.getElementById('nav-list');
            
            menuToggle.addEventListener('click', function() {
                navList.classList.toggle('active');
            });
            
            // Form Submission
            const reservationForm = document.getElementById('reservationForm');
            
            reservationForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const firstName = document.getElementById('firstName').value;
                const lastName = document.getElementById('lastName').value;
                const movie = document.getElementById('movie').value;
                const date = document.getElementById('date').value;
                const time = document.getElementById('time').value;
                
                // Show confirmation (in a real app, you would send this to a server)
                alert(`Thank you, ${firstName} ${lastName}!\nYour reservation for ${movie} on ${date} at ${time} has been received.`);
                
                // Reset form
                reservationForm.reset();
            });
            
            // Date picker - disable past dates
            const dateInput = document.getElementById('date');
            const today = new Date().toISOString().split('T')[0];
            dateInput.setAttribute('min', today);
            
            // Dynamic time options based on selected movie
            const movieSelect = document.getElementById('movie');
            const timeSelect = document.getElementById('time');
            
            movieSelect.addEventListener('change', function() {
                // Clear existing options
                timeSelect.innerHTML = '<option value="" disabled selected>Select time</option>';
                
                // Add new options based on movie
                const times = {
                    'deadpool': ['10:30 AM', '1:00 PM', '3:30 PM', '6:00 PM', '8:30 PM'],
                    'insideout': ['10:00 AM', '12:30 PM', '3:00 PM', '5:30 PM'],
                    'alien': ['11:00 AM', '2:00 PM', '5:00 PM', '8:00 PM'],
                    'borderland': ['12:00 PM', '3:00 PM', '6:00 PM', '9:00 PM'],
                    'trap': ['11:30 AM', '2:30 PM', '5:30 PM', '8:30 PM']
                };
                
                const selectedMovie = this.value;
                times[selectedMovie].forEach(time => {
                    const option = document.createElement('option');
                    option.value = time.split(' ')[0];
                    option.textContent = time;
                    timeSelect.appendChild(option);
                });
            });
        });