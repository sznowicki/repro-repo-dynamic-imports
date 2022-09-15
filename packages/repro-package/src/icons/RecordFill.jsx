import * as React from "react";

const SvgRecordFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    className="record-fill_svg__bi record-fill_svg__bi-record-fill"
    {...props}
  >
    <path fillRule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
  </svg>
);

export default SvgRecordFill;
