const StopCircleIcon = ({ size = 36, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 35 35"
    className={className}
    {...rest}
  >
    <g transform="translate(-1.5 -1.5)">
      <path
        d="M35,19A16,16,0,1,1,19,3,16,16,0,0,1,35,19Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M13.5,13.5H23.7V23.7H13.5Z"
        transform="translate(0.4 0.4)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </g>
  </svg>
);

export default StopCircleIcon;