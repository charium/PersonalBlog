let posts = JSON.parse(localStorage.getItem('posts')) || [];

document.getElementById("blogForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    const username = document.getElementById("username").value;
    const blogTitle = document.getElementById("blogTitle").value;
    const blogContent = document.getElementById("blogContent").value;

    // Check if all fields are filled
    if (username.trim() === '' || blogTitle.trim() === '' || blogContent.trim() === '') {
        alert('Please complete all fields.'); // Display an alert message
        return; // Exit the function early
    }

    // Construct blog post object
    const post = {
        username: username,
        title: blogTitle,
        content: blogContent
    };

    // Add the new post to the array
    posts.push(post);

    // Store the updated posts array back to localStorage
    localStorage.setItem('posts', JSON.stringify(posts));

    console.log("local posts: ", posts); // Log the posts to the console


    // Redirect to the blog.html page and pass the post index as a query 
    window.location.href = `blog.html?postIndex=${posts.length - 1}`;

});

