const PercentIcon = ({ size = 36, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 35 35"
    className={className}
    {...rest}
  >
    <g transform="translate(-4.5 -4.5)">
      <path
        d="M34.7,7.5,7.5,34.7"
        transform="translate(0.9 0.9)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M18,12a6,6,0,1,1-6-6,6,6,0,0,1,6,6Z"
        transform="translate(0)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M34.5,28.5a6,6,0,1,1-6-6,6,6,0,0,1,6,6Z"
        transform="translate(3.5 3.5)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </g>
  </svg>
);

export default PercentIcon;