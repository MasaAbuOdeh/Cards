const EditIcon = ({ size = 35, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size} // لأنها مربعة
    viewBox="0 0 35 35"
    className={className}
    {...rest}
  >
    <g transform="translate(-1.5 -1.318)">
      <path
        d="M17.313,6H6.181A3.181,3.181,0,0,0,3,9.181V31.446a3.181,3.181,0,0,0,3.181,3.181H28.446a3.181,3.181,0,0,0,3.181-3.181V20.313"
        transform="translate(0 0.192)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M28.7,3.806A3.374,3.374,0,0,1,33.47,8.577L18.361,23.686,12,25.276l1.59-6.361Z"
        transform="translate(0.542 0)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </g>
  </svg>
);

export default EditIcon;