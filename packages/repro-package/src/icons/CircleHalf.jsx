import * as React from "react";

const SvgCircleHalf = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    className="circle-half_svg__bi circle-half_svg__bi-circle-half"
    {...props}
  >
    <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
  </svg>
);

export default SvgCircleHalf;
