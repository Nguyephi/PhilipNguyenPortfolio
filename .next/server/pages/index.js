module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cMU6");


/***/ }),

/***/ "09cN":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowUp");

/***/ }),

/***/ "0Jp5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "1gBk":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "2g/W":
/***/ (function(module) {

module.exports = JSON.parse("{\"techStack\":[\"MongoDb\",\"Express\",\"React\",\"NodeJs\",\"Material-UI\"]}");

/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "4ac1":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useScrollTrigger");

/***/ }),

/***/ "9E4/":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Zoom");

/***/ }),

/***/ "9Jon":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "D4mc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "I3bT":
/***/ (function(module, exports) {



/***/ }),

/***/ "IfcR":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "MCme":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "Ms0O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "Px2O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/GitHub");

/***/ }),

/***/ "PxrZ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "Q6gG":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "U4Md":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Description");

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "V0nV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LinkedIn");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "YeXC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "ZVla":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/OutlinedInput");

/***/ }),

/***/ "ZVwq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cMU6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__("4151");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Badge"
var Badge_ = __webpack_require__("IfcR");
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge_);

// EXTERNAL MODULE: external "@material-ui/icons/Description"
var Description_ = __webpack_require__("U4Md");
var Description_default = /*#__PURE__*/__webpack_require__.n(Description_);

// EXTERNAL MODULE: external "@material-ui/icons/GitHub"
var GitHub_ = __webpack_require__("Px2O");
var GitHub_default = /*#__PURE__*/__webpack_require__.n(GitHub_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__("Ms0O");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@material-ui/icons/Mail"
var Mail_ = __webpack_require__("Q6gG");
var Mail_default = /*#__PURE__*/__webpack_require__.n(Mail_);

// EXTERNAL MODULE: external "@material-ui/icons/LinkedIn"
var LinkedIn_ = __webpack_require__("V0nV");
var LinkedIn_default = /*#__PURE__*/__webpack_require__.n(LinkedIn_);

// EXTERNAL MODULE: external "@material-ui/icons/Reorder"
var Reorder_ = __webpack_require__("mxrx");
var Reorder_default = /*#__PURE__*/__webpack_require__.n(Reorder_);

// EXTERNAL MODULE: external "@material-ui/core/Tooltip"
var Tooltip_ = __webpack_require__("vF8F");
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Dialog"
var Dialog_ = __webpack_require__("fEgT");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__("lWoh");
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);

// EXTERNAL MODULE: external "@material-ui/core/InputLabel"
var InputLabel_ = __webpack_require__("zOcm");
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);

// EXTERNAL MODULE: external "@material-ui/core/OutlinedInput"
var OutlinedInput_ = __webpack_require__("ZVla");
var OutlinedInput_default = /*#__PURE__*/__webpack_require__.n(OutlinedInput_);

// EXTERNAL MODULE: external "@material-ui/core/DialogTitle"
var DialogTitle_ = __webpack_require__("0Jp5");
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);

// EXTERNAL MODULE: external "@material-ui/core/DialogActions"
var DialogActions_ = __webpack_require__("1gBk");
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__("j08L");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);

// CONCATENATED MODULE: ./client/src/components/ContactMeForm.jsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = Object(styles_["withStyles"])(styles)(props => {
  const {
    children,
    classes,
    onClose
  } = props,
        other = _objectWithoutProperties(props, ["children", "classes", "onClose"]);

  return __jsx(DialogTitle_default.a, _extends({
    disableTypography: true,
    className: classes.root
  }, other), __jsx(Typography_default.a, {
    variant: "h6"
  }, children), onClose ? __jsx(IconButton_default.a, {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: onClose
  }, __jsx(Close_default.a, null)) : null);
});
const DialogActions = Object(styles_["withStyles"])(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(DialogActions_default.a);
function ContactMeForm({
  open,
  handleClose
}) {
  const {
    0: name,
    1: setName
  } = Object(external_react_["useState"])('');
  const {
    0: email,
    1: setEmail
  } = Object(external_react_["useState"])('');
  const {
    0: title,
    1: setTitle
  } = Object(external_react_["useState"])('');
  const {
    0: message,
    1: setMessage
  } = Object(external_react_["useState"])('');

  const handleEmail = e => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        title,
        message
      })
    };
    fetch('/api/sendemail', requestOptions).then(res => res.json()).then(data => {
      console.log(data);
    });
    handleClose();
  };

  return __jsx("div", null, __jsx(Dialog_default.a, {
    onClose: handleClose,
    "aria-labelledby": "contact-me-title",
    open: open
  }, __jsx(DialogTitle, {
    id: "contact-me-title",
    onClose: handleClose
  }, "Contact me"), __jsx("form", {
    onSubmit: e => handleEmail(e)
  }, __jsx(FormControl_default.a, {
    variant: "outlined",
    className: "w-100"
  }, __jsx(InputLabel_default.a, {
    htmlFor: "name-input"
  }, "Name"), __jsx(OutlinedInput_default.a, {
    required: true,
    id: "name-input",
    value: name,
    onChange: e => {
      setName(e.target.value);
    },
    className: "textFieldMargin",
    label: "Name"
  })), __jsx(FormControl_default.a, {
    variant: "outlined",
    className: "w-100"
  }, __jsx(InputLabel_default.a, {
    htmlFor: "email-input"
  }, "Email"), __jsx(OutlinedInput_default.a, {
    required: true,
    id: "email-input",
    value: email,
    onChange: e => {
      setEmail(e.target.value);
    },
    className: "textFieldMargin",
    label: "Email"
  })), __jsx(FormControl_default.a, {
    variant: "outlined",
    className: "w-100"
  }, __jsx(InputLabel_default.a, {
    htmlFor: "title-input"
  }, "Title"), __jsx(OutlinedInput_default.a, {
    required: true,
    id: "title-input",
    value: title,
    onChange: e => {
      setTitle(e.target.value);
    },
    className: "textFieldMargin",
    label: "Title"
  })), __jsx(FormControl_default.a, {
    variant: "outlined",
    className: "w-100"
  }, __jsx(InputLabel_default.a, {
    htmlFor: "message-input"
  }, "Message"), __jsx(OutlinedInput_default.a, {
    required: true,
    id: "message-input",
    value: message,
    onChange: e => {
      setMessage(e.target.value);
    },
    multiline: true,
    rows: 4,
    label: "Message"
  })), __jsx(DialogActions, null, __jsx(Button_default.a, {
    autoFocus: true,
    type: "submit",
    color: "primary"
  }, "Email me")))));
}
// EXTERNAL MODULE: external "@material-ui/core/Snackbar"
var Snackbar_ = __webpack_require__("D4mc");
var Snackbar_default = /*#__PURE__*/__webpack_require__.n(Snackbar_);

// EXTERNAL MODULE: ./client/src/data/portfolioTechStack.json
var portfolioTechStack = __webpack_require__("2g/W");

// CONCATENATED MODULE: ./client/src/components/TechStack.jsx
var TechStack_jsx = external_react_default.a.createElement;







const useStyles = Object(styles_["makeStyles"])(theme => ({
  snackTitle: {
    marginBottom: 3
  },
  snackButton: {
    marginBottom: 103
  }
}));
function TechStack({
  openSnack,
  handleSnackClose
}) {
  const classes = useStyles();

  const RenderTechStack = () => {
    let keyCount = 0;
    return TechStack_jsx(external_react_default.a.Fragment, null, TechStack_jsx("h3", {
      className: classes.snackTitle
    }, "This application was created with"), portfolioTechStack.techStack.map(tech => {
      return TechStack_jsx("div", {
        key: keyCount++
      }, TechStack_jsx(Typography_default.a, {
        variant: "body2",
        component: "h4"
      }, tech));
    }));
  };

  return TechStack_jsx(Snackbar_default.a, {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    open: openSnack,
    autoHideDuration: 60000,
    onClose: handleSnackClose,
    message: TechStack_jsx(RenderTechStack, null),
    action: TechStack_jsx(external_react_default.a.Fragment, null, TechStack_jsx(IconButton_default.a, {
      className: classes.snackButton,
      size: "small",
      "aria-label": "close",
      color: "inherit",
      onClick: handleSnackClose
    }, TechStack_jsx(Close_default.a, {
      fontSize: "small"
    })))
  });
}
// CONCATENATED MODULE: ./client/src/components/Navbar.jsx
var Navbar_jsx = external_react_default.a.createElement;















const Navbar_useStyles = Object(styles_["makeStyles"])(theme => ({
  title: {
    flexGrow: 1
  }
}));
function Navbar(props) {
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: openSnack,
    1: setOpenSnack
  } = Object(external_react_["useState"])(false);
  const classes = Navbar_useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackClick = () => {
    setOpenSnack(true);
  };

  const handleSnackClose = e => {
    setOpenSnack(false);
  };

  const handleResume = e => {
    e.preventDefault();
    window.open('https://docs.google.com/document/d/1qEdbKS61fG_OtjtHqElVrT-X3hzc37UkKBveqJE8-o8/edit?usp=sharing', '_blank', 'noopener');
  };

  const handleGithub = e => {
    e.preventDefault();
    window.open('https://github.com/Nguyephi', '_blank', 'noopener');
  };

  const handleLinkedin = e => {
    e.preventDefault();
    window.open('https://www.linkedin.com/in/nguyephi/', '_blank', 'noopener');
  };

  return Navbar_jsx(external_react_default.a.Fragment, null, Navbar_jsx(AppBar_default.a, null, Navbar_jsx(Toolbar_default.a, null, Navbar_jsx(Typography_default.a, {
    variant: "h6",
    className: classes.title
  }, "Philip Nguyen"), Navbar_jsx(IconButton_default.a, {
    onClick: e => handleResume(e),
    "aria-label": "resume",
    color: "inherit"
  }, Navbar_jsx(Tooltip_default.a, {
    title: "Resume",
    arrow: true
  }, Navbar_jsx(Badge_default.a, {
    color: "secondary"
  }, Navbar_jsx(Description_default.a, null)))), Navbar_jsx(IconButton_default.a, {
    onClick: handleClickOpen,
    "aria-label": "contact me",
    color: "inherit"
  }, Navbar_jsx(Tooltip_default.a, {
    title: "Contact Me",
    arrow: true
  }, Navbar_jsx(Badge_default.a, {
    color: "secondary"
  }, Navbar_jsx(Mail_default.a, null)))), Navbar_jsx(IconButton_default.a, {
    onClick: e => handleGithub(e),
    "aria-label": "github",
    color: "inherit"
  }, Navbar_jsx(Tooltip_default.a, {
    title: "Github",
    arrow: true
  }, Navbar_jsx(Badge_default.a, {
    color: "secondary"
  }, Navbar_jsx(GitHub_default.a, null)))), Navbar_jsx(IconButton_default.a, {
    onClick: e => handleLinkedin(e),
    "aria-label": "linkedin",
    color: "inherit"
  }, Navbar_jsx(Tooltip_default.a, {
    title: "LinkedIn",
    arrow: true
  }, Navbar_jsx(Badge_default.a, {
    color: "secondary"
  }, Navbar_jsx(LinkedIn_default.a, null)))), Navbar_jsx(IconButton_default.a, {
    onClick: handleSnackClick,
    "aria-label": "techStack",
    color: "inherit"
  }, Navbar_jsx(Tooltip_default.a, {
    title: "Tech Stack",
    arrow: true
  }, Navbar_jsx(Badge_default.a, {
    color: "secondary"
  }, Navbar_jsx(Reorder_default.a, null)))))), Navbar_jsx(TechStack, {
    openSnack: openSnack,
    handleSnackClose: handleSnackClose
  }), Navbar_jsx(ContactMeForm, {
    open: open,
    handleClose: handleClose
  }), Navbar_jsx(Toolbar_default.a, {
    id: "back-to-top-anchor"
  }));
}
// EXTERNAL MODULE: external "react-typist"
var external_react_typist_ = __webpack_require__("tQzz");
var external_react_typist_default = /*#__PURE__*/__webpack_require__.n(external_react_typist_);

// EXTERNAL MODULE: ./client/src/img/phils-avatar.jpg
var phils_avatar = __webpack_require__("9Jon");
var phils_avatar_default = /*#__PURE__*/__webpack_require__.n(phils_avatar);

// CONCATENATED MODULE: ./client/src/components/Bio.jsx
var Bio_jsx = external_react_default.a.createElement;




function Bio({
  show
}) {
  return Bio_jsx("div", {
    id: "bio-root"
  }, show ? Bio_jsx("div", {
    id: "bio-container"
  }, Bio_jsx("img", {
    id: "bio-avatar",
    alt: "Philip Nguyen",
    src: phils_avatar_default.a
  }), Bio_jsx("br", null), Bio_jsx("div", {
    id: "bio"
  }, Bio_jsx(Typography_default.a, {
    variant: "body1",
    component: "h3"
  }, Bio_jsx(external_react_typist_default.a, {
    avgTypingSpeed: 50,
    startDelay: 1000,
    cursor: {
      hideWhenDone: true
    }
  }, Bio_jsx("span", {
    id: "bio",
    className: "white"
  }, "Hello world! Welcome to my portfolio. I am an autonomous and passionate software engineer who loves building applications using popular and modern technologies; such as React, NodeJS, MongoDB and many more. I thrive in solving complex problems, as frustrating as it can be sometimes I enjoy the reward in debugging and making my code work. I started my journey by wanting a career change and took some software engineering immersive where I spent thousands of hours gaining my experiences. My biggest take way from this was the ability to learn how to learn and to never stop acquiring knowledge. I'm confident my skills will take me wherever I want to go in this field.", Bio_jsx("br", null), "On my spare time I love practicing mindful meditation, brazilian jiu-jitsu, and making simple and delightful meals for my family."))))) : null);
}
;
// EXTERNAL MODULE: ./client/src/img/Philip_Nguyen_Portfolio_Header.png
var Philip_Nguyen_Portfolio_Header = __webpack_require__("uIaT");
var Philip_Nguyen_Portfolio_Header_default = /*#__PURE__*/__webpack_require__.n(Philip_Nguyen_Portfolio_Header);

// CONCATENATED MODULE: ./client/src/components/Header.jsx
var Header_jsx = external_react_default.a.createElement;






const Header_useStyles = Object(styles_["makeStyles"])(theme => ({
  title: {
    flexGrow: 1,
    color: 'white'
  }
}));
function Header() {
  const {
    0: show,
    1: setShow
  } = Object(external_react_["useState"])(false);
  const classes = Header_useStyles();
  return Header_jsx("div", {
    id: "header-root",
    style: {
      backgroundImage: `url(${Philip_Nguyen_Portfolio_Header_default.a})`
    }
  }, Header_jsx("div", {
    id: "header-container"
  }, Header_jsx("div", {
    id: "header-title"
  }, Header_jsx(external_react_typist_default.a, {
    avgTypingSpeed: 70,
    startDelay: 1000,
    cursor: {
      hideWhenDone: true
    },
    onTypingDone: () => {
      setShow(true);
    }
  }, Header_jsx(Typography_default.a, {
    className: classes.title,
    variant: "h3",
    component: "h1"
  }, "Software Engineer"), Header_jsx(external_react_typist_default.a.Delay, {
    ms: 500
  }), Header_jsx("br", null), Header_jsx(Typography_default.a, {
    className: classes.title,
    variant: "h3",
    component: "h1"
  }, "Full-Stack Developer"), Header_jsx(external_react_typist_default.a.Delay, {
    ms: 1000
  }))), Header_jsx(Bio, {
    show: show
  })));
}
// EXTERNAL MODULE: external "@material-ui/core/Card"
var Card_ = __webpack_require__("YeXC");
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);

// EXTERNAL MODULE: external "@material-ui/core/CardActions"
var CardActions_ = __webpack_require__("PxrZ");
var CardActions_default = /*#__PURE__*/__webpack_require__.n(CardActions_);

// EXTERNAL MODULE: external "@material-ui/core/CardContent"
var CardContent_ = __webpack_require__("thJL");
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);

// EXTERNAL MODULE: external "@material-ui/core/Link"
var Link_ = __webpack_require__("MCme");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);

// EXTERNAL MODULE: ./client/src/data/projectData.json
var projectData = __webpack_require__("vIUU");

// CONCATENATED MODULE: ./client/src/components/ProjectSection.jsx
var ProjectSection_jsx = external_react_default.a.createElement;








const ProjectSection_useStyles = Object(styles_["makeStyles"])({
  root: {
    maxWidth: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '1em',
    paddingLeft: '1em',
    paddingRight: '1em'
  },
  projectTitle: {
    marginBottom: 7
  },
  media: {
    height: 140
  }
});
function ProjectSection() {
  const classes = ProjectSection_useStyles();

  const RenderProjects = () => {
    let firstKeyCount = 0;
    let secondKeyCount = 0;
    return projectData.repos.map(({
      repo_title,
      job_title,
      repo_subtitle,
      repo_techStack,
      bullet_point,
      repo_link
    }) => {
      return ProjectSection_jsx(Card_default.a, {
        key: firstKeyCount++,
        className: classes.root
      }, ProjectSection_jsx(CardContent_default.a, null, ProjectSection_jsx(Typography_default.a, {
        className: classes.projectTitle,
        variant: "h5",
        component: "h2"
      }, repo_title), ProjectSection_jsx(Typography_default.a, {
        variant: "subtitle1",
        component: "h4"
      }, repo_subtitle), ProjectSection_jsx(Typography_default.a, {
        gutterBottom: true,
        variant: "body2",
        component: "h4"
      }, job_title, " ", ProjectSection_jsx("span", {
        className: "black divider-style"
      }, "|"), " ", repo_techStack), bullet_point.map(talkingPoint => {
        return ProjectSection_jsx("div", {
          key: secondKeyCount++
        }, ProjectSection_jsx(Typography_default.a, {
          variant: "caption",
          color: "textSecondary",
          component: "p"
        }, "\u2022 ", talkingPoint));
      })), ProjectSection_jsx(CardActions_default.a, null, ProjectSection_jsx(Link_default.a, {
        size: "Large",
        variant: "body2",
        color: "primary",
        href: repo_link,
        target: "_blank",
        rel: "noopener noreferrer"
      }, "REPO")));
    });
  };

  return ProjectSection_jsx("div", {
    id: "project-root"
  }, ProjectSection_jsx(Typography_default.a, {
    id: "project-title",
    variant: "h3",
    component: "h1"
  }, "Featured Applications"), ProjectSection_jsx(RenderProjects, null));
}
;
// EXTERNAL MODULE: external "@material-ui/core/Fab"
var Fab_ = __webpack_require__("ZVwq");
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab_);

// EXTERNAL MODULE: external "@material-ui/icons/KeyboardArrowUp"
var KeyboardArrowUp_ = __webpack_require__("09cN");
var KeyboardArrowUp_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowUp_);

// EXTERNAL MODULE: external "@material-ui/core/useScrollTrigger"
var useScrollTrigger_ = __webpack_require__("4ac1");
var useScrollTrigger_default = /*#__PURE__*/__webpack_require__.n(useScrollTrigger_);

// EXTERNAL MODULE: external "@material-ui/core/Zoom"
var Zoom_ = __webpack_require__("9E4/");
var Zoom_default = /*#__PURE__*/__webpack_require__.n(Zoom_);

// CONCATENATED MODULE: ./client/src/components/ScrollToTop.jsx
var ScrollToTop_jsx = external_react_default.a.createElement;






const ScrollToTop_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

function ScrollTop(props) {
  const {
    children,
    window
  } = props;
  const classes = ScrollToTop_useStyles(); // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.

  const trigger = useScrollTrigger_default()({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return ScrollToTop_jsx(Zoom_default.a, {
    in: trigger
  }, ScrollToTop_jsx("div", {
    onClick: handleClick,
    role: "presentation",
    className: classes.root
  }, children));
}

function ScrollToTop(props) {
  return ScrollToTop_jsx(ScrollTop, props, ScrollToTop_jsx(Fab_default.a, {
    color: "primary",
    size: "small",
    "aria-label": "scroll back to top"
  }, ScrollToTop_jsx(KeyboardArrowUp_default.a, null)));
}
// CONCATENATED MODULE: ./client/src/components/App.jsx
var App_jsx = external_react_default.a.createElement;






class App_App extends external_react_default.a.Component {
  render() {
    return App_jsx(external_react_default.a.Fragment, null, App_jsx(Navbar, null), App_jsx(Header, null), App_jsx(ProjectSection, null), App_jsx(ScrollToTop, null));
  }

}

/* harmony default export */ var components_App = (App_App);
// EXTERNAL MODULE: ./client/src/css/index.css
var css = __webpack_require__("I3bT");

// CONCATENATED MODULE: ./pages/index.jsx
var pages_jsx = external_react_default.a.createElement;




external_react_dom_default.a.render(pages_jsx(components_App, null), document.getElementById('root'));

/***/ }),

/***/ "fEgT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "j08L":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "lWoh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "mxrx":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Reorder");

/***/ }),

/***/ "tQzz":
/***/ (function(module, exports) {

module.exports = require("react-typist");

/***/ }),

/***/ "thJL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "uIaT":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "vF8F":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "vIUU":
/***/ (function(module) {

module.exports = JSON.parse("{\"repos\":[{\"repo_title\":\"Experience It\",\"job_title\":\"Back-End Developer\",\"repo_subtitle\":\"Inherited legacy code of an application that allowed users to post about their travel experiences\",\"repo_techStack\":\"JS, Node.js, Express, PostgreSQL, EC2, New Relic\",\"bullet_point\":[\"Wrote Apis using Express and PostgreSQL for reviews service DB and scaled to 100 million records\",\"Deployed DB and review service to AWS EC2 with SSH and setup via Linux CLI\",\"Improved performance of queries to under 50ms average with testing on New Relic\"],\"repo_link\":\"https://github.com/Nguyephi/Reviews-Service\"},{\"repo_title\":\"Game Streamer\",\"job_title\":\"Full-Stack Software Engineer\",\"repo_subtitle\":\"Dynamically rendered gamer’s video with chat, recommended videos and related channels\",\"repo_techStack\":\"JS, React, Node.js, Express, MySQL, Webpack, Babel, EC2\",\"bullet_point\":[\"Architected app and deployed video player service AWS/EC2, photos and videos stored on AWS S3\",\"Collaborated in a team of 4, consolidated work on the modules using agile methodologies and Trello\",\"Wrote code reviews for team members’ pull requests and received reviews for my own\"],\"repo_link\":\"https://github.com/Nguyephi/video-player-service\"},{\"repo_title\":\"Tri N Garden\",\"job_title\":\"Full-Stack Software Engineer\",\"repo_subtitle\":\"A simple garden tracker application that uses a 2d matrix data structure as a virtual garden\",\"repo_techStack\":\"JS, React, Node.js, Express, Mongo, Webpack, Babel, Heroku\",\"bullet_point\":[\"Built a minimum viable product, with CRUD operations in RESTful API\",\"Deployed on Heroku using MongoDB\",\"Made query improvements and tested using New Relic, reduced time from 200ms to 50ms\"],\"repo_link\":\"https://github.com/Nguyephi/Tri-N-Garden\"},{\"repo_title\":\"Cook this\",\"job_title\":\"Full-Stack Software Engineer\",\"repo_subtitle\":\"Share posts of food creations with photos and recipes\",\"repo_techStack\":\"JS, React, Python, Flask, SQLAlchemy, PostgreSQL, Heroku, Netlify\",\"bullet_point\":[\"Created custom sign in and FB oAuth, with error handling\",\"Architected APIs to dynamically render users post, with like and comment feature\",\"Deployed server-side on Heroku with PostgreSQL and client-side on Netlify\"],\"repo_link\":\"https://github.com/Nguyephi/Cook-this-app\"}]}");

/***/ }),

/***/ "zOcm":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ })

/******/ });