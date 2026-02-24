const BrainIcon = ({
  color = "#606e80",
  size = 32,
  strokeWidth = 1.5,
  className,
  ...rest
}) => {
  // Original ratio: 33.5 / 32.253 ≈ 1.0387
  const width = size * 1.0387;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={size}
      viewBox="0 0 33.5 32.253"
      className={className}
      {...rest}
    >
      <g transform="translate(0.75 0.75)">
        <rect width="31" height="31" fill="none" opacity="0" />
        <g>
          <path
            d="M22.167,51.393A4.334,4.334,0,0,1,17.8,47.159a4.171,4.171,0,0,1,.978-2.686,4.222,4.222,0,0,1,.328-8.418,4.169,4.169,0,0,1-.956-2.659,4.267,4.267,0,0,1,4.3-4.228,4.207,4.207,0,0,1-.037-.555,4.294,4.294,0,0,1,8.587,0h0V50.767a4.445,4.445,0,0,1-8.834.626Z"
            transform="translate(-15 -24.385)"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth={strokeWidth}
          />
          <path
            d="M122.249,36.447a3.3,3.3,0,1,1,0,6.6m.244-13.876a4.107,4.107,0,0,0,4.092,3.53m-4.37,18.695a4.338,4.338,0,0,1-.045-.626,4.406,4.406,0,0,1,4.439-4.371m4.438,4.371a4.445,4.445,0,0,0,8.834.626,4.334,4.334,0,0,0,4.371-4.234,4.171,4.171,0,0,0-.978-2.686,4.222,4.222,0,0,0-.328-8.418A4.169,4.169,0,0,0,143.9,33.4a4.267,4.267,0,0,0-4.3-4.228,4.21,4.21,0,0,0,.037-.555,4.294,4.294,0,0,0-8.587,0h0"
            transform="translate(-115.048 -24.386)"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth={strokeWidth}
          />
          <path
            d="M326.938,103.636a3.3,3.3,1,1,0,0,6.6m-.244-13.876a4.107,4.107,0,0,1-4.092,3.53m4.37,18.695a4.338,4.338,0,0,0,.045-.626,4.406,4.406,0,0,0-4.439-4.371"
            transform="translate(-302.139 -91.574)"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth={strokeWidth}
          />
        </g>
      </g>
    </svg>
  );
};

export default BrainIcon;
