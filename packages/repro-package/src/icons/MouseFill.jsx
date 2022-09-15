import * as React from "react";

const SvgMouseFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    className="mouse-fill_svg__bi mouse-fill_svg__bi-mouse-fill"
    {...props}
  >
    <path d="M3 5a5 5 0 0 1 10 0v6a5 5 0 0 1-10 0V5zm5.5-1.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2z" />
  </svg>
);

export default SvgMouseFill;
