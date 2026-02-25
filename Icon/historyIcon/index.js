const HistoryIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={(size * 27.429) / 32} // نحافظ على النسبة الأصلية
    viewBox="0 0 32 27.429"
    className={className}
    {...rest}
  >
    <path
      d="M19.786,4.5A13.715,13.715,0,0,0,6.071,18.214H1.5l5.928,5.928.107.213,6.156-6.141H9.119a10.718,10.718,0,1,1,3.139,7.528l-2.164,2.164A13.711,13.711,0,1,0,19.786,4.5Zm-1.524,7.619v7.619l6.522,3.87,1.1-1.844L20.548,18.6V12.119Z"
      transform="translate(-1.5 -4.5)"
      fill={color}
    />
  </svg>
);

export default HistoryIcon;