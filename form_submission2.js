function submitt() {
    event.preventDefault(); // Prevent the form from submitting normally

    var name = $('#name').val();
    var mobile = $('#mobile').val();
    var email = $('#email').val();
    var grade = $('#grade').val();
    var message = $('#message').val();

    // Check if all fields are filled
    if (!name || !mobile || !email || grade === "1" ) {
        Swal.fire('Missing Fields!', 'Please make sure all fields are filled out.', 'warning');
        return;
    }

    // Proceed with submission
    $.ajax({
        url: 'https://form.manchester.global/save_form_data.php', // The URL to send the data to
        type: "POST", // The HTTP method to use
        data: {
            name: name,
            mobile: mobile,
            email: email,
            grade: grade,
            message: message
        }, // Serialize the form data for sending
        success: function (response) {
            // Redirect to thankyou.html page
            window.location.href = 'thankyou.html';

            // Here, you can make another AJAX call to your server to send the email
            $.ajax({
                url: 'https://form.manchester.global/send_email.php', // Your server-side script to send the email
                type: "POST",
                data: {
                    email: email,
                    name: name
                },
                success: function (emailResponse) {
                    // You can log a success message or perform other actions here
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log('Email Error:', textStatus, errorThrown);
                }
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            Swal.fire('Error!', 'An error occurred during submission.', 'error');
            console.log(textStatus, errorThrown);
        }
    });
}
