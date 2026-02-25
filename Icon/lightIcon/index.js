import React from "react";

const LightIcon = ({ size = 32, color = "#606e80", className, ...rest }) => (
  <svg
    id="light_icon"
    data-name="light icon"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    className={className}
    {...rest}
  >
    <g id="Group_53028" data-name="Group 53028" transform="translate(0 0)">
      <rect id="Rectangle_1076" data-name="Rectangle 1076" width="32" height="32" rx="16" fill="#fff"/>
    </g>
    <g id="dark_light_icon" data-name="dark light icon" transform="translate(3.692 3.692)">
      <g id="Artboard_29" data-name="Artboard 29">
        <g id="dark" transform="translate(4.333 4.65)">
          <path
            id="Path_3985"
            data-name="Path 3985"
            d="M26.064,6.737a7.923,7.923,0,0,1,.729-3.314,7.964,7.964,0,1,0,9.4,10.971A7.946,7.946,0,0,1,26.064,6.737Z"
            transform="translate(-20.985 -3.423)"
            fill={color} 
          />
          <path
            id="Path_3986"
            data-name="Path 3986"
            d="M26.854,6.737a7.923,7.923,0,0,1,.729-3.314,7.947,7.947,0,0,0-2.8,1.439,7.956,7.956,0,0,0,11.98,9.967c.072-.145.151-.29.217-.434a7.946,7.946,0,0,1-10.13-7.658Z"
            transform="translate(-21.775 -3.423)"
            fill={color} 
          />
        </g>
        <g id="light">
          <g id="Group_477" data-name="Group 477">
            <path
              id="Path_3987"
              data-name="Path 3987"
              d="M26.584,29h1.448v2.172H26.584Zm0,22.443h1.448v2.172H26.584Zm10.86-10.86h2.172v1.448H37.443ZM15,40.584h2.172v1.448H15Zm18.955,8.4,1.024-1.024L36.514,49.5l-1.023,1.024ZM18.089,33.116l1.024-1.024,1.536,1.536-1.024,1.024Zm0,16.38,1.536-1.536,1.024,1.024-1.535,1.535Zm15.87-15.867,1.536-1.535,1.024,1.023-1.536,1.536Z"
              transform="translate(-15 -29)"
              fill="#ffd55d"
            />
          </g>
          <circle
            id="Ellipse_66"
            data-name="Ellipse 66"
            cx="7.964"
            cy="7.964"
            r="7.964"
            transform="translate(4.344 4.344)"
            fill="#ffd55d"
          />
          <path
            id="Path_3988"
            data-name="Path 3988"
            d="M29.792,35a7.924,7.924,0,0,0-4.439,1.352A7.964,7.964,0,0,0,36.4,47.4,7.964,7.964,0,0,0,29.792,35Z"
            transform="translate(-17.484 -30.656)"
            fill="#ffd55d"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default LightIcon;