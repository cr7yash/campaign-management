import React from "react";
import "./Header.css";

const Header = ({ setLanguage }) => {
  const handleLocaleChange = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
  };
  return (
    <div className="header">
      <img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34e4/eccc/a0f9904a158a5a0e049001a5122ed9fa" />
      <select
        onChange={handleLocaleChange}
        className="localSelector"
        placeholder="Select Language"
      >
        <option value="en">English</option>
        <option value="ge">German</option>
      </select>
    </div>
  );
};

export default Header;
