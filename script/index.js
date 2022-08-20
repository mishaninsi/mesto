import {elements} from './constants.js';
import {profileAddbutton} from './constants.js';
import {closeButtons} from './constants.js';
import {formProfileElement} from './constants.js';
import {formPlace} from './constants.js';
import {popupProfileOpenButton} from './constants.js';
import {settings} from './constants.js';
import {initialCards} from './constants.js';
import { closePopup } from './utils.js';
import {PopupProfileFormInput} from './utils.js';
import Section from './Section.js'
import {Card} from './Card.js';
import { FormValidator } from './FormValidator.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
import PopupWithImage from './PopupWithImage.js';


//обработчки кнопки закрытия попапов
closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup))
});


const formProfileValidate = new FormValidator (settings, formProfileElement)
formProfileValidate.enableValidation();

export const placeProfileValidate = new FormValidator (settings, formPlace)
placeProfileValidate.enableValidation()

const viewImagePopup = new PopupWithImage('.popup_photo');
viewImagePopup.setEventListeners();

// создание новой карточки + использование класса PopupWithmage для открытия попапа изображения
const addCard = (data) => {
    const generateCard = new Card({
        data:data,
        handleCardClick: (name, link) => {
      const viewImagePopup = new PopupWithImage('.popup_photo');
      viewImagePopup.setEventListeners();
      viewImagePopup.open(name, link);
        }},'#cards');
    const renderCard = generateCard.generateCard();
    return renderCard;
};

//создание карточек массива через класс Section
const cardList = new Section ({
    items: initialCards,
    renderer: (item) => {
        cardList.addItem(addCard(item));        
    },
}, elements);
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
    console.log (addCardPopup.open())
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
  PopupProfileFormInput({
  username: info.username,
  userjob: info.userjob
  });
  editProfilePopup.open();
});




















