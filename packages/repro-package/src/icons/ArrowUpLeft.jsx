import * as React from "react";

const SvgArrowUpLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    className="arrow-up-left_svg__bi arrow-up-left_svg__bi-arrow-up-left"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0v-6z"
    />
  </svg>
);

export default SvgArrowUpLeft;
