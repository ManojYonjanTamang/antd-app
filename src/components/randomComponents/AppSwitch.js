import React, { useState } from "react";
import { Switch } from "antd";
import "./ThemeSwitch.css"; // Import the CSS file for theme styles

const AppSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Switch defaultChecked={isDarkMode} onChange={toggleTheme} />
      {/* Rest of your webpage */}
    </div>
  );
};

export default AppSwitch;
