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
    }
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
    }
  }, {
    key: "fetchCard",
    value: function fetchCard(_ref) {
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
        if (res.ok) {
          return res.json();
        }

        return Promise.reject("Error");
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
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject("Error");
      });
    }
  }, {
    key: "changeProfileAvatar",
    value: function changeProfileAvatar(_ref3) {
      var avatar = _ref3.avatar;
      return fetch("".concat(this.baseUrl, "/users/me/avatar"), {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({
          avatar: avatar
        })
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject("Error");
      });
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(cardId) {
      return fetch("".concat(this.baseUrl, "/cards/").concat(cardId), {
        method: "DELETE",
        headers: this.headers
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject("Error");
      });
    }
  }, {
    key: "likeCard",
    value: function likeCard(cardId) {
      return fetch("".concat(this.baseUrl, "/cards/likes/").concat(cardId), {
        method: "PUT",
        headers: this.headers
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(res.status);
        }
      });
    }
  }, {
    key: "removeLike",
    value: function removeLike(cardId) {
      return fetch("".concat(this.baseUrl, "/cards/likes/").concat(cardId), {
        method: "DELETE",
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
    } //  3aaa3ba0eaedbec067155932

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
/* harmony import */ var _components_PopupDeleteCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/PopupDeleteCard */ "./src/components/PopupDeleteCard.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");












function loadingHandler(loading, modalSelector, text) {
  var modal = document.querySelector(".".concat(modalSelector));

  if (loading) {
    modal.querySelector(".modal__save-button").textContent = text;
  } else {
    modal.querySelector(".modal__save-button").textContent = text;
  }
}

var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_8__.default({
  baseUrl: "https://around.nomoreparties.co/v1/group-13",
  headers: {
    authorization: "0f98077f-1b08-4829-ae57-6f81ab47380c",
    "Content-Type": "application/json"
  }
});
api.getInitialProfile().then(function (res) {
  userInfo.setUserInfo(res);
}).catch(function (err) {
  renderError("Error:".concat(err));
});
api.getInitialCards().then(function (res) {
  cardList.renderItems(res.reverse());
}).catch(function (err) {
  renderError("Error:".concat(err));
});

var createCard = function createCard(card) {
  var cardInstance = new _components_Card_js__WEBPACK_IMPORTED_MODULE_3__.default({
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
  }, _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.cardConstants.cardSelector);
  return cardInstance;
};

var cardList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_4__.default({
  renderer: function renderer(card) {
    var newCard = createCard(card);
    var cardElement = newCard.getView();
    cardList.addItem(cardElement);
  }
}, _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.cardConstants.placeSelector);
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__.default({
  userNameSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.editConstants.profileNameEl,
  userAboutSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.editConstants.profileAboutEl,
  userAvatarSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.editConstants.profileAvatarEl
});
var addImagePopup = new _components_PopupWithForms_js__WEBPACK_IMPORTED_MODULE_6__.default({
  modalSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.addConstants.addModalSelector,
  handleFormSubmit: function handleFormSubmit(card) {
    loadingHandler(true, _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.addConstants.addModalSelector, "Creating...");
    api.fetchCard(card).then(function (cardData) {
      var newCard = createCard(cardData);
      cardList.addItem(newCard.getView());
      addImagePopup.close();
    }).catch(function (err) {
      renderError("Error:".concat(err));
    }).finally(function () {
      loadingHandler(false, _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.addConstants.addModalSelector, "Create");
    });
  }
});
var changeProfileAvatarPopup = new _components_PopupWithForms_js__WEBPACK_IMPORTED_MODULE_6__.default({
  modalSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.editConstants.avatarModalSelector,
  handleFormSubmit: function handleFormSubmit(avatar) {
    loadingHandler(true, _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.editConstants.avatarModalSelector, "Changing...");
    api.changeProfileAvatar(avatar).then(function (avatarData) {
      userInfo.setAvatarImg(avatarData);
      changeProfileAvatarPopup.close();
    }).catch(function (err) {
      renderError("Error:".concat(err));
    }).finally(function () {
      loadingHandler(false, _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.editConstants.avatarModalSelector, "Change");
    });
  }
});
var deleteCard = new _components_PopupDeleteCard__WEBPACK_IMPORTED_MODULE_9__.default({
  modalSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.addConstants.deleteCardsEl,
  handleFormSubmit: function handleFormSubmit(cardElement, cardId) {
    loadingHandler(true, _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.addConstants.deleteCardsEl, "Deleting...");
    api.deleteCard(cardId).then(function () {
      cardElement.remove();
      deleteCard.close();
    }).catch(function (err) {
      renderError("Error:".concat(err));
    }).finally(function () {
      loadingHandler(false, _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.addConstants.deleteCardsEl, "Yes");
    });
  }
});
var userInfoPopup = new _components_PopupWithForms_js__WEBPACK_IMPORTED_MODULE_6__.default({
  modalSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.editConstants.editModalSelector,
  handleFormSubmit: function handleFormSubmit(profile) {
    loadingHandler(true, _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.editConstants.editModalSelector, "Updating...");
    api.fetchProfileInfo(profile).then(function (profileData) {
      userInfo.setUserInfo(profileData);
      userInfoPopup.close();
    }).catch(function (err) {
      renderError("Error:".concat(err));
    }).finally(function () {
      loadingHandler(false, _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.editConstants.editModalSelector, "Update");
    });
  }
});
var imageModal = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.previewConstants.previewModalSelector);
var editFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.validationSettings, _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.editConstants.editProfileEl);
var addFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.validationSettings, _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.addConstants.addCardsEl);
var avatarFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.validationSettings, _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.editConstants.profileAvatarForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
avatarFormValidator.enableValidation();
addImagePopup.setEventListeners();
imageModal.setEventListeners();
userInfoPopup.setEventListeners();
deleteCard.setEventListeners();
changeProfileAvatarPopup.setEventListeners(); /////POPUP BUTTONS/////

_utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.addConstants.addCardButtonEl.addEventListener("click", function () {
  addFormValidator.resetValidation();
  addImagePopup.open();
});
_utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.editConstants.profileAvatarButtonEl.addEventListener("click", function () {
  avatarFormValidator.resetValidation();
  changeProfileAvatarPopup.open();
});
_utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.editConstants.profileEditButtonEl.addEventListener("click", function () {
  var profileData = userInfo.getUserInfo();
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.editConstants.editProfileNameInput.value = profileData.name;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.editConstants.editProfileAboutInput.value = profileData.about;
  editFormValidator.resetValidation();
  userInfoPopup.open();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBQSxDQUFtRCxPQUFuRCxFQUE0RCxZQUFNO0FBQ2hFLE1BQU13RCxXQUFXLEdBQUdoQyxRQUFRLENBQUN1QyxXQUFULEVBQXBCO0FBQ0EvRCxFQUFBQSwwRkFBQSxHQUEyQ3dELFdBQVcsQ0FBQzdNLElBQXZEO0FBQ0FxSixFQUFBQSwyRkFBQSxHQUE0Q3dELFdBQVcsQ0FBQ3ZNLEtBQXhEO0FBRUF3TSxFQUFBQSxpQkFBaUIsQ0FBQ0ssZUFBbEI7QUFDQVQsRUFBQUEsYUFBYSxDQUFDakIsSUFBZDtBQUNELENBUEQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBEZWxldGVDYXJkLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm1zLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL3V0aWxzL0luaXRpYWxDYXJkcy5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gb3B0aW9ucy5iYXNlVXJsO1xuICAgIHRoaXMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycztcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9maWxlKCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VVcmx9L3VzZXJzL21lYCwge1xuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIkVycm9yXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0SW5pdGlhbENhcmRzKCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VVcmx9L2NhcmRzYCwge1xuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIkVycm9yXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgZmV0Y2hDYXJkKHsgbmFtZSwgbGluayB9KSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuYmFzZVVybH0vY2FyZHNgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lLCBsaW5rIH0pLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIkVycm9yXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgZmV0Y2hQcm9maWxlSW5mbyh7IG5hbWUsIGFib3V0IH0pIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS91c2Vycy9tZWAsIHtcbiAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lOiBuYW1lLCBhYm91dDogYWJvdXQgfSksXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiRXJyb3JcIik7XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2VQcm9maWxlQXZhdGFyKHsgYXZhdGFyIH0pIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS91c2Vycy9tZS9hdmF0YXJgLCB7XG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYXZhdGFyOiBhdmF0YXIgfSksXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiRXJyb3JcIik7XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGVDYXJkKGNhcmRJZCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VVcmx9L2NhcmRzLyR7Y2FyZElkfWAsIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJFcnJvclwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxpa2VDYXJkKGNhcmRJZCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VVcmx9L2NhcmRzL2xpa2VzLyR7Y2FyZElkfWAsIHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzLnN0YXR1cyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVMaWtlKGNhcmRJZCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VVcmx9L2NhcmRzL2xpa2VzLyR7Y2FyZElkfWAsIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJFcnJvclwiKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiY2xhc3MgQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHsgY2FyZCwgaGFuZGxlUHJldmlld0ltZywgaGFuZGxlRGVsZXRlSWNvbiwgaGFuZGxlTGlrZUJ1dHRvbiB9LFxuICAgIGNhcmRTZWxlY3RvclxuICApIHtcbiAgICB0aGlzLl91c2VySWQgPSBcIjNhYWEzYmEwZWFlZGJlYzA2NzE1NTkzMlwiO1xuICAgIHRoaXMuX25hbWUgPSBjYXJkLm5hbWU7XG4gICAgdGhpcy5fbGluayA9IGNhcmQubGluaztcbiAgICB0aGlzLl9saWtlZENhcmQgPSBjYXJkLmxpa2VzO1xuICAgIHRoaXMuX251bWJlckxpa2VzID0gY2FyZC5saWtlcy5sZW5ndGg7XG4gICAgdGhpcy5faGFuZGxlUHJldmlld0ltZyA9IGhhbmRsZVByZXZpZXdJbWc7XG4gICAgdGhpcy5faGFuZGxlRGVsZXRlSWNvbiA9IGhhbmRsZURlbGV0ZUljb247XG4gICAgdGhpcy5faGFuZGxlTGlrZUJ1dHRvbiA9IGhhbmRsZUxpa2VCdXR0b247XG4gICAgdGhpcy5fb3duZXJJZCA9IGNhcmQub3duZXIuX2lkO1xuICAgIHRoaXMuX2NhcmRJZCA9IGNhcmQuX2lkO1xuXG4gICAgdGhpcy5fY2FyZFRlbXBsYXRlID0gY2FyZFNlbGVjdG9yO1xuICB9XG5cbiAgX2dldFRlbXBsYXRlKCkge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmRUZW1wbGF0ZSlcbiAgICAgIC5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZFwiKVxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcblxuICAgIHRoaXMuX2VsZW1lbnQgPSB0ZW1wbGF0ZTtcbiAgfVxuICAvLyAgM2FhYTNiYTBlYWVkYmVjMDY3MTU1OTMyXG5cbiAgX2NoZWNrTGlrZXMoY2FyZCkge1xuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190ZXh0X2xpa2VzLW51bWJlclwiKS50ZXh0Q29udGVudCA9XG4gICAgICBjYXJkLmxpa2VzLmxlbmd0aDtcbiAgfVxuXG4gIF9saWtlZChlKSB7XG4gICAgdGhpcy5faGFuZGxlTGlrZUJ1dHRvbihcbiAgICAgICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjYXJkX19saWtlLWJ1dHRvbl9hY3RpdmVcIilcbiAgICApLnRoZW4oKGNhcmQpID0+IHtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkX19saWtlLWJ1dHRvbl9hY3RpdmVcIik7XG4gICAgICB0aGlzLl9jaGVja0xpa2VzKGNhcmQpO1xuICAgIH0pO1xuICB9XG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2VsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltZ1wiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLl9oYW5kbGVQcmV2aWV3SW1nKCkpO1xuXG4gICAgdGhpcy5fZGVsZXRlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2RlbGV0ZS1idXR0b25cIik7XG4gICAgaWYgKHRoaXMuX293bmVySWQgPT09IHRoaXMuX3VzZXJJZCkge1xuICAgICAgdGhpcy5fZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XG4gICAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZUljb24oZXZ0KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kZWxldGVCdXR0b24ucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fbGlrZUJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19saWtlLWJ1dHRvblwiKTtcbiAgICB0aGlzLl9saWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgdGhpcy5fbGlrZWQoZSk7XG4gICAgfSk7XG4gIH1cblxuICBfZ2V0SW5pdGFsTGlrZXMoKSB7XG4gICAgY29uc3QgdXNlckxpa2VDYXJkID0gdGhpcy5fbGlrZWRDYXJkLnNvbWUoXG4gICAgICAoaXRlbSkgPT4gaXRlbS5faWQgPT09IHRoaXMuX3VzZXJJZFxuICAgICk7XG4gICAgaWYgKHVzZXJMaWtlQ2FyZCkge1xuICAgICAgdGhpcy5fbGlrZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2FyZF9fbGlrZS1idXR0b25fYWN0aXZlXCIpO1xuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190ZXh0X2xpa2VzLW51bWJlclwiKS50ZXh0Q29udGVudCA9XG4gICAgICB0aGlzLl9udW1iZXJMaWtlcztcbiAgfVxuXG4gIGdldFZpZXcoKSB7XG4gICAgdGhpcy5fZ2V0VGVtcGxhdGUoKTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuXG4gICAgY29uc3QgY2FyZEltZyA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWdcIik7XG5cbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fdGV4dFwiKS50ZXh0Q29udGVudCA9IHRoaXMuX25hbWU7XG4gICAgY2FyZEltZy5zcmMgPSB0aGlzLl9saW5rO1xuICAgIGNhcmRJbWcuYWx0ID0gdGhpcy5fbmFtZTtcbiAgICB0aGlzLl9nZXRJbml0YWxMaWtlcyhjYXJkSW1nKTtcblxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGZvcm1FbGVtZW50KSB7XG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IHNldHRpbmdzLmlucHV0U2VsZWN0b3I7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBzZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XG5cbiAgICB0aGlzLl9mb3JtRWwgPSBmb3JtRWxlbWVudDtcbiAgfVxuXG4gIF9zaG93SW5wdXRFcnJvciA9IChmb3JtRWwsIGlucHV0KSA9PiB7XG4gICAgY29uc3QgZXJyb3JTcGFuID0gZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0LmlkfS1lcnJvcmApO1xuICAgIC8vIGFkZCBlcnJvciBtZXNzYWdlL2NsYXNzXG4gICAgZXJyb3JTcGFuLnRleHRDb250ZW50ID0gaW5wdXQudmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgZXJyb3JTcGFuLmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICB9O1xuXG4gIF9oaWRlSW5wdXRFcnJvciA9IChmb3JtRWwsIGlucHV0KSA9PiB7XG4gICAgY29uc3QgZXJyb3JTcGFuID0gZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0LmlkfS1lcnJvcmApO1xuICAgIC8vIGFkZCBlcnJvciBtZXNzYWdlL2NsYXNzXG4gICAgZXJyb3JTcGFuLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBlcnJvclNwYW4uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gIH07XG5cbiAgX2NoZWNrSW5wdXRWYWxpZGl0eSA9IChmb3JtRWwsIGlucHV0KSA9PiB7XG4gICAgaWYgKGlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihmb3JtRWwsIGlucHV0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoZm9ybUVsLCBpbnB1dCk7XG4gICAgfVxuICB9O1xuXG4gIF9pc1ZhbGlkID0gKGlucHV0cykgPT4ge1xuICAgIHJldHVybiBpbnB1dHMuZXZlcnkoKGlucHV0KSA9PiBpbnB1dC52YWxpZGl0eS52YWxpZCk7XG4gIH07XG5cbiAgX3RvZ2dsZUJ1dHRvbiA9IChmb3JtRWwsIGlucHV0cykgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbkVsID0gZm9ybUVsLnF1ZXJ5U2VsZWN0b3IodGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xuICAgIGlmICh0aGlzLl9pc1ZhbGlkKGlucHV0cykpIHtcbiAgICAgIGJ1dHRvbkVsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICBidXR0b25FbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b25FbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBidXR0b25FbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgIH1cbiAgfTtcblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoZm9ybUVsKSB7XG4gICAgY29uc3QgaW5wdXRzID0gQXJyYXkuZnJvbShmb3JtRWwucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKSk7XG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uKGZvcm1FbCwgaW5wdXRzKTtcbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgIC8vIGNoZWNrIHZhbGlkaXR5XG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShmb3JtRWwsIGlucHV0KTtcbiAgICAgICAgLy90b2dnbGUgYnV0dG9uXG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvbihmb3JtRWwsIGlucHV0cyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0VmFsaWRhdGlvbigpIHtcbiAgICBjb25zdCBpbnB1dHMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcilcbiAgICApO1xuXG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uKHRoaXMuX2Zvcm1FbCwgaW5wdXRzKTtcblxuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IodGhpcy5fZm9ybUVsLCBpbnB1dCk7XG4gICAgfSk7XG4gIH1cblxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX2Zvcm1FbC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSk7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnModGhpcy5fZm9ybUVsKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdG9yO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihtb2RhbFNlbGVjdG9yKSB7XG4gICAgdGhpcy5fbW9kYWxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bW9kYWxTZWxlY3Rvcn1gKTtcbiAgICB0aGlzLl9oYW5kbGVFc2NDbG9zZSA9IHRoaXMuX2hhbmRsZUVzY0Nsb3NlLmJpbmQodGhpcyk7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9tb2RhbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsXCIpIHx8XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsX19jbG9zZS1idXR0b25cIilcbiAgICAgICkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfaGFuZGxlRXNjQ2xvc2UoZSkge1xuICAgIGlmIChlLmtleSA9PSBcIkVzY2FwZVwiKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLl9tb2RhbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1vZGFsX29wZW5cIik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fbW9kYWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9vcGVuXCIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgfVxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwRGVsZXRlQ2FyZCBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IoeyBtb2RhbFNlbGVjdG9yLCBoYW5kbGVGb3JtU3VibWl0IH0pIHtcbiAgICBzdXBlcihtb2RhbFNlbGVjdG9yKTtcblxuICAgIHRoaXMuX21vZGFsRm9ybSA9IHRoaXMuX21vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtXCIpO1xuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xuICAgIHRoaXMuX2J1dHRvbiA9IHRoaXMuX21vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19zYXZlLWJ1dHRvblwiKTtcbiAgfVxuXG4gIG9wZW4oZXZ0LCBjYXJkSWQpIHtcbiAgICBzdXBlci5vcGVuKCk7XG4gICAgdGhpcy5fY2FyZElkID0gY2FyZElkO1xuICAgIHRoaXMuX2NhcmQgPSBldnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9tb2RhbEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCh0aGlzLl9jYXJkLCB0aGlzLl9jYXJkSWQpO1xuICAgIH0pO1xuXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm1zIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcih7IG1vZGFsU2VsZWN0b3IsIGhhbmRsZUZvcm1TdWJtaXQgfSkge1xuICAgIHN1cGVyKG1vZGFsU2VsZWN0b3IpO1xuXG4gICAgdGhpcy5fbW9kYWxGb3JtID0gdGhpcy5fbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XG4gICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XG4gICAgdGhpcy5fYnV0dG9uID0gdGhpcy5fbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3NhdmUtYnV0dG9uXCIpO1xuICB9XG5cbiAgX2dldElucHV0VmFsdWVzKCkge1xuICAgIHRoaXMuX2lucHV0cyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLl9tb2RhbEZvcm0ucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbF9fZm9ybS1pdGVtXCIpXG4gICAgKTtcblxuICAgIHRoaXMuX2Zvcm1WYWx1ZXMgPSB7fTtcblxuICAgIHRoaXMuX2lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgdGhpcy5fZm9ybVZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1WYWx1ZXM7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9tb2RhbEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcbiAgICB9KTtcblxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9tb2RhbEZvcm0ucmVzZXQoKTtcblxuICAgIHN1cGVyLmNsb3NlKCk7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcbiAgb3Blbih7IGxpbmssIG5hbWUgfSkge1xuICAgIHRoaXMuX21vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wcmV2aWV3LWNhcHRpb25cIikudGV4dENvbnRlbnQgPVxuICAgICAgbmFtZTtcbiAgICBjb25zdCBpbWFnZSA9IHRoaXMuX21vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wcmV2aWV3LWltYWdlXCIpO1xuICAgIGltYWdlLnNyYyA9IGxpbms7XG4gICAgaW1hZ2UuYWx0ID0gbmFtZTtcbiAgICBzdXBlci5vcGVuKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcih7IHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjb250YWluZXJTZWxlY3Rvcn1gKTtcbiAgfVxuXG4gIGFkZEl0ZW0oZWxlbWVudCkge1xuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGVsZW1lbnQpO1xuICB9XG5cbiAgcmVuZGVySXRlbXMoaXRlbXMpIHtcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlcihpdGVtKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xuICBjb25zdHJ1Y3Rvcih7IHVzZXJOYW1lU2VsZWN0b3IsIHVzZXJBYm91dFNlbGVjdG9yLCB1c2VyQXZhdGFyU2VsZWN0b3IgfSkge1xuICAgIHRoaXMuX3VzZXJOYW1lU2VsZWN0b3IgPSB1c2VyTmFtZVNlbGVjdG9yO1xuICAgIHRoaXMuX3VzZXJBYm91dFNlbGVjdG9yID0gdXNlckFib3V0U2VsZWN0b3I7XG4gICAgdGhpcy5fdXNlckF2YXRhclNlbGVjdG9yID0gdXNlckF2YXRhclNlbGVjdG9yO1xuICB9XG5cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgdGhpcy51c2VyRGF0YSA9IHtcbiAgICAgIG5hbWU6IHRoaXMuX3VzZXJOYW1lU2VsZWN0b3IudGV4dENvbnRlbnQsXG4gICAgICBhYm91dDogdGhpcy5fdXNlckFib3V0U2VsZWN0b3IudGV4dENvbnRlbnQsXG4gICAgICBhdmF0YXI6IHRoaXMuX3VzZXJBdmF0YXJTZWxlY3Rvci5zcmMsXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnVzZXJEYXRhO1xuICB9XG5cbiAgc2V0VXNlckluZm8oZGF0YSkge1xuICAgIHRoaXMuX3VzZXJOYW1lU2VsZWN0b3IudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XG4gICAgdGhpcy5fdXNlckFib3V0U2VsZWN0b3IudGV4dENvbnRlbnQgPSBkYXRhLmFib3V0O1xuICAgIHRoaXMuX3VzZXJBdmF0YXJTZWxlY3Rvci5zcmMgPSBkYXRhLmF2YXRhcjtcbiAgfVxuXG4gIHNldEF2YXRhckltZyhkYXRhKSB7XG4gICAgdGhpcy5fdXNlckF2YXRhclNlbGVjdG9yLnNyYyA9IGRhdGEuYXZhdGFyO1xuICB9XG59XG4iLCJpbXBvcnQgeW9zZW1pdGVJbWcgZnJvbSBcIi4uL2ltYWdlcy9Zb3NlbWl0ZS5qcGVnXCI7XG5pbXBvcnQgbGFrZUltZyBmcm9tIFwiLi4vaW1hZ2VzL0xha2VfTG91aXNlLmpwZWdcIjtcbmltcG9ydCBtb3VudGFpbnNJbWcgZnJvbSBcIi4uL2ltYWdlcy9CYWxkX01vdW50YWlucy5qcGVnXCI7XG5pbXBvcnQgbGF0ZW1hckltZyBmcm9tIFwiLi4vaW1hZ2VzL0xhdGVtYXIuanBlZ1wiO1xuaW1wb3J0IHZhbm9pc2VJbWcgZnJvbSBcIi4uL2ltYWdlcy9WYW5vaXNlX05hdGlvbmFsX1BhcmsuanBlZ1wiO1xuaW1wb3J0IGxhZ29JbWcgZnJvbSBcIi4uL2ltYWdlcy9MYWdvX2RpX0JyYWllcy5qcGVnXCI7XG5cbmNvbnN0IGluaXRpYWxDYXJkcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiWW9zZW1pdGUgVmFsbGV5XCIsXG4gICAgbGluazogeW9zZW1pdGVJbWcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxha2UgTG91aXNlXCIsXG4gICAgbGluazogbGFrZUltZyxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQmFsZCBNb3VudGFpbnNcIixcbiAgICBsaW5rOiBtb3VudGFpbnNJbWcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxhdGVtYXJcIixcbiAgICBsaW5rOiBsYXRlbWFySW1nLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJWYW5vaXNlIE5hdGlvbmFsIFBhcmtcIixcbiAgICBsaW5rOiB2YW5vaXNlSW1nLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYWdvIGRpIEJyYWllc1wiLFxuICAgIGxpbms6IGxhZ29JbWcsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsQ2FyZHM7XG4iLCIvL1ZBTElEQVRJT04gU0VUVElOR1NcbmV4cG9ydCBjb25zdCB2YWxpZGF0aW9uU2V0dGluZ3MgPSB7XG4gIGZvcm1TZWxlY3RvcjogXCIubW9kYWxfX2Zvcm1cIixcbiAgaW5wdXRTZWxlY3RvcjogXCIubW9kYWxfX2Zvcm0taXRlbVwiLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIubW9kYWxfX3NhdmUtYnV0dG9uXCIsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwibW9kYWxfX3NhdmUtYnV0dG9uX2Rpc2FibGVkXCIsXG4gIGlucHV0RXJyb3JDbGFzczogXCJtb2RhbF9fZm9ybS1pdGVtX3R5cGVfZXJyb3JcIixcbiAgZXJyb3JDbGFzczogXCJtb2RhbF9fZXJyb3JfdmlzaWJsZVwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGNhcmRDb25zdGFudHMgPSB7XG4gIGNhcmRTZWxlY3RvcjogXCIjY2FyZC10ZW1wbGF0ZVwiLFxuICBwbGFjZVNlbGVjdG9yOiBcImVsZW1lbnRzXCIsXG59O1xuXG5leHBvcnQgY29uc3QgcHJldmlld0NvbnN0YW50cyA9IHtcbiAgcHJldmlld01vZGFsU2VsZWN0b3I6IFwibW9kYWxfdHlwZV9wcmV2aWV3XCIsXG59O1xuXG5leHBvcnQgY29uc3QgZWRpdENvbnN0YW50cyA9IHtcbiAgZWRpdFByb2ZpbGVFbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybV90eXBlX2VkaXRcIiksXG4gIHByb2ZpbGVFZGl0QnV0dG9uRWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZWRpdC1idXR0b25cIiksXG4gIHByb2ZpbGVOYW1lRWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fbmFtZVwiKSxcbiAgcHJvZmlsZUFib3V0RWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWJvdXRcIiksXG4gIHByb2ZpbGVBdmF0YXJFbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hdmF0YXJcIiksXG4gIHByb2ZpbGVBdmF0YXJGb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtX3R5cGVfYXZhdGFyXCIpLFxuICBwcm9maWxlQXZhdGFyQnV0dG9uRWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYXZhdGFyLWJ1dHRvblwiKSxcbiAgZWRpdFByb2ZpbGVOYW1lSW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm0taXRlbV90eXBlX25hbWVcIiksXG4gIGVkaXRQcm9maWxlQWJvdXRJbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybS1pdGVtX3R5cGVfYWJvdXRcIiksXG4gIGVkaXRNb2RhbFNlbGVjdG9yOiBcIm1vZGFsX3R5cGVfZWRpdFwiLFxuICBhdmF0YXJNb2RhbFNlbGVjdG9yOiBcIm1vZGFsX3R5cGVfYXZhdGFyXCIsXG59O1xuXG5leHBvcnQgY29uc3QgYWRkQ29uc3RhbnRzID0ge1xuICBhZGRDYXJkc0VsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtX3R5cGVfYWRkXCIpLFxuICBhZGRDYXJkQnV0dG9uRWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkLWJ1dHRvblwiKSxcbiAgYWRkTW9kYWxTZWxlY3RvcjogXCJtb2RhbF90eXBlX2FkZFwiLFxuICBkZWxldGVDYXJkc0VsOiBcIm1vZGFsX3R5cGVfZGVsZXRlXCIsXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cbmltcG9ydCBpbml0aWFsQ2FyZHMgZnJvbSBcIi4uL3V0aWxzL0luaXRpYWxDYXJkcy5qc1wiO1xuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoRm9ybXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybXMuanNcIjtcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xuaW1wb3J0IEFwaSBmcm9tIFwiLi4vY29tcG9uZW50cy9BcGkuanNcIjtcbmltcG9ydCBQb3B1cERlbGV0ZUNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBEZWxldGVDYXJkXCI7XG5cbmltcG9ydCB7XG4gIHZhbGlkYXRpb25TZXR0aW5ncyxcbiAgY2FyZENvbnN0YW50cyxcbiAgcHJldmlld0NvbnN0YW50cyxcbiAgZWRpdENvbnN0YW50cyxcbiAgYWRkQ29uc3RhbnRzLFxufSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzLmpzXCI7XG5cbmZ1bmN0aW9uIGxvYWRpbmdIYW5kbGVyKGxvYWRpbmcsIG1vZGFsU2VsZWN0b3IsIHRleHQpIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHttb2RhbFNlbGVjdG9yfWApO1xuICBpZiAobG9hZGluZykge1xuICAgIG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3NhdmUtYnV0dG9uXCIpLnRleHRDb250ZW50ID0gdGV4dDtcbiAgfSBlbHNlIHtcbiAgICBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19zYXZlLWJ1dHRvblwiKS50ZXh0Q29udGVudCA9IHRleHQ7XG4gIH1cbn1cblxuY29uc3QgYXBpID0gbmV3IEFwaSh7XG4gIGJhc2VVcmw6IFwiaHR0cHM6Ly9hcm91bmQubm9tb3JlcGFydGllcy5jby92MS9ncm91cC0xM1wiLFxuICBoZWFkZXJzOiB7XG4gICAgYXV0aG9yaXphdGlvbjogXCIwZjk4MDc3Zi0xYjA4LTQ4MjktYWU1Ny02ZjgxYWI0NzM4MGNcIixcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgfSxcbn0pO1xuXG5hcGlcbiAgLmdldEluaXRpYWxQcm9maWxlKClcbiAgLnRoZW4oKHJlcykgPT4ge1xuICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKHJlcyk7XG4gIH0pXG4gIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgcmVuZGVyRXJyb3IoYEVycm9yOiR7ZXJyfWApO1xuICB9KTtcblxuYXBpXG4gIC5nZXRJbml0aWFsQ2FyZHMoKVxuICAudGhlbigocmVzKSA9PiB7XG4gICAgY2FyZExpc3QucmVuZGVySXRlbXMocmVzLnJldmVyc2UoKSk7XG4gIH0pXG4gIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgcmVuZGVyRXJyb3IoYEVycm9yOiR7ZXJyfWApO1xuICB9KTtcblxuY29uc3QgY3JlYXRlQ2FyZCA9IChjYXJkKSA9PiB7XG4gIGNvbnN0IGNhcmRJbnN0YW5jZSA9IG5ldyBDYXJkKFxuICAgIHtcbiAgICAgIGNhcmQsXG4gICAgICBoYW5kbGVQcmV2aWV3SW1nOiAoKSA9PiB7XG4gICAgICAgIGltYWdlTW9kYWwub3BlbihjYXJkKTtcbiAgICAgIH0sXG4gICAgICBoYW5kbGVEZWxldGVJY29uOiAoZXZ0KSA9PiB7XG4gICAgICAgIGRlbGV0ZUNhcmQub3BlbihldnQsIGNhcmQuX2lkKTtcbiAgICAgIH0sXG4gICAgICBoYW5kbGVMaWtlQnV0dG9uOiAoYnV0dG9uTGlrZWQpID0+IHtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbkxpa2VkID8gYXBpLmxpa2VDYXJkKGNhcmQuX2lkKSA6IGFwaS5yZW1vdmVMaWtlKGNhcmQuX2lkKTtcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIGNhcmRDb25zdGFudHMuY2FyZFNlbGVjdG9yXG4gICk7XG5cbiAgcmV0dXJuIGNhcmRJbnN0YW5jZTtcbn07XG5cbmNvbnN0IGNhcmRMaXN0ID0gbmV3IFNlY3Rpb24oXG4gIHtcbiAgICByZW5kZXJlcjogKGNhcmQpID0+IHtcbiAgICAgIGNvbnN0IG5ld0NhcmQgPSBjcmVhdGVDYXJkKGNhcmQpO1xuICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBuZXdDYXJkLmdldFZpZXcoKTtcbiAgICAgIGNhcmRMaXN0LmFkZEl0ZW0oY2FyZEVsZW1lbnQpO1xuICAgIH0sXG4gIH0sXG4gIGNhcmRDb25zdGFudHMucGxhY2VTZWxlY3RvclxuKTtcblxuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oe1xuICB1c2VyTmFtZVNlbGVjdG9yOiBlZGl0Q29uc3RhbnRzLnByb2ZpbGVOYW1lRWwsXG4gIHVzZXJBYm91dFNlbGVjdG9yOiBlZGl0Q29uc3RhbnRzLnByb2ZpbGVBYm91dEVsLFxuICB1c2VyQXZhdGFyU2VsZWN0b3I6IGVkaXRDb25zdGFudHMucHJvZmlsZUF2YXRhckVsLFxufSk7XG5cbmNvbnN0IGFkZEltYWdlUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybXMoe1xuICBtb2RhbFNlbGVjdG9yOiBhZGRDb25zdGFudHMuYWRkTW9kYWxTZWxlY3RvcixcbiAgaGFuZGxlRm9ybVN1Ym1pdDogKGNhcmQpID0+IHtcbiAgICBsb2FkaW5nSGFuZGxlcih0cnVlLCBhZGRDb25zdGFudHMuYWRkTW9kYWxTZWxlY3RvciwgXCJDcmVhdGluZy4uLlwiKTtcbiAgICBhcGlcbiAgICAgIC5mZXRjaENhcmQoY2FyZClcbiAgICAgIC50aGVuKChjYXJkRGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdDYXJkID0gY3JlYXRlQ2FyZChjYXJkRGF0YSk7XG4gICAgICAgIGNhcmRMaXN0LmFkZEl0ZW0obmV3Q2FyZC5nZXRWaWV3KCkpO1xuICAgICAgICBhZGRJbWFnZVBvcHVwLmNsb3NlKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgcmVuZGVyRXJyb3IoYEVycm9yOiR7ZXJyfWApO1xuICAgICAgfSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgbG9hZGluZ0hhbmRsZXIoZmFsc2UsIGFkZENvbnN0YW50cy5hZGRNb2RhbFNlbGVjdG9yLCBcIkNyZWF0ZVwiKTtcbiAgICAgIH0pO1xuICB9LFxufSk7XG5cbmNvbnN0IGNoYW5nZVByb2ZpbGVBdmF0YXJQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3Jtcyh7XG4gIG1vZGFsU2VsZWN0b3I6IGVkaXRDb25zdGFudHMuYXZhdGFyTW9kYWxTZWxlY3RvcixcbiAgaGFuZGxlRm9ybVN1Ym1pdDogKGF2YXRhcikgPT4ge1xuICAgIGxvYWRpbmdIYW5kbGVyKHRydWUsIGVkaXRDb25zdGFudHMuYXZhdGFyTW9kYWxTZWxlY3RvciwgXCJDaGFuZ2luZy4uLlwiKTtcblxuICAgIGFwaVxuICAgICAgLmNoYW5nZVByb2ZpbGVBdmF0YXIoYXZhdGFyKVxuICAgICAgLnRoZW4oKGF2YXRhckRhdGEpID0+IHtcbiAgICAgICAgdXNlckluZm8uc2V0QXZhdGFySW1nKGF2YXRhckRhdGEpO1xuICAgICAgICBjaGFuZ2VQcm9maWxlQXZhdGFyUG9wdXAuY2xvc2UoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICByZW5kZXJFcnJvcihgRXJyb3I6JHtlcnJ9YCk7XG4gICAgICB9KVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBsb2FkaW5nSGFuZGxlcihmYWxzZSwgZWRpdENvbnN0YW50cy5hdmF0YXJNb2RhbFNlbGVjdG9yLCBcIkNoYW5nZVwiKTtcbiAgICAgIH0pO1xuICB9LFxufSk7XG5cbmNvbnN0IGRlbGV0ZUNhcmQgPSBuZXcgUG9wdXBEZWxldGVDYXJkKHtcbiAgbW9kYWxTZWxlY3RvcjogYWRkQ29uc3RhbnRzLmRlbGV0ZUNhcmRzRWwsXG4gIGhhbmRsZUZvcm1TdWJtaXQ6IChjYXJkRWxlbWVudCwgY2FyZElkKSA9PiB7XG4gICAgbG9hZGluZ0hhbmRsZXIodHJ1ZSwgYWRkQ29uc3RhbnRzLmRlbGV0ZUNhcmRzRWwsIFwiRGVsZXRpbmcuLi5cIik7XG4gICAgYXBpXG4gICAgICAuZGVsZXRlQ2FyZChjYXJkSWQpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGNhcmRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICBkZWxldGVDYXJkLmNsb3NlKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgcmVuZGVyRXJyb3IoYEVycm9yOiR7ZXJyfWApO1xuICAgICAgfSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgbG9hZGluZ0hhbmRsZXIoZmFsc2UsIGFkZENvbnN0YW50cy5kZWxldGVDYXJkc0VsLCBcIlllc1wiKTtcbiAgICAgIH0pO1xuICB9LFxufSk7XG5cbmNvbnN0IHVzZXJJbmZvUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybXMoe1xuICBtb2RhbFNlbGVjdG9yOiBlZGl0Q29uc3RhbnRzLmVkaXRNb2RhbFNlbGVjdG9yLFxuICBoYW5kbGVGb3JtU3VibWl0OiAocHJvZmlsZSkgPT4ge1xuICAgIGxvYWRpbmdIYW5kbGVyKHRydWUsIGVkaXRDb25zdGFudHMuZWRpdE1vZGFsU2VsZWN0b3IsIFwiVXBkYXRpbmcuLi5cIik7XG4gICAgYXBpXG4gICAgICAuZmV0Y2hQcm9maWxlSW5mbyhwcm9maWxlKVxuICAgICAgLnRoZW4oKHByb2ZpbGVEYXRhKSA9PiB7XG4gICAgICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKHByb2ZpbGVEYXRhKTtcbiAgICAgICAgdXNlckluZm9Qb3B1cC5jbG9zZSgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHJlbmRlckVycm9yKGBFcnJvcjoke2Vycn1gKTtcbiAgICAgIH0pXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIGxvYWRpbmdIYW5kbGVyKGZhbHNlLCBlZGl0Q29uc3RhbnRzLmVkaXRNb2RhbFNlbGVjdG9yLCBcIlVwZGF0ZVwiKTtcbiAgICAgIH0pO1xuICB9LFxufSk7XG5cbmNvbnN0IGltYWdlTW9kYWwgPSBuZXcgUG9wdXBXaXRoSW1hZ2UocHJldmlld0NvbnN0YW50cy5wcmV2aWV3TW9kYWxTZWxlY3Rvcik7XG5cbmNvbnN0IGVkaXRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoXG4gIHZhbGlkYXRpb25TZXR0aW5ncyxcbiAgZWRpdENvbnN0YW50cy5lZGl0UHJvZmlsZUVsXG4pO1xuY29uc3QgYWRkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKFxuICB2YWxpZGF0aW9uU2V0dGluZ3MsXG4gIGFkZENvbnN0YW50cy5hZGRDYXJkc0VsXG4pO1xuXG5jb25zdCBhdmF0YXJGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoXG4gIHZhbGlkYXRpb25TZXR0aW5ncyxcbiAgZWRpdENvbnN0YW50cy5wcm9maWxlQXZhdGFyRm9ybVxuKTtcblxuZWRpdEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuYWRkRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5hdmF0YXJGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcblxuYWRkSW1hZ2VQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuaW1hZ2VNb2RhbC5zZXRFdmVudExpc3RlbmVycygpO1xudXNlckluZm9Qb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuZGVsZXRlQ2FyZC5zZXRFdmVudExpc3RlbmVycygpO1xuY2hhbmdlUHJvZmlsZUF2YXRhclBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbi8vLy8vUE9QVVAgQlVUVE9OUy8vLy8vXG5cbmFkZENvbnN0YW50cy5hZGRDYXJkQnV0dG9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYWRkRm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcbiAgYWRkSW1hZ2VQb3B1cC5vcGVuKCk7XG59KTtcblxuZWRpdENvbnN0YW50cy5wcm9maWxlQXZhdGFyQnV0dG9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYXZhdGFyRm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcbiAgY2hhbmdlUHJvZmlsZUF2YXRhclBvcHVwLm9wZW4oKTtcbn0pO1xuXG5lZGl0Q29uc3RhbnRzLnByb2ZpbGVFZGl0QnV0dG9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgcHJvZmlsZURhdGEgPSB1c2VySW5mby5nZXRVc2VySW5mbygpO1xuICBlZGl0Q29uc3RhbnRzLmVkaXRQcm9maWxlTmFtZUlucHV0LnZhbHVlID0gcHJvZmlsZURhdGEubmFtZTtcbiAgZWRpdENvbnN0YW50cy5lZGl0UHJvZmlsZUFib3V0SW5wdXQudmFsdWUgPSBwcm9maWxlRGF0YS5hYm91dDtcblxuICBlZGl0Rm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcbiAgdXNlckluZm9Qb3B1cC5vcGVuKCk7XG59KTtcbiJdLCJuYW1lcyI6WyJBcGkiLCJvcHRpb25zIiwiYmFzZVVybCIsImhlYWRlcnMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJvayIsImpzb24iLCJQcm9taXNlIiwicmVqZWN0IiwibmFtZSIsImxpbmsiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFib3V0IiwiYXZhdGFyIiwiY2FyZElkIiwic3RhdHVzIiwiQ2FyZCIsImNhcmRTZWxlY3RvciIsImNhcmQiLCJoYW5kbGVQcmV2aWV3SW1nIiwiaGFuZGxlRGVsZXRlSWNvbiIsImhhbmRsZUxpa2VCdXR0b24iLCJfdXNlcklkIiwiX25hbWUiLCJfbGluayIsIl9saWtlZENhcmQiLCJsaWtlcyIsIl9udW1iZXJMaWtlcyIsImxlbmd0aCIsIl9oYW5kbGVQcmV2aWV3SW1nIiwiX2hhbmRsZURlbGV0ZUljb24iLCJfaGFuZGxlTGlrZUJ1dHRvbiIsIl9vd25lcklkIiwib3duZXIiLCJfaWQiLCJfY2FyZElkIiwiX2NhcmRUZW1wbGF0ZSIsInRlbXBsYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9lbGVtZW50IiwidGV4dENvbnRlbnQiLCJlIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ0b2dnbGUiLCJfY2hlY2tMaWtlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfZGVsZXRlQnV0dG9uIiwiZXZ0IiwicmVtb3ZlIiwiX2xpa2VCdXR0b24iLCJfbGlrZWQiLCJ1c2VyTGlrZUNhcmQiLCJzb21lIiwiaXRlbSIsImFkZCIsIl9nZXRUZW1wbGF0ZSIsIl9zZXRFdmVudExpc3RlbmVycyIsImNhcmRJbWciLCJzcmMiLCJhbHQiLCJfZ2V0SW5pdGFsTGlrZXMiLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZ3MiLCJmb3JtRWxlbWVudCIsImZvcm1FbCIsImlucHV0IiwiZXJyb3JTcGFuIiwiaWQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9lcnJvckNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsInZhbGlkaXR5IiwidmFsaWQiLCJfaGlkZUlucHV0RXJyb3IiLCJfc2hvd0lucHV0RXJyb3IiLCJpbnB1dHMiLCJldmVyeSIsImJ1dHRvbkVsIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2lzVmFsaWQiLCJkaXNhYmxlZCIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtRWwiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiX3RvZ2dsZUJ1dHRvbiIsImZvckVhY2giLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIlBvcHVwIiwibW9kYWxTZWxlY3RvciIsIl9tb2RhbEVsZW1lbnQiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwiY2xvc2UiLCJrZXkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUG9wdXBEZWxldGVDYXJkIiwiaGFuZGxlRm9ybVN1Ym1pdCIsIl9tb2RhbEZvcm0iLCJfaGFuZGxlRm9ybVN1Ym1pdCIsIl9idXR0b24iLCJfY2FyZCIsInBhcmVudEVsZW1lbnQiLCJQb3B1cFdpdGhGb3JtcyIsIl9pbnB1dHMiLCJfZm9ybVZhbHVlcyIsInZhbHVlIiwiX2dldElucHV0VmFsdWVzIiwicmVzZXQiLCJQb3B1cFdpdGhJbWFnZSIsImltYWdlIiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwicmVuZGVyZXIiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwiZWxlbWVudCIsInByZXBlbmQiLCJpdGVtcyIsIlVzZXJJbmZvIiwidXNlck5hbWVTZWxlY3RvciIsInVzZXJBYm91dFNlbGVjdG9yIiwidXNlckF2YXRhclNlbGVjdG9yIiwiX3VzZXJOYW1lU2VsZWN0b3IiLCJfdXNlckFib3V0U2VsZWN0b3IiLCJfdXNlckF2YXRhclNlbGVjdG9yIiwidXNlckRhdGEiLCJkYXRhIiwieW9zZW1pdGVJbWciLCJsYWtlSW1nIiwibW91bnRhaW5zSW1nIiwibGF0ZW1hckltZyIsInZhbm9pc2VJbWciLCJsYWdvSW1nIiwiaW5pdGlhbENhcmRzIiwidmFsaWRhdGlvblNldHRpbmdzIiwiZm9ybVNlbGVjdG9yIiwiY2FyZENvbnN0YW50cyIsInBsYWNlU2VsZWN0b3IiLCJwcmV2aWV3Q29uc3RhbnRzIiwicHJldmlld01vZGFsU2VsZWN0b3IiLCJlZGl0Q29uc3RhbnRzIiwiZWRpdFByb2ZpbGVFbCIsInByb2ZpbGVFZGl0QnV0dG9uRWwiLCJwcm9maWxlTmFtZUVsIiwicHJvZmlsZUFib3V0RWwiLCJwcm9maWxlQXZhdGFyRWwiLCJwcm9maWxlQXZhdGFyRm9ybSIsInByb2ZpbGVBdmF0YXJCdXR0b25FbCIsImVkaXRQcm9maWxlTmFtZUlucHV0IiwiZWRpdFByb2ZpbGVBYm91dElucHV0IiwiZWRpdE1vZGFsU2VsZWN0b3IiLCJhdmF0YXJNb2RhbFNlbGVjdG9yIiwiYWRkQ29uc3RhbnRzIiwiYWRkQ2FyZHNFbCIsImFkZENhcmRCdXR0b25FbCIsImFkZE1vZGFsU2VsZWN0b3IiLCJkZWxldGVDYXJkc0VsIiwibG9hZGluZ0hhbmRsZXIiLCJsb2FkaW5nIiwidGV4dCIsIm1vZGFsIiwiYXBpIiwiYXV0aG9yaXphdGlvbiIsImdldEluaXRpYWxQcm9maWxlIiwidXNlckluZm8iLCJzZXRVc2VySW5mbyIsImNhdGNoIiwiZXJyIiwicmVuZGVyRXJyb3IiLCJnZXRJbml0aWFsQ2FyZHMiLCJjYXJkTGlzdCIsInJlbmRlckl0ZW1zIiwicmV2ZXJzZSIsImNyZWF0ZUNhcmQiLCJjYXJkSW5zdGFuY2UiLCJpbWFnZU1vZGFsIiwib3BlbiIsImRlbGV0ZUNhcmQiLCJidXR0b25MaWtlZCIsImxpa2VDYXJkIiwicmVtb3ZlTGlrZSIsIm5ld0NhcmQiLCJjYXJkRWxlbWVudCIsImdldFZpZXciLCJhZGRJdGVtIiwiYWRkSW1hZ2VQb3B1cCIsImZldGNoQ2FyZCIsImNhcmREYXRhIiwiZmluYWxseSIsImNoYW5nZVByb2ZpbGVBdmF0YXJQb3B1cCIsImNoYW5nZVByb2ZpbGVBdmF0YXIiLCJhdmF0YXJEYXRhIiwic2V0QXZhdGFySW1nIiwidXNlckluZm9Qb3B1cCIsInByb2ZpbGUiLCJmZXRjaFByb2ZpbGVJbmZvIiwicHJvZmlsZURhdGEiLCJlZGl0Rm9ybVZhbGlkYXRvciIsImFkZEZvcm1WYWxpZGF0b3IiLCJhdmF0YXJGb3JtVmFsaWRhdG9yIiwiZW5hYmxlVmFsaWRhdGlvbiIsInNldEV2ZW50TGlzdGVuZXJzIiwicmVzZXRWYWxpZGF0aW9uIiwiZ2V0VXNlckluZm8iXSwic291cmNlUm9vdCI6IiJ9