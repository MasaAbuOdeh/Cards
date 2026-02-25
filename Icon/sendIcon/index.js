const SendIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    className={className}
    {...rest}
  >
    <g transform="translate(-15.029 -9.03)">
      <path
        d="M14.507,0a2.081,2.081,0,0,0-1.993,1.5l-2.447,8.564L1.5,12.514a2.085,2.085,0,0,0-.009,4L21.774,22.6a.663.663,0,0,0,.825-.825L16.515,1.494A2.084,2.084,0,0,0,14.507,0Z"
        transform="translate(47.029 25.029) rotate(135)"
        fill={color}
      />
    </g>
  </svg>
);

export default SendIcon;