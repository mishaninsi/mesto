const initialCards = [
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

import { openPopup } from './index.js';
import { closePopup } from './index.js';
import { popupPhoto } from './index.js';
import { popupPlace } from './index.js';
import { placeInput } from './index.js';
import { linkInput } from './index.js';
import { popupPlaceSubmitBtnInactive } from './index.js';

export class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
    }
    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
        return cardElement;
    }
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this.handleCardClick();
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
        const elementDelete = this._element;
        elementDelete.remove();

    }
    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._handleLikeButton();
        });
        this._element.querySelector('.element__thrash').addEventListener('click', () => {
            this._handleTrashButton();
        });

    }
    handleCardClick(name, link) {
        const popupImage = this._element.querySelector('.element__photo')
        name = this._name;
        link = this._link;
        popupImage.addEventListener('click', function (evt) {
            openPopup(popupPhoto);
            document.querySelector('.popup__image').src = link;
            document.querySelector('.popup__place-name').textContent = name

        })
    }
}
initialCards.forEach((item) => {
    const card = new Card(item, '#cards');
    const cardElement = card.generateCard();

    document.querySelector('.elements').append(cardElement);
});

function addCard() {
    const data = { name: placeInput.value, link: linkInput.value };
    const cardSelector = '#cards';
    const generateCard = new Card(data, cardSelector);
    const renderCard = generateCard.generateCard();
    document.querySelector('.elements').append(renderCard);
}
export function handlePlaceFormSubmit(evt) {
    evt.preventDefault();
    addCard()
    placeInput.value = '';
    linkInput.value = '';
    popupPlaceSubmitBtnInactive.classList.add('popup__submit-btn_invalid');
    popupPlaceSubmitBtnInactive.setAttribute('disabled', true);
    closePopup(popupPlace);
}
