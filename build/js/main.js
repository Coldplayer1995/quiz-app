!function(n){var t={};function e(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return n[a].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=t,e.d=function(n,t,a){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:a})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(a,r,function(t){return n[t]}.bind(null,r));return a},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=1)}([function(n,t,e){},function(n,t,e){"use strict";e.r(t);e(0);!function(){var n={"/":'\n<header class="header">\n    <nav class="nav">\n      \n            <div class="nav__hamburger">\n                <button class="nav__hamburger-btn"> \n                <span class="nav__hamburger-line"></span>\n                </button> \n            </div>\n        <h1 class="header__h1">quiz app</h1>\n        <div class="nav__user"><img src="./img/user.png" class="nav__user-img" alt="user"></div>\n    </nav>\n    \n</header>\n<div class="menu"></div>\n\n<main class="main">\n<section class="statist">\n<div class="statist__content"><span class="statist__content-rank">question count</span><span class="statist__content-counter">230</span></div>\n<div class="statist__content"><span class="statist__content-rank">your ranking</span><span class="statist__content-counter">1250</span></div>\n</section>\n</main>',"/contact":"<h1>I am contact Page</h1>","/about":'<h1 class="about">I am about Page</h1>'},t=["/","/contact","/about"],e=document.getElementById("root");e.innerHTML=n[window.location.pathname];var a=document.querySelectorAll("ul>li>a");a.forEach((function(a,r){a.addEventListener("click",(function(){return a=t[r],window.history.pushState({},a,window.location.origin+a),void(e.innerHTML=n[a]);var a}))})),window.onpopstate=function(){e.innerHTML=n[window.location.pathname]}}();var a=document.querySelector(".nav__hamburger-btn"),r=document.querySelector(".menu");a.addEventListener("click",(function(){return function(n,t){t.classList.toggle("menu--active"),n.classList.toggle("nav__hamburger-btn--active")}(a,r)}))}]);