import "./index.css";
import Popup from "../components/Popup.js";
import { initialCards, formConfig } from "../utils/constants.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { UserInfo } from '../components/UserInfo';
import Api from "../components/Api.js";
import { data } from "autoprefixer";

// 1. html элементы имя и работа для отображения профиля
const userInfo = new UserInfo({ nameSelector: '.profile__name', jobSelector: '.profile__job' });

  //создание класса API
  const api = new Api ({
    url:'https://mesto.nomoreparties.co/v1/cohort-30',
    headers: {
      authorization:'64eb4089-5e3d-41d0-acb9-e798b4c540eb'
    }
  })

      let currentUserId = null;


  api.getUserInfo()
    .then(dataUser => {
      currentUserId = dataUser._id;
      userInfo.setUserInfo(dataUser.name, dataUser.about);
      userInfo.setId(dataUser._id);
    })
    .catch(err => console.log(err))

    api
    .getCards()
    .then((data) =>
      data.reverse().forEach(function (placeData) {
        addCard(renderPlaceCard(placeData));
      })
    )
    .catch((err) => console.log(err));


  // рендер начального набора карточек
  const cardsContainer = document.querySelector(".elements");


  const placePopup = new PopupWithForm(".popup_place", submitHandler);
  placePopup.setEventListeners();

  const popupImage = new PopupWithImage(".popup-image");
  popupImage.setEventListeners();

  const form = document.forms.place;

  const formValidator = new FormValidator(formConfig, form);
  formValidator.enableValidation();

  // рендер элемента карточки
  function renderPlaceCard(placeData) {
    const card = new Card({data:{...placeData, currentUserId: currentUserId}}, "#template-place-card", openPopupImage, likeActive);
    return card.render();
  } 
//добавление и удаление лайуов
  function likeActive (card) {
    const userId = userInfo.getUserInfo().id;
    const userLiked = card.getLikes().some(user => user._id === userId);

    if (userLiked) {
      api.likeDelete(card.getId()).then((cardData) => {
        card.setLikes(cardData.likes);
           
      });
    } else {
      api.likeActive(card.getId()).then((cardData) => {
        card.setLikes(cardData.likes);
        
      });
    }
  }

  // добавление карточки
  function addCard(cardElement) {
    cardsContainer.prepend(cardElement);
  }

  // обработчик отправки формы карточки
  function submitHandler(formData) {
    api.renderNewCard(formData.name, formData.link)
      .then((cardData) => addCard(renderPlaceCard(cardData)))
      .catch(err => console.log(err))
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



  //попап аватарки

  const popupAvatar = new PopupWithForm (".popup_avatar-edit", submitHandlerAvatar)
  popupAvatar.setEventListeners();

  const avatarEditProfile = document.querySelector(".profile__avatar-edit");
  avatarEditProfile.addEventListener("click", () => {
    popupAvatar.open();
  });
  const formAvataredit = document.forms.avatarEdit;
  const formValidatorAvatar = new FormValidator(formConfig, formAvataredit);
    formValidatorAvatar.enableValidation();

  function submitHandlerAvatar(dataAvatar)  {
    api.avatarEdit(dataAvatar.avatar)
      .then
  }


  



    // 2.а. попап для редактирования проифля
    const popup = new PopupWithForm(".popup_profile", submitHandlerProfile);
    popup.setEventListeners();
  
    // 2.б. включение валадации формы
    const formProfile = document.forms.profile;
    const formValidatorProfile = new FormValidator(formConfig, formProfile);
    formValidatorProfile.enableValidation();

    // 2.в. обновление отображения профиля
    function submitHandlerProfile(formData) {
      api.setUserInfo(formData.name, formData.job)
        .then((userData) => userInfo.setUserInfo(userData.name, userData.about))
        .catch(err => console.log(err));
    }
  
    // 3. открытие попапа с данными о профиле
    const editProfile = document.querySelector(".profile__edit-button");
    const nameInput = formProfile.querySelector(".popup__form-input_type_name");
    const jobInput = formProfile.querySelector(".popup__form-input_type_job");
  
    editProfile.addEventListener("click", () => {
      const userInfoData = userInfo.getUserInfo();
      nameInput.value = userInfoData.name;
      jobInput.value = userInfoData.about;
  
      formValidatorProfile.resetValidation();
  
      popup.open();
    });
