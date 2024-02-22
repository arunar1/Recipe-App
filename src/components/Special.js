import React, { useContext, useState } from "react";

import PopUp from "./PopUp";
import Card from "./Card";
import { AllMenuContext } from "./AllMenuContext";

import { cartContent } from "./Menu";

import { AddToCart } from "./AddToCart";

export default function Special(props) {

  const {cart,setcart}=useContext(cartContent)

  console.log("hello",cart)


  const allmenus=useContext(AllMenuContext);

  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  // console.log(props.specialmenu)

  let maxdishes = 10;
  let specialmenu = allmenus.map((menuitem, index) => {
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
      <AddToCart cartitem={cart}/>
      <div className="container">
        
        <div className="special-content">
          <h1 className="headline">Our Special Dishes</h1>

          <p>
            Taj is the one of the famous hotel in india which in No.1 in food
            Quality and supply chain
          </p>
        </div>
        <div className="special-menu">
          <h1 className="headline">Special menu</h1>
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
