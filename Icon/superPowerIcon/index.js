const SuperpowersIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
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
      d="M32,2.25c-5.95.786-11.914,1.571-17.857,2.357A13.861,13.861,0,0,0,2.071,17.464,13.644,13.644,0,0,0,6.2,28.05L0,34.25l17.843-2.357A13.838,13.838,0,0,0,29.893,19.05,13.613,13.613,0,0,0,25.771,8.464ZM26.307,18.843A10.343,10.343,0,1,1,16.586,8.057,10.277,10.277,0,0,1,26.307,18.843Z"
      fill={color}
    />
  </svg>
);

export default SuperpowersIcon;