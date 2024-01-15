import React from "react";
import { useEffect, useState } from "react";
import Hero from "./Hero";
import Special from "./Special";
import FilteredDishes from "./FilteredDishes";
import Header from "./Header";

export const AllMenuContext=React.createContext()

export default function Menu() {
  const [menu, setmenu] = useState([]);

  const [loading, setloading] = useState(true);
  const [catemenu, setcatmenu] = useState([]);
  const fetchdata = async () => {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    let response = await fetch(API_URL);
    let data = await response.json();
    setmenu(data.meals);
    setloading(false);
    //  console.log(menu)
  };

  const categorydata = async () => {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let respose = await fetch(API_URL);

    let data = await respose.json();
    setcatmenu(data.categories);
  };
  useEffect(() => {
    fetchdata();
    categorydata();
  }, []);
  console.log(menu);
  let menuImages = menu.map((item) => {
    return (
      <div>
        <img src={item.strMealThumb} />
        <h2>{item.strCategory}</h2>
      </div>
    );
  });

  return (
    <div className="bg-color">
      <AllMenuContext.Provider value={menu}>
      <Header />
      <Hero />
      {!loading ? (
        <Special />
      ) : (
        <div>
          <h2>LOADING</h2>
        </div>
      )}
      {!loading ? (
        <FilteredDishes allmenucategories={catemenu} allmenus={menu} />
      ) : null}
      </AllMenuContext.Provider>
    </div>
  );
}
