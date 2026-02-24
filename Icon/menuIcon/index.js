const MenuIcon = ({ size = 36, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 35 24.333"
    className={className}
    {...rest}
  >
    <g transform="translate(1.5 1.5)">
      <path
        d="M4.5,18h32"
        transform="translate(-4.5 -7.333)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M4.5,9h32"
        transform="translate(-4.5 -9)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M4.5,27h32"
        transform="translate(-4.5 -5.667)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </g>
  </svg>
);

export default MenuIcon;