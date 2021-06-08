let editProfile = document.querySelector('.profile__edit-button');
let popupProfile = document.querySelector('.popup_profile');
let closeProfile = popupProfile.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

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
    popupProfile.classList. add('popup_visible');
    profileNameInput.value = profileName.textContent;
    profileJobInput.value = profileJob.textContent;
}
function closeProfilePopupHandler() {
    popupProfile.classList.remove('popup_visible');
}

let popupProfileForm = popupProfile.querySelector('.popup__form');
let profileNameInput = popupProfileForm.querySelector('.popup__form-input_type_name');
let profileJobInput = popupProfileForm.querySelector('.popup__form-input_type_job');

function formProfileSubmitHandler (evt) {
    evt.preventDefault(); 

    let nameValue = profileNameInput.value;
    let jobValue = profileJobInput.value;
   
    profileName.textContent = nameValue;
    profileJob.textContent = jobValue;

    closeProfilePopupHandler();
}

popupProfileForm.addEventListener('submit', formProfileSubmitHandler);


const templatePlaceCard = document.querySelector('#template-place-card').content;
const placeCards = document.querySelector('.elements');


//рендер карточек
initialCards.forEach(renderPlaceCard)


function renderPlaceCard(placeData){
    // 1. clone
    const htmlElement = templatePlaceCard.cloneNode(true);
    // 2. set values
    htmlElement.querySelector('.element__text').innerText= placeData.name;
    htmlElement.querySelector('.element__img').src = placeData.link;
    htmlElement.querySelector('.element__img').alt = placeData.name;
    // 3. append to list
    setEventListeners(htmlElement);

    placeCards.prepend(htmlElement);
    
}

//удаление карточки
function handleDeleteCard (evt) {
    const deleteElement = evt.target;
    deleteElement.closest('.element').remove();
}

//добавление лайка 
function likeActive(evt) {
    const likeElement = evt.target;
    likeElement.classList.toggle('element__like_active');
}

//

//слушатель удаления карточки , лайка и открытия попап с изображением
function setEventListeners(element){
    element.querySelector('.element__like').addEventListener('click', likeActive);
    element.querySelector('.element__trash').addEventListener('click', handleDeleteCard);
    element.querySelector('.element__img').addEventListener('click', openPopupImage);
}

let addPlaceButton = document.querySelector('.profile__add-button');
let popupPlace = document.querySelector('.popup_place');
let closePlace = popupPlace.querySelector('.popup__close');
let popupPlaceForm = popupPlace.querySelector('.popup__form');
let placeNameInput = popupPlaceForm.querySelector('.popup__card-input_type_name');
let placeLinkInput = popupPlaceForm.querySelector('.popup__card-input_type_link');

addPlaceButton.addEventListener('click', openPlacePopupHandler)

closePlace.addEventListener('click', closePlacePopupHandler)

function openPlacePopupHandler() {
    popupPlace.classList. add('popup_visible');
    placeNameInput.value = '';
    placeLinkInput.value = '';
}
function closePlacePopupHandler() {
    popupPlace.classList.remove('popup_visible');
}

function formPlaceSubmitHandler (evt) {
    evt.preventDefault(); 

    let nameValue = placeNameInput.value;
    let linkValue = placeLinkInput.value;
   
    const placeData = { name: nameValue, link: linkValue };
    renderPlaceCard(placeData); 
    initialCards.push(placeData,);

    closePlacePopupHandler();
}

popupPlaceForm.addEventListener('submit', formPlaceSubmitHandler);

const popupImage = document.querySelector('.popup-image');
const popupImageClose = popupImage.querySelector('.popup-image__close');
const popupImageText = popupImage.querySelector('.popup-image__title');
const popupImagePlace = popupImage.querySelector('.popup-image__place');


function openPopupImage(evt) {
    popupImage.classList.add('popup_visible');
    const card = evt.target.closest('.element');
    popupImagePlace.src = card.querySelector('.element__img').src;
    popupImageText.textContent = card.querySelector('.element__text').textContent;
    popupImageText.alt = card.querySelector('.element__text').textContent;
}
function closePopupImage() {
    popupImage.classList.remove('popup_visible');
}
popupImageClose.addEventListener('click', closePopupImage);