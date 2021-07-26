export default class UserInfo {
  constructor({ userNameSelector, userAboutSelector }) {
    this._userNameSelector = userNameSelector;
    this._userAboutSelector = userAboutSelector;
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
  }
}
