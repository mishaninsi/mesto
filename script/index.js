const profileCollumnButton = document.querySelector('.profile__column-button');

const profileAddbutton = document.querySelector('.profile__addbutton');


const popupProfile = document.querySelector('.popup_profile');
const popupPlace = document.querySelector('.popup_place');
const popupPhoto = document.querySelector('.popup_photo');
const popups = document.querySelectorAll('.popup');


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
    document.addEventListener('keydown', closePopupEsc);    
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

const inputElement = formElement.querySelector('.popup__input');
console.log (inputElement.id)
// Выбираем элемент ошибки на основе уникального класса 
/*const formError = formElement.querySelector(`#${formInput.id}-error`);
console.log(formError)*/

/*// Слушатель события input
inputElement.addEventListener('input', function (evt) {
    // Выведем в консоль значение свойства validity.valid поля ввода, 
    // на котором слушаем событие input
    console.log(evt.target.validity.valid);
  });*/

  // Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage, settings) => {
    // Находим элемент ошибки внутри самой функции
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    console.log (errorElement)
    inputElement.classList.add(settings.inputErrorClass);
    // Заменим содержимое span с ошибкой на переданный параметр
    errorElement.textContent = errorMessage;
     // Показываем сообщение об ошибке
     errorElement.classList.add(settings.errorClass);

  };

  // Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, settings) => {
    // Находим элемент ошибки
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    console.log(errorElement)
    inputElement.classList.remove(settings.inputErrorClass);
     // Скрываем сообщение об ошибке
     errorElement.classList.remove(settings.errorClass);
  // Очистим ошибку
  errorElement.textContent = '';
  };

  // Функция isValid теперь принимает formElement и inputElement,
// а не берёт их из внешней области видимости
const isValid = (formElement, inputElement, settings) => {
    if (!inputElement.validity.valid) {
      // showInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    showInputError(formElement, inputElement, inputElement.validationMessage, settings);
    } else {
      // hideInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
      hideInputError(formElement, inputElement, settings);
    }
  };
   
 /* formElement.addEventListener('submit', function (evt) {
    // Отменим стандартное поведение по сабмиту
    evt.preventDefault();
  });*/
  
  function setEventListeners (formElement, settings) {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    // Найдём в текущей форме кнопку отправки
    const buttonElement = formElement.querySelector(settings.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, settings);
      // Обойдём все элементы полученной коллекции
    inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', function () {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        isValid(formElement, inputElement, settings)
        // Вызовем toggleButtonState и передадим ей массив полей и кнопку
      toggleButtonState(inputList, buttonElement, settings);
      });
    });
  };

  function enableValidation (settings) {
    // Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
    const formList = Array.from(document.querySelectorAll(settings.formSelector));
  
    // Переберём полученную коллекцию
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        // У каждой формы отменим стандартное поведение
        evt.preventDefault();
      });
  
      // Для каждой формы вызовем функцию setEventListeners,
      // передав ей элемент формы
      setEventListeners(formElement, settings);
    });
  };
  
  
// Функция принимает массив полей

function hasInvalidInput (inputList) {
    // проходим по этому массиву методом some
    return inputList.some((inputElement) => {
      // Если поле не валидно, колбэк вернёт true
      // Обход массива прекратится и вся функция
      // hasInvalidInput вернёт true
  
      return !inputElement.validity.valid;
    })
  }; 

  // Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять

function toggleButtonState (inputList, buttonElement, settings) {
    // Если есть хотя бы один невалидный инпут
    if (hasInvalidInput(inputList)) {
      // сделай кнопку неактивной
      buttonElement.classList.add(settings.inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    } else {
      // иначе сделай кнопку активной
      buttonElement.classList.remove(settings.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  };

  // Закрытие попапа через ESC
  function closePopupEsc (evt){
    if (evt.key === 'Escape') {
    const popupActive = document.querySelector('.popup_opened');
    closePopup(popupActive);
    document.removeEventListener('keydown', closePopupEsc);
}
  }

  //Закрытие попапа на оверлей
popups.forEach(function(item){
  item.addEventListener('click', (event) => {
    if(event.target === event.currentTarget){
        closePopup(item)
    }
})
})

//включение валидации вызовом enableValidation

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inputErrorClass: 'input__error_type',
    errorClass: 'input__error_type_active',
    inactiveButtonClass: 'popup__submit-btn_invalid',
})