const TrendingUpIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size * (19.2 / 32)} 
    viewBox="0 0 32 19.2"
    className={className}
    {...rest}
  >
    <path
      d="M25.4,9l3.664,3.664-7.808,7.808-6.4-6.4L3,25.944,5.256,28.2l9.6-9.6,6.4,6.4,10.08-10.064L35,18.6V9Z"
      fill={color}
      transform="translate(-3 -9)"
    />
  </svg>
);

export default TrendingUpIcon;