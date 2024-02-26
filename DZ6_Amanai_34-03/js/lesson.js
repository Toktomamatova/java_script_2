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
const somInput=document.querySelector('#som')
const usdInput=document.querySelector('#usd')
const eurInput=document.querySelector('#rub')

const converted = (element, targetElement,additionalElement, current)=>{
    element.oninput=()=>{
        const request=new XMLHttpRequest()
        request.open("GET","../data/converter.json")
        request.setRequestHeader("Content-type","application/json")
        request.send()
        request.onload=()=>{
            const data=JSON.parse(request.response)

            switch (current) {
                case 'som':
                    targetElement.value = (element.value / data.usd).toFixed(2)
                    additionalElement.value = (element.value / data.rub).toFixed(2)
                    break
                case 'usd':
                    targetElement.value = (element.value * data.usd).toFixed(2)
                    additionalElement.value = (element.value * 0.91).toFixed(2)
                    break
                case 'rub':
                    targetElement.value = (element.value * data.rub).toFixed(2)
                    additionalElement.value = (element.value * 1.10).toFixed(2)
                    break
                default:
                    break
            }
        }
    }
}

converted(somInput, usdInput, eurInput, 'som');
converted(usdInput, somInput, eurInput, 'usd');
converted(eurInput, somInput, usdInput, 'rub');

//Card Switcher
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');
const cardBlock = document.querySelector('.card');

let currentCard = 1 ;

const loadCard = (cardSwitcher) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${cardSwitcher}`)
        .then(response => response.json())
        .then(data => {
            cardBlock.innerHTML = `
                <p>${data.title}</p>
                <p style="color:${data.completed ? 'green' : 'red'}">${data.completed}</p>
                <span>${data.id}</span>
            `;
        })
        .catch(error => console.error('Error:', error));
};
const prevCard = () => {
    currentCard = (currentCard === 1) ? 200 : currentCard - 1;
    loadCard(currentCard);
};
const nextCard = () => {
    currentCard = (currentCard === 200) ? 1 : currentCard + 1;
    loadCard(currentCard);
};
loadCard(currentCard);
btnPrev.addEventListener('click', prevCard);
btnNext.addEventListener('click', nextCard);


//2) Отдельный fetch запрос,консоль.
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error('Ошибка:', error));
