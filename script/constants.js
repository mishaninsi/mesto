export const popupProfileOpenButton = document.querySelector('.profile__column-button');
export const profileAddbutton = document.querySelector('.profile__addbutton');
export const popupProfile = document.querySelector('.popup_profile');
export const popupPlace = document.querySelector('.popup_place');
export const popupPhoto = document.querySelector('.popup_photo');
export const popups = document.querySelectorAll('.popup');
export const popupImage = document.querySelector('.popup__image');
export const closeButtons = document.querySelectorAll('.popup__close-btn');
export const profileName = document.querySelector('.profile__column-name');
export const profileProfession = document.querySelector('.profile__column-profession');
export const formprofileElement = document.querySelector('.popup__form-user');
export const nameInput = formprofileElement.querySelector('.popup__input_field_name');
export const jobInput = formprofileElement.querySelector('.popup__input_field_job');
export const cardsTemplate = document.querySelector('#cards').content;
export const elements = document.querySelector('.elements');
export const placeName = document.querySelector('.element__place-name');
export const placeLink = document.querySelector('.element__photo');
export const formPlace = document.querySelector('.popup__container_place');
export const placeInput = formPlace.querySelector('.popup__input_field_place');
export const linkInput = formPlace.querySelector('.popup__input_field_link');
export const popupPlaceSubmitBtnInactive = document.querySelector('.popup__place-btn');
export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export const settings = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inputErrorClass: 'input__error_type',
    errorClass: 'input__error_type_active',
    inactiveButtonClass: 'popup__submit-btn_invalid'
}