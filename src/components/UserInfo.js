export default class UserInfo {
  constructor({ userName, userAbout, userAvatar }) {
    this._userName = userName;
    this._userAbout = userAbout;
    this._userAvatar = userAvatar;
  }

  getUserInfo() {
    this.userData = {
      name: this._userName.textContent,
      about: this._userAbout.textContent,
    };

    return this.userData;
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userAbout.textContent = data.about;
    this._userAvatar.src = data.avatar;
    this._userId = data._id;
  }

  getId() {
    return this._userId;
  }

  setAvatarImg(data) {
    this._userAvatar.src = data.avatar;
  }
}
