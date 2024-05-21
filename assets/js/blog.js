document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const postIndex = urlParams.get('postIndex');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    const blogPostElement = document.getElementById('blogPost');
    const modeBtn = document.getElementById('modeBtn');
    const body = document.body;
    const header = document.querySelector('.header');

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
        blogPostElement.classList.add('darkBlog');
        header.classList.remove('header-light');
        modeBtn.textContent = "Light Mode";
        localStorage.setItem('darkMode', 'enabled');
    }

    // Function to disable dark mode
    function disableDarkMode() {
        body.classList.remove('dark-mode');
        header.classList.remove('header-dark');
        blogPostElement.classList.remove('darkBlog');
        header.classList.add('header-light');
        modeBtn.textContent = "Night Mode";
        localStorage.setItem('darkMode', null);
    }


    // Set initial dark mode state
    if (isDarkModeEnabled()) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    // Event listener for mode button click
    modeBtn.addEventListener('click', function () {
        toggleDarkMode();
    });

    // Function to display blog posts
    function displayBlogPosts() {
        let postsHTML = '';

        posts.reverse();
        // Loop through all stored posts
        posts.forEach((post, index) => {
            postsHTML += `
                <div class="blog-item">
                    <h2>${post.title}</h2>
                    <h3>Author: ${post.username}</h3>
                    <p>${post.content}</p>
                </div>
            `;
        });

        // Display all posts on the page
        blogPostElement.innerHTML = postsHTML;
    }


    // Display existing blog posts and/or the newly added post
    if (
        postIndex !== null && postIndex !== undefined && !isNaN(postIndex) && postIndex >= 0 &&
        postIndex < posts.length) {
        // If a valid postIndex is provided, display the specific post
        const post = posts[postIndex];
        const postHTML = `
            <div class="blog-item">
                <h2>${post.title}</h2>
                <h3>Author: ${post.username}</h3>
                <p>${post.content}</p>
            </div>
        `;
        blogPostElement.innerHTML = postHTML;

        displayBlogPosts();
    } else {
        // Otherwise, display all existing posts
        displayBlogPosts();
    }
});

//Function to navigate to form page
function goToForm() {
    window.location.href = 'index.html';
}