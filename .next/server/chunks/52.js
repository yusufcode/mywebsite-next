exports.id = 52;
exports.ids = [52];
exports.modules = {

/***/ 4675:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "Button_btn__1zpY7",
	"primary": "Button_primary__35Pd5",
	"outline": "Button_outline__1tlyA",
	"icon": "Button_icon__2M4k7"
};


/***/ }),

/***/ 5227:
/***/ ((module) => {

// Exports
module.exports = {
	"logo": "Logo_logo__1-OSj",
	"lg": "Logo_lg__2E0mW",
	"sm": "Logo_sm__2J4aJ"
};


/***/ }),

/***/ 9017:
/***/ ((module) => {

// Exports
module.exports = {
	"mainContainer": "Navbar_mainContainer__obwXU",
	"container": "Navbar_container__1nJDD"
};


/***/ }),

/***/ 9816:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "NavbarMenu_container__CFEU1",
	"ul": "NavbarMenu_ul__28joU",
	"li": "NavbarMenu_li__2nSVy",
	"link": "NavbarMenu_link__3DSKa"
};


/***/ }),

/***/ 2077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KM": () => (/* binding */ PrimaryButton),
/* harmony export */   "hU": () => (/* binding */ IconButton)
/* harmony export */ });
/* unused harmony exports Button, OutlineButton */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4675);
/* harmony import */ var _styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function Button({ title , onClick  }) {
    return(/*#__PURE__*/ _jsx("button", {
        className: styles.btn,
        onClick: onClick,
        children: title
    }));
}
function PrimaryButton({ title , onClick  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: (_styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default().btn) + ' ' + (_styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default().primary),
        onClick: onClick,
        children: title
    }));
}
function OutlineButton({ title , onClick  }) {
    return(/*#__PURE__*/ _jsx("button", {
        className: styles.btn + ' ' + styles.outline,
        onClick: onClick,
        children: title
    }));
}
function IconButton({ icon , onClick  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: (_styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default().btn) + ' ' + (_styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default().icon),
        onClick: onClick,
        children: icon
    }));
}


/***/ }),

/***/ 198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Logo_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5227);
/* harmony import */ var _styles_Logo_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Logo_module_scss__WEBPACK_IMPORTED_MODULE_2__);



function Logo({ width , height , shadow  }) {
    let className = (_styles_Logo_module_scss__WEBPACK_IMPORTED_MODULE_2___default().logo);
    if (shadow === 'lg') {
        className = (_styles_Logo_module_scss__WEBPACK_IMPORTED_MODULE_2___default().logo) + ' ' + (_styles_Logo_module_scss__WEBPACK_IMPORTED_MODULE_2___default().lg);
    } else {
        className = (_styles_Logo_module_scss__WEBPACK_IMPORTED_MODULE_2___default().logo) + ' ' + (_styles_Logo_module_scss__WEBPACK_IMPORTED_MODULE_2___default().sm);
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: "/img/logo/logo1.png",
            alt: "yusufcode.com",
            width: width,
            height: height
        })
    }));
};


/***/ }),

/***/ 1052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./styles/Navbar.module.scss
var Navbar_module = __webpack_require__(9017);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
// EXTERNAL MODULE: ./components/Logo.js
var Logo = __webpack_require__(198);
// EXTERNAL MODULE: ./components/Button.js
var Button = __webpack_require__(2077);
// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var Menu_ = __webpack_require__(3365);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: external "@mui/icons-material/Close"
var Close_ = __webpack_require__(4173);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);
// EXTERNAL MODULE: ./styles/NavbarMenu.module.scss
var NavbarMenu_module = __webpack_require__(9816);
var NavbarMenu_module_default = /*#__PURE__*/__webpack_require__.n(NavbarMenu_module);
;// CONCATENATED MODULE: ./components/NavbarMenu.js



const menuItems = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "Crypto Calculator",
        link: "crypto-calculator"
    }
];
function NavbarMenu({ onClick  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (NavbarMenu_module_default()).container,
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: (NavbarMenu_module_default()).ul,
            children: menuItems.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: (NavbarMenu_module_default()).li,
                    onClick: onClick,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: item.link,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: (NavbarMenu_module_default()).link,
                            children: item.title
                        })
                    })
                }, index)
            )
        })
    }));
};

;// CONCATENATED MODULE: ./components/Navbar.js









function Navbar() {
    const { 0: menu , 1: setMenu  } = (0,external_react_.useState)(0);
    function menuTrigger() {
        return !menu;
    }
    function closeMenu() {
        if (window.innerWidth < 768) {
            setTimeout(function() {
                setMenu(false);
            }, 400);
        } else {
            setMenu(false);
        }
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Navbar_module_default()).mainContainer,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Navbar_module_default()).container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Logo/* default */.Z, {
                            width: "60",
                            height: "60",
                            shadow: "sm"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Button/* IconButton */.hU, {
                    onClick: ()=>setMenu(menuTrigger())
                    ,
                    icon: menu ? /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                    }) : /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                    })
                }),
                menu ? /*#__PURE__*/ jsx_runtime_.jsx(NavbarMenu, {
                    onClick: ()=>closeMenu()
                }) : ''
            ]
        })
    }));
};


/***/ })

};
;