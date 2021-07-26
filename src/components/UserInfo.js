export default class UserInfo {
  constructor({ userNameSelector, userAboutSelector }) {
    this._userNameSelector = userNameSelector;
    this._userAboutSelector = userAboutSelector;
  }

  setUserInfo(data) {
    this._userNameSelector.textContent = data.name;
    this._userAboutSelector.textContent = data.about;
  }
}
