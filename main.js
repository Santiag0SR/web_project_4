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
/* harmony export */   "api": () => (/* binding */ api)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Api = /*#__PURE__*/function () {
  function Api(options) {// constructor body

    _classCallCheck(this, Api);
  }

  _createClass(Api, [{
    key: "getInitialCards",
    value: function getInitialCards() {
      return fetch;
    } // other methods for working with the API

  }]);

  return Api;
}();

var api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-13",
  headers: {
    authorization: "0f98077f-1b08-4829-ae57-6f81ab47380c",
    "Content-Type": "application/json"
  }
});

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
    var userNameSelector = _ref.userNameSelector,
        userAboutSelector = _ref.userAboutSelector;

    _classCallCheck(this, UserInfo);

    this._userNameSelector = userNameSelector;
    this._userAboutSelector = userAboutSelector;
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









console.log(_components_Api_js__WEBPACK_IMPORTED_MODULE_8__.default);


var createCard = function createCard(card) {
  var cardInstance = new _components_Card_js__WEBPACK_IMPORTED_MODULE_3__.default({
    card: card,
    handlePreviewImg: function handlePreviewImg() {
      imageModal.open(card);
    }
  }, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.cardConstants.cardSelector);
  return cardInstance;
};

var cardList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_4__.default({
  renderer: function renderer(card) {
    var newCard = createCard(card);
    var cardElement = newCard.getView();
    cardList.addItem(cardElement);
  }
}, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.cardConstants.placeSelector);
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
  handleFormSubmit: function handleFormSubmit(data) {
    userInfo.setUserInfo(data);
  }
});
var imageModal = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.previewConstants.previewModalSelector);
var editFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.validationSettings, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.editConstants.editProfileEl);
var addFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.validationSettings, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.addConstants.addCardsEl);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
cardList.renderItems(_utils_InitialCards_js__WEBPACK_IMPORTED_MODULE_1__.default);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsR0FBR1YsUUFBUSxDQUFDVyxXQUFULEVBQXBCO0FBQ0FsQyxFQUFBQSx5RkFBQSxHQUEyQ2lDLFdBQVcsQ0FBQ25KLElBQXZEO0FBQ0FrSCxFQUFBQSwwRkFBQSxHQUE0Q2lDLFdBQVcsQ0FBQ2hELEtBQXhEO0FBRUEwQyxFQUFBQSxpQkFBaUIsQ0FBQ0ssZUFBbEI7QUFDQVAsRUFBQUEsYUFBYSxDQUFDUixJQUFkO0FBQ0QsQ0FQRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvQXBpLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3Jtcy5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy91dGlscy9Jbml0aWFsQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcmFjdGljdW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBpIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIC8vIGNvbnN0cnVjdG9yIGJvZHlcbiAgfVxuXG4gIGdldEluaXRpYWxDYXJkcygpIHtcbiAgICByZXR1cm4gZmV0Y2g7XG4gIH1cblxuICAvLyBvdGhlciBtZXRob2RzIGZvciB3b3JraW5nIHdpdGggdGhlIEFQSVxufVxuXG5leHBvcnQgY29uc3QgYXBpID0gbmV3IEFwaSh7XG4gIGJhc2VVcmw6IFwiaHR0cHM6Ly9hcm91bmQubm9tb3JlcGFydGllcy5jby92MS9ncm91cC0xM1wiLFxuICBoZWFkZXJzOiB7XG4gICAgYXV0aG9yaXphdGlvbjogXCIwZjk4MDc3Zi0xYjA4LTQ4MjktYWU1Ny02ZjgxYWI0NzM4MGNcIixcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgfSxcbn0pO1xuIiwiY2xhc3MgQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKHsgY2FyZCwgaGFuZGxlUHJldmlld0ltZyB9LCBjYXJkU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9uYW1lID0gY2FyZC5uYW1lO1xuICAgIHRoaXMuX2xpbmsgPSBjYXJkLmxpbms7XG4gICAgdGhpcy5faGFuZGxlUHJldmlld0ltZyA9IGhhbmRsZVByZXZpZXdJbWc7XG5cbiAgICB0aGlzLl9jYXJkVGVtcGxhdGUgPSBjYXJkU2VsZWN0b3I7XG4gIH1cblxuICBfZ2V0VGVtcGxhdGUoKSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFRlbXBsYXRlKVxuICAgICAgLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpXG4gICAgICAuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgdGhpcy5fZWxlbWVudCA9IHRlbXBsYXRlO1xuICB9XG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2VsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltZ1wiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLl9oYW5kbGVQcmV2aWV3SW1nKCkpO1xuXG4gICAgdGhpcy5fZWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fZGVsZXRlLWJ1dHRvblwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLl9oYW5kbGVEZWxldGVJY29uKCkpO1xuXG4gICAgdGhpcy5fbGlrZUJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19saWtlLWJ1dHRvblwiKTtcbiAgICB0aGlzLl9saWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLl9oYW5kbGVMaWtlSWNvbigpKTtcbiAgfVxuXG4gIF9oYW5kbGVMaWtlSWNvbigpIHtcbiAgICB0aGlzLl9saWtlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkX19saWtlLWJ1dHRvbl9hY3RpdmVcIik7XG4gIH1cblxuICBfaGFuZGxlRGVsZXRlSWNvbigpIHtcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xuICAgIHRoaXMuX2NhcmQgPSBudWxsO1xuICB9XG5cbiAgZ2V0VmlldygpIHtcbiAgICB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICBjb25zdCBjYXJkSW1nID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltZ1wiKTtcblxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190ZXh0XCIpLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcbiAgICBjYXJkSW1nLnNyYyA9IHRoaXMuX2xpbms7XG4gICAgY2FyZEltZy5hbHQgPSB0aGlzLl9uYW1lO1xuXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybUVsZW1lbnQpIHtcbiAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gc2V0dGluZ3MuaW5wdXRTZWxlY3RvcjtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHNldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBzZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xuICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IHNldHRpbmdzLmlucHV0RXJyb3JDbGFzcztcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gc2V0dGluZ3MuZXJyb3JDbGFzcztcblxuICAgIHRoaXMuX2Zvcm1FbCA9IGZvcm1FbGVtZW50O1xuICB9XG5cbiAgX3Nob3dJbnB1dEVycm9yID0gKGZvcm1FbCwgaW5wdXQpID0+IHtcbiAgICBjb25zdCBlcnJvclNwYW4gPSBmb3JtRWwucXVlcnlTZWxlY3RvcihgIyR7aW5wdXQuaWR9LWVycm9yYCk7XG4gICAgLy8gYWRkIGVycm9yIG1lc3NhZ2UvY2xhc3NcbiAgICBlcnJvclNwYW4udGV4dENvbnRlbnQgPSBpbnB1dC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICBlcnJvclNwYW4uY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gIH07XG5cbiAgX2hpZGVJbnB1dEVycm9yID0gKGZvcm1FbCwgaW5wdXQpID0+IHtcbiAgICBjb25zdCBlcnJvclNwYW4gPSBmb3JtRWwucXVlcnlTZWxlY3RvcihgIyR7aW5wdXQuaWR9LWVycm9yYCk7XG4gICAgLy8gYWRkIGVycm9yIG1lc3NhZ2UvY2xhc3NcbiAgICBlcnJvclNwYW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGVycm9yU3Bhbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgfTtcblxuICBfY2hlY2tJbnB1dFZhbGlkaXR5ID0gKGZvcm1FbCwgaW5wdXQpID0+IHtcbiAgICBpZiAoaW5wdXQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGZvcm1FbCwgaW5wdXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihmb3JtRWwsIGlucHV0KTtcbiAgICB9XG4gIH07XG5cbiAgX2lzVmFsaWQgPSAoaW5wdXRzKSA9PiB7XG4gICAgcmV0dXJuIGlucHV0cy5ldmVyeSgoaW5wdXQpID0+IGlucHV0LnZhbGlkaXR5LnZhbGlkKTtcbiAgfTtcblxuICBfdG9nZ2xlQnV0dG9uID0gKGZvcm1FbCwgaW5wdXRzKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uRWwgPSBmb3JtRWwucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XG4gICAgaWYgKHRoaXMuX2lzVmFsaWQoaW5wdXRzKSkge1xuICAgICAgYnV0dG9uRWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGJ1dHRvbkVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbkVsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIGJ1dHRvbkVsLmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgfVxuICB9O1xuXG4gIF9zZXRFdmVudExpc3RlbmVycyhmb3JtRWwpIHtcbiAgICBjb25zdCBpbnB1dHMgPSBBcnJheS5mcm9tKGZvcm1FbC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpKTtcbiAgICB0aGlzLl90b2dnbGVCdXR0b24oZm9ybUVsLCBpbnB1dHMpO1xuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgLy8gY2hlY2sgdmFsaWRpdHlcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGZvcm1FbCwgaW5wdXQpO1xuICAgICAgICAvL3RvZ2dsZSBidXR0b25cbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uKGZvcm1FbCwgaW5wdXRzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzZXRWYWxpZGF0aW9uKCkge1xuICAgIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKVxuICAgICk7XG5cbiAgICB0aGlzLl90b2dnbGVCdXR0b24odGhpcy5fZm9ybUVsLCBpbnB1dHMpO1xuXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcih0aGlzLl9mb3JtRWwsIGlucHV0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fZm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycyh0aGlzLl9mb3JtRWwpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0b3I7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKG1vZGFsU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9tb2RhbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHttb2RhbFNlbGVjdG9yfWApO1xuICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX21vZGFsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxcIikgfHxcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxfX2Nsb3NlLWJ1dHRvblwiKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9oYW5kbGVFc2NDbG9zZShlKSB7XG4gICAgaWYgKGUua2V5ID09IFwiRXNjYXBlXCIpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuX21vZGFsRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWxfb3BlblwiKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9tb2RhbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX29wZW5cIik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICB9XG59XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybXMgZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHsgbW9kYWxTZWxlY3RvciwgaGFuZGxlRm9ybVN1Ym1pdCB9KSB7XG4gICAgc3VwZXIobW9kYWxTZWxlY3Rvcik7XG5cbiAgICB0aGlzLl9tb2RhbEZvcm0gPSB0aGlzLl9tb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybVwiKTtcbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDtcbiAgfVxuXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcbiAgICB0aGlzLl9pbnB1dHMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy5fbW9kYWxGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWxfX2Zvcm0taXRlbVwiKVxuICAgICk7XG5cbiAgICB0aGlzLl9mb3JtVmFsdWVzID0ge307XG5cbiAgICB0aGlzLl9pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIHRoaXMuX2Zvcm1WYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLl9mb3JtVmFsdWVzO1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fbW9kYWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fbW9kYWxGb3JtLnJlc2V0KCk7XG5cbiAgICBzdXBlci5jbG9zZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XG4gIG9wZW4oeyBsaW5rLCBuYW1lIH0pIHtcbiAgICB0aGlzLl9tb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fcHJldmlldy1jYXB0aW9uXCIpLnRleHRDb250ZW50ID1cbiAgICAgIG5hbWU7XG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLl9tb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fcHJldmlldy1pbWFnZVwiKTtcbiAgICBpbWFnZS5zcmMgPSBsaW5rO1xuICAgIGltYWdlLmFsdCA9IG5hbWU7XG4gICAgc3VwZXIub3BlbigpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcbiAgY29uc3RydWN0b3IoeyByZW5kZXJlciB9LCBjb250YWluZXJTZWxlY3Rvcikge1xuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y29udGFpbmVyU2VsZWN0b3J9YCk7XG4gIH1cblxuICBhZGRJdGVtKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcbiAgfVxuXG4gIHJlbmRlckl0ZW1zKGl0ZW1zKSB7XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcbiAgY29uc3RydWN0b3IoeyB1c2VyTmFtZVNlbGVjdG9yLCB1c2VyQWJvdXRTZWxlY3RvciB9KSB7XG4gICAgdGhpcy5fdXNlck5hbWVTZWxlY3RvciA9IHVzZXJOYW1lU2VsZWN0b3I7XG4gICAgdGhpcy5fdXNlckFib3V0U2VsZWN0b3IgPSB1c2VyQWJvdXRTZWxlY3RvcjtcbiAgfVxuXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIHRoaXMudXNlckRhdGEgPSB7XG4gICAgICBuYW1lOiB0aGlzLl91c2VyTmFtZVNlbGVjdG9yLnRleHRDb250ZW50LFxuICAgICAgYWJvdXQ6IHRoaXMuX3VzZXJBYm91dFNlbGVjdG9yLnRleHRDb250ZW50LFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy51c2VyRGF0YTtcbiAgfVxuXG4gIHNldFVzZXJJbmZvKGRhdGEpIHtcbiAgICB0aGlzLl91c2VyTmFtZVNlbGVjdG9yLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xuICAgIHRoaXMuX3VzZXJBYm91dFNlbGVjdG9yLnRleHRDb250ZW50ID0gZGF0YS5hYm91dDtcbiAgfVxufVxuIiwiaW1wb3J0IHlvc2VtaXRlSW1nIGZyb20gXCIuLi9pbWFnZXMvWW9zZW1pdGUuanBlZ1wiO1xuaW1wb3J0IGxha2VJbWcgZnJvbSBcIi4uL2ltYWdlcy9MYWtlX0xvdWlzZS5qcGVnXCI7XG5pbXBvcnQgbW91bnRhaW5zSW1nIGZyb20gXCIuLi9pbWFnZXMvQmFsZF9Nb3VudGFpbnMuanBlZ1wiO1xuaW1wb3J0IGxhdGVtYXJJbWcgZnJvbSBcIi4uL2ltYWdlcy9MYXRlbWFyLmpwZWdcIjtcbmltcG9ydCB2YW5vaXNlSW1nIGZyb20gXCIuLi9pbWFnZXMvVmFub2lzZV9OYXRpb25hbF9QYXJrLmpwZWdcIjtcbmltcG9ydCBsYWdvSW1nIGZyb20gXCIuLi9pbWFnZXMvTGFnb19kaV9CcmFpZXMuanBlZ1wiO1xuXG5jb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIllvc2VtaXRlIFZhbGxleVwiLFxuICAgIGxpbms6IHlvc2VtaXRlSW1nLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxuICAgIGxpbms6IGxha2VJbWcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJhbGQgTW91bnRhaW5zXCIsXG4gICAgbGluazogbW91bnRhaW5zSW1nLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYXRlbWFyXCIsXG4gICAgbGluazogbGF0ZW1hckltZyxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXG4gICAgbGluazogdmFub2lzZUltZyxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTGFnbyBkaSBCcmFpZXNcIixcbiAgICBsaW5rOiBsYWdvSW1nLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbENhcmRzO1xuIiwiLy9WQUxJREFUSU9OIFNFVFRJTkdTXG5leHBvcnQgY29uc3QgdmFsaWRhdGlvblNldHRpbmdzID0ge1xuICBmb3JtU2VsZWN0b3I6IFwiLm1vZGFsX19mb3JtXCIsXG4gIGlucHV0U2VsZWN0b3I6IFwiLm1vZGFsX19mb3JtLWl0ZW1cIixcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLm1vZGFsX19zYXZlLWJ1dHRvblwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcIm1vZGFsX19zYXZlLWJ1dHRvbl9kaXNhYmxlZFwiLFxuICBpbnB1dEVycm9yQ2xhc3M6IFwibW9kYWxfX2Zvcm0taXRlbV90eXBlX2Vycm9yXCIsXG4gIGVycm9yQ2xhc3M6IFwibW9kYWxfX2Vycm9yX3Zpc2libGVcIixcbn07XG5cbmV4cG9ydCBjb25zdCBjYXJkQ29uc3RhbnRzID0ge1xuICBjYXJkU2VsZWN0b3I6IFwiI2NhcmQtdGVtcGxhdGVcIixcbiAgcGxhY2VTZWxlY3RvcjogXCJlbGVtZW50c1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IHByZXZpZXdDb25zdGFudHMgPSB7XG4gIHByZXZpZXdNb2RhbFNlbGVjdG9yOiBcIm1vZGFsX3R5cGVfcHJldmlld1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IGVkaXRDb25zdGFudHMgPSB7XG4gIGVkaXRQcm9maWxlRWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1fdHlwZV9lZGl0XCIpLFxuICBwcm9maWxlRWRpdEJ1dHRvbkVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpLFxuICBwcm9maWxlTmFtZUVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX25hbWVcIiksXG4gIHByb2ZpbGVBYm91dEVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2Fib3V0XCIpLFxuICBlZGl0UHJvZmlsZU5hbWVJbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybS1pdGVtX3R5cGVfbmFtZVwiKSxcbiAgZWRpdFByb2ZpbGVBYm91dElucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtLWl0ZW1fdHlwZV9hYm91dFwiKSxcbiAgZWRpdE1vZGFsU2VsZWN0b3I6IFwibW9kYWxfdHlwZV9lZGl0XCIsXG59O1xuXG5leHBvcnQgY29uc3QgYWRkQ29uc3RhbnRzID0ge1xuICBhZGRDYXJkc0VsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtX3R5cGVfYWRkXCIpLFxuICBhZGRDYXJkQnV0dG9uRWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkLWJ1dHRvblwiKSxcbiAgYWRkTW9kYWxTZWxlY3RvcjogXCJtb2RhbF90eXBlX2FkZFwiLFxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXG5pbXBvcnQgaW5pdGlhbENhcmRzIGZyb20gXCIuLi91dGlscy9Jbml0aWFsQ2FyZHMuanNcIjtcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEZvcm1zIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm1zLmpzXCI7XG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcbmltcG9ydCBhcGkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBpLmpzXCI7XG5cbmNvbnNvbGUubG9nKGFwaSk7XG5cbmltcG9ydCB7XG4gIHZhbGlkYXRpb25TZXR0aW5ncyxcbiAgY2FyZENvbnN0YW50cyxcbiAgcHJldmlld0NvbnN0YW50cyxcbiAgZWRpdENvbnN0YW50cyxcbiAgYWRkQ29uc3RhbnRzLFxufSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzLmpzXCI7XG5cbmNvbnN0IGNyZWF0ZUNhcmQgPSAoY2FyZCkgPT4ge1xuICBjb25zdCBjYXJkSW5zdGFuY2UgPSBuZXcgQ2FyZChcbiAgICB7XG4gICAgICBjYXJkLFxuICAgICAgaGFuZGxlUHJldmlld0ltZzogKCkgPT4ge1xuICAgICAgICBpbWFnZU1vZGFsLm9wZW4oY2FyZCk7XG4gICAgICB9LFxuICAgIH0sXG4gICAgY2FyZENvbnN0YW50cy5jYXJkU2VsZWN0b3JcbiAgKTtcblxuICByZXR1cm4gY2FyZEluc3RhbmNlO1xufTtcblxuY29uc3QgY2FyZExpc3QgPSBuZXcgU2VjdGlvbihcbiAge1xuICAgIHJlbmRlcmVyOiAoY2FyZCkgPT4ge1xuICAgICAgY29uc3QgbmV3Q2FyZCA9IGNyZWF0ZUNhcmQoY2FyZCk7XG4gICAgICBjb25zdCBjYXJkRWxlbWVudCA9IG5ld0NhcmQuZ2V0VmlldygpO1xuICAgICAgY2FyZExpc3QuYWRkSXRlbShjYXJkRWxlbWVudCk7XG4gICAgfSxcbiAgfSxcbiAgY2FyZENvbnN0YW50cy5wbGFjZVNlbGVjdG9yXG4pO1xuXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyh7XG4gIHVzZXJOYW1lU2VsZWN0b3I6IGVkaXRDb25zdGFudHMucHJvZmlsZU5hbWVFbCxcbiAgdXNlckFib3V0U2VsZWN0b3I6IGVkaXRDb25zdGFudHMucHJvZmlsZUFib3V0RWwsXG59KTtcblxuY29uc3QgYWRkSW1hZ2VQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3Jtcyh7XG4gIG1vZGFsU2VsZWN0b3I6IGFkZENvbnN0YW50cy5hZGRNb2RhbFNlbGVjdG9yLFxuICBoYW5kbGVGb3JtU3VibWl0OiAoY2FyZCkgPT4ge1xuICAgIGNvbnN0IG5ld0NhcmQgPSBjcmVhdGVDYXJkKGNhcmQpO1xuICAgIGNhcmRMaXN0LmFkZEl0ZW0obmV3Q2FyZC5nZXRWaWV3KCkpO1xuICB9LFxufSk7XG5cbmNvbnN0IHVzZXJJbmZvUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybXMoe1xuICBtb2RhbFNlbGVjdG9yOiBlZGl0Q29uc3RhbnRzLmVkaXRNb2RhbFNlbGVjdG9yLFxuICBoYW5kbGVGb3JtU3VibWl0OiAoZGF0YSkgPT4ge1xuICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKGRhdGEpO1xuICB9LFxufSk7XG5cbmNvbnN0IGltYWdlTW9kYWwgPSBuZXcgUG9wdXBXaXRoSW1hZ2UocHJldmlld0NvbnN0YW50cy5wcmV2aWV3TW9kYWxTZWxlY3Rvcik7XG5cbmNvbnN0IGVkaXRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoXG4gIHZhbGlkYXRpb25TZXR0aW5ncyxcbiAgZWRpdENvbnN0YW50cy5lZGl0UHJvZmlsZUVsXG4pO1xuY29uc3QgYWRkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKFxuICB2YWxpZGF0aW9uU2V0dGluZ3MsXG4gIGFkZENvbnN0YW50cy5hZGRDYXJkc0VsXG4pO1xuXG5lZGl0Rm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5hZGRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcblxuY2FyZExpc3QucmVuZGVySXRlbXMoaW5pdGlhbENhcmRzKTtcblxuYWRkSW1hZ2VQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuaW1hZ2VNb2RhbC5zZXRFdmVudExpc3RlbmVycygpO1xudXNlckluZm9Qb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuXG4vLy8vL1BPUFVQIEJVVFRPTlMvLy8vL1xuXG5hZGRDb25zdGFudHMuYWRkQ2FyZEJ1dHRvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGFkZEZvcm1WYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKCk7XG4gIGFkZEltYWdlUG9wdXAub3BlbigpO1xufSk7XG5cbmVkaXRDb25zdGFudHMucHJvZmlsZUVkaXRCdXR0b25FbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBwcm9maWxlRGF0YSA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCk7XG4gIGVkaXRDb25zdGFudHMuZWRpdFByb2ZpbGVOYW1lSW5wdXQudmFsdWUgPSBwcm9maWxlRGF0YS5uYW1lO1xuICBlZGl0Q29uc3RhbnRzLmVkaXRQcm9maWxlQWJvdXRJbnB1dC52YWx1ZSA9IHByb2ZpbGVEYXRhLmFib3V0O1xuXG4gIGVkaXRGb3JtVmFsaWRhdG9yLnJlc2V0VmFsaWRhdGlvbigpO1xuICB1c2VySW5mb1BvcHVwLm9wZW4oKTtcbn0pO1xuIl0sIm5hbWVzIjpbIkFwaSIsIm9wdGlvbnMiLCJmZXRjaCIsImFwaSIsImJhc2VVcmwiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsIkNhcmQiLCJjYXJkU2VsZWN0b3IiLCJjYXJkIiwiaGFuZGxlUHJldmlld0ltZyIsIl9uYW1lIiwibmFtZSIsIl9saW5rIiwibGluayIsIl9oYW5kbGVQcmV2aWV3SW1nIiwiX2NhcmRUZW1wbGF0ZSIsInRlbXBsYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9lbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9oYW5kbGVEZWxldGVJY29uIiwiX2xpa2VCdXR0b24iLCJfaGFuZGxlTGlrZUljb24iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJyZW1vdmUiLCJfY2FyZCIsIl9nZXRUZW1wbGF0ZSIsIl9zZXRFdmVudExpc3RlbmVycyIsImNhcmRJbWciLCJ0ZXh0Q29udGVudCIsInNyYyIsImFsdCIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm1FbGVtZW50IiwiZm9ybUVsIiwiaW5wdXQiLCJlcnJvclNwYW4iLCJpZCIsInZhbGlkYXRpb25NZXNzYWdlIiwiYWRkIiwiX2Vycm9yQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9oaWRlSW5wdXRFcnJvciIsIl9zaG93SW5wdXRFcnJvciIsImlucHV0cyIsImV2ZXJ5IiwiYnV0dG9uRWwiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaXNWYWxpZCIsImRpc2FibGVkIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX2Zvcm1FbCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfdG9nZ2xlQnV0dG9uIiwiZm9yRWFjaCIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiUG9wdXAiLCJtb2RhbFNlbGVjdG9yIiwiX21vZGFsRWxlbWVudCIsIl9oYW5kbGVFc2NDbG9zZSIsImJpbmQiLCJlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJjbG9zZSIsImtleSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJQb3B1cFdpdGhGb3JtcyIsImhhbmRsZUZvcm1TdWJtaXQiLCJfbW9kYWxGb3JtIiwiX2hhbmRsZUZvcm1TdWJtaXQiLCJfaW5wdXRzIiwiX2Zvcm1WYWx1ZXMiLCJ2YWx1ZSIsIl9nZXRJbnB1dFZhbHVlcyIsInJlc2V0IiwiUG9wdXBXaXRoSW1hZ2UiLCJpbWFnZSIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsInJlbmRlcmVyIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsImVsZW1lbnQiLCJwcmVwZW5kIiwiaXRlbXMiLCJpdGVtIiwiVXNlckluZm8iLCJ1c2VyTmFtZVNlbGVjdG9yIiwidXNlckFib3V0U2VsZWN0b3IiLCJfdXNlck5hbWVTZWxlY3RvciIsIl91c2VyQWJvdXRTZWxlY3RvciIsInVzZXJEYXRhIiwiYWJvdXQiLCJkYXRhIiwieW9zZW1pdGVJbWciLCJsYWtlSW1nIiwibW91bnRhaW5zSW1nIiwibGF0ZW1hckltZyIsInZhbm9pc2VJbWciLCJsYWdvSW1nIiwiaW5pdGlhbENhcmRzIiwidmFsaWRhdGlvblNldHRpbmdzIiwiZm9ybVNlbGVjdG9yIiwiY2FyZENvbnN0YW50cyIsInBsYWNlU2VsZWN0b3IiLCJwcmV2aWV3Q29uc3RhbnRzIiwicHJldmlld01vZGFsU2VsZWN0b3IiLCJlZGl0Q29uc3RhbnRzIiwiZWRpdFByb2ZpbGVFbCIsInByb2ZpbGVFZGl0QnV0dG9uRWwiLCJwcm9maWxlTmFtZUVsIiwicHJvZmlsZUFib3V0RWwiLCJlZGl0UHJvZmlsZU5hbWVJbnB1dCIsImVkaXRQcm9maWxlQWJvdXRJbnB1dCIsImVkaXRNb2RhbFNlbGVjdG9yIiwiYWRkQ29uc3RhbnRzIiwiYWRkQ2FyZHNFbCIsImFkZENhcmRCdXR0b25FbCIsImFkZE1vZGFsU2VsZWN0b3IiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlQ2FyZCIsImNhcmRJbnN0YW5jZSIsImltYWdlTW9kYWwiLCJvcGVuIiwiY2FyZExpc3QiLCJuZXdDYXJkIiwiY2FyZEVsZW1lbnQiLCJnZXRWaWV3IiwiYWRkSXRlbSIsInVzZXJJbmZvIiwiYWRkSW1hZ2VQb3B1cCIsInVzZXJJbmZvUG9wdXAiLCJzZXRVc2VySW5mbyIsImVkaXRGb3JtVmFsaWRhdG9yIiwiYWRkRm9ybVZhbGlkYXRvciIsImVuYWJsZVZhbGlkYXRpb24iLCJyZW5kZXJJdGVtcyIsInNldEV2ZW50TGlzdGVuZXJzIiwicmVzZXRWYWxpZGF0aW9uIiwicHJvZmlsZURhdGEiLCJnZXRVc2VySW5mbyJdLCJzb3VyY2VSb290IjoiIn0=