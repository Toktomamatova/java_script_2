// 1)GMAIL✉✉✉
const validateGmail = (gmail) => {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(gmail);
}

// Элементы❀❀❀
const gmailInput = document.getElementById('gmail_input');
const gmailResult = document.getElementById('gmail_result');
const gmailButton = document.getElementById('gmail_button');

// Кнопка✓✓✓
gmailButton.addEventListener('click', () => {
    const gmail = gmailInput.value.trim();
    if (validateGmail(gmail)) {
        gmailResult.textContent = 'Gmail is correct';
        gmailResult.style.color = 'green';
    } else {
        gmailResult.textContent = 'Gmail is incorrect';
        gmailResult.style.color = 'red';
    }
});

// 2)Функция квадратной штуки✦✦✦
const moveRight = (parent, child, currentPosition) => {
    const parentWidth = parent.clientWidth;
    const childWidth = child.clientWidth;

    if (currentPosition + childWidth <= parentWidth) {
        currentPosition += 1;
        child.style.left = `${currentPosition}px`;
        setTimeout(() => moveRight(parent, child, currentPosition), 10);
    }
}

// Элементы❀❀❀
const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

// Движение
moveRight(parentBlock, childBlock, 0);