const ThemeIcon = ({
  size = 32,
  moonPrimary = "#5490F5",
  moonSecondary = "#76A6F7",
  sunPrimary = "#FFC239",
  sunSecondary = "#FFD55D",
  raysColor = "#FFD55D",
  className,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      {...rest}
    >
      {/* Moon */}
      <path
        d="M28 8a10.944 10.944 0 0 1 1.007-4.577 11 11 0 1 0 12.986 15.154A10.975 10.975 0 0 1 28 8z"
        fill={moonPrimary}
      />
      <path
        d="M28 8a10.944 10.944 0 0 1 1.007-4.577 10.977 10.977 0 0 0-3.863 1.987 10.989 10.989 0 0 0 16.548 13.767c.1-.2.208-.4.3-.6A10.975 10.975 0 0 1 28 8z"
        fill={moonSecondary}
      />

      {/* Sun Rays */}
      <g fill={raysColor}>
        <path d="M31 29h2v3h-2z" />
        <path d="M31 60h2v3h-2z" />
        <path d="M46 45h3v2h-3z" />
        <path d="M15 45h3v2h-3z" />
        <path d="M41.182 56.605l1.414-1.414 2.12 2.12-1.413 1.415z" />
        <path d="M19.266 34.685l1.414-1.414 2.121 2.121-1.414 1.414z" />
        <path d="M19.264 57.31l2.121-2.121 1.414 1.414-2.12 2.12z" />
        <path d="M41.184 35.394l2.122-2.12 1.414 1.413-2.121 2.121z" />
      </g>

      {/* Sun */}
      <circle cx="32" cy="46" r="11" fill={sunPrimary} />
      <path
        d="M32 35a10.945 10.945 0 0 0-6.132 1.868 11 11 0 0 0 15.264 15.264A11 11 0 0 0 32 35z"
        fill={sunSecondary}
      />
    </svg>
  );
};

export default ThemeIcon;