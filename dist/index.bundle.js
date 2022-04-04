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
const menuItemGenerator = (name, desc, prize) => {
    let component = document.createElement('div');
    component.classList.add('menu-item');

    let nameElement = document.createElement('p');
    nameElement.classList.add('menu-name');
    nameElement.textContent = name;

    let descElement = document.createElement('p');
    descElement.classList.add('menu-desc');
    descElement.textContent = desc;

    let prizeElement = document.createElement('p');
    prizeElement.classList.add('menu-prize');
    prizeElement.textContent = `Rs. ${prize}`;

    component.appendChild(nameElement);
    component.appendChild(descElement);
    component.appendChild(prizeElement);

    return component;
}

const espresso = () => {
    let component = document.createElement('div');
    component.classList.add('menu-group');

    let header = document.createElement('h3');
    header.classList.add('menu-group-header');
    header.textContent = 'espresso';

    component.appendChild(header);
    component.appendChild(menuItemGenerator('Espresso', 'A very strong coffee brewed rapidly an ounce at a time.', 399.88));
    component.appendChild(menuItemGenerator('Cappuccino', 'Espresso with foamed milk', 524.31));
    component.appendChild(menuItemGenerator('Cortado', 'Espresso with foamed milk', 492.90));
    component.appendChild(menuItemGenerator('Macchiato', 'Espresso marked with foam', 462.70));
    component.appendChild(menuItemGenerator('Americano', 'Espresso and hot water', 407.13));
    component.appendChild(menuItemGenerator('Cold Brew', 'Cold brewed offee steeped over 18 hours', 399.88));
    component.appendChild(menuItemGenerator('Cafe Au Lait', 'Special blend with steamed milk', 369.68));
    component.appendChild(menuItemGenerator('Latte', 'Espresso with steamed milk', 524.32));
    component.appendChild(menuItemGenerator('Maple Leaf Latte', 'Espresso, house made maple syrup and steamed milk', 584.72));
    component.appendChild(menuItemGenerator('Chaga Latte', 'Espresso, chaga mushroom powder with a dash of cocoa and cinnamon and steamed milk', 813.05));
    component.appendChild(menuItemGenerator('Mexican Mocha', 'Espresso with Ibarra chocolate and steamed milk', 584.72));
    component.appendChild(menuItemGenerator('Mocha', 'Espresso with cocoa and steamed milk', 584.72));

    return component;
}

const chocolate = () => {
    let component = document.createElement('div');
    component.classList.add('menu-group');

    let header = document.createElement('h3');
    header.classList.add('menu-group-header');
    header.textContent = 'chocolate & tea';

    component.appendChild(header);
    component.appendChild(menuItemGenerator('Hot Tea', 'Selection of over 10 carefully selected loose leaf teas', 399.88));
    component.appendChild(menuItemGenerator('Iced Tea (Black, Fiji Green, or Cranberry Hibiscus)', '', 369.68));
    component.appendChild(menuItemGenerator('Matcha Latte', 'Matcha tea with steamed milk', 555.73));
    component.appendChild(menuItemGenerator('Chai Latte', 'Cloud Chai with steamed milk', 524.32));
    component.appendChild(menuItemGenerator('London Fog', 'Earl Grey tea sweetened with vanilla, and steamed milk', 584.72));
    component.appendChild(menuItemGenerator('Golden Milk', 'Turmeric, ginger, and warming spices steamed together with oat milk and a touch of vanilla', 635.46));
    component.appendChild(menuItemGenerator('Hot Chocolate', 'Cocoa with steamed milk', 431.29));
    component.appendChild(menuItemGenerator('Italian Soda', '', 492.9));

    return component;
}

const smoothies = () => {
    let component = document.createElement('div');
    component.classList.add('menu-group');

    let header = document.createElement('h3');
    header.classList.add('menu-group-header');
    header.textContent = 'smoothies';

    component.appendChild(header);
    component.appendChild(menuItemGenerator('Berry Antioxidant', 'Strawberries, raspberries, blueberries, chia seeds, apple juice', 800.97));
    component.appendChild(menuItemGenerator('Clean Green', 'Kale, spinach, banana, pineapple, spirulina, chia seeds, oat milk', 800.97));
    component.appendChild(menuItemGenerator('Tropical Energy', 'Banana, mango, pineapple, coconut, coconut milk, pea protein', 800.97));
    component.appendChild(menuItemGenerator('Strawberry Banana', 'Strawberry, banana, oat milk', 800.97));

    return component;
}

const breakfast = () => {
    let component = document.createElement('div');
    component.classList.add('menu-group');

    let header = document.createElement('h3');
    header.classList.add('menu-group-header');
    header.textContent = 'breakfast';

    component.appendChild(header);
    component.appendChild(menuItemGenerator('Breakfast Burritos', 'choice of potato or meat options with salsa, egg and cheese', 524.32));
    component.appendChild(menuItemGenerator('Daily Quiche', 'daily seasonal additions, creamy egg filling, butter crust', 677.74));
    component.appendChild(menuItemGenerator('Breakfast Sandwiches', 'english muffin, bagel, croissant, or gluten-free bread, choices include egg/vegan egg, cheese/vegan cheese, meat/vegan sausage, and multiple vegetable options.', '474.78 +'));

    return component;
}

const menu = () => {
    let component = document.createElement('div');
    component.classList.add('menu-container');
    component.appendChild(espresso());
    component.appendChild(chocolate());
    component.appendChild(smoothies());
    component.appendChild(breakfast());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxLQUFLO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsTUFBTTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbURBQUk7QUFDOUIsMEJBQTBCLG1EQUFJO0FBQzlCLDBCQUEwQixzREFBTztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tY2FmZS8uL3NyYy9wYWdlcy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tY2FmZS8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL29kaW4tY2FmZS8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL29kaW4tY2FmZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWNhZmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tY2FmZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tY2FmZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tY2FmZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tY2FmZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLWNhZmUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNhZmVpbWcgZnJvbSAnLi4vaW1hZ2VzL2NhZmVJbWFnZS5qcGcnO1xyXG5cclxuLy9sb2NhdGlvbiBpbmZvcm1hdGlvblxyXG5jb25zdCBsb2NhdGlvbkluZm8gPSAoKSA9PiB7XHJcbiAgICBsZXQgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24taW5mbycpO1xyXG5cclxuICAgIGxldCBjYWZlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBjYWZlTmFtZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWhlYWRlcicpXHJcbiAgICBjYWZlTmFtZS50ZXh0Q29udGVudCA9ICdDb2ZmZWUgU2hvcCc7XHJcblxyXG4gICAgbGV0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZGV0YWlscycpO1xyXG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICcxMTAxMTd0aCBTdCBOVyBXYXNoaW5ndG9uLCBEQyAyMDAzNic7XHJcblxyXG4gICAgbGV0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcGhvbmUuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1kZXRhaWxzJywgJ2NvbnRhY3QtbGluaycpO1xyXG4gICAgcGhvbmUudGV4dENvbnRlbnQgPSAnKDEyMykgNDU2LTc4OTAnO1xyXG5cclxuICAgIGxldCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGVtYWlsLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZGV0YWlscycsICdjb250YWN0LWxpbmsnKTtcclxuICAgIGVtYWlsLnRleHRDb250ZW50ID0gJ2luZm9AY29mZmVlc2hvcC5jb20nO1xyXG5cclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChjYWZlTmFtZSk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQocGhvbmUpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGVtYWlsKTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG4vL2hvdXJzIG9wZW4gaW5mb3JtYXRpb25cclxuY29uc3QgaG91cnNPcGVuID0gKCkgPT4ge1xyXG4gICAgbGV0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ2hvdXJzLW9wZW4nKTtcclxuXHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1oZWFkZXInKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0hvdXJzJztcclxuXHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1kZXRhaWxzJyk7XHJcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gJ01vbmRheSAtIEZyaWRheTogN2FtIC0gM3BtIFxcbiBTYXR1cmRheSAtIFN1bmRheTogQ2xvc2VkJztcclxuXHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbi8vY29udGFjdCBpbmZvIGFuZCBob3VycyBvcGVuIGluZm8gY29tYmluZWRcclxuY29uc3QgY29udGFjdEluZm8gPSAoKSA9PiB7XHJcbiAgICBsZXQgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pbmZvJyk7XHJcblxyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGxvY2F0aW9uSW5mbygpKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChob3Vyc09wZW4oKSk7XHJcblxyXG4gICAgbGV0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2NvbnRhY3QtYnV0dG9uJyk7XHJcbiAgICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnO1xyXG5cclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG4vL2NhZmUgaW1hZ2VcclxuY29uc3QgY2FmZUltYWdlID0gKCkgPT4ge1xyXG4gICAgbGV0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ2NhZmUtaW1hZ2UnKTtcclxuICAgIGNvbXBvbmVudC5zcmMgPSBjYWZlaW1nO1xyXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG5cclxuY29uc3QgY29udGFjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKCkpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGNhZmVJbWFnZSgpKTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0KCk7IiwiY29uc3QgaG9tZSA9ICgpID0+IHtcclxuICAgIGxldCBjb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKCdob21lLWNvbnRhaW5lcicpO1xyXG4gICAgbGV0IHF1b3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcXVvdGUuY2xhc3NMaXN0LmFkZCgncXVvdGUnKTtcclxuICAgIHF1b3RlLnRleHRDb250ZW50ID0gJ1xcXCJPbmNlIHlvdSB3YWtlIHVwIGFuZCBzbWVsbCB0aGUgY29mZmVlLCBpdFxcJ3MgaGFyZCB0byBnbyBiYWNrIHRvIHNsZWVwLlxcXCInO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKHF1b3RlKTtcclxuICAgIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWUoKTsiLCJjb25zdCBtZW51SXRlbUdlbmVyYXRvciA9IChuYW1lLCBkZXNjLCBwcml6ZSkgPT4ge1xyXG4gICAgbGV0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xyXG5cclxuICAgIGxldCBuYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG5hbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtbmFtZScpO1xyXG4gICAgbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cclxuICAgIGxldCBkZXNjRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGRlc2NFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtZGVzYycpO1xyXG4gICAgZGVzY0VsZW1lbnQudGV4dENvbnRlbnQgPSBkZXNjO1xyXG5cclxuICAgIGxldCBwcml6ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwcml6ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1wcml6ZScpO1xyXG4gICAgcHJpemVFbGVtZW50LnRleHRDb250ZW50ID0gYFJzLiAke3ByaXplfWA7XHJcblxyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKG5hbWVFbGVtZW50KTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChkZXNjRWxlbWVudCk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQocHJpemVFbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG5jb25zdCBlc3ByZXNzbyA9ICgpID0+IHtcclxuICAgIGxldCBjb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKCdtZW51LWdyb3VwJyk7XHJcblxyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1ncm91cC1oZWFkZXInKTtcclxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdlc3ByZXNzbyc7XHJcblxyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1HZW5lcmF0b3IoJ0VzcHJlc3NvJywgJ0EgdmVyeSBzdHJvbmcgY29mZmVlIGJyZXdlZCByYXBpZGx5IGFuIG91bmNlIGF0IGEgdGltZS4nLCAzOTkuODgpKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChtZW51SXRlbUdlbmVyYXRvcignQ2FwcHVjY2lubycsICdFc3ByZXNzbyB3aXRoIGZvYW1lZCBtaWxrJywgNTI0LjMxKSk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1HZW5lcmF0b3IoJ0NvcnRhZG8nLCAnRXNwcmVzc28gd2l0aCBmb2FtZWQgbWlsaycsIDQ5Mi45MCkpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtR2VuZXJhdG9yKCdNYWNjaGlhdG8nLCAnRXNwcmVzc28gbWFya2VkIHdpdGggZm9hbScsIDQ2Mi43MCkpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtR2VuZXJhdG9yKCdBbWVyaWNhbm8nLCAnRXNwcmVzc28gYW5kIGhvdCB3YXRlcicsIDQwNy4xMykpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtR2VuZXJhdG9yKCdDb2xkIEJyZXcnLCAnQ29sZCBicmV3ZWQgb2ZmZWUgc3RlZXBlZCBvdmVyIDE4IGhvdXJzJywgMzk5Ljg4KSk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1HZW5lcmF0b3IoJ0NhZmUgQXUgTGFpdCcsICdTcGVjaWFsIGJsZW5kIHdpdGggc3RlYW1lZCBtaWxrJywgMzY5LjY4KSk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1HZW5lcmF0b3IoJ0xhdHRlJywgJ0VzcHJlc3NvIHdpdGggc3RlYW1lZCBtaWxrJywgNTI0LjMyKSk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1HZW5lcmF0b3IoJ01hcGxlIExlYWYgTGF0dGUnLCAnRXNwcmVzc28sIGhvdXNlIG1hZGUgbWFwbGUgc3lydXAgYW5kIHN0ZWFtZWQgbWlsaycsIDU4NC43MikpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtR2VuZXJhdG9yKCdDaGFnYSBMYXR0ZScsICdFc3ByZXNzbywgY2hhZ2EgbXVzaHJvb20gcG93ZGVyIHdpdGggYSBkYXNoIG9mIGNvY29hIGFuZCBjaW5uYW1vbiBhbmQgc3RlYW1lZCBtaWxrJywgODEzLjA1KSk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1HZW5lcmF0b3IoJ01leGljYW4gTW9jaGEnLCAnRXNwcmVzc28gd2l0aCBJYmFycmEgY2hvY29sYXRlIGFuZCBzdGVhbWVkIG1pbGsnLCA1ODQuNzIpKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChtZW51SXRlbUdlbmVyYXRvcignTW9jaGEnLCAnRXNwcmVzc28gd2l0aCBjb2NvYSBhbmQgc3RlYW1lZCBtaWxrJywgNTg0LjcyKSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG5cclxuY29uc3QgY2hvY29sYXRlID0gKCkgPT4ge1xyXG4gICAgbGV0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtZ3JvdXAnKTtcclxuXHJcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdtZW51LWdyb3VwLWhlYWRlcicpO1xyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ2Nob2NvbGF0ZSAmIHRlYSc7XHJcblxyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1HZW5lcmF0b3IoJ0hvdCBUZWEnLCAnU2VsZWN0aW9uIG9mIG92ZXIgMTAgY2FyZWZ1bGx5IHNlbGVjdGVkIGxvb3NlIGxlYWYgdGVhcycsIDM5OS44OCkpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtR2VuZXJhdG9yKCdJY2VkIFRlYSAoQmxhY2ssIEZpamkgR3JlZW4sIG9yIENyYW5iZXJyeSBIaWJpc2N1cyknLCAnJywgMzY5LjY4KSk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1HZW5lcmF0b3IoJ01hdGNoYSBMYXR0ZScsICdNYXRjaGEgdGVhIHdpdGggc3RlYW1lZCBtaWxrJywgNTU1LjczKSk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1HZW5lcmF0b3IoJ0NoYWkgTGF0dGUnLCAnQ2xvdWQgQ2hhaSB3aXRoIHN0ZWFtZWQgbWlsaycsIDUyNC4zMikpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtR2VuZXJhdG9yKCdMb25kb24gRm9nJywgJ0VhcmwgR3JleSB0ZWEgc3dlZXRlbmVkIHdpdGggdmFuaWxsYSwgYW5kIHN0ZWFtZWQgbWlsaycsIDU4NC43MikpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtR2VuZXJhdG9yKCdHb2xkZW4gTWlsaycsICdUdXJtZXJpYywgZ2luZ2VyLCBhbmQgd2FybWluZyBzcGljZXMgc3RlYW1lZCB0b2dldGhlciB3aXRoIG9hdCBtaWxrIGFuZCBhIHRvdWNoIG9mIHZhbmlsbGEnLCA2MzUuNDYpKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChtZW51SXRlbUdlbmVyYXRvcignSG90IENob2NvbGF0ZScsICdDb2NvYSB3aXRoIHN0ZWFtZWQgbWlsaycsIDQzMS4yOSkpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtR2VuZXJhdG9yKCdJdGFsaWFuIFNvZGEnLCAnJywgNDkyLjkpKTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG5jb25zdCBzbW9vdGhpZXMgPSAoKSA9PiB7XHJcbiAgICBsZXQgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1ncm91cCcpO1xyXG5cclxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtZ3JvdXAtaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnc21vb3RoaWVzJztcclxuXHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChtZW51SXRlbUdlbmVyYXRvcignQmVycnkgQW50aW94aWRhbnQnLCAnU3RyYXdiZXJyaWVzLCByYXNwYmVycmllcywgYmx1ZWJlcnJpZXMsIGNoaWEgc2VlZHMsIGFwcGxlIGp1aWNlJywgODAwLjk3KSk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1HZW5lcmF0b3IoJ0NsZWFuIEdyZWVuJywgJ0thbGUsIHNwaW5hY2gsIGJhbmFuYSwgcGluZWFwcGxlLCBzcGlydWxpbmEsIGNoaWEgc2VlZHMsIG9hdCBtaWxrJywgODAwLjk3KSk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1HZW5lcmF0b3IoJ1Ryb3BpY2FsIEVuZXJneScsICdCYW5hbmEsIG1hbmdvLCBwaW5lYXBwbGUsIGNvY29udXQsIGNvY29udXQgbWlsaywgcGVhIHByb3RlaW4nLCA4MDAuOTcpKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChtZW51SXRlbUdlbmVyYXRvcignU3RyYXdiZXJyeSBCYW5hbmEnLCAnU3RyYXdiZXJyeSwgYmFuYW5hLCBvYXQgbWlsaycsIDgwMC45NykpO1xyXG5cclxuICAgIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbmNvbnN0IGJyZWFrZmFzdCA9ICgpID0+IHtcclxuICAgIGxldCBjb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKCdtZW51LWdyb3VwJyk7XHJcblxyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1ncm91cC1oZWFkZXInKTtcclxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdicmVha2Zhc3QnO1xyXG5cclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtR2VuZXJhdG9yKCdCcmVha2Zhc3QgQnVycml0b3MnLCAnY2hvaWNlIG9mIHBvdGF0byBvciBtZWF0IG9wdGlvbnMgd2l0aCBzYWxzYSwgZWdnIGFuZCBjaGVlc2UnLCA1MjQuMzIpKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChtZW51SXRlbUdlbmVyYXRvcignRGFpbHkgUXVpY2hlJywgJ2RhaWx5IHNlYXNvbmFsIGFkZGl0aW9ucywgY3JlYW15IGVnZyBmaWxsaW5nLCBidXR0ZXIgY3J1c3QnLCA2NzcuNzQpKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChtZW51SXRlbUdlbmVyYXRvcignQnJlYWtmYXN0IFNhbmR3aWNoZXMnLCAnZW5nbGlzaCBtdWZmaW4sIGJhZ2VsLCBjcm9pc3NhbnQsIG9yIGdsdXRlbi1mcmVlIGJyZWFkLCBjaG9pY2VzIGluY2x1ZGUgZWdnL3ZlZ2FuIGVnZywgY2hlZXNlL3ZlZ2FuIGNoZWVzZSwgbWVhdC92ZWdhbiBzYXVzYWdlLCBhbmQgbXVsdGlwbGUgdmVnZXRhYmxlIG9wdGlvbnMuJywgJzQ3NC43OCArJykpO1xyXG5cclxuICAgIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbmNvbnN0IG1lbnUgPSAoKSA9PiB7XHJcbiAgICBsZXQgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXInKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChlc3ByZXNzbygpKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChjaG9jb2xhdGUoKSk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQoc21vb3RoaWVzKCkpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGJyZWFrZmFzdCgpKTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51KCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGhvbWUgZnJvbSAnLi9wYWdlcy9ob21lJztcclxuaW1wb3J0IG1lbnUgZnJvbSAnLi9wYWdlcy9tZW51JztcclxuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9wYWdlcy9jb250YWN0JztcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi9pbWFnZXMvbG9nby5qcGcnO1xyXG5cclxuLy9sb2dvIHdpdGggbmFtZVxyXG5jb25zdCBsb2dvV2l0aE5hbWUgPSAoKSA9PiB7XHJcbiAgICBsZXQgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgbG9nb0ltZy5zcmMgPSBsb2dvO1xyXG4gICAgbG9nb0ltZy5jbGFzc0xpc3QuYWRkKCdpbWcnLCAnbWFpbi1sb2dvLWltYWdlJyk7XHJcbiAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ21haW4tbG9nby1uYW1lJyk7XHJcbiAgICBuYW1lLnRleHRDb250ZW50ID0gJ0NvZmZlZSBTaG9wJztcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChsb2dvSW1nKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChuYW1lKTtcclxuICAgIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbi8vbmF2aWdhdGlvbiBsaW5rc1xyXG5jb25zdCBuYXZMaW5rcyA9ICgpID0+IHtcclxuICAgIGxldCBjb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKCduYXYtbGlua3MnKVxyXG5cclxuICAgIC8vaG9tZSBvcHRpb25cclxuICAgIGxldCBob21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGhvbWVMaW5rLmNsYXNzTGlzdC5hZGQoJ25hdi1saW5rJyk7XHJcbiAgICBob21lTGluay5ocmVmID0gJyMnO1xyXG4gICAgaG9tZUxpbmsudGV4dENvbnRlbnQgPSAnSG9tZSc7XHJcbiAgICBob21lTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFsZXJ0KCdob21lIGNsaWNrZWQnKSk7XHJcblxyXG4gICAgLy9tZW51IG9wdGlvblxyXG4gICAgbGV0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbWVudUxpbmsuY2xhc3NMaXN0LmFkZCgnbmF2LWxpbmsnKTtcclxuICAgIG1lbnVMaW5rLmhyZWYgPSAnIyc7XHJcbiAgICBtZW51TGluay50ZXh0Q29udGVudCA9ICdNZW51JztcclxuICAgIG1lbnVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYWxlcnQoJ21lbnUgY2xpY2tlZCcpKTtcclxuXHJcbiAgICAvL2NvbnRhY3Qgb3B0aW9uXHJcbiAgICBsZXQgY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBjb250YWN0TGluay5jbGFzc0xpc3QuYWRkKCduYXYtbGluaycpO1xyXG4gICAgY29udGFjdExpbmsuaHJlZiA9ICcjJztcclxuICAgIGNvbnRhY3RMaW5rLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xyXG4gICAgY29udGFjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBhbGVydCgnY29udGFjdCBjbGlja2VkJykpO1xyXG5cclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChob21lTGluayk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobWVudUxpbmspO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGNvbnRhY3RMaW5rKTtcclxuICAgIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbi8vbmF2IGJhclxyXG5jb25zdCBuYXZCYXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICBjb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJyk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobG9nb1dpdGhOYW1lKCkpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKG5hdkxpbmtzKCkpO1xyXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG5cclxuLy9nZW5lcmF0ZSBzb2NpYWwgbGluayBpY29uXHJcbmNvbnN0IGdlbmVyYXRlU29jaWFsID0gKG5hbWUsIGxpbmspID0+IHtcclxuICAgIGxldCBjb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBjb21wb25lbnQuaHJlZiA9IGxpbms7XHJcbiAgICBsZXQgY29tcG9uZW50TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIGNvbXBvbmVudExvZ28uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCBgZmEtJHtuYW1lfWApO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudExvZ28pO1xyXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG5cclxuLy9zb2NpYWwgbGlua3NcclxuY29uc3Qgc29jaWFsTGlua3MgPSAoKSA9PiB7XHJcbiAgICBsZXQgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnc29jaWFsLWxpbmtzJyk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVTb2NpYWwoJ2ZhY2Vib29rJywgJyMnKSk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVTb2NpYWwoJ2luc3RhZ3JhbScsICcjJykpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGdlbmVyYXRlU29jaWFsKCd0d2l0dGVyJywgJyMnKSk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVTb2NpYWwoJ3lvdXR1YmUnLCAnIycpKTtcclxuICAgIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbi8vY29weXJpZ2h0IGluZm9ybWF0aW9uXHJcbmNvbnN0IGNvcHlyaWdodEluZm8gPSAoKSA9PiB7XHJcbiAgICBsZXQgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ2NvcHlyaWdodC1pbmZvJywgJ2Zvb3Rlci10ZXh0Jyk7XHJcbiAgICBsZXQgeWVhciA9ICcyMDIxJztcclxuICAgIGNvbXBvbmVudC5pbm5lckhUTUwgPSBgXFx1MDBBOSAke3llYXJ9IENvZmZlZSBTaG9wIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZGA7XHJcbiAgICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG4vL2Zvb3RlclxyXG5jb25zdCBmb290ZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICBsZXQgY29ubmVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25uZWN0VGV4dC5jbGFzc0xpc3QuYWRkKCdjb25uZWN0LXRleHQnLCAnZm9vdGVyLXRleHQnKTtcclxuICAgIGNvbm5lY3RUZXh0LnRleHRDb250ZW50ID0gJ2Nvbm5lY3Qgd2l0aCB1cyEnO1xyXG4gICAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKHNvY2lhbExpbmtzKCkpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGNvbm5lY3RUZXh0KTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChjb3B5cmlnaHRJbmZvKCkpO1xyXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG5cclxuY29uc3QgY29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobmF2QmFyKCkpO1xyXG5cclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChob21lKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChtZW51KTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChjb250YWN0KTtcclxuXHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKCkpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcigpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=