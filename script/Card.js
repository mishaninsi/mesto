
import {initialCards} from './constants.js';
import { openPopup } from './index.js';
import { closePopup } from './index.js';
import { popupPhoto } from './constants.js';


export class Card {
    constructor(data, templateSelector, openPopup, closePopup) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._openPopup = openPopup;
        this._closePopup = closePopup;
    }
    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
        return cardElement;
    }
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        
        this._element.querySelector('.element__photo').src = this._link;
        this._element.querySelector('.element__place-name').textContent = this._name;
        this._element.querySelector('.element__photo').alt = this._name;
        return this._element;
    }
    _handleLikeButton() {
        const likeButton = this._element.querySelector('.element__like');
        likeButton.classList.toggle('element__like_active');

    }
    _handleTrashButton() {
        this._element.remove();
        this._element = null;

    }

    handleCardClick(name, link) {
        const photoCard = this._element.querySelector('.element__photo')
        name = this._name;
        link = this._link;
        this._openPopup(popupPhoto);
        document.querySelector('.popup__image').src = link;
        document.querySelector('.popup__image').alt = name;
        document.querySelector('.popup__place-name').textContent = name
        
    }
    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._handleLikeButton();
        });
        this._element.querySelector('.element__thrash').addEventListener('click', () => {
            this._handleTrashButton();
        });
        this._element.querySelector('.element__photo').addEventListener('click', () => {
            this.handleCardClick();
        })

    }
    
}
/*
initialCards.forEach((item) => {
    const card = new Card(item, '#cards');
    const cardElement = card.generateCard();

    document.querySelector('.elements').append(cardElement);
});
*/

