import React from 'react'

function Pagination(props) {
  console.log(props.filtereddishes)

  let numberofpages=[];
  for(let i=1;i<props.filtereddishes.length;i++){
    numberofpages.push(i)
  }
  console.log(numberofpages)

  let pages=numberofpages.map((item)=>{
    return <li className='pagestyle'>{item}</li>
  })

  return (
    <section>
      <ul className='pagination flex'>
        {pages}
      </ul>
    </section>
  )
}

export default Pagination