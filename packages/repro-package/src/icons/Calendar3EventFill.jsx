import * as React from "react";

const SvgCalendar3EventFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    className="calendar3-event-fill_svg__bi calendar3-event-fill_svg__bi-calendar3-event-fill"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M2 0a2 2 0 0 0-2 2h16a2 2 0 0 0-2-2H2zM0 14V3h16v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm12-8a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"
    />
  </svg>
);

export default SvgCalendar3EventFill;