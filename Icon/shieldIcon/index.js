const ShieldIcon = ({ size = 36, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 28.2 34.5"
    className={className}
    {...rest}
  >
    <path
      d="M18.6,34.5s12.6-6.3,12.6-15.75V7.725L18.6,3,6,7.725V18.75C6,28.2,18.6,34.5,18.6,34.5Z"
      transform="translate(-4.5 -1.5)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>
);

export default ShieldIcon;