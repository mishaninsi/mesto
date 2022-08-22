
export class Card {
    constructor({data, handleCardClick}, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick
        
        
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
        this._photoCard.src = this._link;
        this._element.querySelector('.element__place-name').textContent = this._name;
        this._photoCard.alt = this._name;
        return this._element;
    }
    _handleLikeButton() {
        this._likeButton.classList.toggle('element__like_active');

    }
    _handleTrashButton() {
        this._element.remove();
        this._element = null;

    }
    _handleOpenPopup() {
        this._handleCardClick(this._name, this._link);
    }
/*
    handleCardClick(name, link) {
        name = this._name;
        link = this._link;
        this._openPopup(popupPhoto);
        popupImage.src = link;
        popupImage.alt = name;
        popupPlaceName.textContent = name
        
    }
    */
    _setEventListeners() {
        this._likeButton.addEventListener('click', () => {
            this._handleLikeButton();
        });
        this._element.querySelector('.element__thrash').addEventListener('click', () => {
            this._handleTrashButton();
        });
        this._photoCard.addEventListener('click', () => {
            this._handleOpenPopup();
        })

    }
    
}


