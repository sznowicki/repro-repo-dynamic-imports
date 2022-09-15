"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SvgFiletypeOtf = props => /*#__PURE__*/React.createElement("svg", Object.assign({
  xmlns: "http://www.w3.org/2000/svg",
  width: 16,
  height: 16,
  fill: "currentColor",
  className: "filetype-otf_svg__bi filetype-otf_svg__bi-filetype-otf"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM2.622 13.666v.522c0 .256-.039.47-.117.641a.861.861 0 0 1-.322.387.877.877 0 0 1-.47.126.883.883 0 0 1-.47-.126.868.868 0 0 1-.32-.386 1.55 1.55 0 0 1-.117-.642v-.522c0-.257.039-.471.117-.641a.868.868 0 0 1 .32-.387.868.868 0 0 1 .47-.129c.177 0 .333.043.47.13a.861.861 0 0 1 .322.386c.078.17.117.384.117.641Zm.803.519v-.513c0-.377-.069-.7-.205-.972a1.46 1.46 0 0 0-.59-.63c-.253-.147-.559-.22-.916-.22-.356 0-.662.073-.92.22a1.441 1.441 0 0 0-.589.627c-.137.271-.205.596-.205.975v.513c0 .375.068.7.205.973.137.271.333.48.589.627.258.144.564.216.92.216.357 0 .663-.072.917-.216a1.47 1.47 0 0 0 .589-.627c.136-.274.205-.598.205-.973Zm2 1.74v-3.337H6.56v-.662H3.497v.662H4.63v3.337h.794Zm2.251-1.59v1.59h-.79v-3.999h2.548v.653H7.676v1.117h1.606v.638H7.676Z"
}));

var _default = SvgFiletypeOtf;
exports.default = _default;