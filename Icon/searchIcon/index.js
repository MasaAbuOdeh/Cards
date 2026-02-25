const SearchIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    className={className}
    {...rest}
  >
    <g transform="translate(-3 -3)">
      <path
        d="M17.4,31.8A14.4,14.4,0,1,1,31.8,17.4,14.4,14.4,0,0,1,17.4,31.8Zm0-25.2A10.8,10.8,0,1,0,28.2,17.4,10.8,10.8,0,0,0,17.4,6.6Z"
        fill={color}
      />
      <path
        d="M23,24.6a1.6,1.6,0,0,1-1.131-.469l-6.4-6.4a1.6,1.6,0,1,1,2.263-2.263l6.4,6.4A1.6,1.6,0,0,1,23,24.6Z"
        fill={color}
        transform="translate(10.4 10.4)"
      />
    </g>
  </svg>
);

export default SearchIcon;