(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},(n="checkResponse")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this.url=e.url,this.headers=e.headers}var n,r;return n=t,(r=[{key:"getProfileInformation",value:function(){return fetch("".concat(this.url,"/users/me"),{headers:this.headers}).then(this.checkResponse)}},{key:"editProfileInformation",value:function(e){return fetch("".concat(this.url,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then(this.checkResponse)}},{key:"editProfileAvatar",value:function(e){return fetch("".concat(this.url,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then(this.checkResponse)}},{key:"getCardsArray",value:function(){return fetch("".concat(this.url,"/cards"),{headers:this.headers}).then(this.checkResponse)}},{key:"addCardToServer",value:function(e){return fetch("".concat(this.url,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify(e)}).then(this.checkResponse)}},{key:"removeCardToServer",value:function(e){return fetch("".concat(this.url,"/cards/").concat(e),{headers:this.headers,method:"DELETE"}).then(this.checkResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this.url,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then(this.checkResponse)}},{key:"removeLike",value:function(e){return fetch("".concat(this.url,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then(this.checkResponse)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){var n=t.selectorUserName,r=t.selectorAboutSelf,o=t.selectorAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._aboutSelf=document.querySelector(r),this._avatar=document.querySelector(o)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(e){return this.userInfo={},this.userInfo.name=e.name,this.userInfo.about=e.about,this._name.textContent=e.name,this._aboutSelf.textContent=e.about,this.userInfo}},{key:"changeUserInfo",value:function(e,t){this._name.textContent=e,this._aboutSelf.textContent=t}},{key:"changeUserAvatar",value:function(e){this._avatar.src=e}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_handleButtonClose",(function(){n.close()})),i(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),i(this,"_handleOverlayClose",(function(e){e.target.classList.contains("popup_opened")&&n.close()})),this._popup=document.querySelector(t),this._buttonPopupClose=this._popup.querySelector(".popup__close")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),this.setEventListeners()}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),this.removeEventListeners()}},{key:"setEventListeners",value:function(){this._buttonPopupClose.addEventListener("click",this._handleButtonClose),document.addEventListener("keydown",this._handleEscClose),document.addEventListener("mousedown",this._handleOverlayClose)}},{key:"removeEventListeners",value:function(){this._buttonPopupClose.removeEventListener("click",this._handleButtonClose),document.removeEventListener("keydown",this._handleEscClose),document.removeEventListener("mousedown",this._handleOverlayClose)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=l(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},s.apply(this,arguments)}function l(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function p(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(e){var t,n,r,o,c=e.popupId,u=e.callback;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),o=function(e){e.preventDefault(),t._callback(t._getInputValues())},(r="_formSubmit")in(n=d(t=i.call(this,c)))?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,t._callback=u,t._form=t._popup.querySelector(".popup__form"),t._inputList=t._form.querySelectorAll(".popup__item"),t._submitButton=t._popup.querySelector(".popup__button"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){s(h(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._formSubmit)}},{key:"removeEventListeners",value:function(){s(h(a.prototype),"removeEventListeners",this).call(this),this._form.removeEventListener("submit",this._formSubmit)}},{key:"close",value:function(){s(h(a.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e,t){this._submitButton.textContent=e?"Сохранение...":t}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(a);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function k(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function a(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._headingPlaceImage=r._popup.querySelector(t),r._imageItem=r._popup.querySelector(n),r}return t=a,(n=[{key:"open",value:function(e,t){m(S(a.prototype),"open",this).call(this),this._headingPlaceImage.textContent=e,this._imageItem.alt=e,this._imageItem.src=t}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(a);function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t,n){var r=t.validationConfig;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._inputSelector=r.inputSelector,this._submitButtonSelector=r.submitButtonSelector,this._inactiveButtonClass=r.inactiveButtonClass,this._inputErrorClass=r.inputErrorClass,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._popupButton=this._form.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage}},{key:"_hideError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_toggleButtonState",value:function(e){e?(this._popupButton.classList.remove(this._inactiveButtonClass),this._popupButton.disabled=!1):(this._popupButton.classList.add(this._inactiveButtonClass),this._popupButton.disabled="disabled")}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideError(t)}))}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState(e._form.checkValidity())}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=function(){function e(t,n,r,o){var i=this,a=o.removeCardToServer,c=o.removeLikeToServer,u=o.addLikeToServer,s=o.openPopupImage;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),O(this,"_handleOpenPopupImage",(function(){i._openPopupImage(i._name,i._link)})),O(this,"_handleCardReaction",(function(e){e.target.classList.contains("card__reaction_active")?i._removeLikeToServer(i._id):i._addLikeToServer(i._id)})),O(this,"removeLike",(function(e){i._cardReactionButton.classList.remove("card__reaction_active"),i._likeQuantity.textContent=e})),O(this,"addLike",(function(e){i._cardReactionButton.classList.add("card__reaction_active"),i._likeQuantity.textContent=e})),O(this,"_handleRemoveCard",(function(){i._removeCardToServer(i._id)})),O(this,"deleteCard",(function(){i._card.remove()})),this._name=t.name,this._link=t.link,this._likes=t.likes,this._owner=t.owner,this._templateId=n,this._id=t._id,this._userId=r,this._removeCardToServer=a,this._removeLikeToServer=c,this._addLikeToServer=u,this._openPopupImage=s}var t,n;return t=e,(n=[{key:"_getTemplateCard",value:function(){return document.querySelector(this._templateId).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._card=this._getTemplateCard(),this._cardName=this._card.querySelector(".card__name"),this._cardImage=this._card.querySelector(".card__image"),this._likeQuantity=this._card.querySelector(".card__like-quantity"),this._cardReactionButton=this._card.querySelector(".card__reaction"),this._cardRemove=this._card.querySelector(".card__remove"),this._handleAddBasket(),this._findUserLikes(),this.setEventListeners(),this._cardName.textContent=this._name,this._cardImage.alt=this._name,this._cardImage.src=this._link,this._likeQuantity.textContent=this._likes.length,this._card}},{key:"_handleAddBasket",value:function(){this._owner._id===this._userId&&this._cardRemove.classList.add("card__remove_active")}},{key:"_findUserLikes",value:function(){var e=this;this._likes.find((function(t){return t._id===e._userId}))&&this._cardReactionButton.classList.add("card__reaction_active")}},{key:"setEventListeners",value:function(){this._cardReactionButton.addEventListener("click",this._handleCardReaction),this._cardImage.addEventListener("click",this._handleOpenPopupImage),this._cardRemove.addEventListener("click",this._handleRemoveCard)}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e,t){var n=this;e.forEach((function(e){n.item=n._renderer(e),n.addItem(n.item,t)}))}},{key:"addItem",value:function(e,t){"append"===t?this._container.append(e):this._container.prepend(e)}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),R=document.querySelector(".profile__name"),T=document.querySelector(".profile__contact-info"),B=document.querySelector(".profile__edit-button"),q=document.forms.profile_edit,A=q.elements.profile_name,x=q.elements.contact_info,V=(q.elements.change_profile,document.querySelector(".profile__avatar-button")),U=(document.forms.profile_avatar_edit.elements.change_avatar,document.querySelector(".profile__add-button")),N=(document.forms.add_card.elements.create_card,{inputSelector:".popup__item",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__item_error"});function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Q="",J=new L({validationConfig:N},document.forms.profile_edit);J.enableValidation();var H=new L({validationConfig:N},document.forms.profile_avatar_edit);H.enableValidation();var M=new L({validationConfig:N},document.forms.add_card);M.enableValidation();var z=new t({url:"https://nomoreparties.co/v1/plus-cohort-8",headers:{authorization:"f6f0e19f-3261-436f-8b67-2b9918fd933f","Content-Type":"application/json"}}),$=new r({selectorUserName:".profile__name",selectorAboutSelf:".profile__contact-info",selectorAvatar:".profile__image"}),F=new j({items:[],renderer:function(e){var t=new P(e,"#card-template",Q,{removeCardToServer:function(e){z.removeCardToServer(e).then((function(){t.deleteCard()})).catch((function(e){console.log(e)}))},removeLikeToServer:function(e){z.removeLike(e).then((function(e){t.removeLike(e.likes.length)})).catch((function(e){console.log(e)}))},addLikeToServer:function(e){z.addLike(e).then((function(e){t.addLike(e.likes.length)})).catch((function(e){console.log(e)}))},openPopupImage:function(e,t){G.open(e,t)}});return t.generateCard()}},".cards__content");Promise.all([z.getProfileInformation(),z.getCardsArray()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Q=o._id,$.changeUserInfo(o.name,o.about),$.changeUserAvatar(o.avatar),F.renderItems(i,"append")})).catch((function(e){console.log("Ошибка: ".concat(e.message))}));var G=new w("#popup_image",".popup__heading_place_image",".popup__image"),K=new _({popupId:"#popup_avatar",callback:function(e){K.renderLoading(!0),z.editProfileAvatar({avatar:e.profile_image}).then((function(){$.changeUserAvatar(e.profile_image),K.close()})).catch((function(e){console.log(e)})).finally((function(){return K.renderLoading(!1,"Сохранить")}))}}),W=new _({popupId:"#popup_profile",callback:function(e){W.renderLoading(!0),z.editProfileInformation({name:e.profile_name,about:e.contact_info}).then((function(){$.changeUserInfo(e.profile_name,e.contact_info),W.close()})).catch((function(e){console.log(e)})).finally((function(){return W.renderLoading(!1,"Сохранить")}))}}),X=new _({popupId:"#popup_card",callback:function(e){X.renderLoading(!0),z.addCardToServer({link:e.place_adres,name:e.place_name}).then((function(e){F.renderItems([e]),X.close()})).catch((function(e){console.log("Ошибка: ".concat(e.message))})).finally((function(){return X.renderLoading(!1,"Создать")}))}});V.addEventListener("click",(function(){H.resetValidation(),K.open()})),B.addEventListener("click",(function(){A.value=R.textContent,x.value=T.textContent,J.resetValidation(),W.open()})),U.addEventListener("click",(function(){M.resetValidation(),X.open()})),console.log()})();