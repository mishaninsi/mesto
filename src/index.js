import './pages/index.css';

import {
    profileAddbutton, closeButtons, formProfileElement, formPlace,
    popupProfileOpenButton, settings, initialCards, nameInput, jobInput, popupNewAvatar,
    formNewAvatar, btnAvatar, avatar} from './components/constants.js';

import Section from './components/Section.js'
import { Card } from './components/Card.js';
import { FormValidator } from './components/FormValidator.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithDelete from './components/PopupWithDelete';
import { data } from 'autoprefixer';
import Api from './components/Api';

// подключение API

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-49',
    headers: {
        authorization: '54257d03-9097-479f-8916-197225ef6b08',
        'Content-Type': 'application/json'
      }
    });
    
    let userId
    
    // Загрузка готовых карточек с сервера
    Promise.all([api.getInitialCards(), api.getUserInfo()])
       .then(([initialCards, userData]) => {
        userInfo.setUserInfo(userData);
        userId = userData._id;
        cardList.renderedItems(initialCards);
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })


// заполнение полей формы попапа редактирования профиля
function addPopupProfileFormInput({ username, userjob }) {
    nameInput.value = username;
    jobInput.value = userjob;
  }

const formProfileValidate = new FormValidator(settings, formProfileElement)
formProfileValidate.enableValidation();

const placeProfileValidate = new FormValidator(settings, formPlace)
placeProfileValidate.enableValidation()

const viewImagePopup = new PopupWithImage('.popup_photo');
viewImagePopup.setEventListeners();

const formNewAvatarValidate = new FormValidator(settings, formNewAvatar)
formNewAvatarValidate.enableValidation();

// создание новой карточки + использование класса PopupWithmage для открытия попапа изображения
const addCard = (data) => {
    const generateCard = new Card({
        data: data,
        templateSelector: '#cards',
        userId: userId,
        handleCardClick: (name, link) => {
            viewImagePopup.open(name, link);
        },
        handleDelete: (card, cardId) => {
            deleteCardPopupPlace.open(card, cardId);
        },
        api: api
    });
    const renderCard = generateCard.generateCard();
    return renderCard;
};

//создание карточек массива через класс Section
const cardList = new Section({
        renderer: (card) => {
        cardList.addItem(addCard(card));
    },
}, '.elements');


//добавление новой карточки через класс PopupWithForm

const addCardPopup = new PopupWithForm({
    popupSelector: '.popup_place',
    handleFormSubmit: (formData) => {
        addCardPopup.loading(true);
       api.addCards(formData)
       .then((formData) => {
        cardList.addItem(addCard(formData));
        addCardPopup.close();
       })
    
    }
});
// слушатель для функционала открытия попапа через PopupWithForm
addCardPopup.setEventListeners();

// слушатель открытия попапа и функция валидации кнопки сабмита попапа добавления новой карточки
profileAddbutton.addEventListener('click', () => {
    placeProfileValidate.toggleButtonState();
    addCardPopup.open();
})

// заполнение исходных полей профиля через класс UserInfo
const userInfo = new UserInfo({
    username: '.profile__column-name',
    userjob: '.profile__column-profession',
    avatar: '.profile__column-avatar'
});

// попап редактирования профиля через класс PopupWithForm
const editProfilePopup = new PopupWithForm({
    popupSelector: '.popup_profile',
    handleFormSubmit: (formData) => {
    editProfilePopup.loading(true);     
    api.editUserInfo(formData)
      .then((formData) => {
        userInfo.setUserInfo(formData);
        editProfilePopup.close();
      });
    }
});

editProfilePopup.setEventListeners();

// попап редактирования аватара пользователя
const editAvatarPopup = new PopupWithForm({
    popupSelector: '.popup_avatar',
    handleFormSubmit: (data) => {
        editAvatarPopup.loading(true);
        api.editAvatar(data)
        .then ((data) => {
            avatar.src = data.avatar;
            editAvatarPopup.close();
          })
    }
});

editAvatarPopup.setEventListeners();

// попап удаления карточки

const deleteCardPopupPlace = new PopupWithDelete({
    popupSelector: '.popup_card-deleter',
    handleTrashButton: (card, cardId) => {
        api.deleteCard(cardId)
        .then(() => {
            card.remove();
            deleteCardPopupPlace.close();
          })
    }
});

deleteCardPopupPlace.setEventListeners();


// обработчик редактирования попапа редактирования аватара
btnAvatar.addEventListener('click', () => {
    formNewAvatarValidate.toggleButtonState();
    editAvatarPopup.open();
  });


// Обработчик редактирования попапа профиля
popupProfileOpenButton.addEventListener('click', () => {
    const info = userInfo.getUserInfo();
    addPopupProfileFormInput({
        username: info.username,
        userjob: info.userjob
    });
    editProfilePopup.open();
});

// вывод запросов в консоль

fetch('https://mesto.nomoreparties.co/v1/cohort-49//users/me', {
headers: {
        authorization: '54257d03-9097-479f-8916-197225ef6b08',
        }
})
.then(res => res.json())
.then((result) => {
    console.log(result)
});
