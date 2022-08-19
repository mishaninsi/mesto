import {popups} from './constants.js';
import {popupProfileOpenButton} from './constants.js';
import {nameInput} from './constants.js';
import {jobInput} from './constants.js';
import {profileName} from './constants.js';
import {profileProfession} from './constants.js';
import {popupProfile} from './constants.js';
import {placeInput} from './constants.js';
import {linkInput} from './constants.js';
import {elements} from './constants.js';
import {popupPlace} from './constants.js';
import {formPlace} from './constants.js';
import {placeProfileValidate} from './index.js';
import {Card} from './Card.js';

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
/*
// функция заполнения полей имени и професии в попапе профиля
popupProfileOpenButton.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
    openPopup(popupProfile)
});
*/

// заполнение полей формы попапа редактирования профиля
export function PopupProfileFormInput({ username, userjob }) {
    nameInput.value = username;
    jobInput.value = userjob;
  }

/*//функция отправки формы редактирования профиля
export function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    
    closePopup(popupProfile)
}
*/
/*export function handlePlaceFormSubmit(evt) {
    evt.preventDefault();
    addCard(placeInput.value, linkInput.value)
    formPlace.reset();
    placeProfileValidate.toggleButtonState();
    closePopup(popupPlace);
}
*/


