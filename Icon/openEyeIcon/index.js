const OpenEyeIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={(size * 24) / 32} // يحافظ على نسبة الطول
    viewBox="0 0 32 24"
    className={className}
    {...rest}
  >
    <path
      d="M16.12,0C6,0,0,12,0,12S6,24,16.12,24C26,24,32,12,32,12S26,0,16.12,0ZM16,4a8,8,0,1,1-8,8A8,8,0,0,1,16,4Zm0,4a4,4,0,1,0,4,4,5.065,5.065,0,0,0-.24-1.12,1.978,1.978,0,1,1-2.64-2.64A3.5,3.5,0,0,0,16,8Z"
      fill={color}
    />
  </svg>
);

export default OpenEyeIcon;