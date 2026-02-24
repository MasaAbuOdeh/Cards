const MobileIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={(size * 20) / 32} // الحفاظ على النسبة الأصلية
    height={size}
    viewBox="0 0 20 32"
    className={className}
    {...rest}
  >
    <path
      d="M17,0H3A3,3,0,0,0,0,3V29a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V3A3,3,0,0,0,17,0ZM10,30a2,2,0,1,1,2-2A2,2,0,0,1,10,30Zm7-6.75a.752.752,0,0,1-.75.75H3.75A.752.752,0,0,1,3,23.25V3.75A.752.752,0,0,1,3.75,3h12.5a.752.752,0,0,1,.75.75Z"
      fill={color}
    />
  </svg>
);

export default MobileIcon;