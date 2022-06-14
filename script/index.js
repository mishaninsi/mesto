const profileCollumnButton = document.querySelector('.profile__column-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-btn');

profileCollumnButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);


function openPopup(event) {
    popup.classList.add('popup_opened')
    }

function closePopup(event) {
    popup.classList.remove('popup_opened')
        }

let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.nameInput');
let jobInput = document.querySelector('.jobInput');


function formSubmitHandler (evt) {
    evt.preventDefault();

let nameView = nameInput.value;
let jobView = jobInput.value;

let newName = document.querySelector('.profile__column-name');
newName.textContent = (nameView);

let newJob = document.querySelector('.profile__column-profession');
newJob.textContent = (jobView);

}

formElement.addEventListener('submit', formSubmitHandler); 