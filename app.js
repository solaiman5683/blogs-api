function loadBlogs() {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res => res.json())
		.then(data => displayPost(data));
}

loadBlogs()
function displayPost(blogs) {
	const blogContainer = document.getElementById('blogs');
	let count = 1;
	for (const blog of blogs) {
		const blogBody = document.createElement('div');
		blogBody.classList.add('blog');
		blogBody.innerHTML = `
                <a href="https://picsum.photos/6A00/400?random=${count}" target="_blank">
                    <img src="https://picsum.photos/600/400?random=${count}"/>
                </a>
				<div class="blog-content">
					<h2 class="title">${blog.title}</h2>
					<p>${blog.body}</p>
				</div>
        `;
		blogContainer.appendChild(blogBody);
        count++;
	}
}
