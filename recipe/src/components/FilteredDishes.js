import React, { useState } from 'react'
import Pagination from './Pagination'
import PopUp from './PopUp'
export default function FilteredDishes(props) {
 

console.log(props.allmenus)
  
  const [selectedItem,setSelectedItem]=useState()

  const [showPopUp,setShowPopUp]=useState(false)
  const [filtereddishes,setfiltereddishes]=useState([])
  const [activedish,setactivedish]=useState()
  const [currentPage,setCurrentPage]=useState(1)
  const [itemsPerPage,setItemsPerPage]=useState(4)
  const [flag,setflag]=useState(0)

  let indexOfLastdish=currentPage * itemsPerPage ;
  //1 * 4 = 4
  //2 * 4 = 8
  //3 * 4 = 12

  let indexOfFirstDish =indexOfLastdish - itemsPerPage

  //4  - 4 = 0
  //8  - 4 = 4
  //12 - 4 = 8

  let showThisDishesNow = filtereddishes.slice(indexOfFirstDish,indexOfLastdish);


  const showFilteredDishes=(category)=>{
    setactivedish(category)
    

  const popUpHandler=(item)=>{
    setSelectedItem(item)
    setShowPopUp(!showPopUp)
  }

  
  let filtereddish=props.allmenus.filter((item)=>{
      setCurrentPage(1)
      setflag(1)
      console.log(item)
      return item.strCategory===category
    }).map((item)=>{
      return(
        
        <li className='normal'>
         <a href='javaScript:;' onClick={()=>{popUpHandler(item)}}> <img className='size1' src={item.strMealThumb}/> </a>
          <h2>{item.strMeal}</h2>
        </li>
       
      )
    })
    setfiltereddishes(filtereddish)
    

  }
  const allcategories= props.allmenucategories.map((item)=>{
    return(
      <li  className={` categoryspecial ${item.strCategory===activedish?"active":""}`} onClick={()=>{showFilteredDishes(item.strCategory)}}>{item.strCategory}</li>
    )

  })

  console.log(filtereddishes)

 
  return (
    <div className="filtered-dishes">
      <div className="container">
        <h2>Choose your Dishes</h2>

      </div>
      <div>
        <ul className='flex listdec'>
            {allcategories}
        </ul>
      </div>
      <div className="filtered-dishes-list just" >
        <ul className='flex listdec just'>
          {filtereddishes.length >= 1 ? showThisDishesNow :<div><h2>{flag==0 ? "Select the Menu":"Nothing is Availble" }</h2></div>}
          

        </ul>
        {showPopUp && <PopUp setShowPopUp={setShowPopUp}  item={selectedItem}/>}
        <Pagination
          filtereddishes={filtereddishes}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Pagination>
      </div>
    </div>
  )
}
