import React, { useState } from "react";
import ReactDom from "react-dom";

import "react-datepicker/dist/react-datepicker.css";

import Modal from "../Modal/Modal";
import DatePicker from "react-datepicker";

import "./DashTable.css";

import file from "../../Images/file.png";
import calendar from "../../Images/calendar.png";
import stats from "../../Images/statistics-report.png";
import Price from "../../Images/Price.png";
import mancalamix from "../../Images/mancalamix.png";
import pubg from "../../Images/pubg.png";
import superjewels from "../../Images/superjewels.png";
import moleslayer from "../../Images/moleslayer.png";

const DashTable = ({ data, setData, tableData, localeString, activeTab }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [datePicker, setDatePicker] = useState({});
  const [popUpData, setPopUpData] = useState({});

  const toggleDatePicker = (id) => {
    setDatePicker({ ...datePicker, [id]: !datePicker[id] });
  };

  const updateData = (date, rowdata) => {
    let newRowData = { ...rowdata, createdOn: date.toDateString() };
    let newData = tableData.map((data) => {
      if (data.name != newRowData.name) return data;
      else {
        return newRowData;
      }
    });
    setData(newData);
    setDatePicker({ ...datePicker, [rowdata.id]: false });
  };

  const handlePricingView = (rowdata) => {
    setPopUpData(rowdata);
    setModalOpen(true);
  };

  const tableJSX = data.map((rowdata, i) => {
    const diffTime = new Date(rowdata.createdOn) - new Date();
    const diffDays = Math.abs(diffTime) / (1000 * 60 * 60 * 24);
    const diffDaysRounded =
      diffTime > 0 ? Math.ceil(diffDays) : Math.floor(diffDays);

    let campaignImage;

    switch (rowdata.popUpIcon) {
      case "mancalamix":
        campaignImage = mancalamix;
        break;
      case "pubg":
        campaignImage = pubg;
        break;
      case "superjewels":
        campaignImage = superjewels;
        break;
      case "moleslayer":
        campaignImage = moleslayer;
        break;
    }
    return (
      <tr id={"row" + i + 1} className="data-row">
        <td>
          <div className="dark-text">
            {new Date(rowdata.createdOn).toDateString()}
          </div>
          {activeTab == "upcoming" && (
            <div className="campaign-status">{diffDaysRounded} days ahead</div>
          )}
          {activeTab == "past" && (
            <div className="campaign-status">{diffDaysRounded} days before</div>
          )}
          {activeTab == "live" && (
            <div className="campaign-status">Ongoing</div>
          )}
        </td>
        <td className="campaignColumn">
          <img className="rowCampaignIcon" src={campaignImage} />
          <div className="rowCampaignNameWrapper">
            <div className="rowCampaignName">{rowdata.name}</div>
            <div className="rowCampaignCountry">{rowdata.region}</div>
          </div>
        </td>
        <td onClick={() => handlePricingView(rowdata)} className="viewColumn">
          <div>
            <img className="icon" src={Price} />
            <span className="adjust-text">{localeString.viewPricing}</span>
          </div>
        </td>

        <td className="actionColumn">
          <div>
            <img className="icon" src={file} />
            <span className="adjust-text"> CSV</span>
          </div>
          <div>
            <img className="icon" src={stats} />
            <span className="adjust-text">{localeString.report}</span>
          </div>
          <div className="cursor">
            <img
              onClick={() => toggleDatePicker(rowdata.id)}
              className="icon"
              src={calendar}
            />
            <span className="adjust-text">{localeString.schedule}</span>
            {datePicker[rowdata.id] && (
              <DatePicker
                selected={new Date()}
                onChange={(date) => updateData(date, rowdata)}
                dateFormat="MMMM d, yyyy"
                popperPlacement="bottom-start"
                popperClassName="date-popup"
              />
            )}
          </div>
        </td>
      </tr>
    );
  });

  return data?.length ? (
    <div className="table-container">
      <table id="main-table">
        <tbody>
          <tr id="row0">
            <td id="cell0-0">{localeString.date}</td>
            <td id="cell0-1">{localeString.campaign}</td>
            <td id="cell0-2">{localeString.view}</td>
            <td id="cell0-3" style={{ width: "40%" }}>
              {localeString.actions}
            </td>
          </tr>
          {tableJSX}
        </tbody>
      </table>

      {isModalOpen &&
        ReactDom.createPortal(
          <Modal
            setModalOpen={setModalOpen}
            data={popUpData}
            locale={localeString}
          />,
          document.getElementById("portal")
        )}
    </div>
  ) : (
    <div className="emptyHeadline">{localeString.noData}</div>
  );
};

export default DashTable;
