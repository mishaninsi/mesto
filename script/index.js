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

let profileName = document.querySelector('.profile__column-name');
let profileProfession = document.querySelector('.profile__column-profession');
let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.name-input');
let jobInput = formElement.querySelector('.job-input');

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup()
}

formElement.addEventListener('submit', formSubmitHandler)