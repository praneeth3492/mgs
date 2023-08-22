function submitt() {
    event.preventDefault(); // Prevent the form from submitting normally

    var name = $('#name').val();
    var lastName = $('#last_name').val(); // Assuming you have a field for the last name
    var gender = $('#gender').val(); // Assuming you have a field for gender
    var parentName = $('#parent_name').val(); // Assuming you have a field for parent name
    var mobile = $('#mobile').val();
    var email = $('#email').val();
    var classId = $('#class_id').val(); // Assuming you have a field for class ID
    var message = $('#message').val().replace(/\n/g, ' '); // Removing new-line characters
    var source = "Website"; // Source identifier
    var academicYear = $('#academic_year').val(); // Assuming you have a field for academic year
    var apiKey = "1fEkQiYkD7Fqyrid06BFXccK1QdiIaXh"; // API key

    // Check if all fields are filled
    if (!name || !lastName || !gender || !parentName || !mobile || !email || !classId || !message || !academicYear) {
        Swal.fire('Missing Fields!', 'Please make sure all fields are filled out.', 'warning');
        return;
    }

    // Proceed with submission
    $.ajax({
        url: 'https://manchesterglobal.schoolelement.in/api/enquiry/add', // The URL to send the data to
        type: "POST", // The HTTP method to use
        data: JSON.stringify({
            academic_year: academicYear,
            student_name: name,
            student_last_name: lastName,
            gender: gender,
            parent_name: parentName,
            mobile_number: mobile,
            email: email,
            class_id: classId,
            message: message,
            source: source,
            api_key: apiKey
        }),
        contentType: "application/json", // Set the content type to JSON
        success: function (response) {
            if (response.status === "200") {
                // Redirect to thankyou.html page
                window.location.href = 'thankyou.html';
            } else {
                Swal.fire('Error!', 'An error occurred during submission.', 'error');
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            Swal.fire('Error!', 'An error occurred during submission.', 'error');
            console.log(textStatus, errorThrown);
        }
    });
}
