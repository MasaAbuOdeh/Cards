const SmsIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    className={className}
    {...rest}
  >
    <rect width="32" height="32" fill={color} opacity="0" />
    <path
      d="M31.8,3H6.2A3.2,3.2,0,0,0,3.016,6.2L3,35l6.4-6.4H31.8A3.209,3.209,0,0,0,35,25.4V6.2A3.209,3.209,0,0,0,31.8,3ZM14.2,17.4H11V14.2h3.2Zm6.4,0H17.4V14.2h3.2Zm6.4,0H23.8V14.2H27Z"
      fill={color}
      transform="translate(-3 -3)"
    />
  </svg>
);

export default SmsIcon;