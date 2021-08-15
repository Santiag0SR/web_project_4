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
        about: this._userAbout.textContent
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
var initialProfile = api.getInitialProfile().then(function (res) {
  userInfo.setUserInfo(res);
}).catch(function (err) {
  console.log("Error:".concat(err));
});
var initialCards = api.getInitialCards().then(function (res) {
  cardList.renderItems(res.reverse());
}).catch(function (err) {
  console.log("Error:".concat(err));
});
Promise.all([initialProfile]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUdBQUEsQ0FBcUQsT0FBckQsRUFBOEQsWUFBTTtBQUNsRTRELEVBQUFBLG1CQUFtQixDQUFDRyxlQUFwQjtBQUNBYixFQUFBQSx3QkFBd0IsQ0FBQ2QsSUFBekI7QUFDRCxDQUhEO0FBS0FwQyxtR0FBQSxDQUFtRCxPQUFuRCxFQUE0RCxZQUFNO0FBQ2hFLE1BQU15RCxXQUFXLEdBQUdoQyxRQUFRLENBQUN1QyxXQUFULEVBQXBCO0FBQ0FoRSxFQUFBQSx5RkFBQSxHQUEyQ3lELFdBQVcsQ0FBQzNNLElBQXZEO0FBQ0FrSixFQUFBQSwwRkFBQSxHQUE0Q3lELFdBQVcsQ0FBQ3JNLEtBQXhEO0FBRUFzTSxFQUFBQSxpQkFBaUIsQ0FBQ0ssZUFBbEI7QUFDQVQsRUFBQUEsYUFBYSxDQUFDbEIsSUFBZDtBQUNELENBUEQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBEZWxldGVDYXJkLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm1zLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcmFjdGljdW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gb3B0aW9ucy5iYXNlVXJsO1xuICAgIHRoaXMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycztcbiAgfVxuXG4gIF9jaGVja2Vycm9ycyhyZXMpIHtcbiAgICBpZiAocmVzLm9rKSB7XG4gICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiRXJyb3JcIik7XG4gIH1cblxuICBnZXRJbml0aWFsUHJvZmlsZSgpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS91c2Vycy9tZWAsIHtcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHRoaXMuX2NoZWNrZXJyb3JzKHJlcykpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbENhcmRzKCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VVcmx9L2NhcmRzYCwge1xuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgIH0pLnRoZW4oKHJlcykgPT4gdGhpcy5fY2hlY2tlcnJvcnMocmVzKSk7XG4gIH1cblxuICBmZXRjaENhcmQoeyBuYW1lLCBsaW5rIH0pIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS9jYXJkc2AsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWUsIGxpbmsgfSksXG4gICAgfSkudGhlbigocmVzKSA9PiB0aGlzLl9jaGVja2Vycm9ycyhyZXMpKTtcbiAgfVxuXG4gIGZldGNoUHJvZmlsZUluZm8oeyBuYW1lLCBhYm91dCB9KSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuYmFzZVVybH0vdXNlcnMvbWVgLCB7XG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZTogbmFtZSwgYWJvdXQ6IGFib3V0IH0pLFxuICAgIH0pLnRoZW4odGhpcy5fY2hlY2tlcnJvcnMocmVzKSk7XG4gIH1cblxuICBjaGFuZ2VQcm9maWxlQXZhdGFyKHsgYXZhdGFyIH0pIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS91c2Vycy9tZS9hdmF0YXJgLCB7XG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYXZhdGFyOiBhdmF0YXIgfSksXG4gICAgfSkudGhlbigocmVzKSA9PiB0aGlzLl9jaGVja2Vycm9ycyhyZXMpKTtcbiAgfVxuXG4gIGRlbGV0ZUNhcmQoY2FyZElkKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuYmFzZVVybH0vY2FyZHMvJHtjYXJkSWR9YCwge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgIH0pLnRoZW4oKHJlcykgPT4gdGhpcy5fY2hlY2tlcnJvcnMocmVzKSk7XG4gIH1cblxuICBsaWtlQ2FyZChjYXJkSWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS9jYXJkcy9saWtlcy8ke2NhcmRJZH1gLCB7XG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgfSkudGhlbigocmVzKSA9PiB0aGlzLl9jaGVja2Vycm9ycyhyZXMpKTtcbiAgfVxuXG4gIHJlbW92ZUxpa2UoY2FyZElkKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuYmFzZVVybH0vY2FyZHMvbGlrZXMvJHtjYXJkSWR9YCwge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgIH0pLnRoZW4oKHJlcykgPT4gdGhpcy5fY2hlY2tlcnJvcnMocmVzKSk7XG4gIH1cbn1cbiIsImNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihcbiAgICB7IGNhcmQsIGhhbmRsZVByZXZpZXdJbWcsIGhhbmRsZURlbGV0ZUljb24sIGhhbmRsZUxpa2VCdXR0b24sIHVzZXJJZCB9LFxuICAgIGNhcmRTZWxlY3RvclxuICApIHtcbiAgICB0aGlzLl91c2VySWQgPSB1c2VySWQ7XG4gICAgdGhpcy5fbmFtZSA9IGNhcmQubmFtZTtcbiAgICB0aGlzLl9saW5rID0gY2FyZC5saW5rO1xuICAgIHRoaXMuX2xpa2VkQ2FyZCA9IGNhcmQubGlrZXM7XG4gICAgdGhpcy5fbnVtYmVyTGlrZXMgPSBjYXJkLmxpa2VzLmxlbmd0aDtcbiAgICB0aGlzLl9oYW5kbGVQcmV2aWV3SW1nID0gaGFuZGxlUHJldmlld0ltZztcbiAgICB0aGlzLl9oYW5kbGVEZWxldGVJY29uID0gaGFuZGxlRGVsZXRlSWNvbjtcbiAgICB0aGlzLl9oYW5kbGVMaWtlQnV0dG9uID0gaGFuZGxlTGlrZUJ1dHRvbjtcbiAgICB0aGlzLl9vd25lcklkID0gY2FyZC5vd25lci5faWQ7XG4gICAgdGhpcy5fY2FyZElkID0gY2FyZC5faWQ7XG5cbiAgICB0aGlzLl9jYXJkVGVtcGxhdGUgPSBjYXJkU2VsZWN0b3I7XG4gIH1cblxuICBfZ2V0VGVtcGxhdGUoKSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFRlbXBsYXRlKVxuICAgICAgLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpXG4gICAgICAuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgdGhpcy5fZWxlbWVudCA9IHRlbXBsYXRlO1xuICB9XG5cbiAgX2NoZWNrTGlrZXMoY2FyZCkge1xuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190ZXh0X2xpa2VzLW51bWJlclwiKS50ZXh0Q29udGVudCA9XG4gICAgICBjYXJkLmxpa2VzLmxlbmd0aDtcbiAgfVxuXG4gIF9saWtlZChlKSB7XG4gICAgdGhpcy5faGFuZGxlTGlrZUJ1dHRvbihcbiAgICAgICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjYXJkX19saWtlLWJ1dHRvbl9hY3RpdmVcIilcbiAgICApXG4gICAgICAudGhlbigoY2FyZCkgPT4ge1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiY2FyZF9fbGlrZS1idXR0b25fYWN0aXZlXCIpO1xuICAgICAgICB0aGlzLl9jaGVja0xpa2VzKGNhcmQpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjoke2Vycn1gKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2VsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltZ1wiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLl9oYW5kbGVQcmV2aWV3SW1nKCkpO1xuXG4gICAgdGhpcy5fZGVsZXRlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2RlbGV0ZS1idXR0b25cIik7XG4gICAgaWYgKHRoaXMuX293bmVySWQgPT09IHRoaXMuX3VzZXJJZCkge1xuICAgICAgdGhpcy5fZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XG4gICAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZUljb24oZXZ0KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kZWxldGVCdXR0b24ucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fbGlrZUJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19saWtlLWJ1dHRvblwiKTtcbiAgICB0aGlzLl9saWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgdGhpcy5fbGlrZWQoZSk7XG4gICAgfSk7XG4gIH1cblxuICBfZ2V0SW5pdGFsTGlrZXMoKSB7XG4gICAgY29uc3QgdXNlckxpa2VDYXJkID0gdGhpcy5fbGlrZWRDYXJkLnNvbWUoXG4gICAgICAoaXRlbSkgPT4gaXRlbS5faWQgPT09IHRoaXMuX3VzZXJJZFxuICAgICk7XG4gICAgaWYgKHVzZXJMaWtlQ2FyZCkge1xuICAgICAgdGhpcy5fbGlrZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2FyZF9fbGlrZS1idXR0b25fYWN0aXZlXCIpO1xuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190ZXh0X2xpa2VzLW51bWJlclwiKS50ZXh0Q29udGVudCA9XG4gICAgICB0aGlzLl9udW1iZXJMaWtlcztcbiAgfVxuXG4gIGdldFZpZXcoKSB7XG4gICAgdGhpcy5fZ2V0VGVtcGxhdGUoKTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuXG4gICAgY29uc3QgY2FyZEltZyA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWdcIik7XG5cbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fdGV4dFwiKS50ZXh0Q29udGVudCA9IHRoaXMuX25hbWU7XG4gICAgY2FyZEltZy5zcmMgPSB0aGlzLl9saW5rO1xuICAgIGNhcmRJbWcuYWx0ID0gdGhpcy5fbmFtZTtcbiAgICB0aGlzLl9nZXRJbml0YWxMaWtlcyhjYXJkSW1nKTtcblxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGZvcm1FbGVtZW50KSB7XG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IHNldHRpbmdzLmlucHV0U2VsZWN0b3I7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBzZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XG5cbiAgICB0aGlzLl9mb3JtRWwgPSBmb3JtRWxlbWVudDtcbiAgfVxuXG4gIF9zaG93SW5wdXRFcnJvciA9IChmb3JtRWwsIGlucHV0KSA9PiB7XG4gICAgY29uc3QgZXJyb3JTcGFuID0gZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0LmlkfS1lcnJvcmApO1xuICAgIC8vIGFkZCBlcnJvciBtZXNzYWdlL2NsYXNzXG4gICAgZXJyb3JTcGFuLnRleHRDb250ZW50ID0gaW5wdXQudmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgZXJyb3JTcGFuLmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICB9O1xuXG4gIF9oaWRlSW5wdXRFcnJvciA9IChmb3JtRWwsIGlucHV0KSA9PiB7XG4gICAgY29uc3QgZXJyb3JTcGFuID0gZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0LmlkfS1lcnJvcmApO1xuICAgIC8vIGFkZCBlcnJvciBtZXNzYWdlL2NsYXNzXG4gICAgZXJyb3JTcGFuLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBlcnJvclNwYW4uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gIH07XG5cbiAgX2NoZWNrSW5wdXRWYWxpZGl0eSA9IChmb3JtRWwsIGlucHV0KSA9PiB7XG4gICAgaWYgKGlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihmb3JtRWwsIGlucHV0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoZm9ybUVsLCBpbnB1dCk7XG4gICAgfVxuICB9O1xuXG4gIF9pc1ZhbGlkID0gKGlucHV0cykgPT4ge1xuICAgIHJldHVybiBpbnB1dHMuZXZlcnkoKGlucHV0KSA9PiBpbnB1dC52YWxpZGl0eS52YWxpZCk7XG4gIH07XG5cbiAgX3RvZ2dsZUJ1dHRvbiA9IChmb3JtRWwsIGlucHV0cykgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbkVsID0gZm9ybUVsLnF1ZXJ5U2VsZWN0b3IodGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xuICAgIGlmICh0aGlzLl9pc1ZhbGlkKGlucHV0cykpIHtcbiAgICAgIGJ1dHRvbkVsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICBidXR0b25FbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b25FbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBidXR0b25FbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgIH1cbiAgfTtcblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoZm9ybUVsKSB7XG4gICAgY29uc3QgaW5wdXRzID0gQXJyYXkuZnJvbShmb3JtRWwucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKSk7XG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uKGZvcm1FbCwgaW5wdXRzKTtcbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgIC8vIGNoZWNrIHZhbGlkaXR5XG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShmb3JtRWwsIGlucHV0KTtcbiAgICAgICAgLy90b2dnbGUgYnV0dG9uXG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvbihmb3JtRWwsIGlucHV0cyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0VmFsaWRhdGlvbigpIHtcbiAgICBjb25zdCBpbnB1dHMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcilcbiAgICApO1xuXG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uKHRoaXMuX2Zvcm1FbCwgaW5wdXRzKTtcblxuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IodGhpcy5fZm9ybUVsLCBpbnB1dCk7XG4gICAgfSk7XG4gIH1cblxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX2Zvcm1FbC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSk7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnModGhpcy5fZm9ybUVsKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdG9yO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihtb2RhbFNlbGVjdG9yKSB7XG4gICAgdGhpcy5fbW9kYWxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bW9kYWxTZWxlY3Rvcn1gKTtcbiAgICB0aGlzLl9oYW5kbGVFc2NDbG9zZSA9IHRoaXMuX2hhbmRsZUVzY0Nsb3NlLmJpbmQodGhpcyk7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9tb2RhbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsXCIpIHx8XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsX19jbG9zZS1idXR0b25cIilcbiAgICAgICkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfaGFuZGxlRXNjQ2xvc2UoZSkge1xuICAgIGlmIChlLmtleSA9PSBcIkVzY2FwZVwiKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLl9tb2RhbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1vZGFsX29wZW5cIik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fbW9kYWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9vcGVuXCIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgfVxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwRGVsZXRlQ2FyZCBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IoeyBtb2RhbFNlbGVjdG9yLCBoYW5kbGVGb3JtU3VibWl0IH0pIHtcbiAgICBzdXBlcihtb2RhbFNlbGVjdG9yKTtcblxuICAgIHRoaXMuX21vZGFsRm9ybSA9IHRoaXMuX21vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtXCIpO1xuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xuICAgIHRoaXMuX2J1dHRvbiA9IHRoaXMuX21vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19zYXZlLWJ1dHRvblwiKTtcbiAgfVxuXG4gIG9wZW4oZXZ0LCBjYXJkSWQpIHtcbiAgICBzdXBlci5vcGVuKCk7XG4gICAgdGhpcy5fY2FyZElkID0gY2FyZElkO1xuICAgIHRoaXMuX2NhcmQgPSBldnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9tb2RhbEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCh0aGlzLl9jYXJkLCB0aGlzLl9jYXJkSWQpO1xuICAgIH0pO1xuXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm1zIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcih7IG1vZGFsU2VsZWN0b3IsIGhhbmRsZUZvcm1TdWJtaXQgfSkge1xuICAgIHN1cGVyKG1vZGFsU2VsZWN0b3IpO1xuXG4gICAgdGhpcy5fbW9kYWxGb3JtID0gdGhpcy5fbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XG4gICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XG4gICAgdGhpcy5fYnV0dG9uID0gdGhpcy5fbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3NhdmUtYnV0dG9uXCIpO1xuICB9XG5cbiAgX2dldElucHV0VmFsdWVzKCkge1xuICAgIHRoaXMuX2lucHV0cyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLl9tb2RhbEZvcm0ucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbF9fZm9ybS1pdGVtXCIpXG4gICAgKTtcblxuICAgIHRoaXMuX2Zvcm1WYWx1ZXMgPSB7fTtcblxuICAgIHRoaXMuX2lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgdGhpcy5fZm9ybVZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1WYWx1ZXM7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9tb2RhbEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcbiAgICB9KTtcblxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9tb2RhbEZvcm0ucmVzZXQoKTtcblxuICAgIHN1cGVyLmNsb3NlKCk7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcbiAgb3Blbih7IGxpbmssIG5hbWUgfSkge1xuICAgIHRoaXMuX21vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wcmV2aWV3LWNhcHRpb25cIikudGV4dENvbnRlbnQgPVxuICAgICAgbmFtZTtcbiAgICBjb25zdCBpbWFnZSA9IHRoaXMuX21vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wcmV2aWV3LWltYWdlXCIpO1xuICAgIGltYWdlLnNyYyA9IGxpbms7XG4gICAgaW1hZ2UuYWx0ID0gbmFtZTtcbiAgICBzdXBlci5vcGVuKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcih7IHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjb250YWluZXJTZWxlY3Rvcn1gKTtcbiAgfVxuXG4gIGFkZEl0ZW0oZWxlbWVudCkge1xuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGVsZW1lbnQpO1xuICB9XG5cbiAgcmVuZGVySXRlbXMoaXRlbXMpIHtcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlcihpdGVtKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xuICBjb25zdHJ1Y3Rvcih7IHVzZXJOYW1lLCB1c2VyQWJvdXQsIHVzZXJBdmF0YXIgfSkge1xuICAgIHRoaXMuX3VzZXJOYW1lID0gdXNlck5hbWU7XG4gICAgdGhpcy5fdXNlckFib3V0ID0gdXNlckFib3V0O1xuICAgIHRoaXMuX3VzZXJBdmF0YXIgPSB1c2VyQXZhdGFyO1xuICB9XG5cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgdGhpcy51c2VyRGF0YSA9IHtcbiAgICAgIG5hbWU6IHRoaXMuX3VzZXJOYW1lLnRleHRDb250ZW50LFxuICAgICAgYWJvdXQ6IHRoaXMuX3VzZXJBYm91dC50ZXh0Q29udGVudCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMudXNlckRhdGE7XG4gIH1cblxuICBzZXRVc2VySW5mbyhkYXRhKSB7XG4gICAgdGhpcy5fdXNlck5hbWUudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XG4gICAgdGhpcy5fdXNlckFib3V0LnRleHRDb250ZW50ID0gZGF0YS5hYm91dDtcbiAgICB0aGlzLl91c2VyQXZhdGFyLnNyYyA9IGRhdGEuYXZhdGFyO1xuICAgIHRoaXMuX3VzZXJJZCA9IGRhdGEuX2lkO1xuICB9XG5cbiAgZ2V0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJJZDtcbiAgfVxuXG4gIHNldEF2YXRhckltZyhkYXRhKSB7XG4gICAgdGhpcy5fdXNlckF2YXRhci5zcmMgPSBkYXRhLmF2YXRhcjtcbiAgfVxufVxuIiwiLy9WQUxJREFUSU9OIFNFVFRJTkdTXG5leHBvcnQgY29uc3QgdmFsaWRhdGlvblNldHRpbmdzID0ge1xuICBmb3JtU2VsZWN0b3I6IFwiLm1vZGFsX19mb3JtXCIsXG4gIGlucHV0U2VsZWN0b3I6IFwiLm1vZGFsX19mb3JtLWl0ZW1cIixcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLm1vZGFsX19zYXZlLWJ1dHRvblwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcIm1vZGFsX19zYXZlLWJ1dHRvbl9kaXNhYmxlZFwiLFxuICBpbnB1dEVycm9yQ2xhc3M6IFwibW9kYWxfX2Zvcm0taXRlbV90eXBlX2Vycm9yXCIsXG4gIGVycm9yQ2xhc3M6IFwibW9kYWxfX2Vycm9yX3Zpc2libGVcIixcbn07XG5cbmV4cG9ydCBjb25zdCBjYXJkQ29uc3RhbnRzID0ge1xuICBjYXJkU2VsZWN0b3I6IFwiI2NhcmQtdGVtcGxhdGVcIixcbiAgcGxhY2VTZWxlY3RvcjogXCJlbGVtZW50c1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IHByZXZpZXdDb25zdGFudHMgPSB7XG4gIHByZXZpZXdNb2RhbFNlbGVjdG9yOiBcIm1vZGFsX3R5cGVfcHJldmlld1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IGVkaXRDb25zdGFudHMgPSB7XG4gIGVkaXRQcm9maWxlRWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1fdHlwZV9lZGl0XCIpLFxuICBwcm9maWxlRWRpdEJ1dHRvbkVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpLFxuICBwcm9maWxlTmFtZUVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX25hbWVcIiksXG4gIHByb2ZpbGVBYm91dEVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2Fib3V0XCIpLFxuICBwcm9maWxlQXZhdGFyRWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYXZhdGFyXCIpLFxuICBwcm9maWxlQXZhdGFyRm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybV90eXBlX2F2YXRhclwiKSxcbiAgcHJvZmlsZUF2YXRhckJ1dHRvbkVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2F2YXRhci1idXR0b25cIiksXG4gIGVkaXRQcm9maWxlTmFtZUlucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtLWl0ZW1fdHlwZV9uYW1lXCIpLFxuICBlZGl0UHJvZmlsZUFib3V0SW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm0taXRlbV90eXBlX2Fib3V0XCIpLFxuICBlZGl0TW9kYWxTZWxlY3RvcjogXCJtb2RhbF90eXBlX2VkaXRcIixcbiAgYXZhdGFyTW9kYWxTZWxlY3RvcjogXCJtb2RhbF90eXBlX2F2YXRhclwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGFkZENvbnN0YW50cyA9IHtcbiAgYWRkQ2FyZHNFbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybV90eXBlX2FkZFwiKSxcbiAgYWRkQ2FyZEJ1dHRvbkVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2FkZC1idXR0b25cIiksXG4gIGFkZE1vZGFsU2VsZWN0b3I6IFwibW9kYWxfdHlwZV9hZGRcIixcbiAgZGVsZXRlQ2FyZHNFbDogXCJtb2RhbF90eXBlX2RlbGV0ZVwiLFxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoRm9ybXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybXMuanNcIjtcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xuaW1wb3J0IEFwaSBmcm9tIFwiLi4vY29tcG9uZW50cy9BcGkuanNcIjtcbmltcG9ydCBQb3B1cERlbGV0ZUNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBEZWxldGVDYXJkXCI7XG5cbmltcG9ydCB7XG4gIHZhbGlkYXRpb25TZXR0aW5ncyxcbiAgY2FyZENvbnN0YW50cyxcbiAgcHJldmlld0NvbnN0YW50cyxcbiAgZWRpdENvbnN0YW50cyxcbiAgYWRkQ29uc3RhbnRzLFxufSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzLmpzXCI7XG5cbmZ1bmN0aW9uIGxvYWRpbmdIYW5kbGVyKGxvYWRpbmcsIG1vZGFsU2VsZWN0b3IsIHRleHQpIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHttb2RhbFNlbGVjdG9yfWApO1xuICBpZiAobG9hZGluZykge1xuICAgIG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3NhdmUtYnV0dG9uXCIpLnRleHRDb250ZW50ID0gdGV4dDtcbiAgfSBlbHNlIHtcbiAgICBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19zYXZlLWJ1dHRvblwiKS50ZXh0Q29udGVudCA9IHRleHQ7XG4gIH1cbn1cblxuY29uc3QgYXBpID0gbmV3IEFwaSh7XG4gIGJhc2VVcmw6IFwiaHR0cHM6Ly9hcm91bmQubm9tb3JlcGFydGllcy5jby92MS9ncm91cC0xM1wiLFxuICBoZWFkZXJzOiB7XG4gICAgYXV0aG9yaXphdGlvbjogXCIwZjk4MDc3Zi0xYjA4LTQ4MjktYWU1Ny02ZjgxYWI0NzM4MGNcIixcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgfSxcbn0pO1xuXG5jb25zdCBpbml0aWFsUHJvZmlsZSA9IGFwaVxuICAuZ2V0SW5pdGlhbFByb2ZpbGUoKVxuICAudGhlbigocmVzKSA9PiB7XG4gICAgdXNlckluZm8uc2V0VXNlckluZm8ocmVzKTtcbiAgfSlcbiAgLmNhdGNoKChlcnIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgRXJyb3I6JHtlcnJ9YCk7XG4gIH0pO1xuXG5jb25zdCBpbml0aWFsQ2FyZHMgPSBhcGlcbiAgLmdldEluaXRpYWxDYXJkcygpXG4gIC50aGVuKChyZXMpID0+IHtcbiAgICBjYXJkTGlzdC5yZW5kZXJJdGVtcyhyZXMucmV2ZXJzZSgpKTtcbiAgfSlcbiAgLmNhdGNoKChlcnIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgRXJyb3I6JHtlcnJ9YCk7XG4gIH0pO1xuXG5Qcm9taXNlLmFsbChbaW5pdGlhbFByb2ZpbGVdKTtcblxuY29uc3QgY3JlYXRlQ2FyZCA9IChjYXJkKSA9PiB7XG4gIGNvbnN0IGNhcmRJbnN0YW5jZSA9IG5ldyBDYXJkKFxuICAgIHtcbiAgICAgIGNhcmQsXG4gICAgICBoYW5kbGVQcmV2aWV3SW1nOiAoKSA9PiB7XG4gICAgICAgIGltYWdlTW9kYWwub3BlbihjYXJkKTtcbiAgICAgIH0sXG4gICAgICBoYW5kbGVEZWxldGVJY29uOiAoZXZ0KSA9PiB7XG4gICAgICAgIGRlbGV0ZUNhcmQub3BlbihldnQsIGNhcmQuX2lkKTtcbiAgICAgIH0sXG4gICAgICBoYW5kbGVMaWtlQnV0dG9uOiAoYnV0dG9uTGlrZWQpID0+IHtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbkxpa2VkID8gYXBpLmxpa2VDYXJkKGNhcmQuX2lkKSA6IGFwaS5yZW1vdmVMaWtlKGNhcmQuX2lkKTtcbiAgICAgIH0sXG4gICAgICB1c2VySWQ6IHVzZXJJbmZvLmdldElkKCksXG4gICAgfSxcbiAgICBjYXJkQ29uc3RhbnRzLmNhcmRTZWxlY3RvclxuICApO1xuXG4gIHJldHVybiBjYXJkSW5zdGFuY2U7XG59O1xuXG5jb25zdCBjYXJkTGlzdCA9IG5ldyBTZWN0aW9uKFxuICB7XG4gICAgcmVuZGVyZXI6IChjYXJkKSA9PiB7XG4gICAgICBjb25zdCBuZXdDYXJkID0gY3JlYXRlQ2FyZChjYXJkKTtcbiAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gbmV3Q2FyZC5nZXRWaWV3KCk7XG4gICAgICBjYXJkTGlzdC5hZGRJdGVtKGNhcmRFbGVtZW50KTtcbiAgICB9LFxuICB9LFxuICBjYXJkQ29uc3RhbnRzLnBsYWNlU2VsZWN0b3Jcbik7XG5cbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHtcbiAgdXNlck5hbWU6IGVkaXRDb25zdGFudHMucHJvZmlsZU5hbWVFbCxcbiAgdXNlckFib3V0OiBlZGl0Q29uc3RhbnRzLnByb2ZpbGVBYm91dEVsLFxuICB1c2VyQXZhdGFyOiBlZGl0Q29uc3RhbnRzLnByb2ZpbGVBdmF0YXJFbCxcbn0pO1xuXG5jb25zdCBhZGRJbWFnZVBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm1zKHtcbiAgbW9kYWxTZWxlY3RvcjogYWRkQ29uc3RhbnRzLmFkZE1vZGFsU2VsZWN0b3IsXG4gIGhhbmRsZUZvcm1TdWJtaXQ6IChjYXJkKSA9PiB7XG4gICAgbG9hZGluZ0hhbmRsZXIodHJ1ZSwgYWRkQ29uc3RhbnRzLmFkZE1vZGFsU2VsZWN0b3IsIFwiQ3JlYXRpbmcuLi5cIik7XG4gICAgYXBpXG4gICAgICAuZmV0Y2hDYXJkKGNhcmQpXG4gICAgICAudGhlbigoY2FyZERhdGEpID0+IHtcbiAgICAgICAgY29uc3QgbmV3Q2FyZCA9IGNyZWF0ZUNhcmQoY2FyZERhdGEpO1xuICAgICAgICBjYXJkTGlzdC5hZGRJdGVtKG5ld0NhcmQuZ2V0VmlldygpKTtcbiAgICAgICAgYWRkSW1hZ2VQb3B1cC5jbG9zZSgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjoke2Vycn1gKTtcbiAgICAgIH0pXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIGxvYWRpbmdIYW5kbGVyKGZhbHNlLCBhZGRDb25zdGFudHMuYWRkTW9kYWxTZWxlY3RvciwgXCJDcmVhdGVcIik7XG4gICAgICB9KTtcbiAgfSxcbn0pO1xuXG5jb25zdCBjaGFuZ2VQcm9maWxlQXZhdGFyUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybXMoe1xuICBtb2RhbFNlbGVjdG9yOiBlZGl0Q29uc3RhbnRzLmF2YXRhck1vZGFsU2VsZWN0b3IsXG4gIGhhbmRsZUZvcm1TdWJtaXQ6IChhdmF0YXIpID0+IHtcbiAgICBsb2FkaW5nSGFuZGxlcih0cnVlLCBlZGl0Q29uc3RhbnRzLmF2YXRhck1vZGFsU2VsZWN0b3IsIFwiQ2hhbmdpbmcuLi5cIik7XG5cbiAgICBhcGlcbiAgICAgIC5jaGFuZ2VQcm9maWxlQXZhdGFyKGF2YXRhcilcbiAgICAgIC50aGVuKChhdmF0YXJEYXRhKSA9PiB7XG4gICAgICAgIHVzZXJJbmZvLnNldEF2YXRhckltZyhhdmF0YXJEYXRhKTtcbiAgICAgICAgY2hhbmdlUHJvZmlsZUF2YXRhclBvcHVwLmNsb3NlKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiR7ZXJyfWApO1xuICAgICAgfSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgbG9hZGluZ0hhbmRsZXIoZmFsc2UsIGVkaXRDb25zdGFudHMuYXZhdGFyTW9kYWxTZWxlY3RvciwgXCJDaGFuZ2VcIik7XG4gICAgICB9KTtcbiAgfSxcbn0pO1xuXG5jb25zdCBkZWxldGVDYXJkID0gbmV3IFBvcHVwRGVsZXRlQ2FyZCh7XG4gIG1vZGFsU2VsZWN0b3I6IGFkZENvbnN0YW50cy5kZWxldGVDYXJkc0VsLFxuICBoYW5kbGVGb3JtU3VibWl0OiAoY2FyZEVsZW1lbnQsIGNhcmRJZCkgPT4ge1xuICAgIGxvYWRpbmdIYW5kbGVyKHRydWUsIGFkZENvbnN0YW50cy5kZWxldGVDYXJkc0VsLCBcIkRlbGV0aW5nLi4uXCIpO1xuICAgIGFwaVxuICAgICAgLmRlbGV0ZUNhcmQoY2FyZElkKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBjYXJkRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgZGVsZXRlQ2FyZC5jbG9zZSgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjoke2Vycn1gKTtcbiAgICAgIH0pXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIGxvYWRpbmdIYW5kbGVyKGZhbHNlLCBhZGRDb25zdGFudHMuZGVsZXRlQ2FyZHNFbCwgXCJZZXNcIik7XG4gICAgICB9KTtcbiAgfSxcbn0pO1xuXG5jb25zdCB1c2VySW5mb1BvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm1zKHtcbiAgbW9kYWxTZWxlY3RvcjogZWRpdENvbnN0YW50cy5lZGl0TW9kYWxTZWxlY3RvcixcbiAgaGFuZGxlRm9ybVN1Ym1pdDogKHByb2ZpbGUpID0+IHtcbiAgICBsb2FkaW5nSGFuZGxlcih0cnVlLCBlZGl0Q29uc3RhbnRzLmVkaXRNb2RhbFNlbGVjdG9yLCBcIlVwZGF0aW5nLi4uXCIpO1xuICAgIGFwaVxuICAgICAgLmZldGNoUHJvZmlsZUluZm8ocHJvZmlsZSlcbiAgICAgIC50aGVuKChwcm9maWxlRGF0YSkgPT4ge1xuICAgICAgICB1c2VySW5mby5zZXRVc2VySW5mbyhwcm9maWxlRGF0YSk7XG4gICAgICAgIHVzZXJJbmZvUG9wdXAuY2xvc2UoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6JHtlcnJ9YCk7XG4gICAgICB9KVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBsb2FkaW5nSGFuZGxlcihmYWxzZSwgZWRpdENvbnN0YW50cy5lZGl0TW9kYWxTZWxlY3RvciwgXCJVcGRhdGVcIik7XG4gICAgICB9KTtcbiAgfSxcbn0pO1xuXG5jb25zdCBpbWFnZU1vZGFsID0gbmV3IFBvcHVwV2l0aEltYWdlKHByZXZpZXdDb25zdGFudHMucHJldmlld01vZGFsU2VsZWN0b3IpO1xuXG5jb25zdCBlZGl0Rm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKFxuICB2YWxpZGF0aW9uU2V0dGluZ3MsXG4gIGVkaXRDb25zdGFudHMuZWRpdFByb2ZpbGVFbFxuKTtcbmNvbnN0IGFkZEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihcbiAgdmFsaWRhdGlvblNldHRpbmdzLFxuICBhZGRDb25zdGFudHMuYWRkQ2FyZHNFbFxuKTtcblxuY29uc3QgYXZhdGFyRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKFxuICB2YWxpZGF0aW9uU2V0dGluZ3MsXG4gIGVkaXRDb25zdGFudHMucHJvZmlsZUF2YXRhckZvcm1cbik7XG5cbmVkaXRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcbmFkZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuYXZhdGFyRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5cbmFkZEltYWdlUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbmltYWdlTW9kYWwuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbnVzZXJJbmZvUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbmRlbGV0ZUNhcmQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbmNoYW5nZVByb2ZpbGVBdmF0YXJQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuXG4vLy8vL1BPUFVQIEJVVFRPTlMvLy8vL1xuXG5hZGRDb25zdGFudHMuYWRkQ2FyZEJ1dHRvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGFkZEZvcm1WYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKCk7XG4gIGFkZEltYWdlUG9wdXAub3BlbigpO1xufSk7XG5cbmVkaXRDb25zdGFudHMucHJvZmlsZUF2YXRhckJ1dHRvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGF2YXRhckZvcm1WYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKCk7XG4gIGNoYW5nZVByb2ZpbGVBdmF0YXJQb3B1cC5vcGVuKCk7XG59KTtcblxuZWRpdENvbnN0YW50cy5wcm9maWxlRWRpdEJ1dHRvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IHByb2ZpbGVEYXRhID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcbiAgZWRpdENvbnN0YW50cy5lZGl0UHJvZmlsZU5hbWVJbnB1dC52YWx1ZSA9IHByb2ZpbGVEYXRhLm5hbWU7XG4gIGVkaXRDb25zdGFudHMuZWRpdFByb2ZpbGVBYm91dElucHV0LnZhbHVlID0gcHJvZmlsZURhdGEuYWJvdXQ7XG5cbiAgZWRpdEZvcm1WYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKCk7XG4gIHVzZXJJbmZvUG9wdXAub3BlbigpO1xufSk7XG4iXSwibmFtZXMiOlsiQXBpIiwib3B0aW9ucyIsImJhc2VVcmwiLCJoZWFkZXJzIiwicmVzIiwib2siLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsImZldGNoIiwidGhlbiIsIl9jaGVja2Vycm9ycyIsIm5hbWUiLCJsaW5rIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhYm91dCIsImF2YXRhciIsImNhcmRJZCIsIkNhcmQiLCJjYXJkU2VsZWN0b3IiLCJjYXJkIiwiaGFuZGxlUHJldmlld0ltZyIsImhhbmRsZURlbGV0ZUljb24iLCJoYW5kbGVMaWtlQnV0dG9uIiwidXNlcklkIiwiX3VzZXJJZCIsIl9uYW1lIiwiX2xpbmsiLCJfbGlrZWRDYXJkIiwibGlrZXMiLCJfbnVtYmVyTGlrZXMiLCJsZW5ndGgiLCJfaGFuZGxlUHJldmlld0ltZyIsIl9oYW5kbGVEZWxldGVJY29uIiwiX2hhbmRsZUxpa2VCdXR0b24iLCJfb3duZXJJZCIsIm93bmVyIiwiX2lkIiwiX2NhcmRJZCIsIl9jYXJkVGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfZWxlbWVudCIsInRleHRDb250ZW50IiwiZSIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidG9nZ2xlIiwiX2NoZWNrTGlrZXMiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwiX2RlbGV0ZUJ1dHRvbiIsImV2dCIsInJlbW92ZSIsIl9saWtlQnV0dG9uIiwiX2xpa2VkIiwidXNlckxpa2VDYXJkIiwic29tZSIsIml0ZW0iLCJhZGQiLCJfZ2V0VGVtcGxhdGUiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJjYXJkSW1nIiwic3JjIiwiYWx0IiwiX2dldEluaXRhbExpa2VzIiwiRm9ybVZhbGlkYXRvciIsInNldHRpbmdzIiwiZm9ybUVsZW1lbnQiLCJmb3JtRWwiLCJpbnB1dCIsImVycm9yU3BhbiIsImlkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfZXJyb3JDbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2hpZGVJbnB1dEVycm9yIiwiX3Nob3dJbnB1dEVycm9yIiwiaW5wdXRzIiwiZXZlcnkiLCJidXR0b25FbCIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pc1ZhbGlkIiwiZGlzYWJsZWQiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJfZm9ybUVsIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsIl90b2dnbGVCdXR0b24iLCJmb3JFYWNoIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJQb3B1cCIsIm1vZGFsU2VsZWN0b3IiLCJfbW9kYWxFbGVtZW50IiwiX2hhbmRsZUVzY0Nsb3NlIiwiYmluZCIsImNsb3NlIiwia2V5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlBvcHVwRGVsZXRlQ2FyZCIsImhhbmRsZUZvcm1TdWJtaXQiLCJfbW9kYWxGb3JtIiwiX2hhbmRsZUZvcm1TdWJtaXQiLCJfYnV0dG9uIiwiX2NhcmQiLCJwYXJlbnRFbGVtZW50IiwiUG9wdXBXaXRoRm9ybXMiLCJfaW5wdXRzIiwiX2Zvcm1WYWx1ZXMiLCJ2YWx1ZSIsIl9nZXRJbnB1dFZhbHVlcyIsInJlc2V0IiwiUG9wdXBXaXRoSW1hZ2UiLCJpbWFnZSIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsInJlbmRlcmVyIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsImVsZW1lbnQiLCJwcmVwZW5kIiwiaXRlbXMiLCJVc2VySW5mbyIsInVzZXJOYW1lIiwidXNlckFib3V0IiwidXNlckF2YXRhciIsIl91c2VyTmFtZSIsIl91c2VyQWJvdXQiLCJfdXNlckF2YXRhciIsInVzZXJEYXRhIiwiZGF0YSIsInZhbGlkYXRpb25TZXR0aW5ncyIsImZvcm1TZWxlY3RvciIsImNhcmRDb25zdGFudHMiLCJwbGFjZVNlbGVjdG9yIiwicHJldmlld0NvbnN0YW50cyIsInByZXZpZXdNb2RhbFNlbGVjdG9yIiwiZWRpdENvbnN0YW50cyIsImVkaXRQcm9maWxlRWwiLCJwcm9maWxlRWRpdEJ1dHRvbkVsIiwicHJvZmlsZU5hbWVFbCIsInByb2ZpbGVBYm91dEVsIiwicHJvZmlsZUF2YXRhckVsIiwicHJvZmlsZUF2YXRhckZvcm0iLCJwcm9maWxlQXZhdGFyQnV0dG9uRWwiLCJlZGl0UHJvZmlsZU5hbWVJbnB1dCIsImVkaXRQcm9maWxlQWJvdXRJbnB1dCIsImVkaXRNb2RhbFNlbGVjdG9yIiwiYXZhdGFyTW9kYWxTZWxlY3RvciIsImFkZENvbnN0YW50cyIsImFkZENhcmRzRWwiLCJhZGRDYXJkQnV0dG9uRWwiLCJhZGRNb2RhbFNlbGVjdG9yIiwiZGVsZXRlQ2FyZHNFbCIsImxvYWRpbmdIYW5kbGVyIiwibG9hZGluZyIsInRleHQiLCJtb2RhbCIsImFwaSIsImF1dGhvcml6YXRpb24iLCJpbml0aWFsUHJvZmlsZSIsImdldEluaXRpYWxQcm9maWxlIiwidXNlckluZm8iLCJzZXRVc2VySW5mbyIsImluaXRpYWxDYXJkcyIsImdldEluaXRpYWxDYXJkcyIsImNhcmRMaXN0IiwicmVuZGVySXRlbXMiLCJyZXZlcnNlIiwiYWxsIiwiY3JlYXRlQ2FyZCIsImNhcmRJbnN0YW5jZSIsImltYWdlTW9kYWwiLCJvcGVuIiwiZGVsZXRlQ2FyZCIsImJ1dHRvbkxpa2VkIiwibGlrZUNhcmQiLCJyZW1vdmVMaWtlIiwiZ2V0SWQiLCJuZXdDYXJkIiwiY2FyZEVsZW1lbnQiLCJnZXRWaWV3IiwiYWRkSXRlbSIsImFkZEltYWdlUG9wdXAiLCJmZXRjaENhcmQiLCJjYXJkRGF0YSIsImZpbmFsbHkiLCJjaGFuZ2VQcm9maWxlQXZhdGFyUG9wdXAiLCJjaGFuZ2VQcm9maWxlQXZhdGFyIiwiYXZhdGFyRGF0YSIsInNldEF2YXRhckltZyIsInVzZXJJbmZvUG9wdXAiLCJwcm9maWxlIiwiZmV0Y2hQcm9maWxlSW5mbyIsInByb2ZpbGVEYXRhIiwiZWRpdEZvcm1WYWxpZGF0b3IiLCJhZGRGb3JtVmFsaWRhdG9yIiwiYXZhdGFyRm9ybVZhbGlkYXRvciIsImVuYWJsZVZhbGlkYXRpb24iLCJzZXRFdmVudExpc3RlbmVycyIsInJlc2V0VmFsaWRhdGlvbiIsImdldFVzZXJJbmZvIl0sInNvdXJjZVJvb3QiOiIifQ==