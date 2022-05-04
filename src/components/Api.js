function response(res){
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res}`);
}

export default class Api {
    constructor({url, headers}) {

        this._url = url;
        this._headers = headers;
    }
    //делаем запрос на сервер для получения карточек
    getCards(){
        return fetch(`${this._url}/cards`, {
                headers: this._headers,
            })
            .then(response)
    }
    //делаем запрос для получения данных пользователя
    getUserInfo(){
        return fetch(`${this._url}/users/me`, {
                headers: this._headers,
            })

            .then(response)
    }


    setUserInfo(name, about) {
      return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: {
            ...this._headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            about: about
        })
      })
      .then(response)
    }

    avatarEdit(avatar) {
      return fetch(`${this._url}/users/me/avatar`, {
        method: 'PATCH',
        headers: {
          ...this._headers,
          'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          avatar
        })
      })
      .then(response)
    }






    renderNewCard(name, link) {
      return fetch(`${this._url}/cards`, {
        method: 'POST',
        headers: {
          ...this._headers,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          link
        })
      })
      .then(response)
    }

    likeActive(cardId) {
      return fetch(`${this._url}/cards/${cardId}/likes`, {
        method: 'PUT',
        headers: this._headers
      })
      .then(response)
    }

    likeDelete(cardId) {
      return fetch(`${this._url}/cards/${cardId}/likes`, {
        method: 'DELETE',
        headers: this._headers
      })
      .then(response)
    }

    cardDelete(cardId) {
      return fetch(`${this._url}/cards/${cardId}`, {
        method: 'DELETE',
        headers: this._headers
      })
      .then(response)
    }

}
