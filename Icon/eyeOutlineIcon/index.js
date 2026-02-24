const EyeOutlineIcon = ({ size = 32, color = "#606e80", className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={(size * 26.247) / 35} // للحفاظ على نسبة العرض إلى الارتفاع الأصلية
      viewBox="0 0 35 26.247"
      className={className}
      {...rest}
    >
      <g id="eye" transform="translate(-324.5 -439.735)">
        <g id="Icon_feather-eye" transform="translate(326 441.235)">
          <path
            d="M1.5,17.624S7.318,6,17.5,6s16,11.624,16,11.624-5.818,11.624-16,11.624S1.5,17.624,1.5,17.624Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <path
            d="M22.253,17.876A4.376,4.376,0,1,1,17.876,13.5,4.376,4.376,0,0,1,22.253,17.876Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
        </g>
      </g>
    </svg>
  );
};

export default EyeOutlineIcon;