const editProfile = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_profile');
const closeProfile = popupProfile.querySelector('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const profileNameInput = popupProfileForm.querySelector('.popup__form-input_type_name');
const profileJobInput = popupProfileForm.querySelector('.popup__form-input_type_job');

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


editProfile.addEventListener('click', openProfilePopupHandler)

closeProfile.addEventListener('click', closeProfilePopupHandler)

function openProfilePopupHandler() {
  openPopup(popupProfile);
  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileJob.textContent;
}

//открытие попапа и закрытие при нажатии на оверлэй 
function openPopup(popup) {
  popup.classList.add('popup_visible');
  document.addEventListener('keydown', closePopupEsc);
}



function closePopup(popup) {
  popup.classList.remove('popup_visible');
  document.removeEventListener('keydown', closePopupEsc);
}

function closeProfilePopupHandler() {
  closePopup(popupProfile);
}



function formProfileSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobInput.value;

  closeProfilePopupHandler();
}

popupProfileForm.addEventListener('submit', formProfileSubmitHandler);


const templatePlaceCard = document.querySelector('#template-place-card').content;
const placeCards = document.querySelector('.elements');


//рендер карточек
initialCards.forEach(function (placeData) {
  placeCards.appendChild(renderPlaceCard(placeData));
})


function renderPlaceCard(placeData) {
  // 1. clone
  const htmlElement = templatePlaceCard.cloneNode(true);
  // 2. set values
  htmlElement.querySelector('.element__text').innerText = placeData.name;
  htmlElement.querySelector('.element__img').src = placeData.link;
  htmlElement.querySelector('.element__img').alt = placeData.name;
  // 3. append to list
  setEventListeners(htmlElement);

  return htmlElement;
}
//добавление карточки
function addCard(container, cardElement) {
  container.prepend(cardElement);
}

//удаление карточки
function handleDeleteCard(evt) {
  const deleteElement = evt.target;
  deleteElement.closest('.element').remove();
}

//добавление лайка 
function likeActive(evt) {
  const likeElement = evt.target;
  likeElement.classList.toggle('element__like_active');
}


const addPlaceButton = document.querySelector('.profile__add-button');
const popupPlace = document.querySelector('.popup_place');
const closePlace = popupPlace.querySelector('.popup__close');
const popupPlaceForm = popupPlace.querySelector('.popup__form');
const placeNameInput = popupPlaceForm.querySelector('.popup__card-input_type_name');
const placeLinkInput = popupPlaceForm.querySelector('.popup__card-input_type_link');
const placeSubmitButton = popupPlaceForm.querySelector('.popup__button');

addPlaceButton.addEventListener('click', openPlacePopupHandler)

closePlace.addEventListener('click', closePlacePopupHandler)

function openPlacePopupHandler() {
  openPopup(popupPlace)
  placeSubmitButton.classList.add('popup__button_inactive');
  placeSubmitButton.setAttribute('disabled', true);
  placeNameInput.value = '';
  placeLinkInput.value = '';
}
function closePlacePopupHandler() {
  closePopup(popupPlace)
}

function formPlaceSubmitHandler(evt) {
  evt.preventDefault();

  const nameValue = placeNameInput.value;
  const linkValue = placeLinkInput.value;

  const placeData = { name: nameValue, link: linkValue };
  renderPlaceCard(placeData);

  addCard(placeCards, renderPlaceCard(placeData))

  closePlacePopupHandler();
}

popupPlaceForm.addEventListener('submit', formPlaceSubmitHandler);

// //показать ошибку
// const showInputError = (formElement, input, errorMessage) => {
//   const errorElement = formElement.querySelector(`.${input.id}-error`);
//   input.classList.add('popup__form-input_error');
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add('error')
// };
// //скрыть ошибку
// const hideInputError = (formElement, input, errorMessage) => {
//   const errorElement = formElement.querySelector(`.${input.id}-error`);
//   input.classList.remove('popup__form-input_error');
//   errorElement.textContent = '';
//   errorElement.classList.remove('error');
// };

// //искать в инпутах не валидный инпут
// const hasInvalidInput = (inputs) => {
//   return inputs.some((input) => {
//     return !input.validity.valid;
//   });
// }

// //блокировка кнопки
// const toggleButtonState = (inputs, buttonElement) => {
//   if (hasInvalidInput(inputs)) {
//     buttonElement.classList.add('popup__button_inactive');
//   } else {
//     buttonElement.classList.remove('popup__button_inactive');
//   }
// }

// //проверка инпутов
// const checkInputValidity = (formElement, input) => {
//   if (!input.validity.valid) {
//     showInputError(formElement, input, input.validationMessage);
//   } else {
//     hideInputError(formElement, input);
//   }
// };


// //находим инпуты и вешаем слушатели input, submit
// const enableValidationInput = (formElement, object) => {
//   const inputs = Array.from(formElement.querySelectorAll(object.inputSelector));
//   const buttonElement = formElement.querySelector(object.submitButtonSelector);
//   toggleButtonState(inputs, buttonElement);
//   inputs.forEach((input) => {
//     input.addEventListener('input', () => {
//       checkInputValidity(formElement, input);
//       toggleButtonState(inputs, buttonElement);
//     })
//   })
// }


//находим все формы

// const enableValidation = (config) => {

//   //показать ошибку
//   const showInputError = (formElement, input, errorMessage) => {
//     const errorElement = formElement.querySelector(`.${input.id}-error`);
//     input.classList.add(config.inputErrorClass);
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add(config.errorClass)
//   };
//   //скрыть ошибку
//   const hideInputError = (formElement, input, errorMessage) => {
//     const errorElement = formElement.querySelector(`.${input.id}-error`);
//     input.classList.remove(config.inputErrorClass);
//     errorElement.textContent = '';
//     errorElement.classList.remove(config.errorClass);
//   };

//   //искать в инпутах не валидный инпут
//   const hasInvalidInput = (inputs) => {
//     return inputs.some((input) => {
//       return !input.validity.valid;
//     });
//   }

//   //блокировка кнопки
//   const toggleButtonState = (inputs, buttonElement) => {
//     if (hasInvalidInput(inputs)) {
//       buttonElement.classList.add(config.inactiveButtonClass);
//       buttonElement.setAttribute('disabled', true)
//     } else {
//       buttonElement.classList.remove(config.inactiveButtonClass);
//       buttonElement.removeAttribute('disabled', true)
//     }
//   }

//   //проверка инпутов
//   const checkInputValidity = (formElement, input) => {
//     if (!input.validity.valid) {
//       showInputError(formElement, input, input.validationMessage);
//     } else {
//       hideInputError(formElement, input);
//     }
//   };


//   //находим инпуты и вешаем слушатели input, submit
//   const enableValidationInput = (formElement) => {
//     const inputs = Array.from(formElement.querySelectorAll(config.inputSelector));
//     const buttonElement = formElement.querySelector(config.submitButtonSelector);
//     toggleButtonState(inputs, buttonElement);
//     inputs.forEach((input) => {
//       input.addEventListener('input', () => {
//         checkInputValidity(formElement, input);
//         toggleButtonState(inputs, buttonElement);
//       })
//     })
//   }


//   const forms = Array.from(document.querySelectorAll(config.formSelector))
//   forms.forEach((formElement) => {
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     })
//     enableValidationInput(formElement)
//   });

// }
const toggleButtonState = enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: '.popup__form-input_error',
  errorClass: '.error'
});

const popupImage = document.querySelector('.popup-image');
const popupImageClose = popupImage.querySelector('.popup-image__close');
const popupImageText = popupImage.querySelector('.popup-image__title');
const popupImagePlace = popupImage.querySelector('.popup-image__place');

//слушатель удаления карточки , лайка и открытия попап с изображением
function setEventListeners(element) {
  element.querySelector('.element__like').addEventListener('click', likeActive);
  element.querySelector('.element__trash').addEventListener('click', handleDeleteCard);
  element.querySelector('.element__img').addEventListener('click', openPopupImage);

}


function openPopupImage(evt) {
  openPopup(popupImage);
  const card = evt.target.closest('.element');
  popupImagePlace.src = card.querySelector('.element__img').src;
  popupImageText.textContent = card.querySelector('.element__text').textContent;
  popupImageText.alt = card.querySelector('.element__text').textContent;
}
function closePopupImage() {
  closePopup(popupImage);
}
popupImageClose.addEventListener('click', closePopupImage);


function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup.popup_visible');
    if (popup) {
      closePopup(popup);
    }
  }
}
document.addEventListener('keydown', closePopupEsc);


const popups = document.querySelectorAll('.popup');
for (let i = 0; i < popups.length; i++) {
  const popup = popups[i];
  const closePopupOverlay = (evt) => {
    if (evt.target === popup) {
      closePopup(popup);
    }
  }
  popup.addEventListener('click', closePopupOverlay);
}