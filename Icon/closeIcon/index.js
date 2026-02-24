const CloseIcon = ({
  color = "#606e80",
  size = 34,
  strokeWidth = 3,
  className,
  ...rest
}) => {
  // original ratio تقريبًا مربع
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 34.122 34.122"
      className={className}
      {...rest}
    >
      <path
        d="M16,16,0,32,16,16,0,0,16,16,32,0,16,16,32,32Z"
        transform="translate(1.061 1.062)"
        fill={color}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;