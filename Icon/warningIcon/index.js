const WarningIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={(size * 29.535) / 32} // يحافظ على نسبة العرض للارتفاع الأصلية
    viewBox="0 0 32 29.535"
    className={className}
    {...rest}
  >
    <path
      d="M17.289,5.723,3.667,30.582a2.338,2.338,0,0,0,2.084,3.453H33a2.343,2.343,0,0,0,2.084-3.453L21.458,5.723A2.388,2.388,0,0,0,17.289,5.723Zm3.438,10.314-.277,9.384H18.3l-.277-9.384ZM19.373,30.528a1.416,1.416,0,1,1,1.469-1.415A1.429,1.429,0,0,1,19.373,30.528Z"
      transform="translate(-3.375 -4.5)"
      fill={color}
    />
  </svg>
);

export default WarningIcon;