import Popup from "./Popup.js";
import PopupWithForms from "./PopupWithForms.js";

export default class UserInfo {
  constructor({ userNameSelector, userDescriptionSelector }) {
    this._userNameSelector = userNameSelector;
    this._userDescriptionSelector = userDescriptionSelector;
  }

  setUserInfo() {
    const { name: name, link: about } = this._formValues;
    console.log(this._formValues);
  }
}
