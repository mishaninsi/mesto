import {popups} from './constants.js';
import {nameInput} from './constants.js';
import {jobInput} from './constants.js';


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

//Закрытие попапа на оверлей
popups.forEach(function (item) {
    item.addEventListener('mousedown', (event) => {
        if (event.target === event.currentTarget) {
            closePopup(item)
        }
    })
})


// заполнение полей формы попапа редактирования профиля
export function PopupProfileFormInput({ username, userjob }) {
    nameInput.value = username;
    jobInput.value = userjob;
  }




