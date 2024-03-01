//TAB SLIDER✈
const tabContentItems = document.querySelectorAll('.tab_content_block');
const tabItems = document.querySelectorAll('.tab_content_item');
const tabItemsParent = document.querySelector('.tab_content_items');
const hideTabContent = () => {
    tabContentItems.forEach((item) => {
        item.style.display = 'none';
    });
    tabItems.forEach((item) => {
        item.classList.remove('tab_content_item_active');
    });
};
const showTabContent = (index) => {
    tabContentItems[index].style.display = 'block';
};
hideTabContent();
showTabContent(0);
tabItemsParent.addEventListener('click', (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabItems.forEach((tabItem, tabIndex) => {
            if (event.target === tabItem) {
                hideTabContent();
                showTabContent(tabIndex);
            }
        });
    }
});
const slides = document.querySelectorAll('.tab_content_block');
let currentSlide = 0;
function showSlide(index) {
    slides.forEach((slide, idx) => {
        if (idx === index) {
            slide.style.display = 'block';
        }
        else {
            slide.style.display = 'none';
        }
    });
}
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}
showSlide(currentSlide);
setInterval(nextSlide, 3000);

// Валюты
const convertCurrency = async (element, targetElement, additionalElement, current) => {
    element.oninput = async () => {
        try {
            const response = await fetch("../data/converter.json");
            if (!response.ok) {
                throw new Error('Failed to fetch currency data');
            }
            const data = await response.json();

            switch (current) {
                case 'som':
                    targetElement.value = (element.value / data.usd).toFixed(2);
                    additionalElement.value = (element.value / data.rub).toFixed(2);
                    break;
                case 'usd':
                    targetElement.value = (element.value * data.usd).toFixed(2);
                    additionalElement.value = (element.value * 0.91).toFixed(2);
                    break;
                case 'rub':
                    targetElement.value = (element.value * data.rub).toFixed(2);
                    additionalElement.value = (element.value * 1.10).toFixed(2);
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
};

const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const rubInput = document.querySelector('#rub');

convertCurrency(somInput, usdInput, rubInput, 'som');
convertCurrency(usdInput, somInput, rubInput, 'usd');
convertCurrency(rubInput, somInput, usdInput, 'rub');

//Card Switcher
const loadCard = async (cardSwitcher) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${cardSwitcher}`);
        if (!response.ok) {
            throw new Error('Failed to fetch card data');
        }
        const data = await response.json();

        const cardBlock = document.querySelector('.card');
        cardBlock.innerHTML = `
            <p>${data.title}</p>
            <p style="color:${data.completed ? 'green' : 'red'}">${data.completed}</p>
            <span>${data.id}</span>
        `;
    } catch (error) {
        console.error('Error:', error);
    }
};

const prevCard = async () => {
    currentCard = (currentCard === 1) ? 200 : currentCard - 1;
    await loadCard(currentCard);
};

const nextCard = async () => {
    currentCard = (currentCard === 200) ? 1 : currentCard + 1;
    await loadCard(currentCard);
};

let currentCard = 1;
loadCard(currentCard);

const btnPrev = document.querySelector('#btn-prev');
btnPrev.addEventListener('click', prevCard);

const btnNext = document.querySelector('#btn-next');
btnNext.addEventListener('click', nextCard);


//2) Отдельный fetch запрос,консоль.
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error('Ошибка:', error));