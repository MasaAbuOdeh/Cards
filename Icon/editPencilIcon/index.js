const EditPencilIcon = ({ size = 32, color = "#48a7a5", className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    className={className}
    {...props}
  >
    <circle cx="16" cy="16" r="16" fill="#fff" />
    <path
      d="M4.5,16.657v3.2H7.7l9.437-9.437-3.2-3.2ZM19.61,7.945a.85.85,0,0,0,0-1.2l-2-2a.85.85,0,0,0-1.2,0L14.849,6.307l3.2,3.2L19.61,7.945Z"
      fill={color}
      transform="translate(3.82 3.824)"
    />
  </svg>
);

export default EditPencilIcon;