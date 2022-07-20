const popupProfileOpenButton = document.querySelector('.profile__column-button');
const profileAddbutton = document.querySelector('.profile__addbutton');
const popupProfile = document.querySelector('.popup_profile');
const popupPlace = document.querySelector('.popup_place');
const popupPhoto = document.querySelector('.popup_photo');
const popups = document.querySelectorAll('.popup');
const popupImage = document.querySelector('.popup__image');
const closeButtons = document.querySelectorAll('.popup__close-btn');
const profileName = document.querySelector('.profile__column-name');
const profileProfession = document.querySelector('.profile__column-profession');
const formElement = document.querySelector('.popup__form-user');
const nameInput = formElement.querySelector('.popup__input_field_name');
const jobInput = formElement.querySelector('.popup__input_field_job');
const cardsTemplate = document.querySelector('#cards').content;
const elements = document.querySelector('.elements');
const placeName = document.querySelector('.element__place-name');
const placeLink = document.querySelector('.element__photo');
const formPlace = document.querySelector('.popup__container_place');
const placeInput = formPlace.querySelector('.popup__input_field_place');
const linkInput = formPlace.querySelector('.popup__input_field_link');
const popupPlaceSubmitBtnInactive = document.querySelector('.popup__place-btn');


popupProfileOpenButton.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
    openPopup(popupProfile)
});
profileAddbutton.addEventListener('click', () => { openPopup(popupPlace) });

closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup))
});

function openPopup(popup) {
    document.addEventListener('keydown', closePopupEsc);
    popup.classList.add('popup_opened')
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc);
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    
    closePopup(popupProfile)
}

formElement.addEventListener('submit', handleProfileFormSubmit);

function renderItems() {
    initialCards.forEach(renderCard);
};

function createCard(newCard) {
    const card = cardsTemplate.cloneNode(true);
    const elementPhoto = card.querySelector('.element__photo');
    card.querySelector('.element__place-name').textContent = newCard.name;
    elementPhoto.src = newCard.link;
    elementPhoto.alt = newCard.name;
    const likeButton = card.querySelector('.element__like');
    likeButton.addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active');
    });
    const delButton = card.querySelector('.element__thrash');
    delButton.addEventListener('click', function (evt) {
        const target = evt.target;
        const elementDelete = target.closest('.element');
        elementDelete.remove();
    });
    card.querySelector('.element__photo').addEventListener('click', function (evt) {
        openPopup(popupPhoto);
        const targetPhoto = evt.target;
        popupImage.src = targetPhoto.src;
        const popupTitleImage = document.querySelector('.popup__place-name');
        const targetTitleImage = evt.target.closest('.element').textContent;
        popupTitleImage.textContent = targetTitleImage;

    })
    return card;

};

function renderCard(card) {
    elements.prepend(createCard(card));
};

renderItems();

function handlePlaceFormSubmit(evt) {
    evt.preventDefault();
    renderCard({ name: placeInput.value, link: linkInput.value })
    placeInput.value = '';
    linkInput.value = '';
    popupPlaceSubmitBtnInactive.classList.add('popup__submit-btn_invalid');
    popupPlaceSubmitBtnInactive.setAttribute('disabled', true);
    closePopup(popupPlace);
}

formPlace.addEventListener('submit', handlePlaceFormSubmit);


// Закрытие попапа через ESC
function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        const popupActive = document.querySelector('.popup_opened');
        closePopup(popupActive);
    }
}

//Закрытие попапа на оверлей
popups.forEach(function (item) {
    item.addEventListener('mousedown', (event) => {
        if (event.target === event.currentTarget) {
            closePopup(item)
        }
    })
})
