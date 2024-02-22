

export const AddToCart=(props)=>{
    console.log("hello",props.cartitem)
    let item=props.cartitem.map((element)=>{
       return(
        <div className="add-to-cart-item">
             <img src={element.strMealThumb} alt="item" />
             <h6>{element.strMeal}</h6>
        </div>
       )
    })
    return(
       <div className="add-to-cart-wrapper">
                {item} 
       </div>
    )
}