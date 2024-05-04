import React from 'react'

export default function Checkout(props) {

  const handleBuy=()=>{
    
  }


    console.log(props)
   const item= props.cart.map((item)=>{
        return(
            <div className='checkoutCard'>
            <img src={item.strMealThumb} />
            <h5>{item.strMeal}</h5>
            </div>
        )
    })
  return (
    <>
    <div className="checkout">
       {item}
    </div>
     <div className="checkoutbtn">
     <div className="buybtn" onClick={handleBuy}>
       Buy
     </div>
    </div>
    </>
  )
}
