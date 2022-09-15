import * as React from "react";

const SvgArrowDownLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    className="arrow-down-left_svg__bi arrow-down-left_svg__bi-arrow-down-left"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M2 13.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1H3.707L13.854 2.854a.5.5 0 0 0-.708-.708L3 12.293V7.5a.5.5 0 0 0-1 0v6z"
    />
  </svg>
);

export default SvgArrowDownLeft;
