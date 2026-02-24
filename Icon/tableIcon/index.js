const TableIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 28"
    className={className}
    {...rest}
  >
    <path
      d="M29,2.25H3a3,3,0,0,0-3,3v22a3,3,0,0,0,3,3H29a3,3,0,0,0,3-3v-22A3,3,0,0,0,29,2.25Zm-15,24H4v-6H14Zm0-10H4v-6H14Zm14,10H18v-6H28Zm0-10H18v-6H28Z"
      fill={color}
    />
  </svg>
);

export default TableIcon;