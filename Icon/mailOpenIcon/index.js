const MailOpenIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={(size * 27.429) / 32} // يحافظ على نسبة العرض للارتفاع الأصلية
    viewBox="0 0 32 27.429"
    className={className}
    {...rest}
  >
    <path
      d="M34.25,14.333a2.972,2.972,0,0,0-1.448-2.59L18.25,4.5,3.7,11.743a3.144,3.144,0,0,0-1.448,2.59V28.881A3.056,3.056,0,0,0,5.3,31.929H31.2a3.056,3.056,0,0,0,3.048-3.048Zm-16,7.31-12.241-8,12.241-6.1,12.241,6.1Z"
      fill={color}
    />
  </svg>
);

export default MailOpenIcon;