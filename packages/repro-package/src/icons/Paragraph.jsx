import * as React from "react";

const SvgParagraph = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    className="paragraph_svg__bi paragraph_svg__bi-paragraph"
    {...props}
  >
    <path d="M10.5 15a.5.5 0 0 1-.5-.5V2H9v12.5a.5.5 0 0 1-1 0V9H7a4 4 0 1 1 0-8h5.5a.5.5 0 0 1 0 1H11v12.5a.5.5 0 0 1-.5.5z" />
  </svg>
);

export default SvgParagraph;
