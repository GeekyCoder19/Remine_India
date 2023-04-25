// display an alert message when the "Contact Us" button is clicked
function showAlert() {
  alert("Thank you for contacting us!");
}

// toggle the visibility of the "Our Mission" section when the "Learn More" button is clicked
function toggleMission() {
  var element = document.getElementById("mission-section");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

// validate the contact form before submission
function validateForm() {
  var name = document.forms["contact-form"]["name"].value;
  var email = document.forms["contact-form"]["email"].value;
  var message = document.forms["contact-form"]["message"].value;
  
  if (name == "") {
    alert("Please enter your name.");
    return false;
  }
  
  if (email == "") {
    alert("Please enter your email address.");
    return false;
  }
  
  if (message == "") {
    alert("Please enter a message.");
    return false;
  }
  
  alert("Thank you for your message! We will get back to you soon.");
  return true;
}
