document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        renderCards(data);
    } catch (error) {
        console.error('Error:', error.message);
    }
});

function renderCards(posts) {
    const cardContainer = document.getElementById('cardContainer');

    posts.slice(0, 8).forEach(post => {
        const card = createCard(post);
        cardContainer.appendChild(card);
    });
}


function createCard(post) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card');

    const image = document.createElement('img');
    image.src = 'https://i.pinimg.com/564x/03/30/8b/03308bf2cb2bafef18f254d7fea401d7.jpg';
    image.alt = 'Card Image';
    cardContainer.appendChild(image);

    const title = document.createElement('h3');
    title.textContent = post.title;
    cardContainer.appendChild(title);

    const body = document.createElement('p');
    body.textContent = post.body;
    cardContainer.appendChild(body);

    return cardContainer;
}


