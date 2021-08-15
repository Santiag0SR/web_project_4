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
        handleLikeButton = _ref.handleLikeButton,
        userId = _ref.userId;

    _classCallCheck(this, Card);

    this._userId = userId;
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
      }).catch(function (err) {
        console.log("Error:".concat(err));
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
    var userName = _ref.userName,
        userAbout = _ref.userAbout,
        userAvatar = _ref.userAvatar;

    _classCallCheck(this, UserInfo);

    this._userName = userName;
    this._userAbout = userAbout;
    this._userAvatar = userAvatar;
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      this.userData = {
        name: this._userName.textContent,
        about: this._userAbout.textContent,
        avatar: this._userAvatar.src
      };
      return this.userData;
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(data) {
      this._userName.textContent = data.name;
      this._userAbout.textContent = data.about;
      this._userAvatar.src = data.avatar;
      this._userId = data._id;
    }
  }, {
    key: "getId",
    value: function getId() {
      return this._userId;
    }
  }, {
    key: "setAvatarImg",
    value: function setAvatarImg(data) {
      this._userAvatar.src = data.avatar;
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
    },
    userId: userInfo.getId()
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
  userName: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.editConstants.profileNameEl,
  userAbout: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.editConstants.profileAboutEl,
  userAvatar: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.editConstants.profileAvatarEl
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQWIsRUFBQUEsd0JBQXdCLENBQUNkLElBQXpCO0FBQ0QsQ0FIRDtBQUtBakMsbUdBQUEsQ0FBbUQsT0FBbkQsRUFBNEQsWUFBTTtBQUNoRSxNQUFNc0QsV0FBVyxHQUFHOUIsUUFBUSxDQUFDcUMsV0FBVCxFQUFwQjtBQUNBN0QsRUFBQUEseUZBQUEsR0FBMkNzRCxXQUFXLENBQUN4TSxJQUF2RDtBQUNBa0osRUFBQUEsMEZBQUEsR0FBNENzRCxXQUFXLENBQUNsTSxLQUF4RDtBQUVBbU0sRUFBQUEsaUJBQWlCLENBQUNLLGVBQWxCO0FBQ0FULEVBQUFBLGFBQWEsQ0FBQ2xCLElBQWQ7QUFDRCxDQVBELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9BcGkuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwRGVsZXRlQ2FyZC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3Jtcy5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcmFjdGljdW0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuYmFzZVVybCA9IG9wdGlvbnMuYmFzZVVybDtcbiAgICB0aGlzLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XG4gIH1cblxuICBfY2hlY2tlcnJvcnMocmVzKSB7XG4gICAgaWYgKHJlcy5vaykge1xuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIkVycm9yXCIpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFByb2ZpbGUoKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuYmFzZVVybH0vdXNlcnMvbWVgLCB7XG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgfSkudGhlbigocmVzKSA9PiB0aGlzLl9jaGVja2Vycm9ycyhyZXMpKTtcbiAgfVxuXG4gIGdldEluaXRpYWxDYXJkcygpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS9jYXJkc2AsIHtcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHRoaXMuX2NoZWNrZXJyb3JzKHJlcykpO1xuICB9XG5cbiAgZmV0Y2hDYXJkKHsgbmFtZSwgbGluayB9KSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuYmFzZVVybH0vY2FyZHNgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lLCBsaW5rIH0pLFxuICAgIH0pLnRoZW4oKHJlcykgPT4gdGhpcy5fY2hlY2tlcnJvcnMocmVzKSk7XG4gIH1cblxuICBmZXRjaFByb2ZpbGVJbmZvKHsgbmFtZSwgYWJvdXQgfSkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VVcmx9L3VzZXJzL21lYCwge1xuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWU6IG5hbWUsIGFib3V0OiBhYm91dCB9KSxcbiAgICB9KS50aGVuKHRoaXMuX2NoZWNrZXJyb3JzKHJlcykpO1xuICB9XG5cbiAgY2hhbmdlUHJvZmlsZUF2YXRhcih7IGF2YXRhciB9KSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuYmFzZVVybH0vdXNlcnMvbWUvYXZhdGFyYCwge1xuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGF2YXRhcjogYXZhdGFyIH0pLFxuICAgIH0pLnRoZW4oKHJlcykgPT4gdGhpcy5fY2hlY2tlcnJvcnMocmVzKSk7XG4gIH1cblxuICBkZWxldGVDYXJkKGNhcmRJZCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VVcmx9L2NhcmRzLyR7Y2FyZElkfWAsIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHRoaXMuX2NoZWNrZXJyb3JzKHJlcykpO1xuICB9XG5cbiAgbGlrZUNhcmQoY2FyZElkKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuYmFzZVVybH0vY2FyZHMvbGlrZXMvJHtjYXJkSWR9YCwge1xuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgIH0pLnRoZW4oKHJlcykgPT4gdGhpcy5fY2hlY2tlcnJvcnMocmVzKSk7XG4gIH1cblxuICByZW1vdmVMaWtlKGNhcmRJZCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VVcmx9L2NhcmRzL2xpa2VzLyR7Y2FyZElkfWAsIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHRoaXMuX2NoZWNrZXJyb3JzKHJlcykpO1xuICB9XG59XG4iLCJjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IoXG4gICAgeyBjYXJkLCBoYW5kbGVQcmV2aWV3SW1nLCBoYW5kbGVEZWxldGVJY29uLCBoYW5kbGVMaWtlQnV0dG9uLCB1c2VySWQgfSxcbiAgICBjYXJkU2VsZWN0b3JcbiAgKSB7XG4gICAgdGhpcy5fdXNlcklkID0gdXNlcklkO1xuICAgIHRoaXMuX25hbWUgPSBjYXJkLm5hbWU7XG4gICAgdGhpcy5fbGluayA9IGNhcmQubGluaztcbiAgICB0aGlzLl9saWtlZENhcmQgPSBjYXJkLmxpa2VzO1xuICAgIHRoaXMuX251bWJlckxpa2VzID0gY2FyZC5saWtlcy5sZW5ndGg7XG4gICAgdGhpcy5faGFuZGxlUHJldmlld0ltZyA9IGhhbmRsZVByZXZpZXdJbWc7XG4gICAgdGhpcy5faGFuZGxlRGVsZXRlSWNvbiA9IGhhbmRsZURlbGV0ZUljb247XG4gICAgdGhpcy5faGFuZGxlTGlrZUJ1dHRvbiA9IGhhbmRsZUxpa2VCdXR0b247XG4gICAgdGhpcy5fb3duZXJJZCA9IGNhcmQub3duZXIuX2lkO1xuICAgIHRoaXMuX2NhcmRJZCA9IGNhcmQuX2lkO1xuXG4gICAgdGhpcy5fY2FyZFRlbXBsYXRlID0gY2FyZFNlbGVjdG9yO1xuICB9XG5cbiAgX2dldFRlbXBsYXRlKCkge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmRUZW1wbGF0ZSlcbiAgICAgIC5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZFwiKVxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcblxuICAgIHRoaXMuX2VsZW1lbnQgPSB0ZW1wbGF0ZTtcbiAgfVxuXG4gIF9jaGVja0xpa2VzKGNhcmQpIHtcbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fdGV4dF9saWtlcy1udW1iZXJcIikudGV4dENvbnRlbnQgPVxuICAgICAgY2FyZC5saWtlcy5sZW5ndGg7XG4gIH1cblxuICBfbGlrZWQoZSkge1xuICAgIHRoaXMuX2hhbmRsZUxpa2VCdXR0b24oXG4gICAgICAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FyZF9fbGlrZS1idXR0b25fYWN0aXZlXCIpXG4gICAgKVxuICAgICAgLnRoZW4oKGNhcmQpID0+IHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImNhcmRfX2xpa2UtYnV0dG9uX2FjdGl2ZVwiKTtcbiAgICAgICAgdGhpcy5fY2hlY2tMaWtlcyhjYXJkKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6JHtlcnJ9YCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9lbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWdcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5faGFuZGxlUHJldmlld0ltZygpKTtcblxuICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19kZWxldGUtYnV0dG9uXCIpO1xuICAgIGlmICh0aGlzLl9vd25lcklkID09PSB0aGlzLl91c2VySWQpIHtcbiAgICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuICAgICAgICB0aGlzLl9oYW5kbGVEZWxldGVJY29uKGV2dCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGVsZXRlQnV0dG9uLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2xpa2VCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZS1idXR0b25cIik7XG4gICAgdGhpcy5fbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHRoaXMuX2xpa2VkKGUpO1xuICAgIH0pO1xuICB9XG5cbiAgX2dldEluaXRhbExpa2VzKCkge1xuICAgIGNvbnN0IHVzZXJMaWtlQ2FyZCA9IHRoaXMuX2xpa2VkQ2FyZC5zb21lKFxuICAgICAgKGl0ZW0pID0+IGl0ZW0uX2lkID09PSB0aGlzLl91c2VySWRcbiAgICApO1xuICAgIGlmICh1c2VyTGlrZUNhcmQpIHtcbiAgICAgIHRoaXMuX2xpa2VCdXR0b24uY2xhc3NMaXN0LmFkZChcImNhcmRfX2xpa2UtYnV0dG9uX2FjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fdGV4dF9saWtlcy1udW1iZXJcIikudGV4dENvbnRlbnQgPVxuICAgICAgdGhpcy5fbnVtYmVyTGlrZXM7XG4gIH1cblxuICBnZXRWaWV3KCkge1xuICAgIHRoaXMuX2dldFRlbXBsYXRlKCk7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIGNvbnN0IGNhcmRJbWcgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1nXCIpO1xuXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RleHRcIikudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xuICAgIGNhcmRJbWcuc3JjID0gdGhpcy5fbGluaztcbiAgICBjYXJkSW1nLmFsdCA9IHRoaXMuX25hbWU7XG4gICAgdGhpcy5fZ2V0SW5pdGFsTGlrZXMoY2FyZEltZyk7XG5cbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtRWxlbWVudCkge1xuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBzZXR0aW5ncy5pbnB1dFNlbGVjdG9yO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gc2V0dGluZ3Muc3VibWl0QnV0dG9uU2VsZWN0b3I7XG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IHNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3M7XG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzO1xuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBzZXR0aW5ncy5lcnJvckNsYXNzO1xuXG4gICAgdGhpcy5fZm9ybUVsID0gZm9ybUVsZW1lbnQ7XG4gIH1cblxuICBfc2hvd0lucHV0RXJyb3IgPSAoZm9ybUVsLCBpbnB1dCkgPT4ge1xuICAgIGNvbnN0IGVycm9yU3BhbiA9IGZvcm1FbC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dC5pZH0tZXJyb3JgKTtcbiAgICAvLyBhZGQgZXJyb3IgbWVzc2FnZS9jbGFzc1xuICAgIGVycm9yU3Bhbi50ZXh0Q29udGVudCA9IGlucHV0LnZhbGlkYXRpb25NZXNzYWdlO1xuICAgIGVycm9yU3Bhbi5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgfTtcblxuICBfaGlkZUlucHV0RXJyb3IgPSAoZm9ybUVsLCBpbnB1dCkgPT4ge1xuICAgIGNvbnN0IGVycm9yU3BhbiA9IGZvcm1FbC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dC5pZH0tZXJyb3JgKTtcbiAgICAvLyBhZGQgZXJyb3IgbWVzc2FnZS9jbGFzc1xuICAgIGVycm9yU3Bhbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZXJyb3JTcGFuLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICB9O1xuXG4gIF9jaGVja0lucHV0VmFsaWRpdHkgPSAoZm9ybUVsLCBpbnB1dCkgPT4ge1xuICAgIGlmIChpbnB1dC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoZm9ybUVsLCBpbnB1dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGZvcm1FbCwgaW5wdXQpO1xuICAgIH1cbiAgfTtcblxuICBfaXNWYWxpZCA9IChpbnB1dHMpID0+IHtcbiAgICByZXR1cm4gaW5wdXRzLmV2ZXJ5KChpbnB1dCkgPT4gaW5wdXQudmFsaWRpdHkudmFsaWQpO1xuICB9O1xuXG4gIF90b2dnbGVCdXR0b24gPSAoZm9ybUVsLCBpbnB1dHMpID0+IHtcbiAgICBjb25zdCBidXR0b25FbCA9IGZvcm1FbC5xdWVyeVNlbGVjdG9yKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcbiAgICBpZiAodGhpcy5faXNWYWxpZChpbnB1dHMpKSB7XG4gICAgICBidXR0b25FbC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgYnV0dG9uRWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uRWwuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgYnV0dG9uRWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICB9XG4gIH07XG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKGZvcm1FbCkge1xuICAgIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20oZm9ybUVsLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcikpO1xuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvbihmb3JtRWwsIGlucHV0cyk7XG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICAvLyBjaGVjayB2YWxpZGl0eVxuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoZm9ybUVsLCBpbnB1dCk7XG4gICAgICAgIC8vdG9nZ2xlIGJ1dHRvblxuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b24oZm9ybUVsLCBpbnB1dHMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNldFZhbGlkYXRpb24oKSB7XG4gICAgY29uc3QgaW5wdXRzID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXG4gICAgKTtcblxuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvbih0aGlzLl9mb3JtRWwsIGlucHV0cyk7XG5cbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKHRoaXMuX2Zvcm1FbCwgaW5wdXQpO1xuICAgIH0pO1xuICB9XG5cbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLl9mb3JtRWwuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKHRoaXMuX2Zvcm1FbCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybVZhbGlkYXRvcjtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IobW9kYWxTZWxlY3Rvcikge1xuICAgIHRoaXMuX21vZGFsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke21vZGFsU2VsZWN0b3J9YCk7XG4gICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fbW9kYWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbFwiKSB8fFxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbF9fY2xvc2UtYnV0dG9uXCIpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX2hhbmRsZUVzY0Nsb3NlKGUpIHtcbiAgICBpZiAoZS5rZXkgPT0gXCJFc2NhcGVcIikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5fbW9kYWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuXCIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuX21vZGFsRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfb3BlblwiKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cERlbGV0ZUNhcmQgZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHsgbW9kYWxTZWxlY3RvciwgaGFuZGxlRm9ybVN1Ym1pdCB9KSB7XG4gICAgc3VwZXIobW9kYWxTZWxlY3Rvcik7XG5cbiAgICB0aGlzLl9tb2RhbEZvcm0gPSB0aGlzLl9tb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybVwiKTtcbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDtcbiAgICB0aGlzLl9idXR0b24gPSB0aGlzLl9tb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fc2F2ZS1idXR0b25cIik7XG4gIH1cblxuICBvcGVuKGV2dCwgY2FyZElkKSB7XG4gICAgc3VwZXIub3BlbigpO1xuICAgIHRoaXMuX2NhcmRJZCA9IGNhcmRJZDtcbiAgICB0aGlzLl9jYXJkID0gZXZ0LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fbW9kYWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQodGhpcy5fY2FyZCwgdGhpcy5fY2FyZElkKTtcbiAgICB9KTtcblxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtcyBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IoeyBtb2RhbFNlbGVjdG9yLCBoYW5kbGVGb3JtU3VibWl0IH0pIHtcbiAgICBzdXBlcihtb2RhbFNlbGVjdG9yKTtcblxuICAgIHRoaXMuX21vZGFsRm9ybSA9IHRoaXMuX21vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtXCIpO1xuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xuICAgIHRoaXMuX2J1dHRvbiA9IHRoaXMuX21vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19zYXZlLWJ1dHRvblwiKTtcbiAgfVxuXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcbiAgICB0aGlzLl9pbnB1dHMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy5fbW9kYWxGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWxfX2Zvcm0taXRlbVwiKVxuICAgICk7XG5cbiAgICB0aGlzLl9mb3JtVmFsdWVzID0ge307XG5cbiAgICB0aGlzLl9pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIHRoaXMuX2Zvcm1WYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLl9mb3JtVmFsdWVzO1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fbW9kYWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XG4gICAgfSk7XG5cbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fbW9kYWxGb3JtLnJlc2V0KCk7XG5cbiAgICBzdXBlci5jbG9zZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XG4gIG9wZW4oeyBsaW5rLCBuYW1lIH0pIHtcbiAgICB0aGlzLl9tb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fcHJldmlldy1jYXB0aW9uXCIpLnRleHRDb250ZW50ID1cbiAgICAgIG5hbWU7XG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLl9tb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fcHJldmlldy1pbWFnZVwiKTtcbiAgICBpbWFnZS5zcmMgPSBsaW5rO1xuICAgIGltYWdlLmFsdCA9IG5hbWU7XG4gICAgc3VwZXIub3BlbigpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcbiAgY29uc3RydWN0b3IoeyByZW5kZXJlciB9LCBjb250YWluZXJTZWxlY3Rvcikge1xuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y29udGFpbmVyU2VsZWN0b3J9YCk7XG4gIH1cblxuICBhZGRJdGVtKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcbiAgfVxuXG4gIHJlbmRlckl0ZW1zKGl0ZW1zKSB7XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcbiAgY29uc3RydWN0b3IoeyB1c2VyTmFtZSwgdXNlckFib3V0LCB1c2VyQXZhdGFyIH0pIHtcbiAgICB0aGlzLl91c2VyTmFtZSA9IHVzZXJOYW1lO1xuICAgIHRoaXMuX3VzZXJBYm91dCA9IHVzZXJBYm91dDtcbiAgICB0aGlzLl91c2VyQXZhdGFyID0gdXNlckF2YXRhcjtcbiAgfVxuXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIHRoaXMudXNlckRhdGEgPSB7XG4gICAgICBuYW1lOiB0aGlzLl91c2VyTmFtZS50ZXh0Q29udGVudCxcbiAgICAgIGFib3V0OiB0aGlzLl91c2VyQWJvdXQudGV4dENvbnRlbnQsXG4gICAgICBhdmF0YXI6IHRoaXMuX3VzZXJBdmF0YXIuc3JjLFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy51c2VyRGF0YTtcbiAgfVxuXG4gIHNldFVzZXJJbmZvKGRhdGEpIHtcbiAgICB0aGlzLl91c2VyTmFtZS50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgICB0aGlzLl91c2VyQWJvdXQudGV4dENvbnRlbnQgPSBkYXRhLmFib3V0O1xuICAgIHRoaXMuX3VzZXJBdmF0YXIuc3JjID0gZGF0YS5hdmF0YXI7XG4gICAgdGhpcy5fdXNlcklkID0gZGF0YS5faWQ7XG4gIH1cblxuICBnZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlcklkO1xuICB9XG5cbiAgc2V0QXZhdGFySW1nKGRhdGEpIHtcbiAgICB0aGlzLl91c2VyQXZhdGFyLnNyYyA9IGRhdGEuYXZhdGFyO1xuICB9XG59XG4iLCIvL1ZBTElEQVRJT04gU0VUVElOR1NcbmV4cG9ydCBjb25zdCB2YWxpZGF0aW9uU2V0dGluZ3MgPSB7XG4gIGZvcm1TZWxlY3RvcjogXCIubW9kYWxfX2Zvcm1cIixcbiAgaW5wdXRTZWxlY3RvcjogXCIubW9kYWxfX2Zvcm0taXRlbVwiLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIubW9kYWxfX3NhdmUtYnV0dG9uXCIsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwibW9kYWxfX3NhdmUtYnV0dG9uX2Rpc2FibGVkXCIsXG4gIGlucHV0RXJyb3JDbGFzczogXCJtb2RhbF9fZm9ybS1pdGVtX3R5cGVfZXJyb3JcIixcbiAgZXJyb3JDbGFzczogXCJtb2RhbF9fZXJyb3JfdmlzaWJsZVwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGNhcmRDb25zdGFudHMgPSB7XG4gIGNhcmRTZWxlY3RvcjogXCIjY2FyZC10ZW1wbGF0ZVwiLFxuICBwbGFjZVNlbGVjdG9yOiBcImVsZW1lbnRzXCIsXG59O1xuXG5leHBvcnQgY29uc3QgcHJldmlld0NvbnN0YW50cyA9IHtcbiAgcHJldmlld01vZGFsU2VsZWN0b3I6IFwibW9kYWxfdHlwZV9wcmV2aWV3XCIsXG59O1xuXG5leHBvcnQgY29uc3QgZWRpdENvbnN0YW50cyA9IHtcbiAgZWRpdFByb2ZpbGVFbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybV90eXBlX2VkaXRcIiksXG4gIHByb2ZpbGVFZGl0QnV0dG9uRWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZWRpdC1idXR0b25cIiksXG4gIHByb2ZpbGVOYW1lRWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fbmFtZVwiKSxcbiAgcHJvZmlsZUFib3V0RWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWJvdXRcIiksXG4gIHByb2ZpbGVBdmF0YXJFbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hdmF0YXJcIiksXG4gIHByb2ZpbGVBdmF0YXJGb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtX3R5cGVfYXZhdGFyXCIpLFxuICBwcm9maWxlQXZhdGFyQnV0dG9uRWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYXZhdGFyLWJ1dHRvblwiKSxcbiAgZWRpdFByb2ZpbGVOYW1lSW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm0taXRlbV90eXBlX25hbWVcIiksXG4gIGVkaXRQcm9maWxlQWJvdXRJbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybS1pdGVtX3R5cGVfYWJvdXRcIiksXG4gIGVkaXRNb2RhbFNlbGVjdG9yOiBcIm1vZGFsX3R5cGVfZWRpdFwiLFxuICBhdmF0YXJNb2RhbFNlbGVjdG9yOiBcIm1vZGFsX3R5cGVfYXZhdGFyXCIsXG59O1xuXG5leHBvcnQgY29uc3QgYWRkQ29uc3RhbnRzID0ge1xuICBhZGRDYXJkc0VsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtX3R5cGVfYWRkXCIpLFxuICBhZGRDYXJkQnV0dG9uRWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkLWJ1dHRvblwiKSxcbiAgYWRkTW9kYWxTZWxlY3RvcjogXCJtb2RhbF90eXBlX2FkZFwiLFxuICBkZWxldGVDYXJkc0VsOiBcIm1vZGFsX3R5cGVfZGVsZXRlXCIsXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcbmltcG9ydCBQb3B1cFdpdGhGb3JtcyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3Jtcy5qc1wiO1xuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XG5pbXBvcnQgQXBpIGZyb20gXCIuLi9jb21wb25lbnRzL0FwaS5qc1wiO1xuaW1wb3J0IFBvcHVwRGVsZXRlQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cERlbGV0ZUNhcmRcIjtcblxuaW1wb3J0IHtcbiAgdmFsaWRhdGlvblNldHRpbmdzLFxuICBjYXJkQ29uc3RhbnRzLFxuICBwcmV2aWV3Q29uc3RhbnRzLFxuICBlZGl0Q29uc3RhbnRzLFxuICBhZGRDb25zdGFudHMsXG59IGZyb20gXCIuLi91dGlscy9jb25zdGFudHMuanNcIjtcblxuZnVuY3Rpb24gbG9hZGluZ0hhbmRsZXIobG9hZGluZywgbW9kYWxTZWxlY3RvciwgdGV4dCkge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke21vZGFsU2VsZWN0b3J9YCk7XG4gIGlmIChsb2FkaW5nKSB7XG4gICAgbW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fc2F2ZS1idXR0b25cIikudGV4dENvbnRlbnQgPSB0ZXh0O1xuICB9IGVsc2Uge1xuICAgIG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3NhdmUtYnV0dG9uXCIpLnRleHRDb250ZW50ID0gdGV4dDtcbiAgfVxufVxuXG5jb25zdCBhcGkgPSBuZXcgQXBpKHtcbiAgYmFzZVVybDogXCJodHRwczovL2Fyb3VuZC5ub21vcmVwYXJ0aWVzLmNvL3YxL2dyb3VwLTEzXCIsXG4gIGhlYWRlcnM6IHtcbiAgICBhdXRob3JpemF0aW9uOiBcIjBmOTgwNzdmLTFiMDgtNDgyOS1hZTU3LTZmODFhYjQ3MzgwY1wiLFxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICB9LFxufSk7XG5cbmFwaVxuICAuZ2V0SW5pdGlhbFByb2ZpbGUoKVxuICAudGhlbigocmVzKSA9PiB7XG4gICAgdXNlckluZm8uc2V0VXNlckluZm8ocmVzKTtcbiAgfSlcbiAgLmNhdGNoKChlcnIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgRXJyb3I6JHtlcnJ9YCk7XG4gIH0pO1xuXG5hcGlcbiAgLmdldEluaXRpYWxDYXJkcygpXG4gIC50aGVuKChyZXMpID0+IHtcbiAgICBjYXJkTGlzdC5yZW5kZXJJdGVtcyhyZXMucmV2ZXJzZSgpKTtcbiAgfSlcbiAgLmNhdGNoKChlcnIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgRXJyb3I6JHtlcnJ9YCk7XG4gIH0pO1xuXG5jb25zdCBjcmVhdGVDYXJkID0gKGNhcmQpID0+IHtcbiAgY29uc3QgY2FyZEluc3RhbmNlID0gbmV3IENhcmQoXG4gICAge1xuICAgICAgY2FyZCxcbiAgICAgIGhhbmRsZVByZXZpZXdJbWc6ICgpID0+IHtcbiAgICAgICAgaW1hZ2VNb2RhbC5vcGVuKGNhcmQpO1xuICAgICAgfSxcbiAgICAgIGhhbmRsZURlbGV0ZUljb246IChldnQpID0+IHtcbiAgICAgICAgZGVsZXRlQ2FyZC5vcGVuKGV2dCwgY2FyZC5faWQpO1xuICAgICAgfSxcbiAgICAgIGhhbmRsZUxpa2VCdXR0b246IChidXR0b25MaWtlZCkgPT4ge1xuICAgICAgICByZXR1cm4gYnV0dG9uTGlrZWQgPyBhcGkubGlrZUNhcmQoY2FyZC5faWQpIDogYXBpLnJlbW92ZUxpa2UoY2FyZC5faWQpO1xuICAgICAgfSxcbiAgICAgIHVzZXJJZDogdXNlckluZm8uZ2V0SWQoKSxcbiAgICB9LFxuICAgIGNhcmRDb25zdGFudHMuY2FyZFNlbGVjdG9yXG4gICk7XG5cbiAgcmV0dXJuIGNhcmRJbnN0YW5jZTtcbn07XG5cbmNvbnN0IGNhcmRMaXN0ID0gbmV3IFNlY3Rpb24oXG4gIHtcbiAgICByZW5kZXJlcjogKGNhcmQpID0+IHtcbiAgICAgIGNvbnN0IG5ld0NhcmQgPSBjcmVhdGVDYXJkKGNhcmQpO1xuICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBuZXdDYXJkLmdldFZpZXcoKTtcbiAgICAgIGNhcmRMaXN0LmFkZEl0ZW0oY2FyZEVsZW1lbnQpO1xuICAgIH0sXG4gIH0sXG4gIGNhcmRDb25zdGFudHMucGxhY2VTZWxlY3RvclxuKTtcblxuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oe1xuICB1c2VyTmFtZTogZWRpdENvbnN0YW50cy5wcm9maWxlTmFtZUVsLFxuICB1c2VyQWJvdXQ6IGVkaXRDb25zdGFudHMucHJvZmlsZUFib3V0RWwsXG4gIHVzZXJBdmF0YXI6IGVkaXRDb25zdGFudHMucHJvZmlsZUF2YXRhckVsLFxufSk7XG5cbmNvbnN0IGFkZEltYWdlUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybXMoe1xuICBtb2RhbFNlbGVjdG9yOiBhZGRDb25zdGFudHMuYWRkTW9kYWxTZWxlY3RvcixcbiAgaGFuZGxlRm9ybVN1Ym1pdDogKGNhcmQpID0+IHtcbiAgICBsb2FkaW5nSGFuZGxlcih0cnVlLCBhZGRDb25zdGFudHMuYWRkTW9kYWxTZWxlY3RvciwgXCJDcmVhdGluZy4uLlwiKTtcbiAgICBhcGlcbiAgICAgIC5mZXRjaENhcmQoY2FyZClcbiAgICAgIC50aGVuKChjYXJkRGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdDYXJkID0gY3JlYXRlQ2FyZChjYXJkRGF0YSk7XG4gICAgICAgIGNhcmRMaXN0LmFkZEl0ZW0obmV3Q2FyZC5nZXRWaWV3KCkpO1xuICAgICAgICBhZGRJbWFnZVBvcHVwLmNsb3NlKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiR7ZXJyfWApO1xuICAgICAgfSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgbG9hZGluZ0hhbmRsZXIoZmFsc2UsIGFkZENvbnN0YW50cy5hZGRNb2RhbFNlbGVjdG9yLCBcIkNyZWF0ZVwiKTtcbiAgICAgIH0pO1xuICB9LFxufSk7XG5cbmNvbnN0IGNoYW5nZVByb2ZpbGVBdmF0YXJQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3Jtcyh7XG4gIG1vZGFsU2VsZWN0b3I6IGVkaXRDb25zdGFudHMuYXZhdGFyTW9kYWxTZWxlY3RvcixcbiAgaGFuZGxlRm9ybVN1Ym1pdDogKGF2YXRhcikgPT4ge1xuICAgIGxvYWRpbmdIYW5kbGVyKHRydWUsIGVkaXRDb25zdGFudHMuYXZhdGFyTW9kYWxTZWxlY3RvciwgXCJDaGFuZ2luZy4uLlwiKTtcblxuICAgIGFwaVxuICAgICAgLmNoYW5nZVByb2ZpbGVBdmF0YXIoYXZhdGFyKVxuICAgICAgLnRoZW4oKGF2YXRhckRhdGEpID0+IHtcbiAgICAgICAgdXNlckluZm8uc2V0QXZhdGFySW1nKGF2YXRhckRhdGEpO1xuICAgICAgICBjaGFuZ2VQcm9maWxlQXZhdGFyUG9wdXAuY2xvc2UoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6JHtlcnJ9YCk7XG4gICAgICB9KVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBsb2FkaW5nSGFuZGxlcihmYWxzZSwgZWRpdENvbnN0YW50cy5hdmF0YXJNb2RhbFNlbGVjdG9yLCBcIkNoYW5nZVwiKTtcbiAgICAgIH0pO1xuICB9LFxufSk7XG5cbmNvbnN0IGRlbGV0ZUNhcmQgPSBuZXcgUG9wdXBEZWxldGVDYXJkKHtcbiAgbW9kYWxTZWxlY3RvcjogYWRkQ29uc3RhbnRzLmRlbGV0ZUNhcmRzRWwsXG4gIGhhbmRsZUZvcm1TdWJtaXQ6IChjYXJkRWxlbWVudCwgY2FyZElkKSA9PiB7XG4gICAgbG9hZGluZ0hhbmRsZXIodHJ1ZSwgYWRkQ29uc3RhbnRzLmRlbGV0ZUNhcmRzRWwsIFwiRGVsZXRpbmcuLi5cIik7XG4gICAgYXBpXG4gICAgICAuZGVsZXRlQ2FyZChjYXJkSWQpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGNhcmRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICBkZWxldGVDYXJkLmNsb3NlKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiR7ZXJyfWApO1xuICAgICAgfSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgbG9hZGluZ0hhbmRsZXIoZmFsc2UsIGFkZENvbnN0YW50cy5kZWxldGVDYXJkc0VsLCBcIlllc1wiKTtcbiAgICAgIH0pO1xuICB9LFxufSk7XG5cbmNvbnN0IHVzZXJJbmZvUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybXMoe1xuICBtb2RhbFNlbGVjdG9yOiBlZGl0Q29uc3RhbnRzLmVkaXRNb2RhbFNlbGVjdG9yLFxuICBoYW5kbGVGb3JtU3VibWl0OiAocHJvZmlsZSkgPT4ge1xuICAgIGxvYWRpbmdIYW5kbGVyKHRydWUsIGVkaXRDb25zdGFudHMuZWRpdE1vZGFsU2VsZWN0b3IsIFwiVXBkYXRpbmcuLi5cIik7XG4gICAgYXBpXG4gICAgICAuZmV0Y2hQcm9maWxlSW5mbyhwcm9maWxlKVxuICAgICAgLnRoZW4oKHByb2ZpbGVEYXRhKSA9PiB7XG4gICAgICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKHByb2ZpbGVEYXRhKTtcbiAgICAgICAgdXNlckluZm9Qb3B1cC5jbG9zZSgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjoke2Vycn1gKTtcbiAgICAgIH0pXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIGxvYWRpbmdIYW5kbGVyKGZhbHNlLCBlZGl0Q29uc3RhbnRzLmVkaXRNb2RhbFNlbGVjdG9yLCBcIlVwZGF0ZVwiKTtcbiAgICAgIH0pO1xuICB9LFxufSk7XG5cbmNvbnN0IGltYWdlTW9kYWwgPSBuZXcgUG9wdXBXaXRoSW1hZ2UocHJldmlld0NvbnN0YW50cy5wcmV2aWV3TW9kYWxTZWxlY3Rvcik7XG5cbmNvbnN0IGVkaXRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoXG4gIHZhbGlkYXRpb25TZXR0aW5ncyxcbiAgZWRpdENvbnN0YW50cy5lZGl0UHJvZmlsZUVsXG4pO1xuY29uc3QgYWRkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKFxuICB2YWxpZGF0aW9uU2V0dGluZ3MsXG4gIGFkZENvbnN0YW50cy5hZGRDYXJkc0VsXG4pO1xuXG5jb25zdCBhdmF0YXJGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoXG4gIHZhbGlkYXRpb25TZXR0aW5ncyxcbiAgZWRpdENvbnN0YW50cy5wcm9maWxlQXZhdGFyRm9ybVxuKTtcblxuZWRpdEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuYWRkRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5hdmF0YXJGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcblxuYWRkSW1hZ2VQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuaW1hZ2VNb2RhbC5zZXRFdmVudExpc3RlbmVycygpO1xudXNlckluZm9Qb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuZGVsZXRlQ2FyZC5zZXRFdmVudExpc3RlbmVycygpO1xuY2hhbmdlUHJvZmlsZUF2YXRhclBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbi8vLy8vUE9QVVAgQlVUVE9OUy8vLy8vXG5cbmFkZENvbnN0YW50cy5hZGRDYXJkQnV0dG9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYWRkRm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcbiAgYWRkSW1hZ2VQb3B1cC5vcGVuKCk7XG59KTtcblxuZWRpdENvbnN0YW50cy5wcm9maWxlQXZhdGFyQnV0dG9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYXZhdGFyRm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcbiAgY2hhbmdlUHJvZmlsZUF2YXRhclBvcHVwLm9wZW4oKTtcbn0pO1xuXG5lZGl0Q29uc3RhbnRzLnByb2ZpbGVFZGl0QnV0dG9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgcHJvZmlsZURhdGEgPSB1c2VySW5mby5nZXRVc2VySW5mbygpO1xuICBlZGl0Q29uc3RhbnRzLmVkaXRQcm9maWxlTmFtZUlucHV0LnZhbHVlID0gcHJvZmlsZURhdGEubmFtZTtcbiAgZWRpdENvbnN0YW50cy5lZGl0UHJvZmlsZUFib3V0SW5wdXQudmFsdWUgPSBwcm9maWxlRGF0YS5hYm91dDtcblxuICBlZGl0Rm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcbiAgdXNlckluZm9Qb3B1cC5vcGVuKCk7XG59KTtcbiJdLCJuYW1lcyI6WyJBcGkiLCJvcHRpb25zIiwiYmFzZVVybCIsImhlYWRlcnMiLCJyZXMiLCJvayIsImpzb24iLCJQcm9taXNlIiwicmVqZWN0IiwiZmV0Y2giLCJ0aGVuIiwiX2NoZWNrZXJyb3JzIiwibmFtZSIsImxpbmsiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFib3V0IiwiYXZhdGFyIiwiY2FyZElkIiwiQ2FyZCIsImNhcmRTZWxlY3RvciIsImNhcmQiLCJoYW5kbGVQcmV2aWV3SW1nIiwiaGFuZGxlRGVsZXRlSWNvbiIsImhhbmRsZUxpa2VCdXR0b24iLCJ1c2VySWQiLCJfdXNlcklkIiwiX25hbWUiLCJfbGluayIsIl9saWtlZENhcmQiLCJsaWtlcyIsIl9udW1iZXJMaWtlcyIsImxlbmd0aCIsIl9oYW5kbGVQcmV2aWV3SW1nIiwiX2hhbmRsZURlbGV0ZUljb24iLCJfaGFuZGxlTGlrZUJ1dHRvbiIsIl9vd25lcklkIiwib3duZXIiLCJfaWQiLCJfY2FyZElkIiwiX2NhcmRUZW1wbGF0ZSIsInRlbXBsYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9lbGVtZW50IiwidGV4dENvbnRlbnQiLCJlIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ0b2dnbGUiLCJfY2hlY2tMaWtlcyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfZGVsZXRlQnV0dG9uIiwiZXZ0IiwicmVtb3ZlIiwiX2xpa2VCdXR0b24iLCJfbGlrZWQiLCJ1c2VyTGlrZUNhcmQiLCJzb21lIiwiaXRlbSIsImFkZCIsIl9nZXRUZW1wbGF0ZSIsIl9zZXRFdmVudExpc3RlbmVycyIsImNhcmRJbWciLCJzcmMiLCJhbHQiLCJfZ2V0SW5pdGFsTGlrZXMiLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZ3MiLCJmb3JtRWxlbWVudCIsImZvcm1FbCIsImlucHV0IiwiZXJyb3JTcGFuIiwiaWQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9lcnJvckNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsInZhbGlkaXR5IiwidmFsaWQiLCJfaGlkZUlucHV0RXJyb3IiLCJfc2hvd0lucHV0RXJyb3IiLCJpbnB1dHMiLCJldmVyeSIsImJ1dHRvbkVsIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2lzVmFsaWQiLCJkaXNhYmxlZCIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtRWwiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiX3RvZ2dsZUJ1dHRvbiIsImZvckVhY2giLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIlBvcHVwIiwibW9kYWxTZWxlY3RvciIsIl9tb2RhbEVsZW1lbnQiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwiY2xvc2UiLCJrZXkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUG9wdXBEZWxldGVDYXJkIiwiaGFuZGxlRm9ybVN1Ym1pdCIsIl9tb2RhbEZvcm0iLCJfaGFuZGxlRm9ybVN1Ym1pdCIsIl9idXR0b24iLCJfY2FyZCIsInBhcmVudEVsZW1lbnQiLCJQb3B1cFdpdGhGb3JtcyIsIl9pbnB1dHMiLCJfZm9ybVZhbHVlcyIsInZhbHVlIiwiX2dldElucHV0VmFsdWVzIiwicmVzZXQiLCJQb3B1cFdpdGhJbWFnZSIsImltYWdlIiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwicmVuZGVyZXIiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwiZWxlbWVudCIsInByZXBlbmQiLCJpdGVtcyIsIlVzZXJJbmZvIiwidXNlck5hbWUiLCJ1c2VyQWJvdXQiLCJ1c2VyQXZhdGFyIiwiX3VzZXJOYW1lIiwiX3VzZXJBYm91dCIsIl91c2VyQXZhdGFyIiwidXNlckRhdGEiLCJkYXRhIiwidmFsaWRhdGlvblNldHRpbmdzIiwiZm9ybVNlbGVjdG9yIiwiY2FyZENvbnN0YW50cyIsInBsYWNlU2VsZWN0b3IiLCJwcmV2aWV3Q29uc3RhbnRzIiwicHJldmlld01vZGFsU2VsZWN0b3IiLCJlZGl0Q29uc3RhbnRzIiwiZWRpdFByb2ZpbGVFbCIsInByb2ZpbGVFZGl0QnV0dG9uRWwiLCJwcm9maWxlTmFtZUVsIiwicHJvZmlsZUFib3V0RWwiLCJwcm9maWxlQXZhdGFyRWwiLCJwcm9maWxlQXZhdGFyRm9ybSIsInByb2ZpbGVBdmF0YXJCdXR0b25FbCIsImVkaXRQcm9maWxlTmFtZUlucHV0IiwiZWRpdFByb2ZpbGVBYm91dElucHV0IiwiZWRpdE1vZGFsU2VsZWN0b3IiLCJhdmF0YXJNb2RhbFNlbGVjdG9yIiwiYWRkQ29uc3RhbnRzIiwiYWRkQ2FyZHNFbCIsImFkZENhcmRCdXR0b25FbCIsImFkZE1vZGFsU2VsZWN0b3IiLCJkZWxldGVDYXJkc0VsIiwibG9hZGluZ0hhbmRsZXIiLCJsb2FkaW5nIiwidGV4dCIsIm1vZGFsIiwiYXBpIiwiYXV0aG9yaXphdGlvbiIsImdldEluaXRpYWxQcm9maWxlIiwidXNlckluZm8iLCJzZXRVc2VySW5mbyIsImdldEluaXRpYWxDYXJkcyIsImNhcmRMaXN0IiwicmVuZGVySXRlbXMiLCJyZXZlcnNlIiwiY3JlYXRlQ2FyZCIsImNhcmRJbnN0YW5jZSIsImltYWdlTW9kYWwiLCJvcGVuIiwiZGVsZXRlQ2FyZCIsImJ1dHRvbkxpa2VkIiwibGlrZUNhcmQiLCJyZW1vdmVMaWtlIiwiZ2V0SWQiLCJuZXdDYXJkIiwiY2FyZEVsZW1lbnQiLCJnZXRWaWV3IiwiYWRkSXRlbSIsImFkZEltYWdlUG9wdXAiLCJmZXRjaENhcmQiLCJjYXJkRGF0YSIsImZpbmFsbHkiLCJjaGFuZ2VQcm9maWxlQXZhdGFyUG9wdXAiLCJjaGFuZ2VQcm9maWxlQXZhdGFyIiwiYXZhdGFyRGF0YSIsInNldEF2YXRhckltZyIsInVzZXJJbmZvUG9wdXAiLCJwcm9maWxlIiwiZmV0Y2hQcm9maWxlSW5mbyIsInByb2ZpbGVEYXRhIiwiZWRpdEZvcm1WYWxpZGF0b3IiLCJhZGRGb3JtVmFsaWRhdG9yIiwiYXZhdGFyRm9ybVZhbGlkYXRvciIsImVuYWJsZVZhbGlkYXRpb24iLCJzZXRFdmVudExpc3RlbmVycyIsInJlc2V0VmFsaWRhdGlvbiIsImdldFVzZXJJbmZvIl0sInNvdXJjZVJvb3QiOiIifQ==