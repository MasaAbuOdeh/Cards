const WifiFullIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={(size * 32) / 32}   // النسبة الأصلية للعرض
    height={(size * 25.43) / 32} // النسبة الأصلية للارتفاع
    viewBox="0 0 32 25.43"
    className={className}
    {...rest}
  >
    <g transform="translate(-0.54 -4.5)">
      <path
        d="M16.554,29.916,32.54,10a26.546,26.546,0,0,0-16-5.5A26.5,26.5,0,0,0,.54,10L16.526,29.916l.014.014Z"
        fill={color}
      />
      <path
        d="M5.3,16.055,16.924,30.543l.014.014.014-.014L28.58,16.055A19.213,19.213,0,0,0,16.938,12,19.213,19.213,0,0,0,5.3,16.055Z"
        fill={color}
      />
    </g>
  </svg>
);

export default WifiFullIcon;