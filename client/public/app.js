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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/App.jsx":
/*!***************************************!*\
  !*** ./client/src/components/App.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Navbar_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar.jsx */ \"./client/src/components/Navbar.jsx\");\n/* harmony import */ var _Header_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.jsx */ \"./client/src/components/Header.jsx\");\n/* harmony import */ var _ProjectSection_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectSection.jsx */ \"./client/src/components/ProjectSection.jsx\");\n/* harmony import */ var _ScrollToTop_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ScrollToTop.jsx */ \"./client/src/components/ScrollToTop.jsx\");\n/* harmony import */ var _utils_theme_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/theme.js */ \"./client/src/utils/theme.js\");\n/* harmony import */ var _css_app_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/app.module.css */ \"./client/src/css/app.module.css\");\n/* harmony import */ var _css_app_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_app_module_css__WEBPACK_IMPORTED_MODULE_7__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\n\n\nvar App = /*#__PURE__*/function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  var _super = _createSuper(App);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var jssStyles = document.querySelector('#jss-server-side');\n\n      if (jssStyles) {\n        jssStyles.parentElement.removeChild(jssStyles);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n        theme: _utils_theme_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectSection_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ScrollToTop_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./client/src/components/App.jsx?");

/***/ }),

/***/ "./client/src/components/Bio.jsx":
/*!***************************************!*\
  !*** ./client/src/components/Bio.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bio; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-typist */ \"react-typist\");\n/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_typist__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _img_phils_avatar_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/phils-avatar.jpg */ \"./client/src/img/phils-avatar.jpg\");\n/* harmony import */ var _css_bio_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/bio.module.css */ \"./client/src/css/bio.module.css\");\n/* harmony import */ var _css_bio_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_bio_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Bio(_ref) {\n  var show = _ref.show;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: _css_bio_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bioRoot\n  }, show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: _css_bio_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bioContainer\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    id: _css_bio_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bioAvatar,\n    alt: \"Philip Nguyen\",\n    src: _img_phils_avatar_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: _css_bio_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bio\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    variant: \"body1\",\n    component: \"h3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    avgTypingSpeed: 50,\n    startDelay: 1000,\n    cursor: {\n      hideWhenDone: true\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    id: _css_bio_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bio,\n    className: style.white\n  }, \"Hello world! Welcome to my portfolio. I am an autonomous and passionate software engineer who loves building applications using popular and modern technologies; such as React, NodeJS, MongoDB and many more. I thrive in solving complex problems, as frustrating as it can be sometimes I enjoy the reward in debugging and making my code work. I started my journey by wanting a career change and took some software engineering immersive where I spent thousands of hours gaining my experiences. My biggest take way from this was the ability to learn how to learn and to never stop acquiring knowledge. I'm confident my skills will take me wherever I want to go in this field.\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"On my spare time I love practicing mindful meditation, brazilian jiu-jitsu, and making simple and delightful meals for my family.\"))))) : null);\n}\n;\n\n//# sourceURL=webpack:///./client/src/components/Bio.jsx?");

/***/ }),

/***/ "./client/src/components/ContactMeForm.jsx":
/*!*************************************************!*\
  !*** ./client/src/components/ContactMeForm.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ContactMeForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ \"@material-ui/core/Dialog\");\n/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControl */ \"@material-ui/core/FormControl\");\n/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/InputLabel */ \"@material-ui/core/InputLabel\");\n/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/OutlinedInput */ \"@material-ui/core/OutlinedInput\");\n/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ \"@material-ui/core/DialogTitle\");\n/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogActions */ \"@material-ui/core/DialogActions\");\n/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Close */ \"@material-ui/icons/Close\");\n/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _css_contactMeForm_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../css/contactMeForm.module.css */ \"./client/src/css/contactMeForm.module.css\");\n/* harmony import */ var _css_contactMeForm_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_css_contactMeForm_module_css__WEBPACK_IMPORTED_MODULE_12__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar styled = function styled(theme) {\n  return {\n    root: {\n      margin: 0,\n      padding: theme.spacing(2)\n    },\n    closeButton: {\n      position: 'absolute',\n      right: theme.spacing(1),\n      top: theme.spacing(1),\n      color: theme.palette.grey[500]\n    }\n  };\n};\n\nvar DialogTitle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])(styled)(function (props) {\n  var children = props.children,\n      classes = props.classes,\n      onClose = props.onClose,\n      other = _objectWithoutProperties(props, [\"children\", \"classes\", \"onClose\"]);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default.a, _extends({\n    disableTypography: true,\n    className: classes.root\n  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {\n    variant: \"h6\"\n  }, children), onClose ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default.a, {\n    \"aria-label\": \"close\",\n    className: classes.closeButton,\n    onClick: onClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10___default.a, null)) : null);\n});\nvar DialogActions = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])(function (theme) {\n  return {\n    root: {\n      margin: 0,\n      padding: theme.spacing(1)\n    }\n  };\n})(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8___default.a);\nfunction ContactMeForm(_ref) {\n  var open = _ref.open,\n      handleClose = _ref.handleClose;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      _useState2 = _slicedToArray(_useState, 2),\n      name = _useState2[0],\n      setName = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      _useState4 = _slicedToArray(_useState3, 2),\n      email = _useState4[0],\n      setEmail = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      _useState6 = _slicedToArray(_useState5, 2),\n      title = _useState6[0],\n      setTitle = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      _useState8 = _slicedToArray(_useState7, 2),\n      message = _useState8[0],\n      setMessage = _useState8[1];\n\n  var handleEmail = function handleEmail(e) {\n    e.preventDefault();\n    var requestOptions = {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        name: name,\n        email: email,\n        title: title,\n        message: message\n      })\n    };\n    fetch('/api/sendemail', requestOptions).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      console.log(data);\n    });\n    handleClose();\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    onClose: handleClose,\n    \"aria-labelledby\": \"contact-me-title\",\n    open: open\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DialogTitle, {\n    id: _css_contactMeForm_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.contactMeTitle,\n    onClose: handleClose\n  }, \"Contact me\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: function onSubmit(e) {\n      return handleEmail(e);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    variant: \"outlined\",\n    className: _css_contactMeForm_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.width100\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    htmlFor: \"name-input\"\n  }, \"Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    required: true,\n    id: \"name-input\",\n    value: name,\n    onChange: function onChange(e) {\n      setName(e.target.value);\n    },\n    className: _css_contactMeForm_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.textFieldMargin,\n    label: \"Name\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    variant: \"outlined\",\n    className: _css_contactMeForm_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.w - 100\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    htmlFor: \"email-input\"\n  }, \"Email\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    required: true,\n    id: \"email-input\",\n    value: email,\n    onChange: function onChange(e) {\n      setEmail(e.target.value);\n    },\n    className: _css_contactMeForm_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.textFieldMargin,\n    label: \"Email\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    variant: \"outlined\",\n    className: _css_contactMeForm_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.w - 100\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    htmlFor: \"title-input\"\n  }, \"Title\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    required: true,\n    id: \"title-input\",\n    value: title,\n    onChange: function onChange(e) {\n      setTitle(e.target.value);\n    },\n    className: _css_contactMeForm_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.textFieldMargin,\n    label: \"Title\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    variant: \"outlined\",\n    className: _css_contactMeForm_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.w - 100\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    htmlFor: \"message-input\"\n  }, \"Message\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    required: true,\n    id: \"message-input\",\n    value: message,\n    onChange: function onChange(e) {\n      setMessage(e.target.value);\n    },\n    multiline: true,\n    rows: 4,\n    label: \"Message\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DialogActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    autoFocus: true,\n    type: \"submit\",\n    color: \"primary\"\n  }, \"Email me\")))));\n}\n\n//# sourceURL=webpack:///./client/src/components/ContactMeForm.jsx?");

/***/ }),

/***/ "./client/src/components/Header.jsx":
/*!******************************************!*\
  !*** ./client/src/components/Header.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-typist */ \"react-typist\");\n/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_typist__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Bio_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Bio.jsx */ \"./client/src/components/Bio.jsx\");\n/* harmony import */ var _css_header_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/header.module.css */ \"./client/src/css/header.module.css\");\n/* harmony import */ var _css_header_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_header_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _img_Philip_Nguyen_Portfolio_Header_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/Philip_Nguyen_Portfolio_Header.png */ \"./client/src/img/Philip_Nguyen_Portfolio_Header.png\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(function (theme) {\n  return {\n    title: {\n      flexGrow: 1,\n      color: 'white'\n    }\n  };\n});\nfunction Header() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      show = _useState2[0],\n      setShow = _useState2[1];\n\n  var classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: _css_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headerRoot,\n    style: {\n      backgroundImage: \"url(\".concat(_img_Philip_Nguyen_Portfolio_Header_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"], \")\")\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: _css_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headerContainer\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: _css_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headerTitle\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    avgTypingSpeed: 70,\n    startDelay: 1000,\n    cursor: {\n      hideWhenDone: true\n    },\n    onTypingDone: function onTypingDone() {\n      setShow(true);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: classes.title,\n    variant: \"h3\",\n    component: \"h1\"\n  }, \"Software Engineer\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_1___default.a.Delay, {\n    ms: 500\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: classes.title,\n    variant: \"h3\",\n    component: \"h1\"\n  }, \"Full-Stack Developer\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_1___default.a.Delay, {\n    ms: 1000\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Bio_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    show: show\n  })));\n}\n\n//# sourceURL=webpack:///./client/src/components/Header.jsx?");

/***/ }),

/***/ "./client/src/components/Navbar.jsx":
/*!******************************************!*\
  !*** ./client/src/components/Navbar.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Navbar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"@material-ui/core/AppBar\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Badge */ \"@material-ui/core/Badge\");\n/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_icons_Description__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Description */ \"@material-ui/icons/Description\");\n/* harmony import */ var _material_ui_icons_Description__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Description__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/GitHub */ \"@material-ui/icons/GitHub\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"@material-ui/core/Toolbar\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Mail */ \"@material-ui/icons/Mail\");\n/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ \"@material-ui/icons/LinkedIn\");\n/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_icons_Reorder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Reorder */ \"@material-ui/icons/Reorder\");\n/* harmony import */ var _material_ui_icons_Reorder__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Reorder__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Tooltip */ \"@material-ui/core/Tooltip\");\n/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _ContactMeForm_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ContactMeForm.jsx */ \"./client/src/components/ContactMeForm.jsx\");\n/* harmony import */ var _TechStack_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TechStack.jsx */ \"./client/src/components/TechStack.jsx\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__[\"makeStyles\"])(function (theme) {\n  return {\n    title: {\n      flexGrow: 1\n    }\n  };\n});\nfunction Navbar(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      open = _useState2[0],\n      setOpen = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState4 = _slicedToArray(_useState3, 2),\n      openSnack = _useState4[0],\n      setOpenSnack = _useState4[1];\n\n  var classes = useStyles();\n\n  var handleClickOpen = function handleClickOpen() {\n    setOpen(true);\n  };\n\n  var handleClose = function handleClose() {\n    setOpen(false);\n  };\n\n  var handleSnackClick = function handleSnackClick() {\n    setOpenSnack(true);\n  };\n\n  var handleSnackClose = function handleSnackClose(e) {\n    setOpenSnack(false);\n  };\n\n  var handleResume = function handleResume(e) {\n    e.preventDefault();\n    window.open('https://docs.google.com/document/d/1qEdbKS61fG_OtjtHqElVrT-X3hzc37UkKBveqJE8-o8/edit?usp=sharing', '_blank', 'noopener');\n  };\n\n  var handleGithub = function handleGithub(e) {\n    e.preventDefault();\n    window.open('https://github.com/Nguyephi', '_blank', 'noopener');\n  };\n\n  var handleLinkedin = function handleLinkedin(e) {\n    e.preventDefault();\n    window.open('https://www.linkedin.com/in/nguyephi/', '_blank', 'noopener');\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {\n    variant: \"h6\",\n    className: classes.title\n  }, \"Philip Nguyen\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    onClick: function onClick(e) {\n      return handleResume(e);\n    },\n    \"aria-label\": \"resume\",\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_10___default.a, {\n    title: \"Resume\",\n    arrow: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    color: \"secondary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Description__WEBPACK_IMPORTED_MODULE_3___default.a, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    onClick: handleClickOpen,\n    \"aria-label\": \"contact me\",\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_10___default.a, {\n    title: \"Contact Me\",\n    arrow: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    color: \"secondary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_7___default.a, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    onClick: function onClick(e) {\n      return handleGithub(e);\n    },\n    \"aria-label\": \"github\",\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_10___default.a, {\n    title: \"Github\",\n    arrow: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    color: \"secondary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_4___default.a, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    onClick: function onClick(e) {\n      return handleLinkedin(e);\n    },\n    \"aria-label\": \"linkedin\",\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_10___default.a, {\n    title: \"LinkedIn\",\n    arrow: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    color: \"secondary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_8___default.a, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    onClick: handleSnackClick,\n    \"aria-label\": \"techStack\",\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_10___default.a, {\n    title: \"Tech Stack\",\n    arrow: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    color: \"secondary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Reorder__WEBPACK_IMPORTED_MODULE_9___default.a, null)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TechStack_jsx__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    openSnack: openSnack,\n    handleSnackClose: handleSnackClose\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContactMeForm_jsx__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n    open: open,\n    handleClose: handleClose\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    id: \"back-to-top-anchor\"\n  }));\n}\n\n//# sourceURL=webpack:///./client/src/components/Navbar.jsx?");

/***/ }),

/***/ "./client/src/components/ProjectSection.jsx":
/*!**************************************************!*\
  !*** ./client/src/components/ProjectSection.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProjectSection; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Link */ \"@material-ui/core/Link\");\n/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _data_projectData_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/projectData.json */ \"./client/src/data/projectData.json\");\nvar _data_projectData_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/projectData.json */ \"./client/src/data/projectData.json\", 1);\n/* harmony import */ var _css_projectSection_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/projectSection.module.css */ \"./client/src/css/projectSection.module.css\");\n/* harmony import */ var _css_projectSection_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_projectSection_module_css__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])({\n  root: {\n    maxWidth: '50%',\n    marginLeft: 'auto',\n    marginRight: 'auto',\n    marginBottom: '1em',\n    paddingLeft: '1em',\n    paddingRight: '1em'\n  },\n  projectTitle: {\n    marginBottom: 7\n  },\n  media: {\n    height: 140\n  }\n});\nfunction ProjectSection() {\n  var classes = useStyles();\n\n  var RenderProjects = function RenderProjects() {\n    var firstKeyCount = 0;\n    var secondKeyCount = 0;\n    return _data_projectData_json__WEBPACK_IMPORTED_MODULE_7__.repos.map(function (_ref) {\n      var repo_title = _ref.repo_title,\n          job_title = _ref.job_title,\n          repo_subtitle = _ref.repo_subtitle,\n          repo_techStack = _ref.repo_techStack,\n          bullet_point = _ref.bullet_point,\n          repo_link = _ref.repo_link;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        key: firstKeyCount++,\n        className: classes.root\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        className: classes.projectTitle,\n        variant: \"h5\",\n        component: \"h2\"\n      }, repo_title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        variant: \"subtitle1\",\n        component: \"h4\"\n      }, repo_subtitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        gutterBottom: true,\n        variant: \"body2\",\n        component: \"h4\"\n      }, job_title, \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"black divider-style\"\n      }, \"|\"), \" \", repo_techStack), bullet_point.map(function (talkingPoint) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          key: secondKeyCount++\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          variant: \"caption\",\n          color: \"textSecondary\",\n          component: \"p\"\n        }, \"\\u2022 \", talkingPoint));\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        size: \"Large\",\n        variant: \"body2\",\n        color: \"primary\",\n        href: repo_link,\n        target: \"_blank\",\n        rel: \"noopener noreferrer\"\n      }, \"REPO\")));\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: _css_projectSection_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.projectRoot\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    id: _css_projectSection_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.projectTitle,\n    variant: \"h3\",\n    component: \"h1\"\n  }, \"Featured Applications\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RenderProjects, null));\n}\n;\n\n//# sourceURL=webpack:///./client/src/components/ProjectSection.jsx?");

/***/ }),

/***/ "./client/src/components/ScrollToTop.jsx":
/*!***********************************************!*\
  !*** ./client/src/components/ScrollToTop.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScrollToTop; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Fab */ \"@material-ui/core/Fab\");\n/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowUp */ \"@material-ui/icons/KeyboardArrowUp\");\n/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ \"@material-ui/core/useScrollTrigger\");\n/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Zoom */ \"@material-ui/core/Zoom\");\n/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      position: 'fixed',\n      bottom: theme.spacing(2),\n      right: theme.spacing(2)\n    }\n  };\n});\n\nfunction ScrollTop(props) {\n  var children = props.children,\n      window = props.window;\n  var classes = useStyles(); // Note that you normally won't need to set the window ref as useScrollTrigger\n  // will default to window.\n  // This is only being set here because the demo is in an iframe.\n\n  var trigger = _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_4___default()({\n    target: window ? window() : undefined,\n    disableHysteresis: true,\n    threshold: 100\n  });\n\n  var handleClick = function handleClick(event) {\n    var anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');\n\n    if (anchor) {\n      anchor.scrollIntoView({\n        behavior: 'smooth',\n        block: 'center'\n      });\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    \"in\": trigger\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    onClick: handleClick,\n    role: \"presentation\",\n    className: classes.root\n  }, children));\n}\n\nfunction ScrollToTop(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScrollTop, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    color: \"primary\",\n    size: \"small\",\n    \"aria-label\": \"scroll back to top\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_3___default.a, null)));\n}\n\n//# sourceURL=webpack:///./client/src/components/ScrollToTop.jsx?");

/***/ }),

/***/ "./client/src/components/TechStack.jsx":
/*!*********************************************!*\
  !*** ./client/src/components/TechStack.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TechStack; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Close */ \"@material-ui/icons/Close\");\n/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Snackbar */ \"@material-ui/core/Snackbar\");\n/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _data_portfolioTechStack_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/portfolioTechStack.json */ \"./client/src/data/portfolioTechStack.json\");\nvar _data_portfolioTechStack_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/portfolioTechStack.json */ \"./client/src/data/portfolioTechStack.json\", 1);\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__[\"makeStyles\"])(function (theme) {\n  return {\n    snackTitle: {\n      marginBottom: 3\n    },\n    snackButton: {\n      marginBottom: 103\n    }\n  };\n});\nfunction TechStack(_ref) {\n  var openSnack = _ref.openSnack,\n      handleSnackClose = _ref.handleSnackClose;\n  var classes = useStyles();\n\n  var RenderTechStack = function RenderTechStack() {\n    var keyCount = 0;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n      className: classes.snackTitle\n    }, \"This application was created with\"), _data_portfolioTechStack_json__WEBPACK_IMPORTED_MODULE_6__.techStack.map(function (tech) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: keyCount++\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        variant: \"body2\",\n        component: \"h4\"\n      }, tech));\n    }));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    anchorOrigin: {\n      vertical: 'bottom',\n      horizontal: 'left'\n    },\n    open: openSnack,\n    autoHideDuration: 60000,\n    onClose: handleSnackClose,\n    message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RenderTechStack, null),\n    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      className: classes.snackButton,\n      size: \"small\",\n      \"aria-label\": \"close\",\n      color: \"inherit\",\n      onClick: handleSnackClose\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      fontSize: \"small\"\n    })))\n  });\n}\n\n//# sourceURL=webpack:///./client/src/components/TechStack.jsx?");

/***/ }),

/***/ "./client/src/css/app.module.css":
/*!***************************************!*\
  !*** ./client/src/css/app.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./client/src/css/app.module.css?");

/***/ }),

/***/ "./client/src/css/bio.module.css":
/*!***************************************!*\
  !*** ./client/src/css/bio.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"bio\":\"bio-1Si3w4A\",\"Typist\":\"Typist-Qbjh_8i\",\"Cursor\":\"Cursor-YYaKPNZ\",\"Cursor--blinking\":\"Cursor--blinking-1NghGyC\",\"blink\":\"blink-3BaAuMz\",\"bioRoot\":\"bioRoot-3f3LalA\",\"bioContainer\":\"bioContainer-1FH-0U0\",\"bioAvatar\":\"bioAvatar-nt3xg4X\",\"white\":\"white-3mlii6m\"};\n\n//# sourceURL=webpack:///./client/src/css/bio.module.css?");

/***/ }),

/***/ "./client/src/css/contactMeForm.module.css":
/*!*************************************************!*\
  !*** ./client/src/css/contactMeForm.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"contactMeTitle\":\"contactMeTitle--_5emJx\",\"MuiDialog-paperWidthSm\":\"MuiDialog-paperWidthSm-1NumKcx\",\"textFieldMargin\":\"textFieldMargin-11mR3Bk\",\"width100\":\"width100-2I5FNO6\"};\n\n//# sourceURL=webpack:///./client/src/css/contactMeForm.module.css?");

/***/ }),

/***/ "./client/src/css/header.module.css":
/*!******************************************!*\
  !*** ./client/src/css/header.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"white\":\"white-28U-XUJ\",\"headerRoot\":\"headerRoot-qjxkYWk\",\"headerContainer\":\"headerContainer-3T2j2Wo\",\"headerTitle\":\"headerTitle-1w3Rq6-\",\"header-title\":\"header-title-1KXKJ7v\",\"Typist\":\"Typist-JD-o1zS\",\"Cursor\":\"Cursor-1CahCVd\",\"Cursor--blinking\":\"Cursor--blinking-2uva3Ef\",\"blink\":\"blink-1fryPu8\"};\n\n//# sourceURL=webpack:///./client/src/css/header.module.css?");

/***/ }),

/***/ "./client/src/css/projectSection.module.css":
/*!**************************************************!*\
  !*** ./client/src/css/projectSection.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"projectTitle\":\"projectTitle-17Gso5K\",\"MuiTypography-subtitle1\":\"MuiTypography-subtitle1-Me_kzeB\",\"projectRoot\":\"projectRoot-2w9ntiz\",\"black\":\"black-cczvABB\",\"dividerStyle\":\"dividerStyle-3VtpRVG\",\"MuiLink-underlineHover\":\"MuiLink-underlineHover-25Cutih\"};\n\n//# sourceURL=webpack:///./client/src/css/projectSection.module.css?");

/***/ }),

/***/ "./client/src/data/portfolioTechStack.json":
/*!*************************************************!*\
  !*** ./client/src/data/portfolioTechStack.json ***!
  \*************************************************/
/*! exports provided: techStack, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"techStack\\\":[\\\"MongoDb\\\",\\\"Express\\\",\\\"React\\\",\\\"NodeJs\\\",\\\"Material-UI\\\"]}\");\n\n//# sourceURL=webpack:///./client/src/data/portfolioTechStack.json?");

/***/ }),

/***/ "./client/src/data/projectData.json":
/*!******************************************!*\
  !*** ./client/src/data/projectData.json ***!
  \******************************************/
/*! exports provided: repos, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"repos\\\":[{\\\"repo_title\\\":\\\"Experience It\\\",\\\"job_title\\\":\\\"Back-End Developer\\\",\\\"repo_subtitle\\\":\\\"Inherited legacy code of an application that allowed users to post about their travel experiences\\\",\\\"repo_techStack\\\":\\\"JS, Node.js, Express, PostgreSQL, EC2, New Relic\\\",\\\"bullet_point\\\":[\\\"Wrote Apis using Express and PostgreSQL for reviews service DB and scaled to 100 million records\\\",\\\"Deployed DB and review service to AWS EC2 with SSH and setup via Linux CLI\\\",\\\"Improved performance of queries to under 50ms average with testing on New Relic\\\"],\\\"repo_link\\\":\\\"https://github.com/Nguyephi/Reviews-Service\\\"},{\\\"repo_title\\\":\\\"Game Streamer\\\",\\\"job_title\\\":\\\"Full-Stack Software Engineer\\\",\\\"repo_subtitle\\\":\\\"Dynamically rendered gamer’s video with chat, recommended videos and related channels\\\",\\\"repo_techStack\\\":\\\"JS, React, Node.js, Express, MySQL, Webpack, Babel, EC2\\\",\\\"bullet_point\\\":[\\\"Architected app and deployed video player service AWS/EC2, photos and videos stored on AWS S3\\\",\\\"Collaborated in a team of 4, consolidated work on the modules using agile methodologies and Trello\\\",\\\"Wrote code reviews for team members’ pull requests and received reviews for my own\\\"],\\\"repo_link\\\":\\\"https://github.com/Nguyephi/video-player-service\\\"},{\\\"repo_title\\\":\\\"Tri N Garden\\\",\\\"job_title\\\":\\\"Full-Stack Software Engineer\\\",\\\"repo_subtitle\\\":\\\"A simple garden tracker application that uses a 2d matrix data structure as a virtual garden\\\",\\\"repo_techStack\\\":\\\"JS, React, Node.js, Express, Mongo, Webpack, Babel, Heroku\\\",\\\"bullet_point\\\":[\\\"Built a minimum viable product, with CRUD operations in RESTful API\\\",\\\"Deployed on Heroku using MongoDB\\\",\\\"Made query improvements and tested using New Relic, reduced time from 200ms to 50ms\\\"],\\\"repo_link\\\":\\\"https://github.com/Nguyephi/Tri-N-Garden\\\"},{\\\"repo_title\\\":\\\"Cook this\\\",\\\"job_title\\\":\\\"Full-Stack Software Engineer\\\",\\\"repo_subtitle\\\":\\\"Share posts of food creations with photos and recipes\\\",\\\"repo_techStack\\\":\\\"JS, React, Python, Flask, SQLAlchemy, PostgreSQL, Heroku, Netlify\\\",\\\"bullet_point\\\":[\\\"Created custom sign in and FB oAuth, with error handling\\\",\\\"Architected APIs to dynamically render users post, with like and comment feature\\\",\\\"Deployed server-side on Heroku with PostgreSQL and client-side on Netlify\\\"],\\\"repo_link\\\":\\\"https://github.com/Nguyephi/Cook-this-app\\\"}]}\");\n\n//# sourceURL=webpack:///./client/src/data/projectData.json?");

/***/ }),

/***/ "./client/src/img/Philip_Nguyen_Portfolio_Header.png":
/*!***********************************************************!*\
  !*** ./client/src/img/Philip_Nguyen_Portfolio_Header.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b4e34507228b8ecf37d3da6d049e6021.png\");\n\n//# sourceURL=webpack:///./client/src/img/Philip_Nguyen_Portfolio_Header.png?");

/***/ }),

/***/ "./client/src/img/phils-avatar.jpg":
/*!*****************************************!*\
  !*** ./client/src/img/phils-avatar.jpg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"56559e89f67e0ddcceac82af4db64fd2.jpg\");\n\n//# sourceURL=webpack:///./client/src/img/phils-avatar.jpg?");

/***/ }),

/***/ "./client/src/utils/theme.js":
/*!***********************************!*\
  !*** ./client/src/utils/theme.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors/red */ \"@material-ui/core/colors/red\");\n/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1__);\n\n // Create a theme instance.\n\nvar theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"createMuiTheme\"])({\n  palette: {\n    primary: {\n      main: '#556cd6'\n    },\n    secondary: {\n      main: '#19857b'\n    },\n    error: {\n      main: _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1___default.a.A400\n    },\n    background: {\n      \"default\": '#fff'\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n//# sourceURL=webpack:///./client/src/utils/theme.js?");

/***/ }),

/***/ "./server/app.js":
/*!***********************!*\
  !*** ./server/app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client_src_components_App_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/src/components/App.jsx */ \"./client/src/components/App.jsx\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _client_src_utils_theme_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../client/src/utils/theme.js */ \"./client/src/utils/theme.js\");\n/* harmony import */ var _models___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models/ */ \"./server/models/index.js\");\n/* harmony import */ var _models___WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_models___WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var node_mailjet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! node-mailjet */ \"node-mailjet\");\n/* harmony import */ var node_mailjet__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(node_mailjet__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\nnode_mailjet__WEBPACK_IMPORTED_MODULE_10___default.a.connect('437b0575f7a8c2c5357aba7deb08e22b', 'dad3a8d10343f38fb9cf558de8f82665');\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.urlencoded({\n  extended: false\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json());\napp.get('/', function (req, res) {\n  var sheets = new _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__[\"ServerStyleSheets\"]();\n  var app = react_dom_server__WEBPACK_IMPORTED_MODULE_5___default.a.renderToString(sheets.collect( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__[\"ThemeProvider\"], {\n    theme: _client_src_utils_theme_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_client_src_components_App_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null))));\n  var indexFile = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve('./client/public/index.html');\n  var css = sheets.toString();\n  fs__WEBPACK_IMPORTED_MODULE_2___default.a.readFile(indexFile, 'utf8', function (err, data) {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(\"<!DOCTYPE html>\\n        <html lang=\\\"en\\\">\\n        \\n        <head>\\n          <link href=\\\"https://fonts.googleapis.com/css?family=Muli&display=swap\\\" rel=\\\"stylesheet\\\">\\n          <link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"./main.css\\\" />\\n          <style id=\\\"jss-server-side\\\">\".concat(css, \"</style>\\n          <title>Philip Nguyen Web Portfolio</title>\\n          <meta charset=\\\"UTF-8\\\">\\n        </head>\\n        \\n        <body>\\n          <div id=\\\"root\\\">\").concat(app, \"</div>\\n          <script src=\\\"./app.js\\\"></script>\\n        </body>\\n        \\n        </html>\"));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"]('./client/public'));\napp.post('/api/sendemail', function (req, res) {\n  _models___WEBPACK_IMPORTED_MODULE_9___default.a.sendEmail(req.body, function (err, result) {\n    if (err) {\n      res.status(400).send(err);\n    }\n\n    var request = node_mailjet__WEBPACK_IMPORTED_MODULE_10___default.a.post(\"send\", {\n      'version': 'v3.1'\n    }).request({\n      \"Messages\": [{\n        \"From\": {\n          \"Email\": result[0].email,\n          \"Name\": result[0].name\n        },\n        \"To\": [{\n          \"Email\": \"pronewgen92@gmail.com\",\n          \"Name\": \"Philip N.\"\n        }],\n        \"Subject\": result[0].title,\n        \"TextPart\": result[0].message\n      }]\n    });\n    request.then(function (result) {\n      res.status(200).json({\n        status: result.body.Messages[0].Status\n      });\n    })[\"catch\"](function (err) {\n      console.log(err.statusCode);\n    });\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./server/app.js?");

/***/ }),

/***/ "./server/database/index.js":
/*!**********************************!*\
  !*** ./server/database/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar Schema = __webpack_require__(/*! ./schema.js */ \"./server/database/schema.js\");\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nvar MONGODB_URI = '';\n\nif (process.NODE_ENV === 'production') {\n  MONGODB_URI = process.env.MONGDOB_CLOUD;\n} else {\n  MONGODB_URI = process.env.MONGDOB_LOCAL;\n}\n\nmongoose.connect(\"\".concat(MONGODB_URI), {\n  useNewUrlParser: true,\n  useUnifiedTopology: true,\n  useFindAndModify: false\n});\nvar db = mongoose.connection;\ndb.on('error', console.error.bind(console, 'connection error:'));\ndb.once('open', function () {\n  // we're connected!\n  console.log('Connected to Mongo');\n});\nvar Email = mongoose.model('Email', Schema.emailSchema);\nmodule.exports = {\n  Email: Email\n};\n\n//# sourceURL=webpack:///./server/database/index.js?");

/***/ }),

/***/ "./server/database/schema.js":
/*!***********************************!*\
  !*** ./server/database/schema.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar Schema = mongoose.Schema;\nvar emailSchema = new Schema({\n  name: String,\n  email: String,\n  title: String,\n  message: String\n});\nmodule.exports = {\n  emailSchema: emailSchema\n};\n\n//# sourceURL=webpack:///./server/database/schema.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./server/app.js\");\n\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nvar PORT = process.env.PORT;\n_app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listen(PORT, function () {\n  console.log(\"Listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/models/index.js":
/*!********************************!*\
  !*** ./server/models/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Model = __webpack_require__(/*! ../database */ \"./server/database/index.js\");\n\nmodule.exports.sendEmail = function (emailData, cb) {\n  Model.Email.create(emailData).then(function (data) {\n    Model.Email.find(data).exec(function (err, result) {\n      if (err) {\n        cb(err);\n      }\n\n      cb(null, result);\n    });\n  });\n};\n\n//# sourceURL=webpack:///./server/models/index.js?");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/AppBar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/AppBar%22?");

/***/ }),

/***/ "@material-ui/core/Badge":
/*!******************************************!*\
  !*** external "@material-ui/core/Badge" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Badge\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Badge%22?");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Button%22?");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Card\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Card%22?");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardActions\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardActions%22?");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardContent\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardContent%22?");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Dialog\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Dialog%22?");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogActions\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogActions%22?");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogTitle\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogTitle%22?");

/***/ }),

/***/ "@material-ui/core/Fab":
/*!****************************************!*\
  !*** external "@material-ui/core/Fab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Fab\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Fab%22?");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/FormControl\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/FormControl%22?");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/IconButton\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/IconButton%22?");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/InputLabel\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/InputLabel%22?");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Link\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Link%22?");

/***/ }),

/***/ "@material-ui/core/OutlinedInput":
/*!**************************************************!*\
  !*** external "@material-ui/core/OutlinedInput" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/OutlinedInput\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/OutlinedInput%22?");

/***/ }),

/***/ "@material-ui/core/Snackbar":
/*!*********************************************!*\
  !*** external "@material-ui/core/Snackbar" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Snackbar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Snackbar%22?");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Toolbar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Toolbar%22?");

/***/ }),

/***/ "@material-ui/core/Tooltip":
/*!********************************************!*\
  !*** external "@material-ui/core/Tooltip" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Tooltip\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Tooltip%22?");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Typography%22?");

/***/ }),

/***/ "@material-ui/core/Zoom":
/*!*****************************************!*\
  !*** external "@material-ui/core/Zoom" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Zoom\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Zoom%22?");

/***/ }),

/***/ "@material-ui/core/colors/red":
/*!***********************************************!*\
  !*** external "@material-ui/core/colors/red" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors/red\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors/red%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/styles%22?");

/***/ }),

/***/ "@material-ui/core/useScrollTrigger":
/*!*****************************************************!*\
  !*** external "@material-ui/core/useScrollTrigger" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/useScrollTrigger\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/useScrollTrigger%22?");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Close\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Close%22?");

/***/ }),

/***/ "@material-ui/icons/Description":
/*!*************************************************!*\
  !*** external "@material-ui/icons/Description" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Description\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Description%22?");

/***/ }),

/***/ "@material-ui/icons/GitHub":
/*!********************************************!*\
  !*** external "@material-ui/icons/GitHub" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/GitHub\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/GitHub%22?");

/***/ }),

/***/ "@material-ui/icons/KeyboardArrowUp":
/*!*****************************************************!*\
  !*** external "@material-ui/icons/KeyboardArrowUp" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/KeyboardArrowUp\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/KeyboardArrowUp%22?");

/***/ }),

/***/ "@material-ui/icons/LinkedIn":
/*!**********************************************!*\
  !*** external "@material-ui/icons/LinkedIn" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/LinkedIn\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/LinkedIn%22?");

/***/ }),

/***/ "@material-ui/icons/Mail":
/*!******************************************!*\
  !*** external "@material-ui/icons/Mail" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Mail\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Mail%22?");

/***/ }),

/***/ "@material-ui/icons/Reorder":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Reorder" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Reorder\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Reorder%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "node-mailjet":
/*!*******************************!*\
  !*** external "node-mailjet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-mailjet\");\n\n//# sourceURL=webpack:///external_%22node-mailjet%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-typist":
/*!*******************************!*\
  !*** external "react-typist" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-typist\");\n\n//# sourceURL=webpack:///external_%22react-typist%22?");

/***/ })

/******/ });