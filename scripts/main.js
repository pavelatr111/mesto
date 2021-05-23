let openPopup = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__close');

openPopup.addEventListener('click', toggleClass)

closePopup.addEventListener('click', toggleClass)

function toggleClass() {
    popup.classList.toggle('popup_visible');
}

let popupForm = document.querySelector('.popup__form');
let nameInput = popupForm.querySelector('.popup__form-input_type_name');
let jobInput = popupForm.querySelector('.popup__form-input_type_job');

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    let nameValue = nameInput.value;
    let jobValue = jobInput.value;
    
    let profileName = document.querySelector('.profile__name-text');
    let profileJob = document.querySelector('.profile__job');
   
    profileName.textContent = nameValue;
    profileJob.textContent = jobValue;

    toggleClass();
}

popupForm.addEventListener('submit', formSubmitHandler);