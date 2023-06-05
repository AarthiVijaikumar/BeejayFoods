function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    var message = document.forms["contactForm"]["message"].value;

    if (name == "") {
        alert("Please enter your name.");
        return false;
    }

    if (email == "") {
        alert("Please enter your email address.");
        return false;
    }

    // Email validation regex pattern
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (phone == "") {
        alert("Please enter your phone number.");
        return false;
    }

    // Phone number validation regex pattern
    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    if (message == "") {
        alert("Please enter a message.");
        return false;
    }
}

const scrollToEnquireForm = document.getElementById("scrollToEnquireForm");
const enquireForm = document.getElementById("enquireform");
console.log(scrollToEnquireForm, enquireForm)

scrollToEnquireForm.addEventListener("click", function() {
    enquireForm.scrollIntoView({ behavior: "smooth" });
});