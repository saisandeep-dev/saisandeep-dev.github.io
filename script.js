// Redirects to Resume in a new window
function redirectToResume() {
    const resumeUrl = 'https://drive.google.com/file/d/1xv3CqSXHoUWAEFaxNG6di85EebDbnWQp/view';
    window.open(resumeUrl, '_blank'); // Opens the resume in a new tab
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Confirm before opening the email link
document.querySelector('.email-btn').addEventListener('click', function(event) {
    if (!confirm('Do you want to send an email to Sai Sandeep?')) {
        event.preventDefault();
    }
});

