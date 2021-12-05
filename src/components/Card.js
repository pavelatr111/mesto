import Popup from "./Popup.js";



export class Card {
  /* data = {
      createdAt: "2021-12-02T19:13:56.623Z"
      likes: [] 
      link: "https://photocentra.ru/images/main57/576214_main.jpg"
      name: "Карелия зимой"
      owner: {
        about: "Ведущий специалист по продвижению \"на бровях\""
        avatar: "https://images.unsplash.com/photo-1561047029-1f65a26d0afa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        cohort: "cohort-30"
        name: "Александр Лебедев"
        _id: "a29cf682de85905c36a6f919"
      },
      _id: "61a91af4ed37330012afbb6d"
    } */
  constructor(data, selector, openPopupImage, likeActive, handleOpenPopupDel) {
    this._openPopupImage = openPopupImage;
    this._likeActive = likeActive
    this._handleOpenPopupDel = handleOpenPopupDel
    
    this._selector = selector;
    this._id = data._id;
    this._likes = data.likes;
    this._name = data.name;
    this._link = data.link;
    this._meId = data.currentUserId;
    this._ownerId = data.owner._id
  
  }
  render() {
    const htmlElement = document
      .querySelector(this._selector)
      .content
      .cloneNode(true);
    // 2. set values
    htmlElement.querySelector('.element__text').innerText = this._name;
    htmlElement.querySelector('.element__img').src = this._link;
    htmlElement.querySelector('.element__img').alt = this._name;

    this._elementTrash = htmlElement.querySelector('.element__trash');

    if(this._meId !== this._ownerId) {
      this._elementTrash.remove();
    } 

    // 3. append to list
    this._setEventListeners(htmlElement);
    this._htmlElement = htmlElement.firstElementChild;
    this.setLikes(this._likes);

    return htmlElement;
  }

  

  _setEventListeners(element) {
    this._elementLikeButton = element.querySelector('.element__like');
    this._elementLikeButton.addEventListener('click', () => {this._likeActive(this);});

    this._elementTrash.addEventListener('click', () => {this._handleOpenPopupDel(this)});

    element.querySelector('.element__img').addEventListener('click', () => {
      this._openPopupImage(this._name, this._link);
    });
  }





  _updateLikes() {
    if(!this._likes.some(data => data._id === this._meId)){
      this._elementLikeButton.classList.remove('element__like_active');
    }else {
      this._elementLikeButton.classList.add('element__like_active')
    }
  }

  getId() {
    return this._id;
  }

  getLikes() {
    return this._likes;
  }

  setLikes(likes) {
    this._likes = likes;
    this._htmlElement.querySelector(".element__like-number").innerText =
      this._likes.length;
      this._updateLikes();
  }
   

  remove() {
    this._htmlElement.remove();
  }
  //добавление лайка
  // Active(evt) {
  //   const likeElement = evt.target;
  //   likeElement.classList.toggle('element__like_active');
  // }


}
