(()=>{"use strict";var e={inputSelector:".popup__form-input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:".popup__form-input_error",errorClass:".error"};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selectorPopup=t,this._popup=document.querySelector(this._selectorPopup),this._popupClose=this._popup.querySelector(".popup__close"),this._escHandler=this._handleEscClose.bind(this)}var n,r;return n=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_visible"),document.addEventListener("keydown",this._escHandler)}},{key:"close",value:function(){this._popup.classList.remove("popup_visible"),document.removeEventListener("keydown",this._escHandler)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this._popup.classList.contains("popup_visible")&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupClose.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("click",(function(t){t.target===e._popup&&e.close()}))}}])&&t(n.prototype,r),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(){return i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=u(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},i.apply(this,arguments)}function u(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function a(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var l=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(f,e);var t,n,r,u,l=(r=f,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(r);if(u){var n=s(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return a(this,e)});function f(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(n=l.call(this,e))._handleSubmitForm=t,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__form-input"),n}return t=f,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){return e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;i(s(f.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault();var n=e._handleSubmitForm(e._getInputValues()),r=e._form.querySelector(".popup__button"),o=r.innerText;r.innerText="Сохранение...",n.then((function(){e.close()})).finally((function(){r.innerText=o}))}))}},{key:"close",value:function(){i(s(f.prototype),"close",this).call(this),this._form.reset()}}])&&o(t.prototype,n),f}(n);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=y(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function _(e,t){return _=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_(e,t)}function v(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup-image__place"),t._popupText=t._popup.querySelector(".popup-image__title"),t}return t=u,(n=[{key:"open",value:function(e,t){h(d(u.prototype),"open",this).call(this),this._popupImage.src=t,this._popupImage.alt=e,this._popupText.textContent=e}}])&&p(t.prototype,n),u}(n);function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._form=n,this._inputs=Array.from(this._form.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._form.querySelector(this._config.submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._enableValidationInput()}},{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._config.inputErrorClass),n.textContent=t,n.classList.add(this._config.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._config.inputErrorClass),t.textContent="",t.classList.remove(this._config.errorClass)}},{key:"_hasInvalidInput",value:function(){return this._inputs.some((function(e){return!e.validity.valid}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputs.forEach((function(t){e._hideInputError(t)}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.removeAttribute("disabled",!0))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_enableValidationInput",value:function(){var e=this;this._toggleButtonState(),this._inputs.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}}])&&b(t.prototype,n),e}();function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t,n,r,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),console.log(t),this._openPopupImage=r,this._likeActive=o,this._handleOpenPopupDel=i,this._selector=n,this._id=t._id,this._likes=t.likes,this._name=t.name,this._link=t.link,this._meId=t.currentUserId,this._ownerId=t.owner._id}var t,n;return t=e,(n=[{key:"render",value:function(){var e=document.querySelector(this._selector).content.cloneNode(!0);return e.querySelector(".element__text").innerText=this._name,e.querySelector(".element__img").src=this._link,e.querySelector(".element__img").alt=this._name,this._elementTrash=e.querySelector(".element__trash"),this._meId!==this._ownerId&&this._elementTrash.remove(),this._setEventListeners(e),this._htmlElement=e.firstElementChild,this.setLikes(this._likes),e}},{key:"_setEventListeners",value:function(e){var t=this;this._elementLikeButton=e.querySelector(".element__like"),this._elementLikeButton.addEventListener("click",(function(){t._likeActive(t)})),this._elementTrash.addEventListener("click",(function(){t._handleOpenPopupDel(t)})),e.querySelector(".element__img").addEventListener("click",(function(){t._openPopupImage(t._name,t._link)}))}},{key:"_updateLikes",value:function(){var e=this;this._likes.some((function(t){return t._id===e._meId}))?this._elementLikeButton.classList.add("element__like_active"):this._elementLikeButton.classList.remove("element__like_active")}},{key:"getId",value:function(){return this._id}},{key:"getLikes",value:function(){return this._likes}},{key:"setLikes",value:function(e){this._likes=e,this._htmlElement.querySelector(".element__like-number").innerText=this._likes.length,this._updateLikes()}},{key:"remove",value:function(){this._htmlElement.remove()}}])&&k(t.prototype,n),e}();function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){var n=t.nameSelector,r=t.jobSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._job=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{id:this._id,name:this._name.textContent,about:this._job.textContent}}},{key:"setUserInfo",value:function(e,t){this._name.textContent=e,this._job.textContent=t}},{key:"setAvatar",value:function(e){this._avatar.src=e}},{key:"setId",value:function(e){this._id=e}}])&&w(t.prototype,n),e}();function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e))}var C=function(){function e(t){var n=t.url,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(I)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(I)}},{key:"setUserInfo",value:function(e,t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:j(j({},this._headers),{},{"Content-Type":"application/json"}),body:JSON.stringify({name:e,about:t})}).then(I)}},{key:"avatarEdit",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:j(j({},this._headers),{},{"Content-Type":"application/json"}),body:JSON.stringify({avatar:e})}).then(I)}},{key:"renderNewCard",value:function(e,t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:j(j({},this._headers),{},{"Content-Type":"application/json"}),body:JSON.stringify({name:e,link:t})}).then(I)}},{key:"likeActive",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(I)}},{key:"likeDelete",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(I)}},{key:"cardDelete",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(I)}}])&&L(t.prototype,n),e}();function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=D(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function D(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}function B(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(o){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleConfirm=t,n._confirm=n._popup.querySelector(".popup__button"),n}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;R(A(u.prototype),"setEventListeners",this).call(this),this._confirm.addEventListener("click",(function(t){t.preventDefault(),e._handleConfirm(e._card),e.close()}))}},{key:"close",value:function(){R(A(u.prototype),"close",this).call(this)}},{key:"open",value:function(e){R(A(u.prototype),"open",this).call(this),this._card=e}}])&&q(t.prototype,n),u}(n);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){H(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var J=new E({nameSelector:".profile__name",jobSelector:".profile__job",avatarSelector:".profile__avatar"}),F=new C({url:"https://mesto.nomoreparties.co/v1/cohort-30",headers:{authorization:"61544c3a-773f-4208-9b8d-c1a194add288"}}),z=null;F.getUserInfo().then((function(e){z=e._id,J.setUserInfo(e.name,e.about),J.setAvatar(e.avatar),J.setId(e._id)})).catch((function(e){return console.log(e)})),F.getCards().then((function(e){return e.reverse().forEach((function(e){Z(X(e))}))})).catch((function(e){return console.log(e)}));var M=document.querySelector(".elements"),G=new l(".popup_place",(function(e){return F.renderNewCard(e.name,e.link).then((function(e){return Z(X(e))})).catch((function(e){return console.log(e)}))}));G.setEventListeners();var K=new m(".popup-image");K.setEventListeners();var Q=document.forms.place,W=new g(e,Q);function X(e){return new O(N(N({},e),{},{currentUserId:z}),"#template-place-card",$,Y,ie).render()}function Y(e){var t=J.getUserInfo().id;e.getLikes().some((function(e){return e._id===t}))?F.likeDelete(e.getId()).then((function(t){e.setLikes(t.likes)})):F.likeActive(e.getId()).then((function(t){e.setLikes(t.likes)}))}function Z(e){M.prepend(e)}function $(e,t){K.open(e,t)}W.enableValidation();var ee=document.querySelector(".profile__add-button"),te=Q.querySelector(".popup__card-input_type_name"),ne=Q.querySelector(".popup__card-input_type_link");ee.addEventListener("click",(function(){te.value="",ne.value="",W.resetValidation(),G.open()}));var re=new l(".popup_avatar-edit",(function(e){return F.avatarEdit(e.avatar).then((function(e){J.setAvatar(e.avatar)})).catch((function(e){return console.log(e)}))}));re.setEventListeners(),document.querySelector(".profile__avatar-edit").addEventListener("click",(function(){re.open()})),new g(e,document.forms.avatarEdit).enableValidation();var oe=new U(".popup_delete",(function(e){F.cardDelete(e.getId()).then((function(){e.remove()})).catch((function(e){return console.log(e)}))}));function ie(e){oe.open(e)}oe.setEventListeners();var ue=new l(".popup_profile",(function(e){return F.setUserInfo(e.name,e.job).then((function(e){return J.setUserInfo(e.name,e.about)})).catch((function(e){return console.log(e)}))}));ue.setEventListeners();var ce=document.forms.profile,ae=new g(e,ce);ae.enableValidation();var se=document.querySelector(".profile__edit-button"),le=ce.querySelector(".popup__form-input_type_name"),fe=ce.querySelector(".popup__form-input_type_job");se.addEventListener("click",(function(){var e=J.getUserInfo();le.value=e.name,fe.value=e.about,ae.resetValidation(),ue.open()}))})();