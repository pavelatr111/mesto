export class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
    this._avatar = document.querySelector(avatarSelector)
  }
  getUserInfo() {
    return {
      id: this._id,
      name: this._name.textContent,
      about: this._job.textContent,
      
    };
  }
  setUserInfo(name, about) {
    this._name.textContent = name;
    this._job.textContent = about;
  }

  setAvatar(avatar) {
    this._avatar.src = avatar;
  }

  setId(id) {
    this._id = id;
  }
}
