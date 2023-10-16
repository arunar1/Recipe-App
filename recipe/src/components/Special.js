import React from 'react'

export default function Special(props) {
    console.log(props.specialmenu)
    let specialmenu=props.specialmenu.map((menuitem)=>{
        return(
        <ul className='flex listdec'>
            <li>
                <img src={menuitem.strMealThumb}/>
                <h3>{menuitem.strCategory}</h3>
            </li>     
        </ul>
        )
    })




  return (
    <section className='special'>
        <div className="container">
            <div className="special-content">
            <h1>Heading</h1>
            <p>content....</p>
            </div>
            <div className="special-menu">
                <h2>Special menu</h2>
                <div className='img-size'>{specialmenu}</div>

            </div>
        </div>
    </section>
  )
}
