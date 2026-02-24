const CheckCircleIcon = ({ size = 35.622, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={(size * 35.041) / 35.622} // يحافظ على النسبة الأصلية
    viewBox="0 0 35.622 35.041"
    className={className}
    {...rest}
  >
    <g transform="translate(-1.497 -1.472)">
      <path
        d="M35,17.527V19A16,16,0,1,1,25.51,4.377"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M34.3,6l-16,16.015-4.8-4.8"
        transform="translate(0.699 0.2)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </g>
  </svg>
);

export default CheckCircleIcon;