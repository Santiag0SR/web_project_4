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
        }

        return Promise.reject("Error");
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

    this._name = card.name;
    this._link = card.link;
    this._likedCard = card.likes._id;
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
    key: "_likeButton",
    value: function _likeButton() {
      var liked = function liked(item) {
        item._id === "3aaa3ba0eaedbec067155932";
      };

      return this._likedCard.some(liked());
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      this._element.querySelector(".card__img").addEventListener("click", function () {
        return _this._handlePreviewImg();
      });

      this._deleteButton = this._element.querySelector(".card__delete-button");

      if (this._ownerId === "3aaa3ba0eaedbec067155932") {
        this._deleteButton.addEventListener("click", function (evt) {
          return _this._handleDeleteIcon(evt);
        });
      } else {
        this._deleteButton.remove();
      }

      this._likeButton = this._element.querySelector(".card__like-button");

      this._likeButton.addEventListener("click", function () {
        return console.log(_this._likedCard);
      } // this._handleLikeButton(this._likeButton())
      );
    } // _handleLikeIcon() {
    //   this._likeButton.classList.toggle("card__like-button_active");
    // }
    // _handleDeleteIcon() {
    //   this._element.remove();
    //   this._card = null;
    // }

  }, {
    key: "_getInitalLikes",
    value: function _getInitalLikes() {
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

        _this2.close();
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











var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_8__.default({
  baseUrl: "https://around.nomoreparties.co/v1/group-13",
  headers: {
    authorization: "0f98077f-1b08-4829-ae57-6f81ab47380c",
    "Content-Type": "application/json"
  }
});
var deleteCard = new _components_PopupDeleteCard__WEBPACK_IMPORTED_MODULE_9__.default({
  modalSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.addConstants.deleteCardsEl,
  handleFormSubmit: function handleFormSubmit(cardElement, cardId) {
    api.deleteCard(cardId).then(function () {
      cardElement.remove();
      deleteCard.close();
    });
  }
});
deleteCard.setEventListeners();
api.getInitialProfile().then(function (res) {
  userInfo.setUserInfo(res);
});
api.getInitialCards().then(function (res) {
  cardList.renderItems(res.reverse());
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
      if (buttonLiked) {
        api.likeCard(card._id);
      } else {
        api.removeLike(card._id);
      }
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
    api.fetchCard(card).then(function (cardData) {
      var newCard = createCard(cardData);
      cardList.addItem(newCard.getView());
    });
  }
});
var changeProfileAvatarPopup = new _components_PopupWithForms_js__WEBPACK_IMPORTED_MODULE_6__.default({
  modalSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.editConstants.avatarModalSelector,
  handleFormSubmit: function handleFormSubmit(avatar) {
    api.changeProfileAvatar(avatar).then(function (avatarData) {
      userInfo.setAvatarImg(avatarData); // userInfo.serUserInfo(avatarData);
    });
  }
});
changeProfileAvatarPopup.setEventListeners();
var userInfoPopup = new _components_PopupWithForms_js__WEBPACK_IMPORTED_MODULE_6__.default({
  modalSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.editConstants.editModalSelector,
  handleFormSubmit: function handleFormSubmit(profile) {
    api.fetchProfileInfo(profile).then(function (profileData) {
      userInfo.setUserInfo(profileData);
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
userInfoPopup.setEventListeners(); /////POPUP BUTTONS/////

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNO0FBQ2xFb0QsRUFBQUEsbUJBQW1CLENBQUNFLGVBQXBCO0FBQ0FaLEVBQUFBLHdCQUF3QixDQUFDVixJQUF6QjtBQUNELENBSEQ7QUFLQWhDLG9HQUFBLENBQW1ELE9BQW5ELEVBQTRELFlBQU07QUFDaEUsTUFBTWlELFdBQVcsR0FBRzFCLFFBQVEsQ0FBQ2dDLFdBQVQsRUFBcEI7QUFDQXZELEVBQUFBLDBGQUFBLEdBQTJDaUQsV0FBVyxDQUFDcE0sSUFBdkQ7QUFDQW1KLEVBQUFBLDJGQUFBLEdBQTRDaUQsV0FBVyxDQUFDOUwsS0FBeEQ7QUFFQStMLEVBQUFBLGlCQUFpQixDQUFDSSxlQUFsQjtBQUNBUixFQUFBQSxhQUFhLENBQUNkLElBQWQ7QUFDRCxDQVBELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9BcGkuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwRGVsZXRlQ2FyZC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3Jtcy5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy91dGlscy9Jbml0aWFsQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcmFjdGljdW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuYmFzZVVybCA9IG9wdGlvbnMuYmFzZVVybDtcbiAgICB0aGlzLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XG4gIH1cblxuICBnZXRJbml0aWFsUHJvZmlsZSgpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS91c2Vycy9tZWAsIHtcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJFcnJvclwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEluaXRpYWxDYXJkcygpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS9jYXJkc2AsIHtcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJFcnJvclwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZldGNoQ2FyZCh7IG5hbWUsIGxpbmsgfSkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VVcmx9L2NhcmRzYCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZSwgbGluayB9KSxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJFcnJvclwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZldGNoUHJvZmlsZUluZm8oeyBuYW1lLCBhYm91dCB9KSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuYmFzZVVybH0vdXNlcnMvbWVgLCB7XG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZTogbmFtZSwgYWJvdXQ6IGFib3V0IH0pLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIkVycm9yXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlUHJvZmlsZUF2YXRhcih7IGF2YXRhciB9KSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuYmFzZVVybH0vdXNlcnMvbWUvYXZhdGFyYCwge1xuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGF2YXRhcjogYXZhdGFyIH0pLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIkVycm9yXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlQ2FyZChjYXJkSWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS9jYXJkcy8ke2NhcmRJZH1gLCB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiRXJyb3JcIik7XG4gICAgfSk7XG4gIH1cblxuICBsaWtlQ2FyZChjYXJkSWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS9jYXJkcy9saWtlcy8ke2NhcmRJZH1gLCB7XG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiRXJyb3JcIik7XG4gICAgfSk7XG4gIH1cbiAgcmVtb3ZlTGlrZShjYXJkSWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS9jYXJkcy9saWtlcy8ke2NhcmRJZH1gLCB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiRXJyb3JcIik7XG4gICAgfSk7XG4gIH1cbn1cbiIsImNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihcbiAgICB7IGNhcmQsIGhhbmRsZVByZXZpZXdJbWcsIGhhbmRsZURlbGV0ZUljb24sIGhhbmRsZUxpa2VCdXR0b24gfSxcbiAgICBjYXJkU2VsZWN0b3JcbiAgKSB7XG4gICAgdGhpcy5fbmFtZSA9IGNhcmQubmFtZTtcbiAgICB0aGlzLl9saW5rID0gY2FyZC5saW5rO1xuICAgIHRoaXMuX2xpa2VkQ2FyZCA9IGNhcmQubGlrZXMuX2lkO1xuICAgIHRoaXMuX251bWJlckxpa2VzID0gY2FyZC5saWtlcy5sZW5ndGg7XG4gICAgdGhpcy5faGFuZGxlUHJldmlld0ltZyA9IGhhbmRsZVByZXZpZXdJbWc7XG4gICAgdGhpcy5faGFuZGxlRGVsZXRlSWNvbiA9IGhhbmRsZURlbGV0ZUljb247XG4gICAgdGhpcy5faGFuZGxlTGlrZUJ1dHRvbiA9IGhhbmRsZUxpa2VCdXR0b247XG4gICAgdGhpcy5fb3duZXJJZCA9IGNhcmQub3duZXIuX2lkO1xuICAgIHRoaXMuX2NhcmRJZCA9IGNhcmQuX2lkO1xuXG4gICAgdGhpcy5fY2FyZFRlbXBsYXRlID0gY2FyZFNlbGVjdG9yO1xuICB9XG5cbiAgX2dldFRlbXBsYXRlKCkge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmRUZW1wbGF0ZSlcbiAgICAgIC5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZFwiKVxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcblxuICAgIHRoaXMuX2VsZW1lbnQgPSB0ZW1wbGF0ZTtcbiAgfVxuXG4gIF9saWtlQnV0dG9uKCkge1xuICAgIGNvbnN0IGxpa2VkID0gKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uX2lkID09PSBcIjNhYWEzYmEwZWFlZGJlYzA2NzE1NTkzMlwiO1xuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuX2xpa2VkQ2FyZC5zb21lKGxpa2VkKCkpO1xuICB9XG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2VsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltZ1wiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLl9oYW5kbGVQcmV2aWV3SW1nKCkpO1xuXG4gICAgdGhpcy5fZGVsZXRlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2RlbGV0ZS1idXR0b25cIik7XG4gICAgaWYgKHRoaXMuX293bmVySWQgPT09IFwiM2FhYTNiYTBlYWVkYmVjMDY3MTU1OTMyXCIpIHtcbiAgICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT5cbiAgICAgICAgdGhpcy5faGFuZGxlRGVsZXRlSWNvbihldnQpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kZWxldGVCdXR0b24ucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fbGlrZUJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19saWtlLWJ1dHRvblwiKTtcbiAgICB0aGlzLl9saWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICAoKSA9PiBjb25zb2xlLmxvZyh0aGlzLl9saWtlZENhcmQpXG4gICAgICAvLyB0aGlzLl9oYW5kbGVMaWtlQnV0dG9uKHRoaXMuX2xpa2VCdXR0b24oKSlcbiAgICApO1xuICB9XG5cbiAgLy8gX2hhbmRsZUxpa2VJY29uKCkge1xuICAvLyAgIHRoaXMuX2xpa2VCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImNhcmRfX2xpa2UtYnV0dG9uX2FjdGl2ZVwiKTtcbiAgLy8gfVxuXG4gIC8vIF9oYW5kbGVEZWxldGVJY29uKCkge1xuICAvLyAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XG4gIC8vICAgdGhpcy5fY2FyZCA9IG51bGw7XG4gIC8vIH1cblxuICBfZ2V0SW5pdGFsTGlrZXMoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RleHRfbGlrZXMtbnVtYmVyXCIpLnRleHRDb250ZW50ID1cbiAgICAgIHRoaXMuX251bWJlckxpa2VzO1xuICB9XG5cbiAgZ2V0VmlldygpIHtcbiAgICB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICBjb25zdCBjYXJkSW1nID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltZ1wiKTtcblxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190ZXh0XCIpLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcbiAgICBjYXJkSW1nLnNyYyA9IHRoaXMuX2xpbms7XG4gICAgY2FyZEltZy5hbHQgPSB0aGlzLl9uYW1lO1xuICAgIHRoaXMuX2dldEluaXRhbExpa2VzKGNhcmRJbWcpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybUVsZW1lbnQpIHtcbiAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gc2V0dGluZ3MuaW5wdXRTZWxlY3RvcjtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHNldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBzZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xuICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IHNldHRpbmdzLmlucHV0RXJyb3JDbGFzcztcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gc2V0dGluZ3MuZXJyb3JDbGFzcztcblxuICAgIHRoaXMuX2Zvcm1FbCA9IGZvcm1FbGVtZW50O1xuICB9XG5cbiAgX3Nob3dJbnB1dEVycm9yID0gKGZvcm1FbCwgaW5wdXQpID0+IHtcbiAgICBjb25zdCBlcnJvclNwYW4gPSBmb3JtRWwucXVlcnlTZWxlY3RvcihgIyR7aW5wdXQuaWR9LWVycm9yYCk7XG4gICAgLy8gYWRkIGVycm9yIG1lc3NhZ2UvY2xhc3NcbiAgICBlcnJvclNwYW4udGV4dENvbnRlbnQgPSBpbnB1dC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICBlcnJvclNwYW4uY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gIH07XG5cbiAgX2hpZGVJbnB1dEVycm9yID0gKGZvcm1FbCwgaW5wdXQpID0+IHtcbiAgICBjb25zdCBlcnJvclNwYW4gPSBmb3JtRWwucXVlcnlTZWxlY3RvcihgIyR7aW5wdXQuaWR9LWVycm9yYCk7XG4gICAgLy8gYWRkIGVycm9yIG1lc3NhZ2UvY2xhc3NcbiAgICBlcnJvclNwYW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGVycm9yU3Bhbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgfTtcblxuICBfY2hlY2tJbnB1dFZhbGlkaXR5ID0gKGZvcm1FbCwgaW5wdXQpID0+IHtcbiAgICBpZiAoaW5wdXQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGZvcm1FbCwgaW5wdXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihmb3JtRWwsIGlucHV0KTtcbiAgICB9XG4gIH07XG5cbiAgX2lzVmFsaWQgPSAoaW5wdXRzKSA9PiB7XG4gICAgcmV0dXJuIGlucHV0cy5ldmVyeSgoaW5wdXQpID0+IGlucHV0LnZhbGlkaXR5LnZhbGlkKTtcbiAgfTtcblxuICBfdG9nZ2xlQnV0dG9uID0gKGZvcm1FbCwgaW5wdXRzKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uRWwgPSBmb3JtRWwucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XG4gICAgaWYgKHRoaXMuX2lzVmFsaWQoaW5wdXRzKSkge1xuICAgICAgYnV0dG9uRWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGJ1dHRvbkVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbkVsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIGJ1dHRvbkVsLmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgfVxuICB9O1xuXG4gIF9zZXRFdmVudExpc3RlbmVycyhmb3JtRWwpIHtcbiAgICBjb25zdCBpbnB1dHMgPSBBcnJheS5mcm9tKGZvcm1FbC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpKTtcbiAgICB0aGlzLl90b2dnbGVCdXR0b24oZm9ybUVsLCBpbnB1dHMpO1xuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgLy8gY2hlY2sgdmFsaWRpdHlcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGZvcm1FbCwgaW5wdXQpO1xuICAgICAgICAvL3RvZ2dsZSBidXR0b25cbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uKGZvcm1FbCwgaW5wdXRzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzZXRWYWxpZGF0aW9uKCkge1xuICAgIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKVxuICAgICk7XG5cbiAgICB0aGlzLl90b2dnbGVCdXR0b24odGhpcy5fZm9ybUVsLCBpbnB1dHMpO1xuXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcih0aGlzLl9mb3JtRWwsIGlucHV0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fZm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycyh0aGlzLl9mb3JtRWwpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0b3I7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKG1vZGFsU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9tb2RhbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHttb2RhbFNlbGVjdG9yfWApO1xuICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX21vZGFsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxcIikgfHxcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxfX2Nsb3NlLWJ1dHRvblwiKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9oYW5kbGVFc2NDbG9zZShlKSB7XG4gICAgaWYgKGUua2V5ID09IFwiRXNjYXBlXCIpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuX21vZGFsRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWxfb3BlblwiKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9tb2RhbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX29wZW5cIik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICB9XG59XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBEZWxldGVDYXJkIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcih7IG1vZGFsU2VsZWN0b3IsIGhhbmRsZUZvcm1TdWJtaXQgfSkge1xuICAgIHN1cGVyKG1vZGFsU2VsZWN0b3IpO1xuXG4gICAgdGhpcy5fbW9kYWxGb3JtID0gdGhpcy5fbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XG4gICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XG4gIH1cblxuICBvcGVuKGV2dCwgY2FyZElkKSB7XG4gICAgc3VwZXIub3BlbigpO1xuICAgIHRoaXMuX2NhcmRJZCA9IGNhcmRJZDtcbiAgICB0aGlzLl9jYXJkID0gZXZ0LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fbW9kYWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQodGhpcy5fY2FyZCwgdGhpcy5fY2FyZElkKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtcyBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IoeyBtb2RhbFNlbGVjdG9yLCBoYW5kbGVGb3JtU3VibWl0IH0pIHtcbiAgICBzdXBlcihtb2RhbFNlbGVjdG9yKTtcblxuICAgIHRoaXMuX21vZGFsRm9ybSA9IHRoaXMuX21vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtXCIpO1xuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xuICB9XG5cbiAgX2dldElucHV0VmFsdWVzKCkge1xuICAgIHRoaXMuX2lucHV0cyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLl9tb2RhbEZvcm0ucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbF9fZm9ybS1pdGVtXCIpXG4gICAgKTtcblxuICAgIHRoaXMuX2Zvcm1WYWx1ZXMgPSB7fTtcblxuICAgIHRoaXMuX2lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgdGhpcy5fZm9ybVZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1WYWx1ZXM7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9tb2RhbEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9tb2RhbEZvcm0ucmVzZXQoKTtcblxuICAgIHN1cGVyLmNsb3NlKCk7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcbiAgb3Blbih7IGxpbmssIG5hbWUgfSkge1xuICAgIHRoaXMuX21vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wcmV2aWV3LWNhcHRpb25cIikudGV4dENvbnRlbnQgPVxuICAgICAgbmFtZTtcbiAgICBjb25zdCBpbWFnZSA9IHRoaXMuX21vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wcmV2aWV3LWltYWdlXCIpO1xuICAgIGltYWdlLnNyYyA9IGxpbms7XG4gICAgaW1hZ2UuYWx0ID0gbmFtZTtcbiAgICBzdXBlci5vcGVuKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcih7IHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjb250YWluZXJTZWxlY3Rvcn1gKTtcbiAgfVxuXG4gIGFkZEl0ZW0oZWxlbWVudCkge1xuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGVsZW1lbnQpO1xuICB9XG5cbiAgcmVuZGVySXRlbXMoaXRlbXMpIHtcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlcihpdGVtKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgbmFtZSxcbiAgICBhYm91dCxcbiAgICBfaWQsXG4gICAgYXZhdGFyLFxuICAgIHVzZXJOYW1lU2VsZWN0b3IsXG4gICAgdXNlckFib3V0U2VsZWN0b3IsXG4gICAgdXNlckF2YXRhclNlbGVjdG9yLFxuICB9KSB7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fYWJvdXQgPSBhYm91dDtcbiAgICB0aGlzLl9pZCA9IF9pZDtcbiAgICB0aGlzLl9hdmF0YXIgPSBhdmF0YXI7XG5cbiAgICB0aGlzLl91c2VyTmFtZVNlbGVjdG9yID0gdXNlck5hbWVTZWxlY3RvcjtcbiAgICB0aGlzLl91c2VyQWJvdXRTZWxlY3RvciA9IHVzZXJBYm91dFNlbGVjdG9yO1xuICAgIHRoaXMuX3VzZXJBdmF0YXJTZWxlY3RvciA9IHVzZXJBdmF0YXJTZWxlY3RvcjtcbiAgfVxuXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIHRoaXMudXNlckRhdGEgPSB7XG4gICAgICBuYW1lOiB0aGlzLl91c2VyTmFtZVNlbGVjdG9yLnRleHRDb250ZW50LFxuICAgICAgYWJvdXQ6IHRoaXMuX3VzZXJBYm91dFNlbGVjdG9yLnRleHRDb250ZW50LFxuICAgICAgYXZhdGFyOiB0aGlzLl91c2VyQXZhdGFyU2VsZWN0b3Iuc3JjLFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy51c2VyRGF0YTtcbiAgfVxuXG4gIHNldFVzZXJJbmZvKGRhdGEpIHtcbiAgICB0aGlzLl91c2VyTmFtZVNlbGVjdG9yLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xuICAgIHRoaXMuX3VzZXJBYm91dFNlbGVjdG9yLnRleHRDb250ZW50ID0gZGF0YS5hYm91dDtcbiAgICB0aGlzLl91c2VyQXZhdGFyU2VsZWN0b3Iuc3JjID0gZGF0YS5hdmF0YXI7XG4gIH1cblxuICBzZXRBdmF0YXJJbWcoZGF0YSkge1xuICAgIHRoaXMuX3VzZXJBdmF0YXJTZWxlY3Rvci5zcmMgPSBkYXRhLmF2YXRhcjtcbiAgfVxufVxuIiwiaW1wb3J0IHlvc2VtaXRlSW1nIGZyb20gXCIuLi9pbWFnZXMvWW9zZW1pdGUuanBlZ1wiO1xuaW1wb3J0IGxha2VJbWcgZnJvbSBcIi4uL2ltYWdlcy9MYWtlX0xvdWlzZS5qcGVnXCI7XG5pbXBvcnQgbW91bnRhaW5zSW1nIGZyb20gXCIuLi9pbWFnZXMvQmFsZF9Nb3VudGFpbnMuanBlZ1wiO1xuaW1wb3J0IGxhdGVtYXJJbWcgZnJvbSBcIi4uL2ltYWdlcy9MYXRlbWFyLmpwZWdcIjtcbmltcG9ydCB2YW5vaXNlSW1nIGZyb20gXCIuLi9pbWFnZXMvVmFub2lzZV9OYXRpb25hbF9QYXJrLmpwZWdcIjtcbmltcG9ydCBsYWdvSW1nIGZyb20gXCIuLi9pbWFnZXMvTGFnb19kaV9CcmFpZXMuanBlZ1wiO1xuXG5jb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIllvc2VtaXRlIFZhbGxleVwiLFxuICAgIGxpbms6IHlvc2VtaXRlSW1nLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxuICAgIGxpbms6IGxha2VJbWcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJhbGQgTW91bnRhaW5zXCIsXG4gICAgbGluazogbW91bnRhaW5zSW1nLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYXRlbWFyXCIsXG4gICAgbGluazogbGF0ZW1hckltZyxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXG4gICAgbGluazogdmFub2lzZUltZyxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTGFnbyBkaSBCcmFpZXNcIixcbiAgICBsaW5rOiBsYWdvSW1nLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbENhcmRzO1xuIiwiLy9WQUxJREFUSU9OIFNFVFRJTkdTXG5leHBvcnQgY29uc3QgdmFsaWRhdGlvblNldHRpbmdzID0ge1xuICBmb3JtU2VsZWN0b3I6IFwiLm1vZGFsX19mb3JtXCIsXG4gIGlucHV0U2VsZWN0b3I6IFwiLm1vZGFsX19mb3JtLWl0ZW1cIixcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLm1vZGFsX19zYXZlLWJ1dHRvblwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcIm1vZGFsX19zYXZlLWJ1dHRvbl9kaXNhYmxlZFwiLFxuICBpbnB1dEVycm9yQ2xhc3M6IFwibW9kYWxfX2Zvcm0taXRlbV90eXBlX2Vycm9yXCIsXG4gIGVycm9yQ2xhc3M6IFwibW9kYWxfX2Vycm9yX3Zpc2libGVcIixcbn07XG5cbmV4cG9ydCBjb25zdCBjYXJkQ29uc3RhbnRzID0ge1xuICBjYXJkU2VsZWN0b3I6IFwiI2NhcmQtdGVtcGxhdGVcIixcbiAgcGxhY2VTZWxlY3RvcjogXCJlbGVtZW50c1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IHByZXZpZXdDb25zdGFudHMgPSB7XG4gIHByZXZpZXdNb2RhbFNlbGVjdG9yOiBcIm1vZGFsX3R5cGVfcHJldmlld1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IGVkaXRDb25zdGFudHMgPSB7XG4gIGVkaXRQcm9maWxlRWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1fdHlwZV9lZGl0XCIpLFxuICBwcm9maWxlRWRpdEJ1dHRvbkVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpLFxuICBwcm9maWxlTmFtZUVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX25hbWVcIiksXG4gIHByb2ZpbGVBYm91dEVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2Fib3V0XCIpLFxuICBwcm9maWxlQXZhdGFyRWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYXZhdGFyXCIpLFxuICBwcm9maWxlQXZhdGFyRm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybV90eXBlX2F2YXRhclwiKSxcbiAgcHJvZmlsZUF2YXRhckJ1dHRvbkVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2F2YXRhci1idXR0b25cIiksXG4gIGVkaXRQcm9maWxlTmFtZUlucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtLWl0ZW1fdHlwZV9uYW1lXCIpLFxuICBlZGl0UHJvZmlsZUFib3V0SW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm0taXRlbV90eXBlX2Fib3V0XCIpLFxuICBlZGl0TW9kYWxTZWxlY3RvcjogXCJtb2RhbF90eXBlX2VkaXRcIixcbiAgYXZhdGFyTW9kYWxTZWxlY3RvcjogXCJtb2RhbF90eXBlX2F2YXRhclwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGFkZENvbnN0YW50cyA9IHtcbiAgYWRkQ2FyZHNFbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybV90eXBlX2FkZFwiKSxcbiAgYWRkQ2FyZEJ1dHRvbkVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2FkZC1idXR0b25cIiksXG4gIGFkZE1vZGFsU2VsZWN0b3I6IFwibW9kYWxfdHlwZV9hZGRcIixcbiAgZGVsZXRlQ2FyZHNFbDogXCJtb2RhbF90eXBlX2RlbGV0ZVwiLFxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXG5pbXBvcnQgaW5pdGlhbENhcmRzIGZyb20gXCIuLi91dGlscy9Jbml0aWFsQ2FyZHMuanNcIjtcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEZvcm1zIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm1zLmpzXCI7XG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcbmltcG9ydCBBcGkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBpLmpzXCI7XG5pbXBvcnQgUG9wdXBEZWxldGVDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwRGVsZXRlQ2FyZFwiO1xuXG5pbXBvcnQge1xuICB2YWxpZGF0aW9uU2V0dGluZ3MsXG4gIGNhcmRDb25zdGFudHMsXG4gIHByZXZpZXdDb25zdGFudHMsXG4gIGVkaXRDb25zdGFudHMsXG4gIGFkZENvbnN0YW50cyxcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50cy5qc1wiO1xuXG5jb25zdCBhcGkgPSBuZXcgQXBpKHtcbiAgYmFzZVVybDogXCJodHRwczovL2Fyb3VuZC5ub21vcmVwYXJ0aWVzLmNvL3YxL2dyb3VwLTEzXCIsXG4gIGhlYWRlcnM6IHtcbiAgICBhdXRob3JpemF0aW9uOiBcIjBmOTgwNzdmLTFiMDgtNDgyOS1hZTU3LTZmODFhYjQ3MzgwY1wiLFxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICB9LFxufSk7XG5cbmNvbnN0IGRlbGV0ZUNhcmQgPSBuZXcgUG9wdXBEZWxldGVDYXJkKHtcbiAgbW9kYWxTZWxlY3RvcjogYWRkQ29uc3RhbnRzLmRlbGV0ZUNhcmRzRWwsXG4gIGhhbmRsZUZvcm1TdWJtaXQ6IChjYXJkRWxlbWVudCwgY2FyZElkKSA9PiB7XG4gICAgYXBpLmRlbGV0ZUNhcmQoY2FyZElkKS50aGVuKCgpID0+IHtcbiAgICAgIGNhcmRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgZGVsZXRlQ2FyZC5jbG9zZSgpO1xuICAgIH0pO1xuICB9LFxufSk7XG5cbmRlbGV0ZUNhcmQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuYXBpLmdldEluaXRpYWxQcm9maWxlKCkudGhlbigocmVzKSA9PiB7XG4gIHVzZXJJbmZvLnNldFVzZXJJbmZvKHJlcyk7XG59KTtcblxuYXBpLmdldEluaXRpYWxDYXJkcygpLnRoZW4oKHJlcykgPT4ge1xuICBjYXJkTGlzdC5yZW5kZXJJdGVtcyhyZXMucmV2ZXJzZSgpKTtcbn0pO1xuXG5jb25zdCBjcmVhdGVDYXJkID0gKGNhcmQpID0+IHtcbiAgY29uc3QgY2FyZEluc3RhbmNlID0gbmV3IENhcmQoXG4gICAge1xuICAgICAgY2FyZCxcbiAgICAgIGhhbmRsZVByZXZpZXdJbWc6ICgpID0+IHtcbiAgICAgICAgaW1hZ2VNb2RhbC5vcGVuKGNhcmQpO1xuICAgICAgfSxcbiAgICAgIGhhbmRsZURlbGV0ZUljb246IChldnQpID0+IHtcbiAgICAgICAgZGVsZXRlQ2FyZC5vcGVuKGV2dCwgY2FyZC5faWQpO1xuICAgICAgfSxcbiAgICAgIGhhbmRsZUxpa2VCdXR0b246IChidXR0b25MaWtlZCkgPT4ge1xuICAgICAgICBpZiAoYnV0dG9uTGlrZWQpIHtcbiAgICAgICAgICBhcGkubGlrZUNhcmQoY2FyZC5faWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFwaS5yZW1vdmVMaWtlKGNhcmQuX2lkKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICAgIGNhcmRDb25zdGFudHMuY2FyZFNlbGVjdG9yXG4gICk7XG5cbiAgcmV0dXJuIGNhcmRJbnN0YW5jZTtcbn07XG5cbmNvbnN0IGNhcmRMaXN0ID0gbmV3IFNlY3Rpb24oXG4gIHtcbiAgICByZW5kZXJlcjogKGNhcmQpID0+IHtcbiAgICAgIGNvbnN0IG5ld0NhcmQgPSBjcmVhdGVDYXJkKGNhcmQpO1xuICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBuZXdDYXJkLmdldFZpZXcoKTtcbiAgICAgIGNhcmRMaXN0LmFkZEl0ZW0oY2FyZEVsZW1lbnQpO1xuICAgIH0sXG4gIH0sXG4gIGNhcmRDb25zdGFudHMucGxhY2VTZWxlY3RvclxuKTtcblxuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oe1xuICB1c2VyTmFtZVNlbGVjdG9yOiBlZGl0Q29uc3RhbnRzLnByb2ZpbGVOYW1lRWwsXG4gIHVzZXJBYm91dFNlbGVjdG9yOiBlZGl0Q29uc3RhbnRzLnByb2ZpbGVBYm91dEVsLFxuICB1c2VyQXZhdGFyU2VsZWN0b3I6IGVkaXRDb25zdGFudHMucHJvZmlsZUF2YXRhckVsLFxufSk7XG5cbmNvbnN0IGFkZEltYWdlUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybXMoe1xuICBtb2RhbFNlbGVjdG9yOiBhZGRDb25zdGFudHMuYWRkTW9kYWxTZWxlY3RvcixcbiAgaGFuZGxlRm9ybVN1Ym1pdDogKGNhcmQpID0+IHtcbiAgICBhcGkuZmV0Y2hDYXJkKGNhcmQpLnRoZW4oKGNhcmREYXRhKSA9PiB7XG4gICAgICBjb25zdCBuZXdDYXJkID0gY3JlYXRlQ2FyZChjYXJkRGF0YSk7XG4gICAgICBjYXJkTGlzdC5hZGRJdGVtKG5ld0NhcmQuZ2V0VmlldygpKTtcbiAgICB9KTtcbiAgfSxcbn0pO1xuXG5jb25zdCBjaGFuZ2VQcm9maWxlQXZhdGFyUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybXMoe1xuICBtb2RhbFNlbGVjdG9yOiBlZGl0Q29uc3RhbnRzLmF2YXRhck1vZGFsU2VsZWN0b3IsXG4gIGhhbmRsZUZvcm1TdWJtaXQ6IChhdmF0YXIpID0+IHtcbiAgICBhcGkuY2hhbmdlUHJvZmlsZUF2YXRhcihhdmF0YXIpLnRoZW4oKGF2YXRhckRhdGEpID0+IHtcbiAgICAgIHVzZXJJbmZvLnNldEF2YXRhckltZyhhdmF0YXJEYXRhKTtcbiAgICAgIC8vIHVzZXJJbmZvLnNlclVzZXJJbmZvKGF2YXRhckRhdGEpO1xuICAgIH0pO1xuICB9LFxufSk7XG5cbmNoYW5nZVByb2ZpbGVBdmF0YXJQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuXG5jb25zdCB1c2VySW5mb1BvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm1zKHtcbiAgbW9kYWxTZWxlY3RvcjogZWRpdENvbnN0YW50cy5lZGl0TW9kYWxTZWxlY3RvcixcbiAgaGFuZGxlRm9ybVN1Ym1pdDogKHByb2ZpbGUpID0+IHtcbiAgICBhcGkuZmV0Y2hQcm9maWxlSW5mbyhwcm9maWxlKS50aGVuKChwcm9maWxlRGF0YSkgPT4ge1xuICAgICAgdXNlckluZm8uc2V0VXNlckluZm8ocHJvZmlsZURhdGEpO1xuICAgIH0pO1xuICB9LFxufSk7XG5cbmNvbnN0IGltYWdlTW9kYWwgPSBuZXcgUG9wdXBXaXRoSW1hZ2UocHJldmlld0NvbnN0YW50cy5wcmV2aWV3TW9kYWxTZWxlY3Rvcik7XG5cbmNvbnN0IGVkaXRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoXG4gIHZhbGlkYXRpb25TZXR0aW5ncyxcbiAgZWRpdENvbnN0YW50cy5lZGl0UHJvZmlsZUVsXG4pO1xuY29uc3QgYWRkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKFxuICB2YWxpZGF0aW9uU2V0dGluZ3MsXG4gIGFkZENvbnN0YW50cy5hZGRDYXJkc0VsXG4pO1xuXG5jb25zdCBhdmF0YXJGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoXG4gIHZhbGlkYXRpb25TZXR0aW5ncyxcbiAgZWRpdENvbnN0YW50cy5wcm9maWxlQXZhdGFyRm9ybVxuKTtcblxuZWRpdEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuYWRkRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5hdmF0YXJGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcblxuYWRkSW1hZ2VQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuaW1hZ2VNb2RhbC5zZXRFdmVudExpc3RlbmVycygpO1xudXNlckluZm9Qb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuXG4vLy8vL1BPUFVQIEJVVFRPTlMvLy8vL1xuXG5hZGRDb25zdGFudHMuYWRkQ2FyZEJ1dHRvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGFkZEZvcm1WYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKCk7XG4gIGFkZEltYWdlUG9wdXAub3BlbigpO1xufSk7XG5cbmVkaXRDb25zdGFudHMucHJvZmlsZUF2YXRhckJ1dHRvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGF2YXRhckZvcm1WYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKCk7XG4gIGNoYW5nZVByb2ZpbGVBdmF0YXJQb3B1cC5vcGVuKCk7XG59KTtcblxuZWRpdENvbnN0YW50cy5wcm9maWxlRWRpdEJ1dHRvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IHByb2ZpbGVEYXRhID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcbiAgZWRpdENvbnN0YW50cy5lZGl0UHJvZmlsZU5hbWVJbnB1dC52YWx1ZSA9IHByb2ZpbGVEYXRhLm5hbWU7XG4gIGVkaXRDb25zdGFudHMuZWRpdFByb2ZpbGVBYm91dElucHV0LnZhbHVlID0gcHJvZmlsZURhdGEuYWJvdXQ7XG5cbiAgZWRpdEZvcm1WYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKCk7XG4gIHVzZXJJbmZvUG9wdXAub3BlbigpO1xufSk7XG4iXSwibmFtZXMiOlsiQXBpIiwib3B0aW9ucyIsImJhc2VVcmwiLCJoZWFkZXJzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwib2siLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsIm5hbWUiLCJsaW5rIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhYm91dCIsImF2YXRhciIsImNhcmRJZCIsIkNhcmQiLCJjYXJkU2VsZWN0b3IiLCJjYXJkIiwiaGFuZGxlUHJldmlld0ltZyIsImhhbmRsZURlbGV0ZUljb24iLCJoYW5kbGVMaWtlQnV0dG9uIiwiX25hbWUiLCJfbGluayIsIl9saWtlZENhcmQiLCJsaWtlcyIsIl9pZCIsIl9udW1iZXJMaWtlcyIsImxlbmd0aCIsIl9oYW5kbGVQcmV2aWV3SW1nIiwiX2hhbmRsZURlbGV0ZUljb24iLCJfaGFuZGxlTGlrZUJ1dHRvbiIsIl9vd25lcklkIiwib3duZXIiLCJfY2FyZElkIiwiX2NhcmRUZW1wbGF0ZSIsInRlbXBsYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9lbGVtZW50IiwibGlrZWQiLCJpdGVtIiwic29tZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfZGVsZXRlQnV0dG9uIiwiZXZ0IiwicmVtb3ZlIiwiX2xpa2VCdXR0b24iLCJjb25zb2xlIiwibG9nIiwidGV4dENvbnRlbnQiLCJfZ2V0VGVtcGxhdGUiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJjYXJkSW1nIiwic3JjIiwiYWx0IiwiX2dldEluaXRhbExpa2VzIiwiRm9ybVZhbGlkYXRvciIsInNldHRpbmdzIiwiZm9ybUVsZW1lbnQiLCJmb3JtRWwiLCJpbnB1dCIsImVycm9yU3BhbiIsImlkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJfZXJyb3JDbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2hpZGVJbnB1dEVycm9yIiwiX3Nob3dJbnB1dEVycm9yIiwiaW5wdXRzIiwiZXZlcnkiLCJidXR0b25FbCIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pc1ZhbGlkIiwiZGlzYWJsZWQiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJfZm9ybUVsIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsIl90b2dnbGVCdXR0b24iLCJmb3JFYWNoIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJQb3B1cCIsIm1vZGFsU2VsZWN0b3IiLCJfbW9kYWxFbGVtZW50IiwiX2hhbmRsZUVzY0Nsb3NlIiwiYmluZCIsImUiLCJ0YXJnZXQiLCJjb250YWlucyIsImNsb3NlIiwia2V5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlBvcHVwRGVsZXRlQ2FyZCIsImhhbmRsZUZvcm1TdWJtaXQiLCJfbW9kYWxGb3JtIiwiX2hhbmRsZUZvcm1TdWJtaXQiLCJfY2FyZCIsInBhcmVudEVsZW1lbnQiLCJQb3B1cFdpdGhGb3JtcyIsIl9pbnB1dHMiLCJfZm9ybVZhbHVlcyIsInZhbHVlIiwiX2dldElucHV0VmFsdWVzIiwicmVzZXQiLCJQb3B1cFdpdGhJbWFnZSIsImltYWdlIiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwicmVuZGVyZXIiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwiZWxlbWVudCIsInByZXBlbmQiLCJpdGVtcyIsIlVzZXJJbmZvIiwidXNlck5hbWVTZWxlY3RvciIsInVzZXJBYm91dFNlbGVjdG9yIiwidXNlckF2YXRhclNlbGVjdG9yIiwiX2Fib3V0IiwiX2F2YXRhciIsIl91c2VyTmFtZVNlbGVjdG9yIiwiX3VzZXJBYm91dFNlbGVjdG9yIiwiX3VzZXJBdmF0YXJTZWxlY3RvciIsInVzZXJEYXRhIiwiZGF0YSIsInlvc2VtaXRlSW1nIiwibGFrZUltZyIsIm1vdW50YWluc0ltZyIsImxhdGVtYXJJbWciLCJ2YW5vaXNlSW1nIiwibGFnb0ltZyIsImluaXRpYWxDYXJkcyIsInZhbGlkYXRpb25TZXR0aW5ncyIsImZvcm1TZWxlY3RvciIsImNhcmRDb25zdGFudHMiLCJwbGFjZVNlbGVjdG9yIiwicHJldmlld0NvbnN0YW50cyIsInByZXZpZXdNb2RhbFNlbGVjdG9yIiwiZWRpdENvbnN0YW50cyIsImVkaXRQcm9maWxlRWwiLCJwcm9maWxlRWRpdEJ1dHRvbkVsIiwicHJvZmlsZU5hbWVFbCIsInByb2ZpbGVBYm91dEVsIiwicHJvZmlsZUF2YXRhckVsIiwicHJvZmlsZUF2YXRhckZvcm0iLCJwcm9maWxlQXZhdGFyQnV0dG9uRWwiLCJlZGl0UHJvZmlsZU5hbWVJbnB1dCIsImVkaXRQcm9maWxlQWJvdXRJbnB1dCIsImVkaXRNb2RhbFNlbGVjdG9yIiwiYXZhdGFyTW9kYWxTZWxlY3RvciIsImFkZENvbnN0YW50cyIsImFkZENhcmRzRWwiLCJhZGRDYXJkQnV0dG9uRWwiLCJhZGRNb2RhbFNlbGVjdG9yIiwiZGVsZXRlQ2FyZHNFbCIsImFwaSIsImF1dGhvcml6YXRpb24iLCJkZWxldGVDYXJkIiwiY2FyZEVsZW1lbnQiLCJzZXRFdmVudExpc3RlbmVycyIsImdldEluaXRpYWxQcm9maWxlIiwidXNlckluZm8iLCJzZXRVc2VySW5mbyIsImdldEluaXRpYWxDYXJkcyIsImNhcmRMaXN0IiwicmVuZGVySXRlbXMiLCJyZXZlcnNlIiwiY3JlYXRlQ2FyZCIsImNhcmRJbnN0YW5jZSIsImltYWdlTW9kYWwiLCJvcGVuIiwiYnV0dG9uTGlrZWQiLCJsaWtlQ2FyZCIsInJlbW92ZUxpa2UiLCJuZXdDYXJkIiwiZ2V0VmlldyIsImFkZEl0ZW0iLCJhZGRJbWFnZVBvcHVwIiwiZmV0Y2hDYXJkIiwiY2FyZERhdGEiLCJjaGFuZ2VQcm9maWxlQXZhdGFyUG9wdXAiLCJjaGFuZ2VQcm9maWxlQXZhdGFyIiwiYXZhdGFyRGF0YSIsInNldEF2YXRhckltZyIsInVzZXJJbmZvUG9wdXAiLCJwcm9maWxlIiwiZmV0Y2hQcm9maWxlSW5mbyIsInByb2ZpbGVEYXRhIiwiZWRpdEZvcm1WYWxpZGF0b3IiLCJhZGRGb3JtVmFsaWRhdG9yIiwiYXZhdGFyRm9ybVZhbGlkYXRvciIsImVuYWJsZVZhbGlkYXRpb24iLCJyZXNldFZhbGlkYXRpb24iLCJnZXRVc2VySW5mbyJdLCJzb3VyY2VSb290IjoiIn0=