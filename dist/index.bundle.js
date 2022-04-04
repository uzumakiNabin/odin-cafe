/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".visible{\r\n    display: block;\r\n}\r\n\r\n.hidden{\r\n    display: none;\r\n}\r\n\r\n\r\n.selected{\r\n    border: 1px solid #0f0;\r\n}\r\n\r\n.unselected{\r\n    border: 0px;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAAA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;;AAGA;IACI,sBAAsB;AAC1B;;AAEA;IACI,WAAW;AACf","sourcesContent":[".visible{\r\n    display: block;\r\n}\r\n\r\n.hidden{\r\n    display: none;\r\n}\r\n\r\n\r\n.selected{\r\n    border: 1px solid #0f0;\r\n}\r\n\r\n.unselected{\r\n    border: 0px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

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

//final contact page
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
//generate menu items from given item name, its description and prize
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

//menu items grouped under espresso
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

//menu items grouped under chocolate
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


//menu items grouped under smoothies
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


//breakfast
const breakfast = () => {
    let component = document.createElement('div');
    component.classList.add('menu-group');

    let header = document.createElement('h3');
    header.classList.add('menu-group-header');
    header.textContent = 'breakfast';

    component.appendChild(header);
    component.appendChild(menuItemGenerator('Breakfast Burritos', 'choice of potato or meat options with salsa, egg and cheese', 524.32));
    component.appendChild(menuItemGenerator('Daily Quiche', 'daily seasonal additions, creamy egg filling, butter crust', 677.74));
    component.appendChild(menuItemGenerator('Breakfast Sandwiches', 
        'english muffin, bagel, croissant, or gluten-free bread, choices include egg/vegan egg, cheese/vegan cheese, meat/vegan sausage, and multiple vegetable options.',
        '474.78 +'));

    return component;
}

//menu page
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");






//function to show/hide elements
const show = component => {
    component.classList.remove('hidden');
    component.classList.add('visible');
}

const hide = component => {
    component.classList.remove('visible');
    component.classList.add('hidden');
}

//function to select/unselect nav links
const select = component => {
    component.classList.add('selected');
}

const unselect = component => {
    component.classList.remove('selected');
}

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
    homeLink.classList.add('nav-link', 'selected');
    homeLink.href = '#';
    homeLink.textContent = 'Home';
    homeLink.addEventListener('click', () => {
        select(homeLink);
        unselect(menuLink);
        unselect(contactLink);
        show(_pages_home__WEBPACK_IMPORTED_MODULE_0__["default"]);
        hide(_pages_menu__WEBPACK_IMPORTED_MODULE_1__["default"]);
        hide(_pages_contact__WEBPACK_IMPORTED_MODULE_2__["default"]);
    });

    //menu option
    let menuLink = document.createElement('a');
    menuLink.classList.add('nav-link');
    menuLink.href = '#';
    menuLink.textContent = 'Menu';
    menuLink.addEventListener('click', () => {
        select(menuLink);
        unselect(contactLink);
        unselect(homeLink);
        show(_pages_menu__WEBPACK_IMPORTED_MODULE_1__["default"]);
        hide(_pages_contact__WEBPACK_IMPORTED_MODULE_2__["default"]);
        hide(_pages_home__WEBPACK_IMPORTED_MODULE_0__["default"]);
    });

    //contact option
    let contactLink = document.createElement('a');
    contactLink.classList.add('nav-link');
    contactLink.href = '#';
    contactLink.textContent = 'Contact';
    contactLink.addEventListener('click', () => {
        select(contactLink);
        unselect(homeLink);
        unselect(menuLink);
        show(_pages_contact__WEBPACK_IMPORTED_MODULE_2__["default"]);
        hide(_pages_home__WEBPACK_IMPORTED_MODULE_0__["default"]);
        hide(_pages_menu__WEBPACK_IMPORTED_MODULE_1__["default"]);
    });

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

    show(_pages_home__WEBPACK_IMPORTED_MODULE_0__["default"]);
    component.appendChild(_pages_home__WEBPACK_IMPORTED_MODULE_0__["default"]);
    hide(_pages_menu__WEBPACK_IMPORTED_MODULE_1__["default"]);
    component.appendChild(_pages_menu__WEBPACK_IMPORTED_MODULE_1__["default"]);
    hide(_pages_contact__WEBPACK_IMPORTED_MODULE_2__["default"]);
    component.appendChild(_pages_contact__WEBPACK_IMPORTED_MODULE_2__["default"]);

    component.appendChild(footer());
    
    return component;
}

document.body.appendChild(container());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNmOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0RBQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7O0FDdEZ4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7O0FDVnJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxNQUFNO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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akM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWNhZmUvLi9zcmMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9vZGluLWNhZmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tY2FmZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tY2FmZS8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzYzNDkiLCJ3ZWJwYWNrOi8vb2Rpbi1jYWZlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tY2FmZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1jYWZlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tY2FmZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWNhZmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWNhZmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWNhZmUvLi9zcmMvcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluLWNhZmUvLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLWNhZmUvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLWNhZmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1jYWZlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tY2FmZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1jYWZlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1jYWZlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1jYWZlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1jYWZlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tY2FmZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi52aXNpYmxle1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbntcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNlbGVjdGVke1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMGYwO1xcclxcbn1cXHJcXG5cXHJcXG4udW5zZWxlY3RlZHtcXHJcXG4gICAgYm9yZGVyOiAwcHg7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi52aXNpYmxle1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbntcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNlbGVjdGVke1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMGYwO1xcclxcbn1cXHJcXG5cXHJcXG4udW5zZWxlY3RlZHtcXHJcXG4gICAgYm9yZGVyOiAwcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNhZmVpbWcgZnJvbSAnLi4vaW1hZ2VzL2NhZmVJbWFnZS5qcGcnO1xyXG5cclxuLy9sb2NhdGlvbiBpbmZvcm1hdGlvblxyXG5jb25zdCBsb2NhdGlvbkluZm8gPSAoKSA9PiB7XHJcbiAgICBsZXQgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24taW5mbycpO1xyXG5cclxuICAgIGxldCBjYWZlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBjYWZlTmFtZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWhlYWRlcicpXHJcbiAgICBjYWZlTmFtZS50ZXh0Q29udGVudCA9ICdDb2ZmZWUgU2hvcCc7XHJcblxyXG4gICAgbGV0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZGV0YWlscycpO1xyXG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICcxMTAxMTd0aCBTdCBOVyBXYXNoaW5ndG9uLCBEQyAyMDAzNic7XHJcblxyXG4gICAgbGV0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcGhvbmUuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1kZXRhaWxzJywgJ2NvbnRhY3QtbGluaycpO1xyXG4gICAgcGhvbmUudGV4dENvbnRlbnQgPSAnKDEyMykgNDU2LTc4OTAnO1xyXG5cclxuICAgIGxldCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGVtYWlsLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZGV0YWlscycsICdjb250YWN0LWxpbmsnKTtcclxuICAgIGVtYWlsLnRleHRDb250ZW50ID0gJ2luZm9AY29mZmVlc2hvcC5jb20nO1xyXG5cclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChjYWZlTmFtZSk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQocGhvbmUpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGVtYWlsKTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG4vL2hvdXJzIG9wZW4gaW5mb3JtYXRpb25cclxuY29uc3QgaG91cnNPcGVuID0gKCkgPT4ge1xyXG4gICAgbGV0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ2hvdXJzLW9wZW4nKTtcclxuXHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1oZWFkZXInKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0hvdXJzJztcclxuXHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1kZXRhaWxzJyk7XHJcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gJ01vbmRheSAtIEZyaWRheTogN2FtIC0gM3BtIFxcbiBTYXR1cmRheSAtIFN1bmRheTogQ2xvc2VkJztcclxuXHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbi8vY29udGFjdCBpbmZvIGFuZCBob3VycyBvcGVuIGluZm8gY29tYmluZWRcclxuY29uc3QgY29udGFjdEluZm8gPSAoKSA9PiB7XHJcbiAgICBsZXQgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pbmZvJyk7XHJcblxyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGxvY2F0aW9uSW5mbygpKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChob3Vyc09wZW4oKSk7XHJcblxyXG4gICAgbGV0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2NvbnRhY3QtYnV0dG9uJyk7XHJcbiAgICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnO1xyXG5cclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG4vL2NhZmUgaW1hZ2VcclxuY29uc3QgY2FmZUltYWdlID0gKCkgPT4ge1xyXG4gICAgbGV0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ2NhZmUtaW1hZ2UnKTtcclxuICAgIGNvbXBvbmVudC5zcmMgPSBjYWZlaW1nO1xyXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG5cclxuLy9maW5hbCBjb250YWN0IHBhZ2VcclxuY29uc3QgY29udGFjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKCkpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGNhZmVJbWFnZSgpKTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0KCk7IiwiY29uc3QgaG9tZSA9ICgpID0+IHtcclxuICAgIGxldCBjb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKCdob21lLWNvbnRhaW5lcicpO1xyXG4gICAgbGV0IHF1b3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcXVvdGUuY2xhc3NMaXN0LmFkZCgncXVvdGUnKTtcclxuICAgIHF1b3RlLnRleHRDb250ZW50ID0gJ1xcXCJPbmNlIHlvdSB3YWtlIHVwIGFuZCBzbWVsbCB0aGUgY29mZmVlLCBpdFxcJ3MgaGFyZCB0byBnbyBiYWNrIHRvIHNsZWVwLlxcXCInO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKHF1b3RlKTtcclxuICAgIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWUoKTsiLCIvL2dlbmVyYXRlIG1lbnUgaXRlbXMgZnJvbSBnaXZlbiBpdGVtIG5hbWUsIGl0cyBkZXNjcmlwdGlvbiBhbmQgcHJpemVcclxuY29uc3QgbWVudUl0ZW1HZW5lcmF0b3IgPSAobmFtZSwgZGVzYywgcHJpemUpID0+IHtcclxuICAgIGxldCBjb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcclxuXHJcbiAgICBsZXQgbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBuYW1lRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtZW51LW5hbWUnKTtcclxuICAgIG5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gbmFtZTtcclxuXHJcbiAgICBsZXQgZGVzY0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkZXNjRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtZW51LWRlc2MnKTtcclxuICAgIGRlc2NFbGVtZW50LnRleHRDb250ZW50ID0gZGVzYztcclxuXHJcbiAgICBsZXQgcHJpemVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcHJpemVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtcHJpemUnKTtcclxuICAgIHByaXplRWxlbWVudC50ZXh0Q29udGVudCA9IGBScy4gJHtwcml6ZX1gO1xyXG5cclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChuYW1lRWxlbWVudCk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQoZGVzY0VsZW1lbnQpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKHByaXplRWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG5cclxuLy9tZW51IGl0ZW1zIGdyb3VwZWQgdW5kZXIgZXNwcmVzc29cclxuY29uc3QgZXNwcmVzc28gPSAoKSA9PiB7XHJcbiAgICBsZXQgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1ncm91cCcpO1xyXG5cclxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtZ3JvdXAtaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnZXNwcmVzc28nO1xyXG5cclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtR2VuZXJhdG9yKCdFc3ByZXNzbycsICdBIHZlcnkgc3Ryb25nIGNvZmZlZSBicmV3ZWQgcmFwaWRseSBhbiBvdW5jZSBhdCBhIHRpbWUuJywgMzk5Ljg4KSk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1HZW5lcmF0b3IoJ0NhcHB1Y2Npbm8nLCAnRXNwcmVzc28gd2l0aCBmb2FtZWQgbWlsaycsIDUyNC4zMSkpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtR2VuZXJhdG9yKCdDb3J0YWRvJywgJ0VzcHJlc3NvIHdpdGggZm9hbWVkIG1pbGsnLCA0OTIuOTApKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChtZW51SXRlbUdlbmVyYXRvcignTWFjY2hpYXRvJywgJ0VzcHJlc3NvIG1hcmtlZCB3aXRoIGZvYW0nLCA0NjIuNzApKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChtZW51SXRlbUdlbmVyYXRvcignQW1lcmljYW5vJywgJ0VzcHJlc3NvIGFuZCBob3Qgd2F0ZXInLCA0MDcuMTMpKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChtZW51SXRlbUdlbmVyYXRvcignQ29sZCBCcmV3JywgJ0NvbGQgYnJld2VkIG9mZmVlIHN0ZWVwZWQgb3ZlciAxOCBob3VycycsIDM5OS44OCkpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtR2VuZXJhdG9yKCdDYWZlIEF1IExhaXQnLCAnU3BlY2lhbCBibGVuZCB3aXRoIHN0ZWFtZWQgbWlsaycsIDM2OS42OCkpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtR2VuZXJhdG9yKCdMYXR0ZScsICdFc3ByZXNzbyB3aXRoIHN0ZWFtZWQgbWlsaycsIDUyNC4zMikpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtR2VuZXJhdG9yKCdNYXBsZSBMZWFmIExhdHRlJywgJ0VzcHJlc3NvLCBob3VzZSBtYWRlIG1hcGxlIHN5cnVwIGFuZCBzdGVhbWVkIG1pbGsnLCA1ODQuNzIpKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChtZW51SXRlbUdlbmVyYXRvcignQ2hhZ2EgTGF0dGUnLCAnRXNwcmVzc28sIGNoYWdhIG11c2hyb29tIHBvd2RlciB3aXRoIGEgZGFzaCBvZiBjb2NvYSBhbmQgY2lubmFtb24gYW5kIHN0ZWFtZWQgbWlsaycsIDgxMy4wNSkpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtR2VuZXJhdG9yKCdNZXhpY2FuIE1vY2hhJywgJ0VzcHJlc3NvIHdpdGggSWJhcnJhIGNob2NvbGF0ZSBhbmQgc3RlYW1lZCBtaWxrJywgNTg0LjcyKSk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1HZW5lcmF0b3IoJ01vY2hhJywgJ0VzcHJlc3NvIHdpdGggY29jb2EgYW5kIHN0ZWFtZWQgbWlsaycsIDU4NC43MikpO1xyXG5cclxuICAgIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbi8vbWVudSBpdGVtcyBncm91cGVkIHVuZGVyIGNob2NvbGF0ZVxyXG5jb25zdCBjaG9jb2xhdGUgPSAoKSA9PiB7XHJcbiAgICBsZXQgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1ncm91cCcpO1xyXG5cclxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtZ3JvdXAtaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnY2hvY29sYXRlICYgdGVhJztcclxuXHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChtZW51SXRlbUdlbmVyYXRvcignSG90IFRlYScsICdTZWxlY3Rpb24gb2Ygb3ZlciAxMCBjYXJlZnVsbHkgc2VsZWN0ZWQgbG9vc2UgbGVhZiB0ZWFzJywgMzk5Ljg4KSk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1HZW5lcmF0b3IoJ0ljZWQgVGVhIChCbGFjaywgRmlqaSBHcmVlbiwgb3IgQ3JhbmJlcnJ5IEhpYmlzY3VzKScsICcnLCAzNjkuNjgpKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChtZW51SXRlbUdlbmVyYXRvcignTWF0Y2hhIExhdHRlJywgJ01hdGNoYSB0ZWEgd2l0aCBzdGVhbWVkIG1pbGsnLCA1NTUuNzMpKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChtZW51SXRlbUdlbmVyYXRvcignQ2hhaSBMYXR0ZScsICdDbG91ZCBDaGFpIHdpdGggc3RlYW1lZCBtaWxrJywgNTI0LjMyKSk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1HZW5lcmF0b3IoJ0xvbmRvbiBGb2cnLCAnRWFybCBHcmV5IHRlYSBzd2VldGVuZWQgd2l0aCB2YW5pbGxhLCBhbmQgc3RlYW1lZCBtaWxrJywgNTg0LjcyKSk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1HZW5lcmF0b3IoJ0dvbGRlbiBNaWxrJywgJ1R1cm1lcmljLCBnaW5nZXIsIGFuZCB3YXJtaW5nIHNwaWNlcyBzdGVhbWVkIHRvZ2V0aGVyIHdpdGggb2F0IG1pbGsgYW5kIGEgdG91Y2ggb2YgdmFuaWxsYScsIDYzNS40NikpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtR2VuZXJhdG9yKCdIb3QgQ2hvY29sYXRlJywgJ0NvY29hIHdpdGggc3RlYW1lZCBtaWxrJywgNDMxLjI5KSk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1HZW5lcmF0b3IoJ0l0YWxpYW4gU29kYScsICcnLCA0OTIuOSkpO1xyXG5cclxuICAgIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcblxyXG4vL21lbnUgaXRlbXMgZ3JvdXBlZCB1bmRlciBzbW9vdGhpZXNcclxuY29uc3Qgc21vb3RoaWVzID0gKCkgPT4ge1xyXG4gICAgbGV0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtZ3JvdXAnKTtcclxuXHJcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdtZW51LWdyb3VwLWhlYWRlcicpO1xyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ3Ntb290aGllcyc7XHJcblxyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1HZW5lcmF0b3IoJ0JlcnJ5IEFudGlveGlkYW50JywgJ1N0cmF3YmVycmllcywgcmFzcGJlcnJpZXMsIGJsdWViZXJyaWVzLCBjaGlhIHNlZWRzLCBhcHBsZSBqdWljZScsIDgwMC45NykpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtR2VuZXJhdG9yKCdDbGVhbiBHcmVlbicsICdLYWxlLCBzcGluYWNoLCBiYW5hbmEsIHBpbmVhcHBsZSwgc3BpcnVsaW5hLCBjaGlhIHNlZWRzLCBvYXQgbWlsaycsIDgwMC45NykpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtR2VuZXJhdG9yKCdUcm9waWNhbCBFbmVyZ3knLCAnQmFuYW5hLCBtYW5nbywgcGluZWFwcGxlLCBjb2NvbnV0LCBjb2NvbnV0IG1pbGssIHBlYSBwcm90ZWluJywgODAwLjk3KSk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1HZW5lcmF0b3IoJ1N0cmF3YmVycnkgQmFuYW5hJywgJ1N0cmF3YmVycnksIGJhbmFuYSwgb2F0IG1pbGsnLCA4MDAuOTcpKTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG5cclxuLy9icmVha2Zhc3RcclxuY29uc3QgYnJlYWtmYXN0ID0gKCkgPT4ge1xyXG4gICAgbGV0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtZ3JvdXAnKTtcclxuXHJcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdtZW51LWdyb3VwLWhlYWRlcicpO1xyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ2JyZWFrZmFzdCc7XHJcblxyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1HZW5lcmF0b3IoJ0JyZWFrZmFzdCBCdXJyaXRvcycsICdjaG9pY2Ugb2YgcG90YXRvIG9yIG1lYXQgb3B0aW9ucyB3aXRoIHNhbHNhLCBlZ2cgYW5kIGNoZWVzZScsIDUyNC4zMikpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtR2VuZXJhdG9yKCdEYWlseSBRdWljaGUnLCAnZGFpbHkgc2Vhc29uYWwgYWRkaXRpb25zLCBjcmVhbXkgZWdnIGZpbGxpbmcsIGJ1dHRlciBjcnVzdCcsIDY3Ny43NCkpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtR2VuZXJhdG9yKCdCcmVha2Zhc3QgU2FuZHdpY2hlcycsIFxyXG4gICAgICAgICdlbmdsaXNoIG11ZmZpbiwgYmFnZWwsIGNyb2lzc2FudCwgb3IgZ2x1dGVuLWZyZWUgYnJlYWQsIGNob2ljZXMgaW5jbHVkZSBlZ2cvdmVnYW4gZWdnLCBjaGVlc2UvdmVnYW4gY2hlZXNlLCBtZWF0L3ZlZ2FuIHNhdXNhZ2UsIGFuZCBtdWx0aXBsZSB2ZWdldGFibGUgb3B0aW9ucy4nLFxyXG4gICAgICAgICc0NzQuNzggKycpKTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG4vL21lbnUgcGFnZVxyXG5jb25zdCBtZW51ID0gKCkgPT4ge1xyXG4gICAgbGV0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQoZXNwcmVzc28oKSk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQoY2hvY29sYXRlKCkpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKHNtb290aGllcygpKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChicmVha2Zhc3QoKSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGhvbWUgZnJvbSAnLi9wYWdlcy9ob21lJztcclxuaW1wb3J0IG1lbnUgZnJvbSAnLi9wYWdlcy9tZW51JztcclxuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9wYWdlcy9jb250YWN0JztcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi9pbWFnZXMvbG9nby5qcGcnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LmNzcyc7XHJcblxyXG4vL2Z1bmN0aW9uIHRvIHNob3cvaGlkZSBlbGVtZW50c1xyXG5jb25zdCBzaG93ID0gY29tcG9uZW50ID0+IHtcclxuICAgIGNvbXBvbmVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIGNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcbn1cclxuXHJcbmNvbnN0IGhpZGUgPSBjb21wb25lbnQgPT4ge1xyXG4gICAgY29tcG9uZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgIGNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxufVxyXG5cclxuLy9mdW5jdGlvbiB0byBzZWxlY3QvdW5zZWxlY3QgbmF2IGxpbmtzXHJcbmNvbnN0IHNlbGVjdCA9IGNvbXBvbmVudCA9PiB7XHJcbiAgICBjb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxufVxyXG5cclxuY29uc3QgdW5zZWxlY3QgPSBjb21wb25lbnQgPT4ge1xyXG4gICAgY29tcG9uZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbn1cclxuXHJcbi8vbG9nbyB3aXRoIG5hbWVcclxuY29uc3QgbG9nb1dpdGhOYW1lID0gKCkgPT4ge1xyXG4gICAgbGV0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGxvZ29JbWcuc3JjID0gbG9nbztcclxuICAgIGxvZ29JbWcuY2xhc3NMaXN0LmFkZCgnaW1nJywgJ21haW4tbG9nby1pbWFnZScpO1xyXG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdtYWluLWxvZ28tbmFtZScpO1xyXG4gICAgbmFtZS50ZXh0Q29udGVudCA9ICdDb2ZmZWUgU2hvcCc7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobmFtZSk7XHJcbiAgICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG4vL25hdmlnYXRpb24gbGlua3NcclxuY29uc3QgbmF2TGlua3MgPSAoKSA9PiB7XHJcbiAgICBsZXQgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnbmF2LWxpbmtzJylcclxuXHJcbiAgICAvL2hvbWUgb3B0aW9uXHJcbiAgICBsZXQgaG9tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBob21lTGluay5jbGFzc0xpc3QuYWRkKCduYXYtbGluaycsICdzZWxlY3RlZCcpO1xyXG4gICAgaG9tZUxpbmsuaHJlZiA9ICcjJztcclxuICAgIGhvbWVMaW5rLnRleHRDb250ZW50ID0gJ0hvbWUnO1xyXG4gICAgaG9tZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgc2VsZWN0KGhvbWVMaW5rKTtcclxuICAgICAgICB1bnNlbGVjdChtZW51TGluayk7XHJcbiAgICAgICAgdW5zZWxlY3QoY29udGFjdExpbmspO1xyXG4gICAgICAgIHNob3coaG9tZSk7XHJcbiAgICAgICAgaGlkZShtZW51KTtcclxuICAgICAgICBoaWRlKGNvbnRhY3QpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9tZW51IG9wdGlvblxyXG4gICAgbGV0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbWVudUxpbmsuY2xhc3NMaXN0LmFkZCgnbmF2LWxpbmsnKTtcclxuICAgIG1lbnVMaW5rLmhyZWYgPSAnIyc7XHJcbiAgICBtZW51TGluay50ZXh0Q29udGVudCA9ICdNZW51JztcclxuICAgIG1lbnVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHNlbGVjdChtZW51TGluayk7XHJcbiAgICAgICAgdW5zZWxlY3QoY29udGFjdExpbmspO1xyXG4gICAgICAgIHVuc2VsZWN0KGhvbWVMaW5rKTtcclxuICAgICAgICBzaG93KG1lbnUpO1xyXG4gICAgICAgIGhpZGUoY29udGFjdCk7XHJcbiAgICAgICAgaGlkZShob21lKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vY29udGFjdCBvcHRpb25cclxuICAgIGxldCBjb250YWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGNvbnRhY3RMaW5rLmNsYXNzTGlzdC5hZGQoJ25hdi1saW5rJyk7XHJcbiAgICBjb250YWN0TGluay5ocmVmID0gJyMnO1xyXG4gICAgY29udGFjdExpbmsudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XHJcbiAgICBjb250YWN0TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBzZWxlY3QoY29udGFjdExpbmspO1xyXG4gICAgICAgIHVuc2VsZWN0KGhvbWVMaW5rKTtcclxuICAgICAgICB1bnNlbGVjdChtZW51TGluayk7XHJcbiAgICAgICAgc2hvdyhjb250YWN0KTtcclxuICAgICAgICBoaWRlKGhvbWUpO1xyXG4gICAgICAgIGhpZGUobWVudSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQoaG9tZUxpbmspO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKG1lbnVMaW5rKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChjb250YWN0TGluayk7XHJcbiAgICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG4vL25hdiBiYXJcclxuY29uc3QgbmF2QmFyID0gKCkgPT4ge1xyXG4gICAgbGV0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGxvZ29XaXRoTmFtZSgpKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChuYXZMaW5rcygpKTtcclxuICAgIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbi8vZ2VuZXJhdGUgc29jaWFsIGxpbmsgaWNvblxyXG5jb25zdCBnZW5lcmF0ZVNvY2lhbCA9IChuYW1lLCBsaW5rKSA9PiB7XHJcbiAgICBsZXQgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgY29tcG9uZW50LmhyZWYgPSBsaW5rO1xyXG4gICAgbGV0IGNvbXBvbmVudExvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBjb21wb25lbnRMb2dvLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgYGZhLSR7bmFtZX1gKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChjb21wb25lbnRMb2dvKTtcclxuICAgIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbi8vc29jaWFsIGxpbmtzXHJcbmNvbnN0IHNvY2lhbExpbmtzID0gKCkgPT4ge1xyXG4gICAgbGV0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ3NvY2lhbC1saW5rcycpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGdlbmVyYXRlU29jaWFsKCdmYWNlYm9vaycsICcjJykpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGdlbmVyYXRlU29jaWFsKCdpbnN0YWdyYW0nLCAnIycpKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChnZW5lcmF0ZVNvY2lhbCgndHdpdHRlcicsICcjJykpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGdlbmVyYXRlU29jaWFsKCd5b3V0dWJlJywgJyMnKSk7XHJcbiAgICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG4vL2NvcHlyaWdodCBpbmZvcm1hdGlvblxyXG5jb25zdCBjb3B5cmlnaHRJbmZvID0gKCkgPT4ge1xyXG4gICAgbGV0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKCdjb3B5cmlnaHQtaW5mbycsICdmb290ZXItdGV4dCcpO1xyXG4gICAgbGV0IHllYXIgPSAnMjAyMSc7XHJcbiAgICBjb21wb25lbnQuaW5uZXJIVE1MID0gYFxcdTAwQTkgJHt5ZWFyfSBDb2ZmZWUgU2hvcCAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRgO1xyXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG5cclxuLy9mb290ZXJcclxuY29uc3QgZm9vdGVyID0gKCkgPT4ge1xyXG4gICAgbGV0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gICAgbGV0IGNvbm5lY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29ubmVjdFRleHQuY2xhc3NMaXN0LmFkZCgnY29ubmVjdC10ZXh0JywgJ2Zvb3Rlci10ZXh0Jyk7XHJcbiAgICBjb25uZWN0VGV4dC50ZXh0Q29udGVudCA9ICdjb25uZWN0IHdpdGggdXMhJztcclxuICAgIGNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChzb2NpYWxMaW5rcygpKTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChjb25uZWN0VGV4dCk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQoY29weXJpZ2h0SW5mbygpKTtcclxuICAgIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKG5hdkJhcigpKTtcclxuXHJcbiAgICBzaG93KGhvbWUpO1xyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGhvbWUpO1xyXG4gICAgaGlkZShtZW51KTtcclxuICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChtZW51KTtcclxuICAgIGhpZGUoY29udGFjdCk7XHJcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQoY29udGFjdCk7XHJcblxyXG4gICAgY29tcG9uZW50LmFwcGVuZENoaWxkKGZvb3RlcigpKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9