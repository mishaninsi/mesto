import {elements} from './constants.js';
import {profileAddbutton} from './constants.js';
import {closeButtons} from './constants.js';
import {formProfileElement} from './constants.js';
import {formPlace} from './constants.js';
import {popupProfileOpenButton} from './constants.js';
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
import { openPopup } from './utils.js';
import { closePopup } from './utils.js';
import {handleProfileFormSubmit} from './utils.js';
import {handlePlaceFormSubmit} from './utils.js';
import {PopupProfileFormInput} from './utils.js';
import Section from './Section.js'
import {Card} from './Card.js';
import { FormValidator } from './FormValidator.js';
import Popup from './Popup.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';



// обработчик кнопки добавления места
//profileAddbutton.addEventListener('click', () => { openPopup(popupPlace) });

//обработчки кнопки закрытия попапов
closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup))
});


//обработчик отправки формы попапа редактирования профиля 
formProfileElement.addEventListener('submit', handleProfileFormSubmit);

//обработчик отправки формы попапа редактирования места 
formPlace.addEventListener('submit', handlePlaceFormSubmit);


/*


// функция загрузки карточек из массива
const renderInitialCards = (array) => {
    array.forEach((item) => {
      addCard(item.name, item.link);
    })
  };

  renderInitialCards(initialCards);
*/
//функция отправки формы редактирования места








const formProfileValidate = new FormValidator (settings, formProfileElement)
formProfileValidate.enableValidation();
export const placeProfileValidate = new FormValidator (settings, formPlace)
placeProfileValidate.enableValidation()

//создание карточек массива через класс Section
const cardList = new Section ({
    items: initialCards,
    renderer: (item) => {
        const generateCard = new Card(item.name, item.link, '#cards', openPopup, closePopup);
        const renderCard = generateCard.generateCard();
        cardList.addItem(renderCard);        
    },
}, elements);

//загрузка карточек массива
cardList.renderedItems();

//попап добавления новой карточки через PopupWithForm

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

const userInfo = new UserInfo({
    username: '.profile__column-name',
    userjob: '.profile__column-profession'
  });

// попап редактирования профиля
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








