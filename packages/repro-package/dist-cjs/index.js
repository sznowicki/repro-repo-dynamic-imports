"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIconChunk = exports.IconAsChunk = void 0;

var _react = _interopRequireWildcard(require("react"));

var _map = _interopRequireDefault(require("./map"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useIconChunk = name => {
  const [Component, setComponent] = (0, _react.useState)(() => () => null);
  (0, _react.useEffect)(() => {
    const importer = _map.default.get(name);

    if (!importer) {
      console.warn(`Icon ${name} is not available`);
      return;
    }

    importer().then(el => setComponent(() => el.default));
  }, [name]);
  return Component;
};

exports.useIconChunk = useIconChunk;

const IconAsChunk = ({
  name
}) => {
  const IconFromChunk = useIconChunk(name);
  return /*#__PURE__*/_react.default.createElement(IconFromChunk, null);
};

exports.IconAsChunk = IconAsChunk;