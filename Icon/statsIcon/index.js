const StatsIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    className={className}
    {...rest}
  >
    <g transform="translate(1.6)">
      <path
        d="M13.042,36.5h4a.669.669,0,0,0,.667-.667V5.167a.669.669,0,0,0-.667-.667h-4a.669.669,0,0,0-.667.667V35.833A.669.669,0,0,0,13.042,36.5Z"
        fill={color}
        transform="translate(-4.375 -4.5)"
      />
      <path
        d="M6.292,33.583h4a.669.669,0,0,0,.667-.667v-12a.669.669,0,0,0-.667-.667h-4a.669.669,0,0,0-.667.667v12A.669.669,0,0,0,6.292,33.583Z"
        fill={color}
        transform="translate(-5.625 -1.583)"
      />
      <path
        d="M19.8,34.417h3.983a.672.672,0,0,0,.675-.675V16.425a.672.672,0,0,0-.675-.675H19.8a.672.672,0,0,0-.675.675V33.742A.672.672,0,0,0,19.8,34.417Z"
        fill={color}
        transform="translate(-3.125 -2.417)"
      />
      <path
        d="M25.875,9.675V34.992a.672.672,0,0,0,.675.675h3.983a.672.672,0,0,0,.675-.675V9.675A.672.672,0,0,0,30.533,9H26.55A.672.672,0,0,0,25.875,9.675Z"
        fill={color}
        transform="translate(-1.875 -3.667)"
      />
    </g>
  </svg>
);

export default StatsIcon;