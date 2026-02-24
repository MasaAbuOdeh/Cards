const LockIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={(size * 28) / 32} // الحفاظ على النسبة الأصلية
    height={size}
    viewBox="0 0 28 32"
    className={className}
    {...rest}
  >
    <path
      d="M25,14H23.5V9.5a9.5,9.5,0,0,0-19,0V14H3a3,3,0,0,0-3,3V29a3,3,0,0,0,3,3H25a3,3,0,0,0,3-3V17A3,3,0,0,0,25,14Zm-6.5,0h-9V9.5a4.5,4.5,0,0,1,9,0Z"
      fill={color}
    />
  </svg>
);

export default LockIcon;