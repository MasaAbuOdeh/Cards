const CloseCircleOutlineIcon = ({ size = 33, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 33 33"
    className={className}
    {...rest}
  >
    <g transform="translate(-2.875 -2.875)">
      <path
        d="M24.323,22.585l-4.054-4.054,4.054-4.054a1.229,1.229,0,1,0-1.738-1.738L18.53,16.792l-4.054-4.054a1.229,1.229,0,0,0-1.738,1.738l4.054,4.054-4.054,4.054a1.189,1.189,0,0,0,0,1.738,1.221,1.221,0,0,0,1.738,0l4.054-4.054,4.054,4.054a1.235,1.235,0,0,0,1.738,0A1.221,1.221,0,0,0,24.323,22.585Z"
        transform="translate(0.845 0.844)"
        fill={color}
        stroke={color}
        strokeWidth="1"
      />
      <path
        d="M19.375,5.529A13.841,13.841,0,1,1,9.583,9.583a13.755,13.755,0,0,1,9.792-4.054m0-2.154a16,16,0,1,0,16,16,16,16,0,0,0-16-16Z"
        transform="translate(0 0)"
        fill={color}
        stroke={color}
        strokeWidth="1"
      />
    </g>
  </svg>
);

export default CloseCircleOutlineIcon;