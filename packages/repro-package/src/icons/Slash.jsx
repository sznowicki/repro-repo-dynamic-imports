import * as React from "react";

const SvgSlash = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    className="slash_svg__bi slash_svg__bi-slash"
    {...props}
  >
    <path d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z" />
  </svg>
);

export default SvgSlash;
