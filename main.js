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
    key: "_checkerrors",
    value: function _checkerrors(res) {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject("Error");
    }
  }, {
    key: "getInitialProfile",
    value: function getInitialProfile() {
      var _this = this;

      return fetch("".concat(this.baseUrl, "/users/me"), {
        headers: this.headers
      }).then(function (res) {
        return _this._checkerrors(res);
      });
    }
  }, {
    key: "getInitialCards",
    value: function getInitialCards() {
      var _this2 = this;

      return fetch("".concat(this.baseUrl, "/cards"), {
        headers: this.headers
      }).then(function (res) {
        return _this2._checkerrors(res);
      });
    }
  }, {
    key: "fetchCard",
    value: function fetchCard(_ref) {
      var _this3 = this;

      var name = _ref.name,
          link = _ref.link;
      return fetch("".concat(this.baseUrl, "/cards"), {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify({
          name: name,
          link: link
        })
      }).then(function (res) {
        return _this3._checkerrors(res);
      });
    }
  }, {
    key: "fetchProfileInfo",
    value: function fetchProfileInfo(_ref2) {
      var name = _ref2.name,
          about = _ref2.about;
      return fetch("".concat(this.baseUrl, "/users/me"), {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({
          name: name,
          about: about
        })
      }).then(this._checkerrors(res));
    }
  }, {
    key: "changeProfileAvatar",
    value: function changeProfileAvatar(_ref3) {
      var _this4 = this;

      var avatar = _ref3.avatar;
      return fetch("".concat(this.baseUrl, "/users/me/avatar"), {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({
          avatar: avatar
        })
      }).then(function (res) {
        return _this4._checkerrors(res);
      });
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(cardId) {
      var _this5 = this;

      return fetch("".concat(this.baseUrl, "/cards/").concat(cardId), {
        method: "DELETE",
        headers: this.headers
      }).then(function (res) {
        return _this5._checkerrors(res);
      });
    }
  }, {
    key: "likeCard",
    value: function likeCard(cardId) {
      var _this6 = this;

      return fetch("".concat(this.baseUrl, "/cards/likes/").concat(cardId), {
        method: "PUT",
        headers: this.headers
      }).then(function (res) {
        return _this6._checkerrors(res);
      });
    }
  }, {
    key: "removeLike",
    value: function removeLike(cardId) {
      var _this7 = this;

      return fetch("".concat(this.baseUrl, "/cards/likes/").concat(cardId), {
        method: "DELETE",
        headers: this.headers
      }).then(function (res) {
        return _this7._checkerrors(res);
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
        handlePreviewImg = _ref.handlePreviewImg,
        handleDeleteIcon = _ref.handleDeleteIcon,
        handleLikeButton = _ref.handleLikeButton;

    _classCallCheck(this, Card);

    this._userId = "3aaa3ba0eaedbec067155932";
    this._name = card.name;
    this._link = card.link;
    this._likedCard = card.likes;
    this._numberLikes = card.likes.length;
    this._handlePreviewImg = handlePreviewImg;
    this._handleDeleteIcon = handleDeleteIcon;
    this._handleLikeButton = handleLikeButton;
    this._ownerId = card.owner._id;
    this._cardId = card._id;
    this._cardTemplate = cardSelector;
  }

  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var template = document.querySelector(this._cardTemplate).content.querySelector(".card").cloneNode(true);
      this._element = template;
    }
  }, {
    key: "_checkLikes",
    value: function _checkLikes(card) {
      this._element.querySelector(".card__text_likes-number").textContent = card.likes.length;
    }
  }, {
    key: "_liked",
    value: function _liked(e) {
      var _this = this;

      this._handleLikeButton(!e.target.classList.contains("card__like-button_active")).then(function (card) {
        e.target.classList.toggle("card__like-button_active");

        _this._checkLikes(card);
      });
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this2 = this;

      this._element.querySelector(".card__img").addEventListener("click", function () {
        return _this2._handlePreviewImg();
      });

      this._deleteButton = this._element.querySelector(".card__delete-button");

      if (this._ownerId === this._userId) {
        this._deleteButton.addEventListener("click", function (evt) {
          _this2._handleDeleteIcon(evt);
        });
      } else {
        this._deleteButton.remove();
      }

      this._likeButton = this._element.querySelector(".card__like-button");

      this._likeButton.addEventListener("click", function (e) {
        _this2._liked(e);
      });
    }
  }, {
    key: "_getInitalLikes",
    value: function _getInitalLikes() {
      var _this3 = this;

      var userLikeCard = this._likedCard.some(function (item) {
        return item._id === _this3._userId;
      });

      if (userLikeCard) {
        this._likeButton.classList.add("card__like-button_active");
      }

      this._element.querySelector(".card__text_likes-number").textContent = this._numberLikes;
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

      this._getInitalLikes(cardImg);

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

/***/ "./src/components/PopupDeleteCard.js":
/*!*******************************************!*\
  !*** ./src/components/PopupDeleteCard.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupDeleteCard)
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupDeleteCard = /*#__PURE__*/function (_Popup) {
  _inherits(PopupDeleteCard, _Popup);

  var _super = _createSuper(PopupDeleteCard);

  function PopupDeleteCard(_ref) {
    var _this;

    var modalSelector = _ref.modalSelector,
        handleFormSubmit = _ref.handleFormSubmit;

    _classCallCheck(this, PopupDeleteCard);

    _this = _super.call(this, modalSelector);
    _this._modalForm = _this._modalElement.querySelector(".modal__form");
    _this._handleFormSubmit = handleFormSubmit;
    _this._button = _this._modalElement.querySelector(".modal__save-button");
    return _this;
  }

  _createClass(PopupDeleteCard, [{
    key: "open",
    value: function open(evt, cardId) {
      _get(_getPrototypeOf(PopupDeleteCard.prototype), "open", this).call(this);

      this._cardId = cardId;
      this._card = evt.target.parentElement;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      this._modalForm.addEventListener("submit", function (e) {
        e.preventDefault();

        _this2._handleFormSubmit(_this2._card, _this2._cardId);
      });

      _get(_getPrototypeOf(PopupDeleteCard.prototype), "setEventListeners", this).call(this);
    }
  }]);

  return PopupDeleteCard;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.default);



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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

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
    _this._button = _this._modalElement.querySelector(".modal__save-button");
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

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
        userAboutSelector = _ref.userAboutSelector,
        userAvatarSelector = _ref.userAvatarSelector;

    _classCallCheck(this, UserInfo);

    this._userNameSelector = userNameSelector;
    this._userAboutSelector = userAboutSelector;
    this._userAvatarSelector = userAvatarSelector;
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      this.userData = {
        name: this._userNameSelector.textContent,
        about: this._userAboutSelector.textContent,
        avatar: this._userAvatarSelector.src
      };
      return this.userData;
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(data) {
      this._userNameSelector.textContent = data.name;
      this._userAboutSelector.textContent = data.about;
      this._userAvatarSelector.src = data.avatar;
      this._userId = data._id;
    }
  }, {
    key: "setAvatarImg",
    value: function setAvatarImg(data) {
      this._userAvatarSelector.src = data.avatar;
    }
  }]);

  return UserInfo;
}();



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
  profileAvatarEl: document.querySelector(".profile__avatar"),
  profileAvatarForm: document.querySelector(".modal__form_type_avatar"),
  profileAvatarButtonEl: document.querySelector(".profile__avatar-button"),
  editProfileNameInput: document.querySelector(".modal__form-item_type_name"),
  editProfileAboutInput: document.querySelector(".modal__form-item_type_about"),
  editModalSelector: "modal_type_edit",
  avatarModalSelector: "modal_type_avatar"
};
var addConstants = {
  addCardsEl: document.querySelector(".modal__form_type_add"),
  addCardButtonEl: document.querySelector(".profile__add-button"),
  addModalSelector: "modal_type_add",
  deleteCardsEl: "modal_type_delete"
};

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithForms_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithForms.js */ "./src/components/PopupWithForms.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
/* harmony import */ var _components_PopupDeleteCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PopupDeleteCard */ "./src/components/PopupDeleteCard.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");











function loadingHandler(loading, modalSelector, text) {
  var modal = document.querySelector(".".concat(modalSelector));

  if (loading) {
    modal.querySelector(".modal__save-button").textContent = text;
  } else {
    modal.querySelector(".modal__save-button").textContent = text;
  }
}

var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_7__.default({
  baseUrl: "https://around.nomoreparties.co/v1/group-13",
  headers: {
    authorization: "0f98077f-1b08-4829-ae57-6f81ab47380c",
    "Content-Type": "application/json"
  }
});
api.getInitialProfile().then(function (res) {
  userInfo.setUserInfo(res);
}).catch(function (err) {
  console.log("Error:".concat(err));
});
api.getInitialCards().then(function (res) {
  cardList.renderItems(res.reverse());
}).catch(function (err) {
  console.log("Error:".concat(err));
});

var createCard = function createCard(card) {
  var cardInstance = new _components_Card_js__WEBPACK_IMPORTED_MODULE_2__.default({
    card: card,
    handlePreviewImg: function handlePreviewImg() {
      imageModal.open(card);
    },
    handleDeleteIcon: function handleDeleteIcon(evt) {
      deleteCard.open(evt, card._id);
    },
    handleLikeButton: function handleLikeButton(buttonLiked) {
      return buttonLiked ? api.likeCard(card._id) : api.removeLike(card._id);
    }
  }, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.cardConstants.cardSelector);
  return cardInstance;
};

var cardList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_3__.default({
  renderer: function renderer(card) {
    var newCard = createCard(card);
    var cardElement = newCard.getView();
    cardList.addItem(cardElement);
  }
}, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.cardConstants.placeSelector);
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__.default({
  userNameSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.editConstants.profileNameEl,
  userAboutSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.editConstants.profileAboutEl,
  userAvatarSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.editConstants.profileAvatarEl
});
var addImagePopup = new _components_PopupWithForms_js__WEBPACK_IMPORTED_MODULE_5__.default({
  modalSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.addConstants.addModalSelector,
  handleFormSubmit: function handleFormSubmit(card) {
    loadingHandler(true, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.addConstants.addModalSelector, "Creating...");
    api.fetchCard(card).then(function (cardData) {
      var newCard = createCard(cardData);
      cardList.addItem(newCard.getView());
      addImagePopup.close();
    }).catch(function (err) {
      console.log("Error:".concat(err));
    }).finally(function () {
      loadingHandler(false, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.addConstants.addModalSelector, "Create");
    });
  }
});
var changeProfileAvatarPopup = new _components_PopupWithForms_js__WEBPACK_IMPORTED_MODULE_5__.default({
  modalSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.editConstants.avatarModalSelector,
  handleFormSubmit: function handleFormSubmit(avatar) {
    loadingHandler(true, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.editConstants.avatarModalSelector, "Changing...");
    api.changeProfileAvatar(avatar).then(function (avatarData) {
      userInfo.setAvatarImg(avatarData);
      changeProfileAvatarPopup.close();
    }).catch(function (err) {
      console.log("Error:".concat(err));
    }).finally(function () {
      loadingHandler(false, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.editConstants.avatarModalSelector, "Change");
    });
  }
});
var deleteCard = new _components_PopupDeleteCard__WEBPACK_IMPORTED_MODULE_8__.default({
  modalSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.addConstants.deleteCardsEl,
  handleFormSubmit: function handleFormSubmit(cardElement, cardId) {
    loadingHandler(true, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.addConstants.deleteCardsEl, "Deleting...");
    api.deleteCard(cardId).then(function () {
      cardElement.remove();
      deleteCard.close();
    }).catch(function (err) {
      console.log("Error:".concat(err));
    }).finally(function () {
      loadingHandler(false, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.addConstants.deleteCardsEl, "Yes");
    });
  }
});
var userInfoPopup = new _components_PopupWithForms_js__WEBPACK_IMPORTED_MODULE_5__.default({
  modalSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.editConstants.editModalSelector,
  handleFormSubmit: function handleFormSubmit(profile) {
    loadingHandler(true, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.editConstants.editModalSelector, "Updating...");
    api.fetchProfileInfo(profile).then(function (profileData) {
      userInfo.setUserInfo(profileData);
      userInfoPopup.close();
    }).catch(function (err) {
      console.log("Error:".concat(err));
    }).finally(function () {
      loadingHandler(false, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.editConstants.editModalSelector, "Update");
    });
  }
});
var imageModal = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.previewConstants.previewModalSelector);
var editFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.validationSettings, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.editConstants.editProfileEl);
var addFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.validationSettings, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.addConstants.addCardsEl);
var avatarFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.validationSettings, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.editConstants.profileAvatarForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
avatarFormValidator.enableValidation();
addImagePopup.setEventListeners();
imageModal.setEventListeners();
userInfoPopup.setEventListeners();
deleteCard.setEventListeners();
changeProfileAvatarPopup.setEventListeners(); /////POPUP BUTTONS/////

_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.addConstants.addCardButtonEl.addEventListener("click", function () {
  addFormValidator.resetValidation();
  addImagePopup.open();
});
_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.editConstants.profileAvatarButtonEl.addEventListener("click", function () {
  avatarFormValidator.resetValidation();
  changeProfileAvatarPopup.open();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQSwwRkFBQSxHQUE0Q3lELFdBQVcsQ0FBQ2hNLEtBQXhEO0FBRUFpTSxFQUFBQSxpQkFBaUIsQ0FBQ0ssZUFBbEI7QUFDQVQsRUFBQUEsYUFBYSxDQUFDakIsSUFBZDtBQUNELENBUEQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBEZWxldGVDYXJkLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm1zLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcmFjdGljdW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gb3B0aW9ucy5iYXNlVXJsO1xuICAgIHRoaXMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycztcbiAgfVxuXG4gIF9jaGVja2Vycm9ycyhyZXMpIHtcbiAgICBpZiAocmVzLm9rKSB7XG4gICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiRXJyb3JcIik7XG4gIH1cblxuICBnZXRJbml0aWFsUHJvZmlsZSgpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS91c2Vycy9tZWAsIHtcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHRoaXMuX2NoZWNrZXJyb3JzKHJlcykpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbENhcmRzKCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VVcmx9L2NhcmRzYCwge1xuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgIH0pLnRoZW4oKHJlcykgPT4gdGhpcy5fY2hlY2tlcnJvcnMocmVzKSk7XG4gIH1cblxuICBmZXRjaENhcmQoeyBuYW1lLCBsaW5rIH0pIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS9jYXJkc2AsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWUsIGxpbmsgfSksXG4gICAgfSkudGhlbigocmVzKSA9PiB0aGlzLl9jaGVja2Vycm9ycyhyZXMpKTtcbiAgfVxuXG4gIGZldGNoUHJvZmlsZUluZm8oeyBuYW1lLCBhYm91dCB9KSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuYmFzZVVybH0vdXNlcnMvbWVgLCB7XG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZTogbmFtZSwgYWJvdXQ6IGFib3V0IH0pLFxuICAgIH0pLnRoZW4odGhpcy5fY2hlY2tlcnJvcnMocmVzKSk7XG4gIH1cblxuICBjaGFuZ2VQcm9maWxlQXZhdGFyKHsgYXZhdGFyIH0pIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS91c2Vycy9tZS9hdmF0YXJgLCB7XG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYXZhdGFyOiBhdmF0YXIgfSksXG4gICAgfSkudGhlbigocmVzKSA9PiB0aGlzLl9jaGVja2Vycm9ycyhyZXMpKTtcbiAgfVxuXG4gIGRlbGV0ZUNhcmQoY2FyZElkKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuYmFzZVVybH0vY2FyZHMvJHtjYXJkSWR9YCwge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgIH0pLnRoZW4oKHJlcykgPT4gdGhpcy5fY2hlY2tlcnJvcnMocmVzKSk7XG4gIH1cblxuICBsaWtlQ2FyZChjYXJkSWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS9jYXJkcy9saWtlcy8ke2NhcmRJZH1gLCB7XG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgfSkudGhlbigocmVzKSA9PiB0aGlzLl9jaGVja2Vycm9ycyhyZXMpKTtcbiAgfVxuXG4gIHJlbW92ZUxpa2UoY2FyZElkKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuYmFzZVVybH0vY2FyZHMvbGlrZXMvJHtjYXJkSWR9YCwge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgIH0pLnRoZW4oKHJlcykgPT4gdGhpcy5fY2hlY2tlcnJvcnMocmVzKSk7XG4gIH1cbn1cbiIsImNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihcbiAgICB7IGNhcmQsIGhhbmRsZVByZXZpZXdJbWcsIGhhbmRsZURlbGV0ZUljb24sIGhhbmRsZUxpa2VCdXR0b24gfSxcbiAgICBjYXJkU2VsZWN0b3JcbiAgKSB7XG4gICAgdGhpcy5fdXNlcklkID0gXCIzYWFhM2JhMGVhZWRiZWMwNjcxNTU5MzJcIjtcbiAgICB0aGlzLl9uYW1lID0gY2FyZC5uYW1lO1xuICAgIHRoaXMuX2xpbmsgPSBjYXJkLmxpbms7XG4gICAgdGhpcy5fbGlrZWRDYXJkID0gY2FyZC5saWtlcztcbiAgICB0aGlzLl9udW1iZXJMaWtlcyA9IGNhcmQubGlrZXMubGVuZ3RoO1xuICAgIHRoaXMuX2hhbmRsZVByZXZpZXdJbWcgPSBoYW5kbGVQcmV2aWV3SW1nO1xuICAgIHRoaXMuX2hhbmRsZURlbGV0ZUljb24gPSBoYW5kbGVEZWxldGVJY29uO1xuICAgIHRoaXMuX2hhbmRsZUxpa2VCdXR0b24gPSBoYW5kbGVMaWtlQnV0dG9uO1xuICAgIHRoaXMuX293bmVySWQgPSBjYXJkLm93bmVyLl9pZDtcbiAgICB0aGlzLl9jYXJkSWQgPSBjYXJkLl9pZDtcblxuICAgIHRoaXMuX2NhcmRUZW1wbGF0ZSA9IGNhcmRTZWxlY3RvcjtcbiAgfVxuXG4gIF9nZXRUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9jYXJkVGVtcGxhdGUpXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIilcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICB0aGlzLl9lbGVtZW50ID0gdGVtcGxhdGU7XG4gIH1cblxuICBfY2hlY2tMaWtlcyhjYXJkKSB7XG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RleHRfbGlrZXMtbnVtYmVyXCIpLnRleHRDb250ZW50ID1cbiAgICAgIGNhcmQubGlrZXMubGVuZ3RoO1xuICB9XG5cbiAgX2xpa2VkKGUpIHtcbiAgICB0aGlzLl9oYW5kbGVMaWtlQnV0dG9uKFxuICAgICAgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNhcmRfX2xpa2UtYnV0dG9uX2FjdGl2ZVwiKVxuICAgICkudGhlbigoY2FyZCkgPT4ge1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImNhcmRfX2xpa2UtYnV0dG9uX2FjdGl2ZVwiKTtcbiAgICAgIHRoaXMuX2NoZWNrTGlrZXMoY2FyZCk7XG4gICAgfSk7XG4gIH1cblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fZWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1nXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuX2hhbmRsZVByZXZpZXdJbWcoKSk7XG5cbiAgICB0aGlzLl9kZWxldGVCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fZGVsZXRlLWJ1dHRvblwiKTtcbiAgICBpZiAodGhpcy5fb3duZXJJZCA9PT0gdGhpcy5fdXNlcklkKSB7XG4gICAgICB0aGlzLl9kZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcbiAgICAgICAgdGhpcy5faGFuZGxlRGVsZXRlSWNvbihldnQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbi5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9saWtlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2xpa2UtYnV0dG9uXCIpO1xuICAgIHRoaXMuX2xpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICB0aGlzLl9saWtlZChlKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9nZXRJbml0YWxMaWtlcygpIHtcbiAgICBjb25zdCB1c2VyTGlrZUNhcmQgPSB0aGlzLl9saWtlZENhcmQuc29tZShcbiAgICAgIChpdGVtKSA9PiBpdGVtLl9pZCA9PT0gdGhpcy5fdXNlcklkXG4gICAgKTtcbiAgICBpZiAodXNlckxpa2VDYXJkKSB7XG4gICAgICB0aGlzLl9saWtlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjYXJkX19saWtlLWJ1dHRvbl9hY3RpdmVcIik7XG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RleHRfbGlrZXMtbnVtYmVyXCIpLnRleHRDb250ZW50ID1cbiAgICAgIHRoaXMuX251bWJlckxpa2VzO1xuICB9XG5cbiAgZ2V0VmlldygpIHtcbiAgICB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICBjb25zdCBjYXJkSW1nID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltZ1wiKTtcblxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190ZXh0XCIpLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcbiAgICBjYXJkSW1nLnNyYyA9IHRoaXMuX2xpbms7XG4gICAgY2FyZEltZy5hbHQgPSB0aGlzLl9uYW1lO1xuICAgIHRoaXMuX2dldEluaXRhbExpa2VzKGNhcmRJbWcpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybUVsZW1lbnQpIHtcbiAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gc2V0dGluZ3MuaW5wdXRTZWxlY3RvcjtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHNldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBzZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xuICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IHNldHRpbmdzLmlucHV0RXJyb3JDbGFzcztcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gc2V0dGluZ3MuZXJyb3JDbGFzcztcblxuICAgIHRoaXMuX2Zvcm1FbCA9IGZvcm1FbGVtZW50O1xuICB9XG5cbiAgX3Nob3dJbnB1dEVycm9yID0gKGZvcm1FbCwgaW5wdXQpID0+IHtcbiAgICBjb25zdCBlcnJvclNwYW4gPSBmb3JtRWwucXVlcnlTZWxlY3RvcihgIyR7aW5wdXQuaWR9LWVycm9yYCk7XG4gICAgLy8gYWRkIGVycm9yIG1lc3NhZ2UvY2xhc3NcbiAgICBlcnJvclNwYW4udGV4dENvbnRlbnQgPSBpbnB1dC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICBlcnJvclNwYW4uY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gIH07XG5cbiAgX2hpZGVJbnB1dEVycm9yID0gKGZvcm1FbCwgaW5wdXQpID0+IHtcbiAgICBjb25zdCBlcnJvclNwYW4gPSBmb3JtRWwucXVlcnlTZWxlY3RvcihgIyR7aW5wdXQuaWR9LWVycm9yYCk7XG4gICAgLy8gYWRkIGVycm9yIG1lc3NhZ2UvY2xhc3NcbiAgICBlcnJvclNwYW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGVycm9yU3Bhbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgfTtcblxuICBfY2hlY2tJbnB1dFZhbGlkaXR5ID0gKGZvcm1FbCwgaW5wdXQpID0+IHtcbiAgICBpZiAoaW5wdXQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGZvcm1FbCwgaW5wdXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihmb3JtRWwsIGlucHV0KTtcbiAgICB9XG4gIH07XG5cbiAgX2lzVmFsaWQgPSAoaW5wdXRzKSA9PiB7XG4gICAgcmV0dXJuIGlucHV0cy5ldmVyeSgoaW5wdXQpID0+IGlucHV0LnZhbGlkaXR5LnZhbGlkKTtcbiAgfTtcblxuICBfdG9nZ2xlQnV0dG9uID0gKGZvcm1FbCwgaW5wdXRzKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uRWwgPSBmb3JtRWwucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XG4gICAgaWYgKHRoaXMuX2lzVmFsaWQoaW5wdXRzKSkge1xuICAgICAgYnV0dG9uRWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGJ1dHRvbkVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbkVsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIGJ1dHRvbkVsLmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgfVxuICB9O1xuXG4gIF9zZXRFdmVudExpc3RlbmVycyhmb3JtRWwpIHtcbiAgICBjb25zdCBpbnB1dHMgPSBBcnJheS5mcm9tKGZvcm1FbC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpKTtcbiAgICB0aGlzLl90b2dnbGVCdXR0b24oZm9ybUVsLCBpbnB1dHMpO1xuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgLy8gY2hlY2sgdmFsaWRpdHlcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGZvcm1FbCwgaW5wdXQpO1xuICAgICAgICAvL3RvZ2dsZSBidXR0b25cbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uKGZvcm1FbCwgaW5wdXRzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzZXRWYWxpZGF0aW9uKCkge1xuICAgIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKVxuICAgICk7XG5cbiAgICB0aGlzLl90b2dnbGVCdXR0b24odGhpcy5fZm9ybUVsLCBpbnB1dHMpO1xuXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcih0aGlzLl9mb3JtRWwsIGlucHV0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fZm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycyh0aGlzLl9mb3JtRWwpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0b3I7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKG1vZGFsU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9tb2RhbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHttb2RhbFNlbGVjdG9yfWApO1xuICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX21vZGFsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxcIikgfHxcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxfX2Nsb3NlLWJ1dHRvblwiKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9oYW5kbGVFc2NDbG9zZShlKSB7XG4gICAgaWYgKGUua2V5ID09IFwiRXNjYXBlXCIpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuX21vZGFsRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWxfb3BlblwiKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9tb2RhbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX29wZW5cIik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICB9XG59XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBEZWxldGVDYXJkIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcih7IG1vZGFsU2VsZWN0b3IsIGhhbmRsZUZvcm1TdWJtaXQgfSkge1xuICAgIHN1cGVyKG1vZGFsU2VsZWN0b3IpO1xuXG4gICAgdGhpcy5fbW9kYWxGb3JtID0gdGhpcy5fbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XG4gICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XG4gICAgdGhpcy5fYnV0dG9uID0gdGhpcy5fbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3NhdmUtYnV0dG9uXCIpO1xuICB9XG5cbiAgb3BlbihldnQsIGNhcmRJZCkge1xuICAgIHN1cGVyLm9wZW4oKTtcbiAgICB0aGlzLl9jYXJkSWQgPSBjYXJkSWQ7XG4gICAgdGhpcy5fY2FyZCA9IGV2dC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX21vZGFsRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KHRoaXMuX2NhcmQsIHRoaXMuX2NhcmRJZCk7XG4gICAgfSk7XG5cbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xuICB9XG59XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybXMgZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHsgbW9kYWxTZWxlY3RvciwgaGFuZGxlRm9ybVN1Ym1pdCB9KSB7XG4gICAgc3VwZXIobW9kYWxTZWxlY3Rvcik7XG5cbiAgICB0aGlzLl9tb2RhbEZvcm0gPSB0aGlzLl9tb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybVwiKTtcbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDtcbiAgICB0aGlzLl9idXR0b24gPSB0aGlzLl9tb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fc2F2ZS1idXR0b25cIik7XG4gIH1cblxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XG4gICAgdGhpcy5faW5wdXRzID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuX21vZGFsRm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsX19mb3JtLWl0ZW1cIilcbiAgICApO1xuXG4gICAgdGhpcy5fZm9ybVZhbHVlcyA9IHt9O1xuXG4gICAgdGhpcy5faW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICB0aGlzLl9mb3JtVmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5fZm9ybVZhbHVlcztcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX21vZGFsRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xuICAgIH0pO1xuXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuX21vZGFsRm9ybS5yZXNldCgpO1xuXG4gICAgc3VwZXIuY2xvc2UoKTtcbiAgfVxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xuICBvcGVuKHsgbGluaywgbmFtZSB9KSB7XG4gICAgdGhpcy5fbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3ByZXZpZXctY2FwdGlvblwiKS50ZXh0Q29udGVudCA9XG4gICAgICBuYW1lO1xuICAgIGNvbnN0IGltYWdlID0gdGhpcy5fbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3ByZXZpZXctaW1hZ2VcIik7XG4gICAgaW1hZ2Uuc3JjID0gbGluaztcbiAgICBpbWFnZS5hbHQgPSBuYW1lO1xuICAgIHN1cGVyLm9wZW4oKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NvbnRhaW5lclNlbGVjdG9yfWApO1xuICB9XG5cbiAgYWRkSXRlbShlbGVtZW50KSB7XG4gICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoZWxlbWVudCk7XG4gIH1cblxuICByZW5kZXJJdGVtcyhpdGVtcykge1xuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyKGl0ZW0pO1xuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XG4gIGNvbnN0cnVjdG9yKHsgdXNlck5hbWVTZWxlY3RvciwgdXNlckFib3V0U2VsZWN0b3IsIHVzZXJBdmF0YXJTZWxlY3RvciB9KSB7XG4gICAgdGhpcy5fdXNlck5hbWVTZWxlY3RvciA9IHVzZXJOYW1lU2VsZWN0b3I7XG4gICAgdGhpcy5fdXNlckFib3V0U2VsZWN0b3IgPSB1c2VyQWJvdXRTZWxlY3RvcjtcbiAgICB0aGlzLl91c2VyQXZhdGFyU2VsZWN0b3IgPSB1c2VyQXZhdGFyU2VsZWN0b3I7XG4gIH1cblxuICBnZXRVc2VySW5mbygpIHtcbiAgICB0aGlzLnVzZXJEYXRhID0ge1xuICAgICAgbmFtZTogdGhpcy5fdXNlck5hbWVTZWxlY3Rvci50ZXh0Q29udGVudCxcbiAgICAgIGFib3V0OiB0aGlzLl91c2VyQWJvdXRTZWxlY3Rvci50ZXh0Q29udGVudCxcbiAgICAgIGF2YXRhcjogdGhpcy5fdXNlckF2YXRhclNlbGVjdG9yLnNyYyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMudXNlckRhdGE7XG4gIH1cblxuICBzZXRVc2VySW5mbyhkYXRhKSB7XG4gICAgdGhpcy5fdXNlck5hbWVTZWxlY3Rvci50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgICB0aGlzLl91c2VyQWJvdXRTZWxlY3Rvci50ZXh0Q29udGVudCA9IGRhdGEuYWJvdXQ7XG4gICAgdGhpcy5fdXNlckF2YXRhclNlbGVjdG9yLnNyYyA9IGRhdGEuYXZhdGFyO1xuICAgIHRoaXMuX3VzZXJJZCA9IGRhdGEuX2lkO1xuICB9XG5cbiAgc2V0QXZhdGFySW1nKGRhdGEpIHtcbiAgICB0aGlzLl91c2VyQXZhdGFyU2VsZWN0b3Iuc3JjID0gZGF0YS5hdmF0YXI7XG4gIH1cbn1cbiIsIi8vVkFMSURBVElPTiBTRVRUSU5HU1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRpb25TZXR0aW5ncyA9IHtcbiAgZm9ybVNlbGVjdG9yOiBcIi5tb2RhbF9fZm9ybVwiLFxuICBpbnB1dFNlbGVjdG9yOiBcIi5tb2RhbF9fZm9ybS1pdGVtXCIsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5tb2RhbF9fc2F2ZS1idXR0b25cIixcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJtb2RhbF9fc2F2ZS1idXR0b25fZGlzYWJsZWRcIixcbiAgaW5wdXRFcnJvckNsYXNzOiBcIm1vZGFsX19mb3JtLWl0ZW1fdHlwZV9lcnJvclwiLFxuICBlcnJvckNsYXNzOiBcIm1vZGFsX19lcnJvcl92aXNpYmxlXCIsXG59O1xuXG5leHBvcnQgY29uc3QgY2FyZENvbnN0YW50cyA9IHtcbiAgY2FyZFNlbGVjdG9yOiBcIiNjYXJkLXRlbXBsYXRlXCIsXG4gIHBsYWNlU2VsZWN0b3I6IFwiZWxlbWVudHNcIixcbn07XG5cbmV4cG9ydCBjb25zdCBwcmV2aWV3Q29uc3RhbnRzID0ge1xuICBwcmV2aWV3TW9kYWxTZWxlY3RvcjogXCJtb2RhbF90eXBlX3ByZXZpZXdcIixcbn07XG5cbmV4cG9ydCBjb25zdCBlZGl0Q29uc3RhbnRzID0ge1xuICBlZGl0UHJvZmlsZUVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtX3R5cGVfZWRpdFwiKSxcbiAgcHJvZmlsZUVkaXRCdXR0b25FbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0LWJ1dHRvblwiKSxcbiAgcHJvZmlsZU5hbWVFbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19uYW1lXCIpLFxuICBwcm9maWxlQWJvdXRFbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hYm91dFwiKSxcbiAgcHJvZmlsZUF2YXRhckVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2F2YXRhclwiKSxcbiAgcHJvZmlsZUF2YXRhckZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1fdHlwZV9hdmF0YXJcIiksXG4gIHByb2ZpbGVBdmF0YXJCdXR0b25FbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hdmF0YXItYnV0dG9uXCIpLFxuICBlZGl0UHJvZmlsZU5hbWVJbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybS1pdGVtX3R5cGVfbmFtZVwiKSxcbiAgZWRpdFByb2ZpbGVBYm91dElucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtLWl0ZW1fdHlwZV9hYm91dFwiKSxcbiAgZWRpdE1vZGFsU2VsZWN0b3I6IFwibW9kYWxfdHlwZV9lZGl0XCIsXG4gIGF2YXRhck1vZGFsU2VsZWN0b3I6IFwibW9kYWxfdHlwZV9hdmF0YXJcIixcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRDb25zdGFudHMgPSB7XG4gIGFkZENhcmRzRWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1fdHlwZV9hZGRcIiksXG4gIGFkZENhcmRCdXR0b25FbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hZGQtYnV0dG9uXCIpLFxuICBhZGRNb2RhbFNlbGVjdG9yOiBcIm1vZGFsX3R5cGVfYWRkXCIsXG4gIGRlbGV0ZUNhcmRzRWw6IFwibW9kYWxfdHlwZV9kZWxldGVcIixcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEZvcm1zIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm1zLmpzXCI7XG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcbmltcG9ydCBBcGkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBpLmpzXCI7XG5pbXBvcnQgUG9wdXBEZWxldGVDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwRGVsZXRlQ2FyZFwiO1xuXG5pbXBvcnQge1xuICB2YWxpZGF0aW9uU2V0dGluZ3MsXG4gIGNhcmRDb25zdGFudHMsXG4gIHByZXZpZXdDb25zdGFudHMsXG4gIGVkaXRDb25zdGFudHMsXG4gIGFkZENvbnN0YW50cyxcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50cy5qc1wiO1xuXG5mdW5jdGlvbiBsb2FkaW5nSGFuZGxlcihsb2FkaW5nLCBtb2RhbFNlbGVjdG9yLCB0ZXh0KSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bW9kYWxTZWxlY3Rvcn1gKTtcbiAgaWYgKGxvYWRpbmcpIHtcbiAgICBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19zYXZlLWJ1dHRvblwiKS50ZXh0Q29udGVudCA9IHRleHQ7XG4gIH0gZWxzZSB7XG4gICAgbW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fc2F2ZS1idXR0b25cIikudGV4dENvbnRlbnQgPSB0ZXh0O1xuICB9XG59XG5cbmNvbnN0IGFwaSA9IG5ldyBBcGkoe1xuICBiYXNlVXJsOiBcImh0dHBzOi8vYXJvdW5kLm5vbW9yZXBhcnRpZXMuY28vdjEvZ3JvdXAtMTNcIixcbiAgaGVhZGVyczoge1xuICAgIGF1dGhvcml6YXRpb246IFwiMGY5ODA3N2YtMWIwOC00ODI5LWFlNTctNmY4MWFiNDczODBjXCIsXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gIH0sXG59KTtcblxuYXBpXG4gIC5nZXRJbml0aWFsUHJvZmlsZSgpXG4gIC50aGVuKChyZXMpID0+IHtcbiAgICB1c2VySW5mby5zZXRVc2VySW5mbyhyZXMpO1xuICB9KVxuICAuY2F0Y2goKGVycikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBFcnJvcjoke2Vycn1gKTtcbiAgfSk7XG5cbmFwaVxuICAuZ2V0SW5pdGlhbENhcmRzKClcbiAgLnRoZW4oKHJlcykgPT4ge1xuICAgIGNhcmRMaXN0LnJlbmRlckl0ZW1zKHJlcy5yZXZlcnNlKCkpO1xuICB9KVxuICAuY2F0Y2goKGVycikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBFcnJvcjoke2Vycn1gKTtcbiAgfSk7XG5cbmNvbnN0IGNyZWF0ZUNhcmQgPSAoY2FyZCkgPT4ge1xuICBjb25zdCBjYXJkSW5zdGFuY2UgPSBuZXcgQ2FyZChcbiAgICB7XG4gICAgICBjYXJkLFxuICAgICAgaGFuZGxlUHJldmlld0ltZzogKCkgPT4ge1xuICAgICAgICBpbWFnZU1vZGFsLm9wZW4oY2FyZCk7XG4gICAgICB9LFxuICAgICAgaGFuZGxlRGVsZXRlSWNvbjogKGV2dCkgPT4ge1xuICAgICAgICBkZWxldGVDYXJkLm9wZW4oZXZ0LCBjYXJkLl9pZCk7XG4gICAgICB9LFxuICAgICAgaGFuZGxlTGlrZUJ1dHRvbjogKGJ1dHRvbkxpa2VkKSA9PiB7XG4gICAgICAgIHJldHVybiBidXR0b25MaWtlZCA/IGFwaS5saWtlQ2FyZChjYXJkLl9pZCkgOiBhcGkucmVtb3ZlTGlrZShjYXJkLl9pZCk7XG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBjYXJkQ29uc3RhbnRzLmNhcmRTZWxlY3RvclxuICApO1xuXG4gIHJldHVybiBjYXJkSW5zdGFuY2U7XG59O1xuXG5jb25zdCBjYXJkTGlzdCA9IG5ldyBTZWN0aW9uKFxuICB7XG4gICAgcmVuZGVyZXI6IChjYXJkKSA9PiB7XG4gICAgICBjb25zdCBuZXdDYXJkID0gY3JlYXRlQ2FyZChjYXJkKTtcbiAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gbmV3Q2FyZC5nZXRWaWV3KCk7XG4gICAgICBjYXJkTGlzdC5hZGRJdGVtKGNhcmRFbGVtZW50KTtcbiAgICB9LFxuICB9LFxuICBjYXJkQ29uc3RhbnRzLnBsYWNlU2VsZWN0b3Jcbik7XG5cbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHtcbiAgdXNlck5hbWVTZWxlY3RvcjogZWRpdENvbnN0YW50cy5wcm9maWxlTmFtZUVsLFxuICB1c2VyQWJvdXRTZWxlY3RvcjogZWRpdENvbnN0YW50cy5wcm9maWxlQWJvdXRFbCxcbiAgdXNlckF2YXRhclNlbGVjdG9yOiBlZGl0Q29uc3RhbnRzLnByb2ZpbGVBdmF0YXJFbCxcbn0pO1xuXG5jb25zdCBhZGRJbWFnZVBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm1zKHtcbiAgbW9kYWxTZWxlY3RvcjogYWRkQ29uc3RhbnRzLmFkZE1vZGFsU2VsZWN0b3IsXG4gIGhhbmRsZUZvcm1TdWJtaXQ6IChjYXJkKSA9PiB7XG4gICAgbG9hZGluZ0hhbmRsZXIodHJ1ZSwgYWRkQ29uc3RhbnRzLmFkZE1vZGFsU2VsZWN0b3IsIFwiQ3JlYXRpbmcuLi5cIik7XG4gICAgYXBpXG4gICAgICAuZmV0Y2hDYXJkKGNhcmQpXG4gICAgICAudGhlbigoY2FyZERhdGEpID0+IHtcbiAgICAgICAgY29uc3QgbmV3Q2FyZCA9IGNyZWF0ZUNhcmQoY2FyZERhdGEpO1xuICAgICAgICBjYXJkTGlzdC5hZGRJdGVtKG5ld0NhcmQuZ2V0VmlldygpKTtcbiAgICAgICAgYWRkSW1hZ2VQb3B1cC5jbG9zZSgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjoke2Vycn1gKTtcbiAgICAgIH0pXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIGxvYWRpbmdIYW5kbGVyKGZhbHNlLCBhZGRDb25zdGFudHMuYWRkTW9kYWxTZWxlY3RvciwgXCJDcmVhdGVcIik7XG4gICAgICB9KTtcbiAgfSxcbn0pO1xuXG5jb25zdCBjaGFuZ2VQcm9maWxlQXZhdGFyUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybXMoe1xuICBtb2RhbFNlbGVjdG9yOiBlZGl0Q29uc3RhbnRzLmF2YXRhck1vZGFsU2VsZWN0b3IsXG4gIGhhbmRsZUZvcm1TdWJtaXQ6IChhdmF0YXIpID0+IHtcbiAgICBsb2FkaW5nSGFuZGxlcih0cnVlLCBlZGl0Q29uc3RhbnRzLmF2YXRhck1vZGFsU2VsZWN0b3IsIFwiQ2hhbmdpbmcuLi5cIik7XG5cbiAgICBhcGlcbiAgICAgIC5jaGFuZ2VQcm9maWxlQXZhdGFyKGF2YXRhcilcbiAgICAgIC50aGVuKChhdmF0YXJEYXRhKSA9PiB7XG4gICAgICAgIHVzZXJJbmZvLnNldEF2YXRhckltZyhhdmF0YXJEYXRhKTtcbiAgICAgICAgY2hhbmdlUHJvZmlsZUF2YXRhclBvcHVwLmNsb3NlKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiR7ZXJyfWApO1xuICAgICAgfSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgbG9hZGluZ0hhbmRsZXIoZmFsc2UsIGVkaXRDb25zdGFudHMuYXZhdGFyTW9kYWxTZWxlY3RvciwgXCJDaGFuZ2VcIik7XG4gICAgICB9KTtcbiAgfSxcbn0pO1xuXG5jb25zdCBkZWxldGVDYXJkID0gbmV3IFBvcHVwRGVsZXRlQ2FyZCh7XG4gIG1vZGFsU2VsZWN0b3I6IGFkZENvbnN0YW50cy5kZWxldGVDYXJkc0VsLFxuICBoYW5kbGVGb3JtU3VibWl0OiAoY2FyZEVsZW1lbnQsIGNhcmRJZCkgPT4ge1xuICAgIGxvYWRpbmdIYW5kbGVyKHRydWUsIGFkZENvbnN0YW50cy5kZWxldGVDYXJkc0VsLCBcIkRlbGV0aW5nLi4uXCIpO1xuICAgIGFwaVxuICAgICAgLmRlbGV0ZUNhcmQoY2FyZElkKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBjYXJkRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgZGVsZXRlQ2FyZC5jbG9zZSgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjoke2Vycn1gKTtcbiAgICAgIH0pXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIGxvYWRpbmdIYW5kbGVyKGZhbHNlLCBhZGRDb25zdGFudHMuZGVsZXRlQ2FyZHNFbCwgXCJZZXNcIik7XG4gICAgICB9KTtcbiAgfSxcbn0pO1xuXG5jb25zdCB1c2VySW5mb1BvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm1zKHtcbiAgbW9kYWxTZWxlY3RvcjogZWRpdENvbnN0YW50cy5lZGl0TW9kYWxTZWxlY3RvcixcbiAgaGFuZGxlRm9ybVN1Ym1pdDogKHByb2ZpbGUpID0+IHtcbiAgICBsb2FkaW5nSGFuZGxlcih0cnVlLCBlZGl0Q29uc3RhbnRzLmVkaXRNb2RhbFNlbGVjdG9yLCBcIlVwZGF0aW5nLi4uXCIpO1xuICAgIGFwaVxuICAgICAgLmZldGNoUHJvZmlsZUluZm8ocHJvZmlsZSlcbiAgICAgIC50aGVuKChwcm9maWxlRGF0YSkgPT4ge1xuICAgICAgICB1c2VySW5mby5zZXRVc2VySW5mbyhwcm9maWxlRGF0YSk7XG4gICAgICAgIHVzZXJJbmZvUG9wdXAuY2xvc2UoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6JHtlcnJ9YCk7XG4gICAgICB9KVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBsb2FkaW5nSGFuZGxlcihmYWxzZSwgZWRpdENvbnN0YW50cy5lZGl0TW9kYWxTZWxlY3RvciwgXCJVcGRhdGVcIik7XG4gICAgICB9KTtcbiAgfSxcbn0pO1xuXG5jb25zdCBpbWFnZU1vZGFsID0gbmV3IFBvcHVwV2l0aEltYWdlKHByZXZpZXdDb25zdGFudHMucHJldmlld01vZGFsU2VsZWN0b3IpO1xuXG5jb25zdCBlZGl0Rm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKFxuICB2YWxpZGF0aW9uU2V0dGluZ3MsXG4gIGVkaXRDb25zdGFudHMuZWRpdFByb2ZpbGVFbFxuKTtcbmNvbnN0IGFkZEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihcbiAgdmFsaWRhdGlvblNldHRpbmdzLFxuICBhZGRDb25zdGFudHMuYWRkQ2FyZHNFbFxuKTtcblxuY29uc3QgYXZhdGFyRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKFxuICB2YWxpZGF0aW9uU2V0dGluZ3MsXG4gIGVkaXRDb25zdGFudHMucHJvZmlsZUF2YXRhckZvcm1cbik7XG5cbmVkaXRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcbmFkZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuYXZhdGFyRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5cbmFkZEltYWdlUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbmltYWdlTW9kYWwuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbnVzZXJJbmZvUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbmRlbGV0ZUNhcmQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbmNoYW5nZVByb2ZpbGVBdmF0YXJQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuXG4vLy8vL1BPUFVQIEJVVFRPTlMvLy8vL1xuXG5hZGRDb25zdGFudHMuYWRkQ2FyZEJ1dHRvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGFkZEZvcm1WYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKCk7XG4gIGFkZEltYWdlUG9wdXAub3BlbigpO1xufSk7XG5cbmVkaXRDb25zdGFudHMucHJvZmlsZUF2YXRhckJ1dHRvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGF2YXRhckZvcm1WYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKCk7XG4gIGNoYW5nZVByb2ZpbGVBdmF0YXJQb3B1cC5vcGVuKCk7XG59KTtcblxuZWRpdENvbnN0YW50cy5wcm9maWxlRWRpdEJ1dHRvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IHByb2ZpbGVEYXRhID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcbiAgZWRpdENvbnN0YW50cy5lZGl0UHJvZmlsZU5hbWVJbnB1dC52YWx1ZSA9IHByb2ZpbGVEYXRhLm5hbWU7XG4gIGVkaXRDb25zdGFudHMuZWRpdFByb2ZpbGVBYm91dElucHV0LnZhbHVlID0gcHJvZmlsZURhdGEuYWJvdXQ7XG5cbiAgZWRpdEZvcm1WYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKCk7XG4gIHVzZXJJbmZvUG9wdXAub3BlbigpO1xufSk7XG4iXSwibmFtZXMiOlsiQXBpIiwib3B0aW9ucyIsImJhc2VVcmwiLCJoZWFkZXJzIiwicmVzIiwib2siLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsImZldGNoIiwidGhlbiIsIl9jaGVja2Vycm9ycyIsIm5hbWUiLCJsaW5rIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhYm91dCIsImF2YXRhciIsImNhcmRJZCIsIkNhcmQiLCJjYXJkU2VsZWN0b3IiLCJjYXJkIiwiaGFuZGxlUHJldmlld0ltZyIsImhhbmRsZURlbGV0ZUljb24iLCJoYW5kbGVMaWtlQnV0dG9uIiwiX3VzZXJJZCIsIl9uYW1lIiwiX2xpbmsiLCJfbGlrZWRDYXJkIiwibGlrZXMiLCJfbnVtYmVyTGlrZXMiLCJsZW5ndGgiLCJfaGFuZGxlUHJldmlld0ltZyIsIl9oYW5kbGVEZWxldGVJY29uIiwiX2hhbmRsZUxpa2VCdXR0b24iLCJfb3duZXJJZCIsIm93bmVyIiwiX2lkIiwiX2NhcmRJZCIsIl9jYXJkVGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfZWxlbWVudCIsInRleHRDb250ZW50IiwiZSIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidG9nZ2xlIiwiX2NoZWNrTGlrZXMiLCJhZGRFdmVudExpc3RlbmVyIiwiX2RlbGV0ZUJ1dHRvbiIsImV2dCIsInJlbW92ZSIsIl9saWtlQnV0dG9uIiwiX2xpa2VkIiwidXNlckxpa2VDYXJkIiwic29tZSIsIml0ZW0iLCJhZGQiLCJfZ2V0VGVtcGxhdGUiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJjYXJkSW1nIiwic3JjIiwiYWx0IiwiX2dldEluaXRhbExpa2VzIiwiRm9ybVZhbGlkYXRvciIsInNldHRpbmdzIiwiZm9ybUVsZW1lbnQiLCJmb3JtRWwiLCJpbnB1dCIsImVycm9yU3BhbiIsImlkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfZXJyb3JDbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2hpZGVJbnB1dEVycm9yIiwiX3Nob3dJbnB1dEVycm9yIiwiaW5wdXRzIiwiZXZlcnkiLCJidXR0b25FbCIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pc1ZhbGlkIiwiZGlzYWJsZWQiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJfZm9ybUVsIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsIl90b2dnbGVCdXR0b24iLCJmb3JFYWNoIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJQb3B1cCIsIm1vZGFsU2VsZWN0b3IiLCJfbW9kYWxFbGVtZW50IiwiX2hhbmRsZUVzY0Nsb3NlIiwiYmluZCIsImNsb3NlIiwia2V5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlBvcHVwRGVsZXRlQ2FyZCIsImhhbmRsZUZvcm1TdWJtaXQiLCJfbW9kYWxGb3JtIiwiX2hhbmRsZUZvcm1TdWJtaXQiLCJfYnV0dG9uIiwiX2NhcmQiLCJwYXJlbnRFbGVtZW50IiwiUG9wdXBXaXRoRm9ybXMiLCJfaW5wdXRzIiwiX2Zvcm1WYWx1ZXMiLCJ2YWx1ZSIsIl9nZXRJbnB1dFZhbHVlcyIsInJlc2V0IiwiUG9wdXBXaXRoSW1hZ2UiLCJpbWFnZSIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsInJlbmRlcmVyIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsImVsZW1lbnQiLCJwcmVwZW5kIiwiaXRlbXMiLCJVc2VySW5mbyIsInVzZXJOYW1lU2VsZWN0b3IiLCJ1c2VyQWJvdXRTZWxlY3RvciIsInVzZXJBdmF0YXJTZWxlY3RvciIsIl91c2VyTmFtZVNlbGVjdG9yIiwiX3VzZXJBYm91dFNlbGVjdG9yIiwiX3VzZXJBdmF0YXJTZWxlY3RvciIsInVzZXJEYXRhIiwiZGF0YSIsInZhbGlkYXRpb25TZXR0aW5ncyIsImZvcm1TZWxlY3RvciIsImNhcmRDb25zdGFudHMiLCJwbGFjZVNlbGVjdG9yIiwicHJldmlld0NvbnN0YW50cyIsInByZXZpZXdNb2RhbFNlbGVjdG9yIiwiZWRpdENvbnN0YW50cyIsImVkaXRQcm9maWxlRWwiLCJwcm9maWxlRWRpdEJ1dHRvbkVsIiwicHJvZmlsZU5hbWVFbCIsInByb2ZpbGVBYm91dEVsIiwicHJvZmlsZUF2YXRhckVsIiwicHJvZmlsZUF2YXRhckZvcm0iLCJwcm9maWxlQXZhdGFyQnV0dG9uRWwiLCJlZGl0UHJvZmlsZU5hbWVJbnB1dCIsImVkaXRQcm9maWxlQWJvdXRJbnB1dCIsImVkaXRNb2RhbFNlbGVjdG9yIiwiYXZhdGFyTW9kYWxTZWxlY3RvciIsImFkZENvbnN0YW50cyIsImFkZENhcmRzRWwiLCJhZGRDYXJkQnV0dG9uRWwiLCJhZGRNb2RhbFNlbGVjdG9yIiwiZGVsZXRlQ2FyZHNFbCIsImxvYWRpbmdIYW5kbGVyIiwibG9hZGluZyIsInRleHQiLCJtb2RhbCIsImFwaSIsImF1dGhvcml6YXRpb24iLCJnZXRJbml0aWFsUHJvZmlsZSIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbml0aWFsQ2FyZHMiLCJjYXJkTGlzdCIsInJlbmRlckl0ZW1zIiwicmV2ZXJzZSIsImNyZWF0ZUNhcmQiLCJjYXJkSW5zdGFuY2UiLCJpbWFnZU1vZGFsIiwib3BlbiIsImRlbGV0ZUNhcmQiLCJidXR0b25MaWtlZCIsImxpa2VDYXJkIiwicmVtb3ZlTGlrZSIsIm5ld0NhcmQiLCJjYXJkRWxlbWVudCIsImdldFZpZXciLCJhZGRJdGVtIiwiYWRkSW1hZ2VQb3B1cCIsImZldGNoQ2FyZCIsImNhcmREYXRhIiwiZmluYWxseSIsImNoYW5nZVByb2ZpbGVBdmF0YXJQb3B1cCIsImNoYW5nZVByb2ZpbGVBdmF0YXIiLCJhdmF0YXJEYXRhIiwic2V0QXZhdGFySW1nIiwidXNlckluZm9Qb3B1cCIsInByb2ZpbGUiLCJmZXRjaFByb2ZpbGVJbmZvIiwicHJvZmlsZURhdGEiLCJlZGl0Rm9ybVZhbGlkYXRvciIsImFkZEZvcm1WYWxpZGF0b3IiLCJhdmF0YXJGb3JtVmFsaWRhdG9yIiwiZW5hYmxlVmFsaWRhdGlvbiIsInNldEV2ZW50TGlzdGVuZXJzIiwicmVzZXRWYWxpZGF0aW9uIiwiZ2V0VXNlckluZm8iXSwic291cmNlUm9vdCI6IiJ9