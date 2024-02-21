import React, { useContext } from "react";
import { useEffect, useState } from "react";
import Hero from "./Hero";
import Special from "./Special";
import FilteredDishes from "./FilteredDishes";
import Header from "./Header";
import { AllMenu } from "./AllMenuContext";

export const cartContent=React.createContext();
export const cartArray=React.createContext();

export default function Menu() {
  const [cart,setcart]=useState([])

  console.log(cart);

  
 
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
       <cartArray.Provider value={cart}>
       <cartContent.Provider value={setcart}>
          <Special  />
        </cartContent.Provider>
       </cartArray.Provider>
        <FilteredDishes allmenucategories={catemenu} />
      </AllMenu>
    </div>
  );
}