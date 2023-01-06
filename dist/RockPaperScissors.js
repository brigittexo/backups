/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./output/Practical 7/RPSInput.js":
/*!****************************************!*\
  !*** ./output/Practical 7/RPSInput.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RPSInput)\n/* harmony export */ });\nfunction RPSInput(props) {\n  const [selectedMove, setSelectedMove] = React.useState(\"Rock\");\n  const [isWin, setIsWin] = React.useState(false);\n  return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"select\", {\n    value: selectedMove,\n    onChange: e => setSelectedMove(e.target.value)\n  }, /*#__PURE__*/React.createElement(\"option\", {\n    value: \"Rock\"\n  }, \"Rock\"), /*#__PURE__*/React.createElement(\"option\", {\n    value: \"Paper\"\n  }, \"Paper\"), /*#__PURE__*/React.createElement(\"option\", {\n    value: \"Scissors\"\n  }, \"Scissors\")), /*#__PURE__*/React.createElement(\"input\", {\n    type: \"checkbox\",\n    checked: isWin,\n    onChange: e => setIsWin(e.target.checked)\n  }), \" \", \"Win?\", /*#__PURE__*/React.createElement(\"button\", {\n    onClick: () => props.onAdd({\n      move: selectedMove,\n      result: isWin ? \"Win\" : \"Lose\"\n    })\n  }, \"Add\"));\n}\n\n//# sourceURL=webpack:///./output/Practical_7/RPSInput.js?");

/***/ }),

/***/ "./output/Practical 7/RPSRecords.js":
/*!******************************************!*\
  !*** ./output/Practical 7/RPSRecords.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RPSRecords)\n/* harmony export */ });\nfunction RPSRecords(props) {\n  let winPercentage = 0;\n  if (props.records.length) winPercentage = props.records.filter(record => record.result === \"Win\").length / props.records.length * 100;\n  return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"p\", null, \"Rounds (Win %: \", winPercentage.toFixed(2), \"%):\"), /*#__PURE__*/React.createElement(\"ul\", null, props.records.map((record, index) => /*#__PURE__*/React.createElement(\"li\", {\n    onClick: () => props.onHide(index)\n  }, record.result, \" (\", record.move, \")\"))));\n}\n\n//# sourceURL=webpack:///./output/Practical_7/RPSRecords.js?");

/***/ }),

/***/ "./output/Practical 8/IsEmojiContext.js":
/*!**********************************************!*\
  !*** ./output/Practical 8/IsEmojiContext.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"IsEmojiContext\": () => (/* binding */ IsEmojiContext),\n/* harmony export */   \"emoji\": () => (/* binding */ emoji)\n/* harmony export */ });\nconst IsEmojiContext = React.createContext(false);\nconst emoji = {\n  Rock: \"🗿\",\n  Paper: \"📝\",\n  Scissors: \"✂️\"\n};\n\n//# sourceURL=webpack:///./output/Practical_8/IsEmojiContext.js?");

/***/ }),

/***/ "./output/Practical 8/RPSButton.js":
/*!*****************************************!*\
  !*** ./output/Practical 8/RPSButton.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RPSButton)\n/* harmony export */ });\n/* harmony import */ var _IsEmojiContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IsEmojiContext.js */ \"./output/Practical 8/IsEmojiContext.js\");\n\nfunction RPSButton(props) {\n  const isEmoji = React.useContext(_IsEmojiContext_js__WEBPACK_IMPORTED_MODULE_0__.IsEmojiContext);\n  const [isHovered, setIsHovered] = React.useState(false);\n  const winCount = props.records.filter(record => record.result === \"Win\").length;\n  const totalCount = props.records.length;\n  const percentage = totalCount ? winCount / totalCount * 100 : 0;\n  return /*#__PURE__*/React.createElement(\"button\", {\n    onClick: props.onClick,\n    onMouseEnter: () => setIsHovered(true),\n    onMouseLeave: () => setIsHovered(false)\n  }, isEmoji ? _IsEmojiContext_js__WEBPACK_IMPORTED_MODULE_0__.emoji[props.move] : props.move, \" \", isHovered && `(${percentage.toFixed(2)}%)`);\n}\n\n//# sourceURL=webpack:///./output/Practical_8/RPSButton.js?");

/***/ }),

/***/ "./output/Practical 8/RPSButtons.js":
/*!******************************************!*\
  !*** ./output/Practical 8/RPSButtons.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RPSButtons)\n/* harmony export */ });\n/* harmony import */ var _RPSButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RPSButton.js */ \"./output/Practical 8/RPSButton.js\");\n\nconst moves = [\"Rock\", \"Paper\", \"Scissors\"];\nfunction RPSButtons(props) {\n  return /*#__PURE__*/React.createElement(\"div\", null, moves.map(move => /*#__PURE__*/React.createElement(_RPSButton_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    onClick: () => props.onButtonPressed(move),\n    move: move,\n    records: props.records.filter(record => record.move === move)\n  })));\n}\n\n//# sourceURL=webpack:///./output/Practical_8/RPSButtons.js?");

/***/ }),

/***/ "./output/Practical 8/recordsReducer.js":
/*!**********************************************!*\
  !*** ./output/Practical 8/recordsReducer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ recordsReducer)\n/* harmony export */ });\nfunction getRandomInt(min, max) {\n  return Math.round(Math.random() * (max - min)) + min;\n}\nfunction recordsReducer(records, action) {\n  switch (action.name) {\n    case \"add\":\n      {\n        const randomInt = getRandomInt(0, 3);\n        let result;\n        if (randomInt === 0) result = \"Win\";else if (randomInt === 1) result = \"Lose\";else result = \"Tie\";\n        return [...records, {\n          result: result,\n          move: action.move\n        }];\n      }\n    case \"force add\":\n      {\n        return [...records, action.record];\n      }\n    case \"remove\":\n      {\n        console.log(records);\n        records.splice(action.index, 1);\n        return [...records];\n      }\n    default:\n      return records;\n  }\n}\n\n//# sourceURL=webpack:///./output/Practical_8/recordsReducer.js?");

/***/ }),

/***/ "./output/RockPaperScissors.js":
/*!*************************************!*\
  !*** ./output/RockPaperScissors.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RockPaperScissors)\n/* harmony export */ });\n/* harmony import */ var _Practical_8_RPSButtons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Practical 8/RPSButtons.js */ \"./output/Practical 8/RPSButtons.js\");\n/* harmony import */ var _Practical_7_RPSInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Practical 7/RPSInput.js */ \"./output/Practical 7/RPSInput.js\");\n/* harmony import */ var _Practical_7_RPSRecords_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Practical 7/RPSRecords.js */ \"./output/Practical 7/RPSRecords.js\");\n/* harmony import */ var _Practical_8_IsEmojiContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Practical 8/IsEmojiContext.js */ \"./output/Practical 8/IsEmojiContext.js\");\n/* harmony import */ var _Practical_8_recordsReducer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Practical 8/recordsReducer.js */ \"./output/Practical 8/recordsReducer.js\");\n\n\n\n\n\nfunction RockPaperScissors(props) {\n  const [isEmoji, setIsEmoji] = React.useState(false);\n  const [records, dispatch] = React.useReducer(_Practical_8_recordsReducer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], []);\n  return /*#__PURE__*/React.createElement(_Practical_8_IsEmojiContext_js__WEBPACK_IMPORTED_MODULE_3__.IsEmojiContext.Provider, {\n    value: isEmoji\n  }, /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(_Practical_8_RPSButtons_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    onButtonPressed: move => {\n      dispatch({\n        name: \"add\",\n        move: move\n      });\n    },\n    records: records\n  }), /*#__PURE__*/React.createElement(\"button\", {\n    onClick: function () {\n      setIsEmoji(!isEmoji);\n    }\n  }, \"Toggle Emoji\"), /*#__PURE__*/React.createElement(_Practical_7_RPSInput_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    onAdd: record => dispatch({\n      name: \"force add\",\n      record: record\n    })\n  }), /*#__PURE__*/React.createElement(_Practical_7_RPSRecords_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    records: records,\n    onHide: index => {\n      dispatch({\n        name: \"remove\",\n        index: index\n      });\n    }\n  })));\n}\nconst root = ReactDOM.createRoot(document.getElementById(\"root\"));\nroot.render( /*#__PURE__*/React.createElement(RockPaperScissors, null));\n\n//# sourceURL=webpack:///./output/RockPaperScissors.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./output/RockPaperScissors.js");
/******/ 	
/******/ })()
;