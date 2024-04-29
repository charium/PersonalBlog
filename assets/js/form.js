document.getElementById("blogForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form inputs
    const username = document.getElementById("username").value;
    const blogTitle = document.getElementById("blogTitle").value;
    const blogContent = document.getElementById("blogContent").value;
    
    // Redirect to blog page with query parameters
    window.location.href = `blog.html?username=${encodeURIComponent(username)}&blogTitle=${encodeURIComponent(blogTitle)}&blogContent=${encodeURIComponent(blogContent)}`;
});
