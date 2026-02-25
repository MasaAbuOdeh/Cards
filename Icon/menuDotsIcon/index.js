const MenuDotsIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size / 4}   // الأصلي كان 8، ممكن التحكم بالscale عن طريق size
    height={size}
    viewBox="0 0 8 32"
    className={className}
    {...rest}
  >
    <g id="menu" transform="translate(9369 8964)">
      <circle
        id="Ellipse_1482"
        data-name="Ellipse 1482"
        cx="4"
        cy="4"
        r="4"
        transform="translate(-9369 -8964)"
        fill={color}
      />
      <circle
        id="Ellipse_1483"
        data-name="Ellipse 1483"
        cx="4"
        cy="4"
        r="4"
        transform="translate(-9369 -8953)"
        fill={color}
      />
      <circle
        id="Ellipse_1484"
        data-name="Ellipse 1484"
        cx="4"
        cy="4"
        r="4"
        transform="translate(-9369 -8940)"
        fill={color}
      />
    </g>
  </svg>
);

export default MenuDotsIcon;