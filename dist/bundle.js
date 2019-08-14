/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.mjs");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.mjs":
/*!*********************!*\
  !*** ./js/main.mjs ***!
  \*********************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _search_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.mjs */ \"./js/search.mjs\");\n/* harmony import */ var _new_train_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-train.mjs */ \"./js/new-train.mjs\");\n\n\n\nconst exbuscaDOM = document.querySelector(\".ex-busca\");\nconst cadBtnDOM = document.querySelector(\".cad-treino\");\nconst myExsDOM = document.querySelector('.my-exs');\n\n\n\nexbuscaDOM.addEventListener('keyup', () => {\n    Object(_search_mjs__WEBPACK_IMPORTED_MODULE_0__[\"filterByInput\"])()\n});\n\ncadBtnDOM.addEventListener('click', () => {\n    chosenExs.unshift('Treino ' + inputTreinoDOM.value);\n    \n    console.log(chosenExs);\n\n    myExsDOM.insertAdjacentHTML('beforeend', \n    Object(_new_train_mjs__WEBPACK_IMPORTED_MODULE_1__[\"newTrain\"])(chosenExs))\n    chosenExs = [];\n})\n  \n\n//# sourceURL=webpack:///./js/main.mjs?");

/***/ }),

/***/ "./js/new-train.mjs":
/*!**************************!*\
  !*** ./js/new-train.mjs ***!
  \**************************/
/*! exports provided: newTrain */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newTrain\", function() { return newTrain; });\nfunction newTrain(arr) {\n    \n    let template = '';\n    for (let i=1; i <= arr.length-1; i++) {\n        template += `<li class='card m-3 bg-light pl-4 py-3' style=\"border-left: 5px solid #3C40C6\">${arr[i]}</li>`;\n    }\n\n    return `<div class=\"card m-2 w-25 col-xs-5 shadow-sm text-left ex-card\">\n            <div class=\"card-header text-right\">\n                <a href=\"\" class=\"\">Remove</a>\n            </div>\n                <div class=\"card-body\">\n                 <strong><h3 class=\"card-title text-center\">${arr[0]}</h3></strong>   \n             <p class=\"card-text\">\n                <ul class=\"mt-3 p-0 ex-list\">\n                    ${template}\n               </ul>\n             </p>\n            </div>\n            </div>`\n}\n\n\n\n//# sourceURL=webpack:///./js/new-train.mjs?");

/***/ }),

/***/ "./js/search.mjs":
/*!***********************!*\
  !*** ./js/search.mjs ***!
  \***********************/
/*! exports provided: filterByInput */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterByInput\", function() { return filterByInput; });\nfunction filterByInput() {\n    /* console.log('filter working!') */\n    let exbuscaDOM = document.querySelector(\".ex-busca\");\n    let cardDOM = Array.from(document.querySelectorAll('.card-treino'));\n\n    /*console.log(cardDOM); */\n\n    exbuscaDOM.addEventListener('keyup', (event) => {\n    /* console.log(event.target.value); */\n\n        for (let el of cardDOM) {\n            if (el.innerText.toUpperCase().includes(event.target.value.toUpperCase())) {\n                el.style.display = ''\n            } else {\n                el.style.display = 'none';\n            }\n        }\n    })\n}\n\n\n\n\n\n//# sourceURL=webpack:///./js/search.mjs?");

/***/ })

/******/ });