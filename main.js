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

var Api = function Api(options) {
  _classCallCheck(this, Api);

  this.baseUrl = options.baseUrl;
  this.headers = options.headers;
} //   getInitialProfile() {
//     fetch(this.baseUrl, {
//       method: "PATCH",
//       headers: this.headers,
//       body: JSON.stringify({
//         name: "Marie Skłodowska Curie",
//         about: "Physicist and Chemist",
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   }
//   getInitialCards() {
//     fetch(this.baseUrl, {
//       headers: this.headers,
//     });
//     .then((res)=>{
//         if (res.ok){
//             return res.json();
//         }
//         return Promise.reject("Error")
//     })
//   }
;



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
  baseUrl: "https://around.nomoreparties.co/v1/group-13/cards",
  headers: {
    authorization: "0f98077f-1b08-4829-ae57-6f81ab47380c",
    "Content-Type": "application/json"
  }
});
api.getInitialCards().then(function (res) {
  return console.log(res);
});


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlCQUFkO0FBQ0FmLFVBQVUsQ0FBQ2UsaUJBQVg7QUFDQU4sYUFBYSxDQUFDTSxpQkFBZCxHLENBRUE7O0FBRUE1Qiw4RkFBQSxDQUE4QyxPQUE5QyxFQUF1RCxZQUFNO0FBQzNEeUIsRUFBQUEsZ0JBQWdCLENBQUNJLGVBQWpCO0FBQ0FSLEVBQUFBLGFBQWEsQ0FBQ1AsSUFBZDtBQUNELENBSEQ7QUFLQXRCLG1HQUFBLENBQW1ELE9BQW5ELEVBQTRELFlBQU07QUFDaEUsTUFBTXNDLFdBQVcsR0FBR1YsUUFBUSxDQUFDVyxXQUFULEVBQXBCO0FBQ0F2QyxFQUFBQSx5RkFBQSxHQUEyQ3NDLFdBQVcsQ0FBQ3hKLElBQXZEO0FBQ0FrSCxFQUFBQSwwRkFBQSxHQUE0Q3NDLFdBQVcsQ0FBQ3JELEtBQXhEO0FBRUErQyxFQUFBQSxpQkFBaUIsQ0FBQ0ssZUFBbEI7QUFDQVAsRUFBQUEsYUFBYSxDQUFDUixJQUFkO0FBQ0QsQ0FQRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvQXBpLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3Jtcy5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy91dGlscy9Jbml0aWFsQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcmFjdGljdW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuYmFzZVVybCA9IG9wdGlvbnMuYmFzZVVybDtcbiAgICB0aGlzLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XG4gIH1cblxuICAvLyAgIGdldEluaXRpYWxQcm9maWxlKCkge1xuICAvLyAgICAgZmV0Y2godGhpcy5iYXNlVXJsLCB7XG4gIC8vICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAvLyAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gIC8vICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgLy8gICAgICAgICBuYW1lOiBcIk1hcmllIFNrxYJvZG93c2thIEN1cmllXCIsXG4gIC8vICAgICAgICAgYWJvdXQ6IFwiUGh5c2ljaXN0IGFuZCBDaGVtaXN0XCIsXG4gIC8vICAgICAgIH0pLFxuICAvLyAgICAgfSlcbiAgLy8gICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgLy8gICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgfVxuXG4gIC8vICAgZ2V0SW5pdGlhbENhcmRzKCkge1xuICAvLyAgICAgZmV0Y2godGhpcy5iYXNlVXJsLCB7XG4gIC8vICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgLy8gICAgIH0pO1xuICAvLyAgICAgLnRoZW4oKHJlcyk9PntcbiAgLy8gICAgICAgICBpZiAocmVzLm9rKXtcbiAgLy8gICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIkVycm9yXCIpXG4gIC8vICAgICB9KVxuICAvLyAgIH1cbn1cbiIsImNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3Rvcih7IGNhcmQsIGhhbmRsZVByZXZpZXdJbWcgfSwgY2FyZFNlbGVjdG9yKSB7XG4gICAgdGhpcy5fbmFtZSA9IGNhcmQubmFtZTtcbiAgICB0aGlzLl9saW5rID0gY2FyZC5saW5rO1xuICAgIHRoaXMuX2hhbmRsZVByZXZpZXdJbWcgPSBoYW5kbGVQcmV2aWV3SW1nO1xuXG4gICAgdGhpcy5fY2FyZFRlbXBsYXRlID0gY2FyZFNlbGVjdG9yO1xuICB9XG5cbiAgX2dldFRlbXBsYXRlKCkge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmRUZW1wbGF0ZSlcbiAgICAgIC5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZFwiKVxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcblxuICAgIHRoaXMuX2VsZW1lbnQgPSB0ZW1wbGF0ZTtcbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9lbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWdcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5faGFuZGxlUHJldmlld0ltZygpKTtcblxuICAgIHRoaXMuX2VsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2RlbGV0ZS1idXR0b25cIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5faGFuZGxlRGVsZXRlSWNvbigpKTtcblxuICAgIHRoaXMuX2xpa2VCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZS1idXR0b25cIik7XG4gICAgdGhpcy5fbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5faGFuZGxlTGlrZUljb24oKSk7XG4gIH1cblxuICBfaGFuZGxlTGlrZUljb24oKSB7XG4gICAgdGhpcy5fbGlrZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiY2FyZF9fbGlrZS1idXR0b25fYWN0aXZlXCIpO1xuICB9XG5cbiAgX2hhbmRsZURlbGV0ZUljb24oKSB7XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcbiAgICB0aGlzLl9jYXJkID0gbnVsbDtcbiAgfVxuXG4gIGdldFZpZXcoKSB7XG4gICAgdGhpcy5fZ2V0VGVtcGxhdGUoKTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuXG4gICAgY29uc3QgY2FyZEltZyA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWdcIik7XG5cbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fdGV4dFwiKS50ZXh0Q29udGVudCA9IHRoaXMuX25hbWU7XG4gICAgY2FyZEltZy5zcmMgPSB0aGlzLl9saW5rO1xuICAgIGNhcmRJbWcuYWx0ID0gdGhpcy5fbmFtZTtcblxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGZvcm1FbGVtZW50KSB7XG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IHNldHRpbmdzLmlucHV0U2VsZWN0b3I7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBzZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XG5cbiAgICB0aGlzLl9mb3JtRWwgPSBmb3JtRWxlbWVudDtcbiAgfVxuXG4gIF9zaG93SW5wdXRFcnJvciA9IChmb3JtRWwsIGlucHV0KSA9PiB7XG4gICAgY29uc3QgZXJyb3JTcGFuID0gZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0LmlkfS1lcnJvcmApO1xuICAgIC8vIGFkZCBlcnJvciBtZXNzYWdlL2NsYXNzXG4gICAgZXJyb3JTcGFuLnRleHRDb250ZW50ID0gaW5wdXQudmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgZXJyb3JTcGFuLmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICB9O1xuXG4gIF9oaWRlSW5wdXRFcnJvciA9IChmb3JtRWwsIGlucHV0KSA9PiB7XG4gICAgY29uc3QgZXJyb3JTcGFuID0gZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0LmlkfS1lcnJvcmApO1xuICAgIC8vIGFkZCBlcnJvciBtZXNzYWdlL2NsYXNzXG4gICAgZXJyb3JTcGFuLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBlcnJvclNwYW4uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gIH07XG5cbiAgX2NoZWNrSW5wdXRWYWxpZGl0eSA9IChmb3JtRWwsIGlucHV0KSA9PiB7XG4gICAgaWYgKGlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihmb3JtRWwsIGlucHV0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoZm9ybUVsLCBpbnB1dCk7XG4gICAgfVxuICB9O1xuXG4gIF9pc1ZhbGlkID0gKGlucHV0cykgPT4ge1xuICAgIHJldHVybiBpbnB1dHMuZXZlcnkoKGlucHV0KSA9PiBpbnB1dC52YWxpZGl0eS52YWxpZCk7XG4gIH07XG5cbiAgX3RvZ2dsZUJ1dHRvbiA9IChmb3JtRWwsIGlucHV0cykgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbkVsID0gZm9ybUVsLnF1ZXJ5U2VsZWN0b3IodGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xuICAgIGlmICh0aGlzLl9pc1ZhbGlkKGlucHV0cykpIHtcbiAgICAgIGJ1dHRvbkVsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICBidXR0b25FbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b25FbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBidXR0b25FbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgIH1cbiAgfTtcblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoZm9ybUVsKSB7XG4gICAgY29uc3QgaW5wdXRzID0gQXJyYXkuZnJvbShmb3JtRWwucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKSk7XG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uKGZvcm1FbCwgaW5wdXRzKTtcbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgIC8vIGNoZWNrIHZhbGlkaXR5XG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShmb3JtRWwsIGlucHV0KTtcbiAgICAgICAgLy90b2dnbGUgYnV0dG9uXG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvbihmb3JtRWwsIGlucHV0cyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0VmFsaWRhdGlvbigpIHtcbiAgICBjb25zdCBpbnB1dHMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcilcbiAgICApO1xuXG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uKHRoaXMuX2Zvcm1FbCwgaW5wdXRzKTtcblxuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IodGhpcy5fZm9ybUVsLCBpbnB1dCk7XG4gICAgfSk7XG4gIH1cblxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX2Zvcm1FbC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSk7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnModGhpcy5fZm9ybUVsKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdG9yO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihtb2RhbFNlbGVjdG9yKSB7XG4gICAgdGhpcy5fbW9kYWxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bW9kYWxTZWxlY3Rvcn1gKTtcbiAgICB0aGlzLl9oYW5kbGVFc2NDbG9zZSA9IHRoaXMuX2hhbmRsZUVzY0Nsb3NlLmJpbmQodGhpcyk7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9tb2RhbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsXCIpIHx8XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsX19jbG9zZS1idXR0b25cIilcbiAgICAgICkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfaGFuZGxlRXNjQ2xvc2UoZSkge1xuICAgIGlmIChlLmtleSA9PSBcIkVzY2FwZVwiKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLl9tb2RhbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1vZGFsX29wZW5cIik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fbW9kYWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9vcGVuXCIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgfVxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm1zIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcih7IG1vZGFsU2VsZWN0b3IsIGhhbmRsZUZvcm1TdWJtaXQgfSkge1xuICAgIHN1cGVyKG1vZGFsU2VsZWN0b3IpO1xuXG4gICAgdGhpcy5fbW9kYWxGb3JtID0gdGhpcy5fbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XG4gICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XG4gIH1cblxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XG4gICAgdGhpcy5faW5wdXRzID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuX21vZGFsRm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsX19mb3JtLWl0ZW1cIilcbiAgICApO1xuXG4gICAgdGhpcy5fZm9ybVZhbHVlcyA9IHt9O1xuXG4gICAgdGhpcy5faW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICB0aGlzLl9mb3JtVmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5fZm9ybVZhbHVlcztcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX21vZGFsRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuX21vZGFsRm9ybS5yZXNldCgpO1xuXG4gICAgc3VwZXIuY2xvc2UoKTtcbiAgfVxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xuICBvcGVuKHsgbGluaywgbmFtZSB9KSB7XG4gICAgdGhpcy5fbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3ByZXZpZXctY2FwdGlvblwiKS50ZXh0Q29udGVudCA9XG4gICAgICBuYW1lO1xuICAgIGNvbnN0IGltYWdlID0gdGhpcy5fbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3ByZXZpZXctaW1hZ2VcIik7XG4gICAgaW1hZ2Uuc3JjID0gbGluaztcbiAgICBpbWFnZS5hbHQgPSBuYW1lO1xuICAgIHN1cGVyLm9wZW4oKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NvbnRhaW5lclNlbGVjdG9yfWApO1xuICB9XG5cbiAgYWRkSXRlbShlbGVtZW50KSB7XG4gICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoZWxlbWVudCk7XG4gIH1cblxuICByZW5kZXJJdGVtcyhpdGVtcykge1xuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyKGl0ZW0pO1xuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XG4gIGNvbnN0cnVjdG9yKHsgdXNlck5hbWVTZWxlY3RvciwgdXNlckFib3V0U2VsZWN0b3IgfSkge1xuICAgIHRoaXMuX3VzZXJOYW1lU2VsZWN0b3IgPSB1c2VyTmFtZVNlbGVjdG9yO1xuICAgIHRoaXMuX3VzZXJBYm91dFNlbGVjdG9yID0gdXNlckFib3V0U2VsZWN0b3I7XG4gIH1cblxuICBnZXRVc2VySW5mbygpIHtcbiAgICB0aGlzLnVzZXJEYXRhID0ge1xuICAgICAgbmFtZTogdGhpcy5fdXNlck5hbWVTZWxlY3Rvci50ZXh0Q29udGVudCxcbiAgICAgIGFib3V0OiB0aGlzLl91c2VyQWJvdXRTZWxlY3Rvci50ZXh0Q29udGVudCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMudXNlckRhdGE7XG4gIH1cblxuICBzZXRVc2VySW5mbyhkYXRhKSB7XG4gICAgdGhpcy5fdXNlck5hbWVTZWxlY3Rvci50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgICB0aGlzLl91c2VyQWJvdXRTZWxlY3Rvci50ZXh0Q29udGVudCA9IGRhdGEuYWJvdXQ7XG4gIH1cbn1cbiIsImltcG9ydCB5b3NlbWl0ZUltZyBmcm9tIFwiLi4vaW1hZ2VzL1lvc2VtaXRlLmpwZWdcIjtcbmltcG9ydCBsYWtlSW1nIGZyb20gXCIuLi9pbWFnZXMvTGFrZV9Mb3Vpc2UuanBlZ1wiO1xuaW1wb3J0IG1vdW50YWluc0ltZyBmcm9tIFwiLi4vaW1hZ2VzL0JhbGRfTW91bnRhaW5zLmpwZWdcIjtcbmltcG9ydCBsYXRlbWFySW1nIGZyb20gXCIuLi9pbWFnZXMvTGF0ZW1hci5qcGVnXCI7XG5pbXBvcnQgdmFub2lzZUltZyBmcm9tIFwiLi4vaW1hZ2VzL1Zhbm9pc2VfTmF0aW9uYWxfUGFyay5qcGVnXCI7XG5pbXBvcnQgbGFnb0ltZyBmcm9tIFwiLi4vaW1hZ2VzL0xhZ29fZGlfQnJhaWVzLmpwZWdcIjtcblxuY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICB7XG4gICAgbmFtZTogXCJZb3NlbWl0ZSBWYWxsZXlcIixcbiAgICBsaW5rOiB5b3NlbWl0ZUltZyxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTGFrZSBMb3Vpc2VcIixcbiAgICBsaW5rOiBsYWtlSW1nLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJCYWxkIE1vdW50YWluc1wiLFxuICAgIGxpbms6IG1vdW50YWluc0ltZyxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTGF0ZW1hclwiLFxuICAgIGxpbms6IGxhdGVtYXJJbWcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlZhbm9pc2UgTmF0aW9uYWwgUGFya1wiLFxuICAgIGxpbms6IHZhbm9pc2VJbWcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxhZ28gZGkgQnJhaWVzXCIsXG4gICAgbGluazogbGFnb0ltZyxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxDYXJkcztcbiIsIi8vVkFMSURBVElPTiBTRVRUSU5HU1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRpb25TZXR0aW5ncyA9IHtcbiAgZm9ybVNlbGVjdG9yOiBcIi5tb2RhbF9fZm9ybVwiLFxuICBpbnB1dFNlbGVjdG9yOiBcIi5tb2RhbF9fZm9ybS1pdGVtXCIsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5tb2RhbF9fc2F2ZS1idXR0b25cIixcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJtb2RhbF9fc2F2ZS1idXR0b25fZGlzYWJsZWRcIixcbiAgaW5wdXRFcnJvckNsYXNzOiBcIm1vZGFsX19mb3JtLWl0ZW1fdHlwZV9lcnJvclwiLFxuICBlcnJvckNsYXNzOiBcIm1vZGFsX19lcnJvcl92aXNpYmxlXCIsXG59O1xuXG5leHBvcnQgY29uc3QgY2FyZENvbnN0YW50cyA9IHtcbiAgY2FyZFNlbGVjdG9yOiBcIiNjYXJkLXRlbXBsYXRlXCIsXG4gIHBsYWNlU2VsZWN0b3I6IFwiZWxlbWVudHNcIixcbn07XG5cbmV4cG9ydCBjb25zdCBwcmV2aWV3Q29uc3RhbnRzID0ge1xuICBwcmV2aWV3TW9kYWxTZWxlY3RvcjogXCJtb2RhbF90eXBlX3ByZXZpZXdcIixcbn07XG5cbmV4cG9ydCBjb25zdCBlZGl0Q29uc3RhbnRzID0ge1xuICBlZGl0UHJvZmlsZUVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtX3R5cGVfZWRpdFwiKSxcbiAgcHJvZmlsZUVkaXRCdXR0b25FbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0LWJ1dHRvblwiKSxcbiAgcHJvZmlsZU5hbWVFbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19uYW1lXCIpLFxuICBwcm9maWxlQWJvdXRFbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hYm91dFwiKSxcbiAgZWRpdFByb2ZpbGVOYW1lSW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm0taXRlbV90eXBlX25hbWVcIiksXG4gIGVkaXRQcm9maWxlQWJvdXRJbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybS1pdGVtX3R5cGVfYWJvdXRcIiksXG4gIGVkaXRNb2RhbFNlbGVjdG9yOiBcIm1vZGFsX3R5cGVfZWRpdFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGFkZENvbnN0YW50cyA9IHtcbiAgYWRkQ2FyZHNFbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybV90eXBlX2FkZFwiKSxcbiAgYWRkQ2FyZEJ1dHRvbkVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2FkZC1idXR0b25cIiksXG4gIGFkZE1vZGFsU2VsZWN0b3I6IFwibW9kYWxfdHlwZV9hZGRcIixcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuaW1wb3J0IGluaXRpYWxDYXJkcyBmcm9tIFwiLi4vdXRpbHMvSW5pdGlhbENhcmRzLmpzXCI7XG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcbmltcG9ydCBQb3B1cFdpdGhGb3JtcyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3Jtcy5qc1wiO1xuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XG5pbXBvcnQgQXBpIGZyb20gXCIuLi9jb21wb25lbnRzL0FwaS5qc1wiO1xuXG5jb25zdCBhcGkgPSBuZXcgQXBpKHtcbiAgYmFzZVVybDogXCJodHRwczovL2Fyb3VuZC5ub21vcmVwYXJ0aWVzLmNvL3YxL2dyb3VwLTEzL2NhcmRzXCIsXG4gIGhlYWRlcnM6IHtcbiAgICBhdXRob3JpemF0aW9uOiBcIjBmOTgwNzdmLTFiMDgtNDgyOS1hZTU3LTZmODFhYjQ3MzgwY1wiLFxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICB9LFxufSk7XG5cbmFwaS5nZXRJbml0aWFsQ2FyZHMoKS50aGVuKChyZXMpID0+IGNvbnNvbGUubG9nKHJlcykpO1xuXG5pbXBvcnQge1xuICB2YWxpZGF0aW9uU2V0dGluZ3MsXG4gIGNhcmRDb25zdGFudHMsXG4gIHByZXZpZXdDb25zdGFudHMsXG4gIGVkaXRDb25zdGFudHMsXG4gIGFkZENvbnN0YW50cyxcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50cy5qc1wiO1xuXG5jb25zdCBjcmVhdGVDYXJkID0gKGNhcmQpID0+IHtcbiAgY29uc3QgY2FyZEluc3RhbmNlID0gbmV3IENhcmQoXG4gICAge1xuICAgICAgY2FyZCxcbiAgICAgIGhhbmRsZVByZXZpZXdJbWc6ICgpID0+IHtcbiAgICAgICAgaW1hZ2VNb2RhbC5vcGVuKGNhcmQpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIGNhcmRDb25zdGFudHMuY2FyZFNlbGVjdG9yXG4gICk7XG5cbiAgcmV0dXJuIGNhcmRJbnN0YW5jZTtcbn07XG5cbmNvbnN0IGNhcmRMaXN0ID0gbmV3IFNlY3Rpb24oXG4gIHtcbiAgICByZW5kZXJlcjogKGNhcmQpID0+IHtcbiAgICAgIGNvbnN0IG5ld0NhcmQgPSBjcmVhdGVDYXJkKGNhcmQpO1xuICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBuZXdDYXJkLmdldFZpZXcoKTtcbiAgICAgIGNhcmRMaXN0LmFkZEl0ZW0oY2FyZEVsZW1lbnQpO1xuICAgIH0sXG4gIH0sXG4gIGNhcmRDb25zdGFudHMucGxhY2VTZWxlY3RvclxuKTtcblxuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oe1xuICB1c2VyTmFtZVNlbGVjdG9yOiBlZGl0Q29uc3RhbnRzLnByb2ZpbGVOYW1lRWwsXG4gIHVzZXJBYm91dFNlbGVjdG9yOiBlZGl0Q29uc3RhbnRzLnByb2ZpbGVBYm91dEVsLFxufSk7XG5cbmNvbnN0IGFkZEltYWdlUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybXMoe1xuICBtb2RhbFNlbGVjdG9yOiBhZGRDb25zdGFudHMuYWRkTW9kYWxTZWxlY3RvcixcbiAgaGFuZGxlRm9ybVN1Ym1pdDogKGNhcmQpID0+IHtcbiAgICBjb25zdCBuZXdDYXJkID0gY3JlYXRlQ2FyZChjYXJkKTtcbiAgICBjYXJkTGlzdC5hZGRJdGVtKG5ld0NhcmQuZ2V0VmlldygpKTtcbiAgfSxcbn0pO1xuXG5jb25zdCB1c2VySW5mb1BvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm1zKHtcbiAgbW9kYWxTZWxlY3RvcjogZWRpdENvbnN0YW50cy5lZGl0TW9kYWxTZWxlY3RvcixcbiAgaGFuZGxlRm9ybVN1Ym1pdDogKGRhdGEpID0+IHtcbiAgICB1c2VySW5mby5zZXRVc2VySW5mbyhkYXRhKTtcbiAgfSxcbn0pO1xuXG5jb25zdCBpbWFnZU1vZGFsID0gbmV3IFBvcHVwV2l0aEltYWdlKHByZXZpZXdDb25zdGFudHMucHJldmlld01vZGFsU2VsZWN0b3IpO1xuXG5jb25zdCBlZGl0Rm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKFxuICB2YWxpZGF0aW9uU2V0dGluZ3MsXG4gIGVkaXRDb25zdGFudHMuZWRpdFByb2ZpbGVFbFxuKTtcbmNvbnN0IGFkZEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihcbiAgdmFsaWRhdGlvblNldHRpbmdzLFxuICBhZGRDb25zdGFudHMuYWRkQ2FyZHNFbFxuKTtcblxuZWRpdEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuYWRkRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5cbmNhcmRMaXN0LnJlbmRlckl0ZW1zKGluaXRpYWxDYXJkcyk7XG5cbmFkZEltYWdlUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbmltYWdlTW9kYWwuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbnVzZXJJbmZvUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuLy8vLy9QT1BVUCBCVVRUT05TLy8vLy9cblxuYWRkQ29uc3RhbnRzLmFkZENhcmRCdXR0b25FbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBhZGRGb3JtVmFsaWRhdG9yLnJlc2V0VmFsaWRhdGlvbigpO1xuICBhZGRJbWFnZVBvcHVwLm9wZW4oKTtcbn0pO1xuXG5lZGl0Q29uc3RhbnRzLnByb2ZpbGVFZGl0QnV0dG9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgcHJvZmlsZURhdGEgPSB1c2VySW5mby5nZXRVc2VySW5mbygpO1xuICBlZGl0Q29uc3RhbnRzLmVkaXRQcm9maWxlTmFtZUlucHV0LnZhbHVlID0gcHJvZmlsZURhdGEubmFtZTtcbiAgZWRpdENvbnN0YW50cy5lZGl0UHJvZmlsZUFib3V0SW5wdXQudmFsdWUgPSBwcm9maWxlRGF0YS5hYm91dDtcblxuICBlZGl0Rm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcbiAgdXNlckluZm9Qb3B1cC5vcGVuKCk7XG59KTtcbiJdLCJuYW1lcyI6WyJBcGkiLCJvcHRpb25zIiwiYmFzZVVybCIsImhlYWRlcnMiLCJDYXJkIiwiY2FyZFNlbGVjdG9yIiwiY2FyZCIsImhhbmRsZVByZXZpZXdJbWciLCJfbmFtZSIsIm5hbWUiLCJfbGluayIsImxpbmsiLCJfaGFuZGxlUHJldmlld0ltZyIsIl9jYXJkVGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGFuZGxlRGVsZXRlSWNvbiIsIl9saWtlQnV0dG9uIiwiX2hhbmRsZUxpa2VJY29uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicmVtb3ZlIiwiX2NhcmQiLCJfZ2V0VGVtcGxhdGUiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJjYXJkSW1nIiwidGV4dENvbnRlbnQiLCJzcmMiLCJhbHQiLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZ3MiLCJmb3JtRWxlbWVudCIsImZvcm1FbCIsImlucHV0IiwiZXJyb3JTcGFuIiwiaWQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImFkZCIsIl9lcnJvckNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsInZhbGlkaXR5IiwidmFsaWQiLCJfaGlkZUlucHV0RXJyb3IiLCJfc2hvd0lucHV0RXJyb3IiLCJpbnB1dHMiLCJldmVyeSIsImJ1dHRvbkVsIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2lzVmFsaWQiLCJkaXNhYmxlZCIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtRWwiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiX3RvZ2dsZUJ1dHRvbiIsImZvckVhY2giLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIlBvcHVwIiwibW9kYWxTZWxlY3RvciIsIl9tb2RhbEVsZW1lbnQiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwiZSIsInRhcmdldCIsImNvbnRhaW5zIiwiY2xvc2UiLCJrZXkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUG9wdXBXaXRoRm9ybXMiLCJoYW5kbGVGb3JtU3VibWl0IiwiX21vZGFsRm9ybSIsIl9oYW5kbGVGb3JtU3VibWl0IiwiX2lucHV0cyIsIl9mb3JtVmFsdWVzIiwidmFsdWUiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJyZXNldCIsIlBvcHVwV2l0aEltYWdlIiwiaW1hZ2UiLCJTZWN0aW9uIiwiY29udGFpbmVyU2VsZWN0b3IiLCJyZW5kZXJlciIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJlbGVtZW50IiwicHJlcGVuZCIsIml0ZW1zIiwiaXRlbSIsIlVzZXJJbmZvIiwidXNlck5hbWVTZWxlY3RvciIsInVzZXJBYm91dFNlbGVjdG9yIiwiX3VzZXJOYW1lU2VsZWN0b3IiLCJfdXNlckFib3V0U2VsZWN0b3IiLCJ1c2VyRGF0YSIsImFib3V0IiwiZGF0YSIsInlvc2VtaXRlSW1nIiwibGFrZUltZyIsIm1vdW50YWluc0ltZyIsImxhdGVtYXJJbWciLCJ2YW5vaXNlSW1nIiwibGFnb0ltZyIsImluaXRpYWxDYXJkcyIsInZhbGlkYXRpb25TZXR0aW5ncyIsImZvcm1TZWxlY3RvciIsImNhcmRDb25zdGFudHMiLCJwbGFjZVNlbGVjdG9yIiwicHJldmlld0NvbnN0YW50cyIsInByZXZpZXdNb2RhbFNlbGVjdG9yIiwiZWRpdENvbnN0YW50cyIsImVkaXRQcm9maWxlRWwiLCJwcm9maWxlRWRpdEJ1dHRvbkVsIiwicHJvZmlsZU5hbWVFbCIsInByb2ZpbGVBYm91dEVsIiwiZWRpdFByb2ZpbGVOYW1lSW5wdXQiLCJlZGl0UHJvZmlsZUFib3V0SW5wdXQiLCJlZGl0TW9kYWxTZWxlY3RvciIsImFkZENvbnN0YW50cyIsImFkZENhcmRzRWwiLCJhZGRDYXJkQnV0dG9uRWwiLCJhZGRNb2RhbFNlbGVjdG9yIiwiYXBpIiwiYXV0aG9yaXphdGlvbiIsImdldEluaXRpYWxDYXJkcyIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlQ2FyZCIsImNhcmRJbnN0YW5jZSIsImltYWdlTW9kYWwiLCJvcGVuIiwiY2FyZExpc3QiLCJuZXdDYXJkIiwiY2FyZEVsZW1lbnQiLCJnZXRWaWV3IiwiYWRkSXRlbSIsInVzZXJJbmZvIiwiYWRkSW1hZ2VQb3B1cCIsInVzZXJJbmZvUG9wdXAiLCJzZXRVc2VySW5mbyIsImVkaXRGb3JtVmFsaWRhdG9yIiwiYWRkRm9ybVZhbGlkYXRvciIsImVuYWJsZVZhbGlkYXRpb24iLCJyZW5kZXJJdGVtcyIsInNldEV2ZW50TGlzdGVuZXJzIiwicmVzZXRWYWxpZGF0aW9uIiwicHJvZmlsZURhdGEiLCJnZXRVc2VySW5mbyJdLCJzb3VyY2VSb290IjoiIn0=