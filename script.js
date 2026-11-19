//Side bar feature
let menuToggle = document.getElementById("menu-toggle");
let sidebar = document.getElementById("sidebar");
let closeMenu = document.getElementById("close-menu");
let overlay = document.getElementById("nav-overlay");

menuToggle.addEventListener("click", function() {
    sidebar.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("menu-open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.classList.add("hidden");

});

function closeSidebar() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.classList.remove("hidden");

}


closeMenu.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);
let navLinks = sidebar.querySelectorAll("a");

navLinks.forEach(function(link) {
    link.addEventListener("click", closeSidebar);
});
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeSidebar();
    }
});

//Interactive attractions' flip card feature
function flipCard(card) {
    card.classList.toggle("flipped");
}

//Enquiry with validation feature
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let firstName = document.getElementById("fn").value.trim();
    let lastName = document.getElementById("ln").value.trim();
    let email = document.getElementById("email").value.trim();
    let topic = document.getElementById("topic").value.trim();
    let comments = document.getElementById("comments").value.trim();

    let fnError = document.getElementById("fnError");
    let lnError = document.getElementById("lnError");
    let emailError = document.getElementById("emailError");
    let topicError = document.getElementById("topicError");
    let commentsError = document.getElementById("commentsError");

    let successMessage = document.getElementById("successMessage");

    fnError.textContent = "";
    lnError.textContent = "";
    emailError.textContent = "";
    topicError.textContent = "";
    commentsError.textContent = "";
    successMessage.textContent = "";

    let valid = true;
    if (firstName === "") {
        fnError.textContent = "Please enter your first name.";
        valid = false;
    }
    
    if (lastName === "") {
        lnError.textContent = "Please enter your last name.";
        valid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;;
    if (email === "") {
        emailError.textContent = "Please enter your email address.";
        valid = false;
    }
    else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    }

    if (topic === "") {
        topicError.textContent = "Please enter an enquiry topic.";
        valid = false;
    }

    if (comments === "") {
        commentsError.textContent = "Please enter your message.";
        valid = false;
    }
    else if (comments.length < 10) {
        commentsError.textContent = "Your message must contain at least 10 characters.";
        valid = false;
    }

    if (valid) {
    contactForm.reset();
    successMessage.textContent =
        "Thank you! Your enquiry has been submitted successfully!";
    successMessage.style.color = "#F5F0E6";
}
});
document.getElementById("contactForm").addEventListener("reset", function() {

    document.getElementById("fnError").textContent = "";
    document.getElementById("lnError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("topicError").textContent = "";
    document.getElementById("commentsError").textContent = "";
    document.getElementById("successMessage").textContent = "";

});

