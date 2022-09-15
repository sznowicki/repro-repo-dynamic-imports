"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SvgFiletypePptx = props => /*#__PURE__*/React.createElement("svg", Object.assign({
  xmlns: "http://www.w3.org/2000/svg",
  width: 16,
  height: 16,
  fill: "currentColor",
  className: "filetype-pptx_svg__bi filetype-pptx_svg__bi-filetype-pptx"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.5 11.85h1.6c.289 0 .533.06.732.179.201.117.355.276.46.477.105.201.158.427.158.677 0 .25-.054.476-.16.677-.106.199-.26.357-.464.474a1.452 1.452 0 0 1-.732.173H2.29v1.342H1.5V11.85Zm2.06 1.714a.795.795 0 0 0 .085-.381c0-.226-.062-.4-.185-.521-.123-.122-.294-.182-.513-.182h-.659v1.406h.66a.794.794 0 0 0 .374-.082.574.574 0 0 0 .238-.24Zm1.302-1.714h1.6c.289 0 .533.06.732.179.201.117.355.276.46.477.106.201.158.427.158.677 0 .25-.053.476-.16.677-.106.199-.26.357-.464.474a1.452 1.452 0 0 1-.732.173h-.803v1.342h-.79V11.85Zm2.06 1.714a.795.795 0 0 0 .085-.381c0-.226-.062-.4-.185-.521-.123-.122-.294-.182-.513-.182H5.65v1.406h.66a.793.793 0 0 0 .374-.082.574.574 0 0 0 .238-.24Zm2.852 2.285v-3.337h1.137v-.662H7.846v.662H8.98v3.337h.794Zm3.796-3.999h.893l-1.274 2.007 1.254 1.992h-.908l-.85-1.415h-.035l-.853 1.415h-.861l1.24-2.016-1.228-1.983h.931l.832 1.439h.035l.824-1.439Z"
}));

var _default = SvgFiletypePptx;
exports.default = _default;