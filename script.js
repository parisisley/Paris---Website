// Auto-update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Simple form handling (placeholder)
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});
