import * as React from "react";

const SvgStrava = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    className="strava_svg__bi strava_svg__bi-strava"
    {...props}
  >
    <path d="M6.731 0 2 9.125h2.788L6.73 5.497l1.93 3.628h2.766L6.731 0zm4.694 9.125-1.372 2.756L8.66 9.125H6.547L10.053 16l3.484-6.875h-2.112z" />
  </svg>
);

export default SvgStrava;
