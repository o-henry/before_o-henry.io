webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_moon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/moon.svg */ \"./assets/moon.svg\");\n/* harmony import */ var _assets_sun_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/sun.svg */ \"./assets/sun.svg\");\n\n\n\nvar _jsxFileName = \"/Users/henry/Documents/blog/o-henry.github.io/components/header.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Header() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(undefined),\n      darkTheme = _useState[0],\n      setDarkTheme = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var root = window.document.documentElement;\n    var initialColorValue = root.style.getPropertyValue(\"--initial-color-mode\");\n    setDarkTheme(initialColorValue === \"dark\");\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (darkTheme !== undefined) {\n      if (darkTheme) {\n        document.documentElement.setAttribute(\"data-theme\", \"dark\");\n        window.localStorage.setItem(\"theme\", \"dark\");\n      } else {\n        document.documentElement.removeAttribute(\"data-theme\");\n        window.localStorage.setItem(\"theme\", \"light\");\n      }\n    }\n  }, [darkTheme]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        display: \"flex\",\n        alignItems: \"center\",\n        justifyContent: \"center\"\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          flex: 9\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n          href: \"/\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n              style: {\n                fontSize: \"1.125rem\"\n              },\n              children: \"Henry\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          flexShrink: \"0\",\n          width: \"15px\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: \"/blog\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            style: {\n              fontSize: \"0.825rem\"\n            },\n            children: \"Blog\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          flexShrink: \"0\",\n          width: \"15px\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"https://brunch.co.kr/@lch1992\",\n          target: \"_blank\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          flexShrink: \"0\",\n          width: \"15px\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: \"/about\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            style: {\n              fontSize: \"0.825rem\"\n            },\n            children: \"About\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          flexShrink: \"0\",\n          width: \"15px\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, this), darkTheme ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"checkbox\",\n          checked: darkTheme,\n          onChange: function onChange(ev) {\n            setDarkTheme(ev.target.checked ? true : false);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_assets_moon_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          style: {\n            position: \"relative\",\n            fontSize: \"25px\",\n            top: \"2.5px\"\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 11\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"checkbox\",\n          checked: darkTheme,\n          onChange: function onChange(ev) {\n            setDarkTheme(ev.target.checked ? true : false);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_assets_sun_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          style: {\n            position: \"relative\",\n            fontSize: \"25px\",\n            top: \"3.465px\"\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n_s(Header, \"zJva7o4EGsu7Pt4wa+XYPKYYDTI=\");\n\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIuanM/NjQ3OCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsImRhcmtUaGVtZSIsInNldERhcmtUaGVtZSIsInVzZUVmZmVjdCIsInJvb3QiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImluaXRpYWxDb2xvclZhbHVlIiwic3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwic2V0QXR0cmlidXRlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUF0dHJpYnV0ZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4IiwiZm9udFNpemUiLCJmbGV4U2hyaW5rIiwid2lkdGgiLCJldiIsInRhcmdldCIsImNoZWNrZWQiLCJwb3NpdGlvbiIsInRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxDQUFDQyxTQUFELENBRFg7QUFBQSxNQUN4QkMsU0FEd0I7QUFBQSxNQUNiQyxZQURhOztBQUcvQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsSUFBSSxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLGVBQTdCO0FBQ0EsUUFBTUMsaUJBQWlCLEdBQUdKLElBQUksQ0FBQ0ssS0FBTCxDQUFXQyxnQkFBWCxDQUN4QixzQkFEd0IsQ0FBMUI7QUFJQVIsZ0JBQVksQ0FBQ00saUJBQWlCLEtBQUssTUFBdkIsQ0FBWjtBQUNELEdBUFEsRUFPTixFQVBNLENBQVQ7QUFTQUwseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUYsU0FBUyxLQUFLRCxTQUFsQixFQUE2QjtBQUMzQixVQUFJQyxTQUFKLEVBQWU7QUFDYkssZ0JBQVEsQ0FBQ0MsZUFBVCxDQUF5QkksWUFBekIsQ0FBc0MsWUFB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TDtBQUdMTyxlQUFHLEVBQUU7QUFIQTtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFEsZ0JBbUJSO0FBQUEsZ0NBQ0U7QUFDRSxjQUFJLEVBQUMsVUFEUDtBQUVFLGlCQUFPLEVBQUV6QixTQUZYO0FBR0Usa0JBQVEsRUFBRSxrQkFBQ3FCLEVBQUQsRUFBUTtBQUNoQnBCLHdCQUFZLENBQUNvQixFQUFFLENBQUNDLE1BQUgsQ0FBVUMsT0FBVixHQUFvQixJQUFwQixHQUEyQixLQUE1QixDQUFaO0FBQ0Q7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBUUUscUVBQUMsdURBQUQ7QUFDRSxlQUFLLEVBQUU7QUFDTEMsb0JBQVEsRUFBRSxVQURMO0FBRUxOLG9CQUFRLEVBQUUsTUFGTDtBQUdMTyxlQUFHLEVBQUU7QUFIQTtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBZ0ZEOztHQXhHdUI1QixNOztLQUFBQSxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9oZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW9vbiBmcm9tIFwiLi4vYXNzZXRzL21vb24uc3ZnXCI7XG5pbXBvcnQgU3VuIGZyb20gXCIuLi9hc3NldHMvc3VuLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IFtkYXJrVGhlbWUsIHNldERhcmtUaGVtZV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgY29uc3QgaW5pdGlhbENvbG9yVmFsdWUgPSByb290LnN0eWxlLmdldFByb3BlcnR5VmFsdWUoXG4gICAgICBcIi0taW5pdGlhbC1jb2xvci1tb2RlXCJcbiAgICApO1xuXG4gICAgc2V0RGFya1RoZW1lKGluaXRpYWxDb2xvclZhbHVlID09PSBcImRhcmtcIik7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXJrVGhlbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGRhcmtUaGVtZSkge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLCBcImRhcmtcIik7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwiZGFya1wiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImxpZ2h0XCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2RhcmtUaGVtZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDkgfX0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgZm9udFNpemU6IFwiMS4xMjVyZW1cIiB9fT5IZW5yeTwvaDE+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXhTaHJpbms6IFwiMFwiLCB3aWR0aDogXCIxNXB4XCIgfX0+PC9kaXY+XG5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICA8aDIgc3R5bGU9e3sgZm9udFNpemU6IFwiMC44MjVyZW1cIiB9fT5CbG9nPC9oMj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXhTaHJpbms6IFwiMFwiLCB3aWR0aDogXCIxNXB4XCIgfX0+PC9kaXY+XG5cbiAgICAgICAgPExpbms+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYnJ1bmNoLmNvLmtyL0BsY2gxOTkyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PC9hPlxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4U2hyaW5rOiBcIjBcIiwgd2lkdGg6IFwiMTVweFwiIH19PjwvZGl2PlxuXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICA8YT5cbiAgICAgICAgICAgIDxoMiBzdHlsZT17eyBmb250U2l6ZTogXCIwLjgyNXJlbVwiIH19PkFib3V0PC9oMj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXhTaHJpbms6IFwiMFwiLCB3aWR0aDogXCIxNXB4XCIgfX0+PC9kaXY+XG5cbiAgICAgICAge2RhcmtUaGVtZSA/IChcbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17ZGFya1RoZW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2KSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0RGFya1RoZW1lKGV2LnRhcmdldC5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxNb29uXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyNXB4XCIsXG4gICAgICAgICAgICAgICAgdG9wOiBcIjIuNXB4XCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e2RhcmtUaGVtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldikgPT4ge1xuICAgICAgICAgICAgICAgIHNldERhcmtUaGVtZShldi50YXJnZXQuY2hlY2tlZCA/IHRydWUgOiBmYWxzZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFN1blxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjVweFwiLFxuICAgICAgICAgICAgICAgIHRvcDogXCIzLjQ2NXB4XCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header.js\n");

/***/ })

})