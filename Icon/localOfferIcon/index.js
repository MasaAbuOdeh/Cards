const LocalOfferIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    className={className}
    {...rest}
  >
    <path
      d="M34.056,18.328l-14.4-14.4A3.18,3.18,0,0,0,17.4,3H6.2A3.209,3.209,0,0,0,3,6.2V17.4a3.193,3.193,0,0,0,.944,2.272l14.4,14.4A3.18,3.18,0,0,0,20.6,35a3.128,3.128,0,0,0,2.256-.944l11.2-11.2A3.128,3.128,0,0,0,35,20.6a3.232,3.232,0,0,0-.944-2.272ZM8.6,11A2.4,2.4,0,1,1,11,8.6,2.4,2.4,0,0,1,8.6,11Z"
      transform="translate(-3 -3)"
      fill={color}
    />
  </svg>
);

export default LocalOfferIcon;