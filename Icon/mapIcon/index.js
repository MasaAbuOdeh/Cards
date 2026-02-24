const MapIcon = ({ size = 36, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 33.5 32"
    className={className}
    {...rest}
  >
    <g transform="translate(1.6 1.6)">
      <path
        d="M1.5,8.527V30.636l9.673-5.527,11.055,5.527L31.9,25.109V3L22.227,8.527,11.173,3Z"
        transform="translate(-1.5 -3)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M12,3V25.109"
        transform="translate(-2.327 -3)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M24,9V31.109"
        transform="translate(-3.273 -3.473)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </g>
  </svg>
);

export default MapIcon;