//import '../page/index.css';

import {
    profileAddbutton, closeButtons, formProfileElement, formPlace,
    popupProfileOpenButton, settings, initialCards, nameInput, jobInput} from '../components/constants.js';

import Section from '../components/Section.js'
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';


// заполнение полей формы попапа редактирования профиля
function popupProfileFormInput({ username, userjob }) {
    nameInput.value = username;
    jobInput.value = userjob;
  }

const formProfileValidate = new FormValidator(settings, formProfileElement)
formProfileValidate.enableValidation();

export const placeProfileValidate = new FormValidator(settings, formPlace)
placeProfileValidate.enableValidation()

const viewImagePopup = new PopupWithImage('.popup_photo');
viewImagePopup.setEventListeners();

// создание новой карточки + использование класса PopupWithmage для открытия попапа изображения
const addCard = (data) => {
    const generateCard = new Card({
        data: data,
        handleCardClick: (name, link) => {
            viewImagePopup.open(name, link);
        }
    }, '#cards');
    const renderCard = generateCard.generateCard();
    return renderCard;
};

//создание карточек массива через класс Section
const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        cardList.addItem(addCard(item));
    },
}, '.elements');
//отрисовка карточек массива
cardList.renderedItems();

//добавление новой карточки через класс PopupWithForm

const addCardPopup = new PopupWithForm({
    popupSelector: '.popup_place',
    handleFormSubmit: (formData) => {
        cardList.addItem(addCard(formData));
        addCardPopup.close();
    }
});
// слушатель для функционала открытия попапа через PopupWithForm
addCardPopup.setEventListeners();

profileAddbutton.addEventListener('click', () => {
    addCardPopup.open();
})

// заполнение исходных полей профиля через класс UserInfo
const userInfo = new UserInfo({
    username: '.profile__column-name',
    userjob: '.profile__column-profession'
});

// попап редактирования профиля через класс PopupWithForm
const editProfilePopup = new PopupWithForm({
    popupSelector: '.popup_profile',
    handleFormSubmit: (formData) => {
        userInfo.setUserInfo(formData);
        editProfilePopup.close();
    }
});

editProfilePopup.setEventListeners();

// Обработчик редактирования попапа профиля
popupProfileOpenButton.addEventListener('click', () => {
    const info = userInfo.getUserInfo();
    popupProfileFormInput({
        username: info.username,
        userjob: info.userjob
    });
    editProfilePopup.open();
});




















