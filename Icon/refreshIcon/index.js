const RefreshIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 31.999 31.999"
    className={className}
    {...rest}
  >
    <path
      d="M33.311,10.7A16,16,0,1,0,37.473,26H33.311A12,12,0,1,1,22,10a11.84,11.84,0,0,1,8.445,3.56L24.005,20H38.014V6Z"
      fill={color}
    />
  </svg>
);

export default RefreshIcon;