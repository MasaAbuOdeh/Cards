const BasicCalendarIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={(size * 28) / 32} // للحفاظ على النسبة الأصلية
    height={size}
    viewBox="0 0 28 32"
    className={className}
    {...rest}
  >
    <path
      d="M.75,12h26.5a.752.752,0,0,1,.75.75V29a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V12.75A.752.752,0,0,1,.75,12ZM28,9.25V7a3,3,0,0,0-3-3H22V.75A.752.752,0,0,0,21.25,0h-2.5A.752.752,0,0,0,18,.75V4H10V.75A.752.752,0,0,0,9.25,0H6.75A.752.752,0,0,0,6,.75V4H3A3,3,0,0,0,0,7V9.25A.752.752,0,0,0,.75,10h26.5A.752.752,0,0,0,28,9.25Z"
      fill={color}
    />
  </svg>
);

export default BasicCalendarIcon;