const ImageIcon = ({ size = 36, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 35.621 35.621"
    className={className}
    {...rest}
  >
    <g transform="translate(-3 -3)">
      <path
        d="M8.056,4.5H32.944A3.556,3.556,0,0,1,36.5,8.056V32.944A3.556,3.556,0,0,1,32.944,36.5H8.056A3.556,3.556,0,0,1,4.5,32.944V8.056A3.556,3.556,0,0,1,8.056,4.5Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M15.871,13.186A2.686,2.686,0,1,1,13.186,10.5,2.686,2.686,0,0,1,15.871,13.186Z"
        transform="translate(1.101 1.101)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M35.919,23.952,27.038,15,7.5,34.694"
        transform="translate(0.581 1.806)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </g>
  </svg>
);

export default ImageIcon;