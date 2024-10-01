document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Email button confirmation
    const emailBtn = document.querySelector('.email-btn');
    if (emailBtn) {
        emailBtn.addEventListener('click', (event) => {
            if (!confirm('Do you want to send an email to Sai Sandeep?')) {
                event.preventDefault();
            }
        });
    }

    // Redirect for social links
    const socialLinks = document.querySelectorAll('.social-icon');
    socialLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default behavior
            window.open(link.href, '_blank'); // Open in new tab
        });
    });
});

function redirectToResume() {
    const resumeUrl = 'https://drive.google.com/file/d/1DxJPrFzg6avaOyKCY_oOKqJmUQw_Mw_Q/view';
    window.open(resumeUrl, '_blank');
}
