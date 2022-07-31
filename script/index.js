const popupProfileOpenButton = document.querySelector('.profile__column-button');
const profileAddbutton = document.querySelector('.profile__addbutton');
const popupProfile = document.querySelector('.popup_profile');
export const popupPlace = document.querySelector('.popup_place');
export const popupPhoto = document.querySelector('.popup_photo');
const popups = document.querySelectorAll('.popup');
const popupImage = document.querySelector('.popup__image');
const closeButtons = document.querySelectorAll('.popup__close-btn');
const profileName = document.querySelector('.profile__column-name');
const profileProfession = document.querySelector('.profile__column-profession');
const formprofileElement = document.querySelector('.popup__form-user');
const nameInput = formprofileElement.querySelector('.popup__input_field_name');
const jobInput = formprofileElement.querySelector('.popup__input_field_job');
const cardsTemplate = document.querySelector('#cards').content;
const elements = document.querySelector('.elements');
const placeName = document.querySelector('.element__place-name');
const placeLink = document.querySelector('.element__photo');
const formPlace = document.querySelector('.popup__container_place');
export const placeInput = formPlace.querySelector('.popup__input_field_place');
export const linkInput = formPlace.querySelector('.popup__input_field_link');
export const popupPlaceSubmitBtnInactive = document.querySelector('.popup__place-btn');


popupProfileOpenButton.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
    openPopup(popupProfile)
});
profileAddbutton.addEventListener('click', () => { openPopup(popupPlace) });

closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup))
});

export function openPopup(popup) {
    document.addEventListener('keydown', closePopupEsc);
    popup.classList.add('popup_opened')
}

export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc);
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    
    closePopup(popupProfile)
}

formprofileElement.addEventListener('submit', handleProfileFormSubmit);

formPlace.addEventListener('submit', handlePlaceFormSubmit);

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

import { FormValidator } from './FormValidator.js';
import { Card } from './Cards.js';
import {handlePlaceFormSubmit} from './Cards.js';
import {settings} from './FormValidator.js';

const formProfileValidate = new FormValidator (settings, formprofileElement)
formProfileValidate.enableValidation();
const placeProfileValidate = new FormValidator (settings, formPlace)
placeProfileValidate.enableValidation()









