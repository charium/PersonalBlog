document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const postIndex = urlParams.get('postIndex');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    // Retrieve the specific post based on the index
    const post = posts[postIndex];
    const modeBtn = document.getElementById('modeBtn');
    const body = document.body;
    const header = document.querySelector('.header');
    const blogPostElement = document.getElementById('blogPost');

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
        header.classList.add('header-dark');
        header.classList.remove('header-light');
        modeBtn.textContent = "Light Mode";
        localStorage.setItem('darkMode', 'enabled');
    }

    // Function to disable dark mode
    function disableDarkMode() {
        body.classList.remove('dark-mode');
        header.classList.remove('header-dark');
        header.classList.add('header-light');
        modeBtn.textContent = "Night Mode";
        localStorage.setItem('darkMode', null);
    }

    if (post) {
        const postHTML = `
            <h2>${post.title}</h2>
            <h3>${post.username}</h3>
            <p>${post.content}</p>
        `;
        blogPostElement.innerHTML = postHTML;
    }

    // Set initial dark mode state
    if (isDarkModeEnabled()) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    // Event listener for mode button click
    modeBtn.addEventListener('click', function() {
        toggleDarkMode();
    });

});

// Function to navigate to form page
function goToForm() {
    window.location.href = 'index.html'; 
}
