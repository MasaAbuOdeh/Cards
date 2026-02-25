const LocationIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={(size * 22.4) / 32} // نحافظ على النسبة الأصلية
    height={size}
    viewBox="0 0 22.4 32"
    className={className}
    {...rest}
  >
    <path
      d="M18.7,3A11.192,11.192,0,0,0,7.5,14.2C7.5,22.6,18.7,35,18.7,35S29.9,22.6,29.9,14.2A11.192,11.192,0,0,0,18.7,3Zm0,15.2a4,4,0,1,1,4-4A4,4,0,0,1,18.7,18.2Z"
      transform="translate(-7.5 -3)"
      fill={color}
    />
  </svg>
);

export default LocationIcon;