const modeBtn = document.getElementById('modeBtn');
const body = document.body;

// Function to check if dark mode is enabled
function isDarkModeEnabled() {
    return localStorage.getItem('darkMode') === 'enabled';
}

// Function to toggle dark mode
function toggleDarkMode() {
    if (isDarkModeEnabled()) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

// Function to enable dark mode
function enableDarkMode() {
    body.classList.add('dark-mode');
    modeBtn.textContent = "Light Mode";
    localStorage.setItem('darkMode', 'enabled');
}

// Function to disable dark mode
function disableDarkMode() {
    body.classList.remove('dark-mode');
    modeBtn.textContent = "Night Mode";
    localStorage.setItem('darkMode', null);
}

// Toggle dark mode and set initial state
modeBtn.addEventListener('click', function() {
    toggleDarkMode();
});

// Set initial dark mode state
if (isDarkModeEnabled()) {
    enableDarkMode();
} else {
    disableDarkMode();
}
