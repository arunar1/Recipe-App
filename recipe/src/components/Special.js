import React, { useState } from "react";

import PopUp from "./PopUp";
import Card from "./Card";
export default function Special(props) {
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  // console.log(props.specialmenu)

  let maxdishes = 10;
  let specialmenu = props.specialmenu.map((menuitem, index) => {
    if (index < maxdishes) {
      return (
        <ul className="flex listdec">
          <Card
            item={menuitem}
            setShowPopUp={setShowPopUp}
            setSelectedItem={setSelectedItem}
          />
        </ul>
      );
    }
  });

  return (
    <section className="special">
      <div className="container">
        <div className="special-content">
          <h1>Our Special Dishes</h1>

          <p>
            Taj is the one of the famous hotel in india which in No.1 in food
            Quality and supply chain
          </p>
        </div>
        <div className="special-menu">
          <h2>Special menu</h2>
          <div className="img-size">{specialmenu}</div>
        </div>
        {showPopUp && (
          <PopUp
            setShowPopUp={setShowPopUp}
            item={selectedItem}
            showPopUp={showPopUp}
          />
        )}
      </div>
    </section>
  );
}
