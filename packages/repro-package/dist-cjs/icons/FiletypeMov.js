"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SvgFiletypeMov = props => /*#__PURE__*/React.createElement("svg", Object.assign({
  xmlns: "http://www.w3.org/2000/svg",
  width: 16,
  height: 16,
  fill: "currentColor",
  className: "filetype-mov_svg__bi filetype-mov_svg__bi-filetype-mov"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5Zm-6.914 9.166v.522c0 .256-.04.47-.117.641a.861.861 0 0 1-.323.387.877.877 0 0 1-.468.126.883.883 0 0 1-.472-.126.869.869 0 0 1-.32-.386 1.55 1.55 0 0 1-.117-.642v-.522c0-.257.04-.471.118-.641a.869.869 0 0 1 .319-.387.868.868 0 0 1 .472-.129c.175 0 .332.043.468.13a.861.861 0 0 1 .323.386c.078.17.117.384.117.641Zm.802.519v-.513c0-.377-.068-.7-.205-.972a1.46 1.46 0 0 0-.588-.63c-.254-.147-.56-.22-.917-.22-.356 0-.663.073-.92.22a1.441 1.441 0 0 0-.59.627c-.136.271-.204.596-.204.975v.513c0 .375.068.7.205.973.136.271.333.48.589.627.257.144.564.216.92.216.357 0 .663-.072.917-.216.255-.147.452-.356.588-.627.137-.274.205-.598.205-.973Zm-7.182 1.74v-2.66h.038l.952 2.16h.516l.946-2.16h.038v2.66h.715v-3.999h-.8l-1.14 2.596h-.026l-1.14-2.596H0v4h.706Zm9.54 0h-.952l-1.34-3.999h.918l.896 3.138h.038l.888-3.138h.879l-1.327 4Z"
}));

var _default = SvgFiletypeMov;
exports.default = _default;