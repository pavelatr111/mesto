(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._selectorPopup=e,this._popup=document.querySelector(this._selectorPopup),this._popupClose=this._popup.querySelector(".popup__close"),this._escHandler=this._handleEscClose.bind(this)}var n,r;return n=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_visible"),document.addEventListener("keydown",this._escHandler)}},{key:"close",value:function(){this._popup.classList.remove("popup_visible"),document.removeEventListener("keydown",this._escHandler)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this._popup.classList.contains("popup_visible")&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupClose.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("click",(function(t){t.target===e._popup&&e.close()}))}}])&&e(n.prototype,r),t}(),n={inputSelector:".popup__form-input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:".popup__form-input_error",errorClass:".error"};function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(){return i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=u(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},i.apply(this,arguments)}function u(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function a(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}var s=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(p,e);var t,n,r,u,s=(r=p,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(r);if(u){var n=l(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return a(this,e)});function p(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(n=s.call(this,e))._handleSubmitForm=t,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__form-input"),n}return t=p,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){return e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;i(l(p.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm(e._getInputValues()),e.close()}))}},{key:"close",value:function(){i(l(p.prototype),"close",this).call(this),this._form.reset()}}])&&o(t.prototype,n),p}(t);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=h(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},_.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function v(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup-image__place"),t._popupText=t._popup.querySelector(".popup-image__title"),t}return t=u,(n=[{key:"open",value:function(e,t){_(d(u.prototype),"open",this).call(this),this._popupImage.src=t,this._popupImage.alt=e,this._popupText.textContent=e}}])&&f(t.prototype,n),u}(t);function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._form=n,this._inputs=Array.from(this._form.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._form.querySelector(this._config.submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._enableValidationInput()}},{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._config.inputErrorClass),n.textContent=t,n.classList.add(this._config.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._config.inputErrorClass),t.textContent="",t.classList.remove(this._config.errorClass)}},{key:"_hasInvalidInput",value:function(){return this._inputs.some((function(e){return!e.validity.valid}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputs.forEach((function(t){e._hideInputError(t)}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.removeAttribute("disabled",!0))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_enableValidationInput",value:function(){var e=this;this._toggleButtonState(),this._inputs.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}}])&&b(t.prototype,n),e}();function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._openPopupImage=r,this._selector=n,this._name=t.name,this._link=t.link}var t,n;return t=e,(n=[{key:"render",value:function(){var e=document.querySelector(this._selector).content.cloneNode(!0);return e.querySelector(".element__text").innerText=this._name,e.querySelector(".element__img").src=this._link,e.querySelector(".element__img").alt=this._name,this._setEventListeners(e),e}},{key:"_setEventListeners",value:function(e){var t=this;e.querySelector(".element__like").addEventListener("click",this._likeActive),e.querySelector(".element__trash").addEventListener("click",this._handleDeleteCard),e.querySelector(".element__img").addEventListener("click",(function(){t._openPopupImage(t._name,t._link)}))}},{key:"_handleDeleteCard",value:function(e){e.target.closest(".element").remove()}},{key:"_likeActive",value:function(e){e.target.classList.toggle("element__like_active")}}])&&k(t.prototype,n),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){var n=t.nameSelector,r=t.jobSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._job=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._job.textContent}}},{key:"setUserInfo",value:function(e,t){this._name.textContent=e,this._job.textContent=t}}])&&S(t.prototype,n),e}();function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e))}var L=new(function(){function e(t){var n=t.url,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(O)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(O)}}])&&j(t.prototype,n),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-30",headers:{authorization:"64eb4089-5e3d-41d0-acb9-e798b4c540eb"}});L.getCards().then((function(e){return e.forEach((function(e){T(x(e))}))})).catch((function(e){return console.log(e)})),L.getUserInfo().then((function(e){return N(e)})).catch((function(e){return console.log(e)}));var C=document.querySelector(".elements"),q=new s(".popup_place",(function(e){T(x({name:e.name,link:e.link}))}));q.setEventListeners();var I=new m(".popup-image");I.setEventListeners();var P=document.forms.place,R=new g(n,P);function x(e){return new E(e,"#template-place-card",B).render()}function T(e){C.prepend(e)}function B(e,t){I.open(e,t)}R.enableValidation();var V=document.querySelector(".profile__add-button"),D=P.querySelector(".popup__card-input_type_name"),A=P.querySelector(".popup__card-input_type_link");V.addEventListener("click",(function(){D.value="",A.value="",R.resetValidation(),q.open()})),document.forms.avatarEdit;var U=new t(".popup_avatar-edit");U.setEventListeners(),document.querySelector(".profile__edit-button").addEventListener("click",(function(){U.open()}));var H=new w({nameSelector:".profile__name",jobSelector:".profile__job"}),F=new s(".popup_profile",N);F.setEventListeners();var z=document.forms.profile,M=new g(n,z);function N(e){H.setUserInfo(e.name,e.about)}M.enableValidation();var G=document.querySelector(".profile__edit-button"),J=z.querySelector(".popup__form-input_type_name"),K=z.querySelector(".popup__form-input_type_job");G.addEventListener("click",(function(){var e=H.getUserInfo();J.value=e.name,K.value=e.job,M.resetValidation(),F.open()}))})();