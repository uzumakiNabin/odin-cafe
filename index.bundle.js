/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_cafeImage_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/cafeImage.jpg */ "./src/images/cafeImage.jpg");


//location information
const locationInfo = () => {
    let component = document.createElement('div');
    component.classList.add('location-info');

    let cafeName = document.createElement('h3');
    cafeName.classList.add('contact-header')
    cafeName.textContent = 'Coffee Shop';

    let address = document.createElement('p');
    address.classList.add('contact-details');
    address.textContent = '110117th St NW Washington, DC 20036';

    let phone = document.createElement('p');
    phone.classList.add('contact-details', 'contact-link');
    phone.textContent = '(123) 456-7890';

    let email = document.createElement('p');
    email.classList.add('contact-details', 'contact-link');
    email.textContent = 'info@coffeeshop.com';

    component.appendChild(cafeName);
    component.appendChild(address);
    component.appendChild(phone);
    component.appendChild(email);

    return component;
}

//hours open information
const hoursOpen = () => {
    let component = document.createElement('div');
    component.classList.add('hours-open');

    let title = document.createElement('h3');
    title.classList.add('contact-header');
    title.textContent = 'Hours';

    let content = document.createElement('p');
    content.classList.add('contact-details');
    content.textContent = 'Monday - Friday: 7am - 3pm \n Saturday - Sunday: Closed';

    component.appendChild(title);
    component.appendChild(content);

    return component;
}

//contact info and hours open info combined
const contactInfo = () => {
    let component = document.createElement('div');
    component.classList.add('contact-info');

    component.appendChild(locationInfo());
    component.appendChild(hoursOpen());

    let contactButton = document.createElement('button');
    contactButton.classList.add('btn', 'contact-button');
    contactButton.textContent = 'Contact Us';

    component.appendChild(contactButton);

    return component;
}

//cafe image
const cafeImage = () => {
    let component = document.createElement('img');
    component.classList.add('cafe-image');
    component.src = _images_cafeImage_jpg__WEBPACK_IMPORTED_MODULE_0__;
    return component;
}

const contact = () => {
    const component = document.createElement('div');
    component.classList.add('contact-container');

    component.appendChild(contactInfo());
    component.appendChild(cafeImage());

    return component;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact());

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const home = () => {
    let component = document.createElement('div');
    component.classList.add('home-container');
    let quote = document.createElement('p');
    quote.classList.add('quote');
    quote.textContent = '\"Once you wake up and smell the coffee, it\'s hard to go back to sleep.\"';
    component.appendChild(quote);
    return component;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home());

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menu = () => {
    let component = document.createElement('div');

    return component;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu());

/***/ }),

/***/ "./src/images/cafeImage.jpg":
/*!**********************************!*\
  !*** ./src/images/cafeImage.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd8aab47e9880e32434f.jpg";

/***/ }),

/***/ "./src/images/logo.jpg":
/*!*****************************!*\
  !*** ./src/images/logo.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c9886a71f800af886dc.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contact */ "./src/pages/contact.js");
/* harmony import */ var _images_logo_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/logo.jpg */ "./src/images/logo.jpg");





//logo with name
const logoWithName = () => {
    let component = document.createElement('div');
    let logoImg = document.createElement('img');
    logoImg.src = _images_logo_jpg__WEBPACK_IMPORTED_MODULE_3__;
    logoImg.classList.add('img', 'main-logo-image');
    let name = document.createElement('h2');
    name.classList.add('main-logo-name');
    name.textContent = 'Coffee Shop';
    component.appendChild(logoImg);
    component.appendChild(name);
    return component;
}

//navigation links
const navLinks = () => {
    let component = document.createElement('div');
    component.classList.add('nav-links')

    //home option
    let homeLink = document.createElement('a');
    homeLink.classList.add('nav-link');
    homeLink.href = '#';
    homeLink.textContent = 'Home';
    homeLink.addEventListener('click', () => alert('home clicked'));

    //menu option
    let menuLink = document.createElement('a');
    menuLink.classList.add('nav-link');
    menuLink.href = '#';
    menuLink.textContent = 'Menu';
    menuLink.addEventListener('click', () => alert('menu clicked'));

    //contact option
    let contactLink = document.createElement('a');
    contactLink.classList.add('nav-link');
    contactLink.href = '#';
    contactLink.textContent = 'Contact';
    contactLink.addEventListener('click', () => alert('contact clicked'));

    component.appendChild(homeLink);
    component.appendChild(menuLink);
    component.appendChild(contactLink);
    return component;
}

//nav bar
const navBar = () => {
    let component = document.createElement('nav');
    component.classList.add('navbar');
    component.appendChild(logoWithName());
    component.appendChild(navLinks());
    return component;
}

//generate social link icon
const generateSocial = (name, link) => {
    let component = document.createElement('a');
    component.href = link;
    let componentLogo = document.createElement('i');
    componentLogo.classList.add('fa-solid', `fa-${name}`);
    component.appendChild(componentLogo);
    return component;
}

//social links
const socialLinks = () => {
    let component = document.createElement('div');
    component.classList.add('social-links');
    component.appendChild(generateSocial('facebook', '#'));
    component.appendChild(generateSocial('instagram', '#'));
    component.appendChild(generateSocial('twitter', '#'));
    component.appendChild(generateSocial('youtube', '#'));
    return component;
}

//copyright information
const copyrightInfo = () => {
    let component = document.createElement('p');
    component.classList.add('copyright-info', 'footer-text');
    let year = '2021';
    component.innerHTML = `\u00A9 ${year} Coffee Shop - All Rights Reserved`;
    return component;
}

//footer
const footer = () => {
    let component = document.createElement('footer');
    let connectText = document.createElement('p');
    connectText.classList.add('connect-text', 'footer-text');
    connectText.textContent = 'connect with us!';
    component.classList.add('footer');
    component.appendChild(socialLinks());
    component.appendChild(connectText);
    component.appendChild(copyrightInfo());
    return component;
}

const container = () => {
    const component = document.createElement('div');
    component.classList.add('container');
    component.appendChild(navBar());

    component.appendChild(_pages_home__WEBPACK_IMPORTED_MODULE_0__["default"]);
    component.appendChild(_pages_menu__WEBPACK_IMPORTED_MODULE_1__["default"]);
    component.appendChild(_pages_contact__WEBPACK_IMPORTED_MODULE_2__["default"]);

    component.appendChild(footer());
    
    return component;
}

document.body.appendChild(container());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tY2FmZS8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL29kaW4tY2FmZS8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL29kaW4tY2FmZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWNhZmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tY2FmZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tY2FmZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tY2FmZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tY2FmZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLWNhZmUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNhZmVpbWcgZnJvbSAnLi4vaW1hZ2VzL2NhZmVJbWFnZS5qcGcnO1xyXG5cclxuLy9sb2NhdGlvbiBpbmZvcm1hdGlvblxyXG5jb25zdCBsb2NhdGlvbkluZm8gPSAoKSA9PiB7XHJcbiAgICBsZXQgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24taW5mbycpO1xyXG5cclxuICAgIGxldCBjYWZlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBjYWZlTmFtZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWhlYWRlcicpXHJcbiAgICBjYWZlTmFtZS50ZXh0Q29udGVudCA9ICdDb2ZmZWUgU2hvcCc7XHJcblxyXG4gICAgbGV0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZGV0YWlscycpO1xyXG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICcxMTAxMTd0aCBTdCBOVyBXYXNoaW5ndG9uLCBEQyAyMDAzNic7XHJcblxyXG4gICAgbGV0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcGhvbmUuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1kZXRhaWxzJywgJ2NvbnRhY3QtbGluaycpO1xyXG4gICAgcGhvbmUudGV4dENvbnRlbnQgPSAnKDEyMykgNDU2LTc4OTAnO1xyXG5cclxuICAgIGxldCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGVtYWlsLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZGV0YWlscycsICdjb250YWN0LWxpbmsnKTtcclxuICAgIGVtYWlsLnRleHRDb250ZW50ID0gJ2luZm9AY29mZmVlc2hvcC5jb20nO1xyXG5cclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChjYWZlTmFtZSk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQocGhvbmUpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGVtYWlsKTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG4vL2hvdXJzIG9wZW4gaW5mb3JtYXRpb25cclxuY29uc3QgaG91cnNPcGVuID0gKCkgPT4ge1xyXG4gICAgbGV0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ2hvdXJzLW9wZW4nKTtcclxuXHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1oZWFkZXInKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0hvdXJzJztcclxuXHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1kZXRhaWxzJyk7XHJcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gJ01vbmRheSAtIEZyaWRheTogN2FtIC0gM3BtIFxcbiBTYXR1cmRheSAtIFN1bmRheTogQ2xvc2VkJztcclxuXHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbi8vY29udGFjdCBpbmZvIGFuZCBob3VycyBvcGVuIGluZm8gY29tYmluZWRcclxuY29uc3QgY29udGFjdEluZm8gPSAoKSA9PiB7XHJcbiAgICBsZXQgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pbmZvJyk7XHJcblxyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGxvY2F0aW9uSW5mbygpKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChob3Vyc09wZW4oKSk7XHJcblxyXG4gICAgbGV0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2NvbnRhY3QtYnV0dG9uJyk7XHJcbiAgICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnO1xyXG5cclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG4vL2NhZmUgaW1hZ2VcclxuY29uc3QgY2FmZUltYWdlID0gKCkgPT4ge1xyXG4gICAgbGV0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ2NhZmUtaW1hZ2UnKTtcclxuICAgIGNvbXBvbmVudC5zcmMgPSBjYWZlaW1nO1xyXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG5cclxuY29uc3QgY29udGFjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKCkpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGNhZmVJbWFnZSgpKTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0KCk7IiwiY29uc3QgaG9tZSA9ICgpID0+IHtcclxuICAgIGxldCBjb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKCdob21lLWNvbnRhaW5lcicpO1xyXG4gICAgbGV0IHF1b3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcXVvdGUuY2xhc3NMaXN0LmFkZCgncXVvdGUnKTtcclxuICAgIHF1b3RlLnRleHRDb250ZW50ID0gJ1xcXCJPbmNlIHlvdSB3YWtlIHVwIGFuZCBzbWVsbCB0aGUgY29mZmVlLCBpdFxcJ3MgaGFyZCB0byBnbyBiYWNrIHRvIHNsZWVwLlxcXCInO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKHF1b3RlKTtcclxuICAgIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWUoKTsiLCJjb25zdCBtZW51ID0gKCkgPT4ge1xyXG4gICAgbGV0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnUoKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgaG9tZSBmcm9tICcuL3BhZ2VzL2hvbWUnO1xyXG5pbXBvcnQgbWVudSBmcm9tICcuL3BhZ2VzL21lbnUnO1xyXG5pbXBvcnQgY29udGFjdCBmcm9tICcuL3BhZ2VzL2NvbnRhY3QnO1xyXG5pbXBvcnQgbG9nbyBmcm9tICcuL2ltYWdlcy9sb2dvLmpwZyc7XHJcblxyXG4vL2xvZ28gd2l0aCBuYW1lXHJcbmNvbnN0IGxvZ29XaXRoTmFtZSA9ICgpID0+IHtcclxuICAgIGxldCBjb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBsb2dvSW1nLnNyYyA9IGxvZ287XHJcbiAgICBsb2dvSW1nLmNsYXNzTGlzdC5hZGQoJ2ltZycsICdtYWluLWxvZ28taW1hZ2UnKTtcclxuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnbWFpbi1sb2dvLW5hbWUnKTtcclxuICAgIG5hbWUudGV4dENvbnRlbnQgPSAnQ29mZmVlIFNob3AnO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGxvZ29JbWcpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKG5hbWUpO1xyXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG5cclxuLy9uYXZpZ2F0aW9uIGxpbmtzXHJcbmNvbnN0IG5hdkxpbmtzID0gKCkgPT4ge1xyXG4gICAgbGV0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ25hdi1saW5rcycpXHJcblxyXG4gICAgLy9ob21lIG9wdGlvblxyXG4gICAgbGV0IGhvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgaG9tZUxpbmsuY2xhc3NMaXN0LmFkZCgnbmF2LWxpbmsnKTtcclxuICAgIGhvbWVMaW5rLmhyZWYgPSAnIyc7XHJcbiAgICBob21lTGluay50ZXh0Q29udGVudCA9ICdIb21lJztcclxuICAgIGhvbWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYWxlcnQoJ2hvbWUgY2xpY2tlZCcpKTtcclxuXHJcbiAgICAvL21lbnUgb3B0aW9uXHJcbiAgICBsZXQgbWVudUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBtZW51TGluay5jbGFzc0xpc3QuYWRkKCduYXYtbGluaycpO1xyXG4gICAgbWVudUxpbmsuaHJlZiA9ICcjJztcclxuICAgIG1lbnVMaW5rLnRleHRDb250ZW50ID0gJ01lbnUnO1xyXG4gICAgbWVudUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBhbGVydCgnbWVudSBjbGlja2VkJykpO1xyXG5cclxuICAgIC8vY29udGFjdCBvcHRpb25cclxuICAgIGxldCBjb250YWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGNvbnRhY3RMaW5rLmNsYXNzTGlzdC5hZGQoJ25hdi1saW5rJyk7XHJcbiAgICBjb250YWN0TGluay5ocmVmID0gJyMnO1xyXG4gICAgY29udGFjdExpbmsudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XHJcbiAgICBjb250YWN0TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFsZXJ0KCdjb250YWN0IGNsaWNrZWQnKSk7XHJcblxyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChtZW51TGluayk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQoY29udGFjdExpbmspO1xyXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG5cclxuLy9uYXYgYmFyXHJcbmNvbnN0IG5hdkJhciA9ICgpID0+IHtcclxuICAgIGxldCBjb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIGNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChsb2dvV2l0aE5hbWUoKSk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobmF2TGlua3MoKSk7XHJcbiAgICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG4vL2dlbmVyYXRlIHNvY2lhbCBsaW5rIGljb25cclxuY29uc3QgZ2VuZXJhdGVTb2NpYWwgPSAobmFtZSwgbGluaykgPT4ge1xyXG4gICAgbGV0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGNvbXBvbmVudC5ocmVmID0gbGluaztcclxuICAgIGxldCBjb21wb25lbnRMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgY29tcG9uZW50TG9nby5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsIGBmYS0ke25hbWV9YCk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQoY29tcG9uZW50TG9nbyk7XHJcbiAgICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG4vL3NvY2lhbCBsaW5rc1xyXG5jb25zdCBzb2NpYWxMaW5rcyA9ICgpID0+IHtcclxuICAgIGxldCBjb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKCdzb2NpYWwtbGlua3MnKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChnZW5lcmF0ZVNvY2lhbCgnZmFjZWJvb2snLCAnIycpKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChnZW5lcmF0ZVNvY2lhbCgnaW5zdGFncmFtJywgJyMnKSk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVTb2NpYWwoJ3R3aXR0ZXInLCAnIycpKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChnZW5lcmF0ZVNvY2lhbCgneW91dHViZScsICcjJykpO1xyXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG5cclxuLy9jb3B5cmlnaHQgaW5mb3JtYXRpb25cclxuY29uc3QgY29weXJpZ2h0SW5mbyA9ICgpID0+IHtcclxuICAgIGxldCBjb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnY29weXJpZ2h0LWluZm8nLCAnZm9vdGVyLXRleHQnKTtcclxuICAgIGxldCB5ZWFyID0gJzIwMjEnO1xyXG4gICAgY29tcG9uZW50LmlubmVySFRNTCA9IGBcXHUwMEE5ICR7eWVhcn0gQ29mZmVlIFNob3AgLSBBbGwgUmlnaHRzIFJlc2VydmVkYDtcclxuICAgIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbi8vZm9vdGVyXHJcbmNvbnN0IGZvb3RlciA9ICgpID0+IHtcclxuICAgIGxldCBjb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICAgIGxldCBjb25uZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbm5lY3RUZXh0LmNsYXNzTGlzdC5hZGQoJ2Nvbm5lY3QtdGV4dCcsICdmb290ZXItdGV4dCcpO1xyXG4gICAgY29ubmVjdFRleHQudGV4dENvbnRlbnQgPSAnY29ubmVjdCB3aXRoIHVzISc7XHJcbiAgICBjb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQoc29jaWFsTGlua3MoKSk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQoY29ubmVjdFRleHQpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGNvcHlyaWdodEluZm8oKSk7XHJcbiAgICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG5jb25zdCBjb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChuYXZCYXIoKSk7XHJcblxyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGhvbWUpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKG1lbnUpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xyXG5cclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChmb290ZXIoKSk7XHJcbiAgICBcclxuICAgIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==