import * as React from "react";

const SvgCash = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    className="cash_svg__bi cash_svg__bi-cash"
    {...props}
  >
    <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
  </svg>
);

export default SvgCash;