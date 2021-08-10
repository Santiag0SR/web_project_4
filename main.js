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
  } //   getInitialProfile(data) {
  //     return fetch(
  //       (`${this.baseUrl}/users/me`,
  //       {
  //         method: "PATCH",
  //         headers: this.headers,
  //         body: JSON.stringify(data),
  //       }).then((res) => {
  //         if (res.ok) {
  //           return res.json();
  //         }
  //         return Promise.reject("Error");
  //       })
  //     );
  //   }


  _createClass(Api, [{
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
    }
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









var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_8__.default({
  baseUrl: "https://around.nomoreparties.co/v1/group-13",
  headers: {
    authorization: "0f98077f-1b08-4829-ae57-6f81ab47380c",
    "Content-Type": "application/json"
  }
});
api.getInitialCards().then(function (res) {
  var cardList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_4__.default({
    renderer: function renderer(card) {
      var newCard = createCard(card);
      var cardElement = newCard.getView();
      cardList.addItem(cardElement);
    }
  }, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.cardConstants.placeSelector);
  cardList.renderItems(res);
});
api.getInitialProfile();


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
  handleFormSubmit: function handleFormSubmit(data) {
    userInfo.setUserInfo(data);
  }
});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFxQkEsRztBQUNuQixlQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUtDLE9BQUwsR0FBZUQsT0FBTyxDQUFDQyxPQUF2QjtBQUNBLFNBQUtDLE9BQUwsR0FBZUYsT0FBTyxDQUFDRSxPQUF2QjtBQUNELEcsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O1dBRUEsMkJBQWtCO0FBQ2hCLGFBQU9DLEtBQUssV0FBSSxLQUFLRixPQUFULGFBQTBCO0FBQ3BDQyxRQUFBQSxPQUFPLEVBQUUsS0FBS0E7QUFEc0IsT0FBMUIsQ0FBTCxDQUVKRSxJQUZJLENBRUMsVUFBQ0MsR0FBRCxFQUFTO0FBQ2YsWUFBSUEsR0FBRyxDQUFDQyxFQUFSLEVBQVk7QUFDVixpQkFBT0QsR0FBRyxDQUFDRSxJQUFKLEVBQVA7QUFDRDs7QUFDRCxlQUFPQyxPQUFPLENBQUNDLE1BQVIsQ0FBZSxPQUFmLENBQVA7QUFDRCxPQVBNLENBQVA7QUFRRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUMvQkdDLEk7QUFDSixzQkFBd0NDLFlBQXhDLEVBQXNEO0FBQUEsUUFBeENDLElBQXdDLFFBQXhDQSxJQUF3QztBQUFBLFFBQWxDQyxnQkFBa0MsUUFBbENBLGdCQUFrQzs7QUFBQTs7QUFDcEQsU0FBS0MsS0FBTCxHQUFhRixJQUFJLENBQUNHLElBQWxCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhSixJQUFJLENBQUNLLElBQWxCO0FBQ0EsU0FBS0MsaUJBQUwsR0FBeUJMLGdCQUF6QjtBQUVBLFNBQUtNLGFBQUwsR0FBcUJSLFlBQXJCO0FBQ0Q7Ozs7V0FFRCx3QkFBZTtBQUNiLFVBQU1TLFFBQVEsR0FBR0MsUUFBUSxDQUN0QkMsYUFEYyxDQUNBLEtBQUtILGFBREwsRUFFZEksT0FGYyxDQUVORCxhQUZNLENBRVEsT0FGUixFQUdkRSxTQUhjLENBR0osSUFISSxDQUFqQjtBQUtBLFdBQUtDLFFBQUwsR0FBZ0JMLFFBQWhCO0FBQ0Q7OztXQUVELDhCQUFxQjtBQUFBOztBQUNuQixXQUFLSyxRQUFMLENBQ0dILGFBREgsQ0FDaUIsWUFEakIsRUFFR0ksZ0JBRkgsQ0FFb0IsT0FGcEIsRUFFNkI7QUFBQSxlQUFNLEtBQUksQ0FBQ1IsaUJBQUwsRUFBTjtBQUFBLE9BRjdCOztBQUlBLFdBQUtPLFFBQUwsQ0FDR0gsYUFESCxDQUNpQixzQkFEakIsRUFFR0ksZ0JBRkgsQ0FFb0IsT0FGcEIsRUFFNkI7QUFBQSxlQUFNLEtBQUksQ0FBQ0MsaUJBQUwsRUFBTjtBQUFBLE9BRjdCOztBQUlBLFdBQUtDLFdBQUwsR0FBbUIsS0FBS0gsUUFBTCxDQUFjSCxhQUFkLENBQTRCLG9CQUE1QixDQUFuQjs7QUFDQSxXQUFLTSxXQUFMLENBQWlCRixnQkFBakIsQ0FBa0MsT0FBbEMsRUFBMkM7QUFBQSxlQUFNLEtBQUksQ0FBQ0csZUFBTCxFQUFOO0FBQUEsT0FBM0M7QUFDRDs7O1dBRUQsMkJBQWtCO0FBQ2hCLFdBQUtELFdBQUwsQ0FBaUJFLFNBQWpCLENBQTJCQyxNQUEzQixDQUFrQywwQkFBbEM7QUFDRDs7O1dBRUQsNkJBQW9CO0FBQ2xCLFdBQUtOLFFBQUwsQ0FBY08sTUFBZDs7QUFDQSxXQUFLQyxLQUFMLEdBQWEsSUFBYjtBQUNEOzs7V0FFRCxtQkFBVTtBQUNSLFdBQUtDLFlBQUw7O0FBQ0EsV0FBS0Msa0JBQUw7O0FBRUEsVUFBTUMsT0FBTyxHQUFHLEtBQUtYLFFBQUwsQ0FBY0gsYUFBZCxDQUE0QixZQUE1QixDQUFoQjs7QUFFQSxXQUFLRyxRQUFMLENBQWNILGFBQWQsQ0FBNEIsYUFBNUIsRUFBMkNlLFdBQTNDLEdBQXlELEtBQUt2QixLQUE5RDtBQUNBc0IsTUFBQUEsT0FBTyxDQUFDRSxHQUFSLEdBQWMsS0FBS3RCLEtBQW5CO0FBQ0FvQixNQUFBQSxPQUFPLENBQUNHLEdBQVIsR0FBYyxLQUFLekIsS0FBbkI7QUFFQSxhQUFPLEtBQUtXLFFBQVo7QUFDRDs7Ozs7O0FBR0gsaUVBQWVmLElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3RETThCLGE7QUFDSix5QkFBWUMsUUFBWixFQUFzQkMsV0FBdEIsRUFBbUM7QUFBQTs7QUFBQTs7QUFBQSw2Q0FVakIsVUFBQ0MsTUFBRCxFQUFTQyxLQUFULEVBQW1CO0FBQ25DLFVBQU1DLFNBQVMsR0FBR0YsTUFBTSxDQUFDckIsYUFBUCxZQUF5QnNCLEtBQUssQ0FBQ0UsRUFBL0IsWUFBbEIsQ0FEbUMsQ0FFbkM7O0FBQ0FELE1BQUFBLFNBQVMsQ0FBQ1IsV0FBVixHQUF3Qk8sS0FBSyxDQUFDRyxpQkFBOUI7QUFDQUYsTUFBQUEsU0FBUyxDQUFDZixTQUFWLENBQW9Ca0IsR0FBcEIsQ0FBd0IsS0FBSSxDQUFDQyxXQUE3QjtBQUNBTCxNQUFBQSxLQUFLLENBQUNkLFNBQU4sQ0FBZ0JrQixHQUFoQixDQUFvQixLQUFJLENBQUNFLGdCQUF6QjtBQUNELEtBaEJrQzs7QUFBQSw2Q0FrQmpCLFVBQUNQLE1BQUQsRUFBU0MsS0FBVCxFQUFtQjtBQUNuQyxVQUFNQyxTQUFTLEdBQUdGLE1BQU0sQ0FBQ3JCLGFBQVAsWUFBeUJzQixLQUFLLENBQUNFLEVBQS9CLFlBQWxCLENBRG1DLENBRW5DOztBQUNBRCxNQUFBQSxTQUFTLENBQUNSLFdBQVYsR0FBd0IsRUFBeEI7QUFDQVEsTUFBQUEsU0FBUyxDQUFDZixTQUFWLENBQW9CRSxNQUFwQixDQUEyQixLQUFJLENBQUNpQixXQUFoQztBQUNBTCxNQUFBQSxLQUFLLENBQUNkLFNBQU4sQ0FBZ0JFLE1BQWhCLENBQXVCLEtBQUksQ0FBQ2tCLGdCQUE1QjtBQUNELEtBeEJrQzs7QUFBQSxpREEwQmIsVUFBQ1AsTUFBRCxFQUFTQyxLQUFULEVBQW1CO0FBQ3ZDLFVBQUlBLEtBQUssQ0FBQ08sUUFBTixDQUFlQyxLQUFuQixFQUEwQjtBQUN4QixhQUFJLENBQUNDLGVBQUwsQ0FBcUJWLE1BQXJCLEVBQTZCQyxLQUE3QjtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUksQ0FBQ1UsZUFBTCxDQUFxQlgsTUFBckIsRUFBNkJDLEtBQTdCO0FBQ0Q7QUFDRixLQWhDa0M7O0FBQUEsc0NBa0N4QixVQUFDVyxNQUFELEVBQVk7QUFDckIsYUFBT0EsTUFBTSxDQUFDQyxLQUFQLENBQWEsVUFBQ1osS0FBRDtBQUFBLGVBQVdBLEtBQUssQ0FBQ08sUUFBTixDQUFlQyxLQUExQjtBQUFBLE9BQWIsQ0FBUDtBQUNELEtBcENrQzs7QUFBQSwyQ0FzQ25CLFVBQUNULE1BQUQsRUFBU1ksTUFBVCxFQUFvQjtBQUNsQyxVQUFNRSxRQUFRLEdBQUdkLE1BQU0sQ0FBQ3JCLGFBQVAsQ0FBcUIsS0FBSSxDQUFDb0MscUJBQTFCLENBQWpCOztBQUNBLFVBQUksS0FBSSxDQUFDQyxRQUFMLENBQWNKLE1BQWQsQ0FBSixFQUEyQjtBQUN6QkUsUUFBQUEsUUFBUSxDQUFDRyxRQUFULEdBQW9CLEtBQXBCO0FBQ0FILFFBQUFBLFFBQVEsQ0FBQzNCLFNBQVQsQ0FBbUJFLE1BQW5CLENBQTBCLEtBQUksQ0FBQzZCLG9CQUEvQjtBQUNELE9BSEQsTUFHTztBQUNMSixRQUFBQSxRQUFRLENBQUNHLFFBQVQsR0FBb0IsSUFBcEI7QUFDQUgsUUFBQUEsUUFBUSxDQUFDM0IsU0FBVCxDQUFtQmtCLEdBQW5CLENBQXVCLEtBQUksQ0FBQ2Esb0JBQTVCO0FBQ0Q7QUFDRixLQS9Da0M7O0FBQ2pDLFNBQUtDLGNBQUwsR0FBc0JyQixRQUFRLENBQUNzQixhQUEvQjtBQUNBLFNBQUtMLHFCQUFMLEdBQTZCakIsUUFBUSxDQUFDdUIsb0JBQXRDO0FBQ0EsU0FBS0gsb0JBQUwsR0FBNEJwQixRQUFRLENBQUN3QixtQkFBckM7QUFDQSxTQUFLZixnQkFBTCxHQUF3QlQsUUFBUSxDQUFDeUIsZUFBakM7QUFDQSxTQUFLakIsV0FBTCxHQUFtQlIsUUFBUSxDQUFDMEIsVUFBNUI7QUFFQSxTQUFLQyxPQUFMLEdBQWUxQixXQUFmO0FBQ0Q7Ozs7V0F5Q0QsNEJBQW1CQyxNQUFuQixFQUEyQjtBQUFBOztBQUN6QixVQUFNWSxNQUFNLEdBQUdjLEtBQUssQ0FBQ0MsSUFBTixDQUFXM0IsTUFBTSxDQUFDNEIsZ0JBQVAsQ0FBd0IsS0FBS1QsY0FBN0IsQ0FBWCxDQUFmOztBQUNBLFdBQUtVLGFBQUwsQ0FBbUI3QixNQUFuQixFQUEyQlksTUFBM0I7O0FBQ0FBLE1BQUFBLE1BQU0sQ0FBQ2tCLE9BQVAsQ0FBZSxVQUFDN0IsS0FBRCxFQUFXO0FBQ3hCQSxRQUFBQSxLQUFLLENBQUNsQixnQkFBTixDQUF1QixPQUF2QixFQUFnQyxZQUFNO0FBQ3BDO0FBQ0EsZ0JBQUksQ0FBQ2dELG1CQUFMLENBQXlCL0IsTUFBekIsRUFBaUNDLEtBQWpDLEVBRm9DLENBR3BDOzs7QUFDQSxnQkFBSSxDQUFDNEIsYUFBTCxDQUFtQjdCLE1BQW5CLEVBQTJCWSxNQUEzQjtBQUNELFNBTEQ7QUFNRCxPQVBEO0FBUUQ7OztXQUVELDJCQUFrQjtBQUFBOztBQUNoQixVQUFNQSxNQUFNLEdBQUdjLEtBQUssQ0FBQ0MsSUFBTixDQUNiLEtBQUtGLE9BQUwsQ0FBYUcsZ0JBQWIsQ0FBOEIsS0FBS1QsY0FBbkMsQ0FEYSxDQUFmOztBQUlBLFdBQUtVLGFBQUwsQ0FBbUIsS0FBS0osT0FBeEIsRUFBaUNiLE1BQWpDOztBQUVBQSxNQUFBQSxNQUFNLENBQUNrQixPQUFQLENBQWUsVUFBQzdCLEtBQUQsRUFBVztBQUN4QixjQUFJLENBQUNTLGVBQUwsQ0FBcUIsTUFBSSxDQUFDZSxPQUExQixFQUFtQ3hCLEtBQW5DO0FBQ0QsT0FGRDtBQUdEOzs7V0FFRCw0QkFBbUI7QUFDakIsV0FBS3dCLE9BQUwsQ0FBYTFDLGdCQUFiLENBQThCLFFBQTlCLEVBQXdDLFVBQUNpRCxLQUFEO0FBQUEsZUFBV0EsS0FBSyxDQUFDQyxjQUFOLEVBQVg7QUFBQSxPQUF4Qzs7QUFDQSxXQUFLekMsa0JBQUwsQ0FBd0IsS0FBS2lDLE9BQTdCO0FBQ0Q7Ozs7OztBQUdILGlFQUFlNUIsYUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2pGcUJxQyxLO0FBQ25CLGlCQUFZQyxhQUFaLEVBQTJCO0FBQUE7O0FBQ3pCLFNBQUtDLGFBQUwsR0FBcUIxRCxRQUFRLENBQUNDLGFBQVQsWUFBMkJ3RCxhQUEzQixFQUFyQjtBQUNBLFNBQUtFLGVBQUwsR0FBdUIsS0FBS0EsZUFBTCxDQUFxQkMsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBdkI7QUFDRDs7OztXQUVELDZCQUFvQjtBQUFBOztBQUNsQixXQUFLRixhQUFMLENBQW1CckQsZ0JBQW5CLENBQW9DLE9BQXBDLEVBQTZDLFVBQUN3RCxDQUFELEVBQU87QUFDbEQsWUFDRUEsQ0FBQyxDQUFDQyxNQUFGLENBQVNyRCxTQUFULENBQW1Cc0QsUUFBbkIsQ0FBNEIsT0FBNUIsS0FDQUYsQ0FBQyxDQUFDQyxNQUFGLENBQVNyRCxTQUFULENBQW1Cc0QsUUFBbkIsQ0FBNEIscUJBQTVCLENBRkYsRUFHRTtBQUNBLGVBQUksQ0FBQ0MsS0FBTDtBQUNEO0FBQ0YsT0FQRDtBQVFEOzs7V0FFRCx5QkFBZ0JILENBQWhCLEVBQW1CO0FBQ2pCLFVBQUlBLENBQUMsQ0FBQ0ksR0FBRixJQUFTLFFBQWIsRUFBdUI7QUFDckIsYUFBS0QsS0FBTDtBQUNEO0FBQ0Y7OztXQUVELGdCQUFPO0FBQ0wsV0FBS04sYUFBTCxDQUFtQmpELFNBQW5CLENBQTZCa0IsR0FBN0IsQ0FBaUMsWUFBakM7O0FBQ0EzQixNQUFBQSxRQUFRLENBQUNLLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLEtBQUtzRCxlQUExQztBQUNEOzs7V0FFRCxpQkFBUTtBQUNOLFdBQUtELGFBQUwsQ0FBbUJqRCxTQUFuQixDQUE2QkUsTUFBN0IsQ0FBb0MsWUFBcEM7O0FBQ0FYLE1BQUFBLFFBQVEsQ0FBQ2tFLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDLEtBQUtQLGVBQTdDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JIOztJQUVxQlEsYzs7Ozs7QUFDbkIsZ0NBQWlEO0FBQUE7O0FBQUEsUUFBbkNWLGFBQW1DLFFBQW5DQSxhQUFtQztBQUFBLFFBQXBCVyxnQkFBb0IsUUFBcEJBLGdCQUFvQjs7QUFBQTs7QUFDL0MsOEJBQU1YLGFBQU47QUFFQSxVQUFLWSxVQUFMLEdBQWtCLE1BQUtYLGFBQUwsQ0FBbUJ6RCxhQUFuQixDQUFpQyxjQUFqQyxDQUFsQjtBQUNBLFVBQUtxRSxpQkFBTCxHQUF5QkYsZ0JBQXpCO0FBSitDO0FBS2hEOzs7O1dBRUQsMkJBQWtCO0FBQUE7O0FBQ2hCLFdBQUtHLE9BQUwsR0FBZXZCLEtBQUssQ0FBQ0MsSUFBTixDQUNiLEtBQUtvQixVQUFMLENBQWdCbkIsZ0JBQWhCLENBQWlDLG1CQUFqQyxDQURhLENBQWY7QUFJQSxXQUFLc0IsV0FBTCxHQUFtQixFQUFuQjs7QUFFQSxXQUFLRCxPQUFMLENBQWFuQixPQUFiLENBQXFCLFVBQUM3QixLQUFELEVBQVc7QUFDOUIsY0FBSSxDQUFDaUQsV0FBTCxDQUFpQmpELEtBQUssQ0FBQzdCLElBQXZCLElBQStCNkIsS0FBSyxDQUFDa0QsS0FBckM7QUFDRCxPQUZEOztBQUlBLGFBQU8sS0FBS0QsV0FBWjtBQUNEOzs7V0FFRCw2QkFBb0I7QUFBQTs7QUFDbEIsV0FBS0gsVUFBTCxDQUFnQmhFLGdCQUFoQixDQUFpQyxRQUFqQyxFQUEyQyxVQUFDd0QsQ0FBRCxFQUFPO0FBQ2hEQSxRQUFBQSxDQUFDLENBQUNOLGNBQUY7O0FBQ0EsY0FBSSxDQUFDZSxpQkFBTCxDQUF1QixNQUFJLENBQUNJLGVBQUwsRUFBdkI7O0FBQ0EsY0FBSSxDQUFDVixLQUFMO0FBQ0QsT0FKRDs7QUFNQTtBQUNEOzs7V0FFRCxpQkFBUTtBQUNOLFdBQUtLLFVBQUwsQ0FBZ0JNLEtBQWhCOztBQUVBO0FBQ0Q7Ozs7RUFwQ3lDbkIsOEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGNUM7O0lBRXFCb0IsYzs7Ozs7Ozs7Ozs7OztXQUNuQixvQkFBcUI7QUFBQSxVQUFkaEYsSUFBYyxRQUFkQSxJQUFjO0FBQUEsVUFBUkYsSUFBUSxRQUFSQSxJQUFRO0FBQ25CLFdBQUtnRSxhQUFMLENBQW1CekQsYUFBbkIsQ0FBaUMseUJBQWpDLEVBQTREZSxXQUE1RCxHQUNFdEIsSUFERjs7QUFFQSxVQUFNbUYsS0FBSyxHQUFHLEtBQUtuQixhQUFMLENBQW1CekQsYUFBbkIsQ0FBaUMsdUJBQWpDLENBQWQ7O0FBQ0E0RSxNQUFBQSxLQUFLLENBQUM1RCxHQUFOLEdBQVlyQixJQUFaO0FBQ0FpRixNQUFBQSxLQUFLLENBQUMzRCxHQUFOLEdBQVl4QixJQUFaOztBQUNBO0FBQ0Q7Ozs7RUFSeUM4RCw4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0Z2QnNCLE87QUFDbkIseUJBQTBCQyxpQkFBMUIsRUFBNkM7QUFBQSxRQUEvQkMsUUFBK0IsUUFBL0JBLFFBQStCOztBQUFBOztBQUMzQyxTQUFLQyxTQUFMLEdBQWlCRCxRQUFqQjtBQUNBLFNBQUtFLFVBQUwsR0FBa0JsRixRQUFRLENBQUNDLGFBQVQsWUFBMkI4RSxpQkFBM0IsRUFBbEI7QUFDRDs7OztXQUVELGlCQUFRSSxPQUFSLEVBQWlCO0FBQ2YsV0FBS0QsVUFBTCxDQUFnQkUsT0FBaEIsQ0FBd0JELE9BQXhCO0FBQ0Q7OztXQUVELHFCQUFZRSxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCQSxNQUFBQSxLQUFLLENBQUNqQyxPQUFOLENBQWMsVUFBQ2tDLElBQUQsRUFBVTtBQUN0QixhQUFJLENBQUNMLFNBQUwsQ0FBZUssSUFBZjtBQUNELE9BRkQ7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNka0JDLFE7QUFDbkIsMEJBQXFEO0FBQUEsUUFBdkNDLGdCQUF1QyxRQUF2Q0EsZ0JBQXVDO0FBQUEsUUFBckJDLGlCQUFxQixRQUFyQkEsaUJBQXFCOztBQUFBOztBQUNuRCxTQUFLQyxpQkFBTCxHQUF5QkYsZ0JBQXpCO0FBQ0EsU0FBS0csa0JBQUwsR0FBMEJGLGlCQUExQjtBQUNEOzs7O1dBRUQsdUJBQWM7QUFDWixXQUFLRyxRQUFMLEdBQWdCO0FBQ2RsRyxRQUFBQSxJQUFJLEVBQUUsS0FBS2dHLGlCQUFMLENBQXVCMUUsV0FEZjtBQUVkNkUsUUFBQUEsS0FBSyxFQUFFLEtBQUtGLGtCQUFMLENBQXdCM0U7QUFGakIsT0FBaEI7QUFLQSxhQUFPLEtBQUs0RSxRQUFaO0FBQ0Q7OztXQUVELHFCQUFZRSxJQUFaLEVBQWtCO0FBQ2hCLFdBQUtKLGlCQUFMLENBQXVCMUUsV0FBdkIsR0FBcUM4RSxJQUFJLENBQUNwRyxJQUExQztBQUNBLFdBQUtpRyxrQkFBTCxDQUF3QjNFLFdBQXhCLEdBQXNDOEUsSUFBSSxDQUFDRCxLQUEzQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNUSxZQUFZLEdBQUcsQ0FDbkI7QUFDRTNHLEVBQUFBLElBQUksRUFBRSxpQkFEUjtBQUVFRSxFQUFBQSxJQUFJLEVBQUVtRyxrREFBV0E7QUFGbkIsQ0FEbUIsRUFLbkI7QUFDRXJHLEVBQUFBLElBQUksRUFBRSxhQURSO0FBRUVFLEVBQUFBLElBQUksRUFBRW9HLHFEQUFPQTtBQUZmLENBTG1CLEVBU25CO0FBQ0V0RyxFQUFBQSxJQUFJLEVBQUUsZ0JBRFI7QUFFRUUsRUFBQUEsSUFBSSxFQUFFcUcsd0RBQVlBO0FBRnBCLENBVG1CLEVBYW5CO0FBQ0V2RyxFQUFBQSxJQUFJLEVBQUUsU0FEUjtBQUVFRSxFQUFBQSxJQUFJLEVBQUVzRyxpREFBVUE7QUFGbEIsQ0FibUIsRUFpQm5CO0FBQ0V4RyxFQUFBQSxJQUFJLEVBQUUsdUJBRFI7QUFFRUUsRUFBQUEsSUFBSSxFQUFFdUcsK0RBQVVBO0FBRmxCLENBakJtQixFQXFCbkI7QUFDRXpHLEVBQUFBLElBQUksRUFBRSxnQkFEUjtBQUVFRSxFQUFBQSxJQUFJLEVBQUV3Ryx3REFBT0E7QUFGZixDQXJCbUIsQ0FBckI7QUEyQkEsaUVBQWVDLFlBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ08sSUFBTUMsa0JBQWtCLEdBQUc7QUFDaENDLEVBQUFBLFlBQVksRUFBRSxjQURrQjtBQUVoQzdELEVBQUFBLGFBQWEsRUFBRSxtQkFGaUI7QUFHaENDLEVBQUFBLG9CQUFvQixFQUFFLHFCQUhVO0FBSWhDQyxFQUFBQSxtQkFBbUIsRUFBRSw2QkFKVztBQUtoQ0MsRUFBQUEsZUFBZSxFQUFFLDZCQUxlO0FBTWhDQyxFQUFBQSxVQUFVLEVBQUU7QUFOb0IsQ0FBM0I7QUFTQSxJQUFNMEQsYUFBYSxHQUFHO0FBQzNCbEgsRUFBQUEsWUFBWSxFQUFFLGdCQURhO0FBRTNCbUgsRUFBQUEsYUFBYSxFQUFFO0FBRlksQ0FBdEI7QUFLQSxJQUFNQyxnQkFBZ0IsR0FBRztBQUM5QkMsRUFBQUEsb0JBQW9CLEVBQUU7QUFEUSxDQUF6QjtBQUlBLElBQU1DLGFBQWEsR0FBRztBQUMzQkMsRUFBQUEsYUFBYSxFQUFFN0csUUFBUSxDQUFDQyxhQUFULENBQXVCLHdCQUF2QixDQURZO0FBRTNCNkcsRUFBQUEsbUJBQW1CLEVBQUU5RyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsdUJBQXZCLENBRk07QUFHM0I4RyxFQUFBQSxhQUFhLEVBQUUvRyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBSFk7QUFJM0IrRyxFQUFBQSxjQUFjLEVBQUVoSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBSlc7QUFLM0JnSCxFQUFBQSxvQkFBb0IsRUFBRWpILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qiw2QkFBdkIsQ0FMSztBQU0zQmlILEVBQUFBLHFCQUFxQixFQUFFbEgsUUFBUSxDQUFDQyxhQUFULENBQXVCLDhCQUF2QixDQU5JO0FBTzNCa0gsRUFBQUEsaUJBQWlCLEVBQUU7QUFQUSxDQUF0QjtBQVVBLElBQU1DLFlBQVksR0FBRztBQUMxQkMsRUFBQUEsVUFBVSxFQUFFckgsUUFBUSxDQUFDQyxhQUFULENBQXVCLHVCQUF2QixDQURjO0FBRTFCcUgsRUFBQUEsZUFBZSxFQUFFdEgsUUFBUSxDQUFDQyxhQUFULENBQXVCLHNCQUF2QixDQUZTO0FBRzFCc0gsRUFBQUEsZ0JBQWdCLEVBQUU7QUFIUSxDQUFyQixDOzs7Ozs7Ozs7OztBQzdCUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQSwyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUk5SSx1REFBSixDQUFRO0FBQ2xCRSxFQUFBQSxPQUFPLEVBQUUsNkNBRFM7QUFFbEJDLEVBQUFBLE9BQU8sRUFBRTtBQUNQNEksSUFBQUEsYUFBYSxFQUFFLHNDQURSO0FBRVAsb0JBQWdCO0FBRlQ7QUFGUyxDQUFSLENBQVo7QUFRQUQsR0FBRyxDQUFDRSxlQUFKLEdBQXNCM0ksSUFBdEIsQ0FBMkIsVUFBQ0MsR0FBRCxFQUFTO0FBQ2xDLE1BQU0ySSxRQUFRLEdBQUcsSUFBSTdDLDJEQUFKLENBQ2Y7QUFDRUUsSUFBQUEsUUFBUSxFQUFFLGtCQUFDekYsSUFBRCxFQUFVO0FBQ2xCLFVBQU1xSSxPQUFPLEdBQUdDLFVBQVUsQ0FBQ3RJLElBQUQsQ0FBMUI7QUFDQSxVQUFNdUksV0FBVyxHQUFHRixPQUFPLENBQUNHLE9BQVIsRUFBcEI7QUFDQUosTUFBQUEsUUFBUSxDQUFDSyxPQUFULENBQWlCRixXQUFqQjtBQUNEO0FBTEgsR0FEZSxFQVFmdEIsNEVBUmUsQ0FBakI7QUFXQW1CLEVBQUFBLFFBQVEsQ0FBQ00sV0FBVCxDQUFxQmpKLEdBQXJCO0FBQ0QsQ0FiRDtBQWVBd0ksR0FBRyxDQUFDVSxpQkFBSjtBQUVBOztBQVFBLElBQU1MLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUN0SSxJQUFELEVBQVU7QUFDM0IsTUFBTTRJLFlBQVksR0FBRyxJQUFJOUksd0RBQUosQ0FDbkI7QUFDRUUsSUFBQUEsSUFBSSxFQUFKQSxJQURGO0FBRUVDLElBQUFBLGdCQUFnQixFQUFFLDRCQUFNO0FBQ3RCNEksTUFBQUEsVUFBVSxDQUFDQyxJQUFYLENBQWdCOUksSUFBaEI7QUFDRDtBQUpILEdBRG1CLEVBT25CaUgsMkVBUG1CLENBQXJCO0FBVUEsU0FBTzJCLFlBQVA7QUFDRCxDQVpEOztBQWNBLElBQU1HLFFBQVEsR0FBRyxJQUFJL0MsNERBQUosQ0FBYTtBQUM1QkMsRUFBQUEsZ0JBQWdCLEVBQUVvQiw0RUFEVTtBQUU1Qm5CLEVBQUFBLGlCQUFpQixFQUFFbUIsNkVBQTRCSTtBQUZuQixDQUFiLENBQWpCO0FBS0EsSUFBTXVCLGFBQWEsR0FBRyxJQUFJcEUsa0VBQUosQ0FBbUI7QUFDdkNWLEVBQUFBLGFBQWEsRUFBRTJELDhFQUR3QjtBQUV2Q2hELEVBQUFBLGdCQUFnQixFQUFFLDBCQUFDN0UsSUFBRCxFQUFVO0FBQzFCLFFBQU1xSSxPQUFPLEdBQUdDLFVBQVUsQ0FBQ3RJLElBQUQsQ0FBMUI7QUFDQW9JLElBQUFBLFFBQVEsQ0FBQ0ssT0FBVCxDQUFpQkosT0FBTyxDQUFDRyxPQUFSLEVBQWpCO0FBQ0Q7QUFMc0MsQ0FBbkIsQ0FBdEI7QUFRQSxJQUFNUyxhQUFhLEdBQUcsSUFBSXJFLGtFQUFKLENBQW1CO0FBQ3ZDVixFQUFBQSxhQUFhLEVBQUVtRCxnRkFEd0I7QUFFdkN4QyxFQUFBQSxnQkFBZ0IsRUFBRSwwQkFBQzBCLElBQUQsRUFBVTtBQUMxQndDLElBQUFBLFFBQVEsQ0FBQ0csV0FBVCxDQUFxQjNDLElBQXJCO0FBQ0Q7QUFKc0MsQ0FBbkIsQ0FBdEI7QUFPQSxJQUFNc0MsVUFBVSxHQUFHLElBQUl4RCxrRUFBSixDQUFtQjhCLHNGQUFuQixDQUFuQjtBQUVBLElBQU1nQyxpQkFBaUIsR0FBRyxJQUFJdkgsaUVBQUosQ0FDeEJtRixtRUFEd0IsRUFFeEJNLDRFQUZ3QixDQUExQjtBQUlBLElBQU0rQixnQkFBZ0IsR0FBRyxJQUFJeEgsaUVBQUosQ0FDdkJtRixtRUFEdUIsRUFFdkJjLHdFQUZ1QixDQUF6QjtBQUtBc0IsaUJBQWlCLENBQUNFLGdCQUFsQjtBQUNBRCxnQkFBZ0IsQ0FBQ0MsZ0JBQWpCO0FBRUFMLGFBQWEsQ0FBQ00saUJBQWQ7QUFDQVQsVUFBVSxDQUFDUyxpQkFBWDtBQUNBTCxhQUFhLENBQUNLLGlCQUFkLEcsQ0FFQTs7QUFFQXpCLDhGQUFBLENBQThDLE9BQTlDLEVBQXVELFlBQU07QUFDM0R1QixFQUFBQSxnQkFBZ0IsQ0FBQ0csZUFBakI7QUFDQVAsRUFBQUEsYUFBYSxDQUFDRixJQUFkO0FBQ0QsQ0FIRDtBQUtBekIsbUdBQUEsQ0FBbUQsT0FBbkQsRUFBNEQsWUFBTTtBQUNoRSxNQUFNbUMsV0FBVyxHQUFHVCxRQUFRLENBQUNVLFdBQVQsRUFBcEI7QUFDQXBDLEVBQUFBLHlGQUFBLEdBQTJDbUMsV0FBVyxDQUFDckosSUFBdkQ7QUFDQWtILEVBQUFBLDBGQUFBLEdBQTRDbUMsV0FBVyxDQUFDbEQsS0FBeEQ7QUFFQTZDLEVBQUFBLGlCQUFpQixDQUFDSSxlQUFsQjtBQUNBTixFQUFBQSxhQUFhLENBQUNILElBQWQ7QUFDRCxDQVBELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9BcGkuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm1zLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL3V0aWxzL0luaXRpYWxDYXJkcy5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gb3B0aW9ucy5iYXNlVXJsO1xuICAgIHRoaXMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycztcbiAgfVxuXG4gIC8vICAgZ2V0SW5pdGlhbFByb2ZpbGUoZGF0YSkge1xuICAvLyAgICAgcmV0dXJuIGZldGNoKFxuICAvLyAgICAgICAoYCR7dGhpcy5iYXNlVXJsfS91c2Vycy9tZWAsXG4gIC8vICAgICAgIHtcbiAgLy8gICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgLy8gICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gIC8vICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gIC8vICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAvLyAgICAgICAgIGlmIChyZXMub2spIHtcbiAgLy8gICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJFcnJvclwiKTtcbiAgLy8gICAgICAgfSlcbiAgLy8gICAgICk7XG4gIC8vICAgfVxuXG4gIGdldEluaXRpYWxDYXJkcygpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS9jYXJkc2AsIHtcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJFcnJvclwiKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiY2xhc3MgQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKHsgY2FyZCwgaGFuZGxlUHJldmlld0ltZyB9LCBjYXJkU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9uYW1lID0gY2FyZC5uYW1lO1xuICAgIHRoaXMuX2xpbmsgPSBjYXJkLmxpbms7XG4gICAgdGhpcy5faGFuZGxlUHJldmlld0ltZyA9IGhhbmRsZVByZXZpZXdJbWc7XG5cbiAgICB0aGlzLl9jYXJkVGVtcGxhdGUgPSBjYXJkU2VsZWN0b3I7XG4gIH1cblxuICBfZ2V0VGVtcGxhdGUoKSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFRlbXBsYXRlKVxuICAgICAgLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpXG4gICAgICAuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgdGhpcy5fZWxlbWVudCA9IHRlbXBsYXRlO1xuICB9XG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2VsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltZ1wiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLl9oYW5kbGVQcmV2aWV3SW1nKCkpO1xuXG4gICAgdGhpcy5fZWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fZGVsZXRlLWJ1dHRvblwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLl9oYW5kbGVEZWxldGVJY29uKCkpO1xuXG4gICAgdGhpcy5fbGlrZUJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19saWtlLWJ1dHRvblwiKTtcbiAgICB0aGlzLl9saWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLl9oYW5kbGVMaWtlSWNvbigpKTtcbiAgfVxuXG4gIF9oYW5kbGVMaWtlSWNvbigpIHtcbiAgICB0aGlzLl9saWtlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkX19saWtlLWJ1dHRvbl9hY3RpdmVcIik7XG4gIH1cblxuICBfaGFuZGxlRGVsZXRlSWNvbigpIHtcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xuICAgIHRoaXMuX2NhcmQgPSBudWxsO1xuICB9XG5cbiAgZ2V0VmlldygpIHtcbiAgICB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICBjb25zdCBjYXJkSW1nID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltZ1wiKTtcblxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190ZXh0XCIpLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcbiAgICBjYXJkSW1nLnNyYyA9IHRoaXMuX2xpbms7XG4gICAgY2FyZEltZy5hbHQgPSB0aGlzLl9uYW1lO1xuXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybUVsZW1lbnQpIHtcbiAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gc2V0dGluZ3MuaW5wdXRTZWxlY3RvcjtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHNldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBzZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xuICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IHNldHRpbmdzLmlucHV0RXJyb3JDbGFzcztcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gc2V0dGluZ3MuZXJyb3JDbGFzcztcblxuICAgIHRoaXMuX2Zvcm1FbCA9IGZvcm1FbGVtZW50O1xuICB9XG5cbiAgX3Nob3dJbnB1dEVycm9yID0gKGZvcm1FbCwgaW5wdXQpID0+IHtcbiAgICBjb25zdCBlcnJvclNwYW4gPSBmb3JtRWwucXVlcnlTZWxlY3RvcihgIyR7aW5wdXQuaWR9LWVycm9yYCk7XG4gICAgLy8gYWRkIGVycm9yIG1lc3NhZ2UvY2xhc3NcbiAgICBlcnJvclNwYW4udGV4dENvbnRlbnQgPSBpbnB1dC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICBlcnJvclNwYW4uY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gIH07XG5cbiAgX2hpZGVJbnB1dEVycm9yID0gKGZvcm1FbCwgaW5wdXQpID0+IHtcbiAgICBjb25zdCBlcnJvclNwYW4gPSBmb3JtRWwucXVlcnlTZWxlY3RvcihgIyR7aW5wdXQuaWR9LWVycm9yYCk7XG4gICAgLy8gYWRkIGVycm9yIG1lc3NhZ2UvY2xhc3NcbiAgICBlcnJvclNwYW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGVycm9yU3Bhbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgfTtcblxuICBfY2hlY2tJbnB1dFZhbGlkaXR5ID0gKGZvcm1FbCwgaW5wdXQpID0+IHtcbiAgICBpZiAoaW5wdXQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGZvcm1FbCwgaW5wdXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihmb3JtRWwsIGlucHV0KTtcbiAgICB9XG4gIH07XG5cbiAgX2lzVmFsaWQgPSAoaW5wdXRzKSA9PiB7XG4gICAgcmV0dXJuIGlucHV0cy5ldmVyeSgoaW5wdXQpID0+IGlucHV0LnZhbGlkaXR5LnZhbGlkKTtcbiAgfTtcblxuICBfdG9nZ2xlQnV0dG9uID0gKGZvcm1FbCwgaW5wdXRzKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uRWwgPSBmb3JtRWwucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XG4gICAgaWYgKHRoaXMuX2lzVmFsaWQoaW5wdXRzKSkge1xuICAgICAgYnV0dG9uRWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGJ1dHRvbkVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbkVsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIGJ1dHRvbkVsLmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgfVxuICB9O1xuXG4gIF9zZXRFdmVudExpc3RlbmVycyhmb3JtRWwpIHtcbiAgICBjb25zdCBpbnB1dHMgPSBBcnJheS5mcm9tKGZvcm1FbC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpKTtcbiAgICB0aGlzLl90b2dnbGVCdXR0b24oZm9ybUVsLCBpbnB1dHMpO1xuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgLy8gY2hlY2sgdmFsaWRpdHlcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGZvcm1FbCwgaW5wdXQpO1xuICAgICAgICAvL3RvZ2dsZSBidXR0b25cbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uKGZvcm1FbCwgaW5wdXRzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzZXRWYWxpZGF0aW9uKCkge1xuICAgIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKVxuICAgICk7XG5cbiAgICB0aGlzLl90b2dnbGVCdXR0b24odGhpcy5fZm9ybUVsLCBpbnB1dHMpO1xuXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcih0aGlzLl9mb3JtRWwsIGlucHV0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fZm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycyh0aGlzLl9mb3JtRWwpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0b3I7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKG1vZGFsU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9tb2RhbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHttb2RhbFNlbGVjdG9yfWApO1xuICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX21vZGFsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxcIikgfHxcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxfX2Nsb3NlLWJ1dHRvblwiKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9oYW5kbGVFc2NDbG9zZShlKSB7XG4gICAgaWYgKGUua2V5ID09IFwiRXNjYXBlXCIpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuX21vZGFsRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWxfb3BlblwiKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9tb2RhbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX29wZW5cIik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICB9XG59XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybXMgZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHsgbW9kYWxTZWxlY3RvciwgaGFuZGxlRm9ybVN1Ym1pdCB9KSB7XG4gICAgc3VwZXIobW9kYWxTZWxlY3Rvcik7XG5cbiAgICB0aGlzLl9tb2RhbEZvcm0gPSB0aGlzLl9tb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybVwiKTtcbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDtcbiAgfVxuXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcbiAgICB0aGlzLl9pbnB1dHMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy5fbW9kYWxGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWxfX2Zvcm0taXRlbVwiKVxuICAgICk7XG5cbiAgICB0aGlzLl9mb3JtVmFsdWVzID0ge307XG5cbiAgICB0aGlzLl9pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIHRoaXMuX2Zvcm1WYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLl9mb3JtVmFsdWVzO1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fbW9kYWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fbW9kYWxGb3JtLnJlc2V0KCk7XG5cbiAgICBzdXBlci5jbG9zZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XG4gIG9wZW4oeyBsaW5rLCBuYW1lIH0pIHtcbiAgICB0aGlzLl9tb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fcHJldmlldy1jYXB0aW9uXCIpLnRleHRDb250ZW50ID1cbiAgICAgIG5hbWU7XG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLl9tb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fcHJldmlldy1pbWFnZVwiKTtcbiAgICBpbWFnZS5zcmMgPSBsaW5rO1xuICAgIGltYWdlLmFsdCA9IG5hbWU7XG4gICAgc3VwZXIub3BlbigpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcbiAgY29uc3RydWN0b3IoeyByZW5kZXJlciB9LCBjb250YWluZXJTZWxlY3Rvcikge1xuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y29udGFpbmVyU2VsZWN0b3J9YCk7XG4gIH1cblxuICBhZGRJdGVtKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcbiAgfVxuXG4gIHJlbmRlckl0ZW1zKGl0ZW1zKSB7XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcbiAgY29uc3RydWN0b3IoeyB1c2VyTmFtZVNlbGVjdG9yLCB1c2VyQWJvdXRTZWxlY3RvciB9KSB7XG4gICAgdGhpcy5fdXNlck5hbWVTZWxlY3RvciA9IHVzZXJOYW1lU2VsZWN0b3I7XG4gICAgdGhpcy5fdXNlckFib3V0U2VsZWN0b3IgPSB1c2VyQWJvdXRTZWxlY3RvcjtcbiAgfVxuXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIHRoaXMudXNlckRhdGEgPSB7XG4gICAgICBuYW1lOiB0aGlzLl91c2VyTmFtZVNlbGVjdG9yLnRleHRDb250ZW50LFxuICAgICAgYWJvdXQ6IHRoaXMuX3VzZXJBYm91dFNlbGVjdG9yLnRleHRDb250ZW50LFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy51c2VyRGF0YTtcbiAgfVxuXG4gIHNldFVzZXJJbmZvKGRhdGEpIHtcbiAgICB0aGlzLl91c2VyTmFtZVNlbGVjdG9yLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xuICAgIHRoaXMuX3VzZXJBYm91dFNlbGVjdG9yLnRleHRDb250ZW50ID0gZGF0YS5hYm91dDtcbiAgfVxufVxuIiwiaW1wb3J0IHlvc2VtaXRlSW1nIGZyb20gXCIuLi9pbWFnZXMvWW9zZW1pdGUuanBlZ1wiO1xuaW1wb3J0IGxha2VJbWcgZnJvbSBcIi4uL2ltYWdlcy9MYWtlX0xvdWlzZS5qcGVnXCI7XG5pbXBvcnQgbW91bnRhaW5zSW1nIGZyb20gXCIuLi9pbWFnZXMvQmFsZF9Nb3VudGFpbnMuanBlZ1wiO1xuaW1wb3J0IGxhdGVtYXJJbWcgZnJvbSBcIi4uL2ltYWdlcy9MYXRlbWFyLmpwZWdcIjtcbmltcG9ydCB2YW5vaXNlSW1nIGZyb20gXCIuLi9pbWFnZXMvVmFub2lzZV9OYXRpb25hbF9QYXJrLmpwZWdcIjtcbmltcG9ydCBsYWdvSW1nIGZyb20gXCIuLi9pbWFnZXMvTGFnb19kaV9CcmFpZXMuanBlZ1wiO1xuXG5jb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIllvc2VtaXRlIFZhbGxleVwiLFxuICAgIGxpbms6IHlvc2VtaXRlSW1nLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxuICAgIGxpbms6IGxha2VJbWcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJhbGQgTW91bnRhaW5zXCIsXG4gICAgbGluazogbW91bnRhaW5zSW1nLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYXRlbWFyXCIsXG4gICAgbGluazogbGF0ZW1hckltZyxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXG4gICAgbGluazogdmFub2lzZUltZyxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTGFnbyBkaSBCcmFpZXNcIixcbiAgICBsaW5rOiBsYWdvSW1nLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbENhcmRzO1xuIiwiLy9WQUxJREFUSU9OIFNFVFRJTkdTXG5leHBvcnQgY29uc3QgdmFsaWRhdGlvblNldHRpbmdzID0ge1xuICBmb3JtU2VsZWN0b3I6IFwiLm1vZGFsX19mb3JtXCIsXG4gIGlucHV0U2VsZWN0b3I6IFwiLm1vZGFsX19mb3JtLWl0ZW1cIixcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLm1vZGFsX19zYXZlLWJ1dHRvblwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcIm1vZGFsX19zYXZlLWJ1dHRvbl9kaXNhYmxlZFwiLFxuICBpbnB1dEVycm9yQ2xhc3M6IFwibW9kYWxfX2Zvcm0taXRlbV90eXBlX2Vycm9yXCIsXG4gIGVycm9yQ2xhc3M6IFwibW9kYWxfX2Vycm9yX3Zpc2libGVcIixcbn07XG5cbmV4cG9ydCBjb25zdCBjYXJkQ29uc3RhbnRzID0ge1xuICBjYXJkU2VsZWN0b3I6IFwiI2NhcmQtdGVtcGxhdGVcIixcbiAgcGxhY2VTZWxlY3RvcjogXCJlbGVtZW50c1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IHByZXZpZXdDb25zdGFudHMgPSB7XG4gIHByZXZpZXdNb2RhbFNlbGVjdG9yOiBcIm1vZGFsX3R5cGVfcHJldmlld1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IGVkaXRDb25zdGFudHMgPSB7XG4gIGVkaXRQcm9maWxlRWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1fdHlwZV9lZGl0XCIpLFxuICBwcm9maWxlRWRpdEJ1dHRvbkVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpLFxuICBwcm9maWxlTmFtZUVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX25hbWVcIiksXG4gIHByb2ZpbGVBYm91dEVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2Fib3V0XCIpLFxuICBlZGl0UHJvZmlsZU5hbWVJbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybS1pdGVtX3R5cGVfbmFtZVwiKSxcbiAgZWRpdFByb2ZpbGVBYm91dElucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtLWl0ZW1fdHlwZV9hYm91dFwiKSxcbiAgZWRpdE1vZGFsU2VsZWN0b3I6IFwibW9kYWxfdHlwZV9lZGl0XCIsXG59O1xuXG5leHBvcnQgY29uc3QgYWRkQ29uc3RhbnRzID0ge1xuICBhZGRDYXJkc0VsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtX3R5cGVfYWRkXCIpLFxuICBhZGRDYXJkQnV0dG9uRWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkLWJ1dHRvblwiKSxcbiAgYWRkTW9kYWxTZWxlY3RvcjogXCJtb2RhbF90eXBlX2FkZFwiLFxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXG5pbXBvcnQgaW5pdGlhbENhcmRzIGZyb20gXCIuLi91dGlscy9Jbml0aWFsQ2FyZHMuanNcIjtcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEZvcm1zIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm1zLmpzXCI7XG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcbmltcG9ydCBBcGkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBpLmpzXCI7XG5cbmNvbnN0IGFwaSA9IG5ldyBBcGkoe1xuICBiYXNlVXJsOiBcImh0dHBzOi8vYXJvdW5kLm5vbW9yZXBhcnRpZXMuY28vdjEvZ3JvdXAtMTNcIixcbiAgaGVhZGVyczoge1xuICAgIGF1dGhvcml6YXRpb246IFwiMGY5ODA3N2YtMWIwOC00ODI5LWFlNTctNmY4MWFiNDczODBjXCIsXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gIH0sXG59KTtcblxuYXBpLmdldEluaXRpYWxDYXJkcygpLnRoZW4oKHJlcykgPT4ge1xuICBjb25zdCBjYXJkTGlzdCA9IG5ldyBTZWN0aW9uKFxuICAgIHtcbiAgICAgIHJlbmRlcmVyOiAoY2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdDYXJkID0gY3JlYXRlQ2FyZChjYXJkKTtcbiAgICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBuZXdDYXJkLmdldFZpZXcoKTtcbiAgICAgICAgY2FyZExpc3QuYWRkSXRlbShjYXJkRWxlbWVudCk7XG4gICAgICB9LFxuICAgIH0sXG4gICAgY2FyZENvbnN0YW50cy5wbGFjZVNlbGVjdG9yXG4gICk7XG5cbiAgY2FyZExpc3QucmVuZGVySXRlbXMocmVzKTtcbn0pO1xuXG5hcGkuZ2V0SW5pdGlhbFByb2ZpbGUoKTtcblxuaW1wb3J0IHtcbiAgdmFsaWRhdGlvblNldHRpbmdzLFxuICBjYXJkQ29uc3RhbnRzLFxuICBwcmV2aWV3Q29uc3RhbnRzLFxuICBlZGl0Q29uc3RhbnRzLFxuICBhZGRDb25zdGFudHMsXG59IGZyb20gXCIuLi91dGlscy9jb25zdGFudHMuanNcIjtcblxuY29uc3QgY3JlYXRlQ2FyZCA9IChjYXJkKSA9PiB7XG4gIGNvbnN0IGNhcmRJbnN0YW5jZSA9IG5ldyBDYXJkKFxuICAgIHtcbiAgICAgIGNhcmQsXG4gICAgICBoYW5kbGVQcmV2aWV3SW1nOiAoKSA9PiB7XG4gICAgICAgIGltYWdlTW9kYWwub3BlbihjYXJkKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjYXJkQ29uc3RhbnRzLmNhcmRTZWxlY3RvclxuICApO1xuXG4gIHJldHVybiBjYXJkSW5zdGFuY2U7XG59O1xuXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyh7XG4gIHVzZXJOYW1lU2VsZWN0b3I6IGVkaXRDb25zdGFudHMucHJvZmlsZU5hbWVFbCxcbiAgdXNlckFib3V0U2VsZWN0b3I6IGVkaXRDb25zdGFudHMucHJvZmlsZUFib3V0RWwsXG59KTtcblxuY29uc3QgYWRkSW1hZ2VQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3Jtcyh7XG4gIG1vZGFsU2VsZWN0b3I6IGFkZENvbnN0YW50cy5hZGRNb2RhbFNlbGVjdG9yLFxuICBoYW5kbGVGb3JtU3VibWl0OiAoY2FyZCkgPT4ge1xuICAgIGNvbnN0IG5ld0NhcmQgPSBjcmVhdGVDYXJkKGNhcmQpO1xuICAgIGNhcmRMaXN0LmFkZEl0ZW0obmV3Q2FyZC5nZXRWaWV3KCkpO1xuICB9LFxufSk7XG5cbmNvbnN0IHVzZXJJbmZvUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybXMoe1xuICBtb2RhbFNlbGVjdG9yOiBlZGl0Q29uc3RhbnRzLmVkaXRNb2RhbFNlbGVjdG9yLFxuICBoYW5kbGVGb3JtU3VibWl0OiAoZGF0YSkgPT4ge1xuICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKGRhdGEpO1xuICB9LFxufSk7XG5cbmNvbnN0IGltYWdlTW9kYWwgPSBuZXcgUG9wdXBXaXRoSW1hZ2UocHJldmlld0NvbnN0YW50cy5wcmV2aWV3TW9kYWxTZWxlY3Rvcik7XG5cbmNvbnN0IGVkaXRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoXG4gIHZhbGlkYXRpb25TZXR0aW5ncyxcbiAgZWRpdENvbnN0YW50cy5lZGl0UHJvZmlsZUVsXG4pO1xuY29uc3QgYWRkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKFxuICB2YWxpZGF0aW9uU2V0dGluZ3MsXG4gIGFkZENvbnN0YW50cy5hZGRDYXJkc0VsXG4pO1xuXG5lZGl0Rm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5hZGRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcblxuYWRkSW1hZ2VQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuaW1hZ2VNb2RhbC5zZXRFdmVudExpc3RlbmVycygpO1xudXNlckluZm9Qb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuXG4vLy8vL1BPUFVQIEJVVFRPTlMvLy8vL1xuXG5hZGRDb25zdGFudHMuYWRkQ2FyZEJ1dHRvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGFkZEZvcm1WYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKCk7XG4gIGFkZEltYWdlUG9wdXAub3BlbigpO1xufSk7XG5cbmVkaXRDb25zdGFudHMucHJvZmlsZUVkaXRCdXR0b25FbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBwcm9maWxlRGF0YSA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCk7XG4gIGVkaXRDb25zdGFudHMuZWRpdFByb2ZpbGVOYW1lSW5wdXQudmFsdWUgPSBwcm9maWxlRGF0YS5uYW1lO1xuICBlZGl0Q29uc3RhbnRzLmVkaXRQcm9maWxlQWJvdXRJbnB1dC52YWx1ZSA9IHByb2ZpbGVEYXRhLmFib3V0O1xuXG4gIGVkaXRGb3JtVmFsaWRhdG9yLnJlc2V0VmFsaWRhdGlvbigpO1xuICB1c2VySW5mb1BvcHVwLm9wZW4oKTtcbn0pO1xuIl0sIm5hbWVzIjpbIkFwaSIsIm9wdGlvbnMiLCJiYXNlVXJsIiwiaGVhZGVycyIsImZldGNoIiwidGhlbiIsInJlcyIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJDYXJkIiwiY2FyZFNlbGVjdG9yIiwiY2FyZCIsImhhbmRsZVByZXZpZXdJbWciLCJfbmFtZSIsIm5hbWUiLCJfbGluayIsImxpbmsiLCJfaGFuZGxlUHJldmlld0ltZyIsIl9jYXJkVGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGFuZGxlRGVsZXRlSWNvbiIsIl9saWtlQnV0dG9uIiwiX2hhbmRsZUxpa2VJY29uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicmVtb3ZlIiwiX2NhcmQiLCJfZ2V0VGVtcGxhdGUiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJjYXJkSW1nIiwidGV4dENvbnRlbnQiLCJzcmMiLCJhbHQiLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZ3MiLCJmb3JtRWxlbWVudCIsImZvcm1FbCIsImlucHV0IiwiZXJyb3JTcGFuIiwiaWQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImFkZCIsIl9lcnJvckNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsInZhbGlkaXR5IiwidmFsaWQiLCJfaGlkZUlucHV0RXJyb3IiLCJfc2hvd0lucHV0RXJyb3IiLCJpbnB1dHMiLCJldmVyeSIsImJ1dHRvbkVsIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2lzVmFsaWQiLCJkaXNhYmxlZCIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtRWwiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiX3RvZ2dsZUJ1dHRvbiIsImZvckVhY2giLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIlBvcHVwIiwibW9kYWxTZWxlY3RvciIsIl9tb2RhbEVsZW1lbnQiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwiZSIsInRhcmdldCIsImNvbnRhaW5zIiwiY2xvc2UiLCJrZXkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUG9wdXBXaXRoRm9ybXMiLCJoYW5kbGVGb3JtU3VibWl0IiwiX21vZGFsRm9ybSIsIl9oYW5kbGVGb3JtU3VibWl0IiwiX2lucHV0cyIsIl9mb3JtVmFsdWVzIiwidmFsdWUiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJyZXNldCIsIlBvcHVwV2l0aEltYWdlIiwiaW1hZ2UiLCJTZWN0aW9uIiwiY29udGFpbmVyU2VsZWN0b3IiLCJyZW5kZXJlciIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJlbGVtZW50IiwicHJlcGVuZCIsIml0ZW1zIiwiaXRlbSIsIlVzZXJJbmZvIiwidXNlck5hbWVTZWxlY3RvciIsInVzZXJBYm91dFNlbGVjdG9yIiwiX3VzZXJOYW1lU2VsZWN0b3IiLCJfdXNlckFib3V0U2VsZWN0b3IiLCJ1c2VyRGF0YSIsImFib3V0IiwiZGF0YSIsInlvc2VtaXRlSW1nIiwibGFrZUltZyIsIm1vdW50YWluc0ltZyIsImxhdGVtYXJJbWciLCJ2YW5vaXNlSW1nIiwibGFnb0ltZyIsImluaXRpYWxDYXJkcyIsInZhbGlkYXRpb25TZXR0aW5ncyIsImZvcm1TZWxlY3RvciIsImNhcmRDb25zdGFudHMiLCJwbGFjZVNlbGVjdG9yIiwicHJldmlld0NvbnN0YW50cyIsInByZXZpZXdNb2RhbFNlbGVjdG9yIiwiZWRpdENvbnN0YW50cyIsImVkaXRQcm9maWxlRWwiLCJwcm9maWxlRWRpdEJ1dHRvbkVsIiwicHJvZmlsZU5hbWVFbCIsInByb2ZpbGVBYm91dEVsIiwiZWRpdFByb2ZpbGVOYW1lSW5wdXQiLCJlZGl0UHJvZmlsZUFib3V0SW5wdXQiLCJlZGl0TW9kYWxTZWxlY3RvciIsImFkZENvbnN0YW50cyIsImFkZENhcmRzRWwiLCJhZGRDYXJkQnV0dG9uRWwiLCJhZGRNb2RhbFNlbGVjdG9yIiwiYXBpIiwiYXV0aG9yaXphdGlvbiIsImdldEluaXRpYWxDYXJkcyIsImNhcmRMaXN0IiwibmV3Q2FyZCIsImNyZWF0ZUNhcmQiLCJjYXJkRWxlbWVudCIsImdldFZpZXciLCJhZGRJdGVtIiwicmVuZGVySXRlbXMiLCJnZXRJbml0aWFsUHJvZmlsZSIsImNhcmRJbnN0YW5jZSIsImltYWdlTW9kYWwiLCJvcGVuIiwidXNlckluZm8iLCJhZGRJbWFnZVBvcHVwIiwidXNlckluZm9Qb3B1cCIsInNldFVzZXJJbmZvIiwiZWRpdEZvcm1WYWxpZGF0b3IiLCJhZGRGb3JtVmFsaWRhdG9yIiwiZW5hYmxlVmFsaWRhdGlvbiIsInNldEV2ZW50TGlzdGVuZXJzIiwicmVzZXRWYWxpZGF0aW9uIiwicHJvZmlsZURhdGEiLCJnZXRVc2VySW5mbyJdLCJzb3VyY2VSb290IjoiIn0=