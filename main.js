/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Api = /*#__PURE__*/function () {
  function Api(options) {
    _classCallCheck(this, Api);

    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  _createClass(Api, [{
    key: "getInitialProfile",
    value: function getInitialProfile() {
      return fetch("".concat(this.baseUrl, "/users/me"), {
        headers: this.headers
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject("Error");
      });
    } //   editProfileApi({ username, userdescription }) {
    //     return fetch(
    //       (`${this.baseUrl}/users/me`,
    //       {
    //         method: "PATCH",
    //         headers: this.headers,
    //         body: JSON.stringify({ username, userdescription }),
    //       }).then((res) => {
    //         if (res.ok) {
    //           return res.json();
    //         }
    //         return Promise.reject("Error");
    //       })
    //     );
    //   }

  }, {
    key: "getInitialCards",
    value: function getInitialCards() {
      return fetch("".concat(this.baseUrl, "/cards"), {
        headers: this.headers
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject("Error");
      });
    } //   fetchCard(data) {
    //     return fetch(`${this.baseUrl}/cards`, {
    //       method: "POST",
    //       headers: this.headers,
    //       body: JSON.stringify(data),
    //     }).then((res) => {
    //       if (res.ok) {
    //         return res.json();
    //       }
    //       return Promise.reject("Error");
    //     });
    //   }

  }]);

  return Api;
}();



/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card = /*#__PURE__*/function () {
  function Card(_ref, cardSelector) {
    var card = _ref.card,
        handlePreviewImg = _ref.handlePreviewImg;

    _classCallCheck(this, Card);

    this._name = card.name;
    this._link = card.link;
    this._handlePreviewImg = handlePreviewImg;
    this._cardTemplate = cardSelector;
  }

  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var template = document.querySelector(this._cardTemplate).content.querySelector(".card").cloneNode(true);
      this._element = template;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      this._element.querySelector(".card__img").addEventListener("click", function () {
        return _this._handlePreviewImg();
      });

      this._element.querySelector(".card__delete-button").addEventListener("click", function () {
        return _this._handleDeleteIcon();
      });

      this._likeButton = this._element.querySelector(".card__like-button");

      this._likeButton.addEventListener("click", function () {
        return _this._handleLikeIcon();
      });
    }
  }, {
    key: "_handleLikeIcon",
    value: function _handleLikeIcon() {
      this._likeButton.classList.toggle("card__like-button_active");
    }
  }, {
    key: "_handleDeleteIcon",
    value: function _handleDeleteIcon() {
      this._element.remove();

      this._card = null;
    }
  }, {
    key: "getView",
    value: function getView() {
      this._getTemplate();

      this._setEventListeners();

      var cardImg = this._element.querySelector(".card__img");

      this._element.querySelector(".card__text").textContent = this._name;
      cardImg.src = this._link;
      cardImg.alt = this._name;
      return this._element;
    }
  }]);

  return Card;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(settings, formElement) {
    var _this = this;

    _classCallCheck(this, FormValidator);

    _defineProperty(this, "_showInputError", function (formEl, input) {
      var errorSpan = formEl.querySelector("#".concat(input.id, "-error")); // add error message/class

      errorSpan.textContent = input.validationMessage;
      errorSpan.classList.add(_this._errorClass);
      input.classList.add(_this._inputErrorClass);
    });

    _defineProperty(this, "_hideInputError", function (formEl, input) {
      var errorSpan = formEl.querySelector("#".concat(input.id, "-error")); // add error message/class

      errorSpan.textContent = "";
      errorSpan.classList.remove(_this._errorClass);
      input.classList.remove(_this._inputErrorClass);
    });

    _defineProperty(this, "_checkInputValidity", function (formEl, input) {
      if (input.validity.valid) {
        _this._hideInputError(formEl, input);
      } else {
        _this._showInputError(formEl, input);
      }
    });

    _defineProperty(this, "_isValid", function (inputs) {
      return inputs.every(function (input) {
        return input.validity.valid;
      });
    });

    _defineProperty(this, "_toggleButton", function (formEl, inputs) {
      var buttonEl = formEl.querySelector(_this._submitButtonSelector);

      if (_this._isValid(inputs)) {
        buttonEl.disabled = false;
        buttonEl.classList.remove(_this._inactiveButtonClass);
      } else {
        buttonEl.disabled = true;
        buttonEl.classList.add(_this._inactiveButtonClass);
      }
    });

    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formEl = formElement;
  }

  _createClass(FormValidator, [{
    key: "_setEventListeners",
    value: function _setEventListeners(formEl) {
      var _this2 = this;

      var inputs = Array.from(formEl.querySelectorAll(this._inputSelector));

      this._toggleButton(formEl, inputs);

      inputs.forEach(function (input) {
        input.addEventListener("input", function () {
          // check validity
          _this2._checkInputValidity(formEl, input); //toggle button


          _this2._toggleButton(formEl, inputs);
        });
      });
    }
  }, {
    key: "resetValidation",
    value: function resetValidation() {
      var _this3 = this;

      var inputs = Array.from(this._formEl.querySelectorAll(this._inputSelector));

      this._toggleButton(this._formEl, inputs);

      inputs.forEach(function (input) {
        _this3._hideInputError(_this3._formEl, input);
      });
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._formEl.addEventListener("submit", function (event) {
        return event.preventDefault();
      });

      this._setEventListeners(this._formEl);
    }
  }]);

  return FormValidator;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormValidator);

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Popup = /*#__PURE__*/function () {
  function Popup(modalSelector) {
    _classCallCheck(this, Popup);

    this._modalElement = document.querySelector(".".concat(modalSelector));
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _createClass(Popup, [{
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;

      this._modalElement.addEventListener("click", function (e) {
        if (e.target.classList.contains("modal") || e.target.classList.contains("modal__close-button")) {
          _this.close();
        }
      });
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(e) {
      if (e.key == "Escape") {
        this.close();
      }
    }
  }, {
    key: "open",
    value: function open() {
      this._modalElement.classList.add("modal_open");

      document.addEventListener("keydown", this._handleEscClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._modalElement.classList.remove("modal_open");

      document.removeEventListener("keydown", this._handleEscClose);
    }
  }]);

  return Popup;
}();



/***/ }),

/***/ "./src/components/PopupWithForms.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithForms.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithForms)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithForms = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForms, _Popup);

  var _super = _createSuper(PopupWithForms);

  function PopupWithForms(_ref) {
    var _this;

    var modalSelector = _ref.modalSelector,
        handleFormSubmit = _ref.handleFormSubmit;

    _classCallCheck(this, PopupWithForms);

    _this = _super.call(this, modalSelector);
    _this._modalForm = _this._modalElement.querySelector(".modal__form");
    _this._handleFormSubmit = handleFormSubmit;
    return _this;
  }

  _createClass(PopupWithForms, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;

      this._inputs = Array.from(this._modalForm.querySelectorAll(".modal__form-item"));
      this._formValues = {};

      this._inputs.forEach(function (input) {
        _this2._formValues[input.name] = input.value;
      });

      return this._formValues;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;

      this._modalForm.addEventListener("submit", function (e) {
        e.preventDefault();

        _this3._handleFormSubmit(_this3._getInputValues());

        _this3.close();
      });

      _get(_getPrototypeOf(PopupWithForms.prototype), "setEventListeners", this).call(this);
    }
  }, {
    key: "close",
    value: function close() {
      this._modalForm.reset();

      _get(_getPrototypeOf(PopupWithForms.prototype), "close", this).call(this);
    }
  }]);

  return PopupWithForms;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage() {
    _classCallCheck(this, PopupWithImage);

    return _super.apply(this, arguments);
  }

  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(_ref) {
      var link = _ref.link,
          name = _ref.name;
      this._modalElement.querySelector(".modal__preview-caption").textContent = name;

      var image = this._modalElement.querySelector(".modal__preview-image");

      image.src = link;
      image.alt = name;

      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);

  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._renderer = renderer;
    this._container = document.querySelector(".".concat(containerSelector));
  }

  _createClass(Section, [{
    key: "addItem",
    value: function addItem(element) {
      this._container.prepend(element);
    }
  }, {
    key: "renderItems",
    value: function renderItems(items) {
      var _this = this;

      items.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }]);

  return Section;
}();



/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfo)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var name = _ref.name,
        about = _ref.about,
        _id = _ref._id,
        avatar = _ref.avatar,
        userNameSelector = _ref.userNameSelector,
        userAboutSelector = _ref.userAboutSelector,
        userAvatarSelector = _ref.userAvatarSelector;

    _classCallCheck(this, UserInfo);

    this._name = name;
    this._about = about;
    this._id = _id;
    this._avatar = avatar;
    this._userNameSelector = userNameSelector;
    this._userAboutSelector = userAboutSelector;
    this._userAvatarSelector = userAvatarSelector;
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      this.userData = {
        name: this._userNameSelector.textContent,
        about: this._userAboutSelector.textContent
      };
      return this.userData;
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(data) {
      this._userNameSelector.textContent = data.name;
      this._userAboutSelector.textContent = data.about;
    }
  }]);

  return UserInfo;
}();



/***/ }),

/***/ "./src/utils/InitialCards.js":
/*!***********************************!*\
  !*** ./src/utils/InitialCards.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_Yosemite_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/Yosemite.jpeg */ "./src/images/Yosemite.jpeg");
/* harmony import */ var _images_Lake_Louise_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/Lake_Louise.jpeg */ "./src/images/Lake_Louise.jpeg");
/* harmony import */ var _images_Bald_Mountains_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Bald_Mountains.jpeg */ "./src/images/Bald_Mountains.jpeg");
/* harmony import */ var _images_Latemar_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/Latemar.jpeg */ "./src/images/Latemar.jpeg");
/* harmony import */ var _images_Vanoise_National_Park_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/Vanoise_National_Park.jpeg */ "./src/images/Vanoise_National_Park.jpeg");
/* harmony import */ var _images_Lago_di_Braies_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/Lago_di_Braies.jpeg */ "./src/images/Lago_di_Braies.jpeg");






var initialCards = [{
  name: "Yosemite Valley",
  link: _images_Yosemite_jpeg__WEBPACK_IMPORTED_MODULE_0__
}, {
  name: "Lake Louise",
  link: _images_Lake_Louise_jpeg__WEBPACK_IMPORTED_MODULE_1__
}, {
  name: "Bald Mountains",
  link: _images_Bald_Mountains_jpeg__WEBPACK_IMPORTED_MODULE_2__
}, {
  name: "Latemar",
  link: _images_Latemar_jpeg__WEBPACK_IMPORTED_MODULE_3__
}, {
  name: "Vanoise National Park",
  link: _images_Vanoise_National_Park_jpeg__WEBPACK_IMPORTED_MODULE_4__
}, {
  name: "Lago di Braies",
  link: _images_Lago_di_Braies_jpeg__WEBPACK_IMPORTED_MODULE_5__
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialCards);

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validationSettings": () => (/* binding */ validationSettings),
/* harmony export */   "cardConstants": () => (/* binding */ cardConstants),
/* harmony export */   "previewConstants": () => (/* binding */ previewConstants),
/* harmony export */   "editConstants": () => (/* binding */ editConstants),
/* harmony export */   "addConstants": () => (/* binding */ addConstants)
/* harmony export */ });
//VALIDATION SETTINGS
var validationSettings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-item",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__form-item_type_error",
  errorClass: "modal__error_visible"
};
var cardConstants = {
  cardSelector: "#card-template",
  placeSelector: "elements"
};
var previewConstants = {
  previewModalSelector: "modal_type_preview"
};
var editConstants = {
  editProfileEl: document.querySelector(".modal__form_type_edit"),
  profileEditButtonEl: document.querySelector(".profile__edit-button"),
  profileNameEl: document.querySelector(".profile__name"),
  profileAboutEl: document.querySelector(".profile__about"),
  editProfileNameInput: document.querySelector(".modal__form-item_type_name"),
  editProfileAboutInput: document.querySelector(".modal__form-item_type_about"),
  editModalSelector: "modal_type_edit"
};
var addConstants = {
  addCardsEl: document.querySelector(".modal__form_type_add"),
  addCardButtonEl: document.querySelector(".profile__add-button"),
  addModalSelector: "modal_type_add"
};

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/Bald_Mountains.jpeg":
/*!****************************************!*\
  !*** ./src/images/Bald_Mountains.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c0900f9b8dc97bdab131.jpeg";

/***/ }),

/***/ "./src/images/Lago_di_Braies.jpeg":
/*!****************************************!*\
  !*** ./src/images/Lago_di_Braies.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1a9f89e5145ef82317d4.jpeg";

/***/ }),

/***/ "./src/images/Lake_Louise.jpeg":
/*!*************************************!*\
  !*** ./src/images/Lake_Louise.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0d424981e693cc180c72.jpeg";

/***/ }),

/***/ "./src/images/Latemar.jpeg":
/*!*********************************!*\
  !*** ./src/images/Latemar.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e6d4c2bea3388d24c14.jpeg";

/***/ }),

/***/ "./src/images/Vanoise_National_Park.jpeg":
/*!***********************************************!*\
  !*** ./src/images/Vanoise_National_Park.jpeg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1941313c8d45a31edaaf.jpeg";

/***/ }),

/***/ "./src/images/Yosemite.jpeg":
/*!**********************************!*\
  !*** ./src/images/Yosemite.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2aa58bbefea93d2eaacf.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _utils_InitialCards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/InitialCards.js */ "./src/utils/InitialCards.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithForms_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PopupWithForms.js */ "./src/components/PopupWithForms.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");









var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_8__.default({
  baseUrl: "https://around.nomoreparties.co/v1/group-13",
  headers: {
    authorization: "0f98077f-1b08-4829-ae57-6f81ab47380c",
    "Content-Type": "application/json"
  }
}); // api.getInitialProfile();

api.getInitialCards().then(function (res) {
  var cardList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_4__.default({
    renderer: function renderer(card) {
      var newCard = createCard(card);
      var cardElement = newCard.getView();
      cardList.addItem(cardElement);
    }
  }, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.cardConstants.placeSelector);
  cardList.renderItems(res);
}); // api.fetchCard



var createCard = function createCard(card) {
  var cardInstance = new _components_Card_js__WEBPACK_IMPORTED_MODULE_3__.default({
    card: card,
    handlePreviewImg: function handlePreviewImg() {
      imageModal.open(card);
    }
  }, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.cardConstants.cardSelector);
  return cardInstance;
};

var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__.default({
  userNameSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.editConstants.profileNameEl,
  userAboutSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.editConstants.profileAboutEl
});
var addImagePopup = new _components_PopupWithForms_js__WEBPACK_IMPORTED_MODULE_6__.default({
  modalSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.addConstants.addModalSelector,
  handleFormSubmit: function handleFormSubmit(card) {
    var newCard = createCard(card);
    cardList.addItem(newCard.getView());
  }
});
var userInfoPopup = new _components_PopupWithForms_js__WEBPACK_IMPORTED_MODULE_6__.default({
  modalSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.editConstants.editModalSelector,
  handleFormSubmit: function handleFormSubmit() {
    api.getInitialProfile().then(function (res) {
      userInfo.setUserInfo(res);
    });
  }
}); // const userInfoPopup = new PopupWithForms({
//   modalSelector: editConstants.editModalSelector,
//   handleFormSubmit: (data) => {
//     api
//       .getInitialProfile({ username: data.name, userdescription: data.about })
//       .then((data) => {
//         userInfo.setUserInfo(data);
//       });
//   },
// });

var imageModal = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.previewConstants.previewModalSelector);
var editFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.validationSettings, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.editConstants.editProfileEl);
var addFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.validationSettings, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.addConstants.addCardsEl);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
addImagePopup.setEventListeners();
imageModal.setEventListeners();
userInfoPopup.setEventListeners(); /////POPUP BUTTONS/////

_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.addConstants.addCardButtonEl.addEventListener("click", function () {
  addFormValidator.resetValidation();
  addImagePopup.open();
});
_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.editConstants.profileEditButtonEl.addEventListener("click", function () {
  var profileData = userInfo.getUserInfo();
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.editConstants.editProfileNameInput.value = profileData.name;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.editConstants.editProfileAboutInput.value = profileData.about;
  editFormValidator.resetValidation();
  userInfoPopup.open();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFxQkEsRztBQUNuQixlQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUtDLE9BQUwsR0FBZUQsT0FBTyxDQUFDQyxPQUF2QjtBQUNBLFNBQUtDLE9BQUwsR0FBZUYsT0FBTyxDQUFDRSxPQUF2QjtBQUNEOzs7O1dBRUQsNkJBQW9CO0FBQ2xCLGFBQU9DLEtBQUssV0FBSSxLQUFLRixPQUFULGdCQUE2QjtBQUN2Q0MsUUFBQUEsT0FBTyxFQUFFLEtBQUtBO0FBRHlCLE9BQTdCLENBQUwsQ0FFSkUsSUFGSSxDQUVDLFVBQUNDLEdBQUQsRUFBUztBQUNmLFlBQUlBLEdBQUcsQ0FBQ0MsRUFBUixFQUFZO0FBQ1YsaUJBQU9ELEdBQUcsQ0FBQ0UsSUFBSixFQUFQO0FBQ0Q7O0FBQ0QsZUFBT0MsT0FBTyxDQUFDQyxNQUFSLENBQWUsT0FBZixDQUFQO0FBQ0QsT0FQTSxDQUFQO0FBUUQsSyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUVBLDJCQUFrQjtBQUNoQixhQUFPTixLQUFLLFdBQUksS0FBS0YsT0FBVCxhQUEwQjtBQUNwQ0MsUUFBQUEsT0FBTyxFQUFFLEtBQUtBO0FBRHNCLE9BQTFCLENBQUwsQ0FFSkUsSUFGSSxDQUVDLFVBQUNDLEdBQUQsRUFBUztBQUNmLFlBQUlBLEdBQUcsQ0FBQ0MsRUFBUixFQUFZO0FBQ1YsaUJBQU9ELEdBQUcsQ0FBQ0UsSUFBSixFQUFQO0FBQ0Q7O0FBQ0QsZUFBT0MsT0FBTyxDQUFDQyxNQUFSLENBQWUsT0FBZixDQUFQO0FBQ0QsT0FQTSxDQUFQO0FBUUQsSyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDdkRJQyxJO0FBQ0osc0JBQXdDQyxZQUF4QyxFQUFzRDtBQUFBLFFBQXhDQyxJQUF3QyxRQUF4Q0EsSUFBd0M7QUFBQSxRQUFsQ0MsZ0JBQWtDLFFBQWxDQSxnQkFBa0M7O0FBQUE7O0FBQ3BELFNBQUtDLEtBQUwsR0FBYUYsSUFBSSxDQUFDRyxJQUFsQjtBQUNBLFNBQUtDLEtBQUwsR0FBYUosSUFBSSxDQUFDSyxJQUFsQjtBQUNBLFNBQUtDLGlCQUFMLEdBQXlCTCxnQkFBekI7QUFFQSxTQUFLTSxhQUFMLEdBQXFCUixZQUFyQjtBQUNEOzs7O1dBRUQsd0JBQWU7QUFDYixVQUFNUyxRQUFRLEdBQUdDLFFBQVEsQ0FDdEJDLGFBRGMsQ0FDQSxLQUFLSCxhQURMLEVBRWRJLE9BRmMsQ0FFTkQsYUFGTSxDQUVRLE9BRlIsRUFHZEUsU0FIYyxDQUdKLElBSEksQ0FBakI7QUFLQSxXQUFLQyxRQUFMLEdBQWdCTCxRQUFoQjtBQUNEOzs7V0FFRCw4QkFBcUI7QUFBQTs7QUFDbkIsV0FBS0ssUUFBTCxDQUNHSCxhQURILENBQ2lCLFlBRGpCLEVBRUdJLGdCQUZILENBRW9CLE9BRnBCLEVBRTZCO0FBQUEsZUFBTSxLQUFJLENBQUNSLGlCQUFMLEVBQU47QUFBQSxPQUY3Qjs7QUFJQSxXQUFLTyxRQUFMLENBQ0dILGFBREgsQ0FDaUIsc0JBRGpCLEVBRUdJLGdCQUZILENBRW9CLE9BRnBCLEVBRTZCO0FBQUEsZUFBTSxLQUFJLENBQUNDLGlCQUFMLEVBQU47QUFBQSxPQUY3Qjs7QUFJQSxXQUFLQyxXQUFMLEdBQW1CLEtBQUtILFFBQUwsQ0FBY0gsYUFBZCxDQUE0QixvQkFBNUIsQ0FBbkI7O0FBQ0EsV0FBS00sV0FBTCxDQUFpQkYsZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDO0FBQUEsZUFBTSxLQUFJLENBQUNHLGVBQUwsRUFBTjtBQUFBLE9BQTNDO0FBQ0Q7OztXQUVELDJCQUFrQjtBQUNoQixXQUFLRCxXQUFMLENBQWlCRSxTQUFqQixDQUEyQkMsTUFBM0IsQ0FBa0MsMEJBQWxDO0FBQ0Q7OztXQUVELDZCQUFvQjtBQUNsQixXQUFLTixRQUFMLENBQWNPLE1BQWQ7O0FBQ0EsV0FBS0MsS0FBTCxHQUFhLElBQWI7QUFDRDs7O1dBRUQsbUJBQVU7QUFDUixXQUFLQyxZQUFMOztBQUNBLFdBQUtDLGtCQUFMOztBQUVBLFVBQU1DLE9BQU8sR0FBRyxLQUFLWCxRQUFMLENBQWNILGFBQWQsQ0FBNEIsWUFBNUIsQ0FBaEI7O0FBRUEsV0FBS0csUUFBTCxDQUFjSCxhQUFkLENBQTRCLGFBQTVCLEVBQTJDZSxXQUEzQyxHQUF5RCxLQUFLdkIsS0FBOUQ7QUFDQXNCLE1BQUFBLE9BQU8sQ0FBQ0UsR0FBUixHQUFjLEtBQUt0QixLQUFuQjtBQUNBb0IsTUFBQUEsT0FBTyxDQUFDRyxHQUFSLEdBQWMsS0FBS3pCLEtBQW5CO0FBRUEsYUFBTyxLQUFLVyxRQUFaO0FBQ0Q7Ozs7OztBQUdILGlFQUFlZixJQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN0RE04QixhO0FBQ0oseUJBQVlDLFFBQVosRUFBc0JDLFdBQXRCLEVBQW1DO0FBQUE7O0FBQUE7O0FBQUEsNkNBVWpCLFVBQUNDLE1BQUQsRUFBU0MsS0FBVCxFQUFtQjtBQUNuQyxVQUFNQyxTQUFTLEdBQUdGLE1BQU0sQ0FBQ3JCLGFBQVAsWUFBeUJzQixLQUFLLENBQUNFLEVBQS9CLFlBQWxCLENBRG1DLENBRW5DOztBQUNBRCxNQUFBQSxTQUFTLENBQUNSLFdBQVYsR0FBd0JPLEtBQUssQ0FBQ0csaUJBQTlCO0FBQ0FGLE1BQUFBLFNBQVMsQ0FBQ2YsU0FBVixDQUFvQmtCLEdBQXBCLENBQXdCLEtBQUksQ0FBQ0MsV0FBN0I7QUFDQUwsTUFBQUEsS0FBSyxDQUFDZCxTQUFOLENBQWdCa0IsR0FBaEIsQ0FBb0IsS0FBSSxDQUFDRSxnQkFBekI7QUFDRCxLQWhCa0M7O0FBQUEsNkNBa0JqQixVQUFDUCxNQUFELEVBQVNDLEtBQVQsRUFBbUI7QUFDbkMsVUFBTUMsU0FBUyxHQUFHRixNQUFNLENBQUNyQixhQUFQLFlBQXlCc0IsS0FBSyxDQUFDRSxFQUEvQixZQUFsQixDQURtQyxDQUVuQzs7QUFDQUQsTUFBQUEsU0FBUyxDQUFDUixXQUFWLEdBQXdCLEVBQXhCO0FBQ0FRLE1BQUFBLFNBQVMsQ0FBQ2YsU0FBVixDQUFvQkUsTUFBcEIsQ0FBMkIsS0FBSSxDQUFDaUIsV0FBaEM7QUFDQUwsTUFBQUEsS0FBSyxDQUFDZCxTQUFOLENBQWdCRSxNQUFoQixDQUF1QixLQUFJLENBQUNrQixnQkFBNUI7QUFDRCxLQXhCa0M7O0FBQUEsaURBMEJiLFVBQUNQLE1BQUQsRUFBU0MsS0FBVCxFQUFtQjtBQUN2QyxVQUFJQSxLQUFLLENBQUNPLFFBQU4sQ0FBZUMsS0FBbkIsRUFBMEI7QUFDeEIsYUFBSSxDQUFDQyxlQUFMLENBQXFCVixNQUFyQixFQUE2QkMsS0FBN0I7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFJLENBQUNVLGVBQUwsQ0FBcUJYLE1BQXJCLEVBQTZCQyxLQUE3QjtBQUNEO0FBQ0YsS0FoQ2tDOztBQUFBLHNDQWtDeEIsVUFBQ1csTUFBRCxFQUFZO0FBQ3JCLGFBQU9BLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhLFVBQUNaLEtBQUQ7QUFBQSxlQUFXQSxLQUFLLENBQUNPLFFBQU4sQ0FBZUMsS0FBMUI7QUFBQSxPQUFiLENBQVA7QUFDRCxLQXBDa0M7O0FBQUEsMkNBc0NuQixVQUFDVCxNQUFELEVBQVNZLE1BQVQsRUFBb0I7QUFDbEMsVUFBTUUsUUFBUSxHQUFHZCxNQUFNLENBQUNyQixhQUFQLENBQXFCLEtBQUksQ0FBQ29DLHFCQUExQixDQUFqQjs7QUFDQSxVQUFJLEtBQUksQ0FBQ0MsUUFBTCxDQUFjSixNQUFkLENBQUosRUFBMkI7QUFDekJFLFFBQUFBLFFBQVEsQ0FBQ0csUUFBVCxHQUFvQixLQUFwQjtBQUNBSCxRQUFBQSxRQUFRLENBQUMzQixTQUFULENBQW1CRSxNQUFuQixDQUEwQixLQUFJLENBQUM2QixvQkFBL0I7QUFDRCxPQUhELE1BR087QUFDTEosUUFBQUEsUUFBUSxDQUFDRyxRQUFULEdBQW9CLElBQXBCO0FBQ0FILFFBQUFBLFFBQVEsQ0FBQzNCLFNBQVQsQ0FBbUJrQixHQUFuQixDQUF1QixLQUFJLENBQUNhLG9CQUE1QjtBQUNEO0FBQ0YsS0EvQ2tDOztBQUNqQyxTQUFLQyxjQUFMLEdBQXNCckIsUUFBUSxDQUFDc0IsYUFBL0I7QUFDQSxTQUFLTCxxQkFBTCxHQUE2QmpCLFFBQVEsQ0FBQ3VCLG9CQUF0QztBQUNBLFNBQUtILG9CQUFMLEdBQTRCcEIsUUFBUSxDQUFDd0IsbUJBQXJDO0FBQ0EsU0FBS2YsZ0JBQUwsR0FBd0JULFFBQVEsQ0FBQ3lCLGVBQWpDO0FBQ0EsU0FBS2pCLFdBQUwsR0FBbUJSLFFBQVEsQ0FBQzBCLFVBQTVCO0FBRUEsU0FBS0MsT0FBTCxHQUFlMUIsV0FBZjtBQUNEOzs7O1dBeUNELDRCQUFtQkMsTUFBbkIsRUFBMkI7QUFBQTs7QUFDekIsVUFBTVksTUFBTSxHQUFHYyxLQUFLLENBQUNDLElBQU4sQ0FBVzNCLE1BQU0sQ0FBQzRCLGdCQUFQLENBQXdCLEtBQUtULGNBQTdCLENBQVgsQ0FBZjs7QUFDQSxXQUFLVSxhQUFMLENBQW1CN0IsTUFBbkIsRUFBMkJZLE1BQTNCOztBQUNBQSxNQUFBQSxNQUFNLENBQUNrQixPQUFQLENBQWUsVUFBQzdCLEtBQUQsRUFBVztBQUN4QkEsUUFBQUEsS0FBSyxDQUFDbEIsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsWUFBTTtBQUNwQztBQUNBLGdCQUFJLENBQUNnRCxtQkFBTCxDQUF5Qi9CLE1BQXpCLEVBQWlDQyxLQUFqQyxFQUZvQyxDQUdwQzs7O0FBQ0EsZ0JBQUksQ0FBQzRCLGFBQUwsQ0FBbUI3QixNQUFuQixFQUEyQlksTUFBM0I7QUFDRCxTQUxEO0FBTUQsT0FQRDtBQVFEOzs7V0FFRCwyQkFBa0I7QUFBQTs7QUFDaEIsVUFBTUEsTUFBTSxHQUFHYyxLQUFLLENBQUNDLElBQU4sQ0FDYixLQUFLRixPQUFMLENBQWFHLGdCQUFiLENBQThCLEtBQUtULGNBQW5DLENBRGEsQ0FBZjs7QUFJQSxXQUFLVSxhQUFMLENBQW1CLEtBQUtKLE9BQXhCLEVBQWlDYixNQUFqQzs7QUFFQUEsTUFBQUEsTUFBTSxDQUFDa0IsT0FBUCxDQUFlLFVBQUM3QixLQUFELEVBQVc7QUFDeEIsY0FBSSxDQUFDUyxlQUFMLENBQXFCLE1BQUksQ0FBQ2UsT0FBMUIsRUFBbUN4QixLQUFuQztBQUNELE9BRkQ7QUFHRDs7O1dBRUQsNEJBQW1CO0FBQ2pCLFdBQUt3QixPQUFMLENBQWExQyxnQkFBYixDQUE4QixRQUE5QixFQUF3QyxVQUFDaUQsS0FBRDtBQUFBLGVBQVdBLEtBQUssQ0FBQ0MsY0FBTixFQUFYO0FBQUEsT0FBeEM7O0FBQ0EsV0FBS3pDLGtCQUFMLENBQXdCLEtBQUtpQyxPQUE3QjtBQUNEOzs7Ozs7QUFHSCxpRUFBZTVCLGFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNqRnFCcUMsSztBQUNuQixpQkFBWUMsYUFBWixFQUEyQjtBQUFBOztBQUN6QixTQUFLQyxhQUFMLEdBQXFCMUQsUUFBUSxDQUFDQyxhQUFULFlBQTJCd0QsYUFBM0IsRUFBckI7QUFDQSxTQUFLRSxlQUFMLEdBQXVCLEtBQUtBLGVBQUwsQ0FBcUJDLElBQXJCLENBQTBCLElBQTFCLENBQXZCO0FBQ0Q7Ozs7V0FFRCw2QkFBb0I7QUFBQTs7QUFDbEIsV0FBS0YsYUFBTCxDQUFtQnJELGdCQUFuQixDQUFvQyxPQUFwQyxFQUE2QyxVQUFDd0QsQ0FBRCxFQUFPO0FBQ2xELFlBQ0VBLENBQUMsQ0FBQ0MsTUFBRixDQUFTckQsU0FBVCxDQUFtQnNELFFBQW5CLENBQTRCLE9BQTVCLEtBQ0FGLENBQUMsQ0FBQ0MsTUFBRixDQUFTckQsU0FBVCxDQUFtQnNELFFBQW5CLENBQTRCLHFCQUE1QixDQUZGLEVBR0U7QUFDQSxlQUFJLENBQUNDLEtBQUw7QUFDRDtBQUNGLE9BUEQ7QUFRRDs7O1dBRUQseUJBQWdCSCxDQUFoQixFQUFtQjtBQUNqQixVQUFJQSxDQUFDLENBQUNJLEdBQUYsSUFBUyxRQUFiLEVBQXVCO0FBQ3JCLGFBQUtELEtBQUw7QUFDRDtBQUNGOzs7V0FFRCxnQkFBTztBQUNMLFdBQUtOLGFBQUwsQ0FBbUJqRCxTQUFuQixDQUE2QmtCLEdBQTdCLENBQWlDLFlBQWpDOztBQUNBM0IsTUFBQUEsUUFBUSxDQUFDSyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxLQUFLc0QsZUFBMUM7QUFDRDs7O1dBRUQsaUJBQVE7QUFDTixXQUFLRCxhQUFMLENBQW1CakQsU0FBbkIsQ0FBNkJFLE1BQTdCLENBQW9DLFlBQXBDOztBQUNBWCxNQUFBQSxRQUFRLENBQUNrRSxtQkFBVCxDQUE2QixTQUE3QixFQUF3QyxLQUFLUCxlQUE3QztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CSDs7SUFFcUJRLGM7Ozs7O0FBQ25CLGdDQUFpRDtBQUFBOztBQUFBLFFBQW5DVixhQUFtQyxRQUFuQ0EsYUFBbUM7QUFBQSxRQUFwQlcsZ0JBQW9CLFFBQXBCQSxnQkFBb0I7O0FBQUE7O0FBQy9DLDhCQUFNWCxhQUFOO0FBRUEsVUFBS1ksVUFBTCxHQUFrQixNQUFLWCxhQUFMLENBQW1CekQsYUFBbkIsQ0FBaUMsY0FBakMsQ0FBbEI7QUFDQSxVQUFLcUUsaUJBQUwsR0FBeUJGLGdCQUF6QjtBQUorQztBQUtoRDs7OztXQUVELDJCQUFrQjtBQUFBOztBQUNoQixXQUFLRyxPQUFMLEdBQWV2QixLQUFLLENBQUNDLElBQU4sQ0FDYixLQUFLb0IsVUFBTCxDQUFnQm5CLGdCQUFoQixDQUFpQyxtQkFBakMsQ0FEYSxDQUFmO0FBSUEsV0FBS3NCLFdBQUwsR0FBbUIsRUFBbkI7O0FBRUEsV0FBS0QsT0FBTCxDQUFhbkIsT0FBYixDQUFxQixVQUFDN0IsS0FBRCxFQUFXO0FBQzlCLGNBQUksQ0FBQ2lELFdBQUwsQ0FBaUJqRCxLQUFLLENBQUM3QixJQUF2QixJQUErQjZCLEtBQUssQ0FBQ2tELEtBQXJDO0FBQ0QsT0FGRDs7QUFJQSxhQUFPLEtBQUtELFdBQVo7QUFDRDs7O1dBRUQsNkJBQW9CO0FBQUE7O0FBQ2xCLFdBQUtILFVBQUwsQ0FBZ0JoRSxnQkFBaEIsQ0FBaUMsUUFBakMsRUFBMkMsVUFBQ3dELENBQUQsRUFBTztBQUNoREEsUUFBQUEsQ0FBQyxDQUFDTixjQUFGOztBQUNBLGNBQUksQ0FBQ2UsaUJBQUwsQ0FBdUIsTUFBSSxDQUFDSSxlQUFMLEVBQXZCOztBQUNBLGNBQUksQ0FBQ1YsS0FBTDtBQUNELE9BSkQ7O0FBTUE7QUFDRDs7O1dBRUQsaUJBQVE7QUFDTixXQUFLSyxVQUFMLENBQWdCTSxLQUFoQjs7QUFFQTtBQUNEOzs7O0VBcEN5Q25CLDhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjVDOztJQUVxQm9CLGM7Ozs7Ozs7Ozs7Ozs7V0FDbkIsb0JBQXFCO0FBQUEsVUFBZGhGLElBQWMsUUFBZEEsSUFBYztBQUFBLFVBQVJGLElBQVEsUUFBUkEsSUFBUTtBQUNuQixXQUFLZ0UsYUFBTCxDQUFtQnpELGFBQW5CLENBQWlDLHlCQUFqQyxFQUE0RGUsV0FBNUQsR0FDRXRCLElBREY7O0FBRUEsVUFBTW1GLEtBQUssR0FBRyxLQUFLbkIsYUFBTCxDQUFtQnpELGFBQW5CLENBQWlDLHVCQUFqQyxDQUFkOztBQUNBNEUsTUFBQUEsS0FBSyxDQUFDNUQsR0FBTixHQUFZckIsSUFBWjtBQUNBaUYsTUFBQUEsS0FBSyxDQUFDM0QsR0FBTixHQUFZeEIsSUFBWjs7QUFDQTtBQUNEOzs7O0VBUnlDOEQsOEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNGdkJzQixPO0FBQ25CLHlCQUEwQkMsaUJBQTFCLEVBQTZDO0FBQUEsUUFBL0JDLFFBQStCLFFBQS9CQSxRQUErQjs7QUFBQTs7QUFDM0MsU0FBS0MsU0FBTCxHQUFpQkQsUUFBakI7QUFDQSxTQUFLRSxVQUFMLEdBQWtCbEYsUUFBUSxDQUFDQyxhQUFULFlBQTJCOEUsaUJBQTNCLEVBQWxCO0FBQ0Q7Ozs7V0FFRCxpQkFBUUksT0FBUixFQUFpQjtBQUNmLFdBQUtELFVBQUwsQ0FBZ0JFLE9BQWhCLENBQXdCRCxPQUF4QjtBQUNEOzs7V0FFRCxxQkFBWUUsS0FBWixFQUFtQjtBQUFBOztBQUNqQkEsTUFBQUEsS0FBSyxDQUFDakMsT0FBTixDQUFjLFVBQUNrQyxJQUFELEVBQVU7QUFDdEIsYUFBSSxDQUFDTCxTQUFMLENBQWVLLElBQWY7QUFDRCxPQUZEO0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDZGtCQyxRO0FBQ25CLDBCQVFHO0FBQUEsUUFQRDdGLElBT0MsUUFQREEsSUFPQztBQUFBLFFBTkQ4RixLQU1DLFFBTkRBLEtBTUM7QUFBQSxRQUxEQyxHQUtDLFFBTERBLEdBS0M7QUFBQSxRQUpEQyxNQUlDLFFBSkRBLE1BSUM7QUFBQSxRQUhEQyxnQkFHQyxRQUhEQSxnQkFHQztBQUFBLFFBRkRDLGlCQUVDLFFBRkRBLGlCQUVDO0FBQUEsUUFEREMsa0JBQ0MsUUFEREEsa0JBQ0M7O0FBQUE7O0FBQ0QsU0FBS3BHLEtBQUwsR0FBYUMsSUFBYjtBQUNBLFNBQUtvRyxNQUFMLEdBQWNOLEtBQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLTSxPQUFMLEdBQWVMLE1BQWY7QUFFQSxTQUFLTSxpQkFBTCxHQUF5QkwsZ0JBQXpCO0FBQ0EsU0FBS00sa0JBQUwsR0FBMEJMLGlCQUExQjtBQUNBLFNBQUtNLG1CQUFMLEdBQTJCTCxrQkFBM0I7QUFDRDs7OztXQUVELHVCQUFjO0FBQ1osV0FBS00sUUFBTCxHQUFnQjtBQUNkekcsUUFBQUEsSUFBSSxFQUFFLEtBQUtzRyxpQkFBTCxDQUF1QmhGLFdBRGY7QUFFZHdFLFFBQUFBLEtBQUssRUFBRSxLQUFLUyxrQkFBTCxDQUF3QmpGO0FBRmpCLE9BQWhCO0FBS0EsYUFBTyxLQUFLbUYsUUFBWjtBQUNEOzs7V0FFRCxxQkFBWUMsSUFBWixFQUFrQjtBQUNoQixXQUFLSixpQkFBTCxDQUF1QmhGLFdBQXZCLEdBQXFDb0YsSUFBSSxDQUFDMUcsSUFBMUM7QUFDQSxXQUFLdUcsa0JBQUwsQ0FBd0JqRixXQUF4QixHQUFzQ29GLElBQUksQ0FBQ1osS0FBM0M7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTW1CLFlBQVksR0FBRyxDQUNuQjtBQUNFakgsRUFBQUEsSUFBSSxFQUFFLGlCQURSO0FBRUVFLEVBQUFBLElBQUksRUFBRXlHLGtEQUFXQTtBQUZuQixDQURtQixFQUtuQjtBQUNFM0csRUFBQUEsSUFBSSxFQUFFLGFBRFI7QUFFRUUsRUFBQUEsSUFBSSxFQUFFMEcscURBQU9BO0FBRmYsQ0FMbUIsRUFTbkI7QUFDRTVHLEVBQUFBLElBQUksRUFBRSxnQkFEUjtBQUVFRSxFQUFBQSxJQUFJLEVBQUUyRyx3REFBWUE7QUFGcEIsQ0FUbUIsRUFhbkI7QUFDRTdHLEVBQUFBLElBQUksRUFBRSxTQURSO0FBRUVFLEVBQUFBLElBQUksRUFBRTRHLGlEQUFVQTtBQUZsQixDQWJtQixFQWlCbkI7QUFDRTlHLEVBQUFBLElBQUksRUFBRSx1QkFEUjtBQUVFRSxFQUFBQSxJQUFJLEVBQUU2RywrREFBVUE7QUFGbEIsQ0FqQm1CLEVBcUJuQjtBQUNFL0csRUFBQUEsSUFBSSxFQUFFLGdCQURSO0FBRUVFLEVBQUFBLElBQUksRUFBRThHLHdEQUFPQTtBQUZmLENBckJtQixDQUFyQjtBQTJCQSxpRUFBZUMsWUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDTyxJQUFNQyxrQkFBa0IsR0FBRztBQUNoQ0MsRUFBQUEsWUFBWSxFQUFFLGNBRGtCO0FBRWhDbkUsRUFBQUEsYUFBYSxFQUFFLG1CQUZpQjtBQUdoQ0MsRUFBQUEsb0JBQW9CLEVBQUUscUJBSFU7QUFJaENDLEVBQUFBLG1CQUFtQixFQUFFLDZCQUpXO0FBS2hDQyxFQUFBQSxlQUFlLEVBQUUsNkJBTGU7QUFNaENDLEVBQUFBLFVBQVUsRUFBRTtBQU5vQixDQUEzQjtBQVNBLElBQU1nRSxhQUFhLEdBQUc7QUFDM0J4SCxFQUFBQSxZQUFZLEVBQUUsZ0JBRGE7QUFFM0J5SCxFQUFBQSxhQUFhLEVBQUU7QUFGWSxDQUF0QjtBQUtBLElBQU1DLGdCQUFnQixHQUFHO0FBQzlCQyxFQUFBQSxvQkFBb0IsRUFBRTtBQURRLENBQXpCO0FBSUEsSUFBTUMsYUFBYSxHQUFHO0FBQzNCQyxFQUFBQSxhQUFhLEVBQUVuSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsd0JBQXZCLENBRFk7QUFFM0JtSCxFQUFBQSxtQkFBbUIsRUFBRXBILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix1QkFBdkIsQ0FGTTtBQUczQm9ILEVBQUFBLGFBQWEsRUFBRXJILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FIWTtBQUkzQnFILEVBQUFBLGNBQWMsRUFBRXRILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FKVztBQUszQnNILEVBQUFBLG9CQUFvQixFQUFFdkgsUUFBUSxDQUFDQyxhQUFULENBQXVCLDZCQUF2QixDQUxLO0FBTTNCdUgsRUFBQUEscUJBQXFCLEVBQUV4SCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsOEJBQXZCLENBTkk7QUFPM0J3SCxFQUFBQSxpQkFBaUIsRUFBRTtBQVBRLENBQXRCO0FBVUEsSUFBTUMsWUFBWSxHQUFHO0FBQzFCQyxFQUFBQSxVQUFVLEVBQUUzSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsdUJBQXZCLENBRGM7QUFFMUIySCxFQUFBQSxlQUFlLEVBQUU1SCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsc0JBQXZCLENBRlM7QUFHMUI0SCxFQUFBQSxnQkFBZ0IsRUFBRTtBQUhRLENBQXJCLEM7Ozs7Ozs7Ozs7O0FDN0JQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BLDJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQyxHQUFHLEdBQUcsSUFBSXBKLHVEQUFKLENBQVE7QUFDbEJFLEVBQUFBLE9BQU8sRUFBRSw2Q0FEUztBQUVsQkMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BrSixJQUFBQSxhQUFhLEVBQUUsc0NBRFI7QUFFUCxvQkFBZ0I7QUFGVDtBQUZTLENBQVIsQ0FBWixDLENBUUE7O0FBRUFELEdBQUcsQ0FBQ0UsZUFBSixHQUFzQmpKLElBQXRCLENBQTJCLFVBQUNDLEdBQUQsRUFBUztBQUNsQyxNQUFNaUosUUFBUSxHQUFHLElBQUluRCwyREFBSixDQUNmO0FBQ0VFLElBQUFBLFFBQVEsRUFBRSxrQkFBQ3pGLElBQUQsRUFBVTtBQUNsQixVQUFNMkksT0FBTyxHQUFHQyxVQUFVLENBQUM1SSxJQUFELENBQTFCO0FBQ0EsVUFBTTZJLFdBQVcsR0FBR0YsT0FBTyxDQUFDRyxPQUFSLEVBQXBCO0FBQ0FKLE1BQUFBLFFBQVEsQ0FBQ0ssT0FBVCxDQUFpQkYsV0FBakI7QUFDRDtBQUxILEdBRGUsRUFRZnRCLDRFQVJlLENBQWpCO0FBV0FtQixFQUFBQSxRQUFRLENBQUNNLFdBQVQsQ0FBcUJ2SixHQUFyQjtBQUNELENBYkQsRSxDQWVBOztBQUVBOztBQVFBLElBQU1tSixVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDNUksSUFBRCxFQUFVO0FBQzNCLE1BQU1pSixZQUFZLEdBQUcsSUFBSW5KLHdEQUFKLENBQ25CO0FBQ0VFLElBQUFBLElBQUksRUFBSkEsSUFERjtBQUVFQyxJQUFBQSxnQkFBZ0IsRUFBRSw0QkFBTTtBQUN0QmlKLE1BQUFBLFVBQVUsQ0FBQ0MsSUFBWCxDQUFnQm5KLElBQWhCO0FBQ0Q7QUFKSCxHQURtQixFQU9uQnVILDJFQVBtQixDQUFyQjtBQVVBLFNBQU8wQixZQUFQO0FBQ0QsQ0FaRDs7QUFjQSxJQUFNRyxRQUFRLEdBQUcsSUFBSXBELDREQUFKLENBQWE7QUFDNUJJLEVBQUFBLGdCQUFnQixFQUFFdUIsNEVBRFU7QUFFNUJ0QixFQUFBQSxpQkFBaUIsRUFBRXNCLDZFQUE0Qkk7QUFGbkIsQ0FBYixDQUFqQjtBQUtBLElBQU1zQixhQUFhLEdBQUcsSUFBSXpFLGtFQUFKLENBQW1CO0FBQ3ZDVixFQUFBQSxhQUFhLEVBQUVpRSw4RUFEd0I7QUFFdkN0RCxFQUFBQSxnQkFBZ0IsRUFBRSwwQkFBQzdFLElBQUQsRUFBVTtBQUMxQixRQUFNMkksT0FBTyxHQUFHQyxVQUFVLENBQUM1SSxJQUFELENBQTFCO0FBQ0EwSSxJQUFBQSxRQUFRLENBQUNLLE9BQVQsQ0FBaUJKLE9BQU8sQ0FBQ0csT0FBUixFQUFqQjtBQUNEO0FBTHNDLENBQW5CLENBQXRCO0FBUUEsSUFBTVEsYUFBYSxHQUFHLElBQUkxRSxrRUFBSixDQUFtQjtBQUN2Q1YsRUFBQUEsYUFBYSxFQUFFeUQsZ0ZBRHdCO0FBRXZDOUMsRUFBQUEsZ0JBQWdCLEVBQUUsNEJBQU07QUFDdEIwRCxJQUFBQSxHQUFHLENBQUNnQixpQkFBSixHQUF3Qi9KLElBQXhCLENBQTZCLFVBQUNDLEdBQUQsRUFBUztBQUNwQzJKLE1BQUFBLFFBQVEsQ0FBQ0ksV0FBVCxDQUFxQi9KLEdBQXJCO0FBQ0QsS0FGRDtBQUdEO0FBTnNDLENBQW5CLENBQXRCLEMsQ0FTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNeUosVUFBVSxHQUFHLElBQUk3RCxrRUFBSixDQUFtQm9DLHNGQUFuQixDQUFuQjtBQUVBLElBQU1nQyxpQkFBaUIsR0FBRyxJQUFJN0gsaUVBQUosQ0FDeEJ5RixtRUFEd0IsRUFFeEJNLDRFQUZ3QixDQUExQjtBQUlBLElBQU0rQixnQkFBZ0IsR0FBRyxJQUFJOUgsaUVBQUosQ0FDdkJ5RixtRUFEdUIsRUFFdkJjLHdFQUZ1QixDQUF6QjtBQUtBc0IsaUJBQWlCLENBQUNFLGdCQUFsQjtBQUNBRCxnQkFBZ0IsQ0FBQ0MsZ0JBQWpCO0FBRUFOLGFBQWEsQ0FBQ08saUJBQWQ7QUFDQVYsVUFBVSxDQUFDVSxpQkFBWDtBQUNBTixhQUFhLENBQUNNLGlCQUFkLEcsQ0FFQTs7QUFFQXpCLDhGQUFBLENBQThDLE9BQTlDLEVBQXVELFlBQU07QUFDM0R1QixFQUFBQSxnQkFBZ0IsQ0FBQ0csZUFBakI7QUFDQVIsRUFBQUEsYUFBYSxDQUFDRixJQUFkO0FBQ0QsQ0FIRDtBQUtBeEIsbUdBQUEsQ0FBbUQsT0FBbkQsRUFBNEQsWUFBTTtBQUNoRSxNQUFNbUMsV0FBVyxHQUFHVixRQUFRLENBQUNXLFdBQVQsRUFBcEI7QUFDQXBDLEVBQUFBLHlGQUFBLEdBQTJDbUMsV0FBVyxDQUFDM0osSUFBdkQ7QUFDQXdILEVBQUFBLDBGQUFBLEdBQTRDbUMsV0FBVyxDQUFDN0QsS0FBeEQ7QUFFQXdELEVBQUFBLGlCQUFpQixDQUFDSSxlQUFsQjtBQUNBUCxFQUFBQSxhQUFhLENBQUNILElBQWQ7QUFDRCxDQVBELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9BcGkuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm1zLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL3V0aWxzL0luaXRpYWxDYXJkcy5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gb3B0aW9ucy5iYXNlVXJsO1xuICAgIHRoaXMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycztcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9maWxlKCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VVcmx9L3VzZXJzL21lYCwge1xuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIkVycm9yXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gICBlZGl0UHJvZmlsZUFwaSh7IHVzZXJuYW1lLCB1c2VyZGVzY3JpcHRpb24gfSkge1xuICAvLyAgICAgcmV0dXJuIGZldGNoKFxuICAvLyAgICAgICAoYCR7dGhpcy5iYXNlVXJsfS91c2Vycy9tZWAsXG4gIC8vICAgICAgIHtcbiAgLy8gICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgLy8gICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gIC8vICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZSwgdXNlcmRlc2NyaXB0aW9uIH0pLFxuICAvLyAgICAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgLy8gICAgICAgICBpZiAocmVzLm9rKSB7XG4gIC8vICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiRXJyb3JcIik7XG4gIC8vICAgICAgIH0pXG4gIC8vICAgICApO1xuICAvLyAgIH1cblxuICBnZXRJbml0aWFsQ2FyZHMoKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuYmFzZVVybH0vY2FyZHNgLCB7XG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiRXJyb3JcIik7XG4gICAgfSk7XG4gIH1cblxuICAvLyAgIGZldGNoQ2FyZChkYXRhKSB7XG4gIC8vICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS9jYXJkc2AsIHtcbiAgLy8gICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgLy8gICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAvLyAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgLy8gICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAvLyAgICAgICBpZiAocmVzLm9rKSB7XG4gIC8vICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiRXJyb3JcIik7XG4gIC8vICAgICB9KTtcbiAgLy8gICB9XG59XG4iLCJjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IoeyBjYXJkLCBoYW5kbGVQcmV2aWV3SW1nIH0sIGNhcmRTZWxlY3Rvcikge1xuICAgIHRoaXMuX25hbWUgPSBjYXJkLm5hbWU7XG4gICAgdGhpcy5fbGluayA9IGNhcmQubGluaztcbiAgICB0aGlzLl9oYW5kbGVQcmV2aWV3SW1nID0gaGFuZGxlUHJldmlld0ltZztcblxuICAgIHRoaXMuX2NhcmRUZW1wbGF0ZSA9IGNhcmRTZWxlY3RvcjtcbiAgfVxuXG4gIF9nZXRUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9jYXJkVGVtcGxhdGUpXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIilcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICB0aGlzLl9lbGVtZW50ID0gdGVtcGxhdGU7XG4gIH1cblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fZWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1nXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuX2hhbmRsZVByZXZpZXdJbWcoKSk7XG5cbiAgICB0aGlzLl9lbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkX19kZWxldGUtYnV0dG9uXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuX2hhbmRsZURlbGV0ZUljb24oKSk7XG5cbiAgICB0aGlzLl9saWtlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2xpa2UtYnV0dG9uXCIpO1xuICAgIHRoaXMuX2xpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuX2hhbmRsZUxpa2VJY29uKCkpO1xuICB9XG5cbiAgX2hhbmRsZUxpa2VJY29uKCkge1xuICAgIHRoaXMuX2xpa2VCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImNhcmRfX2xpa2UtYnV0dG9uX2FjdGl2ZVwiKTtcbiAgfVxuXG4gIF9oYW5kbGVEZWxldGVJY29uKCkge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XG4gICAgdGhpcy5fY2FyZCA9IG51bGw7XG4gIH1cblxuICBnZXRWaWV3KCkge1xuICAgIHRoaXMuX2dldFRlbXBsYXRlKCk7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIGNvbnN0IGNhcmRJbWcgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1nXCIpO1xuXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RleHRcIikudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xuICAgIGNhcmRJbWcuc3JjID0gdGhpcy5fbGluaztcbiAgICBjYXJkSW1nLmFsdCA9IHRoaXMuX25hbWU7XG5cbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtRWxlbWVudCkge1xuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBzZXR0aW5ncy5pbnB1dFNlbGVjdG9yO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gc2V0dGluZ3Muc3VibWl0QnV0dG9uU2VsZWN0b3I7XG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IHNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3M7XG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzO1xuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBzZXR0aW5ncy5lcnJvckNsYXNzO1xuXG4gICAgdGhpcy5fZm9ybUVsID0gZm9ybUVsZW1lbnQ7XG4gIH1cblxuICBfc2hvd0lucHV0RXJyb3IgPSAoZm9ybUVsLCBpbnB1dCkgPT4ge1xuICAgIGNvbnN0IGVycm9yU3BhbiA9IGZvcm1FbC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dC5pZH0tZXJyb3JgKTtcbiAgICAvLyBhZGQgZXJyb3IgbWVzc2FnZS9jbGFzc1xuICAgIGVycm9yU3Bhbi50ZXh0Q29udGVudCA9IGlucHV0LnZhbGlkYXRpb25NZXNzYWdlO1xuICAgIGVycm9yU3Bhbi5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgfTtcblxuICBfaGlkZUlucHV0RXJyb3IgPSAoZm9ybUVsLCBpbnB1dCkgPT4ge1xuICAgIGNvbnN0IGVycm9yU3BhbiA9IGZvcm1FbC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dC5pZH0tZXJyb3JgKTtcbiAgICAvLyBhZGQgZXJyb3IgbWVzc2FnZS9jbGFzc1xuICAgIGVycm9yU3Bhbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZXJyb3JTcGFuLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICB9O1xuXG4gIF9jaGVja0lucHV0VmFsaWRpdHkgPSAoZm9ybUVsLCBpbnB1dCkgPT4ge1xuICAgIGlmIChpbnB1dC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoZm9ybUVsLCBpbnB1dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGZvcm1FbCwgaW5wdXQpO1xuICAgIH1cbiAgfTtcblxuICBfaXNWYWxpZCA9IChpbnB1dHMpID0+IHtcbiAgICByZXR1cm4gaW5wdXRzLmV2ZXJ5KChpbnB1dCkgPT4gaW5wdXQudmFsaWRpdHkudmFsaWQpO1xuICB9O1xuXG4gIF90b2dnbGVCdXR0b24gPSAoZm9ybUVsLCBpbnB1dHMpID0+IHtcbiAgICBjb25zdCBidXR0b25FbCA9IGZvcm1FbC5xdWVyeVNlbGVjdG9yKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcbiAgICBpZiAodGhpcy5faXNWYWxpZChpbnB1dHMpKSB7XG4gICAgICBidXR0b25FbC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgYnV0dG9uRWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uRWwuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgYnV0dG9uRWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICB9XG4gIH07XG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKGZvcm1FbCkge1xuICAgIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20oZm9ybUVsLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcikpO1xuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvbihmb3JtRWwsIGlucHV0cyk7XG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICAvLyBjaGVjayB2YWxpZGl0eVxuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoZm9ybUVsLCBpbnB1dCk7XG4gICAgICAgIC8vdG9nZ2xlIGJ1dHRvblxuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b24oZm9ybUVsLCBpbnB1dHMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNldFZhbGlkYXRpb24oKSB7XG4gICAgY29uc3QgaW5wdXRzID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXG4gICAgKTtcblxuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvbih0aGlzLl9mb3JtRWwsIGlucHV0cyk7XG5cbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKHRoaXMuX2Zvcm1FbCwgaW5wdXQpO1xuICAgIH0pO1xuICB9XG5cbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLl9mb3JtRWwuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKHRoaXMuX2Zvcm1FbCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybVZhbGlkYXRvcjtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IobW9kYWxTZWxlY3Rvcikge1xuICAgIHRoaXMuX21vZGFsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke21vZGFsU2VsZWN0b3J9YCk7XG4gICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fbW9kYWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbFwiKSB8fFxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbF9fY2xvc2UtYnV0dG9uXCIpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX2hhbmRsZUVzY0Nsb3NlKGUpIHtcbiAgICBpZiAoZS5rZXkgPT0gXCJFc2NhcGVcIikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5fbW9kYWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuXCIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuX21vZGFsRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfb3BlblwiKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtcyBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IoeyBtb2RhbFNlbGVjdG9yLCBoYW5kbGVGb3JtU3VibWl0IH0pIHtcbiAgICBzdXBlcihtb2RhbFNlbGVjdG9yKTtcblxuICAgIHRoaXMuX21vZGFsRm9ybSA9IHRoaXMuX21vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtXCIpO1xuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xuICB9XG5cbiAgX2dldElucHV0VmFsdWVzKCkge1xuICAgIHRoaXMuX2lucHV0cyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLl9tb2RhbEZvcm0ucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbF9fZm9ybS1pdGVtXCIpXG4gICAgKTtcblxuICAgIHRoaXMuX2Zvcm1WYWx1ZXMgPSB7fTtcblxuICAgIHRoaXMuX2lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgdGhpcy5fZm9ybVZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1WYWx1ZXM7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9tb2RhbEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9tb2RhbEZvcm0ucmVzZXQoKTtcblxuICAgIHN1cGVyLmNsb3NlKCk7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcbiAgb3Blbih7IGxpbmssIG5hbWUgfSkge1xuICAgIHRoaXMuX21vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wcmV2aWV3LWNhcHRpb25cIikudGV4dENvbnRlbnQgPVxuICAgICAgbmFtZTtcbiAgICBjb25zdCBpbWFnZSA9IHRoaXMuX21vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wcmV2aWV3LWltYWdlXCIpO1xuICAgIGltYWdlLnNyYyA9IGxpbms7XG4gICAgaW1hZ2UuYWx0ID0gbmFtZTtcbiAgICBzdXBlci5vcGVuKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcih7IHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjb250YWluZXJTZWxlY3Rvcn1gKTtcbiAgfVxuXG4gIGFkZEl0ZW0oZWxlbWVudCkge1xuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGVsZW1lbnQpO1xuICB9XG5cbiAgcmVuZGVySXRlbXMoaXRlbXMpIHtcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlcihpdGVtKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgbmFtZSxcbiAgICBhYm91dCxcbiAgICBfaWQsXG4gICAgYXZhdGFyLFxuICAgIHVzZXJOYW1lU2VsZWN0b3IsXG4gICAgdXNlckFib3V0U2VsZWN0b3IsXG4gICAgdXNlckF2YXRhclNlbGVjdG9yLFxuICB9KSB7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fYWJvdXQgPSBhYm91dDtcbiAgICB0aGlzLl9pZCA9IF9pZDtcbiAgICB0aGlzLl9hdmF0YXIgPSBhdmF0YXI7XG5cbiAgICB0aGlzLl91c2VyTmFtZVNlbGVjdG9yID0gdXNlck5hbWVTZWxlY3RvcjtcbiAgICB0aGlzLl91c2VyQWJvdXRTZWxlY3RvciA9IHVzZXJBYm91dFNlbGVjdG9yO1xuICAgIHRoaXMuX3VzZXJBdmF0YXJTZWxlY3RvciA9IHVzZXJBdmF0YXJTZWxlY3RvcjtcbiAgfVxuXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIHRoaXMudXNlckRhdGEgPSB7XG4gICAgICBuYW1lOiB0aGlzLl91c2VyTmFtZVNlbGVjdG9yLnRleHRDb250ZW50LFxuICAgICAgYWJvdXQ6IHRoaXMuX3VzZXJBYm91dFNlbGVjdG9yLnRleHRDb250ZW50LFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy51c2VyRGF0YTtcbiAgfVxuXG4gIHNldFVzZXJJbmZvKGRhdGEpIHtcbiAgICB0aGlzLl91c2VyTmFtZVNlbGVjdG9yLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xuICAgIHRoaXMuX3VzZXJBYm91dFNlbGVjdG9yLnRleHRDb250ZW50ID0gZGF0YS5hYm91dDtcbiAgfVxufVxuIiwiaW1wb3J0IHlvc2VtaXRlSW1nIGZyb20gXCIuLi9pbWFnZXMvWW9zZW1pdGUuanBlZ1wiO1xuaW1wb3J0IGxha2VJbWcgZnJvbSBcIi4uL2ltYWdlcy9MYWtlX0xvdWlzZS5qcGVnXCI7XG5pbXBvcnQgbW91bnRhaW5zSW1nIGZyb20gXCIuLi9pbWFnZXMvQmFsZF9Nb3VudGFpbnMuanBlZ1wiO1xuaW1wb3J0IGxhdGVtYXJJbWcgZnJvbSBcIi4uL2ltYWdlcy9MYXRlbWFyLmpwZWdcIjtcbmltcG9ydCB2YW5vaXNlSW1nIGZyb20gXCIuLi9pbWFnZXMvVmFub2lzZV9OYXRpb25hbF9QYXJrLmpwZWdcIjtcbmltcG9ydCBsYWdvSW1nIGZyb20gXCIuLi9pbWFnZXMvTGFnb19kaV9CcmFpZXMuanBlZ1wiO1xuXG5jb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIllvc2VtaXRlIFZhbGxleVwiLFxuICAgIGxpbms6IHlvc2VtaXRlSW1nLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxuICAgIGxpbms6IGxha2VJbWcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJhbGQgTW91bnRhaW5zXCIsXG4gICAgbGluazogbW91bnRhaW5zSW1nLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYXRlbWFyXCIsXG4gICAgbGluazogbGF0ZW1hckltZyxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXG4gICAgbGluazogdmFub2lzZUltZyxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTGFnbyBkaSBCcmFpZXNcIixcbiAgICBsaW5rOiBsYWdvSW1nLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbENhcmRzO1xuIiwiLy9WQUxJREFUSU9OIFNFVFRJTkdTXG5leHBvcnQgY29uc3QgdmFsaWRhdGlvblNldHRpbmdzID0ge1xuICBmb3JtU2VsZWN0b3I6IFwiLm1vZGFsX19mb3JtXCIsXG4gIGlucHV0U2VsZWN0b3I6IFwiLm1vZGFsX19mb3JtLWl0ZW1cIixcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLm1vZGFsX19zYXZlLWJ1dHRvblwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcIm1vZGFsX19zYXZlLWJ1dHRvbl9kaXNhYmxlZFwiLFxuICBpbnB1dEVycm9yQ2xhc3M6IFwibW9kYWxfX2Zvcm0taXRlbV90eXBlX2Vycm9yXCIsXG4gIGVycm9yQ2xhc3M6IFwibW9kYWxfX2Vycm9yX3Zpc2libGVcIixcbn07XG5cbmV4cG9ydCBjb25zdCBjYXJkQ29uc3RhbnRzID0ge1xuICBjYXJkU2VsZWN0b3I6IFwiI2NhcmQtdGVtcGxhdGVcIixcbiAgcGxhY2VTZWxlY3RvcjogXCJlbGVtZW50c1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IHByZXZpZXdDb25zdGFudHMgPSB7XG4gIHByZXZpZXdNb2RhbFNlbGVjdG9yOiBcIm1vZGFsX3R5cGVfcHJldmlld1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IGVkaXRDb25zdGFudHMgPSB7XG4gIGVkaXRQcm9maWxlRWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1fdHlwZV9lZGl0XCIpLFxuICBwcm9maWxlRWRpdEJ1dHRvbkVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpLFxuICBwcm9maWxlTmFtZUVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX25hbWVcIiksXG4gIHByb2ZpbGVBYm91dEVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2Fib3V0XCIpLFxuICBlZGl0UHJvZmlsZU5hbWVJbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybS1pdGVtX3R5cGVfbmFtZVwiKSxcbiAgZWRpdFByb2ZpbGVBYm91dElucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtLWl0ZW1fdHlwZV9hYm91dFwiKSxcbiAgZWRpdE1vZGFsU2VsZWN0b3I6IFwibW9kYWxfdHlwZV9lZGl0XCIsXG59O1xuXG5leHBvcnQgY29uc3QgYWRkQ29uc3RhbnRzID0ge1xuICBhZGRDYXJkc0VsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtX3R5cGVfYWRkXCIpLFxuICBhZGRDYXJkQnV0dG9uRWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkLWJ1dHRvblwiKSxcbiAgYWRkTW9kYWxTZWxlY3RvcjogXCJtb2RhbF90eXBlX2FkZFwiLFxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXG5pbXBvcnQgaW5pdGlhbENhcmRzIGZyb20gXCIuLi91dGlscy9Jbml0aWFsQ2FyZHMuanNcIjtcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEZvcm1zIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm1zLmpzXCI7XG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcbmltcG9ydCBBcGkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBpLmpzXCI7XG5cbmNvbnN0IGFwaSA9IG5ldyBBcGkoe1xuICBiYXNlVXJsOiBcImh0dHBzOi8vYXJvdW5kLm5vbW9yZXBhcnRpZXMuY28vdjEvZ3JvdXAtMTNcIixcbiAgaGVhZGVyczoge1xuICAgIGF1dGhvcml6YXRpb246IFwiMGY5ODA3N2YtMWIwOC00ODI5LWFlNTctNmY4MWFiNDczODBjXCIsXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gIH0sXG59KTtcblxuLy8gYXBpLmdldEluaXRpYWxQcm9maWxlKCk7XG5cbmFwaS5nZXRJbml0aWFsQ2FyZHMoKS50aGVuKChyZXMpID0+IHtcbiAgY29uc3QgY2FyZExpc3QgPSBuZXcgU2VjdGlvbihcbiAgICB7XG4gICAgICByZW5kZXJlcjogKGNhcmQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3Q2FyZCA9IGNyZWF0ZUNhcmQoY2FyZCk7XG4gICAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gbmV3Q2FyZC5nZXRWaWV3KCk7XG4gICAgICAgIGNhcmRMaXN0LmFkZEl0ZW0oY2FyZEVsZW1lbnQpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIGNhcmRDb25zdGFudHMucGxhY2VTZWxlY3RvclxuICApO1xuXG4gIGNhcmRMaXN0LnJlbmRlckl0ZW1zKHJlcyk7XG59KTtcblxuLy8gYXBpLmZldGNoQ2FyZFxuXG5pbXBvcnQge1xuICB2YWxpZGF0aW9uU2V0dGluZ3MsXG4gIGNhcmRDb25zdGFudHMsXG4gIHByZXZpZXdDb25zdGFudHMsXG4gIGVkaXRDb25zdGFudHMsXG4gIGFkZENvbnN0YW50cyxcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50cy5qc1wiO1xuXG5jb25zdCBjcmVhdGVDYXJkID0gKGNhcmQpID0+IHtcbiAgY29uc3QgY2FyZEluc3RhbmNlID0gbmV3IENhcmQoXG4gICAge1xuICAgICAgY2FyZCxcbiAgICAgIGhhbmRsZVByZXZpZXdJbWc6ICgpID0+IHtcbiAgICAgICAgaW1hZ2VNb2RhbC5vcGVuKGNhcmQpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIGNhcmRDb25zdGFudHMuY2FyZFNlbGVjdG9yXG4gICk7XG5cbiAgcmV0dXJuIGNhcmRJbnN0YW5jZTtcbn07XG5cbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHtcbiAgdXNlck5hbWVTZWxlY3RvcjogZWRpdENvbnN0YW50cy5wcm9maWxlTmFtZUVsLFxuICB1c2VyQWJvdXRTZWxlY3RvcjogZWRpdENvbnN0YW50cy5wcm9maWxlQWJvdXRFbCxcbn0pO1xuXG5jb25zdCBhZGRJbWFnZVBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm1zKHtcbiAgbW9kYWxTZWxlY3RvcjogYWRkQ29uc3RhbnRzLmFkZE1vZGFsU2VsZWN0b3IsXG4gIGhhbmRsZUZvcm1TdWJtaXQ6IChjYXJkKSA9PiB7XG4gICAgY29uc3QgbmV3Q2FyZCA9IGNyZWF0ZUNhcmQoY2FyZCk7XG4gICAgY2FyZExpc3QuYWRkSXRlbShuZXdDYXJkLmdldFZpZXcoKSk7XG4gIH0sXG59KTtcblxuY29uc3QgdXNlckluZm9Qb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3Jtcyh7XG4gIG1vZGFsU2VsZWN0b3I6IGVkaXRDb25zdGFudHMuZWRpdE1vZGFsU2VsZWN0b3IsXG4gIGhhbmRsZUZvcm1TdWJtaXQ6ICgpID0+IHtcbiAgICBhcGkuZ2V0SW5pdGlhbFByb2ZpbGUoKS50aGVuKChyZXMpID0+IHtcbiAgICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKHJlcyk7XG4gICAgfSk7XG4gIH0sXG59KTtcblxuLy8gY29uc3QgdXNlckluZm9Qb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3Jtcyh7XG4vLyAgIG1vZGFsU2VsZWN0b3I6IGVkaXRDb25zdGFudHMuZWRpdE1vZGFsU2VsZWN0b3IsXG4vLyAgIGhhbmRsZUZvcm1TdWJtaXQ6IChkYXRhKSA9PiB7XG4vLyAgICAgYXBpXG4vLyAgICAgICAuZ2V0SW5pdGlhbFByb2ZpbGUoeyB1c2VybmFtZTogZGF0YS5uYW1lLCB1c2VyZGVzY3JpcHRpb246IGRhdGEuYWJvdXQgfSlcbi8vICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4vLyAgICAgICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKGRhdGEpO1xuLy8gICAgICAgfSk7XG4vLyAgIH0sXG4vLyB9KTtcblxuY29uc3QgaW1hZ2VNb2RhbCA9IG5ldyBQb3B1cFdpdGhJbWFnZShwcmV2aWV3Q29uc3RhbnRzLnByZXZpZXdNb2RhbFNlbGVjdG9yKTtcblxuY29uc3QgZWRpdEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihcbiAgdmFsaWRhdGlvblNldHRpbmdzLFxuICBlZGl0Q29uc3RhbnRzLmVkaXRQcm9maWxlRWxcbik7XG5jb25zdCBhZGRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoXG4gIHZhbGlkYXRpb25TZXR0aW5ncyxcbiAgYWRkQ29uc3RhbnRzLmFkZENhcmRzRWxcbik7XG5cbmVkaXRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcbmFkZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG5hZGRJbWFnZVBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5pbWFnZU1vZGFsLnNldEV2ZW50TGlzdGVuZXJzKCk7XG51c2VySW5mb1BvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbi8vLy8vUE9QVVAgQlVUVE9OUy8vLy8vXG5cbmFkZENvbnN0YW50cy5hZGRDYXJkQnV0dG9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYWRkRm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcbiAgYWRkSW1hZ2VQb3B1cC5vcGVuKCk7XG59KTtcblxuZWRpdENvbnN0YW50cy5wcm9maWxlRWRpdEJ1dHRvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IHByb2ZpbGVEYXRhID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcbiAgZWRpdENvbnN0YW50cy5lZGl0UHJvZmlsZU5hbWVJbnB1dC52YWx1ZSA9IHByb2ZpbGVEYXRhLm5hbWU7XG4gIGVkaXRDb25zdGFudHMuZWRpdFByb2ZpbGVBYm91dElucHV0LnZhbHVlID0gcHJvZmlsZURhdGEuYWJvdXQ7XG5cbiAgZWRpdEZvcm1WYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKCk7XG4gIHVzZXJJbmZvUG9wdXAub3BlbigpO1xufSk7XG4iXSwibmFtZXMiOlsiQXBpIiwib3B0aW9ucyIsImJhc2VVcmwiLCJoZWFkZXJzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwib2siLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsIkNhcmQiLCJjYXJkU2VsZWN0b3IiLCJjYXJkIiwiaGFuZGxlUHJldmlld0ltZyIsIl9uYW1lIiwibmFtZSIsIl9saW5rIiwibGluayIsIl9oYW5kbGVQcmV2aWV3SW1nIiwiX2NhcmRUZW1wbGF0ZSIsInRlbXBsYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9lbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9oYW5kbGVEZWxldGVJY29uIiwiX2xpa2VCdXR0b24iLCJfaGFuZGxlTGlrZUljb24iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJyZW1vdmUiLCJfY2FyZCIsIl9nZXRUZW1wbGF0ZSIsIl9zZXRFdmVudExpc3RlbmVycyIsImNhcmRJbWciLCJ0ZXh0Q29udGVudCIsInNyYyIsImFsdCIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm1FbGVtZW50IiwiZm9ybUVsIiwiaW5wdXQiLCJlcnJvclNwYW4iLCJpZCIsInZhbGlkYXRpb25NZXNzYWdlIiwiYWRkIiwiX2Vycm9yQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9oaWRlSW5wdXRFcnJvciIsIl9zaG93SW5wdXRFcnJvciIsImlucHV0cyIsImV2ZXJ5IiwiYnV0dG9uRWwiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaXNWYWxpZCIsImRpc2FibGVkIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX2Zvcm1FbCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfdG9nZ2xlQnV0dG9uIiwiZm9yRWFjaCIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiUG9wdXAiLCJtb2RhbFNlbGVjdG9yIiwiX21vZGFsRWxlbWVudCIsIl9oYW5kbGVFc2NDbG9zZSIsImJpbmQiLCJlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJjbG9zZSIsImtleSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJQb3B1cFdpdGhGb3JtcyIsImhhbmRsZUZvcm1TdWJtaXQiLCJfbW9kYWxGb3JtIiwiX2hhbmRsZUZvcm1TdWJtaXQiLCJfaW5wdXRzIiwiX2Zvcm1WYWx1ZXMiLCJ2YWx1ZSIsIl9nZXRJbnB1dFZhbHVlcyIsInJlc2V0IiwiUG9wdXBXaXRoSW1hZ2UiLCJpbWFnZSIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsInJlbmRlcmVyIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsImVsZW1lbnQiLCJwcmVwZW5kIiwiaXRlbXMiLCJpdGVtIiwiVXNlckluZm8iLCJhYm91dCIsIl9pZCIsImF2YXRhciIsInVzZXJOYW1lU2VsZWN0b3IiLCJ1c2VyQWJvdXRTZWxlY3RvciIsInVzZXJBdmF0YXJTZWxlY3RvciIsIl9hYm91dCIsIl9hdmF0YXIiLCJfdXNlck5hbWVTZWxlY3RvciIsIl91c2VyQWJvdXRTZWxlY3RvciIsIl91c2VyQXZhdGFyU2VsZWN0b3IiLCJ1c2VyRGF0YSIsImRhdGEiLCJ5b3NlbWl0ZUltZyIsImxha2VJbWciLCJtb3VudGFpbnNJbWciLCJsYXRlbWFySW1nIiwidmFub2lzZUltZyIsImxhZ29JbWciLCJpbml0aWFsQ2FyZHMiLCJ2YWxpZGF0aW9uU2V0dGluZ3MiLCJmb3JtU2VsZWN0b3IiLCJjYXJkQ29uc3RhbnRzIiwicGxhY2VTZWxlY3RvciIsInByZXZpZXdDb25zdGFudHMiLCJwcmV2aWV3TW9kYWxTZWxlY3RvciIsImVkaXRDb25zdGFudHMiLCJlZGl0UHJvZmlsZUVsIiwicHJvZmlsZUVkaXRCdXR0b25FbCIsInByb2ZpbGVOYW1lRWwiLCJwcm9maWxlQWJvdXRFbCIsImVkaXRQcm9maWxlTmFtZUlucHV0IiwiZWRpdFByb2ZpbGVBYm91dElucHV0IiwiZWRpdE1vZGFsU2VsZWN0b3IiLCJhZGRDb25zdGFudHMiLCJhZGRDYXJkc0VsIiwiYWRkQ2FyZEJ1dHRvbkVsIiwiYWRkTW9kYWxTZWxlY3RvciIsImFwaSIsImF1dGhvcml6YXRpb24iLCJnZXRJbml0aWFsQ2FyZHMiLCJjYXJkTGlzdCIsIm5ld0NhcmQiLCJjcmVhdGVDYXJkIiwiY2FyZEVsZW1lbnQiLCJnZXRWaWV3IiwiYWRkSXRlbSIsInJlbmRlckl0ZW1zIiwiY2FyZEluc3RhbmNlIiwiaW1hZ2VNb2RhbCIsIm9wZW4iLCJ1c2VySW5mbyIsImFkZEltYWdlUG9wdXAiLCJ1c2VySW5mb1BvcHVwIiwiZ2V0SW5pdGlhbFByb2ZpbGUiLCJzZXRVc2VySW5mbyIsImVkaXRGb3JtVmFsaWRhdG9yIiwiYWRkRm9ybVZhbGlkYXRvciIsImVuYWJsZVZhbGlkYXRpb24iLCJzZXRFdmVudExpc3RlbmVycyIsInJlc2V0VmFsaWRhdGlvbiIsInByb2ZpbGVEYXRhIiwiZ2V0VXNlckluZm8iXSwic291cmNlUm9vdCI6IiJ9