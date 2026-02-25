const PersonIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size} // لأنها مربعة 32x32
    viewBox="0 0 32 32"
    className={className}
    {...rest}
  >
    <path
      d="M20.5,20.5a8,8,0,1,0-8-8A8.023,8.023,0,0,0,20.5,20.5Zm0,4c-5.3,0-16,2.7-16,8v4h32v-4C36.5,27.2,25.8,24.5,20.5,24.5Z"
      transform="translate(-4.5 -4.5)"
      fill={color}
    />
  </svg>
);

export default PersonIcon;