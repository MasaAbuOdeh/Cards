const UploadCloudIcon = ({ size = 36, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size * (31.181 / 37.019)} // يحافظ على نسبة العرض للارتفاع
    viewBox="0 0 37.019 31.181"
    className={className}
    {...rest}
  >
    <g transform="translate(1.014 -1.998)">
      <path
        d="M23.635,23.818,17.818,18,12,23.818"
        transform="translate(-0.32 -0.41)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
      <path
        d="M18,18V31.09"
        transform="translate(-0.502 -0.41)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
      <path
        d="M29.7,26.883a7.272,7.272,0,0,0-3.476-13.657H24.392A11.635,11.635,0,1,0,4.409,23.843"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
      <path
        d="M23.635,23.818,17.818,18,12,23.818"
        transform="translate(-0.32 -0.41)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
    </g>
  </svg>
);

export default UploadCloudIcon;