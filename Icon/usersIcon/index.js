const UsersIcon = ({ size = 35, color = "#606e80", strokeWidth = 3, className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={(size * 29.318) / 35} // يحافظ على النسبة الأصلية
    viewBox="0 0 35 29.318"
    className={className}
    {...rest}
  >
    <g transform="translate(0 -2.864)">
      <path
        d="M24.773,31.227V28.318A5.818,5.818,0,0,0,18.955,22.5H7.318A5.818,5.818,0,0,0,1.5,28.318v2.909"
        transform="translate(0 -0.545)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M19.136,10.318A5.818,5.818,0,1,1,13.318,4.5,5.818,5.818,0,0,1,19.136,10.318Z"
        transform="translate(-0.182 0)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M34.364,31.233V28.324A5.818,5.818,0,0,0,30,22.7"
        transform="translate(-0.864 -0.551)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M24,4.7a5.818,5.818,0,0,1,0,11.273"
        transform="translate(-0.682 -0.006)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </g>
  </svg>
);

export default UsersIcon;