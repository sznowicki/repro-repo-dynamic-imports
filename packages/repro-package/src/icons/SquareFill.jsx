import * as React from "react";

const SvgSquareFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    className="square-fill_svg__bi square-fill_svg__bi-square-fill"
    {...props}
  >
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" />
  </svg>
);

export default SvgSquareFill;
