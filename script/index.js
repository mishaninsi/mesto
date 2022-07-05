const profileCollumnButton = document.querySelector('.profile__column-button');

const profileAddbutton = document.querySelector('.profile__addbutton');

const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_profile');
const popupPlace = document.querySelector('.popup_place');
const popupPhoto = document.querySelector('.popup_photo');

const closeButtons = document.querySelectorAll('.popup__close-btn');
/*
const popupCloseButton = document.querySelector('.popup__close-btn');
const placeCloseButton = document.querySelector('.popup__close-btn_place');
const photoCloseButton = document.querySelector('.popup__close-btn_photo');
*/

profileCollumnButton.addEventListener('click', () => {openPopup(popupProfile)});
profileAddbutton.addEventListener('click', () => {openPopup(popupPlace)});

closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
button.addEventListener('click', () => closePopup(popup))
});
/*
popupCloseButton.addEventListener('click', closePopup);

placeCloseButton.addEventListener('click', closePopupPlace);
photoCloseButton.addEventListener('click', closePopupPhoto);
*/
const profileName = document.querySelector('.profile__column-name');
const profileProfession = document.querySelector('.profile__column-profession');
const formElement = document.querySelector('.popup__container');
const nameInput = formElement.querySelector('.popup__input_field_name');
const jobInput = formElement.querySelector('.popup__input_field_job');




function openPopup(popup) {
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
    popup.classList.add('popup_opened')
}

function closePopup(popup) {
    popup.classList.remove('popup_opened')
}

/* function closePopupPlace(event) {
    popupPlace.classList.remove('popup_opened')
}

function closePopupPhoto(event) {
    popupPhoto.classList.remove('popup_opened')
}*/


function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    closePopup(popup)
}

formElement.addEventListener('submit', handleProfileFormSubmit);


const cardsTemplate = document.querySelector('#Cards').content;
const elements = document.querySelector('.elements');

function renderItems() {
    initialCards.forEach(renderCard);
};

function createCard(newCard){
    const card = cardsTemplate.cloneNode(true);
    card.querySelector('.element__place-name').textContent = newCard.name;
    card.querySelector('.element__photo').src = newCard.link;
    card.querySelector('.element__photo').alt = newCard.name;
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
        const popupImage = document.querySelector('.popup__image');
        popupImage.src = targetPhoto.src;
        const popupTitleImage = document.querySelector('.popup__place-name');
        const targetTitleImage = evt.target.closest('.element').textContent;
        popupTitleImage.textContent = targetTitleImage;

    })
    return card;
    
};

function renderCard(card){
    elements.prepend(createCard(card));
        };

    renderItems();
/*
initialCards.forEach(function (newcard) {
    const card = cardsTemplate.cloneNode(true);

    card.querySelector('.element__place-name').textContent = newcard.name;
    card.querySelector('.element__photo').src = newcard.link;
    card.querySelector('.element__photo').alt = newcard.name;
    const likeButton = card.querySelector('.element__like')
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
        const popupImage = document.querySelector('.popup__image');
        popupImage.src = targetPhoto.src;
        const popupTitleImage = document.querySelector('.popup__place-name');
        const targetTitleImage = evt.target.closest('.element').textContent;
        popupTitleImage.textContent = targetTitleImage;

    })
    elements.append(card);
});
*/



const placeName = document.querySelector('.element__place-name');

const placeLink = document.querySelector('.element__photo');

const formPlace = document.querySelector('.popup__container_place');

const placeInput = formPlace.querySelector('.popup__input_field_place');
const linkInput = formPlace.querySelector('.popup__input_field_link');

function handlePlaceFormSubmit(evt) {
    evt.preventDefault();
    renderCard ({name:placeInput.value, link:linkInput.value})
        closePopup(popupPlace);
}

formPlace.addEventListener('submit', handlePlaceFormSubmit);





