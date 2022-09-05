
export class Card {
    constructor({data, templateSelector, userId, handleCardClick, handleDelete, api}) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._userId = userId;
        this._cardId = data._id;
        this._cardOwnerId = data.owner._id;
        this._likes = data.likes;
        this._handleDelete = handleDelete;
        this._handleCardClick = handleCardClick;
        this._api = api
        
        
    }
    _getTemplate() {
        this._card = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
        return this._card;
    }
    generateCard() {
        this._element = this._getTemplate();
        this._likeButton = this._element.querySelector('.element__like');
        this._photoCard = this._element.querySelector('.element__photo');
        this._likesNumber = this._element.querySelector('.element__likes-counter');
        this._trashBtn = this._element.querySelector('.element__thrash');
        this._photoCard.src = this._link;
        this._element.querySelector('.element__place-name').textContent = this._name;
        this._photoCard.alt = this._name;
        this._checkDelete();
        this._checkLiked();
        this._likesNumber.textContent = this._likes.length;
        this._setEventListeners();
        return this._element;
    }

        // Проверка наличия лайка на карточке
    _checkLiked() {
        if (this._likes.some((user) => {
        return this._userId === user._id;
        })) {
        this._likeButton.classList.add('element__like_active');
        }
    }

    // постановка и снятие лайка
    _handleLikeButton() {
        if (this._likeButton.classList.contains('element__like_active')) {
            this._api.deleteLike(this._cardId)
            .then((res) => {
                this._likeButton.classList.remove('element__like_active');
                this._likesNumber.textContent = res.likes.length;
        })
        .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
        } else {
            this._api.setLike(this._cardId)
            .then((res) => {
                this._likeButton.classList.add('element__like_active');
                this._likesNumber.textContent = res.likes.length;
        })
        .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
      }
    }
    
    // чек владельца карточки
    _checkDelete() {
    if (this._userId !== this._cardOwnerId) {
      this._trashBtn.remove();
    }
  }
   
    _handleOpenPopup() {
        this._handleCardClick(this._name, this._link);
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => {
            this._handleLikeButton();
        });
        this._trashBtn.addEventListener('click', () => {
            this._handleDelete(this._card, this._cardId);
        });
        this._photoCard.addEventListener('click', () => {
            this._handleOpenPopup();
        })

    }
    
}


