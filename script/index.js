const profileCollumnButton = document.querySelector('.profile__column-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-btn');
profileCollumnButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
let profileName = document.querySelector('.profile__column-name');
let profileProfession = document.querySelector('.profile__column-profession');
let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__input_field_name');
let jobInput = formElement.querySelector('.popup__input_field_job');


function openPopup(event) {
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
    popup.classList.add('popup_opened')
    }

function closePopup(event) {
    popup.classList.remove('popup_opened')
        }



function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup()
}

formElement.addEventListener('submit', formSubmitHandler)