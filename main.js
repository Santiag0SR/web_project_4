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
    key: "_liked",
    value: function _liked() {
      var _this = this;

      console.log("hello");

      this._likedCard.forEach(function (item) {
        if (item._id !== "ff7f8240f3b1cc171b16d984" || _this._numberLikes === 0) {
          console.log("not liked by me");

          _this._likeButton.classList.remove("card__like-button_active");

          return false;
        } else {
          console.log("liked by me");

          _this._likeButton.classList.add("card__like-button_active");

          return true;
        }

        console.log(item._id);
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

      if (this._ownerId === "3aaa3ba0eaedbec067155932") {
        this._deleteButton.addEventListener("click", function (evt) {
          return _this2._handleDeleteIcon(evt);
        });
      } else {
        this._deleteButton.remove();
      }

      this._likeButton = this._element.querySelector(".card__like-button");

      this._likeButton.addEventListener("click", function () {
        return _this2._handleLikeButton(_this2._liked());
      });
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
      var _this3 = this;

      this._likedCard.forEach(function (item) {
        if (item._id === "3aaa3ba0eaedbec067155932") {
          _this3._likeButton.classList.add("card__like-button_active");
        } else {
          _this3._likeButton.classList.remove("card__like-button_active");
        }
      });

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
      console.log(buttonLiked); // if (buttonLiked) {
      //   console.log("hello");
      //   // api.likeCard(card._id);
      // } else {
      //   // api.removeLike(card._id);
      // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZW50cy9BcGkuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwRGVsZXRlQ2FyZC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3Jtcy5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy91dGlscy9Jbml0aWFsQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcmFjdGljdW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuYmFzZVVybCA9IG9wdGlvbnMuYmFzZVVybDtcbiAgICB0aGlzLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XG4gIH1cblxuICBnZXRJbml0aWFsUHJvZmlsZSgpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS91c2Vycy9tZWAsIHtcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJFcnJvclwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEluaXRpYWxDYXJkcygpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS9jYXJkc2AsIHtcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJFcnJvclwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZldGNoQ2FyZCh7IG5hbWUsIGxpbmsgfSkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VVcmx9L2NhcmRzYCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZSwgbGluayB9KSxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJFcnJvclwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZldGNoUHJvZmlsZUluZm8oeyBuYW1lLCBhYm91dCB9KSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuYmFzZVVybH0vdXNlcnMvbWVgLCB7XG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZTogbmFtZSwgYWJvdXQ6IGFib3V0IH0pLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIkVycm9yXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlUHJvZmlsZUF2YXRhcih7IGF2YXRhciB9KSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuYmFzZVVybH0vdXNlcnMvbWUvYXZhdGFyYCwge1xuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGF2YXRhcjogYXZhdGFyIH0pLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIkVycm9yXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlQ2FyZChjYXJkSWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS9jYXJkcy8ke2NhcmRJZH1gLCB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiRXJyb3JcIik7XG4gICAgfSk7XG4gIH1cblxuICBsaWtlQ2FyZChjYXJkSWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS9jYXJkcy9saWtlcy8ke2NhcmRJZH1gLCB7XG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiRXJyb3JcIik7XG4gICAgfSk7XG4gIH1cbiAgcmVtb3ZlTGlrZShjYXJkSWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS9jYXJkcy9saWtlcy8ke2NhcmRJZH1gLCB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiRXJyb3JcIik7XG4gICAgfSk7XG4gIH1cbn1cbiIsImNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihcbiAgICB7IGNhcmQsIGhhbmRsZVByZXZpZXdJbWcsIGhhbmRsZURlbGV0ZUljb24sIGhhbmRsZUxpa2VCdXR0b24gfSxcbiAgICBjYXJkU2VsZWN0b3JcbiAgKSB7XG4gICAgdGhpcy5fbmFtZSA9IGNhcmQubmFtZTtcbiAgICB0aGlzLl9saW5rID0gY2FyZC5saW5rO1xuICAgIHRoaXMuX2xpa2VkQ2FyZCA9IGNhcmQubGlrZXM7XG4gICAgdGhpcy5fbnVtYmVyTGlrZXMgPSBjYXJkLmxpa2VzLmxlbmd0aDtcbiAgICB0aGlzLl9oYW5kbGVQcmV2aWV3SW1nID0gaGFuZGxlUHJldmlld0ltZztcbiAgICB0aGlzLl9oYW5kbGVEZWxldGVJY29uID0gaGFuZGxlRGVsZXRlSWNvbjtcbiAgICB0aGlzLl9oYW5kbGVMaWtlQnV0dG9uID0gaGFuZGxlTGlrZUJ1dHRvbjtcbiAgICB0aGlzLl9vd25lcklkID0gY2FyZC5vd25lci5faWQ7XG4gICAgdGhpcy5fY2FyZElkID0gY2FyZC5faWQ7XG5cbiAgICB0aGlzLl9jYXJkVGVtcGxhdGUgPSBjYXJkU2VsZWN0b3I7XG4gIH1cblxuICBfZ2V0VGVtcGxhdGUoKSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFRlbXBsYXRlKVxuICAgICAgLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpXG4gICAgICAuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgdGhpcy5fZWxlbWVudCA9IHRlbXBsYXRlO1xuICB9XG4gIC8vICAzYWFhM2JhMGVhZWRiZWMwNjcxNTU5MzJcblxuICBfbGlrZWQoKSB7XG4gICAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcbiAgICB0aGlzLl9saWtlZENhcmQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0uX2lkICE9PSBcImZmN2Y4MjQwZjNiMWNjMTcxYjE2ZDk4NFwiIHx8IHRoaXMuX251bWJlckxpa2VzID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibm90IGxpa2VkIGJ5IG1lXCIpO1xuICAgICAgICB0aGlzLl9saWtlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjYXJkX19saWtlLWJ1dHRvbl9hY3RpdmVcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibGlrZWQgYnkgbWVcIik7XG4gICAgICAgIHRoaXMuX2xpa2VCdXR0b24uY2xhc3NMaXN0LmFkZChcImNhcmRfX2xpa2UtYnV0dG9uX2FjdGl2ZVwiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhpdGVtLl9pZCk7XG4gICAgfSk7XG4gIH1cblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fZWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1nXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuX2hhbmRsZVByZXZpZXdJbWcoKSk7XG5cbiAgICB0aGlzLl9kZWxldGVCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fZGVsZXRlLWJ1dHRvblwiKTtcbiAgICBpZiAodGhpcy5fb3duZXJJZCA9PT0gXCIzYWFhM2JhMGVhZWRiZWMwNjcxNTU5MzJcIikge1xuICAgICAgdGhpcy5fZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PlxuICAgICAgICB0aGlzLl9oYW5kbGVEZWxldGVJY29uKGV2dClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbi5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9saWtlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2xpa2UtYnV0dG9uXCIpO1xuICAgIHRoaXMuX2xpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gICAgICB0aGlzLl9oYW5kbGVMaWtlQnV0dG9uKHRoaXMuX2xpa2VkKCkpXG4gICAgKTtcbiAgfVxuXG4gIC8vIF9oYW5kbGVMaWtlSWNvbigpIHtcbiAgLy8gICB0aGlzLl9saWtlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkX19saWtlLWJ1dHRvbl9hY3RpdmVcIik7XG4gIC8vIH1cblxuICAvLyBfaGFuZGxlRGVsZXRlSWNvbigpIHtcbiAgLy8gICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xuICAvLyAgIHRoaXMuX2NhcmQgPSBudWxsO1xuICAvLyB9XG5cbiAgX2dldEluaXRhbExpa2VzKCkge1xuICAgIHRoaXMuX2xpa2VkQ2FyZC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5faWQgPT09IFwiM2FhYTNiYTBlYWVkYmVjMDY3MTU1OTMyXCIpIHtcbiAgICAgICAgdGhpcy5fbGlrZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2FyZF9fbGlrZS1idXR0b25fYWN0aXZlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbGlrZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2FyZF9fbGlrZS1idXR0b25fYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RleHRfbGlrZXMtbnVtYmVyXCIpLnRleHRDb250ZW50ID1cbiAgICAgIHRoaXMuX251bWJlckxpa2VzO1xuICB9XG5cbiAgZ2V0VmlldygpIHtcbiAgICB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICBjb25zdCBjYXJkSW1nID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltZ1wiKTtcblxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190ZXh0XCIpLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcbiAgICBjYXJkSW1nLnNyYyA9IHRoaXMuX2xpbms7XG4gICAgY2FyZEltZy5hbHQgPSB0aGlzLl9uYW1lO1xuICAgIHRoaXMuX2dldEluaXRhbExpa2VzKGNhcmRJbWcpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybUVsZW1lbnQpIHtcbiAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gc2V0dGluZ3MuaW5wdXRTZWxlY3RvcjtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHNldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBzZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xuICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IHNldHRpbmdzLmlucHV0RXJyb3JDbGFzcztcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gc2V0dGluZ3MuZXJyb3JDbGFzcztcblxuICAgIHRoaXMuX2Zvcm1FbCA9IGZvcm1FbGVtZW50O1xuICB9XG5cbiAgX3Nob3dJbnB1dEVycm9yID0gKGZvcm1FbCwgaW5wdXQpID0+IHtcbiAgICBjb25zdCBlcnJvclNwYW4gPSBmb3JtRWwucXVlcnlTZWxlY3RvcihgIyR7aW5wdXQuaWR9LWVycm9yYCk7XG4gICAgLy8gYWRkIGVycm9yIG1lc3NhZ2UvY2xhc3NcbiAgICBlcnJvclNwYW4udGV4dENvbnRlbnQgPSBpbnB1dC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICBlcnJvclNwYW4uY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gIH07XG5cbiAgX2hpZGVJbnB1dEVycm9yID0gKGZvcm1FbCwgaW5wdXQpID0+IHtcbiAgICBjb25zdCBlcnJvclNwYW4gPSBmb3JtRWwucXVlcnlTZWxlY3RvcihgIyR7aW5wdXQuaWR9LWVycm9yYCk7XG4gICAgLy8gYWRkIGVycm9yIG1lc3NhZ2UvY2xhc3NcbiAgICBlcnJvclNwYW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGVycm9yU3Bhbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgfTtcblxuICBfY2hlY2tJbnB1dFZhbGlkaXR5ID0gKGZvcm1FbCwgaW5wdXQpID0+IHtcbiAgICBpZiAoaW5wdXQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGZvcm1FbCwgaW5wdXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihmb3JtRWwsIGlucHV0KTtcbiAgICB9XG4gIH07XG5cbiAgX2lzVmFsaWQgPSAoaW5wdXRzKSA9PiB7XG4gICAgcmV0dXJuIGlucHV0cy5ldmVyeSgoaW5wdXQpID0+IGlucHV0LnZhbGlkaXR5LnZhbGlkKTtcbiAgfTtcblxuICBfdG9nZ2xlQnV0dG9uID0gKGZvcm1FbCwgaW5wdXRzKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uRWwgPSBmb3JtRWwucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XG4gICAgaWYgKHRoaXMuX2lzVmFsaWQoaW5wdXRzKSkge1xuICAgICAgYnV0dG9uRWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGJ1dHRvbkVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbkVsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIGJ1dHRvbkVsLmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgfVxuICB9O1xuXG4gIF9zZXRFdmVudExpc3RlbmVycyhmb3JtRWwpIHtcbiAgICBjb25zdCBpbnB1dHMgPSBBcnJheS5mcm9tKGZvcm1FbC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpKTtcbiAgICB0aGlzLl90b2dnbGVCdXR0b24oZm9ybUVsLCBpbnB1dHMpO1xuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgLy8gY2hlY2sgdmFsaWRpdHlcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGZvcm1FbCwgaW5wdXQpO1xuICAgICAgICAvL3RvZ2dsZSBidXR0b25cbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uKGZvcm1FbCwgaW5wdXRzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzZXRWYWxpZGF0aW9uKCkge1xuICAgIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKVxuICAgICk7XG5cbiAgICB0aGlzLl90b2dnbGVCdXR0b24odGhpcy5fZm9ybUVsLCBpbnB1dHMpO1xuXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcih0aGlzLl9mb3JtRWwsIGlucHV0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fZm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycyh0aGlzLl9mb3JtRWwpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0b3I7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKG1vZGFsU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9tb2RhbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHttb2RhbFNlbGVjdG9yfWApO1xuICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX21vZGFsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxcIikgfHxcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxfX2Nsb3NlLWJ1dHRvblwiKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9oYW5kbGVFc2NDbG9zZShlKSB7XG4gICAgaWYgKGUua2V5ID09IFwiRXNjYXBlXCIpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuX21vZGFsRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWxfb3BlblwiKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9tb2RhbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX29wZW5cIik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICB9XG59XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBEZWxldGVDYXJkIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcih7IG1vZGFsU2VsZWN0b3IsIGhhbmRsZUZvcm1TdWJtaXQgfSkge1xuICAgIHN1cGVyKG1vZGFsU2VsZWN0b3IpO1xuXG4gICAgdGhpcy5fbW9kYWxGb3JtID0gdGhpcy5fbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XG4gICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XG4gIH1cblxuICBvcGVuKGV2dCwgY2FyZElkKSB7XG4gICAgc3VwZXIub3BlbigpO1xuICAgIHRoaXMuX2NhcmRJZCA9IGNhcmRJZDtcbiAgICB0aGlzLl9jYXJkID0gZXZ0LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fbW9kYWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQodGhpcy5fY2FyZCwgdGhpcy5fY2FyZElkKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtcyBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IoeyBtb2RhbFNlbGVjdG9yLCBoYW5kbGVGb3JtU3VibWl0IH0pIHtcbiAgICBzdXBlcihtb2RhbFNlbGVjdG9yKTtcblxuICAgIHRoaXMuX21vZGFsRm9ybSA9IHRoaXMuX21vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtXCIpO1xuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xuICB9XG5cbiAgX2dldElucHV0VmFsdWVzKCkge1xuICAgIHRoaXMuX2lucHV0cyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLl9tb2RhbEZvcm0ucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbF9fZm9ybS1pdGVtXCIpXG4gICAgKTtcblxuICAgIHRoaXMuX2Zvcm1WYWx1ZXMgPSB7fTtcblxuICAgIHRoaXMuX2lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgdGhpcy5fZm9ybVZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1WYWx1ZXM7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9tb2RhbEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9tb2RhbEZvcm0ucmVzZXQoKTtcblxuICAgIHN1cGVyLmNsb3NlKCk7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcbiAgb3Blbih7IGxpbmssIG5hbWUgfSkge1xuICAgIHRoaXMuX21vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wcmV2aWV3LWNhcHRpb25cIikudGV4dENvbnRlbnQgPVxuICAgICAgbmFtZTtcbiAgICBjb25zdCBpbWFnZSA9IHRoaXMuX21vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wcmV2aWV3LWltYWdlXCIpO1xuICAgIGltYWdlLnNyYyA9IGxpbms7XG4gICAgaW1hZ2UuYWx0ID0gbmFtZTtcbiAgICBzdXBlci5vcGVuKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcih7IHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjb250YWluZXJTZWxlY3Rvcn1gKTtcbiAgfVxuXG4gIGFkZEl0ZW0oZWxlbWVudCkge1xuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGVsZW1lbnQpO1xuICB9XG5cbiAgcmVuZGVySXRlbXMoaXRlbXMpIHtcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlcihpdGVtKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgbmFtZSxcbiAgICBhYm91dCxcbiAgICBfaWQsXG4gICAgYXZhdGFyLFxuICAgIHVzZXJOYW1lU2VsZWN0b3IsXG4gICAgdXNlckFib3V0U2VsZWN0b3IsXG4gICAgdXNlckF2YXRhclNlbGVjdG9yLFxuICB9KSB7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fYWJvdXQgPSBhYm91dDtcbiAgICB0aGlzLl9pZCA9IF9pZDtcbiAgICB0aGlzLl9hdmF0YXIgPSBhdmF0YXI7XG5cbiAgICB0aGlzLl91c2VyTmFtZVNlbGVjdG9yID0gdXNlck5hbWVTZWxlY3RvcjtcbiAgICB0aGlzLl91c2VyQWJvdXRTZWxlY3RvciA9IHVzZXJBYm91dFNlbGVjdG9yO1xuICAgIHRoaXMuX3VzZXJBdmF0YXJTZWxlY3RvciA9IHVzZXJBdmF0YXJTZWxlY3RvcjtcbiAgfVxuXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIHRoaXMudXNlckRhdGEgPSB7XG4gICAgICBuYW1lOiB0aGlzLl91c2VyTmFtZVNlbGVjdG9yLnRleHRDb250ZW50LFxuICAgICAgYWJvdXQ6IHRoaXMuX3VzZXJBYm91dFNlbGVjdG9yLnRleHRDb250ZW50LFxuICAgICAgYXZhdGFyOiB0aGlzLl91c2VyQXZhdGFyU2VsZWN0b3Iuc3JjLFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy51c2VyRGF0YTtcbiAgfVxuXG4gIHNldFVzZXJJbmZvKGRhdGEpIHtcbiAgICB0aGlzLl91c2VyTmFtZVNlbGVjdG9yLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xuICAgIHRoaXMuX3VzZXJBYm91dFNlbGVjdG9yLnRleHRDb250ZW50ID0gZGF0YS5hYm91dDtcbiAgICB0aGlzLl91c2VyQXZhdGFyU2VsZWN0b3Iuc3JjID0gZGF0YS5hdmF0YXI7XG4gIH1cblxuICBzZXRBdmF0YXJJbWcoZGF0YSkge1xuICAgIHRoaXMuX3VzZXJBdmF0YXJTZWxlY3Rvci5zcmMgPSBkYXRhLmF2YXRhcjtcbiAgfVxufVxuIiwiaW1wb3J0IHlvc2VtaXRlSW1nIGZyb20gXCIuLi9pbWFnZXMvWW9zZW1pdGUuanBlZ1wiO1xuaW1wb3J0IGxha2VJbWcgZnJvbSBcIi4uL2ltYWdlcy9MYWtlX0xvdWlzZS5qcGVnXCI7XG5pbXBvcnQgbW91bnRhaW5zSW1nIGZyb20gXCIuLi9pbWFnZXMvQmFsZF9Nb3VudGFpbnMuanBlZ1wiO1xuaW1wb3J0IGxhdGVtYXJJbWcgZnJvbSBcIi4uL2ltYWdlcy9MYXRlbWFyLmpwZWdcIjtcbmltcG9ydCB2YW5vaXNlSW1nIGZyb20gXCIuLi9pbWFnZXMvVmFub2lzZV9OYXRpb25hbF9QYXJrLmpwZWdcIjtcbmltcG9ydCBsYWdvSW1nIGZyb20gXCIuLi9pbWFnZXMvTGFnb19kaV9CcmFpZXMuanBlZ1wiO1xuXG5jb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIllvc2VtaXRlIFZhbGxleVwiLFxuICAgIGxpbms6IHlvc2VtaXRlSW1nLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxuICAgIGxpbms6IGxha2VJbWcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJhbGQgTW91bnRhaW5zXCIsXG4gICAgbGluazogbW91bnRhaW5zSW1nLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYXRlbWFyXCIsXG4gICAgbGluazogbGF0ZW1hckltZyxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXG4gICAgbGluazogdmFub2lzZUltZyxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTGFnbyBkaSBCcmFpZXNcIixcbiAgICBsaW5rOiBsYWdvSW1nLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbENhcmRzO1xuIiwiLy9WQUxJREFUSU9OIFNFVFRJTkdTXG5leHBvcnQgY29uc3QgdmFsaWRhdGlvblNldHRpbmdzID0ge1xuICBmb3JtU2VsZWN0b3I6IFwiLm1vZGFsX19mb3JtXCIsXG4gIGlucHV0U2VsZWN0b3I6IFwiLm1vZGFsX19mb3JtLWl0ZW1cIixcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLm1vZGFsX19zYXZlLWJ1dHRvblwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcIm1vZGFsX19zYXZlLWJ1dHRvbl9kaXNhYmxlZFwiLFxuICBpbnB1dEVycm9yQ2xhc3M6IFwibW9kYWxfX2Zvcm0taXRlbV90eXBlX2Vycm9yXCIsXG4gIGVycm9yQ2xhc3M6IFwibW9kYWxfX2Vycm9yX3Zpc2libGVcIixcbn07XG5cbmV4cG9ydCBjb25zdCBjYXJkQ29uc3RhbnRzID0ge1xuICBjYXJkU2VsZWN0b3I6IFwiI2NhcmQtdGVtcGxhdGVcIixcbiAgcGxhY2VTZWxlY3RvcjogXCJlbGVtZW50c1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IHByZXZpZXdDb25zdGFudHMgPSB7XG4gIHByZXZpZXdNb2RhbFNlbGVjdG9yOiBcIm1vZGFsX3R5cGVfcHJldmlld1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IGVkaXRDb25zdGFudHMgPSB7XG4gIGVkaXRQcm9maWxlRWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1fdHlwZV9lZGl0XCIpLFxuICBwcm9maWxlRWRpdEJ1dHRvbkVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpLFxuICBwcm9maWxlTmFtZUVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX25hbWVcIiksXG4gIHByb2ZpbGVBYm91dEVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2Fib3V0XCIpLFxuICBwcm9maWxlQXZhdGFyRWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYXZhdGFyXCIpLFxuICBwcm9maWxlQXZhdGFyRm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybV90eXBlX2F2YXRhclwiKSxcbiAgcHJvZmlsZUF2YXRhckJ1dHRvbkVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2F2YXRhci1idXR0b25cIiksXG4gIGVkaXRQcm9maWxlTmFtZUlucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtLWl0ZW1fdHlwZV9uYW1lXCIpLFxuICBlZGl0UHJvZmlsZUFib3V0SW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm0taXRlbV90eXBlX2Fib3V0XCIpLFxuICBlZGl0TW9kYWxTZWxlY3RvcjogXCJtb2RhbF90eXBlX2VkaXRcIixcbiAgYXZhdGFyTW9kYWxTZWxlY3RvcjogXCJtb2RhbF90eXBlX2F2YXRhclwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGFkZENvbnN0YW50cyA9IHtcbiAgYWRkQ2FyZHNFbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybV90eXBlX2FkZFwiKSxcbiAgYWRkQ2FyZEJ1dHRvbkVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2FkZC1idXR0b25cIiksXG4gIGFkZE1vZGFsU2VsZWN0b3I6IFwibW9kYWxfdHlwZV9hZGRcIixcbiAgZGVsZXRlQ2FyZHNFbDogXCJtb2RhbF90eXBlX2RlbGV0ZVwiLFxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXG5pbXBvcnQgaW5pdGlhbENhcmRzIGZyb20gXCIuLi91dGlscy9Jbml0aWFsQ2FyZHMuanNcIjtcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEZvcm1zIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm1zLmpzXCI7XG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcbmltcG9ydCBBcGkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBpLmpzXCI7XG5pbXBvcnQgUG9wdXBEZWxldGVDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwRGVsZXRlQ2FyZFwiO1xuXG5pbXBvcnQge1xuICB2YWxpZGF0aW9uU2V0dGluZ3MsXG4gIGNhcmRDb25zdGFudHMsXG4gIHByZXZpZXdDb25zdGFudHMsXG4gIGVkaXRDb25zdGFudHMsXG4gIGFkZENvbnN0YW50cyxcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50cy5qc1wiO1xuXG5jb25zdCBhcGkgPSBuZXcgQXBpKHtcbiAgYmFzZVVybDogXCJodHRwczovL2Fyb3VuZC5ub21vcmVwYXJ0aWVzLmNvL3YxL2dyb3VwLTEzXCIsXG4gIGhlYWRlcnM6IHtcbiAgICBhdXRob3JpemF0aW9uOiBcIjBmOTgwNzdmLTFiMDgtNDgyOS1hZTU3LTZmODFhYjQ3MzgwY1wiLFxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICB9LFxufSk7XG5cbmNvbnN0IGRlbGV0ZUNhcmQgPSBuZXcgUG9wdXBEZWxldGVDYXJkKHtcbiAgbW9kYWxTZWxlY3RvcjogYWRkQ29uc3RhbnRzLmRlbGV0ZUNhcmRzRWwsXG4gIGhhbmRsZUZvcm1TdWJtaXQ6IChjYXJkRWxlbWVudCwgY2FyZElkKSA9PiB7XG4gICAgYXBpLmRlbGV0ZUNhcmQoY2FyZElkKS50aGVuKCgpID0+IHtcbiAgICAgIGNhcmRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgZGVsZXRlQ2FyZC5jbG9zZSgpO1xuICAgIH0pO1xuICB9LFxufSk7XG5cbmRlbGV0ZUNhcmQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuYXBpLmdldEluaXRpYWxQcm9maWxlKCkudGhlbigocmVzKSA9PiB7XG4gIHVzZXJJbmZvLnNldFVzZXJJbmZvKHJlcyk7XG59KTtcblxuYXBpLmdldEluaXRpYWxDYXJkcygpLnRoZW4oKHJlcykgPT4ge1xuICBjYXJkTGlzdC5yZW5kZXJJdGVtcyhyZXMucmV2ZXJzZSgpKTtcbn0pO1xuXG5jb25zdCBjcmVhdGVDYXJkID0gKGNhcmQpID0+IHtcbiAgY29uc3QgY2FyZEluc3RhbmNlID0gbmV3IENhcmQoXG4gICAge1xuICAgICAgY2FyZCxcbiAgICAgIGhhbmRsZVByZXZpZXdJbWc6ICgpID0+IHtcbiAgICAgICAgaW1hZ2VNb2RhbC5vcGVuKGNhcmQpO1xuICAgICAgfSxcbiAgICAgIGhhbmRsZURlbGV0ZUljb246IChldnQpID0+IHtcbiAgICAgICAgZGVsZXRlQ2FyZC5vcGVuKGV2dCwgY2FyZC5faWQpO1xuICAgICAgfSxcbiAgICAgIGhhbmRsZUxpa2VCdXR0b246IChidXR0b25MaWtlZCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhidXR0b25MaWtlZCk7XG4gICAgICAgIC8vIGlmIChidXR0b25MaWtlZCkge1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4gICAgICAgIC8vICAgLy8gYXBpLmxpa2VDYXJkKGNhcmQuX2lkKTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAvLyBhcGkucmVtb3ZlTGlrZShjYXJkLl9pZCk7XG4gICAgICAgIC8vIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgICBjYXJkQ29uc3RhbnRzLmNhcmRTZWxlY3RvclxuICApO1xuXG4gIHJldHVybiBjYXJkSW5zdGFuY2U7XG59O1xuXG5jb25zdCBjYXJkTGlzdCA9IG5ldyBTZWN0aW9uKFxuICB7XG4gICAgcmVuZGVyZXI6IChjYXJkKSA9PiB7XG4gICAgICBjb25zdCBuZXdDYXJkID0gY3JlYXRlQ2FyZChjYXJkKTtcbiAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gbmV3Q2FyZC5nZXRWaWV3KCk7XG4gICAgICBjYXJkTGlzdC5hZGRJdGVtKGNhcmRFbGVtZW50KTtcbiAgICB9LFxuICB9LFxuICBjYXJkQ29uc3RhbnRzLnBsYWNlU2VsZWN0b3Jcbik7XG5cbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHtcbiAgdXNlck5hbWVTZWxlY3RvcjogZWRpdENvbnN0YW50cy5wcm9maWxlTmFtZUVsLFxuICB1c2VyQWJvdXRTZWxlY3RvcjogZWRpdENvbnN0YW50cy5wcm9maWxlQWJvdXRFbCxcbiAgdXNlckF2YXRhclNlbGVjdG9yOiBlZGl0Q29uc3RhbnRzLnByb2ZpbGVBdmF0YXJFbCxcbn0pO1xuXG5jb25zdCBhZGRJbWFnZVBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm1zKHtcbiAgbW9kYWxTZWxlY3RvcjogYWRkQ29uc3RhbnRzLmFkZE1vZGFsU2VsZWN0b3IsXG4gIGhhbmRsZUZvcm1TdWJtaXQ6IChjYXJkKSA9PiB7XG4gICAgYXBpLmZldGNoQ2FyZChjYXJkKS50aGVuKChjYXJkRGF0YSkgPT4ge1xuICAgICAgY29uc3QgbmV3Q2FyZCA9IGNyZWF0ZUNhcmQoY2FyZERhdGEpO1xuICAgICAgY2FyZExpc3QuYWRkSXRlbShuZXdDYXJkLmdldFZpZXcoKSk7XG4gICAgfSk7XG4gIH0sXG59KTtcblxuY29uc3QgY2hhbmdlUHJvZmlsZUF2YXRhclBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm1zKHtcbiAgbW9kYWxTZWxlY3RvcjogZWRpdENvbnN0YW50cy5hdmF0YXJNb2RhbFNlbGVjdG9yLFxuICBoYW5kbGVGb3JtU3VibWl0OiAoYXZhdGFyKSA9PiB7XG4gICAgYXBpLmNoYW5nZVByb2ZpbGVBdmF0YXIoYXZhdGFyKS50aGVuKChhdmF0YXJEYXRhKSA9PiB7XG4gICAgICB1c2VySW5mby5zZXRBdmF0YXJJbWcoYXZhdGFyRGF0YSk7XG4gICAgICAvLyB1c2VySW5mby5zZXJVc2VySW5mbyhhdmF0YXJEYXRhKTtcbiAgICB9KTtcbiAgfSxcbn0pO1xuXG5jaGFuZ2VQcm9maWxlQXZhdGFyUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuY29uc3QgdXNlckluZm9Qb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3Jtcyh7XG4gIG1vZGFsU2VsZWN0b3I6IGVkaXRDb25zdGFudHMuZWRpdE1vZGFsU2VsZWN0b3IsXG4gIGhhbmRsZUZvcm1TdWJtaXQ6IChwcm9maWxlKSA9PiB7XG4gICAgYXBpLmZldGNoUHJvZmlsZUluZm8ocHJvZmlsZSkudGhlbigocHJvZmlsZURhdGEpID0+IHtcbiAgICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKHByb2ZpbGVEYXRhKTtcbiAgICB9KTtcbiAgfSxcbn0pO1xuXG5jb25zdCBpbWFnZU1vZGFsID0gbmV3IFBvcHVwV2l0aEltYWdlKHByZXZpZXdDb25zdGFudHMucHJldmlld01vZGFsU2VsZWN0b3IpO1xuXG5jb25zdCBlZGl0Rm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKFxuICB2YWxpZGF0aW9uU2V0dGluZ3MsXG4gIGVkaXRDb25zdGFudHMuZWRpdFByb2ZpbGVFbFxuKTtcbmNvbnN0IGFkZEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihcbiAgdmFsaWRhdGlvblNldHRpbmdzLFxuICBhZGRDb25zdGFudHMuYWRkQ2FyZHNFbFxuKTtcblxuY29uc3QgYXZhdGFyRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKFxuICB2YWxpZGF0aW9uU2V0dGluZ3MsXG4gIGVkaXRDb25zdGFudHMucHJvZmlsZUF2YXRhckZvcm1cbik7XG5cbmVkaXRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcbmFkZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuYXZhdGFyRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5cbmFkZEltYWdlUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbmltYWdlTW9kYWwuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbnVzZXJJbmZvUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuLy8vLy9QT1BVUCBCVVRUT05TLy8vLy9cblxuYWRkQ29uc3RhbnRzLmFkZENhcmRCdXR0b25FbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBhZGRGb3JtVmFsaWRhdG9yLnJlc2V0VmFsaWRhdGlvbigpO1xuICBhZGRJbWFnZVBvcHVwLm9wZW4oKTtcbn0pO1xuXG5lZGl0Q29uc3RhbnRzLnByb2ZpbGVBdmF0YXJCdXR0b25FbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBhdmF0YXJGb3JtVmFsaWRhdG9yLnJlc2V0VmFsaWRhdGlvbigpO1xuICBjaGFuZ2VQcm9maWxlQXZhdGFyUG9wdXAub3BlbigpO1xufSk7XG5cbmVkaXRDb25zdGFudHMucHJvZmlsZUVkaXRCdXR0b25FbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBwcm9maWxlRGF0YSA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCk7XG4gIGVkaXRDb25zdGFudHMuZWRpdFByb2ZpbGVOYW1lSW5wdXQudmFsdWUgPSBwcm9maWxlRGF0YS5uYW1lO1xuICBlZGl0Q29uc3RhbnRzLmVkaXRQcm9maWxlQWJvdXRJbnB1dC52YWx1ZSA9IHByb2ZpbGVEYXRhLmFib3V0O1xuXG4gIGVkaXRGb3JtVmFsaWRhdG9yLnJlc2V0VmFsaWRhdGlvbigpO1xuICB1c2VySW5mb1BvcHVwLm9wZW4oKTtcbn0pO1xuIl0sIm5hbWVzIjpbIkFwaSIsIm9wdGlvbnMiLCJiYXNlVXJsIiwiaGVhZGVycyIsImZldGNoIiwidGhlbiIsInJlcyIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJuYW1lIiwibGluayIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYWJvdXQiLCJhdmF0YXIiLCJjYXJkSWQiLCJDYXJkIiwiY2FyZFNlbGVjdG9yIiwiY2FyZCIsImhhbmRsZVByZXZpZXdJbWciLCJoYW5kbGVEZWxldGVJY29uIiwiaGFuZGxlTGlrZUJ1dHRvbiIsIl9uYW1lIiwiX2xpbmsiLCJfbGlrZWRDYXJkIiwibGlrZXMiLCJfbnVtYmVyTGlrZXMiLCJsZW5ndGgiLCJfaGFuZGxlUHJldmlld0ltZyIsIl9oYW5kbGVEZWxldGVJY29uIiwiX2hhbmRsZUxpa2VCdXR0b24iLCJfb3duZXJJZCIsIm93bmVyIiwiX2lkIiwiX2NhcmRJZCIsIl9jYXJkVGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfZWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwiaXRlbSIsIl9saWtlQnV0dG9uIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9kZWxldGVCdXR0b24iLCJldnQiLCJfbGlrZWQiLCJ0ZXh0Q29udGVudCIsIl9nZXRUZW1wbGF0ZSIsIl9zZXRFdmVudExpc3RlbmVycyIsImNhcmRJbWciLCJzcmMiLCJhbHQiLCJfZ2V0SW5pdGFsTGlrZXMiLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZ3MiLCJmb3JtRWxlbWVudCIsImZvcm1FbCIsImlucHV0IiwiZXJyb3JTcGFuIiwiaWQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9lcnJvckNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsInZhbGlkaXR5IiwidmFsaWQiLCJfaGlkZUlucHV0RXJyb3IiLCJfc2hvd0lucHV0RXJyb3IiLCJpbnB1dHMiLCJldmVyeSIsImJ1dHRvbkVsIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2lzVmFsaWQiLCJkaXNhYmxlZCIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtRWwiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiX3RvZ2dsZUJ1dHRvbiIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiUG9wdXAiLCJtb2RhbFNlbGVjdG9yIiwiX21vZGFsRWxlbWVudCIsIl9oYW5kbGVFc2NDbG9zZSIsImJpbmQiLCJlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJjbG9zZSIsImtleSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJQb3B1cERlbGV0ZUNhcmQiLCJoYW5kbGVGb3JtU3VibWl0IiwiX21vZGFsRm9ybSIsIl9oYW5kbGVGb3JtU3VibWl0IiwiX2NhcmQiLCJwYXJlbnRFbGVtZW50IiwiUG9wdXBXaXRoRm9ybXMiLCJfaW5wdXRzIiwiX2Zvcm1WYWx1ZXMiLCJ2YWx1ZSIsIl9nZXRJbnB1dFZhbHVlcyIsInJlc2V0IiwiUG9wdXBXaXRoSW1hZ2UiLCJpbWFnZSIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsInJlbmRlcmVyIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsImVsZW1lbnQiLCJwcmVwZW5kIiwiaXRlbXMiLCJVc2VySW5mbyIsInVzZXJOYW1lU2VsZWN0b3IiLCJ1c2VyQWJvdXRTZWxlY3RvciIsInVzZXJBdmF0YXJTZWxlY3RvciIsIl9hYm91dCIsIl9hdmF0YXIiLCJfdXNlck5hbWVTZWxlY3RvciIsIl91c2VyQWJvdXRTZWxlY3RvciIsIl91c2VyQXZhdGFyU2VsZWN0b3IiLCJ1c2VyRGF0YSIsImRhdGEiLCJ5b3NlbWl0ZUltZyIsImxha2VJbWciLCJtb3VudGFpbnNJbWciLCJsYXRlbWFySW1nIiwidmFub2lzZUltZyIsImxhZ29JbWciLCJpbml0aWFsQ2FyZHMiLCJ2YWxpZGF0aW9uU2V0dGluZ3MiLCJmb3JtU2VsZWN0b3IiLCJjYXJkQ29uc3RhbnRzIiwicGxhY2VTZWxlY3RvciIsInByZXZpZXdDb25zdGFudHMiLCJwcmV2aWV3TW9kYWxTZWxlY3RvciIsImVkaXRDb25zdGFudHMiLCJlZGl0UHJvZmlsZUVsIiwicHJvZmlsZUVkaXRCdXR0b25FbCIsInByb2ZpbGVOYW1lRWwiLCJwcm9maWxlQWJvdXRFbCIsInByb2ZpbGVBdmF0YXJFbCIsInByb2ZpbGVBdmF0YXJGb3JtIiwicHJvZmlsZUF2YXRhckJ1dHRvbkVsIiwiZWRpdFByb2ZpbGVOYW1lSW5wdXQiLCJlZGl0UHJvZmlsZUFib3V0SW5wdXQiLCJlZGl0TW9kYWxTZWxlY3RvciIsImF2YXRhck1vZGFsU2VsZWN0b3IiLCJhZGRDb25zdGFudHMiLCJhZGRDYXJkc0VsIiwiYWRkQ2FyZEJ1dHRvbkVsIiwiYWRkTW9kYWxTZWxlY3RvciIsImRlbGV0ZUNhcmRzRWwiLCJhcGkiLCJhdXRob3JpemF0aW9uIiwiZGVsZXRlQ2FyZCIsImNhcmRFbGVtZW50Iiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJnZXRJbml0aWFsUHJvZmlsZSIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJnZXRJbml0aWFsQ2FyZHMiLCJjYXJkTGlzdCIsInJlbmRlckl0ZW1zIiwicmV2ZXJzZSIsImNyZWF0ZUNhcmQiLCJjYXJkSW5zdGFuY2UiLCJpbWFnZU1vZGFsIiwib3BlbiIsImJ1dHRvbkxpa2VkIiwibmV3Q2FyZCIsImdldFZpZXciLCJhZGRJdGVtIiwiYWRkSW1hZ2VQb3B1cCIsImZldGNoQ2FyZCIsImNhcmREYXRhIiwiY2hhbmdlUHJvZmlsZUF2YXRhclBvcHVwIiwiY2hhbmdlUHJvZmlsZUF2YXRhciIsImF2YXRhckRhdGEiLCJzZXRBdmF0YXJJbWciLCJ1c2VySW5mb1BvcHVwIiwicHJvZmlsZSIsImZldGNoUHJvZmlsZUluZm8iLCJwcm9maWxlRGF0YSIsImVkaXRGb3JtVmFsaWRhdG9yIiwiYWRkRm9ybVZhbGlkYXRvciIsImF2YXRhckZvcm1WYWxpZGF0b3IiLCJlbmFibGVWYWxpZGF0aW9uIiwicmVzZXRWYWxpZGF0aW9uIiwiZ2V0VXNlckluZm8iXSwic291cmNlUm9vdCI6IiJ9