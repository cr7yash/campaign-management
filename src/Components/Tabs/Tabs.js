import React from "react";

import "./Tabs.css";

const Tabs = ({ activeTab, setActiveTab, localeString }) => {
  return (
    <div className="tabContainer">
      <div
        className={` tabItem ${activeTab == "upcoming" && "active"}`}
        onClick={() => setActiveTab("upcoming")}
      >
        {localeString.upcoming}
      </div>
      <div
        className={`tabItem ${activeTab == "live" && "active"}`}
        onClick={() => setActiveTab("live")}
      >
        {localeString.live}
      </div>
      <div
        className={`tabItem ${activeTab == "past" && "active"}`}
        onClick={() => setActiveTab("past")}
      >
        {localeString.past}
      </div>
    </div>
  );
};
export default Tabs;
