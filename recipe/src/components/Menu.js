import React, { useContext } from "react";
import { useEffect, useState } from "react";
import Hero from "./Hero";
import Special from "./Special";
import FilteredDishes from "./FilteredDishes";
import Header from "./Header";
import { AllMenu } from "./AllMenuContext";

export default function Menu() {
  

 
  const [catemenu, setcatmenu] = useState([]);
  const categorydata = async () => {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let respose = await fetch(API_URL);

    let data = await respose.json();
    setcatmenu(data.categories);
  };
  useEffect(() => {
    categorydata();
  }, []);
  // let menuImages = menu.map((item) => {
  //   return (
  //     <div>
  //       <img src={item.strMealThumb} />
  //       <h2>{item.strCategory}</h2>
  //     </div>
  //   );
  // });

  return (
    <div className="bg-color">
      <Header />
      <Hero />
      <AllMenu>
        <Special />
        <FilteredDishes allmenucategories={catemenu} />
      </AllMenu>
    </div>
  );
}
