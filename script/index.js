const profileCollumnButton = document.querySelector('.profile__column-button');

const profileAddbutton = document.querySelector('.profile__addbutton');

const popup = document.querySelector('.popup');

const popupplace = document.querySelector('.popup_place');

const popupCloseButton = document.querySelector('.popup__close-btn');
const placeCloseButton = document.querySelector('.popup__close-btn_place');

profileCollumnButton.addEventListener('click', openPopup);
profileAddbutton.addEventListener('click', openPopupPlace);


popupCloseButton.addEventListener('click', closePopup);
placeCloseButton.addEventListener('click', closePopupPlace);
let profileName = document.querySelector('.profile__column-name');
let profileProfession = document.querySelector('.profile__column-profession');
let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__input_field_name');
let jobInput = formElement.querySelector('.popup__input_field_job');


function openPopup(event) {
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
    popup.classList.add('popup_opened')
    }

function openPopupPlace(event) {
    popupplace.classList.add('popup_opened')
    }

function closePopup(event) {
    popup.classList.remove('popup_opened')
        }

function closePopupPlace(event) {
    popupplace.classList.remove('popup_opened')
                }


function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup()
}

formElement.addEventListener('submit', formSubmitHandler)

const cardsTemplate = document.querySelector('#Cards').content;
const elements = document.querySelector('.elements');

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

  initialCards.forEach(function(newcard){
  const card = cardsTemplate.cloneNode(true);
  console.log(newcard.title);
  card.querySelector('.element__place-name').textContent = newcard.name;
  card.querySelector('.element__photo').src = newcard.link;
  elements.append(card);
  });
