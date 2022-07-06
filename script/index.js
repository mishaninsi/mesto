const profileCollumnButton = document.querySelector('.profile__column-button');

const profileAddbutton = document.querySelector('.profile__addbutton');


const popupProfile = document.querySelector('.popup_profile');
const popupPlace = document.querySelector('.popup_place');
const popupPhoto = document.querySelector('.popup_photo');

const closeButtons = document.querySelectorAll('.popup__close-btn');

profileCollumnButton.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
    openPopup(popupProfile)});
profileAddbutton.addEventListener('click', () => {openPopup(popupPlace)});

closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
button.addEventListener('click', () => closePopup(popup))
});

const profileName = document.querySelector('.profile__column-name');
const profileProfession = document.querySelector('.profile__column-profession');
const formElement = document.querySelector('.popup__container');
const nameInput = formElement.querySelector('.popup__input_field_name');
const jobInput = formElement.querySelector('.popup__input_field_job');

function openPopup(popup) {
        popup.classList.add('popup_opened')
}

function closePopup(popup) {
    popup.classList.remove('popup_opened')
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    closePopup(popupProfile)
}

formElement.addEventListener('submit', handleProfileFormSubmit);


const cardsTemplate = document.querySelector('#cards').content;
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





