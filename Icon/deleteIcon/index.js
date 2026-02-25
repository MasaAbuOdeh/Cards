const DeleteIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={(size * 24.889) / 32} // نحافظ على النسبة الأصلية
    height={size}
    viewBox="0 0 24.889 32"
    className={className}
    {...rest}
  >
    <path
      d="M9.278,32.944A3.566,3.566,0,0,0,12.833,36.5H27.056a3.566,3.566,0,0,0,3.556-3.556V11.611H9.278ZM32.389,6.278H26.167L24.389,4.5H15.5L13.722,6.278H7.5V9.833H32.389Z"
      transform="translate(-7.5 -4.5)"
      fill={color}
    />
  </svg>
);

export default DeleteIcon;