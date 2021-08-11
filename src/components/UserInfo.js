export default class UserInfo {
  constructor({
    name,
    about,
    _id,
    avatar,
    userNameSelector,
    userAboutSelector,
    userAvatarSelector,
  }) {
    this._name = name;
    this._about = about;
    this._id = _id;
    this._avatar = avatar;

    this._userNameSelector = userNameSelector;
    this._userAboutSelector = userAboutSelector;
    this._userAvatarSelector = userAvatarSelector;
  }

  getUserInfo() {
    this.userData = {
      name: this._userNameSelector.textContent,
      about: this._userAboutSelector.textContent,
    };

    return this.userData;
  }

  setUserInfo(data) {
    this._userNameSelector.textContent = data.name;
    this._userAboutSelector.textContent = data.about;
    this._userAvatarSelector.src = data.avatar;
  }
}
