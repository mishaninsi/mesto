import {elements, popupProfileOpenButton} from './constants.js';
import {profileAddbutton} from './constants.js';
import {closeButtons} from './constants.js';
import {formprofileElement} from './constants.js';
import {formPlace} from './constants.js';
import {popups} from './constants.js';
import {Card} from './Card.js'; // при импорте этого класса с подключенными модулями Card, constants, Formvalidator в разметке, в консоли появляется ошибка (Uncaught ReferenceError: Cannot access 'Card' before initialization)
import { FormValidator } from './FormValidator.js';
import {settings} from './constants.js';
import {popupPlace} from './constants.js';
import {nameInput} from './constants.js';
import {profileName} from './constants.js';
import {jobInput} from './constants.js';
import {profileProfession} from './constants.js';
import {popupProfile} from './constants.js';
import {initialCards} from './constants.js';
import {placeInput} from './constants.js';
import {linkInput} from './constants.js';




// функция заполнения полей имени и професии в попапе профиля
popupProfileOpenButton.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
    openPopup(popupProfile)
});

// обработчик кнопки добавления места
profileAddbutton.addEventListener('click', () => { openPopup(popupPlace) });

//обработчки кнопки закрытия попапов
closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup))
});

//функция открыти попапов
export function openPopup(popup) {
    document.addEventListener('keydown', closePopupEsc);
    popup.classList.add('popup_opened')
}
//функция закрытия попапов
export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc);
}
//функция отправки формы редактирования профиля
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    
    closePopup(popupProfile)
}

//обработчик отправки формы попапа редактирования профиля 
formprofileElement.addEventListener('submit', handleProfileFormSubmit);

//обработчик отправки формы попапа редактирования места 
formPlace.addEventListener('submit', handlePlaceFormSubmit);



// функция добавления новой карточки из попапа место
const addCard = (name, link) => {
    const generateCard = new Card(name, link, '#cards', openPopup, closePopup);
    const renderCard = generateCard.generateCard();
    elements.prepend(renderCard);
};

// функция загрузки карточек из массива
const renderInitialCards = (array) => {
    array.forEach((item) => {
      addCard(item.name, item.link);
    })
  };

  renderInitialCards(initialCards);

//функция отправки формы редактирования места
function handlePlaceFormSubmit(evt) {
    evt.preventDefault();
    addCard(placeInput.value, linkInput.value)
    formPlace.reset();
    placeProfileValidate._toggleButtonState();
    closePopup(popupPlace);
}

// Закрытие попапа через ESC
function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        const popupActive = document.querySelector('.popup_opened');
        closePopup(popupActive);
    }
}

//Закрытие попапа на оверлей
popups.forEach(function (item) {
    item.addEventListener('mousedown', (event) => {
        if (event.target === event.currentTarget) {
            closePopup(item)
        }
    })
})



const formProfileValidate = new FormValidator (settings, formprofileElement)
formProfileValidate.enableValidation();
const placeProfileValidate = new FormValidator (settings, formPlace)
placeProfileValidate.enableValidation()










