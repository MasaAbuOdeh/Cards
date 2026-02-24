const DiceIcon = ({
  color = "#606e80",
  size = 32,
  className,
  ...rest
}) => {
  // ratio: width / height ≈ 29.471 / 32
  const width = size * (29.471 / 32);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={size}
      viewBox="0 0 29.471 32"
      className={className}
      {...rest}
    >
      <path
        d="M2.669,7.121a6.65,6.65,0,0,1,1.582-1.34L12.289.959a6.681,6.681,0,0,1,6.892,0l8.038,4.823A6.631,6.631,0,0,1,28.8,7.121L15.735,14.961ZM17.075,17.28V32a6.673,6.673,0,0,0,2.106-.8l8.038-4.823a6.734,6.734,0,0,0,3.253-5.745V11.52a6.631,6.631,0,0,0-.346-2.068Zm-2.679,0L1.346,9.452A6.631,6.631,0,0,0,1,11.52v9.109a6.734,6.734,0,0,0,3.251,5.744L12.289,31.2A6.679,6.679,0,0,0,14.4,32Z"
        fill={color}
      />
    </svg>
  );
};

export default DiceIcon;