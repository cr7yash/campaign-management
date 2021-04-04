import React from "react";
import "./Modal.css";

import mancalamix from "../../Images/mancalamix.png";
import pubg from "../../Images/pubg.png";
import superjewels from "../../Images/superjewels.png";
import moleslayer from "../../Images/moleslayer.png";

const Modal = ({ data, setModalOpen, locale }) => {
  const {
    name,
    region,
    monthlyPrice,
    HalfYearlyPrice,
    yearlyPrice,
    popUpIcon,
  } = data;

  let popUpImage;

  switch (popUpIcon) {
    case "mancalamix":
      popUpImage = mancalamix;
      break;
    case "pubg":
      popUpImage = pubg;
      break;
    case "superjewels":
      popUpImage = superjewels;
      break;
    case "moleslayer":
      popUpImage = moleslayer;
      break;
  }
  return (
    <>
      <div className="popUp_Overlay">
        <div className="popUp_Container">
          <div className="popUp_Inner">
            <div className="popUp_upper">
              <img className="popUp_icon" src={popUpImage} />

              <div className="popUp_headingcontainer">
                <div className="popUp_name">{name}</div>
                <div className="popUp_country">{region}</div>
              </div>
            </div>
            <div className="popUp_priceHeading">{locale.pricing}</div>
            <div className="popUp_pricing">
              <div className="popUp_pricingRow">
                <div className="popUp_priceText">{locale.monthlyText}</div>
                <div className="popUp_pricingvalue">$ {monthlyPrice}</div>
              </div>
              <div className="popUp_pricingRow">
                <div className="popUp_priceText">{locale.halfYearlyText}</div>
                <div className="popUp_pricingvalue">$ {HalfYearlyPrice}</div>
              </div>
              <div className="popUp_pricingRow">
                <div className="popUp_priceText">{locale.yearlyText}</div>
                <div className="popUp_pricingvalue">$ {yearlyPrice}</div>
              </div>
            </div>
            <div className="popUp_button">
              <div
                onClick={() => setModalOpen(false)}
                className="popUp_closebutton"
              >
                {locale.close}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
