import * as React from "react";

const SvgCircleFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    className="circle-fill_svg__bi circle-fill_svg__bi-circle-fill"
    {...props}
  >
    <circle cx={8} cy={8} r={8} />
  </svg>
);

export default SvgCircleFill;
