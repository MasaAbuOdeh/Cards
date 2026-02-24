const EyeIcon = ({ size = 32, color = "#606e80", className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={(size * 24.912) / 32.001} // للحفاظ على نسبة العرض إلى الارتفاع الأصلية
      viewBox="0 0 32.001 24.912"
      className={className}
      {...rest}
    >
      <g id="eye" transform="translate(0 -56.735)">
        <circle
          id="Ellipse_1496"
          cx="5.332"
          cy="5.332"
          r="5.332"
          transform="translate(10.67 63.859)"
          fill={color}
        />
        <path
          id="Path_164489"
          d="M31.024,65.751c-2.067-3.367-6.77-9.016-15.023-9.016S3.045,62.384.978,65.751a6.542,6.542,0,0,0,0,6.88C3.045,76,7.748,81.647,16,81.647S28.957,76,31.024,72.631A6.542,6.542,0,0,0,31.024,65.751ZM16,77.188a8,8,0,1,1,8-8A8,8,0,0,1,16,77.188Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default EyeIcon;