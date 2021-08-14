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
    }
  }, {
    key: "_liked",
    value: function _liked() {
      // const liked = (item) => {
      //   item._id === "3aaa3ba0eaedbec067155932";
      // };
      return this._likedCard.forEach(function (item) {
        return item._id;
      }); // return this._likedCard.some(liked());
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
        return _this._liked();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0QsQ0FIRDtBQUtBaEMsb0dBQUEsQ0FBbUQsT0FBbkQsRUFBNEQsWUFBTTtBQUNoRSxNQUFNaUQsV0FBVyxHQUFHMUIsUUFBUSxDQUFDZ0MsV0FBVCxFQUFwQjtBQUNBdkQsRUFBQUEsMEZBQUEsR0FBMkNpRCxXQUFXLENBQUNqTSxJQUF2RDtBQUNBZ0osRUFBQUEsMkZBQUEsR0FBNENpRCxXQUFXLENBQUMzTCxLQUF4RDtBQUVBNEwsRUFBQUEsaUJBQWlCLENBQUNJLGVBQWxCO0FBQ0FSLEVBQUFBLGFBQWEsQ0FBQ2QsSUFBZDtBQUNELENBUEQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBEZWxldGVDYXJkLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm1zLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL3V0aWxzL0luaXRpYWxDYXJkcy5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ByYWN0aWN1bS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gb3B0aW9ucy5iYXNlVXJsO1xuICAgIHRoaXMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycztcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9maWxlKCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VVcmx9L3VzZXJzL21lYCwge1xuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIkVycm9yXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0SW5pdGlhbENhcmRzKCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VVcmx9L2NhcmRzYCwge1xuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIkVycm9yXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgZmV0Y2hDYXJkKHsgbmFtZSwgbGluayB9KSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuYmFzZVVybH0vY2FyZHNgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lLCBsaW5rIH0pLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIkVycm9yXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgZmV0Y2hQcm9maWxlSW5mbyh7IG5hbWUsIGFib3V0IH0pIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS91c2Vycy9tZWAsIHtcbiAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lOiBuYW1lLCBhYm91dDogYWJvdXQgfSksXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiRXJyb3JcIik7XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2VQcm9maWxlQXZhdGFyKHsgYXZhdGFyIH0pIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS91c2Vycy9tZS9hdmF0YXJgLCB7XG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYXZhdGFyOiBhdmF0YXIgfSksXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiRXJyb3JcIik7XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGVDYXJkKGNhcmRJZCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VVcmx9L2NhcmRzLyR7Y2FyZElkfWAsIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJFcnJvclwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxpa2VDYXJkKGNhcmRJZCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VVcmx9L2NhcmRzL2xpa2VzLyR7Y2FyZElkfWAsIHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJFcnJvclwiKTtcbiAgICB9KTtcbiAgfVxuICByZW1vdmVMaWtlKGNhcmRJZCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VVcmx9L2NhcmRzL2xpa2VzLyR7Y2FyZElkfWAsIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJFcnJvclwiKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiY2xhc3MgQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHsgY2FyZCwgaGFuZGxlUHJldmlld0ltZywgaGFuZGxlRGVsZXRlSWNvbiwgaGFuZGxlTGlrZUJ1dHRvbiB9LFxuICAgIGNhcmRTZWxlY3RvclxuICApIHtcbiAgICB0aGlzLl9uYW1lID0gY2FyZC5uYW1lO1xuICAgIHRoaXMuX2xpbmsgPSBjYXJkLmxpbms7XG4gICAgdGhpcy5fbGlrZWRDYXJkID0gY2FyZC5saWtlcztcbiAgICB0aGlzLl9udW1iZXJMaWtlcyA9IGNhcmQubGlrZXMubGVuZ3RoO1xuICAgIHRoaXMuX2hhbmRsZVByZXZpZXdJbWcgPSBoYW5kbGVQcmV2aWV3SW1nO1xuICAgIHRoaXMuX2hhbmRsZURlbGV0ZUljb24gPSBoYW5kbGVEZWxldGVJY29uO1xuICAgIHRoaXMuX2hhbmRsZUxpa2VCdXR0b24gPSBoYW5kbGVMaWtlQnV0dG9uO1xuICAgIHRoaXMuX293bmVySWQgPSBjYXJkLm93bmVyLl9pZDtcbiAgICB0aGlzLl9jYXJkSWQgPSBjYXJkLl9pZDtcblxuICAgIHRoaXMuX2NhcmRUZW1wbGF0ZSA9IGNhcmRTZWxlY3RvcjtcbiAgfVxuXG4gIF9nZXRUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9jYXJkVGVtcGxhdGUpXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIilcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICB0aGlzLl9lbGVtZW50ID0gdGVtcGxhdGU7XG4gIH1cblxuICBfbGlrZWQoKSB7XG4gICAgLy8gY29uc3QgbGlrZWQgPSAoaXRlbSkgPT4ge1xuICAgIC8vICAgaXRlbS5faWQgPT09IFwiM2FhYTNiYTBlYWVkYmVjMDY3MTU1OTMyXCI7XG4gICAgLy8gfTtcbiAgICByZXR1cm4gdGhpcy5fbGlrZWRDYXJkLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiBpdGVtLl9pZDtcbiAgICB9KTtcbiAgICAvLyByZXR1cm4gdGhpcy5fbGlrZWRDYXJkLnNvbWUobGlrZWQoKSk7XG4gIH1cblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fZWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1nXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuX2hhbmRsZVByZXZpZXdJbWcoKSk7XG5cbiAgICB0aGlzLl9kZWxldGVCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fZGVsZXRlLWJ1dHRvblwiKTtcbiAgICBpZiAodGhpcy5fb3duZXJJZCA9PT0gXCIzYWFhM2JhMGVhZWRiZWMwNjcxNTU5MzJcIikge1xuICAgICAgdGhpcy5fZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PlxuICAgICAgICB0aGlzLl9oYW5kbGVEZWxldGVJY29uKGV2dClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbi5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9saWtlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2xpa2UtYnV0dG9uXCIpO1xuICAgIHRoaXMuX2xpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgICgpID0+IHRoaXMuX2xpa2VkKClcbiAgICAgIC8vIHRoaXMuX2hhbmRsZUxpa2VCdXR0b24odGhpcy5fbGlrZUJ1dHRvbigpKVxuICAgICk7XG4gIH1cblxuICAvLyBfaGFuZGxlTGlrZUljb24oKSB7XG4gIC8vICAgdGhpcy5fbGlrZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiY2FyZF9fbGlrZS1idXR0b25fYWN0aXZlXCIpO1xuICAvLyB9XG5cbiAgLy8gX2hhbmRsZURlbGV0ZUljb24oKSB7XG4gIC8vICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcbiAgLy8gICB0aGlzLl9jYXJkID0gbnVsbDtcbiAgLy8gfVxuXG4gIF9nZXRJbml0YWxMaWtlcygpIHtcbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fdGV4dF9saWtlcy1udW1iZXJcIikudGV4dENvbnRlbnQgPVxuICAgICAgdGhpcy5fbnVtYmVyTGlrZXM7XG4gIH1cblxuICBnZXRWaWV3KCkge1xuICAgIHRoaXMuX2dldFRlbXBsYXRlKCk7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIGNvbnN0IGNhcmRJbWcgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1nXCIpO1xuXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RleHRcIikudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xuICAgIGNhcmRJbWcuc3JjID0gdGhpcy5fbGluaztcbiAgICBjYXJkSW1nLmFsdCA9IHRoaXMuX25hbWU7XG4gICAgdGhpcy5fZ2V0SW5pdGFsTGlrZXMoY2FyZEltZyk7XG5cbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtRWxlbWVudCkge1xuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBzZXR0aW5ncy5pbnB1dFNlbGVjdG9yO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gc2V0dGluZ3Muc3VibWl0QnV0dG9uU2VsZWN0b3I7XG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IHNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3M7XG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzO1xuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBzZXR0aW5ncy5lcnJvckNsYXNzO1xuXG4gICAgdGhpcy5fZm9ybUVsID0gZm9ybUVsZW1lbnQ7XG4gIH1cblxuICBfc2hvd0lucHV0RXJyb3IgPSAoZm9ybUVsLCBpbnB1dCkgPT4ge1xuICAgIGNvbnN0IGVycm9yU3BhbiA9IGZvcm1FbC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dC5pZH0tZXJyb3JgKTtcbiAgICAvLyBhZGQgZXJyb3IgbWVzc2FnZS9jbGFzc1xuICAgIGVycm9yU3Bhbi50ZXh0Q29udGVudCA9IGlucHV0LnZhbGlkYXRpb25NZXNzYWdlO1xuICAgIGVycm9yU3Bhbi5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgfTtcblxuICBfaGlkZUlucHV0RXJyb3IgPSAoZm9ybUVsLCBpbnB1dCkgPT4ge1xuICAgIGNvbnN0IGVycm9yU3BhbiA9IGZvcm1FbC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dC5pZH0tZXJyb3JgKTtcbiAgICAvLyBhZGQgZXJyb3IgbWVzc2FnZS9jbGFzc1xuICAgIGVycm9yU3Bhbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZXJyb3JTcGFuLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICB9O1xuXG4gIF9jaGVja0lucHV0VmFsaWRpdHkgPSAoZm9ybUVsLCBpbnB1dCkgPT4ge1xuICAgIGlmIChpbnB1dC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoZm9ybUVsLCBpbnB1dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGZvcm1FbCwgaW5wdXQpO1xuICAgIH1cbiAgfTtcblxuICBfaXNWYWxpZCA9IChpbnB1dHMpID0+IHtcbiAgICByZXR1cm4gaW5wdXRzLmV2ZXJ5KChpbnB1dCkgPT4gaW5wdXQudmFsaWRpdHkudmFsaWQpO1xuICB9O1xuXG4gIF90b2dnbGVCdXR0b24gPSAoZm9ybUVsLCBpbnB1dHMpID0+IHtcbiAgICBjb25zdCBidXR0b25FbCA9IGZvcm1FbC5xdWVyeVNlbGVjdG9yKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcbiAgICBpZiAodGhpcy5faXNWYWxpZChpbnB1dHMpKSB7XG4gICAgICBidXR0b25FbC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgYnV0dG9uRWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uRWwuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgYnV0dG9uRWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICB9XG4gIH07XG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKGZvcm1FbCkge1xuICAgIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20oZm9ybUVsLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcikpO1xuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvbihmb3JtRWwsIGlucHV0cyk7XG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICAvLyBjaGVjayB2YWxpZGl0eVxuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoZm9ybUVsLCBpbnB1dCk7XG4gICAgICAgIC8vdG9nZ2xlIGJ1dHRvblxuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b24oZm9ybUVsLCBpbnB1dHMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNldFZhbGlkYXRpb24oKSB7XG4gICAgY29uc3QgaW5wdXRzID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXG4gICAgKTtcblxuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvbih0aGlzLl9mb3JtRWwsIGlucHV0cyk7XG5cbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKHRoaXMuX2Zvcm1FbCwgaW5wdXQpO1xuICAgIH0pO1xuICB9XG5cbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLl9mb3JtRWwuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKHRoaXMuX2Zvcm1FbCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybVZhbGlkYXRvcjtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IobW9kYWxTZWxlY3Rvcikge1xuICAgIHRoaXMuX21vZGFsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke21vZGFsU2VsZWN0b3J9YCk7XG4gICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fbW9kYWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbFwiKSB8fFxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbF9fY2xvc2UtYnV0dG9uXCIpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX2hhbmRsZUVzY0Nsb3NlKGUpIHtcbiAgICBpZiAoZS5rZXkgPT0gXCJFc2NhcGVcIikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5fbW9kYWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuXCIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuX21vZGFsRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfb3BlblwiKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cERlbGV0ZUNhcmQgZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHsgbW9kYWxTZWxlY3RvciwgaGFuZGxlRm9ybVN1Ym1pdCB9KSB7XG4gICAgc3VwZXIobW9kYWxTZWxlY3Rvcik7XG5cbiAgICB0aGlzLl9tb2RhbEZvcm0gPSB0aGlzLl9tb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybVwiKTtcbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDtcbiAgfVxuXG4gIG9wZW4oZXZ0LCBjYXJkSWQpIHtcbiAgICBzdXBlci5vcGVuKCk7XG4gICAgdGhpcy5fY2FyZElkID0gY2FyZElkO1xuICAgIHRoaXMuX2NhcmQgPSBldnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9tb2RhbEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCh0aGlzLl9jYXJkLCB0aGlzLl9jYXJkSWQpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm1zIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcih7IG1vZGFsU2VsZWN0b3IsIGhhbmRsZUZvcm1TdWJtaXQgfSkge1xuICAgIHN1cGVyKG1vZGFsU2VsZWN0b3IpO1xuXG4gICAgdGhpcy5fbW9kYWxGb3JtID0gdGhpcy5fbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XG4gICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XG4gIH1cblxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XG4gICAgdGhpcy5faW5wdXRzID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuX21vZGFsRm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsX19mb3JtLWl0ZW1cIilcbiAgICApO1xuXG4gICAgdGhpcy5fZm9ybVZhbHVlcyA9IHt9O1xuXG4gICAgdGhpcy5faW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICB0aGlzLl9mb3JtVmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5fZm9ybVZhbHVlcztcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX21vZGFsRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuX21vZGFsRm9ybS5yZXNldCgpO1xuXG4gICAgc3VwZXIuY2xvc2UoKTtcbiAgfVxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xuICBvcGVuKHsgbGluaywgbmFtZSB9KSB7XG4gICAgdGhpcy5fbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3ByZXZpZXctY2FwdGlvblwiKS50ZXh0Q29udGVudCA9XG4gICAgICBuYW1lO1xuICAgIGNvbnN0IGltYWdlID0gdGhpcy5fbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3ByZXZpZXctaW1hZ2VcIik7XG4gICAgaW1hZ2Uuc3JjID0gbGluaztcbiAgICBpbWFnZS5hbHQgPSBuYW1lO1xuICAgIHN1cGVyLm9wZW4oKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NvbnRhaW5lclNlbGVjdG9yfWApO1xuICB9XG5cbiAgYWRkSXRlbShlbGVtZW50KSB7XG4gICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoZWxlbWVudCk7XG4gIH1cblxuICByZW5kZXJJdGVtcyhpdGVtcykge1xuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyKGl0ZW0pO1xuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBuYW1lLFxuICAgIGFib3V0LFxuICAgIF9pZCxcbiAgICBhdmF0YXIsXG4gICAgdXNlck5hbWVTZWxlY3RvcixcbiAgICB1c2VyQWJvdXRTZWxlY3RvcixcbiAgICB1c2VyQXZhdGFyU2VsZWN0b3IsXG4gIH0pIHtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9hYm91dCA9IGFib3V0O1xuICAgIHRoaXMuX2lkID0gX2lkO1xuICAgIHRoaXMuX2F2YXRhciA9IGF2YXRhcjtcblxuICAgIHRoaXMuX3VzZXJOYW1lU2VsZWN0b3IgPSB1c2VyTmFtZVNlbGVjdG9yO1xuICAgIHRoaXMuX3VzZXJBYm91dFNlbGVjdG9yID0gdXNlckFib3V0U2VsZWN0b3I7XG4gICAgdGhpcy5fdXNlckF2YXRhclNlbGVjdG9yID0gdXNlckF2YXRhclNlbGVjdG9yO1xuICB9XG5cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgdGhpcy51c2VyRGF0YSA9IHtcbiAgICAgIG5hbWU6IHRoaXMuX3VzZXJOYW1lU2VsZWN0b3IudGV4dENvbnRlbnQsXG4gICAgICBhYm91dDogdGhpcy5fdXNlckFib3V0U2VsZWN0b3IudGV4dENvbnRlbnQsXG4gICAgICBhdmF0YXI6IHRoaXMuX3VzZXJBdmF0YXJTZWxlY3Rvci5zcmMsXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnVzZXJEYXRhO1xuICB9XG5cbiAgc2V0VXNlckluZm8oZGF0YSkge1xuICAgIHRoaXMuX3VzZXJOYW1lU2VsZWN0b3IudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XG4gICAgdGhpcy5fdXNlckFib3V0U2VsZWN0b3IudGV4dENvbnRlbnQgPSBkYXRhLmFib3V0O1xuICAgIHRoaXMuX3VzZXJBdmF0YXJTZWxlY3Rvci5zcmMgPSBkYXRhLmF2YXRhcjtcbiAgfVxuXG4gIHNldEF2YXRhckltZyhkYXRhKSB7XG4gICAgdGhpcy5fdXNlckF2YXRhclNlbGVjdG9yLnNyYyA9IGRhdGEuYXZhdGFyO1xuICB9XG59XG4iLCJpbXBvcnQgeW9zZW1pdGVJbWcgZnJvbSBcIi4uL2ltYWdlcy9Zb3NlbWl0ZS5qcGVnXCI7XG5pbXBvcnQgbGFrZUltZyBmcm9tIFwiLi4vaW1hZ2VzL0xha2VfTG91aXNlLmpwZWdcIjtcbmltcG9ydCBtb3VudGFpbnNJbWcgZnJvbSBcIi4uL2ltYWdlcy9CYWxkX01vdW50YWlucy5qcGVnXCI7XG5pbXBvcnQgbGF0ZW1hckltZyBmcm9tIFwiLi4vaW1hZ2VzL0xhdGVtYXIuanBlZ1wiO1xuaW1wb3J0IHZhbm9pc2VJbWcgZnJvbSBcIi4uL2ltYWdlcy9WYW5vaXNlX05hdGlvbmFsX1BhcmsuanBlZ1wiO1xuaW1wb3J0IGxhZ29JbWcgZnJvbSBcIi4uL2ltYWdlcy9MYWdvX2RpX0JyYWllcy5qcGVnXCI7XG5cbmNvbnN0IGluaXRpYWxDYXJkcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiWW9zZW1pdGUgVmFsbGV5XCIsXG4gICAgbGluazogeW9zZW1pdGVJbWcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxha2UgTG91aXNlXCIsXG4gICAgbGluazogbGFrZUltZyxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQmFsZCBNb3VudGFpbnNcIixcbiAgICBsaW5rOiBtb3VudGFpbnNJbWcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxhdGVtYXJcIixcbiAgICBsaW5rOiBsYXRlbWFySW1nLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJWYW5vaXNlIE5hdGlvbmFsIFBhcmtcIixcbiAgICBsaW5rOiB2YW5vaXNlSW1nLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYWdvIGRpIEJyYWllc1wiLFxuICAgIGxpbms6IGxhZ29JbWcsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsQ2FyZHM7XG4iLCIvL1ZBTElEQVRJT04gU0VUVElOR1NcbmV4cG9ydCBjb25zdCB2YWxpZGF0aW9uU2V0dGluZ3MgPSB7XG4gIGZvcm1TZWxlY3RvcjogXCIubW9kYWxfX2Zvcm1cIixcbiAgaW5wdXRTZWxlY3RvcjogXCIubW9kYWxfX2Zvcm0taXRlbVwiLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIubW9kYWxfX3NhdmUtYnV0dG9uXCIsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwibW9kYWxfX3NhdmUtYnV0dG9uX2Rpc2FibGVkXCIsXG4gIGlucHV0RXJyb3JDbGFzczogXCJtb2RhbF9fZm9ybS1pdGVtX3R5cGVfZXJyb3JcIixcbiAgZXJyb3JDbGFzczogXCJtb2RhbF9fZXJyb3JfdmlzaWJsZVwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGNhcmRDb25zdGFudHMgPSB7XG4gIGNhcmRTZWxlY3RvcjogXCIjY2FyZC10ZW1wbGF0ZVwiLFxuICBwbGFjZVNlbGVjdG9yOiBcImVsZW1lbnRzXCIsXG59O1xuXG5leHBvcnQgY29uc3QgcHJldmlld0NvbnN0YW50cyA9IHtcbiAgcHJldmlld01vZGFsU2VsZWN0b3I6IFwibW9kYWxfdHlwZV9wcmV2aWV3XCIsXG59O1xuXG5leHBvcnQgY29uc3QgZWRpdENvbnN0YW50cyA9IHtcbiAgZWRpdFByb2ZpbGVFbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybV90eXBlX2VkaXRcIiksXG4gIHByb2ZpbGVFZGl0QnV0dG9uRWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZWRpdC1idXR0b25cIiksXG4gIHByb2ZpbGVOYW1lRWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fbmFtZVwiKSxcbiAgcHJvZmlsZUFib3V0RWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWJvdXRcIiksXG4gIHByb2ZpbGVBdmF0YXJFbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hdmF0YXJcIiksXG4gIHByb2ZpbGVBdmF0YXJGb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtX3R5cGVfYXZhdGFyXCIpLFxuICBwcm9maWxlQXZhdGFyQnV0dG9uRWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYXZhdGFyLWJ1dHRvblwiKSxcbiAgZWRpdFByb2ZpbGVOYW1lSW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm0taXRlbV90eXBlX25hbWVcIiksXG4gIGVkaXRQcm9maWxlQWJvdXRJbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybS1pdGVtX3R5cGVfYWJvdXRcIiksXG4gIGVkaXRNb2RhbFNlbGVjdG9yOiBcIm1vZGFsX3R5cGVfZWRpdFwiLFxuICBhdmF0YXJNb2RhbFNlbGVjdG9yOiBcIm1vZGFsX3R5cGVfYXZhdGFyXCIsXG59O1xuXG5leHBvcnQgY29uc3QgYWRkQ29uc3RhbnRzID0ge1xuICBhZGRDYXJkc0VsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtX3R5cGVfYWRkXCIpLFxuICBhZGRDYXJkQnV0dG9uRWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkLWJ1dHRvblwiKSxcbiAgYWRkTW9kYWxTZWxlY3RvcjogXCJtb2RhbF90eXBlX2FkZFwiLFxuICBkZWxldGVDYXJkc0VsOiBcIm1vZGFsX3R5cGVfZGVsZXRlXCIsXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cbmltcG9ydCBpbml0aWFsQ2FyZHMgZnJvbSBcIi4uL3V0aWxzL0luaXRpYWxDYXJkcy5qc1wiO1xuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoRm9ybXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybXMuanNcIjtcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xuaW1wb3J0IEFwaSBmcm9tIFwiLi4vY29tcG9uZW50cy9BcGkuanNcIjtcbmltcG9ydCBQb3B1cERlbGV0ZUNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBEZWxldGVDYXJkXCI7XG5cbmltcG9ydCB7XG4gIHZhbGlkYXRpb25TZXR0aW5ncyxcbiAgY2FyZENvbnN0YW50cyxcbiAgcHJldmlld0NvbnN0YW50cyxcbiAgZWRpdENvbnN0YW50cyxcbiAgYWRkQ29uc3RhbnRzLFxufSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzLmpzXCI7XG5cbmNvbnN0IGFwaSA9IG5ldyBBcGkoe1xuICBiYXNlVXJsOiBcImh0dHBzOi8vYXJvdW5kLm5vbW9yZXBhcnRpZXMuY28vdjEvZ3JvdXAtMTNcIixcbiAgaGVhZGVyczoge1xuICAgIGF1dGhvcml6YXRpb246IFwiMGY5ODA3N2YtMWIwOC00ODI5LWFlNTctNmY4MWFiNDczODBjXCIsXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gIH0sXG59KTtcblxuY29uc3QgZGVsZXRlQ2FyZCA9IG5ldyBQb3B1cERlbGV0ZUNhcmQoe1xuICBtb2RhbFNlbGVjdG9yOiBhZGRDb25zdGFudHMuZGVsZXRlQ2FyZHNFbCxcbiAgaGFuZGxlRm9ybVN1Ym1pdDogKGNhcmRFbGVtZW50LCBjYXJkSWQpID0+IHtcbiAgICBhcGkuZGVsZXRlQ2FyZChjYXJkSWQpLnRoZW4oKCkgPT4ge1xuICAgICAgY2FyZEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICBkZWxldGVDYXJkLmNsb3NlKCk7XG4gICAgfSk7XG4gIH0sXG59KTtcblxuZGVsZXRlQ2FyZC5zZXRFdmVudExpc3RlbmVycygpO1xuXG5hcGkuZ2V0SW5pdGlhbFByb2ZpbGUoKS50aGVuKChyZXMpID0+IHtcbiAgdXNlckluZm8uc2V0VXNlckluZm8ocmVzKTtcbn0pO1xuXG5hcGkuZ2V0SW5pdGlhbENhcmRzKCkudGhlbigocmVzKSA9PiB7XG4gIGNhcmRMaXN0LnJlbmRlckl0ZW1zKHJlcy5yZXZlcnNlKCkpO1xufSk7XG5cbmNvbnN0IGNyZWF0ZUNhcmQgPSAoY2FyZCkgPT4ge1xuICBjb25zdCBjYXJkSW5zdGFuY2UgPSBuZXcgQ2FyZChcbiAgICB7XG4gICAgICBjYXJkLFxuICAgICAgaGFuZGxlUHJldmlld0ltZzogKCkgPT4ge1xuICAgICAgICBpbWFnZU1vZGFsLm9wZW4oY2FyZCk7XG4gICAgICB9LFxuICAgICAgaGFuZGxlRGVsZXRlSWNvbjogKGV2dCkgPT4ge1xuICAgICAgICBkZWxldGVDYXJkLm9wZW4oZXZ0LCBjYXJkLl9pZCk7XG4gICAgICB9LFxuICAgICAgaGFuZGxlTGlrZUJ1dHRvbjogKGJ1dHRvbkxpa2VkKSA9PiB7XG4gICAgICAgIGlmIChidXR0b25MaWtlZCkge1xuICAgICAgICAgIGFwaS5saWtlQ2FyZChjYXJkLl9pZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXBpLnJlbW92ZUxpa2UoY2FyZC5faWQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gICAgY2FyZENvbnN0YW50cy5jYXJkU2VsZWN0b3JcbiAgKTtcblxuICByZXR1cm4gY2FyZEluc3RhbmNlO1xufTtcblxuY29uc3QgY2FyZExpc3QgPSBuZXcgU2VjdGlvbihcbiAge1xuICAgIHJlbmRlcmVyOiAoY2FyZCkgPT4ge1xuICAgICAgY29uc3QgbmV3Q2FyZCA9IGNyZWF0ZUNhcmQoY2FyZCk7XG4gICAgICBjb25zdCBjYXJkRWxlbWVudCA9IG5ld0NhcmQuZ2V0VmlldygpO1xuICAgICAgY2FyZExpc3QuYWRkSXRlbShjYXJkRWxlbWVudCk7XG4gICAgfSxcbiAgfSxcbiAgY2FyZENvbnN0YW50cy5wbGFjZVNlbGVjdG9yXG4pO1xuXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyh7XG4gIHVzZXJOYW1lU2VsZWN0b3I6IGVkaXRDb25zdGFudHMucHJvZmlsZU5hbWVFbCxcbiAgdXNlckFib3V0U2VsZWN0b3I6IGVkaXRDb25zdGFudHMucHJvZmlsZUFib3V0RWwsXG4gIHVzZXJBdmF0YXJTZWxlY3RvcjogZWRpdENvbnN0YW50cy5wcm9maWxlQXZhdGFyRWwsXG59KTtcblxuY29uc3QgYWRkSW1hZ2VQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3Jtcyh7XG4gIG1vZGFsU2VsZWN0b3I6IGFkZENvbnN0YW50cy5hZGRNb2RhbFNlbGVjdG9yLFxuICBoYW5kbGVGb3JtU3VibWl0OiAoY2FyZCkgPT4ge1xuICAgIGFwaS5mZXRjaENhcmQoY2FyZCkudGhlbigoY2FyZERhdGEpID0+IHtcbiAgICAgIGNvbnN0IG5ld0NhcmQgPSBjcmVhdGVDYXJkKGNhcmREYXRhKTtcbiAgICAgIGNhcmRMaXN0LmFkZEl0ZW0obmV3Q2FyZC5nZXRWaWV3KCkpO1xuICAgIH0pO1xuICB9LFxufSk7XG5cbmNvbnN0IGNoYW5nZVByb2ZpbGVBdmF0YXJQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3Jtcyh7XG4gIG1vZGFsU2VsZWN0b3I6IGVkaXRDb25zdGFudHMuYXZhdGFyTW9kYWxTZWxlY3RvcixcbiAgaGFuZGxlRm9ybVN1Ym1pdDogKGF2YXRhcikgPT4ge1xuICAgIGFwaS5jaGFuZ2VQcm9maWxlQXZhdGFyKGF2YXRhcikudGhlbigoYXZhdGFyRGF0YSkgPT4ge1xuICAgICAgdXNlckluZm8uc2V0QXZhdGFySW1nKGF2YXRhckRhdGEpO1xuICAgICAgLy8gdXNlckluZm8uc2VyVXNlckluZm8oYXZhdGFyRGF0YSk7XG4gICAgfSk7XG4gIH0sXG59KTtcblxuY2hhbmdlUHJvZmlsZUF2YXRhclBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbmNvbnN0IHVzZXJJbmZvUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybXMoe1xuICBtb2RhbFNlbGVjdG9yOiBlZGl0Q29uc3RhbnRzLmVkaXRNb2RhbFNlbGVjdG9yLFxuICBoYW5kbGVGb3JtU3VibWl0OiAocHJvZmlsZSkgPT4ge1xuICAgIGFwaS5mZXRjaFByb2ZpbGVJbmZvKHByb2ZpbGUpLnRoZW4oKHByb2ZpbGVEYXRhKSA9PiB7XG4gICAgICB1c2VySW5mby5zZXRVc2VySW5mbyhwcm9maWxlRGF0YSk7XG4gICAgfSk7XG4gIH0sXG59KTtcblxuY29uc3QgaW1hZ2VNb2RhbCA9IG5ldyBQb3B1cFdpdGhJbWFnZShwcmV2aWV3Q29uc3RhbnRzLnByZXZpZXdNb2RhbFNlbGVjdG9yKTtcblxuY29uc3QgZWRpdEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihcbiAgdmFsaWRhdGlvblNldHRpbmdzLFxuICBlZGl0Q29uc3RhbnRzLmVkaXRQcm9maWxlRWxcbik7XG5jb25zdCBhZGRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoXG4gIHZhbGlkYXRpb25TZXR0aW5ncyxcbiAgYWRkQ29uc3RhbnRzLmFkZENhcmRzRWxcbik7XG5cbmNvbnN0IGF2YXRhckZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihcbiAgdmFsaWRhdGlvblNldHRpbmdzLFxuICBlZGl0Q29uc3RhbnRzLnByb2ZpbGVBdmF0YXJGb3JtXG4pO1xuXG5lZGl0Rm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5hZGRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcbmF2YXRhckZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG5hZGRJbWFnZVBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5pbWFnZU1vZGFsLnNldEV2ZW50TGlzdGVuZXJzKCk7XG51c2VySW5mb1BvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbi8vLy8vUE9QVVAgQlVUVE9OUy8vLy8vXG5cbmFkZENvbnN0YW50cy5hZGRDYXJkQnV0dG9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYWRkRm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcbiAgYWRkSW1hZ2VQb3B1cC5vcGVuKCk7XG59KTtcblxuZWRpdENvbnN0YW50cy5wcm9maWxlQXZhdGFyQnV0dG9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYXZhdGFyRm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcbiAgY2hhbmdlUHJvZmlsZUF2YXRhclBvcHVwLm9wZW4oKTtcbn0pO1xuXG5lZGl0Q29uc3RhbnRzLnByb2ZpbGVFZGl0QnV0dG9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgcHJvZmlsZURhdGEgPSB1c2VySW5mby5nZXRVc2VySW5mbygpO1xuICBlZGl0Q29uc3RhbnRzLmVkaXRQcm9maWxlTmFtZUlucHV0LnZhbHVlID0gcHJvZmlsZURhdGEubmFtZTtcbiAgZWRpdENvbnN0YW50cy5lZGl0UHJvZmlsZUFib3V0SW5wdXQudmFsdWUgPSBwcm9maWxlRGF0YS5hYm91dDtcblxuICBlZGl0Rm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcbiAgdXNlckluZm9Qb3B1cC5vcGVuKCk7XG59KTtcbiJdLCJuYW1lcyI6WyJBcGkiLCJvcHRpb25zIiwiYmFzZVVybCIsImhlYWRlcnMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJvayIsImpzb24iLCJQcm9taXNlIiwicmVqZWN0IiwibmFtZSIsImxpbmsiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFib3V0IiwiYXZhdGFyIiwiY2FyZElkIiwiQ2FyZCIsImNhcmRTZWxlY3RvciIsImNhcmQiLCJoYW5kbGVQcmV2aWV3SW1nIiwiaGFuZGxlRGVsZXRlSWNvbiIsImhhbmRsZUxpa2VCdXR0b24iLCJfbmFtZSIsIl9saW5rIiwiX2xpa2VkQ2FyZCIsImxpa2VzIiwiX251bWJlckxpa2VzIiwibGVuZ3RoIiwiX2hhbmRsZVByZXZpZXdJbWciLCJfaGFuZGxlRGVsZXRlSWNvbiIsIl9oYW5kbGVMaWtlQnV0dG9uIiwiX293bmVySWQiLCJvd25lciIsIl9pZCIsIl9jYXJkSWQiLCJfY2FyZFRlbXBsYXRlIiwidGVtcGxhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiX2VsZW1lbnQiLCJmb3JFYWNoIiwiaXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfZGVsZXRlQnV0dG9uIiwiZXZ0IiwicmVtb3ZlIiwiX2xpa2VCdXR0b24iLCJfbGlrZWQiLCJ0ZXh0Q29udGVudCIsIl9nZXRUZW1wbGF0ZSIsIl9zZXRFdmVudExpc3RlbmVycyIsImNhcmRJbWciLCJzcmMiLCJhbHQiLCJfZ2V0SW5pdGFsTGlrZXMiLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZ3MiLCJmb3JtRWxlbWVudCIsImZvcm1FbCIsImlucHV0IiwiZXJyb3JTcGFuIiwiaWQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImNsYXNzTGlzdCIsImFkZCIsIl9lcnJvckNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsInZhbGlkaXR5IiwidmFsaWQiLCJfaGlkZUlucHV0RXJyb3IiLCJfc2hvd0lucHV0RXJyb3IiLCJpbnB1dHMiLCJldmVyeSIsImJ1dHRvbkVsIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2lzVmFsaWQiLCJkaXNhYmxlZCIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtRWwiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiX3RvZ2dsZUJ1dHRvbiIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiUG9wdXAiLCJtb2RhbFNlbGVjdG9yIiwiX21vZGFsRWxlbWVudCIsIl9oYW5kbGVFc2NDbG9zZSIsImJpbmQiLCJlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJjbG9zZSIsImtleSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJQb3B1cERlbGV0ZUNhcmQiLCJoYW5kbGVGb3JtU3VibWl0IiwiX21vZGFsRm9ybSIsIl9oYW5kbGVGb3JtU3VibWl0IiwiX2NhcmQiLCJwYXJlbnRFbGVtZW50IiwiUG9wdXBXaXRoRm9ybXMiLCJfaW5wdXRzIiwiX2Zvcm1WYWx1ZXMiLCJ2YWx1ZSIsIl9nZXRJbnB1dFZhbHVlcyIsInJlc2V0IiwiUG9wdXBXaXRoSW1hZ2UiLCJpbWFnZSIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsInJlbmRlcmVyIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsImVsZW1lbnQiLCJwcmVwZW5kIiwiaXRlbXMiLCJVc2VySW5mbyIsInVzZXJOYW1lU2VsZWN0b3IiLCJ1c2VyQWJvdXRTZWxlY3RvciIsInVzZXJBdmF0YXJTZWxlY3RvciIsIl9hYm91dCIsIl9hdmF0YXIiLCJfdXNlck5hbWVTZWxlY3RvciIsIl91c2VyQWJvdXRTZWxlY3RvciIsIl91c2VyQXZhdGFyU2VsZWN0b3IiLCJ1c2VyRGF0YSIsImRhdGEiLCJ5b3NlbWl0ZUltZyIsImxha2VJbWciLCJtb3VudGFpbnNJbWciLCJsYXRlbWFySW1nIiwidmFub2lzZUltZyIsImxhZ29JbWciLCJpbml0aWFsQ2FyZHMiLCJ2YWxpZGF0aW9uU2V0dGluZ3MiLCJmb3JtU2VsZWN0b3IiLCJjYXJkQ29uc3RhbnRzIiwicGxhY2VTZWxlY3RvciIsInByZXZpZXdDb25zdGFudHMiLCJwcmV2aWV3TW9kYWxTZWxlY3RvciIsImVkaXRDb25zdGFudHMiLCJlZGl0UHJvZmlsZUVsIiwicHJvZmlsZUVkaXRCdXR0b25FbCIsInByb2ZpbGVOYW1lRWwiLCJwcm9maWxlQWJvdXRFbCIsInByb2ZpbGVBdmF0YXJFbCIsInByb2ZpbGVBdmF0YXJGb3JtIiwicHJvZmlsZUF2YXRhckJ1dHRvbkVsIiwiZWRpdFByb2ZpbGVOYW1lSW5wdXQiLCJlZGl0UHJvZmlsZUFib3V0SW5wdXQiLCJlZGl0TW9kYWxTZWxlY3RvciIsImF2YXRhck1vZGFsU2VsZWN0b3IiLCJhZGRDb25zdGFudHMiLCJhZGRDYXJkc0VsIiwiYWRkQ2FyZEJ1dHRvbkVsIiwiYWRkTW9kYWxTZWxlY3RvciIsImRlbGV0ZUNhcmRzRWwiLCJhcGkiLCJhdXRob3JpemF0aW9uIiwiZGVsZXRlQ2FyZCIsImNhcmRFbGVtZW50Iiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJnZXRJbml0aWFsUHJvZmlsZSIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJnZXRJbml0aWFsQ2FyZHMiLCJjYXJkTGlzdCIsInJlbmRlckl0ZW1zIiwicmV2ZXJzZSIsImNyZWF0ZUNhcmQiLCJjYXJkSW5zdGFuY2UiLCJpbWFnZU1vZGFsIiwib3BlbiIsImJ1dHRvbkxpa2VkIiwibGlrZUNhcmQiLCJyZW1vdmVMaWtlIiwibmV3Q2FyZCIsImdldFZpZXciLCJhZGRJdGVtIiwiYWRkSW1hZ2VQb3B1cCIsImZldGNoQ2FyZCIsImNhcmREYXRhIiwiY2hhbmdlUHJvZmlsZUF2YXRhclBvcHVwIiwiY2hhbmdlUHJvZmlsZUF2YXRhciIsImF2YXRhckRhdGEiLCJzZXRBdmF0YXJJbWciLCJ1c2VySW5mb1BvcHVwIiwicHJvZmlsZSIsImZldGNoUHJvZmlsZUluZm8iLCJwcm9maWxlRGF0YSIsImVkaXRGb3JtVmFsaWRhdG9yIiwiYWRkRm9ybVZhbGlkYXRvciIsImF2YXRhckZvcm1WYWxpZGF0b3IiLCJlbmFibGVWYWxpZGF0aW9uIiwicmVzZXRWYWxpZGF0aW9uIiwiZ2V0VXNlckluZm8iXSwic291cmNlUm9vdCI6IiJ9