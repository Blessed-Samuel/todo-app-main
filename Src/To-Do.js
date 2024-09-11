// Desktop Visibility
const mbLink = document.querySelector('.mb-link');

function updateVisibility() {
    if (window.innerWidth >= 1024) {
        mbLink.classList.toggle('hidden');
    } else {
        mbLink.classList.add('hidden');
    }
}

updateVisibility();
window.addEventListener('resize', updateVisibility);

// Mobile Visibility
const mbLinkMobile = document.querySelector('.mb-link-mobile');

function updateMbVisibility() {
    if (window.innerWidth <= 375) {
        mbLinkMobile.classList.toggle('hidden');
    } else {
        mbLinkMobile.classList.add('hidden');
    }
}

updateMbVisibility();
window.addEventListener('resize', updateMbVisibility);

// New List Addition Functions
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById('mainInput');
    const todoList = document.getElementById('listNode');

    input.addEventListener('keypress', function (event) {
        if (event.key === "Enter") {
            event.preventDefault();

            // Get the value from the input field
            const todoText = input.querySelector('input[type="text"]').value.trim();

            if (todoText !== "") {
                // Create a new div for the todo item
                const newDiv = document.createElement("div");
                newDiv.className = "flex items-center w-full border-b border-gray-100 px-8 p-2";

                // Create the radio button
                const radioButton = document.createElement('input');
                radioButton.type = "radio";
                radioButton.name = "task";
                radioButton.className = "cursor-pointer form-radio text-blue-500 mr-3";

                // Create the input field for the todo text
                const todoInput = document.createElement('input');
                todoInput.type = "text";
                todoInput.value = todoText;
                todoInput.className = "outline-none placeholder:font-josefin p-4 border-none rounded-md w-full h-12 bg-transparent";

                // Append the radio button and input to the new div
                newDiv.appendChild(radioButton);
                newDiv.appendChild(todoInput);

                // Create the bottom hr line
                const hr = document.createElement("hr");
                hr.className = "line border-gray-100";

                // Add the new div and hr to the todo list
                todoList.appendChild(newDiv);
                todoList.appendChild(hr);

                // Clear the input field after adding the todo
                input.querySelector('input[type="text"]').value = "";
            }
        }
    });
});

// Dark theme background and icon switch
const darkTheme = document.getElementsByTagName("body")[0];
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");
const banner = document.querySelector(".banner");

// Check and apply theme from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
  const isDarkMode = localStorage.getItem("darkMode") === "true";

  if (isDarkMode) {
    darkTheme.classList.add("bg-slate-900");
    banner.classList.add("bg-gradient-dark");
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline";
  } else {
    moonIcon.style.display = "inline";
    sunIcon.style.display = "none";
  }
});

document.getElementById("theme-icon").addEventListener("click", () => {
  // Toggle the dark mode class on the body
  darkTheme.classList.toggle("bg-slate-900");

  // Toggle the dark mode class on the banner
  banner.classList.toggle("bg-gradient-dark");

  // Check if dark mode is active
  const isDarkMode = darkTheme.classList.contains("bg-slate-900");

  // Update localStorage with the current theme state
  localStorage.setItem("darkMode", isDarkMode);

  // Toggle the visibility of the icons based on the mode
  if (isDarkMode) {
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline";
  } else {
    moonIcon.style.display = "inline";
    sunIcon.style.display = "none";
  }
});




