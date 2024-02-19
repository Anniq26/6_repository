fetch('https://jsonplaceholder.typicode.com/posts')


function createPostElement(postData) {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    const titleElement = document.createElement("h2");
    titleElement.classList.add("post-title");
    titleElement.textContent = postData.title;

    const contentElement = document.createElement("p");
    contentElement.classList.add("post-content");
    contentElement.textContent = postData.body;

    postElement.appendChild(titleElement);
    postElement.appendChild(contentElement);

    return postElement;
}


async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

function displayPosts(posts) {
    const postsContainer = document.getElementById("posts-container");
    posts.forEach(post => {
        const postElement = createPostElement(post);
        postsContainer.appendChild(postElement);
    });
}