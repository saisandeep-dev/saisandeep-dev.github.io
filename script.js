// Open Resume in new tab
function redirectToResume() {
  const resumeUrl = 'https://drive.google.com/file/d/1RLfcMM0xSC7HAxns18VZ89X9Y0LF5esi/view?usp=sharing';
  window.open(resumeUrl, '_blank');
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Custom email confirm
document.querySelector('.email-btn').addEventListener('click', e => {
  e.preventDefault();
  if (confirm('📧 Do you want to send an email to Sai Sandeep?')) {
    window.location.href = e.target.href;
  }
});
