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
    var css = "\n      .darkmode-layer {\n        position: fixed;\n        pointer-events: none;\n        background: ".concat(mixColor, ";\n        transition: all ").concat(time, " ease;\n        mix-blend-mode: difference;\n      }\n\n      .darkmode-layer--button {\n        width: 2.9rem;\n        height: 2.9rem;\n        border-radius: 50%;\n        right: ").concat(right, ";\n        bottom: ").concat(bottom, ";\n        left: ").concat(left, ";\n      }\n\n      .darkmode-layer--simple {\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        transform: scale(1) !important;\n      }\n\n      .darkmode-layer--expanded {\n        transform: scale(100);\n        border-radius: 0;\n      }\n\n      .darkmode-layer--no-transition {\n        transition: none;\n      }\n\n      .darkmode-toggle {\n        background: ").concat(buttonColorDark, ";\n        width: 3rem;\n        height: 3rem;\n        position: fixed;\n        border-radius: 50%;\n        right: ").concat(right, ";\n        bottom: ").concat(bottom, ";\n        left: ").concat(left, ";\n        cursor: pointer;\n        transition: all 0.5s ease;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .darkmode-toggle--white {\n        background: ").concat(buttonColorLight, ";\n      }\n\n      .darkmode-background {\n        background: ").concat(backgroundColor, ";\n        position: fixed;\n        pointer-events: none;\n        z-index: -10;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n      }\n\n      img, .darkmode-ignore {\n        isolation: isolate;\n        display: inline-block;\n      }\n\n      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n        .darkmode-toggle {display: none !important}\n      }\n\n      @supports (-ms-ime-align:auto), (-ms-accelerator:true) {\n        .darkmode-toggle {display: none !important}\n      }\n    ");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXJrbW9kZS1qcy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZGFya21vZGUtanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGFya21vZGUtanMvLi9zcmMvZGFya21vZGUuanMiLCJ3ZWJwYWNrOi8vZGFya21vZGUtanMvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiRGFya21vZGUiLCJvcHRpb25zIiwiYm90dG9tIiwicmlnaHQiLCJsZWZ0IiwidGltZSIsIm1peENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiYnV0dG9uQ29sb3JEYXJrIiwiYnV0dG9uQ29sb3JMaWdodCIsImxhYmVsIiwic2F2ZUluQ29va2llcyIsImNzcyIsImxheWVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYnV0dG9uIiwiYmFja2dyb3VuZCIsImlubmVySFRNTCIsImNsYXNzTGlzdCIsImFkZCIsImRhcmttb2RlQWN0aXZhdGVkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImJvZHkiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiYWRkU3R5bGUiLCJsaW5rRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInBhcnNlRmxvYXQiLCJhZGRFdmVudExpc3RlbmVyIiwiaXNEYXJrbW9kZSIsImlzQWN0aXZhdGVkIiwic2V0VGltZW91dCIsInJlbW92ZSIsInRvZ2dsZSIsInNldEl0ZW0iLCJjb250YWlucyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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QnFCLE1BQWhCLENBQXVCLHdCQUF2QjtBQUNBMUIsY0FBUSxDQUFDVyxJQUFULENBQWNOLFNBQWQsQ0FBd0JxQixNQUF4QixDQUErQixxQkFBL0I7QUFDQWxCLFlBQU0sQ0FBQ0MsWUFBUCxDQUFvQmtCLE9BQXBCLENBQTRCLFVBQTVCLEVBQXdDLENBQUNMLFVBQXpDO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU90QixRQUFRLENBQUNXLElBQVQsQ0FBY04sU0FBZCxDQUF3QnVCLFFBQXhCLENBQWlDLHFCQUFqQyxDQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUtIOzs7OztBQUdBOzs7O0FBQ0EsQ0FBQyxVQUFTcEIsTUFBVCxFQUFnQjtBQUNmQSxRQUFNLENBQUN0QixRQUFQO0FBQ0QsQ0FGRCxFQUVHc0IsTUFGSDtBQUdBIiwiZmlsZSI6ImRhcmttb2RlLWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJkYXJrbW9kZS1qc1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkYXJrbW9kZS1qc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkYXJrbW9kZS1qc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERhcmttb2RlIHtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBjb25zdCBib3R0b20gPSBvcHRpb25zICYmIG9wdGlvbnMuYm90dG9tIHx8ICczMnB4JztcclxuICAgIGNvbnN0IHJpZ2h0ID0gb3B0aW9ucyAmJiBvcHRpb25zLnJpZ2h0IHx8ICczMnB4JztcclxuICAgIGNvbnN0IGxlZnQgPSBvcHRpb25zICYmIG9wdGlvbnMubGVmdCB8fCAndW5zZXQnO1xyXG4gICAgY29uc3QgdGltZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy50aW1lIHx8ICcwLjNzJztcclxuICAgIGNvbnN0IG1peENvbG9yID0gb3B0aW9ucyAmJiBvcHRpb25zLm1peENvbG9yIHx8ICcjZmZmJztcclxuICAgIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMgJiYgb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgfHwgJyNmZmYnO1xyXG4gICAgY29uc3QgYnV0dG9uQ29sb3JEYXJrID0gb3B0aW9ucyAmJiBvcHRpb25zLmJ1dHRvbkNvbG9yRGFyayB8fCAnIzEwMGYyYyc7XHJcbiAgICBjb25zdCBidXR0b25Db2xvckxpZ2h0ID0gb3B0aW9ucyAmJiBvcHRpb25zLmJ1dHRvbkNvbG9yTGlnaHQgfHwgJyNmZmYnO1xyXG4gICAgY29uc3QgbGFiZWwgPSBvcHRpb25zICYmIG9wdGlvbnMubGFiZWwgfHwgJyc7XHJcbiAgICBjb25zdCBzYXZlSW5Db29raWVzID0gb3B0aW9ucyAmJiBvcHRpb25zLnNhdmVJbkNvb2tpZXM7XHJcblxyXG4gICAgY29uc3QgY3NzID0gYFxyXG4gICAgICAuZGFya21vZGUtbGF5ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAke21peENvbG9yfTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgJHt0aW1lfSBlYXNlO1xyXG4gICAgICAgIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGFya21vZGUtbGF5ZXItLWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDIuOXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDIuOXJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgcmlnaHQ6ICR7cmlnaHR9O1xyXG4gICAgICAgIGJvdHRvbTogJHtib3R0b219O1xyXG4gICAgICAgIGxlZnQ6ICR7bGVmdH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kYXJrbW9kZS1sYXllci0tc2ltcGxlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGFya21vZGUtbGF5ZXItLWV4cGFuZGVkIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEwMCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRhcmttb2RlLWxheWVyLS1uby10cmFuc2l0aW9uIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGFya21vZGUtdG9nZ2xlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAke2J1dHRvbkNvbG9yRGFya307XHJcbiAgICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgcmlnaHQ6ICR7cmlnaHR9O1xyXG4gICAgICAgIGJvdHRvbTogJHtib3R0b219O1xyXG4gICAgICAgIGxlZnQ6ICR7bGVmdH07XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGFya21vZGUtdG9nZ2xlLS13aGl0ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHtidXR0b25Db2xvckxpZ2h0fTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRhcmttb2RlLWJhY2tncm91bmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR7YmFja2dyb3VuZENvbG9yfTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgei1pbmRleDogLTEwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nLCAuZGFya21vZGUtaWdub3JlIHtcclxuICAgICAgICBpc29sYXRpb246IGlzb2xhdGU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSksICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xyXG4gICAgICAgIC5kYXJrbW9kZS10b2dnbGUge2Rpc3BsYXk6IG5vbmUgIWltcG9ydGFudH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOmF1dG8pLCAoLW1zLWFjY2VsZXJhdG9yOnRydWUpIHtcclxuICAgICAgICAuZGFya21vZGUtdG9nZ2xlIHtkaXNwbGF5OiBub25lICFpbXBvcnRhbnR9XHJcbiAgICAgIH1cclxuICAgIGA7XHJcblxyXG4gICAgY29uc3QgbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBsYWJlbDtcclxuICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLWxheWVyJyk7XHJcbiAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLWJhY2tncm91bmQnKTtcclxuXHJcbiAgICBjb25zdCBkYXJrbW9kZUFjdGl2YXRlZCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya21vZGUnKSA9PT0gJ3RydWUnO1xyXG5cclxuICAgIGlmIChkYXJrbW9kZUFjdGl2YXRlZCA9PT0gdHJ1ZSAmJiBzYXZlSW5Db29raWVzKSB7XHJcbiAgICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLWxheWVyLS1leHBhbmRlZCcsICdkYXJrbW9kZS1sYXllci0tc2ltcGxlJywgJ2Rhcmttb2RlLWxheWVyLS1uby10cmFuc2l0aW9uJyk7XHJcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS10b2dnbGUtLXdoaXRlJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtLWFjdGl2YXRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGJ1dHRvbiwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcclxuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGxheWVyLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoYmFja2dyb3VuZCwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcclxuXHJcbiAgICB0aGlzLmFkZFN0eWxlKGNzcyk7XHJcblxyXG4gICAgdGhpcy5idXR0b24gPSBidXR0b247XHJcbiAgICB0aGlzLmxheWVyID0gbGF5ZXI7XHJcbiAgICB0aGlzLnNhdmVJbkNvb2tpZXMgPSBzYXZlSW5Db29raWVzO1xyXG4gICAgdGhpcy50aW1lID0gdGltZTtcclxuICB9XHJcblxyXG4gIGFkZFN0eWxlKGNzcykge1xyXG4gICAgY29uc3QgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcblxyXG4gICAgbGlua0VsZW1lbnQuc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xyXG4gICAgbGlua0VsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XHJcbiAgICBsaW5rRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnZGF0YTp0ZXh0L2NzcztjaGFyc2V0PVVURi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQoY3NzKSk7XHJcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmtFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHNob3dXaWRnZXQoKSB7XHJcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLmJ1dHRvbjtcclxuICAgIGNvbnN0IGxheWVyID0gdGhpcy5sYXllcjtcclxuICAgIGNvbnN0IHRpbWUgPSBwYXJzZUZsb2F0KHRoaXMudGltZSkgKiAxMDAwO1xyXG5cclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS10b2dnbGUnKTtcclxuICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLWxheWVyLS1idXR0b24nKTtcclxuXHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlzRGFya21vZGUgPSB0aGlzLmlzQWN0aXZhdGVkKCk7XHJcblxyXG4gICAgICBpZiAoIWlzRGFya21vZGUpIHtcclxuICAgICAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS1sYXllci0tZXhwYW5kZWQnKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLWxheWVyLS1uby10cmFuc2l0aW9uJyk7XHJcbiAgICAgICAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS1sYXllci0tc2ltcGxlJyk7XHJcbiAgICAgICAgfSwgdGltZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGFya21vZGUtbGF5ZXItLXNpbXBsZScpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGFya21vZGUtbGF5ZXItLW5vLXRyYW5zaXRpb24nKTtcclxuICAgICAgICAgIGxheWVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rhcmttb2RlLWxheWVyLS1leHBhbmRlZCcpO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnZGFya21vZGUtdG9nZ2xlLS13aGl0ZScpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2Rhcmttb2RlLS1hY3RpdmF0ZWQnKTtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXJrbW9kZScsICFpc0Rhcmttb2RlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgY29uc3QgbGF5ZXIgPSB0aGlzLmxheWVyO1xyXG4gICAgY29uc3QgaXNEYXJrbW9kZSA9IHRoaXMuaXNBY3RpdmF0ZWQoKTtcclxuXHJcbiAgICBsYXllci5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrbW9kZS1sYXllci0tc2ltcGxlJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2Rhcmttb2RlLS1hY3RpdmF0ZWQnKTtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGFya21vZGUnLCAhaXNEYXJrbW9kZSk7XHJcbiAgfVxyXG5cclxuICBpc0FjdGl2YXRlZCgpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnZGFya21vZGUtLWFjdGl2YXRlZCcpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgRGFya21vZGUgZnJvbSAnLi9kYXJrbW9kZSc7XHJcbmV4cG9ydCBkZWZhdWx0IERhcmttb2RlO1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUgKi9cclxuKGZ1bmN0aW9uKHdpbmRvdyl7XHJcbiAgd2luZG93LkRhcmttb2RlID0gRGFya21vZGU7XHJcbn0pKHdpbmRvdylcclxuLyogZXNsaW50LWVuYWJsZSAqL1xyXG4iXSwic291cmNlUm9vdCI6IiJ9