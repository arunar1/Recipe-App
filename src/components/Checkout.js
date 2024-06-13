import React from 'react'
import Counter from './Counter'
export default function Checkout(props) {

  const handleBuy=()=>{
    
  }


    console.log(props)
   const item= props.cart.map((item)=>{
        return(
            <div className='checkoutCard'>
            <img src={item.strMealThumb} />
            <h5>{item.strMeal}</h5>
            <Counter/>
            </div>
        )
    })
  return (
    <>
    <div className="checkout">
       {item}
    </div>
     <div className="checkoutbtn">

     {props.cart.length > 0 ? <div className="buybtn" onClick={handleBuy}>
       Buy
     </div> : <h1 className='empty-head'>Cart is empty</h1>}
    </div>


    </>
  )
}
