function validateForm() {
    var name = document.getElementById('name').value;
    var mobile = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;
    var grade = document.getElementById('grade').value;

    if (name == "") {
        alert("Name must be filled out");
        return false;
    } else if (mobile == "" || mobile.length != 10) {
        alert("Please enter a valid mobile number");
        return false;
    } else if (email == "" || !email.includes("@")) {
        alert("Please enter a valid email");
        return false;
    } else if (grade == "1") {
        alert("Please choose a grade");
        return false;
    }

    // Add more validation as needed
    return true;
}
