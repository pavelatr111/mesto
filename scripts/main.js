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
  formValidator.resetValidation();
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
  const card = new Card(placeData, '#template-place-card', openPopupImage);
  return card.render();
}
//добавление карточки
function addCard(container, cardElement) {
  container.prepend(cardElement);
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
  formValidatorPlace.resetValidation();
  openPopup(popupPlace)
  // placeNameInput.value = '';
  // placeLinkInput.value = '';
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

  placeNameInput.value = '';
  placeLinkInput.value = '';
}

popupPlaceForm.addEventListener('submit', formPlaceSubmitHandler);

const config = {
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: '.popup__form-input_error',
  errorClass: '.error'
};
const forms = Array.from(document.querySelectorAll('.popup__form'))
const formProfile = document.forms.profile;
const formPlace = document.forms.place;


const formValidator = new FormValidator(config, formProfile);
const formValidatorPlace = new FormValidator(config, formPlace)

formValidator.enableValidation()
formValidatorPlace.enableValidation()



const popupImage = document.querySelector('.popup-image');
const popupImageClose = popupImage.querySelector('.popup__close');
const popupImageText = popupImage.querySelector('.popup-image__title');
const popupImagePlace = popupImage.querySelector('.popup-image__place')


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