import React,{useState,useEffect} from 'react'


export const AllMenuContext=React.createContext();
export const AllMenu=(props)=>{
    const [menu, setmenu] = useState([]);
    const [loading, setloading] = useState(true); 

    const fetchdata = async () => {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    let response = await fetch(API_URL);
    let data = await response.json();
    setmenu(data.meals);
    setloading(false);
    //  console.log(menu)
  };
  useEffect(() => {
    fetchdata();
  }, []);


    return(
        <AllMenuContext.Provider value={menu}>
             {!loading ? (
            props.children
      ) : (
        <div className='load'>
          <h2>LOADING...</h2>
        </div>
      )}
            
        </AllMenuContext.Provider>
    )
}
