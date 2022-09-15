import * as React from "react";

const SvgFileFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    className="file-fill_svg__bi file-fill_svg__bi-file-fill"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
    />
  </svg>
);

export default SvgFileFill;
