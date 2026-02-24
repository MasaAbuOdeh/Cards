const CrownIcon = ({
  color = "#606e80",
  size = 32,
  className,
  ...rest
}) => {
  // original ratio: 32 / 26.88 ≈ 1.1905
  const height = size / 1.1905;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={height}
      viewBox="0 0 32 26.88"
      className={className}
      {...rest}
    >
      <path
        d="M26.24,64H5.76a1.92,1.92,0,1,0,0,3.84H26.24a1.92,1.92,0,1,0,0-3.84Zm3.2-19.2a2.552,2.552,0,0,0-1.266,4.772c-1.481,3.507-3.791,5.659-5.951,5.464-2.4-.2-4.36-3.035-5.44-7.785a3.2,3.2,0,1,0-1.567,0c-1.08,4.75-3.039,7.589-5.44,7.785-2.15.195-4.471-1.957-5.951-5.464a2.559,2.559,0,1,0-1.553.32L4.739,62.72H27.261l2.465-12.828A2.554,2.554,0,0,0,29.44,44.8Z"
        transform="translate(0 -40.96)"
        fill={color}
      />
    </svg>
  );
};

export default CrownIcon;