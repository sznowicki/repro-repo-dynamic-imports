import React from 'react';
import { IconAsChunk } from "@eskalacja/tmp-repro-dynamic-imports";

const DummyComponent = () => {
  console.log('I am a component from meta package');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Icon from meta component:"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(IconAsChunk, {
    name: "123"
  })));
};

export default DummyComponent;