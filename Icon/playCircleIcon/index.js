const PlayCircleIcon = ({ size = 36, color = "#606e80", className, ...rest }) => (
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
        d="M15,12l9.6,6.4L15,24.8Z"
        transform="translate(0.8 0.6)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </g>
  </svg>
);

export default PlayCircleIcon;