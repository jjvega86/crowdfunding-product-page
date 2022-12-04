import React from "react";

const BookmarkIcon = ({ status }) => {
  const bgColor = status === "active" ? "#248079" : "#2F2F2F";
  const bookmarkColor = status === "active" ? "#FFFFFF" : "#B1B1B1";

  return (
    <div className="z-40">
      <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <circle fill={`${bgColor}`} cx="28" cy="28" r="28" />
          <path fill={`${bookmarkColor}`} d="M23 19v18l5-5.058L33 37V19z" />
        </g>
      </svg>
    </div>
  );
};

export default BookmarkIcon;
