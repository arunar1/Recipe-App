import React from "react";

function Card(props) {
  const popUpHandler = (item) => {
    props.setSelectedItem(item);
    props.setShowPopUp(!props.showPopUp);
  };
  return (
    <li>
      <div className="Cardstyle">
        <a
          onClick={() => {
            popUpHandler(props.item);
          }}
        >
          {" "}
          <img className="border-radius-5" src={props.item.strMealThumb} />
        </a>
        <p className="automar">{props.item.strMeal}</p>
      </div>
    </li>
  );
}

export default Card;
