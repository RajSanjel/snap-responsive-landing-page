'use strict';
const features = document.querySelector('.features')
const dropdownFeatures = document.querySelector('.dropdown-features');

features.addEventListener("click", () => {

    if (screen.availWidth < 900) {
        const mobFetDrop = document.querySelector('.mobile-drop')
        if (mobFetDrop.innerHTML == ' ') {
            mobFetDrop.innerHTML = `
    
    <li><img src="./images/icon-todo.svg" /> Todo List</li>
                <li>
                  <img src="./images/icon-calendar.svg" />
                  Calender
                </li>
                <li>
                  <img src="./images/icon-reminders.svg" />
                  Reminders
                </li>
                <li>
                  <img src="./images/icon-planning.svg" />
                  Planning
                </li>
    `
            document.querySelector('.arrow-down-features').classList.toggle('hidden')
            document.querySelector('.arrow-up-features').classList.toggle('hidden')
        } else {
            mobFetDrop.innerHTML = " "
            document.querySelector('.arrow-down-features').classList.toggle('hidden')
            document.querySelector('.arrow-up-features').classList.toggle('hidden')
        }
    } else {
        dropdownFeatures.classList.toggle('hidden')
        document.querySelector('.arrow-down-features').classList.toggle('hidden')
        document.querySelector('.arrow-up-features').classList.toggle('hidden')
    }
});


const company = document.querySelector('.company')
const dropdownCompany = document.querySelector('.dropdown-company');

company.addEventListener("click", () => {
    if (screen.availWidth < 900) {
        const mobComDrop = document.querySelector('.mobile-drop-company')
        if (mobComDrop.innerHTML == ' ') {
            mobComDrop.innerHTML = `
            <li>History</li>
            <li>Our Team</li>
            <li>Blog</li>
    `
            document.querySelector('.arrow-down-company').classList.toggle('hidden')
            document.querySelector('.arrow-up-company').classList.toggle('hidden')
        } else {
            mobComDrop.innerHTML = " "
            document.querySelector('.arrow-down-company').classList.toggle('hidden')
            document.querySelector('.arrow-up-company').classList.toggle('hidden')
        }
    } else {
        dropdownCompany.classList.toggle('hidden')
        document.querySelector('.arrow-down-company').classList.toggle('hidden')
        document.querySelector('.arrow-up-company').classList.toggle('hidden')

    }
});

const hamToggle = document.querySelector('.hamIcon');

hamToggle.addEventListener('click', () => {
    document.querySelector('.ham').classList.toggle('hidden')
})

const hamClose = document.querySelector('.hamClose');

hamClose.addEventListener('click', () => {
    document.querySelector('.ham').classList.toggle('hidden')
})