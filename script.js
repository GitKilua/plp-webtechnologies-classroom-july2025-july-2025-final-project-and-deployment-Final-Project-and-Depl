function openBooking(movie) {
  document.getElementById("movieTitle").textContent = movie;
  document.getElementById("bookingModal").style.display = "flex";
}

function closeBooking() {
  document.getElementById("bookingModal").style.display = "none";
}

function confirmBooking(e) {
  e.preventDefault();
  window.location.href = "confirmation.html";
}
function goToMovies(e) {
  e.preventDefault();
  alert("✅ Your details have been saved. Continue to select a movie.");
  window.location.href = "movies.html"; // or index of collections
}

// bookingForm submission
function confirmBooking(e) {
  e.preventDefault();  // prevent reload
  window.location.href = "payment.html";
}

function openBooking(animeTitle) {
  // Redirect to payment page with anime title as a query parameter
  window.location.href = "payment.html";
}
