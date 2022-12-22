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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'F:\\Github\\solo-proyect\\node_modules\\react\\index.js'");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _MainContent = __webpack_require__(6);

var _MainContent2 = _interopRequireDefault(_MainContent);

var _ProfileImage = __webpack_require__(8);

var _ProfileImage2 = _interopRequireDefault(_ProfileImage);

var _Navbar = __webpack_require__(7);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return _react2.default.createElement(
    'div',
    { className: 'App' },
    _react2.default.createElement(_ProfileImage2.default, null),
    _react2.default.createElement(_Navbar2.default, null),
    _react2.default.createElement(_MainContent2.default, null)
  );
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'F:\\Github\\solo-proyect\\node_modules\\react-dom\\index.js'");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MainContent;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MainContent() {
  return _react2.default.createElement('main', null);
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navbar;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleClick() {
  // Open the default email client with a new message pre-populated with the desired recipient and subject
  // Para enviar mail: window.location.href = 'mailto:recipient@example.com?subject=Email%20Subject';
  // Para abrir linkedIn: window.location.href()
  // Proximamente: function para definir si vamos a linkedIn o enviamos mail
  console.log('enviar mail o ir a likedIn');
}
function CreateButton(props) {
  console.log('se cre\xF3 ' + props.texto);
  return _react2.default.createElement(
    'div',
    { className: props.texto },
    _react2.default.createElement(
      'button',
      {
        className: 'btn btn-light ',
        onClick: handleClick
      },
      _react2.default.createElement('img', {
        src: props.logo,
        alt: 'Logo',
        className: 'button-logo'
      }),
      props.texto
    )
  );
}

function Navbar() {
  return _react2.default.createElement(
    'nav',
    { className: 'Navbar' },
    _react2.default.createElement(
      'h1',
      null,
      'Joaquin Akerman'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Developer'
    ),
    _react2.default.createElement(
      'a',
      {
        className: 'btn btn-link',
        href: 'https://github.com/JoaquinAkerman'
      },
      'My GitHub'
    ),
    _react2.default.createElement(
      'div',
      { className: 'ButtonsContainer' },
      _react2.default.createElement(CreateButton, {
        texto: 'Email',
        logo: '../images/mail-logo.png'
      }),
      _react2.default.createElement(CreateButton, {
        texto: 'LinkedIn',
        logo: '../images/LinkedIn-logo.png'
      })
    )
  );
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProfileImage;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProfileImage() {
  return _react2.default.createElement('img', {
    className: 'ProfileImage',
    src: '../images/computer-guy.png'
  });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(4);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('root'));
////

/***/ })
/******/ ]);