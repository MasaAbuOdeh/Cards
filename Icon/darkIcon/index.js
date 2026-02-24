const DarkIcon = ({
  size = 32,
  bgColor = "#ffffff",
  primaryColor = "#5490f5",
  secondaryColor = "#76a6f7",
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
      {/* Background circle */}
      <rect
        width="32"
        height="32"
        rx="16"
        fill={bgColor}
      />

      {/* Moon icon */}
      <g transform="translate(8.615 8.615)">
        <path
          d="M26.064,6.737a7.923,7.923,0,0,1,.729-3.314,7.964,7.964,0,1,0,9.4,10.971A7.946,7.946,0,0,1,26.064,6.737Z"
          transform="translate(-20.985 -3.423)"
          fill={primaryColor}
        />
        <path
          d="M26.854,6.737a7.923,7.923,0,0,1,.729-3.314,7.947,7.947,0,0,0-2.8,1.439,7.956,7.956,0,0,0,11.98,9.967c.072-.145.151-.29.217-.434a7.946,7.946,0,0,1-10.13-7.658Z"
          transform="translate(-21.775 -3.423)"
          fill={secondaryColor}
        />
      </g>
    </svg>
  );
};

export default DarkIcon;