(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("darkmode-js", [], factory);
	else if(typeof exports === 'object')
		exports["darkmode-js"] = factory();
	else
		root["darkmode-js"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/darkmode.js":
/*!*************************!*\
  !*** ./src/darkmode.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Darkmode =
/*#__PURE__*/
function () {
  function Darkmode(options) {
    _classCallCheck(this, Darkmode);

    var bottom = options && options.bottom || '32px';
    var right = options && options.right || '32px';
    var left = options && options.left || 'unset';
    var time = options && options.time || '0.3s';
    var mixColor = options && options.mixColor || '#fff';
    var backgroundColor = options && options.backgroundColor || '#fff';
    var buttonColorDark = options && options.buttonColorDark || '#100f2c';
    var buttonColorLight = options && options.buttonColorLight || '#fff';
    var label = options && options.label || '';
    var saveInCookies = options && options.saveInCookies;
    var css = "\n      .darkmode-layer {\n        position: fixed;\n        pointer-events: none;\n        background: ".concat(mixColor, ";\n        transition: all ").concat(time, " ease;\n        mix-blend-mode: difference;\n      }\n\n      .darkmode-layer--button {\n        width: 2.9rem;\n        height: 2.9rem;\n        border-radius: 50%;\n        right: ").concat(right, ";\n        bottom: ").concat(bottom, ";\n        left: ").concat(left, ";\n      }\n\n      .darkmode-layer--simple {\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        transform: scale(1) !important;\n      }\n\n      .darkmode-layer--expanded {\n        transform: scale(100);\n        border-radius: 0;\n      }\n\n      .darkmode-layer--no-transition {\n        transition: none;\n      }\n\n      .darkmode-toggle {\n        background: ").concat(buttonColorDark, ";\n        width: 3rem;\n        height: 3rem;\n        position: fixed;\n        border-radius: 50%;\n        right: ").concat(right, ";\n        bottom: ").concat(bottom, ";\n        left: ").concat(left, ";\n        cursor: pointer;\n        transition: all 0.5s ease;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .darkmode-toggle--white {\n        background: ").concat(buttonColorLight, ";\n      }\n\n      .darkmode-background {\n        background: ").concat(backgroundColor, ";\n        position: fixed;\n        pointer-events: none;\n        z-index: -10;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n      }\n\n      img, .darkmode-ignore {\n        isolation: isolate;\n        display: inline-block;\n      }\n    ");
    var layer = document.createElement('div');
    var button = document.createElement('div');
    var background = document.createElement('div');
    button.innerHTML = label;
    layer.classList.add('darkmode-layer');
    background.classList.add('darkmode-background');
    var darkmodeActivated = window.localStorage.getItem('darkmode') === 'true';

    if (darkmodeActivated === true && saveInCookies) {
      layer.classList.add('darkmode-layer--expanded', 'darkmode-layer--simple', 'darkmode-layer--no-transition');
      button.classList.add('darkmode-toggle--white');
      document.body.classList.add('darkmode--activated');
    }

    document.body.insertBefore(button, document.body.firstChild);
    document.body.insertBefore(layer, document.body.firstChild);
    document.body.insertBefore(background, document.body.firstChild);
    this.addStyle(css);
    this.button = button;
    this.layer = layer;
    this.saveInCookies = saveInCookies;
    this.time = time;
  }

  _createClass(Darkmode, [{
    key: "addStyle",
    value: function addStyle(css) {
      var linkElement = document.createElement('link');
      linkElement.setAttribute('rel', 'stylesheet');
      linkElement.setAttribute('type', 'text/css');
      linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(css));
      document.head.appendChild(linkElement);
    }
  }, {
    key: "showWidget",
    value: function showWidget() {
      var _this = this;

      var button = this.button;
      var layer = this.layer;
      var time = parseFloat(this.time) * 1000;
      button.classList.add('darkmode-toggle');
      layer.classList.add('darkmode-layer--button');
      button.addEventListener('click', function () {
        var isDarkmode = _this.isActivated();

        if (!isDarkmode) {
          layer.classList.add('darkmode-layer--expanded');
          setTimeout(function () {
            layer.classList.add('darkmode-layer--no-transition');
            layer.classList.add('darkmode-layer--simple');
          }, time);
        } else {
          layer.classList.remove('darkmode-layer--simple');
          setTimeout(function () {
            layer.classList.remove('darkmode-layer--no-transition');
            layer.classList.remove('darkmode-layer--expanded');
          }, 1);
        }

        button.classList.toggle('darkmode-toggle--white');
        document.body.classList.toggle('darkmode--activated');
        window.localStorage.setItem('darkmode', !isDarkmode);
      });
    }
  }, {
    key: "toggle",
    value: function toggle() {
      var layer = this.layer;
      var isDarkmode = this.isActivated();
      layer.classList.toggle('darkmode-layer--simple');
      document.body.classList.toggle('darkmode--activated');
      window.localStorage.setItem('darkmode', !isDarkmode);
    }
  }, {
    key: "isActivated",
    value: function isActivated() {
      return document.body.classList.contains('darkmode--activated');
    }
  }]);

  return Darkmode;
}();

exports.default = Darkmode;
module.exports = exports["default"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _darkmode = _interopRequireDefault(__webpack_require__(/*! ./darkmode */ "./src/darkmode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _darkmode.default;
/* eslint-disable */

exports.default = _default;

(function (window) {
  window.Darkmode = _darkmode.default;
})(window);
/* eslint-enable */


module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXJrbW9kZS1qcy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZGFya21vZGUtanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGFya21vZGUtanMvLi9zcmMvZGFya21vZGUuanMiLCJ3ZWJwYWNrOi8vZGFya21vZGUtanMvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiRGFya21vZGUiLCJvcHRpb25zIiwiYm90dG9tIiwicmlnaHQiLCJsZWZ0IiwidGltZSIsIm1peENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiYnV0dG9uQ29sb3JEYXJrIiwiYnV0dG9uQ29sb3JMaWdodCIsImxhYmVsIiwic2F2ZUluQ29va2llcyIsImNzcyIsImxheWVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYnV0dG9uIiwiYmFja2dyb3VuZCIsImlubmVySFRNTCIsImNsYXNzTGlzdCIsImFkZCIsImRhcmttb2RlQWN0aXZhdGVkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImJvZHkiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiYWRkU3R5bGUiLCJsaW5rRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInBhcnNlRmxvYXQiLCJhZGRFdmVudExpc3RlbmVyIiwiaXNEYXJrbW9kZSIsImlzQWN0aXZhdGVkIiwic2V0VGltZW91dCIsInJlbW92ZSIsInRvZ2dsZSIsInNldEl0ZW0iLCJjb250YWlucyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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cUIsTUFBaEIsQ0FBdUIsd0JBQXZCO0FBQ0ExQixjQUFRLENBQUNXLElBQVQsQ0FBY04sU0FBZCxDQUF3QnFCLE1BQXhCLENBQStCLHFCQUEvQjtBQUNBbEIsWUFBTSxDQUFDQyxZQUFQLENBQW9Ca0IsT0FBcEIsQ0FBNEIsVUFBNUIsRUFBd0MsQ0FBQ0wsVUFBekM7QUFDRDs7O2tDQUVhO0FBQ1osYUFBT3RCLFFBQVEsQ0FBQ1csSUFBVCxDQUFjTixTQUFkLENBQXdCdUIsUUFBeEIsQ0FBaUMscUJBQWpDLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwS0g7Ozs7O0FBR0E7Ozs7QUFDQSxDQUFDLFVBQVNwQixNQUFULEVBQWdCO0FBQ2ZBLFFBQU0sQ0FBQ3RCLFFBQVA7QUFDRCxDQUZELEVBRUdzQixNQUZIO0FBR0EiLCJmaWxlIjoiZGFya21vZGUtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImRhcmttb2RlLWpzXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRhcmttb2RlLWpzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRhcmttb2RlLWpzXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFya21vZGUge1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIGNvbnN0IGJvdHRvbSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5ib3R0b20gfHwgJzMycHgnO1xyXG4gICAgY29uc3QgcmlnaHQgPSBvcHRpb25zICYmIG9wdGlvbnMucmlnaHQgfHwgJzMycHgnO1xyXG4gICAgY29uc3QgbGVmdCA9IG9wdGlvbnMgJiYgb3B0aW9ucy5sZWZ0IHx8ICd1bnNldCc7XHJcbiAgICBjb25zdCB0aW1lID0gb3B0aW9ucyAmJiBvcHRpb25zLnRpbWUgfHwgJzAuM3MnO1xyXG4gICAgY29uc3QgbWl4Q29sb3IgPSBvcHRpb25zICYmIG9wdGlvbnMubWl4Q29sb3IgfHwgJyNmZmYnO1xyXG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucyAmJiBvcHRpb25zLmJhY2tncm91bmRDb2xvciB8fCAnI2ZmZic7XHJcbiAgICBjb25zdCBidXR0b25Db2xvckRhcmsgPSBvcHRpb25zICYmIG9wdGlvbnMuYnV0dG9uQ29sb3JEYXJrIHx8ICcjMTAwZjJjJztcclxuICAgIGNvbnN0IGJ1dHRvbkNvbG9yTGlnaHQgPSBvcHRpb25zICYmIG9wdGlvbnMuYnV0dG9uQ29sb3JMaWdodCB8fCAnI2ZmZic7XHJcbiAgICBjb25zdCBsYWJlbCA9IG9wdGlvbnMgJiYgb3B0aW9ucy5sYWJlbCB8fCAnJztcclxuICAgIGNvbnN0IHNhdmVJbkNvb2tpZXMgPSBvcHRpb25zICYmIG9wdGlvbnMuc2F2ZUluQ29va2llcztcclxuXHJcbiAgICBjb25zdCBjc3MgPSBgXHJcbiAgICAgIC5kYXJrbW9kZS1sYXllciB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR7bWl4Q29sb3J9O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAke3RpbWV9IGVhc2U7XHJcbiAgICAgICAgbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kYXJrbW9kZS1sYXllci0tYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMi45cmVtO1xyXG4gICAgICAgIGhlaWdodDogMi45cmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICByaWdodDogJHtyaWdodH07XHJcbiAgICAgICAgYm90dG9tOiAke2JvdHRvbX07XHJcbiAgICAgICAgbGVmdDogJHtsZWZ0fTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRhcmttb2RlLWxheWVyLS1zaW1wbGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kYXJrbW9kZS1sYXllci0tZXhwYW5kZWQge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMTAwKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGFya21vZGUtbGF5ZXItLW5vLXRyYW5zaXRpb24ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kYXJrbW9kZS10b2dnbGUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR7YnV0dG9uQ29sb3JEYXJrfTtcclxuICAgICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICByaWdodDogJHtyaWdodH07XHJcbiAgICAgICAgYm90dG9tOiAke2JvdHRvbX07XHJcbiAgICAgICAgbGVmdDogJHtsZWZ0fTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kYXJrbW9kZS10b2dnbGUtLXdoaXRlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAke2J1dHRvbkNvbG9yTGlnaHR9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGFya21vZGUtYmFja2dyb3VuZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHtiYWNrZ3JvdW5kQ29sb3J9O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICB6LWluZGV4OiAtMTA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbWcsIC5kYXJrbW9kZS1pZ25vcmUge1xyXG4gICAgICAgIGlzb2xhdGlvbjogaXNvbGF0ZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGA7XHJcblxyXG4gICAgY29uc3QgbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBsYWJlbDtcclxuICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLWxheWVyJyk7XHJcbiAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLWJhY2tncm91bmQnKTtcclxuXHJcbiAgICBjb25zdCBkYXJrbW9kZUFjdGl2YXRlZCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya21vZGUnKSA9PT0gJ3RydWUnO1xyXG5cclxuICAgIGlmIChkYXJrbW9kZUFjdGl2YXRlZCA9PT0gdHJ1ZSAmJiBzYXZlSW5Db29raWVzKSB7XHJcbiAgICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLWxheWVyLS1leHBhbmRlZCcsICdkYXJrbW9kZS1sYXllci0tc2ltcGxlJywgJ2Rhcmttb2RlLWxheWVyLS1uby10cmFuc2l0aW9uJyk7XHJcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS10b2dnbGUtLXdoaXRlJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtLWFjdGl2YXRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGJ1dHRvbiwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcclxuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGxheWVyLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoYmFja2dyb3VuZCwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcclxuXHJcbiAgICB0aGlzLmFkZFN0eWxlKGNzcyk7XHJcblxyXG4gICAgdGhpcy5idXR0b24gPSBidXR0b247XHJcbiAgICB0aGlzLmxheWVyID0gbGF5ZXI7XHJcbiAgICB0aGlzLnNhdmVJbkNvb2tpZXMgPSBzYXZlSW5Db29raWVzO1xyXG4gICAgdGhpcy50aW1lID0gdGltZTtcclxuICB9XHJcblxyXG4gIGFkZFN0eWxlKGNzcykge1xyXG4gICAgY29uc3QgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcblxyXG4gICAgbGlua0VsZW1lbnQuc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xyXG4gICAgbGlua0VsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XHJcbiAgICBsaW5rRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnZGF0YTp0ZXh0L2NzcztjaGFyc2V0PVVURi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQoY3NzKSk7XHJcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmtFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHNob3dXaWRnZXQoKSB7XHJcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLmJ1dHRvbjtcclxuICAgIGNvbnN0IGxheWVyID0gdGhpcy5sYXllcjtcclxuICAgIGNvbnN0IHRpbWUgPSBwYXJzZUZsb2F0KHRoaXMudGltZSkgKiAxMDAwO1xyXG5cclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS10b2dnbGUnKTtcclxuICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLWxheWVyLS1idXR0b24nKTtcclxuXHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlzRGFya21vZGUgPSB0aGlzLmlzQWN0aXZhdGVkKCk7XHJcblxyXG4gICAgICBpZiAoIWlzRGFya21vZGUpIHtcclxuICAgICAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS1sYXllci0tZXhwYW5kZWQnKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLWxheWVyLS1uby10cmFuc2l0aW9uJyk7XHJcbiAgICAgICAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS1sYXllci0tc2ltcGxlJyk7XHJcbiAgICAgICAgfSwgdGltZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGFya21vZGUtbGF5ZXItLXNpbXBsZScpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGFya21vZGUtbGF5ZXItLW5vLXRyYW5zaXRpb24nKTtcclxuICAgICAgICAgIGxheWVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rhcmttb2RlLWxheWVyLS1leHBhbmRlZCcpO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnZGFya21vZGUtdG9nZ2xlLS13aGl0ZScpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2Rhcmttb2RlLS1hY3RpdmF0ZWQnKTtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXJrbW9kZScsICFpc0Rhcmttb2RlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgY29uc3QgbGF5ZXIgPSB0aGlzLmxheWVyO1xyXG4gICAgY29uc3QgaXNEYXJrbW9kZSA9IHRoaXMuaXNBY3RpdmF0ZWQoKTtcclxuXHJcbiAgICBsYXllci5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrbW9kZS1sYXllci0tc2ltcGxlJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2Rhcmttb2RlLS1hY3RpdmF0ZWQnKTtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGFya21vZGUnLCAhaXNEYXJrbW9kZSk7XHJcbiAgfVxyXG5cclxuICBpc0FjdGl2YXRlZCgpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnZGFya21vZGUtLWFjdGl2YXRlZCcpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgRGFya21vZGUgZnJvbSAnLi9kYXJrbW9kZSc7XHJcbmV4cG9ydCBkZWZhdWx0IERhcmttb2RlO1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUgKi9cclxuKGZ1bmN0aW9uKHdpbmRvdyl7XHJcbiAgd2luZG93LkRhcmttb2RlID0gRGFya21vZGU7XHJcbn0pKHdpbmRvdylcclxuLyogZXNsaW50LWVuYWJsZSAqL1xyXG4iXSwic291cmNlUm9vdCI6IiJ9