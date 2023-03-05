import React from "react";
import "./index.css";

export const HomeScreen = () => {
  return (
    <div className="home">
      <div className="sidebar">
        <div className="sidebar-container">
          <img
            src="/src/assets/avatar.jpg"
            style={{ width: 200, height: 200, borderRadius: 100 }}
          />
          <p
            style={{
              overflowWrap: "break-word",
              inlineSize: "70%",
              fontSize: 23,
            }}
          >
            I am Strata, a super simple responsive site template freebie crafted
            by HTML5 UP.
          </p>
        </div>
      </div>
      <div className="main">
        <p>Main</p>
      </div>
    </div>
  );
};
