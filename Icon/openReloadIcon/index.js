const OpenReloadIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size} // هنا الأيقونة مربعة 32x32
    viewBox="0 0 32 32.04"
    className={className}
    {...rest}
  >
    <path
      d="M16.02,0A16.02,16.02,0,1,0,27.394,27.394l-2.884-2.884A12.024,12.024,0,1,1,15.98,4.005,11.651,11.651,0,0,1,24.35,7.65l-4.365,4.365H32V0L27.234,4.766A15.931,15.931,0,0,0,15.98,0Z"
      fill={color}
    />
  </svg>
);

export default OpenReloadIcon;