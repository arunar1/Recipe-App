import React, { useContext } from "react";
import { useEffect, useState } from "react";
import Hero from "./Hero";
import Special from "./Special";
import FilteredDishes from "./FilteredDishes";
import Header from "./Header";
import { AllMenu } from "./AllMenuContext";

export const cartContent=React.createContext();

export default function Menu() {
  const [cart,setcart]=useState([])

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


  console.log(cart)

  return (
    <div className="bg-color">
      <Header />
      <Hero />			
      <AllMenu>
       <cartContent.Provider value={{cart,setcart}}>
          <Special  />
          <FilteredDishes allmenucategories={catemenu} />
        </cartContent.Provider>  
      </AllMenu>
    </div>
  );
}
