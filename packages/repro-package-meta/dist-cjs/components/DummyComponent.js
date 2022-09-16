"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _tmpReproDynamicImports = require("@eskalacja/tmp-repro-dynamic-imports");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DummyComponent = () => {
  console.log('I am a component from meta package');
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "Icon from meta component:"), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_tmpReproDynamicImports.IconAsChunk, {
    name: "123"
  })));
};

var _default = DummyComponent;
exports.default = _default;