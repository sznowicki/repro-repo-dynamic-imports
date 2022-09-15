"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SvgTrainLightrailFront = props => /*#__PURE__*/React.createElement("svg", Object.assign({
  xmlns: "http://www.w3.org/2000/svg",
  width: 16,
  height: 16,
  fill: "currentColor",
  className: "train-lightrail-front_svg__bi train-lightrail-front_svg__bi-train-lightrail-front"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M6.5 0a.5.5 0 0 0 0 1h1v1.011c-1.525.064-3.346.394-4.588.655C1.775 2.904 1 3.915 1 5.055V13.5A2.5 2.5 0 0 0 3.5 16h9a2.5 2.5 0 0 0 2.5-2.5V5.055c0-1.14-.775-2.15-1.912-2.39-1.242-.26-3.063-.59-4.588-.654V1h1a.5.5 0 0 0 0-1h-3ZM8 3c-1.497 0-3.505.356-4.883.644C2.464 3.781 2 4.366 2 5.055V13.5a1.5 1.5 0 0 0 1.072 1.438c.028-.212.062-.483.1-.792.092-.761.2-1.752.266-2.682.038-.531.062-1.036.062-1.464 0-1.051-.143-2.404-.278-3.435a52.052 52.052 0 0 0-.07-.522c-.112-.798.42-1.571 1.244-1.697C5.356 4.199 6.864 4 8 4c1.136 0 2.645.2 3.604.346.825.126 1.356.9 1.244 1.697-.022.16-.046.335-.07.522C12.643 7.596 12.5 8.949 12.5 10c0 .428.024.933.062 1.464.066.93.174 1.92.266 2.682.038.31.072.58.1.792A1.5 1.5 0 0 0 14 13.5V5.055c0-.69-.464-1.274-1.117-1.41C11.505 3.354 9.497 3 8 3Zm3.835 11.266c.034.28.066.53.093.734H4.072a62.692 62.692 0 0 0 .328-3h2.246c.36 0 .704-.143.958-.396a.353.353 0 0 1 .25-.104h.292a.35.35 0 0 1 .25.104c.254.253.599.396.958.396H11.6c.068.808.158 1.621.236 2.266ZM6 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm3.5.5a.5.5 0 0 0 .5-.5.5.5 0 1 0 1 0 .5.5 0 0 0-1 0 .5.5 0 1 0-.5.5Zm-5.03-3h2.176a.353.353 0 0 0 .25-.104c.254-.253.599-.396.958-.396h.292c.36 0 .704.143.958.396a.353.353 0 0 0 .25.104h2.177c-.02-.353-.031-.692-.031-1 0-.927.104-2.051.216-3H4.284c.112.949.216 2.073.216 3 0 .308-.011.647-.03 1Zm-.315-5h7.69l.013-.096a.497.497 0 0 0-.405-.57C10.495 5.188 9.053 5 8 5s-2.495.188-3.453.334a.497.497 0 0 0-.405.57L4.155 6Z"
}));

var _default = SvgTrainLightrailFront;
exports.default = _default;