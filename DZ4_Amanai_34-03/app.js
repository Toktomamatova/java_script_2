fetch('characters.json')
    .then(response => response.json())
    .then(characters => {
        const characterContainer = document.getElementById('character-container');

        characters.forEach(character => {
            const characterCard = document.createElement('div');
            characterCard.classList.add('character-card');

            const characterPhoto = document.createElement('img');
            characterPhoto.src = character.person_photo;
            characterPhoto.alt = character.name;
            characterPhoto.classList.add('character-photo');
            characterCard.appendChild(characterPhoto);

            const name = document.createElement('h2');
            name.textContent = character.name;
            characterCard.appendChild(name);

            const age = document.createElement('p');
            age.textContent = `Age: ${character.age}`;
            characterCard.appendChild(age);

            characterContainer.appendChild(characterCard);
        });
    })
    .catch(error => console.error('Error loading characters:', error));