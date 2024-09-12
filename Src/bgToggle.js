const darkTheme = document.getElementsByTagName("body")[0];
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");
const banner = document.querySelector(".banner");

// Check and apply theme from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
  const isDarkMode = localStorage.getItem("darkMode") === "true";

    if (isDarkMode) {
    darkTheme.classList.remove("bg-slate-900");
    banner.style.backgroundImage = "url(../images/bg-desktop-light.jpg)"; // Light mode background
    moonIcon.style.display = "inline";
    sunIcon.style.display = "none";
    } else {
    banner.style.backgroundImage = "url('../images/bg-desktop-dark.jpg')"; // Dark mode background
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline";
  }
});

// Trigger toggle switch
document.getElementById("theme-icon").addEventListener("click", () => {
  // Toggle the dark mode class on the body
  darkTheme.classList.toggle("bg-slate-900");

  // Checks if dark mode is active
    const isDarkMode = darkTheme.classList.contains("bg-slate-900");

  // Update localStorage with the current theme state
  localStorage.setItem("darkMode", isDarkMode);

  // Change background image based on the modes
  if (isDarkMode) {
    banner.style.backgroundImage = "url('../images/bg-desktop-dark.jpg')"; //Switch Dark mode background
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline";
  } else {
    banner.style.backgroundImage = "url('../images/bg-desktop-light.jpg')"; //Switch Light mode background
    moonIcon.style.display = "inline";
    sunIcon.style.display = "none";
  }
});
