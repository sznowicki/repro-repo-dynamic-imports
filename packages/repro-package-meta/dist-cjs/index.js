"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  DummyComponent: true
};
Object.defineProperty(exports, "DummyComponent", {
  enumerable: true,
  get: function () {
    return _DummyComponent.default;
  }
});

var _tmpReproDynamicImports = require("@eskalacja/tmp-repro-dynamic-imports");

Object.keys(_tmpReproDynamicImports).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _tmpReproDynamicImports[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _tmpReproDynamicImports[key];
    }
  });
});

var _DummyComponent = _interopRequireDefault(require("./components/DummyComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }