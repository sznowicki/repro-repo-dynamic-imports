import * as React from "react";

const SvgDashCircleFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    className="dash-circle-fill_svg__bi dash-circle-fill_svg__bi-dash-circle-fill"
    {...props}
  >
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
  </svg>
);

export default SvgDashCircleFill;
