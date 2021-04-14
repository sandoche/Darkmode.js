(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
  else if (typeof define === 'function' && define.amd) define('darkmode-js', [], factory);
  else if (typeof exports === 'object') exports['darkmode-js'] = factory();
  else root['darkmode-js'] = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  return /******/ (function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {}
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
        /******/
      }
      /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function (exports) {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (value, mode) {
      /******/ if (mode & 1) value = __webpack_require__(value);
      /******/ if (mode & 8) return value;
      /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
      /******/ if (mode & 2 && typeof value != 'string')
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function (key) {
              return value[key];
            }.bind(null, key)
          );
      /******/ return ns;
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function (module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default'];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, 'a', getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = './src/index.js'));
    /******/
  })(
    /************************************************************************/
    /******/ {
      /***/ './src/darkmode.js':
        /*!*************************!*\
  !*** ./src/darkmode.js ***!
  \*************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {
            value: true
          });
          exports.default = exports.IS_BROWSER = void 0;

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
          }

          var IS_BROWSER = typeof window !== 'undefined';
          exports.IS_BROWSER = IS_BROWSER;

          var Darkmode =
            /*#__PURE__*/
            (function () {
              function Darkmode(options) {
                _classCallCheck(this, Darkmode);

                if (!IS_BROWSER) {
                  return;
                }

                var defaultOptions = {
                  bottom: '32px',
                  right: '32px',
                  left: 'unset',
                  time: '0.3s',
                  mixColor: '#fff',
                  backgroundColor: '#fff',
                  buttonColorDark: '#100f2c',
                  buttonColorLight: '#fff',
                  label: '',
                  saveInCookies: true,
                  autoMatchOsTheme: true
                };
                options = Object.assign({}, defaultOptions, options);
                var css = '\n      .darkmode-layer {\n        position: fixed;\n        pointer-events: none;\n        background: '
                  .concat(options.mixColor, ';\n        transition: all ')
                  .concat(
                    options.time,
                    ' ease;\n        mix-blend-mode: difference;\n      }\n\n      .darkmode-layer--button {\n        width: 2.9rem;\n        height: 2.9rem;\n        border-radius: 50%;\n        right: '
                  )
                  .concat(options.right, ';\n        bottom: ')
                  .concat(options.bottom, ';\n        left: ')
                  .concat(
                    options.left,
                    ';\n      }\n\n      .darkmode-layer--simple {\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        transform: scale(1) !important;\n      }\n\n      .darkmode-layer--expanded {\n        transform: scale(100);\n        border-radius: 0;\n      }\n\n      .darkmode-layer--no-transition {\n        transition: none;\n      }\n\n      .darkmode-toggle {\n        background: '
                  )
                  .concat(
                    options.buttonColorDark,
                    ';\n        width: 3rem;\n        height: 3rem;\n        position: fixed;\n        border-radius: 50%;\n        border:none;\n        right: '
                  )
                  .concat(options.right, ';\n        bottom: ')
                  .concat(options.bottom, ';\n        left: ')
                  .concat(
                    options.left,
                    ';\n        cursor: pointer;\n        transition: all 0.5s ease;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .darkmode-toggle--white {\n        background: '
                  )
                  .concat(
                    options.buttonColorLight,
                    ';\n      }\n\n      .darkmode-toggle--inactive {\n        display: none;\n      }\n\n      .darkmode-background {\n        background: '
                  )
                  .concat(
                    options.backgroundColor,
                    ';\n        position: fixed;\n        pointer-events: none;\n        z-index: -10;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n      }\n\n      img, .darkmode-ignore {\n        isolation: isolate;\n        display: inline-block;\n      }\n\n      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n        .darkmode-toggle {display: none !important}\n      }\n\n      @supports (-ms-ime-align:auto), (-ms-accelerator:true) {\n        .darkmode-toggle {display: none !important}\n      }\n    '
                  );
                var layer = document.createElement('div');
                var button = document.createElement('button');
                var background = document.createElement('div');
                button.innerHTML = options.label;
                button.classList.add('darkmode-toggle--inactive');
                layer.classList.add('darkmode-layer');
                background.classList.add('darkmode-background');
                var darkmodeActivated = window.localStorage.getItem('darkmode') === 'true';
                var preferedThemeOs =
                  options.autoMatchOsTheme && window.matchMedia('(prefers-color-scheme: dark)').matches;
                var darkmodeNeverActivatedByAction = window.localStorage.getItem('darkmode') === null;

                if (
                  (darkmodeActivated === true && options.saveInCookies) ||
                  (darkmodeNeverActivatedByAction && preferedThemeOs)
                ) {
                  layer.classList.add(
                    'darkmode-layer--expanded',
                    'darkmode-layer--simple',
                    'darkmode-layer--no-transition'
                  );
                  button.classList.add('darkmode-toggle--white');
                  document.body.classList.add('darkmode--activated');
                }

                document.body.insertBefore(button, document.body.firstChild);
                document.body.insertBefore(layer, document.body.firstChild);
                document.body.insertBefore(background, document.body.firstChild);
                this.addStyle(css);
                this.button = button;
                this.layer = layer;
                this.saveInCookies = options.saveInCookies;
                this.time = options.time;
              }

              _createClass(Darkmode, [
                {
                  key: 'addStyle',
                  value: function addStyle(css) {
                    var linkElement = document.createElement('link');
                    linkElement.setAttribute('rel', 'stylesheet');
                    linkElement.setAttribute('type', 'text/css');
                    linkElement.setAttribute(
                      'href',
                      'data:text/css;charset=UTF-8,' + encodeURIComponent(css)
                    );
                    document.head.appendChild(linkElement);
                  }
                },
                {
                  key: 'showWidget',
                  value: function showWidget() {
                    var _this = this;

                    if (!IS_BROWSER) {
                      return;
                    }

                    var button = this.button;
                    var layer = this.layer;
                    var time = parseFloat(this.time) * 1000;
                    button.classList.add('darkmode-toggle');
                    button.classList.remove('darkmode-toggle--inactive');
                    button.setAttribute('aria-label', 'Activate dark mode');
                    button.setAttribute('aria-checked', 'false');
                    button.setAttribute('role', 'checkbox');
                    layer.classList.add('darkmode-layer--button');
                    button.addEventListener('click', function () {
                      var isDarkmode = _this.isActivated();

                      if (!isDarkmode) {
                        layer.classList.add('darkmode-layer--expanded');
                        button.setAttribute('disabled', true);
                        setTimeout(function () {
                          layer.classList.add('darkmode-layer--no-transition');
                          layer.classList.add('darkmode-layer--simple');
                          button.removeAttribute('disabled');
                        }, time);
                      } else {
                        layer.classList.remove('darkmode-layer--simple');
                        button.setAttribute('disabled', true);
                        setTimeout(function () {
                          layer.classList.remove('darkmode-layer--no-transition');
                          layer.classList.remove('darkmode-layer--expanded');
                          button.removeAttribute('disabled');
                        }, 1);
                      }

                      button.classList.toggle('darkmode-toggle--white');
                      document.body.classList.toggle('darkmode--activated');
                      window.localStorage.setItem('darkmode', !isDarkmode);
                    });
                  }
                },
                {
                  key: 'toggle',
                  value: function toggle() {
                    if (!IS_BROWSER) {
                      return;
                    }

                    var layer = this.layer;
                    var isDarkmode = this.isActivated();
                    var button = this.button;
                    layer.classList.toggle('darkmode-layer--simple');
                    document.body.classList.toggle('darkmode--activated');
                    window.localStorage.setItem('darkmode', !isDarkmode);
                    button.setAttribute('aria-label', 'De-activate dark mode');
                    button.setAttribute('aria-checked', 'true');
                  }
                },
                {
                  key: 'isActivated',
                  value: function isActivated() {
                    if (!IS_BROWSER) {
                      return null;
                    }

                    return document.body.classList.contains('darkmode--activated');
                  }
                }
              ]);

              return Darkmode;
            })();

          exports.default = Darkmode;

          /***/
        },

      /***/ './src/index.js':
        /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {
            value: true
          });
          exports.default = void 0;

          var _darkmode = _interopRequireWildcard(__webpack_require__(/*! ./darkmode */ './src/darkmode.js'));

          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc =
                      Object.defineProperty && Object.getOwnPropertyDescriptor
                        ? Object.getOwnPropertyDescriptor(obj, key)
                        : {};
                    if (desc.get || desc.set) {
                      Object.defineProperty(newObj, key, desc);
                    } else {
                      newObj[key] = obj[key];
                    }
                  }
                }
              }
              newObj.default = obj;
              return newObj;
            }
          }

          var _default = _darkmode.default;
          /* eslint-disable */

          exports.default = _default;

          if (_darkmode.IS_BROWSER) {
            (function (window) {
              window.Darkmode = _darkmode.default;
            })(window);
          }
          /* eslint-enable */

          module.exports = exports['default'];

          /***/
        }

      /******/
    }
  );
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXJrbW9kZS1qcy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZGFya21vZGUtanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGFya21vZGUtanMvLi9zcmMvZGFya21vZGUuanMiLCJ3ZWJwYWNrOi8vZGFya21vZGUtanMvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiSVNfQlJPV1NFUiIsIndpbmRvdyIsIkRhcmttb2RlIiwib3B0aW9ucyIsImRlZmF1bHRPcHRpb25zIiwiYm90dG9tIiwicmlnaHQiLCJsZWZ0IiwidGltZSIsIm1peENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiYnV0dG9uQ29sb3JEYXJrIiwiYnV0dG9uQ29sb3JMaWdodCIsImxhYmVsIiwic2F2ZUluQ29va2llcyIsImF1dG9NYXRjaE9zVGhlbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJjc3MiLCJsYXllciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJ1dHRvbiIsImJhY2tncm91bmQiLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXJrbW9kZUFjdGl2YXRlZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwcmVmZXJlZFRoZW1lT3MiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImRhcmttb2RlTmV2ZXJBY3RpdmF0ZWRCeUFjdGlvbiIsImJvZHkiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiYWRkU3R5bGUiLCJsaW5rRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInBhcnNlRmxvYXQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiaXNEYXJrbW9kZSIsImlzQWN0aXZhdGVkIiwic2V0VGltZW91dCIsInJlbW92ZUF0dHJpYnV0ZSIsInRvZ2dsZSIsInNldEl0ZW0iLCJjb250YWlucyJdLCJtYXBwaW5n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Q0E5QixjQUFRLENBQUNjLElBQVQsQ0FBY1QsU0FBZCxDQUF3QnlCLE1BQXhCLENBQStCLHFCQUEvQjtBQUNBakQsWUFBTSxDQUFDMkIsWUFBUCxDQUFvQnVCLE9BQXBCLENBQTRCLFVBQTVCLEVBQXdDLENBQUNMLFVBQXpDO0FBQ0F4QixZQUFNLENBQUNpQixZQUFQLENBQW9CLFlBQXBCLEVBQWtDLHVCQUFsQztBQUNBakIsWUFBTSxDQUFDaUIsWUFBUCxDQUFvQixjQUFwQixFQUFvQyxNQUFwQztBQUNEOzs7a0NBRWE7QUFDWixVQUFJLENBQUN2QyxVQUFMLEVBQWlCO0FBQ2YsZUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsYUFBT29CLFFBQVEsQ0FBQ2MsSUFBVCxDQUFjVCxTQUFkLENBQXdCMkIsUUFBeEIsQ0FBaUMscUJBQWpDLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNOSDs7Ozs7QUFHQTs7OztBQUNBLDBCQUFnQjtBQUNkLEdBQUMsVUFBVW5ELE1BQVYsRUFBa0I7QUFDakJBLFVBQU0sQ0FBQ0MsUUFBUDtBQUNELEdBRkQsRUFFR0QsTUFGSDtBQUdEO0FBQ0QiLCJmaWxlIjoiZGFya21vZGUtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImRhcmttb2RlLWpzXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRhcmttb2RlLWpzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRhcmttb2RlLWpzXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGNvbnN0IElTX0JST1dTRVIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFya21vZGUge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgaWYgKCFJU19CUk9XU0VSKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICBib3R0b206ICczMnB4JyxcbiAgICAgIHJpZ2h0OiAnMzJweCcsXG4gICAgICBsZWZ0OiAndW5zZXQnLFxuICAgICAgdGltZTogJzAuM3MnLFxuICAgICAgbWl4Q29sb3I6ICcjZmZmJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgYnV0dG9uQ29sb3JEYXJrOiAnIzEwMGYyYycsXG4gICAgICBidXR0b25Db2xvckxpZ2h0OiAnI2ZmZicsXG4gICAgICBsYWJlbDogJycsXG4gICAgICBzYXZlSW5Db29raWVzOiB0cnVlLFxuICAgICAgYXV0b01hdGNoT3NUaGVtZTogdHJ1ZVxuICAgIH07XG5cbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgY29uc3QgY3NzID0gYFxuICAgICAgLmRhcmttb2RlLWxheWVyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogJHtvcHRpb25zLm1peENvbG9yfTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsICR7b3B0aW9ucy50aW1lfSBlYXNlO1xuICAgICAgICBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcbiAgICAgIH1cblxuICAgICAgLmRhcmttb2RlLWxheWVyLS1idXR0b24ge1xuICAgICAgICB3aWR0aDogMi45cmVtO1xuICAgICAgICBoZWlnaHQ6IDIuOXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICByaWdodDogJHtvcHRpb25zLnJpZ2h0fTtcbiAgICAgICAgYm90dG9tOiAke29wdGlvbnMuYm90dG9tfTtcbiAgICAgICAgbGVmdDogJHtvcHRpb25zLmxlZnR9O1xuICAgICAgfVxuXG4gICAgICAuZGFya21vZGUtbGF5ZXItLXNpbXBsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuZGFya21vZGUtbGF5ZXItLWV4cGFuZGVkIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxMDApO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgfVxuXG4gICAgICAuZGFya21vZGUtbGF5ZXItLW5vLXRyYW5zaXRpb24ge1xuICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICAuZGFya21vZGUtdG9nZ2xlIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHtvcHRpb25zLmJ1dHRvbkNvbG9yRGFya307XG4gICAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6bm9uZTtcbiAgICAgICAgcmlnaHQ6ICR7b3B0aW9ucy5yaWdodH07XG4gICAgICAgIGJvdHRvbTogJHtvcHRpb25zLmJvdHRvbX07XG4gICAgICAgIGxlZnQ6ICR7b3B0aW9ucy5sZWZ0fTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmRhcmttb2RlLXRvZ2dsZS0td2hpdGUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke29wdGlvbnMuYnV0dG9uQ29sb3JMaWdodH07XG4gICAgICB9XG5cbiAgICAgIC5kYXJrbW9kZS10b2dnbGUtLWluYWN0aXZlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmRhcmttb2RlLWJhY2tncm91bmQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke29wdGlvbnMuYmFja2dyb3VuZENvbG9yfTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgei1pbmRleDogLTEwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgIGltZywgLmRhcmttb2RlLWlnbm9yZSB7XG4gICAgICAgIGlzb2xhdGlvbjogaXNvbGF0ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSksICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xuICAgICAgICAuZGFya21vZGUtdG9nZ2xlIHtkaXNwbGF5OiBub25lICFpbXBvcnRhbnR9XG4gICAgICB9XG5cbiAgICAgIEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjphdXRvKSwgKC1tcy1hY2NlbGVyYXRvcjp0cnVlKSB7XG4gICAgICAgIC5kYXJrbW9kZS10b2dnbGUge2Rpc3BsYXk6IG5vbmUgIWltcG9ydGFudH1cbiAgICAgIH1cbiAgICBgO1xuXG4gICAgY29uc3QgbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBidXR0b24uaW5uZXJIVE1MID0gb3B0aW9ucy5sYWJlbDtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtdG9nZ2xlLS1pbmFjdGl2ZScpO1xuICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLWxheWVyJyk7XG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS1iYWNrZ3JvdW5kJyk7XG5cbiAgICBjb25zdCBkYXJrbW9kZUFjdGl2YXRlZCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya21vZGUnKSA9PT0gJ3RydWUnO1xuICAgIGNvbnN0IHByZWZlcmVkVGhlbWVPcyA9XG4gICAgICBvcHRpb25zLmF1dG9NYXRjaE9zVGhlbWUgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzO1xuICAgIGNvbnN0IGRhcmttb2RlTmV2ZXJBY3RpdmF0ZWRCeUFjdGlvbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya21vZGUnKSA9PT0gbnVsbDtcblxuICAgIGlmIChcbiAgICAgIChkYXJrbW9kZUFjdGl2YXRlZCA9PT0gdHJ1ZSAmJiBvcHRpb25zLnNhdmVJbkNvb2tpZXMpIHx8XG4gICAgICAoZGFya21vZGVOZXZlckFjdGl2YXRlZEJ5QWN0aW9uICYmIHByZWZlcmVkVGhlbWVPcylcbiAgICApIHtcbiAgICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICdkYXJrbW9kZS1sYXllci0tZXhwYW5kZWQnLFxuICAgICAgICAnZGFya21vZGUtbGF5ZXItLXNpbXBsZScsXG4gICAgICAgICdkYXJrbW9kZS1sYXllci0tbm8tdHJhbnNpdGlvbidcbiAgICAgICk7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtdG9nZ2xlLS13aGl0ZScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS0tYWN0aXZhdGVkJyk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoYnV0dG9uLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGxheWVyLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGJhY2tncm91bmQsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG5cbiAgICB0aGlzLmFkZFN0eWxlKGNzcyk7XG5cbiAgICB0aGlzLmJ1dHRvbiA9IGJ1dHRvbjtcbiAgICB0aGlzLmxheWVyID0gbGF5ZXI7XG4gICAgdGhpcy5zYXZlSW5Db29raWVzID0gb3B0aW9ucy5zYXZlSW5Db29raWVzO1xuICAgIHRoaXMudGltZSA9IG9wdGlvbnMudGltZTtcbiAgfVxuXG4gIGFkZFN0eWxlKGNzcykge1xuICAgIGNvbnN0IGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuXG4gICAgbGlua0VsZW1lbnQuc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xuICAgIGxpbmtFbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICAgIGxpbmtFbGVtZW50LnNldEF0dHJpYnV0ZSgnaHJlZicsICdkYXRhOnRleHQvY3NzO2NoYXJzZXQ9VVRGLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudChjc3MpKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmtFbGVtZW50KTtcbiAgfVxuXG4gIHNob3dXaWRnZXQoKSB7XG4gICAgaWYgKCFJU19CUk9XU0VSKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuYnV0dG9uO1xuICAgIGNvbnN0IGxheWVyID0gdGhpcy5sYXllcjtcbiAgICBjb25zdCB0aW1lID0gcGFyc2VGbG9hdCh0aGlzLnRpbWUpICogMTAwMDtcblxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS10b2dnbGUnKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZGFya21vZGUtdG9nZ2xlLS1pbmFjdGl2ZScpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnQWN0aXZhdGUgZGFyayBtb2RlJyk7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgJ2ZhbHNlJyk7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgncm9sZScsICdjaGVja2JveCcpO1xuICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLWxheWVyLS1idXR0b24nKTtcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGlzRGFya21vZGUgPSB0aGlzLmlzQWN0aXZhdGVkKCk7XG5cbiAgICAgIGlmICghaXNEYXJrbW9kZSkge1xuICAgICAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS1sYXllci0tZXhwYW5kZWQnKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtbGF5ZXItLW5vLXRyYW5zaXRpb24nKTtcbiAgICAgICAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS1sYXllci0tc2ltcGxlJyk7XG4gICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgfSwgdGltZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXllci5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrbW9kZS1sYXllci0tc2ltcGxlJyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGxheWVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rhcmttb2RlLWxheWVyLS1uby10cmFuc2l0aW9uJyk7XG4gICAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGFya21vZGUtbGF5ZXItLWV4cGFuZGVkJyk7XG4gICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgfSwgMSk7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrbW9kZS10b2dnbGUtLXdoaXRlJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2Rhcmttb2RlLS1hY3RpdmF0ZWQnKTtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGFya21vZGUnLCAhaXNEYXJrbW9kZSk7XG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKCFJU19CUk9XU0VSKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGxheWVyID0gdGhpcy5sYXllcjtcbiAgICBjb25zdCBpc0Rhcmttb2RlID0gdGhpcy5pc0FjdGl2YXRlZCgpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuYnV0dG9uO1xuXG4gICAgbGF5ZXIuY2xhc3NMaXN0LnRvZ2dsZSgnZGFya21vZGUtbGF5ZXItLXNpbXBsZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFya21vZGUtLWFjdGl2YXRlZCcpO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGFya21vZGUnLCAhaXNEYXJrbW9kZSk7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdEZS1hY3RpdmF0ZSBkYXJrIG1vZGUnKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCAndHJ1ZScpO1xuICB9XG5cbiAgaXNBY3RpdmF0ZWQoKSB7XG4gICAgaWYgKCFJU19CUk9XU0VSKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrbW9kZS0tYWN0aXZhdGVkJyk7XG4gIH1cbn1cbiIsImltcG9ydCBEYXJrbW9kZSwgeyBJU19CUk9XU0VSIH0gZnJvbSAnLi9kYXJrbW9kZSc7XG5leHBvcnQgZGVmYXVsdCBEYXJrbW9kZTtcblxuLyogZXNsaW50LWRpc2FibGUgKi9cbmlmIChJU19CUk9XU0VSKSB7XG4gIChmdW5jdGlvbiAod2luZG93KSB7XG4gICAgd2luZG93LkRhcmttb2RlID0gRGFya21vZGU7XG4gIH0pKHdpbmRvdyk7XG59XG4vKiBlc2xpbnQtZW5hYmxlICovXG4iXSwic291cmNlUm9vdCI6IiJ9
