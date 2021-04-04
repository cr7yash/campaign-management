import React, { useState, useEffect } from "react";
import Tabs from "../Tabs/Tabs";
import DashTable from "../DashTable/DashTable";

import { MockData } from "../../MockData/Data";
import "./Dashboard.css";

const DashBoard = ({ localeString }) => {
  let [activeTab, setActiveTab] = useState("past");
  let [tableData, setData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("campaignData")) {
      setData(JSON.parse(localStorage.getItem("campaignData")));
    } else {
      setData(MockData.data);
      localStorage.setItem("campaignData", JSON.stringify(MockData.data));
    }
  }, [setData]);

  let tabsData = {
    upcoming: [],
    past: [],
    live: [],
  };

  for (let i = 0; i < tableData.length; i++) {
    const diffTime = new Date(tableData[i].createdOn) - new Date();
    const diffTimeAbs = Math.abs(diffTime);
    const diffDays = diffTimeAbs / (1000 * 60 * 60 * 24);
    if (diffDays > 1 && diffTime < 0) {
      tabsData["past"].push(tableData[i]);
    } else if (diffDays > 0 && diffTime > 0) {
      tabsData["upcoming"].push(tableData[i]);
    } else {
      tabsData["live"].push(tableData[i]);
    }
  }
  return (
    <div className="dashBoard">
      <h1>{localeString.manage}</h1>
      <Tabs
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        localeString={localeString}
      />
      <DashTable
        data={tabsData[activeTab]}
        tableData={tableData}
        activeTab={activeTab}
        setData={setData}
        localeString={localeString}
      />
    </div>
  );
};
export default DashBoard;
