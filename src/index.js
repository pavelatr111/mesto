import './pages/index.css';
import { initialCards, formConfig } from "./scripts/utils/constants.js";
import { PopupWithForm } from "./scripts/PopupWithForm.js";
import { PopupWithImage } from "./scripts/PopupWithImage.js";
import { FormValidator } from "./scripts/FormValidator.js";
import { Card } from "./scripts/Card.js";
import { UserInfo } from './scripts/UserInfo';

  // рендер начального набора карточек
  const cardsContainer = document.querySelector(".elements");

  initialCards.forEach(function (placeData) {
    addCard(renderPlaceCard(placeData));
  });

  const placePopup = new PopupWithForm(".popup_place", submitHandler);
  placePopup.setEventListeners();

  const popupImage = new PopupWithImage(".popup-image");
  popupImage.setEventListeners();

  const form = document.forms.place;

  const formValidator = new FormValidator(formConfig, form);
  formValidator.enableValidation();

  // рендер элемента карточки
  function renderPlaceCard(placeData) {
    const card = new Card(placeData, "#template-place-card", openPopupImage);
    return card.render();
  }

  // добавление карточки
  function addCard(cardElement) {
    cardsContainer.prepend(cardElement);
  }

  // обработчик отправки формы карточки
  function submitHandler(formData) {
    const placeData = {
      name: formData.name,
      link: formData.link,
    };

    addCard(renderPlaceCard(placeData));
  }

  // открытие попапа с картинкой
  function openPopupImage(name, link) {
    popupImage.open(name, link);
  }

  const addPlaceButton = document.querySelector('.profile__add-button');
  const placeNameInput = form.querySelector('.popup__card-input_type_name');
  const placeLinkInput = form.querySelector('.popup__card-input_type_link');

  addPlaceButton.addEventListener('click', () => {
    placeNameInput.value = '';
    placeLinkInput.value = '';

    formValidator.resetValidation();

    placePopup.open();
  });




    // 1. html элементы имя и работа для отображения профиля
    const userInfo = new UserInfo ({nameSelector: '.profile__name', jobSelector: '.profile__job'});
  
    // 2.а. попап для редактирования проифля
    const popup = new PopupWithForm(".popup_profile", submitHandlerProfile);
    popup.setEventListeners();
  
    // 2.б. включение валадации формы
    const formProfile = document.forms.profile;
    const formValidatorProfile = new FormValidator(formConfig, formProfile);
    formValidatorProfile.enableValidation();

    // 2.в. обновление отображения профиля
    function submitHandlerProfile(formData) {
      userInfo.setUserInfo(formData.name, formData.job);
    }
  
    // 3. открытие попапа с данными о профиле
    const editProfile = document.querySelector(".profile__edit-button");
    const nameInput = formProfile.querySelector(".popup__form-input_type_name");
    const jobInput = formProfile.querySelector(".popup__form-input_type_job");
  
    editProfile.addEventListener("click", () => {
      const userInfoData = userInfo.getUserInfo();
      nameInput.value = userInfoData.name;
      jobInput.value = userInfoData.job;
  
      formValidatorProfile.resetValidation();
  
      popup.open();
    });