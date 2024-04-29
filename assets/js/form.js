// Function to handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('blogForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Retrieve form values
        const username = document.getElementById('username').value;
        const blogTitle = document.getElementById('blogTitle').value;
        const blogContent = document.getElementById('blogContent').value;

        // Create a new post object
        const newPost = {
            username: username,
            title: blogTitle,
            content: blogContent
        };

        // Retrieve existing posts from local storage or initialize an empty array
        const posts = JSON.parse(localStorage.getItem('posts')) || [];

        // Add the new post to the posts array
        posts.push(newPost);

        // Store the updated posts array back into local storage
        localStorage.setItem('posts', JSON.stringify(posts));

        // Redirect to blog.html after form submission
        window.location.href = 'blog.html';
    });
});

// Dark mode functions (keep as is)
const modeBtn = document.getElementById('modeBtn');
const body = document.body;

function isDarkModeEnabled() {
    return localStorage.getItem('darkMode') === 'enabled';
}

function toggleDarkMode() {
    if (isDarkModeEnabled()) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

function enableDarkMode() {
    body.classList.add('dark-mode');
    modeBtn.textContent = "Light Mode";
    localStorage.setItem('darkMode', 'enabled');
}

function disableDarkMode() {
    body.classList.remove('dark-mode');
    modeBtn.textContent = "Night Mode";
    localStorage.setItem('darkMode', null);
}

if (isDarkModeEnabled()) {
    enableDarkMode();
} else {
    disableDarkMode();
}

modeBtn.addEventListener('click', function() {
    toggleDarkMode();
});

