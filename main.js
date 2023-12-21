(()=>{"use strict";var e=document.querySelector("#card-template").content,t=document.querySelector(".places__list"),n=document.querySelector(".popup_type_edit"),r=document.querySelector(".popup_type_new-card"),o=document.querySelector(".popup_type_image"),c=o.querySelector(".popup__caption"),a=o.querySelector(".popup__image"),i=(o.querySelector(".popup__close"),document.querySelector(".profile__title")),u=document.querySelector(".profile__description"),l=document.querySelector(".popup_type_edit-avatar"),s=document.querySelector(".profile__image-overlay"),d=document.querySelector(".profile__image"),f=document.forms["edit-avatar"],p=f.link,m=document.querySelector(".popup_type_question"),v=document.forms.question,y=document.querySelector(".profile__edit-button"),_=document.querySelector(".profile__add-button"),h=document.forms["edit-profile"],b=h.name,S=h.description,g=document.forms["new-place"],q=g["place-name"],C=g.link,E={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},L={baseUrl:"https://nomoreparties.co/v1/wff-cohort-3",headers:{authorization:"e4d5256e-33f1-4ab5-9380-349d502386d0","Content-Type":"application/json"}};function k(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}function x(t,n,r,o,c){var a=e.querySelector(".places__item").cloneNode(!0),i=a.querySelector(".card__delete-button"),u=a.querySelector(".card__image"),l=a.querySelector(".card__image"),s=a.querySelector(".card__title"),d=a.querySelector(".card__like-button"),f=a.querySelector(".card__like-count");return a.id=t._id,u.src=t.link,l.alt=t.name,s.textContent=t.name,l.addEventListener("click",(function(){return o(l,s)})),d.addEventListener("click",(function(e){return r(e,f)})),i.addEventListener("click",n),f.textContent=t.likes.length?t.likes.length:0,t.owner._id!==c._id&&i.remove(),t.likes.forEach((function(e){e._id===c._id&&d.classList.toggle("card__like-button_is-active")})),a}function A(e,t){var n;e.target.classList.contains("card__like-button_is-active")?(n=e.target.parentElement.closest(".card"),fetch("".concat(L.baseUrl,"/cards/likes/").concat(n.id),{method:"DELETE",headers:L.headers}).then(k)).then((function(){e.target.classList.toggle("card__like-button_is-active"),t.textContent=Number(t.textContent)-1})).catch((function(e){return console.log(e)})):function(e){return fetch("".concat(L.baseUrl,"/cards/likes/").concat(e.id),{method:"PUT",headers:L.headers}).then(k)}(e.target.parentElement.closest(".card")).then((function(){e.target.classList.toggle("card__like-button_is-active"),t.textContent=Number(t.textContent)+1})).catch((function(e){return console.log(e)}))}function w(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",j)}function U(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",j)}function T(e){var t=e.target.closest(".popup");e.target.classList.contains("popup__close")&&U(t),e.target.classList.contains("popup")&&U(t)}function j(e){"Escape"===e.key&&U(document.querySelector(".popup_is-opened"))}var O=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},B=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))};function D(e,t){var n=e.querySelector(t.submitButtonSelector);Array.from(e.querySelectorAll(t.inputSelector)).forEach((function(n){O(e,n,t)})),n.disabled=!0,n.classList.add(t.inactiveButtonClass)}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var P,M="",I=[fetch("".concat(L.baseUrl,"/cards"),{method:"GET",headers:L.headers}).then(k),fetch("".concat(L.baseUrl,"/users/me"),{method:"GET",headers:L.headers}).then(k)];function J(e,t){c.textContent=t.textContent,a.src=e.src,a.alt=e.alt,w(o)}function G(e){var t;t=e,v.addEventListener("submit",(function(e){e.preventDefault(),v.querySelector(".button").textContent="Удаление...",function(e){return fetch("".concat(L.baseUrl,"/cards/").concat(e.id),{method:"DELETE",headers:L.headers}).then(k)}(t.target.parentElement).then((function(){U(m),t.target.closest(".card").remove()})).catch((function(e){return console.log(e)})).finally((function(){v.querySelector(".button").textContent="Да"}))})),w(m)}Promise.all(I).then((function(e){var n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(n,r)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[0],a=o[1];d.setAttribute("style","background-image: url(".concat(a.avatar,")")),M=a,i.textContent=a.name,u.textContent=a.about,c.forEach((function(e){!function(e,t){t.append(e)}(x(e,G,A,J,a),t)}))})).catch((function(e){return console.log(e)})),n.addEventListener("click",T),r.addEventListener("click",T),o.addEventListener("click",T),l.addEventListener("click",T),m.addEventListener("click",T),y.addEventListener("click",(function(){b.value=i.textContent,S.value=u.textContent,D(n,E),w(n)})),_.addEventListener("click",(function(){w(r)})),s.addEventListener("click",(function(){w(l)})),h.addEventListener("submit",(function(e){(function(e){var t,n;e.preventDefault(),h.querySelector(".button").textContent="Сохранение...",(t=b.value,n=S.value,fetch("".concat(L.baseUrl,"/users/me"),{method:"PATCH",headers:L.headers,body:JSON.stringify({name:t,about:n})}).then(k)).then((function(){i.textContent=b.value,u.textContent=S.value})).catch((function(e){return console.log(e)})).finally((function(){h.querySelector(".button").textContent="Сохранить"}))})(e),U(n)})),g.addEventListener("submit",(function(e){(function(e){var n,o;e.preventDefault(),g.querySelector(".button").textContent="Сохранение...",(n=q.value,o=C.value,fetch("".concat(L.baseUrl,"/cards"),{method:"POST",headers:L.headers,body:JSON.stringify({name:n,link:o})}).then(k)).then((function(){var e,n={};n.name="".concat(q.value),n.link="".concat(C.value),n.likes=[],n.owner=M,e=x(n,G,A,J,M),t.prepend(e),D(r,E),g.reset()})).catch((function(e){return console.log(e)})).finally((function(){g.querySelector(".button").textContent="Сохранить"}))})(e),U(r)})),f.addEventListener("submit",(function(e){(function(e){var t;e.preventDefault(),f.querySelector(".button").textContent="Сохранение...",(t=p.value,fetch("".concat(L.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:L.headers,body:JSON.stringify({avatar:t})}).then(k)).then((function(){d.setAttribute("style","background-image: url(".concat(p.value,")")),f.reset()})).catch((function(e){return console.log(e)})).finally((function(){f.querySelector(".button").textContent="Сохранить"}))})(e),U(l)})),P=E,Array.from(document.querySelectorAll(P.formSelector)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);B(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?O(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),B(n,r,t)}))}))}(e,P)}))})();