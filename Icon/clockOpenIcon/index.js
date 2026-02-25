const ClockOpenIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    className={className}
    {...rest}
  >
    <path
      d="M16,0A16,16,0,1,0,32,16,16.047,16.047,0,0,0,16,0Zm0,4A12,12,0,1,1,4,16,11.984,11.984,0,0,1,16,4ZM14,8v8.88l.64.52,2,2L18,20.92l2.88-2.88-1.52-1.36L18,15.32V8.08H14Z"
      fill={color}
    />
  </svg>
);

export default ClockOpenIcon;