import React, { useState } from "react";
import Header from "./Components/Header/Header";
import DashBoard from "./Components/Dashboard/Dashboard";
import "./index.css";
import { localeString } from "./config/localisation";

const App = () => {
  const [language, setLanguage] = useState("en");
  localeString.setLanguage(language);
  return (
    <div className="container">
      <Header setLanguage={setLanguage} />
      <DashBoard localeString={localeString} />
    </div>
  );
};

export default App;
