import { popupPhoto } from './constants.js';
import {popupImage } from './constants.js';
import {popupPlaceName} from './constants.js';


export class Card {
    constructor(name, link, templateSelector, openPopup, closePopup) {
        this._name = name;
        this._link = link;
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
        this._likeButton = this._element.querySelector('.element__like');
        this._photoCard = this._element.querySelector('.element__photo')
        this._setEventListeners();
        this._element.querySelector('.element__photo').src = this._link;
        this._element.querySelector('.element__place-name').textContent = this._name;
        this._element.querySelector('.element__photo').alt = this._name;
        return this._element;
    }
    _handleLikeButton() {
        this._likeButton.classList.toggle('element__like_active');

    }
    _handleTrashButton() {
        this._element.remove();
        this._element = null;

    }

    handleCardClick(name, link) {
        name = this._name;
        link = this._link;
        this._openPopup(popupPhoto);
        popupImage.src = link;
        popupImage.alt = name;
        popupPlaceName.textContent = name
        
    }
    _setEventListeners() {
        this._likeButton.addEventListener('click', () => {
            this._handleLikeButton();
        });
        this._element.querySelector('.element__thrash').addEventListener('click', () => {
            this._handleTrashButton();
        });
        this._photoCard.addEventListener('click', () => {
            this.handleCardClick();
        })

    }
    
}


