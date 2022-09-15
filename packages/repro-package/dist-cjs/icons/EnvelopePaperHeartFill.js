"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SvgEnvelopePaperHeartFill = props => /*#__PURE__*/React.createElement("svg", Object.assign({
  xmlns: "http://www.w3.org/2000/svg",
  width: 16,
  height: 16,
  fill: "currentColor",
  className: "envelope-paper-heart-fill_svg__bi envelope-paper-heart-fill_svg__bi-envelope-paper-heart-fill"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "m3 7.5 3.5 2L8 8.75l1.5.75 3.5-2v-6A1.5 1.5 0 0 0 11.5 0h-7A1.5 1.5 0 0 0 3 1.5v6ZM2 3.133l-.941.502A2 2 0 0 0 0 5.4v.313l2 1.173V3.133Zm12 3.753 2-1.173V5.4a2 2 0 0 0-1.059-1.765L14 3.133v3.753Zm-3.693 3.324L16 6.873v6.5l-5.693-3.163Zm5.634 4.274L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM5.693 10.21 0 13.372v-6.5l5.693 3.338ZM8 1.982C9.664.309 13.825 3.236 8 7 2.175 3.236 6.336.31 8 1.982Z"
}));

var _default = SvgEnvelopePaperHeartFill;
exports.default = _default;