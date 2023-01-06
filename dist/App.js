/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/is-buffer/index.js":
      /*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
      /***/ (module) => {
        eval(
          "/*!\n * Determine if an object is a Buffer\n *\n * @author   Feross Aboukhadijeh <https://feross.org>\n * @license  MIT\n */\n\n// The _isBuffer check is for Safari 5-7 support, because it's missing\n// Object.prototype.constructor. Remove this eventually\nmodule.exports = function (obj) {\n  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)\n}\n\nfunction isBuffer (obj) {\n  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)\n}\n\n// For Node v0.10 support. Remove this eventually.\nfunction isSlowBuffer (obj) {\n  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))\n}\n\n\n//# sourceURL=webpack:///./node_modules/is-buffer/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/is-even/index.js":
      /*!***************************************!*\
  !*** ./node_modules/is-even/index.js ***!
  \***************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        eval(
          '/*!\n * is-even <https://github.com/jonschlinkert/is-even>\n *\n * Copyright (c) 2015, 2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nvar isOdd = __webpack_require__(/*! is-odd */ "./node_modules/is-odd/index.js");\n\nmodule.exports = function isEven(i) {\n  return !isOdd(i);\n};\n\n\n//# sourceURL=webpack:///./node_modules/is-even/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/is-odd/index.js":
      /*!**************************************!*\
  !*** ./node_modules/is-odd/index.js ***!
  \**************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        eval(
          "/*!\n * is-odd <https://github.com/jonschlinkert/is-odd>\n *\n * Copyright (c) 2015-2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nvar isNumber = __webpack_require__(/*! is-number */ \"./node_modules/is-odd/node_modules/is-number/index.js\");\n\nmodule.exports = function isOdd(i) {\n  if (!isNumber(i)) {\n    throw new TypeError('is-odd expects a number.');\n  }\n  if (Number(i) !== Math.floor(i)) {\n    throw new RangeError('is-odd expects an integer.');\n  }\n  return !!(~~i & 1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/is-odd/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/is-odd/node_modules/is-number/index.js":
      /*!*************************************************************!*\
  !*** ./node_modules/is-odd/node_modules/is-number/index.js ***!
  \*************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        eval(
          "/*!\n * is-number <https://github.com/jonschlinkert/is-number>\n *\n * Copyright (c) 2014-2015, Jon Schlinkert.\n * Licensed under the MIT License.\n */\n\n\n\nvar typeOf = __webpack_require__(/*! kind-of */ \"./node_modules/is-odd/node_modules/kind-of/index.js\");\n\nmodule.exports = function isNumber(num) {\n  var type = typeOf(num);\n\n  if (type === 'string') {\n    if (!num.trim()) return false;\n  } else if (type !== 'number') {\n    return false;\n  }\n\n  return (num - num + 1) >= 0;\n};\n\n\n//# sourceURL=webpack:///./node_modules/is-odd/node_modules/is-number/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/is-odd/node_modules/kind-of/index.js":
      /*!***********************************************************!*\
  !*** ./node_modules/is-odd/node_modules/kind-of/index.js ***!
  \***********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          "var isBuffer = __webpack_require__(/*! is-buffer */ \"./node_modules/is-buffer/index.js\");\nvar toString = Object.prototype.toString;\n\n/**\n * Get the native `typeof` a value.\n *\n * @param  {*} `val`\n * @return {*} Native javascript type\n */\n\nmodule.exports = function kindOf(val) {\n  // primitivies\n  if (typeof val === 'undefined') {\n    return 'undefined';\n  }\n  if (val === null) {\n    return 'null';\n  }\n  if (val === true || val === false || val instanceof Boolean) {\n    return 'boolean';\n  }\n  if (typeof val === 'string' || val instanceof String) {\n    return 'string';\n  }\n  if (typeof val === 'number' || val instanceof Number) {\n    return 'number';\n  }\n\n  // functions\n  if (typeof val === 'function' || val instanceof Function) {\n    return 'function';\n  }\n\n  // array\n  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {\n    return 'array';\n  }\n\n  // check for instances of RegExp and Date before calling `toString`\n  if (val instanceof RegExp) {\n    return 'regexp';\n  }\n  if (val instanceof Date) {\n    return 'date';\n  }\n\n  // other objects\n  var type = toString.call(val);\n\n  if (type === '[object RegExp]') {\n    return 'regexp';\n  }\n  if (type === '[object Date]') {\n    return 'date';\n  }\n  if (type === '[object Arguments]') {\n    return 'arguments';\n  }\n  if (type === '[object Error]') {\n    return 'error';\n  }\n\n  // buffer\n  if (isBuffer(val)) {\n    return 'buffer';\n  }\n\n  // es6: Map, WeakMap, Set, WeakSet\n  if (type === '[object Set]') {\n    return 'set';\n  }\n  if (type === '[object WeakSet]') {\n    return 'weakset';\n  }\n  if (type === '[object Map]') {\n    return 'map';\n  }\n  if (type === '[object WeakMap]') {\n    return 'weakmap';\n  }\n  if (type === '[object Symbol]') {\n    return 'symbol';\n  }\n\n  // typed arrays\n  if (type === '[object Int8Array]') {\n    return 'int8array';\n  }\n  if (type === '[object Uint8Array]') {\n    return 'uint8array';\n  }\n  if (type === '[object Uint8ClampedArray]') {\n    return 'uint8clampedarray';\n  }\n  if (type === '[object Int16Array]') {\n    return 'int16array';\n  }\n  if (type === '[object Uint16Array]') {\n    return 'uint16array';\n  }\n  if (type === '[object Int32Array]') {\n    return 'int32array';\n  }\n  if (type === '[object Uint32Array]') {\n    return 'uint32array';\n  }\n  if (type === '[object Float32Array]') {\n    return 'float32array';\n  }\n  if (type === '[object Float64Array]') {\n    return 'float64array';\n  }\n\n  // must be a plain object\n  return 'object';\n};\n\n\n//# sourceURL=webpack:///./node_modules/is-odd/node_modules/kind-of/index.js?"
        );

        /***/
      },

    /***/ "./output/App.js":
      /*!***********************!*\
  !*** ./output/App.js ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Practical_2_Hello_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Practical 2/Hello.js */ "./output/Practical 2/Hello.js");\n/* harmony import */ var _Practical_4_TitleLi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Practical 4/TitleLi.js */ "./output/Practical 4/TitleLi.js");\n/* harmony import */ var _Practical_4_HobbyList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Practical 4/HobbyList.js */ "./output/Practical 4/HobbyList.js");\n/* harmony import */ var _Practical_9_Age_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Practical 9/Age.js */ "./output/Practical 9/Age.js");\n/* harmony import */ var _Practical_4_extra_MovieList_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Practical 4/extra/MovieList.js */ "./output/Practical 4/extra/MovieList.js");\n/* harmony import */ var _Practical_3_Hobby_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Practical 3/Hobby.js */ "./output/Practical 3/Hobby.js");\n\n\n\n\n\n\nconst hobbies = [{\n  title: "Gaming",\n  emoji: "🎮"\n}, {\n  title: "Chill",\n  emoji: ""\n}, {\n  title: "Slacking",\n  emoji: "🎉"\n}];\nfunction App(props) {\n  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_Practical_2_Hello_js__WEBPACK_IMPORTED_MODULE_0__["default"], null), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement(_Practical_4_TitleLi_js__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    title: "Name",\n    text: "Brigitte Chan"\n  }), /*#__PURE__*/React.createElement(_Practical_9_Age_js__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    value: 99\n  }), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Hobbies:")), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement(_Practical_4_HobbyList_js__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    hobbies: [{\n      title: "Gaming",\n      emoji: "🎮"\n    }, {\n      title: "Chill",\n      emoji: ""\n    }, {\n      title: "Slacking",\n      emoji: "🎉"\n    }]\n  })), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Hobbies (Using Map):"), hobbies.map(function (hobby) {\n    return /*#__PURE__*/React.createElement(_Practical_3_Hobby_js__WEBPACK_IMPORTED_MODULE_5__["default"], {\n      title: hobby.title,\n      emoji: hobby.emoji\n    });\n  }))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Movies:"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement(_Practical_4_extra_MovieList_js__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    movies: [{\n      url: "https://www.rottentomatoes.com/m/black_adam",\n      title: "Black Adam",\n      rating: 40\n    }, {\n      url: "https://www.rottentomatoes.com/m/enola_holmes_2",\n      title: "Enola Holmes 2",\n      rating: 95\n    }, {\n      url: "https://www.rottentomatoes.com/m/my_policeman",\n      title: "My Policeman",\n      rating: 41\n    }]\n  })))));\n}\nconst root = ReactDOM.createRoot(document.getElementById("root"));\nroot.render( /*#__PURE__*/React.createElement(App, null));\n\n//# sourceURL=webpack:///./output/App.js?'
        );

        /***/
      },

    /***/ "./output/Practical 2/Hello.js":
      /*!*************************************!*\
  !*** ./output/Practical 2/Hello.js ***!
  \*************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Hello)\n/* harmony export */ });\nfunction Hello() {\n  return /*#__PURE__*/React.createElement("h1", null, "Hello, this is about me!");\n}\n\n//# sourceURL=webpack:///./output/Practical_2/Hello.js?'
        );

        /***/
      },

    /***/ "./output/Practical 3/Hobby.js":
      /*!*************************************!*\
  !*** ./output/Practical 3/Hobby.js ***!
  \*************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Hobby)\n/* harmony export */ });\nfunction Hobby(props) {\n  let hobEmoji = "";\n  if (props.emoji == "") {\n    hobEmoji = "👍";\n  } else {}\n  return /*#__PURE__*/React.createElement("li", null, props.title, " ", hobEmoji, props.emoji);\n}\n\n//# sourceURL=webpack:///./output/Practical_3/Hobby.js?'
        );

        /***/
      },

    /***/ "./output/Practical 4/HobbyList.js":
      /*!*****************************************!*\
  !*** ./output/Practical 4/HobbyList.js ***!
  \*****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ HobbyList)\n/* harmony export */ });\n/* harmony import */ var _Practical_3_Hobby_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Practical 3/Hobby.js */ "./output/Practical 3/Hobby.js");\n\nfunction HobbyList(props) {\n  return props.hobbies.filter(function (hobby) {\n    return hobby.emoji;\n  }).map(function (hobby) {\n    return /*#__PURE__*/React.createElement(_Practical_3_Hobby_js__WEBPACK_IMPORTED_MODULE_0__["default"], {\n      title: hobby.title,\n      emoji: hobby.emoji\n    });\n  });\n}\n\n//# sourceURL=webpack:///./output/Practical_4/HobbyList.js?'
        );

        /***/
      },

    /***/ "./output/Practical 4/TitleLi.js":
      /*!***************************************!*\
  !*** ./output/Practical 4/TitleLi.js ***!
  \***************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ TitleLi)\n/* harmony export */ });\nfunction TitleLi(props) {\n  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, props.title, ":"), " ", !props.isHidden && props.text);\n}\n\n//# sourceURL=webpack:///./output/Practical_4/TitleLi.js?'
        );

        /***/
      },

    /***/ "./output/Practical 4/extra/MovieList.js":
      /*!***********************************************!*\
  !*** ./output/Practical 4/extra/MovieList.js ***!
  \***********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ MovieList)\n/* harmony export */ });\n/* harmony import */ var _Movies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Movies.js */ "./output/Practical 4/extra/Movies.js");\n\nfunction MovieList(props) {\n  return props.movies.map(function (movie) {\n    return /*#__PURE__*/React.createElement(_Movies_js__WEBPACK_IMPORTED_MODULE_0__["default"], {\n      url: movie.url,\n      title: movie.title,\n      rating: movie.rating\n    });\n  });\n}\n\n//# sourceURL=webpack:///./output/Practical_4/extra/MovieList.js?'
        );

        /***/
      },

    /***/ "./output/Practical 4/extra/Movies.js":
      /*!********************************************!*\
  !*** ./output/Practical 4/extra/Movies.js ***!
  \********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Movie)\n/* harmony export */ });\nfunction Movie(props) {\n  // let emoji = \'❓\';\n  // if (props.rating >= 50) {\n  //     emoji = \'👍\';\n  // } else if (props.rating < 50) {\n  //     emoji = \'👎\';\n  // }\n  const emoji = props.rating >= 50 ? "👍" : props.rating < 50 ? "👎" : "❓";\n  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {\n    href: props.url\n  }, props.title), " (", emoji, props.rating, "%)");\n}\n// <Movie url="https://......." title="Black Adam" rating={0.4} />\n\n//# sourceURL=webpack:///./output/Practical_4/extra/Movies.js?'
        );

        /***/
      },

    /***/ "./output/Practical 5/TitleLi.js":
      /*!***************************************!*\
  !*** ./output/Practical 5/TitleLi.js ***!
  \***************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ TitleLi)\n/* harmony export */ });\nfunction TitleLi(props) {\n  return /*#__PURE__*/React.createElement("li", {\n    onMouseEnter: function () {\n      props.onMouseEnter();\n    },\n    onMouseLeave: function () {\n      props.onMouseLeave();\n    }\n  }, /*#__PURE__*/React.createElement("b", null, props.title), ": ", !props.isHidden && props.text);\n}\n\n//# sourceURL=webpack:///./output/Practical_5/TitleLi.js?'
        );

        /***/
      },

    /***/ "./output/Practical 9/Age.js":
      /*!***********************************!*\
  !*** ./output/Practical 9/Age.js ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Age)\n/* harmony export */ });\n/* harmony import */ var is_even__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-even */ "./node_modules/is-even/index.js");\n/* harmony import */ var is_even__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_even__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Practical_5_TitleLi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Practical 5/TitleLi.js */ "./output/Practical 5/TitleLi.js");\n\n\nfunction Age(props) {\n  const [isHidden, setIsHidden] = React.useState(true); // Add state\n  const emoji = is_even__WEBPACK_IMPORTED_MODULE_0___default()(props.value) ? "" : "🔞";\n  return /*#__PURE__*/React.createElement(_Practical_5_TitleLi_js__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    title: "Age",\n    text: emoji + props.value,\n    isHidden: isHidden,\n    onMouseEnter: function () {\n      setIsHidden(false);\n    },\n    onMouseLeave: function () {\n      setIsHidden(true);\n    }\n  });\n}\n\n//# sourceURL=webpack:///./output/Practical_9/Age.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./output/App.js");
  /******/
  /******/
})();
