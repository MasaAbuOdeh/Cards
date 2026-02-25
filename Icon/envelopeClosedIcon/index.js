const EnvelopeClosedIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={(size * 24) / 32} // يحافظ على نسبة الطول
    viewBox="0 0 32 24"
    className={className}
    {...rest}
  >
    <path
      d="M0,0V4l16,8L32,4V0ZM0,8V24H32V8L16,16Z"
      fill={color}
    />
  </svg>
);

export default EnvelopeClosedIcon;