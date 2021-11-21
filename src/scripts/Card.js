export class Card {
  constructor(data, selector, openPopupImage) {
    this._openPopupImage = openPopupImage;
    this._selector = selector;
    this._name = data.name;
    this._link = data.link;
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
    // 3. append to list
    this._setEventListeners(htmlElement);

    return htmlElement;
  }

  _setEventListeners(element) {
    element.querySelector('.element__like').addEventListener('click', this._likeActive);
    element.querySelector('.element__trash').addEventListener('click', this._handleDeleteCard);
    element.querySelector('.element__img').addEventListener('click', () => {
      this._openPopupImage(this._name, this._link);
    });

  }
  //удаление карточки
  _handleDeleteCard(evt) {
    const deleteElement = evt.target;
    deleteElement.closest('.element').remove();
  }

  //добавление лайка 
  _likeActive(evt) {
    const likeElement = evt.target;
    likeElement.classList.toggle('element__like_active');
  }
 


}
