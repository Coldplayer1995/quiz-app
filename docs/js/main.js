!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e,n){t.exports=n(3)},function(t,e){function n(t,e,n,r,a,o,s){try{var i=t[o](s),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,a)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var s=t.apply(e,r);function i(t){n(s,a,o,i,c,"next",t)}function c(t){n(s,a,o,i,c,"throw",t)}i(void 0)}))}}},function(t,e,n){var r=n(5),a=n(6),o=n(7);t.exports=function(t){return r(t)||a(t)||o()}},function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function i(t,e,n,r){var a=e&&e.prototype instanceof l?e:l,o=Object.create(a.prototype),s=new x(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var s=n.delegate;if(s){var i=y(s,n);if(i){if(i===u)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=c(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,s),o}function c(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=i;var u={};function l(){}function f(){}function d(){}var p={};p[a]=function(){return this};var _=Object.getPrototypeOf,m=_&&_(_(E([])));m&&m!==e&&n.call(m,a)&&(p=m);var v=d.prototype=l.prototype=Object.create(p);function h(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t){var e;this._invoke=function(r,a){function o(){return new Promise((function(e,o){!function e(r,a,o,s){var i=c(t[r],t,a);if("throw"!==i.type){var u=i.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,o,s)}),(function(t){e("throw",t,o,s)})):Promise.resolve(l).then((function(t){u.value=t,o(u)}),(function(t){return e("throw",t,o,s)}))}s(i.arg)}(r,a,e,o)}))}return e=e?e.then(o,o):o()}}function y(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,y(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=c(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,u;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function E(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=v.constructor=d,d.constructor=f,d[s]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},h(g.prototype),g.prototype[o]=function(){return this},t.AsyncIterator=g,t.async=function(e,n,r,a){var o=new g(i(e,n,r,a));return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},h(v),v[s]="Generator",v[a]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=E,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return s.type="throw",s.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),b(n),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;b(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,e,n){"use strict";n.r(e);var r,a,o=n(0),s=n.n(o),i=n(1),c=n.n(i),u=(n(4),{render:(a=c()(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return","\n        <h1>Something went wrong :(</h1>  \n        ");case 2:case"end":return t.stop()}}),t)}))),function(){return a.apply(this,arguments)}),after_render:(r=c()(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)}))),function(){return r.apply(this,arguments)})}),l=function(){var t=(location.hash.slice(1)||"/").split("/"),e={resource:null,id:null,verb:null};return e.resource=t[1],e.id=t[2],e.verb=t[3],e},f=n(2),d=n.n(f),p=function(t,e){t.forEach((function(t){return t.classList.remove("section__level--active")})),t[e].classList.add("section__level--active"),t.forEach((function(t){return t.style.backgroundColor=""}))},_={render:function(){var t=c()(s.a.mark((function t(){var e,n,r,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=localStorage,n=e.userChoice,"games"==(r=n)?r="Video Games":"board_game"==r&&(r="board games"),a='\n        <header class="category">\n        <img src=\'img/'.concat(n,'.png\' class="category__picture" alt=').concat(n,'>\n        <span class="category__content">').concat(r,'</span>\n        <button class="category__exit"></button>\n\n    </header>\n    <section class="section">\n        <h1 class="section__title">select level</h1>\n        <div class="section__level">Easy</div>\n        <div class="section__level">Medium</div>\n        <div class="section__level">Hard</div>\n    </section>\n    <button class="select">select</button>\n        '),t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),after_render:function(){var t=c()(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=d()(document.querySelectorAll(".section__level")),document.querySelector(".select").addEventListener("click",(function(){var t,n;0===(n=(t=e).filter((function(t){return t.className.includes("section__level--active")}))).length?t.forEach((function(t){return t.style.backgroundColor="red"})):(localStorage.setItem("userLevel",n[0].innerText),localStorage.setItem("userCorrectAnswers",0),window.location.href="#/startGame")})),e.forEach((function(t,n){return t.addEventListener("click",(function(){return p(e,n)}))})),document.querySelector(".category__exit").addEventListener("click",(function(){return window.location="#"}));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},m=function(t,e,n){t.forEach((function(t){return t.style.backgroundColor=""})),t.forEach((function(t){return t.classList.remove("categories__option--active")})),t[n].classList.add("categories__option--active"),e.classList.add("select--active")},v=function(t){var e=t.filter((function(t){return t.className.includes("categories__option--active")}));0===e.length?t.forEach((function(t){return t.style.backgroundColor="red"})):(localStorage.setItem("userChoice",e[0].dataset.name),localStorage.setItem("userCategory",e[0].dataset.category),window.location="#/level")},h=function(t,e,n,r){e.classList.toggle("menu--active"),t.classList.toggle("nav__hamburger-btn--active"),r.classList.toggle("nav__hamburger--active");var a=setInterval((function(){n[o].classList.add("menu__item--active"),++o===n.length&&clearInterval(a);!t.className.includes("nav__hamburger-btn--active")&&n.forEach((function(t){return t.classList.remove("menu__item--active")}))}),200),o=0},g={render:function(){var t=c()(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return'\n      <header class="header">\n      <nav class="nav">\n        \n              <div class="nav__hamburger">\n                  <button class="nav__hamburger-btn"> \n                  <span class="nav__hamburger-line"></span>\n                  </button> \n              </div>\n          <h1 class="header__h1">quiz app</h1>\n          <div class="nav__user"><img src="img/user.png" class="nav__user-img" alt="user"></div>\n      </nav>\n      \n  </header>\n  <div class="menu">\n  <ul class="menu__list">\n  <li class="menu__item"><a class="menu__link href="#">Home</a></li>\n  <li class="menu__item"><a class="menu__link href="#">Ranking</a></li>\n  <li class="menu__item"><a class="menu__link href="#">About</a></li>\n  </ul>\n  </div>\n  \n  <main class="main">\n  <section class="statist">\n  <div class="statist__content"><span class="statist__content-rank">question count</span><span class="statist__content-counter">230</span></div>\n  <div class="statist__content"><span class="statist__content-rank">your ranking</span><span class="statist__content-counter">1250 <span class="fas fa-user statist__content-icon"></span></span></div>\n  \n  </section>\n  <section  class="categories">\n      <div class="categories__option" data-name="sport" data-category="21"><img src="img/sport.png" class="categories__option-img">Sports</div>\n      <div class="categories__option" data-name="politics" data-category="24"><img src="img/politics.png" class="categories__option-img">Politics</div>\n      <div class="categories__option" data-name="games" data-category="15"><img src="img/games.png" class="categories__option-img">Video Games</div>\n      <div class="categories__option" data-name="board_game" data-category="16"><img src="img/board_game.png" class="categories__option-img">Board Games</div>\n      <div class="categories__option" data-name="computer" data-category="18"><img src="img/computer.png" class="categories__option-img">Computers</div>\n      <div class="categories__option" data-name="history" data-category="23"><img src="img/history.png" class="categories__option-img">History</div>\n  </section>\n  \n  \n  </main>\n  <button class="select" >\n  Select\n</button>\n  ',t.abrupt("return",'\n      <header class="header">\n      <nav class="nav">\n        \n              <div class="nav__hamburger">\n                  <button class="nav__hamburger-btn"> \n                  <span class="nav__hamburger-line"></span>\n                  </button> \n              </div>\n          <h1 class="header__h1">quiz app</h1>\n          <div class="nav__user"><img src="img/user.png" class="nav__user-img" alt="user"></div>\n      </nav>\n      \n  </header>\n  <div class="menu">\n  <ul class="menu__list">\n  <li class="menu__item"><a class="menu__link href="#">Home</a></li>\n  <li class="menu__item"><a class="menu__link href="#">Ranking</a></li>\n  <li class="menu__item"><a class="menu__link href="#">About</a></li>\n  </ul>\n  </div>\n  \n  <main class="main">\n  <section class="statist">\n  <div class="statist__content"><span class="statist__content-rank">question count</span><span class="statist__content-counter">230</span></div>\n  <div class="statist__content"><span class="statist__content-rank">your ranking</span><span class="statist__content-counter">1250 <span class="fas fa-user statist__content-icon"></span></span></div>\n  \n  </section>\n  <section  class="categories">\n      <div class="categories__option" data-name="sport" data-category="21"><img src="img/sport.png" class="categories__option-img">Sports</div>\n      <div class="categories__option" data-name="politics" data-category="24"><img src="img/politics.png" class="categories__option-img">Politics</div>\n      <div class="categories__option" data-name="games" data-category="15"><img src="img/games.png" class="categories__option-img">Video Games</div>\n      <div class="categories__option" data-name="board_game" data-category="16"><img src="img/board_game.png" class="categories__option-img">Board Games</div>\n      <div class="categories__option" data-name="computer" data-category="18"><img src="img/computer.png" class="categories__option-img">Computers</div>\n      <div class="categories__option" data-name="history" data-category="23"><img src="img/history.png" class="categories__option-img">History</div>\n  </section>\n  \n  \n  </main>\n  <button class="select" >\n  Select\n</button>\n  ');case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),after_render:function(){var t=c()(s.a.mark((function t(){var e,n,r,a,o,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=document.querySelector(".nav__hamburger-btn"),n=document.querySelector(".menu"),r=document.querySelectorAll(".menu__item"),a=document.querySelector(".nav__hamburger"),e.addEventListener("click",(function(){return h(e,n,r,a)})),o=d()(document.querySelectorAll(".categories__option")),i=document.querySelector(".select"),o.forEach((function(t,e){t.addEventListener("click",(function(){return m(o,i,e)}))})),i.addEventListener("click",(function(){return v(o)}));case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},y=0,w=!0,b=0,x=["a","b","c","d"],E=60,L=!1,S=function(){if(!L){var t=localStorage.correctAnswer,e=d()(document.querySelectorAll(".answers__answer")),n=d()(document.querySelectorAll(".answers__answer-text")).filter((function(t){return t.parentElement.className.includes("answers__answer--active")}));if(0!=n.length||!1!==w){var r=e.filter((function(e){return e.firstElementChild.nextElementSibling.innerText===t}));if(0!==n.length){var a=n[0].innerText;t===a&&(b++,localStorage.setItem("userCorrectAnswers",b))}var o=e.filter((function(e){return e.firstElementChild.nextElementSibling.innerText!==t}));return r[0].style.backgroundColor="#2ECC40",o.forEach((function(t){return t.style.backgroundColor="#FF4136"})),setTimeout((function(){document.querySelector(".section__info-time").innerText="01:00 min",E=60,w=!1,e.forEach((function(t){return t.style.backgroundColor=""})),10!=++y&&q.after_render(),e.forEach((function(t,e){if(t.classList.remove("answers__answer--active"),t.firstElementChild.innerText=x[e],10===y)return L=!0,y=0,setTimeout((function(){return window.location="#/finish"}),1e3)}))}),2e3)}e.forEach((function(t){return t.style.backgroundColor="red",t.style.color="white"}))}},k=function(t,e,n){var r=document.querySelectorAll(".answers__answer-number");n.forEach((function(t){return t.style.backgroundColor="",t.style.color=""})),e.firstElementChild.innerHTML='<span class="fas fa-times answers__answer-icon"></span>',n.forEach((function(t){return t.classList.remove("answers__answer--active")})),e.classList.add("answers__answer--active"),n.filter((function(t,e){t.className.includes("answers__answer--active")||(r[e].innerHTML=x[e])}))},q={render:function(){var t=c()(s.a.mark((function t(){var e,n,r,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=localStorage,n=e.userChoice,r=n,L=!1,q.after_render(),"games"==r?r="Video Games":"board_game"==r&&(r="board games"),a='\n    <header class="category">\n    <img src=\'img/'.concat(n,'.png\' class="category__picture" alt=').concat(n,'>\n    <span class="category__content">').concat(r,'</span>\n    <button class="category__exit"></button>\n\n</header>\n<section class="section">\n  <div class="section__info">\n      <span class="section__info-length">Quiz:<span class="section__info-counter">10</span></span>\n      <span class="section__info-time">01:00 min</span>\n  </div>\n  <div class="section__question">\n  <p class="section__question-text"></p>\n\n    <div class="answers">\n        <div class="answers__answer"><span class="answers__answer-number">a</span><span class="answers__answer-text"></span></div>\n        <div class="answers__answer"><span class="answers__answer-number">b</span><span class="answers__answer-text"></span></div>\n        <div class="answers__answer"><span class="answers__answer-number">c</span><span class="answers__answer-text"></span></div>\n        <div class="answers__answer"><span class="answers__answer-number">d</span><span class="answers__answer-text"></span></div>\n    </div>\n  </div>\n</section>\n<button class="select">submit</button>\n      '),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),after_render:function(){var t=c()(s.a.mark((function t(){var e,n,r,a,o,i,c,u,l,f,p,_,m,v,h,g,b;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(L){t.next=27;break}return e=function(){g.innerText=E<10?"00:0".concat(E," min"):"00:".concat(E," min"),0===E?(w=!0,E=60,S(),g.innerText="01:00 min"):10===y?clearInterval(b):E--},n=document.querySelector(".section__question-text"),r=document.querySelectorAll(".answers__answer-text"),document.querySelector(".section__info-counter").innerText="".concat(y+1,"/10")||!1,(a=d()(document.querySelectorAll(".answers__answer"))).forEach((function(t,e){return t.addEventListener("click",(function(){return k(0,t,a)}))})),document.querySelector(".category__exit").addEventListener("click",(function(){return window.location="#"})),o=localStorage,o.userChoice,i=o.userLevel,c=o.userCategory,u="https://opentdb.com/api.php?amount=10&type=multiple&category=".concat(c,"&difficulty=").concat(i.toLowerCase()),t.next=12,fetch(u,{method:"GET"});case 12:return l=t.sent,t.next=15,l.json();case 15:f=t.sent,p=f.results.map((function(t){return t})),_=p[y],_.category,m=_.question,_.type,v=_.correct_answer,h=_.incorrect_answers,_.difficulty,localStorage.setItem("correctAnswer",v),h.push(v),document.querySelector(".select").addEventListener("click",S),n.innerText="".concat(y+1,". ").concat(m),r.forEach((function(t,e){return t.innerText=h[e]})),g=document.querySelector(".section__info-time"),b=setInterval(e,1e3),w||clearInterval(b);case 27:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},C={render:function(){var t=c()(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return'\n              \n                  <h1 style="color: white;font-size:50px;"> Koniecc gryyy</h1>\n                \n          ',t.abrupt("return",'\n              \n                  <h1 style="color: white;font-size:50px;"> Koniecc gryyy</h1>\n                \n          ');case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),after_render:function(){var t=c()(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=localStorage,n=e.userCorrectAnswers,document.querySelector("h1").innerText=n;case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},T={"/":g,"/level":_,"/startGame":q,"/finish":C},A=function(){var t=c()(s.a.mark((function t(){var e,n,r,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=document.getElementById("root"),n=l(),r=(n.resource?"/"+n.resource:"/")+(n.id?"/":"")+(n.verb?"/"+n.verb:""),a=T[r]?T[r]:u,t.next=6,a.render();case 6:return e.innerHTML=t.sent,t.next=9,a.after_render();case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();window.addEventListener("hashchange",A),window.addEventListener("load",A)}]);