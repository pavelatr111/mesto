let editProfile = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

editProfile.addEventListener('click', openPopupHandler)

closePopup.addEventListener('click', closePopupHandler)

function openPopupHandler() {
    popup.classList. add('popup_visible');
    nameInput.value = profileName.textContent
    jobInput.value = profileJob.textContent
}
function closePopupHandler() {
    popup.classList.remove('popup_visible');
}

let popupForm = document.querySelector('.popup__form');
let nameInput = popupForm.querySelector('.popup__form-input_type_name');
let jobInput = popupForm.querySelector('.popup__form-input_type_job');

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    let nameValue = nameInput.value;
    let jobValue = jobInput.value;
   
    profileName.textContent = nameValue;
    profileJob.textContent = jobValue;

    toggleClass();
}

popupForm.addEventListener('submit', formSubmitHandler);