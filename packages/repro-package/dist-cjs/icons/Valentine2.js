"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SvgValentine2 = props => /*#__PURE__*/React.createElement("svg", Object.assign({
  xmlns: "http://www.w3.org/2000/svg",
  width: 16,
  height: 16,
  fill: "currentColor",
  className: "valentine2_svg__bi valentine2_svg__bi-valentine2"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 6.493c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132ZM4.25 3a.25.25 0 0 0-.25.25v1.5a.25.25 0 0 0 .5 0V3.5h1.25a.25.25 0 0 0 0-.5h-1.5Zm6 0a.25.25 0 1 0 0 .5h1.25v1.25a.25.25 0 1 0 .5 0v-1.5a.25.25 0 0 0-.25-.25h-1.5ZM4.5 12.25a.25.25 0 1 0-.5 0v1.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 0-.5H4.5v-1.25Zm7.5 0a.25.25 0 1 0-.5 0v1.25h-1.25a.25.25 0 1 0 0 .5h1.5a.25.25 0 0 0 .25-.25v-1.5Z"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M2 1.994v-.042a1 1 0 0 1 .9-.995l9-.9A1 1 0 0 1 13 1a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1.994ZM3 2v13h10V2H3Z"
}));

var _default = SvgValentine2;
exports.default = _default;