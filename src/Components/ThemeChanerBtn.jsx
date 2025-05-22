import React from "react";

const ThemeChangerBtn = () => {
  return (
    <div>
      <label className="swap swap-rotate">
        {/* This checkbox will switch themes */}
        <input
          type="checkbox"
          data-toggle-theme="light,synthwave"
          data-act-class="ACTIVECLASS"
          className="theme-controller"
        />

        {/* Sun icon */}
        <svg
          className="swap-off h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1..." />
        </svg>

        {/* Moon icon */}
        <svg
          className="swap-on h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1..." />
        </svg>
      </label>
    </div>
  );
};

export default ThemeChangerBtn;
