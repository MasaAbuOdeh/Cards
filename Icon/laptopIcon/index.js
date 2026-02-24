const LaptopIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={(size * 24) / 32} // يحافظ على نسبة العرض للارتفاع الأصلية
    viewBox="0 0 32 24"
    className={className}
    {...rest}
  >
    <path
      d="M27.333,26.5A2.674,2.674,0,0,0,30,23.833V7.167A2.674,2.674,0,0,0,27.333,4.5H4.667A2.674,2.674,0,0,0,2,7.167V23.833A2.674,2.674,0,0,0,4.667,26.5H0c0,1.467,4,2,6,2H26c2,0,6-.533,6-2ZM4.667,7.167H27.333v17H4.667ZM16,27.667a1.333,1.333,0,1,1,1.333-1.333A1.338,1.338,0,0,1,16,27.667Z"
      fill={color}
    />
  </svg>
);

export default LaptopIcon;