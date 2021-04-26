webpackHotUpdate_N_E("pages/questions/[id]",{

/***/ "./pages/questions/[id].js":
/*!*********************************!*\
  !*** ./pages/questions/[id].js ***!
  \*********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Question; });\n/* harmony import */ var _home_anselme_Develop_ts_challenge_baza_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_anselme_Develop_ts_challenge_baza_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_anselme_Develop_ts_challenge_baza_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_anselme_Develop_ts_challenge_baza_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _layouts_Default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layouts/Default */ \"./layouts/Default.js\");\n/* harmony import */ var _components_RightSidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/RightSidebar */ \"./components/RightSidebar.jsx\");\n/* harmony import */ var _components_QuestionDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/QuestionDetails */ \"./components/QuestionDetails.jsx\");\n/* harmony import */ var _components_Answer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Answer */ \"./components/Answer.jsx\");\n/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/questions.service */ \"./services/questions.service.js\");\n/* harmony import */ var _middlewares_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../middlewares/auth */ \"./middlewares/auth.js\");\n/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../404 */ \"./pages/404.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/anselme/Develop..ts/challenge/baza/client/pages/questions/[id].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Question(_ref) {\n  _s();\n\n  var _this = this;\n\n  var question = _ref.question;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      answers = _useState[0],\n      setAnswers = _useState[1];\n\n  if (!question) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_404__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 26\n  }, this);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    Object(_home_anselme_Develop_ts_challenge_baza_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_anselme_Develop_ts_challenge_baza_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var is_auth, _answers, _answers2;\n\n      return _home_anselme_Develop_ts_challenge_baza_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return Object(_middlewares_auth__WEBPACK_IMPORTED_MODULE_9__[\"isAuthed\"])();\n\n            case 3:\n              is_auth = _context.sent;\n\n              if (!is_auth) {\n                _context.next = 11;\n                break;\n              }\n\n              _context.next = 7;\n              return _services_questions_service__WEBPACK_IMPORTED_MODULE_8__[\"default\"].answers_with_auth(question._id);\n\n            case 7:\n              _answers = _context.sent;\n              setAnswers(_answers.data);\n              _context.next = 15;\n              break;\n\n            case 11:\n              _context.next = 13;\n              return _services_questions_service__WEBPACK_IMPORTED_MODULE_8__[\"default\"].answers(question._id);\n\n            case 13:\n              _answers2 = _context.sent;\n              setAnswers(_answers2.data);\n\n            case 15:\n              _context.next = 20;\n              break;\n\n            case 17:\n              _context.prev = 17;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n\n            case 20:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 17]]);\n    }))();\n  }, [question]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_layouts_Default__WEBPACK_IMPORTED_MODULE_4__[\"DefaultLayout\"], {\n    meta: {\n      title: \"\".concat(question.title, \" - baza.com\")\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"row\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"col-12 col-lg-8 offset-md-1 px-2\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_QuestionDetails__WEBPACK_IMPORTED_MODULE_6__[\"QuestionDetails\"], {\n          question: question\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 21\n        }, this), answers.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"col-lg-10 mx-0 px-0\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Answer__WEBPACK_IMPORTED_MODULE_7__[\"Answer\"], {\n              answer: answers[0],\n              top: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 70\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 33\n          }, this), answers.map(function (answer, i) {\n            if (i !== 0) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"col-lg-10 mx-0 col-md-12 px-0\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Answer__WEBPACK_IMPORTED_MODULE_7__[\"Answer\"], {\n                answer: answer\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 47,\n                columnNumber: 49\n              }, _this)\n            }, i, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 45\n            }, _this);\n          })]\n        }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"text-center\",\n          children: \" No answers yet, be the first to answer\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 29\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"d-none d-lg-block col-3\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_RightSidebar__WEBPACK_IMPORTED_MODULE_5__[\"RightSidebar\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Question, \"dxes/kRl333RWxkLpEqHu4XKyWs=\");\n\n_c = Question;\n\nvar _c;\n\n$RefreshReg$(_c, \"Question\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVlc3Rpb25zLy5qcz84MjA0Il0sIm5hbWVzIjpbIlF1ZXN0aW9uIiwicXVlc3Rpb24iLCJ1c2VTdGF0ZSIsImFuc3dlcnMiLCJzZXRBbnN3ZXJzIiwidXNlRWZmZWN0IiwiaXNBdXRoZWQiLCJpc19hdXRoIiwiUXVlc3Rpb25zU2VydmljZSIsImFuc3dlcnNfd2l0aF9hdXRoIiwiX2lkIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsImxlbmd0aCIsIm1hcCIsImFuc3dlciIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUdlLFNBQVNBLFFBQVQsT0FBK0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7O0FBQUEsa0JBQ1pDLHNEQUFRLENBQUMsRUFBRCxDQURJO0FBQUEsTUFDbkNDLE9BRG1DO0FBQUEsTUFDMUJDLFVBRDBCOztBQUUxQyxNQUFHLENBQUNILFFBQUosRUFBYyxvQkFBTyxxRUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFFZEkseURBQVMsQ0FBQyxZQUFNO0FBQ1osMlNBQUM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFMkJDLGtFQUFRLEVBRm5DOztBQUFBO0FBRVdDLHFCQUZYOztBQUFBLG1CQUdVQSxPQUhWO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBSWlDQyxtRUFBZ0IsQ0FBQ0MsaUJBQWpCLENBQW1DUixRQUFRLENBQUNTLEdBQTVDLENBSmpDOztBQUFBO0FBSWlCUCxzQkFKakI7QUFLV0Msd0JBQVUsQ0FBQ0QsUUFBTyxDQUFDUSxJQUFULENBQVY7QUFMWDtBQUFBOztBQUFBO0FBQUE7QUFBQSxxQkFPaUNILG1FQUFnQixDQUFDTCxPQUFqQixDQUF5QkYsUUFBUSxDQUFDUyxHQUFsQyxDQVBqQzs7QUFBQTtBQU9pQlAsdUJBUGpCO0FBUVdDLHdCQUFVLENBQUNELFNBQU8sQ0FBQ1EsSUFBVCxDQUFWOztBQVJYO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFXT0MscUJBQU8sQ0FBQ0MsR0FBUjs7QUFYUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFEO0FBY0gsR0FmUSxFQWVOLENBQUNaLFFBQUQsQ0FmTSxDQUFUO0FBaUJBLHNCQUNJLHFFQUFDLDhEQUFEO0FBQWUsUUFBSSxFQUFFO0FBQUNhLFdBQUssWUFBS2IsUUFBUSxDQUFDYSxLQUFkO0FBQU4sS0FBckI7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLGtDQUFmO0FBQUEsZ0NBQ0kscUVBQUMsMkVBQUQ7QUFBaUIsa0JBQVEsRUFBRWI7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUdRRSxPQUFPLENBQUNZLE1BQVIsR0FBaUIsQ0FBakIsZ0JBQ0k7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUMscUJBQWY7QUFBQSxtQ0FBcUMscUVBQUMseURBQUQ7QUFBUSxvQkFBTSxFQUFFWixPQUFPLENBQUMsQ0FBRCxDQUF2QjtBQUE0QixpQkFBRztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosRUFHUUEsT0FBTyxDQUFDYSxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFDdkIsZ0JBQUdBLENBQUMsS0FBSyxDQUFULEVBQVksb0JBQ1I7QUFBSyx1QkFBUyxFQUFDLCtCQUFmO0FBQUEscUNBQ0kscUVBQUMseURBQUQ7QUFBUSxzQkFBTSxFQUFFRDtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosZUFBb0RDLENBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFE7QUFLZixXQU5ELENBSFI7QUFBQSx3QkFESixnQkFhSTtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFvQkk7QUFBSyxpQkFBUyxFQUFDLHlCQUFmO0FBQUEsK0JBQ0kscUVBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNEJIOztHQWpEdUJsQixROztLQUFBQSxRIiwiZmlsZSI6Ii4vcGFnZXMvcXVlc3Rpb25zL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7IERlZmF1bHRMYXlvdXQgfSBmcm9tIFwiLi4vLi4vbGF5b3V0cy9EZWZhdWx0XCI7XG5pbXBvcnQgeyBSaWdodFNpZGViYXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9SaWdodFNpZGViYXJcIjtcbmltcG9ydCB7IFF1ZXN0aW9uRGV0YWlscyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1F1ZXN0aW9uRGV0YWlsc1wiO1xuaW1wb3J0IHsgQW5zd2VyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQW5zd2VyXCI7XG5pbXBvcnQgUXVlc3Rpb25zU2VydmljZSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcXVlc3Rpb25zLnNlcnZpY2VcIlxuaW1wb3J0IHsgaXNBdXRoZWQgfSBmcm9tIFwiLi4vLi4vbWlkZGxld2FyZXMvYXV0aFwiO1xuaW1wb3J0IHsgcXVlc3Rpb25zU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlc1wiO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gXCIuLi80MDRcIjtcbmltcG9ydCB7cXVlc3Rpb25JbnRlcmZhY2V9IGZyb20gXCIuLi8uLi9zdG9yZS91dGlscy9xdWVzdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWVzdGlvbih7IHF1ZXN0aW9uIH0pe1xuICAgIGNvbnN0IFthbnN3ZXJzLCBzZXRBbnN3ZXJzXSA9IHVzZVN0YXRlKFtdKVxuICAgIGlmKCFxdWVzdGlvbikgcmV0dXJuIDxOb3RGb3VuZC8+XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgaXNfYXV0aCA9IGF3YWl0IGlzQXV0aGVkKCk7XG4gICAgICAgICAgICAgICAgaWYoaXNfYXV0aCl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuc3dlcnMgPSBhd2FpdCBRdWVzdGlvbnNTZXJ2aWNlLmFuc3dlcnNfd2l0aF9hdXRoKHF1ZXN0aW9uLl9pZClcbiAgICAgICAgICAgICAgICAgICAgc2V0QW5zd2VycyhhbnN3ZXJzLmRhdGEpXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuc3dlcnMgPSBhd2FpdCBRdWVzdGlvbnNTZXJ2aWNlLmFuc3dlcnMocXVlc3Rpb24uX2lkKVxuICAgICAgICAgICAgICAgICAgICBzZXRBbnN3ZXJzKGFuc3dlcnMuZGF0YSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9Y2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpXG4gICAgfSwgW3F1ZXN0aW9uXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxEZWZhdWx0TGF5b3V0IG1ldGE9e3t0aXRsZTogYCR7cXVlc3Rpb24udGl0bGV9IC0gYmF6YS5jb21gfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy04IG9mZnNldC1tZC0xIHB4LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uRGV0YWlscyBxdWVzdGlvbj17cXVlc3Rpb259Lz5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2Vycy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwIG14LTAgcHgtMFwiPjxBbnN3ZXIgYW5zd2VyPXthbnN3ZXJzWzBdfSB0b3AvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJzLm1hcCgoYW5zd2VyLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaSAhPT0gMCkgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTAgbXgtMCBjb2wtbWQtMTIgcHgtMFwiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW5zd2VyIGFuc3dlcj17YW5zd2VyfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+IE5vIGFuc3dlcnMgeWV0LCBiZSB0aGUgZmlyc3QgdG8gYW5zd2VyPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtbm9uZSBkLWxnLWJsb2NrIGNvbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxSaWdodFNpZGViYXIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRGVmYXVsdExheW91dD5cbiAgICApXG59XG5cbmNvbnN0IGdldFF1ZXN0aW9uID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgcXVlc3Rpb25zU2VydmljZS5nZXQoaWQpO1xuICAgIHJldHVybiBkYXRhID8gZGF0YSA6IHF1ZXN0aW9uSW50ZXJmYWNlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzICh7IHF1ZXJ5IH0pIHtcbiAgICBsZXQgcXVlc3Rpb24gPSBhd2FpdCBnZXRRdWVzdGlvbihxdWVyeS5pZClcbiAgICBpZighcXVlc3Rpb24pIHJldHVybiB7IG5vdEZvdW5kOiB0cnVlIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogeyBxdWVzdGlvbiB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/questions/[id].js\n");

/***/ })

})