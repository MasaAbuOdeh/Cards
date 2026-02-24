const WrenchIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    className={className}
    {...rest}
  >
    <rect width="32" height="32" fill={color} opacity="0" />
    <path
      d="M31.733,6.819a.749.749,0,0,0-1.257-.344l-4.647,4.647-4.242-.707-.707-4.242,4.647-4.647a.751.751,0,0,0-.354-1.26A8.956,8.956,0,0,0,14.508,11.836L1.171,25.172a4,4,0,0,0,5.656,5.656L20.153,17.5A8.97,8.97,0,0,0,31.733,6.819ZM4,29.5A1.5,1.5,0,1,1,5.5,28,1.5,1.5,0,0,1,4,29.5Z"
      fill={color}
    />
  </svg>
);

export default WrenchIcon;