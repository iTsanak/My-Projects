



//----------------LOADING SCREEN-------------------
setTimeout(function() {
    var preloader = document.getElementById('preloader');
    preloader.classList.add('hidden');
}, 2000); // Wait for 2 seconds before applying the fade-out effect



//-------------STICKY HEADER-----------------------
    // Function to handle scroll event and make the header sticky
    function handleScroll() {
        const header = document.querySelector('.header');
        if (window.pageYOffset > 0) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }

    // Add scroll event listener to make the header sticky
    window.addEventListener('scroll', handleScroll);




//------------------SUBMISSION HANDLER----------------------//
// Function to handle form submission
function handleFormSubmit(event) {



    // If submit goes through means data is valid, which then sends the form data
    const formData = new FormData(document.getElementById("contact-form"));
    fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log("Form data sent successfully:", data);
     
    })
    .catch(error => {
        console.error("Error sending form data:", error);

    });
}
document.getElementById("contact-form").addEventListener("submit", handleFormSubmit);




