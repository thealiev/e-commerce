"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.mjs\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ \"./components/index.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/StateContext */ \"./context/StateContext.js\");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Navbar = () => {\n  _s();\n\n  const {\n    showCart,\n    setShowCart,\n    totalQuantities\n  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext)();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"navbar-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"flex justify-between\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"flex gap-5 content-center items-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"82738947293874329\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"cart\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"search\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"button\",\n    className: \"cart-icon\",\n    onClick: () => setShowCart(true)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineShopping, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"cart-item-qty\"\n  }, totalQuantities)), showCart && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_2__.Cart, null));\n};\n\n_s(Navbar, \"mFEP3A/tk0dXv1fU+iqaINU4OQM=\", false, function () {\n  return [_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext];\n});\n\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxNQUFNUSxNQUFNLEdBQUcsTUFBTTtBQUFBOztBQUNuQixRQUFNO0FBQUVDLElBQUFBLFFBQUY7QUFBWUMsSUFBQUEsV0FBWjtBQUF5QkMsSUFBQUE7QUFBekIsTUFBNkNKLHNFQUFlLEVBQWxFO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0UsMEZBREYsQ0FERixlQUlFLHFGQUNFLGdGQURGLGVBSUUsa0ZBSkYsQ0FKRixDQURGLGVBZ0JFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFDLFdBQWhDO0FBQTRDLFdBQU8sRUFBRSxNQUFNRyxXQUFXLENBQUMsSUFBRDtBQUF0RSxrQkFDRSwyREFBQyw2REFBRCxPQURGLGVBRUU7QUFBTSxhQUFTLEVBQUM7QUFBaEIsS0FBaUNDLGVBQWpDLENBRkYsQ0FoQkYsRUFxQkdGLFFBQVEsaUJBQUksMkRBQUMsbUNBQUQsT0FyQmYsQ0FERjtBQXlCRCxDQTVCRDs7R0FBTUQ7VUFDK0NEOzs7S0FEL0NDO0FBOEJOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFyLmpzeD8zYWFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgQWlPdXRsaW5lU2hvcHBpbmcgfSBmcm9tICdyZWFjdC1pY29ucy9haSdcbmltcG9ydCB7IEZhUGhvbmVBbHQsIEZhU2hvcHBpbmdDYXJ0LCBGYVNlYXJjaCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuXG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi8nO1xuaW1wb3J0IHsgdXNlU3RhdGVDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9TdGF0ZUNvbnRleHQnO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgc2hvd0NhcnQsIHNldFNob3dDYXJ0LCB0b3RhbFF1YW50aXRpZXMgfSA9IHVzZVN0YXRlQ29udGV4dCgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtNSBjb250ZW50LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgIDxwPjgyNzM4OTQ3MjkzODc0MzI5PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIGNhcnRcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICBzZWFyY2hcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2FydC1pY29uXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd0NhcnQodHJ1ZSl9PlxuICAgICAgICA8QWlPdXRsaW5lU2hvcHBpbmcgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FydC1pdGVtLXF0eVwiPnt0b3RhbFF1YW50aXRpZXN9PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIHtzaG93Q2FydCAmJiA8Q2FydCAvPn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiQWlPdXRsaW5lU2hvcHBpbmciLCJGYVBob25lQWx0IiwiRmFTaG9wcGluZ0NhcnQiLCJGYVNlYXJjaCIsIkNhcnQiLCJ1c2VTdGF0ZUNvbnRleHQiLCJOYXZiYXIiLCJzaG93Q2FydCIsInNldFNob3dDYXJ0IiwidG90YWxRdWFudGl0aWVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.jsx\n");

/***/ })

});