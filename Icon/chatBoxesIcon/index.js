const ChatboxesIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={(size * 29.538) / 32} // يحافظ على نسبة العرض للارتفاع الأصلية
    viewBox="0 0 32 29.538"
    className={className}
    {...rest}
  >
    <g transform="translate(-3.375 -4.5)">
      <path
        d="M29.8,4.5H4.114a.74.74,0,0,0-.739.628V21.606a.771.771,0,0,0,.739.663H8.529v6.838l6.933-6.838H29.8a.621.621,0,0,0,.573-.663V5.128A.589.589,0,0,0,29.8,4.5Z"
        fill={color}
      />
      <path
        d="M33.923,8.93H31.431V21.743c0,1.23-.532,2.033-1.935,2.033h-13.9l-2.993,3h9.976l6.932,6.846V26.776h4.415a.634.634,0,0,0,.585-.668V9.63A.666.666,0,0,0,33.923,8.93Z"
        transform="translate(0.867 0.416)"
        fill={color}
      />
    </g>
  </svg>
);

export default ChatboxesIcon;