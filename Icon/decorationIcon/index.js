const DecorationIcon = ({
  color = "#606e80",
  size = 32,
  strokeWidth = 1,
  className,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      {...rest}
    >
      {/* Filled rotated square */}
      <rect
        width="14.641"
        height="14.641"
        rx="6"
        transform="translate(6.001 13.32) rotate(-30)"
        fill={color}
      />

      {/* Outer rotated rounded square (stroke) */}
      <g
        transform="translate(0 11.713) rotate(-30)"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      >
        <rect width="23.426" height="23.426" rx="8" />
        <rect
          x="0.5"
          y="0.5"
          width="22.426"
          height="22.426"
          rx="7.5"
        />
      </g>
    </svg>
  );
};

export default DecorationIcon;