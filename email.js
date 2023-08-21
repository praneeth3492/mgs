 
        document.getElementById('emailForm').addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission
        
            var formData = new FormData(this); // Get the form data
        
            // Send the AJAX request
            fetch('https://form.manchester.global/email.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(result => {
                // Display SweetAlert2 pop-up based on the response
                Swal.fire({
                    title: 'Success',
                    text: 'Email address stored successfully',
                    icon: 'success'
                });
            })
            .catch(error => {
                console.error('Error:', error);
                // Display SweetAlert2 pop-up for an error
                Swal.fire({
                    title: 'Error',
                    text: 'An error occurred while processing your request',
                    icon: 'error'
                });
            });
        });
        