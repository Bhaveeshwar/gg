document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded Successfully! 🚀");

    // Function to show specific section
    window.showSection = function(sectionId) {
        document.querySelectorAll("section").forEach(section => {
            section.classList.remove("active");
        });
        document.getElementById(sectionId).classList.add("active");
    };

    // Booking System
    document.getElementById("bookingForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let fullName = document.getElementById("fullName").value;
        let email = document.getElementById("userEmail").value;
        let mobile = document.getElementById("userMobile").value;
        let danceClass = document.getElementById("danceClass").value;
        let timings = document.getElementById("classTimings").value;
        let ticketNumber = "DANCE" + Math.floor(1000 + Math.random() * 9000);

        document.getElementById("ticketDisplay").innerHTML = `
            <h3>🎟 Booking Confirmed!</h3>
            <p><strong>Ticket Number:</strong> ${ticketNumber}</p>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Class:</strong> ${danceClass}</p>
            <p><strong>Time:</strong> ${timings}</p>
        `;
        document.getElementById("ticketDisplay").style.display = "block";
        document.getElementById("cancelBooking").style.display = "block";
    });

    // Cancel Booking
    document.getElementById("cancelBooking").addEventListener("click", function () {
        document.getElementById("ticketDisplay").style.display = "none";
        this.style.display = "none";
    });

    // Show home section by default
    showSection("home");
});
