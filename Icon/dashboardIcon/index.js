const DashboardIcon = ({
  color = "#606e80",
  size = 32,
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
      {/* invisible background (optional — ممكن تنحذف) */}
      <rect width="32" height="32" fill="none" />

      <g>
        <path
          d="M12.333,0h-10A2.336,2.336,0,0,0,0,2.333v6a2.336,2.336,0,0,0,2.333,2.333h10a2.336,2.336,0,0,0,2.333-2.333v-6A2.336,2.336,0,0,0,12.333,0Z"
          fill={color}
        />
        <path
          d="M12.333,213.332h-10A2.336,2.336,0,0,0,0,215.665v14A2.336,2.336,0,0,0,2.333,232h10a2.336,2.336,0,0,0,2.333-2.333v-14A2.336,2.336,0,0,0,12.333,213.332Z"
          transform="translate(0 -199.999)"
          fill={color}
        />
        <path
          d="M289.666,341.332h-10a2.336,2.336,0,0,0-2.333,2.334v6A2.336,2.336,0,0,0,279.666,352h10A2.336,2.336,0,0,0,292,349.666v-6A2.336,2.336,0,0,0,289.666,341.332Z"
          transform="translate(-259.999 -319.999)"
          fill={color}
        />
        <path
          d="M289.666,0h-10a2.336,2.336,0,0,0-2.333,2.333v14a2.336,2.336,0,0,0,2.333,2.333h10A2.336,2.336,0,0,0,292,16.333v-14A2.336,2.336,0,0,0,289.666,0Z"
          transform="translate(-259.999)"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default DashboardIcon;