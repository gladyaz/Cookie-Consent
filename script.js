const banner = document.getElementById("cookie-banner");
const button = document.getElementById("accept-cookies");

// Check if user already accepted
if (!localStorage.getItem("cookieConsent")) {
  banner.classList.remove("hidden");
}

button.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "true");
  banner.classList.add("hidden");
});
