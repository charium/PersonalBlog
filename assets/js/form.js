document.getElementById("blogForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form inputs
    const username = document.getElementById("username").value;
    const blogTitle = document.getElementById("blogTitle").value;
    const blogContent = document.getElementById("blogContent").value;
    
    // Redirect to blog page with query parameters
    window.location.href = `blog.html?username=${encodeURIComponent(username)}&blogTitle=${encodeURIComponent(blogTitle)}&blogContent=${encodeURIComponent(blogContent)}`;
});


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





// document.getElementById("blogForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission
    
//     // Get form inputs
//     const username = document.getElementById("username").value;
//     const blogTitle = document.getElementById("blogTitle").value;
//     const blogContent = document.getElementById("blogContent").value;
    
//     // Check if all fields are filled
//     if (username.trim() === '' || blogTitle.trim() === '' || blogContent.trim() === '') {
//         alert('Please complete all fields.'); // Display an alert message
//         return; // Exit the function early
//     }
    
//     // Construct blog post object
//     const post = {
//         username: username,
//         title: blogTitle,
//         content: blogContent
//     };
    
//     // Retrieve existing posts from localStorage or initialize an empty array
//     let posts = JSON.parse(localStorage.getItem('posts')) || [];
    
//     // Add the new post to the array
//     posts.push(post);
    
//     // Store the updated posts array back to localStorage
//     localStorage.setItem('posts', JSON.stringify(posts));
    
//     // Redirect to the blog.html page and pass the post index as a query parameter
//     window.location.href = `blog.html?postIndex=${posts.length - 1}`;
// });



// const modeBtn = document.getElementById('modeBtn');
// const body = document.body;
// const post = document.getElementById('blogPost')

// // Function to check if dark mode is enabled
// function isDarkModeEnabled() {
//     return localStorage.getItem('darkMode') === 'enabled';
// }

// // Function to toggle dark mode
// function toggleDarkMode() {
//     if (isDarkModeEnabled()) {
//         disableDarkMode();
//     } else {
//         enableDarkMode();
//     }
// }

// // Function to enable dark mode
// function enableDarkMode() {
//     body.classList.add('dark-mode');;
//     modeBtn.textContent = "Light Mode";
//     localStorage.setItem('darkMode', 'enabled');
//     blogPost.setItem('')
// }

// // Function to disable dark mode
// function disableDarkMode() {
//     body.classList.remove('dark-mode');
//     modeBtn.textContent = "Night Mode";
//     localStorage.setItem('darkMode', null);
// }

// // Toggle dark mode and header image on button click
// modeBtn.addEventListener('click', function() {
//     toggleDarkMode();
// });

// // Set initial dark mode state
// if (isDarkModeEnabled()) {
//     enableDarkMode();
// } else {
//     disableDarkMode();
// }

