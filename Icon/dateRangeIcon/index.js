const DateRangeIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={(size * 28.8) / 32} // نحافظ على النسبة الأصلية
    height={size}
    viewBox="0 0 28.8 32"
    className={className}
    {...rest}
  >
    <path
      d="M14.1,17.4H10.9v3.2h3.2Zm6.4,0H17.3v3.2h3.2Zm6.4,0H23.7v3.2h3.2ZM30.1,6.2H28.5V3H25.3V6.2H12.5V3H9.3V6.2H7.7A3.185,3.185,0,0,0,4.516,9.4L4.5,31.8A3.2,3.2,0,0,0,7.7,35H30.1a3.209,3.209,0,0,0,3.2-3.2V9.4A3.209,3.209,0,0,0,30.1,6.2Zm0,25.6H7.7V14.2H30.1Z"
      transform="translate(-4.5 -3)"
      fill={color}
    />
  </svg>
);

export default DateRangeIcon;