import React from 'react'

function Pagination(props) {
  console.log(props.filtereddishes)

  let numberofpages=[];
  for(let i=1;i<props.filtereddishes.length;i++){
    numberofpages.push(i)
  }
  console.log(numberofpages)

  return (
    <div>Pagination</div>
  )
}

export default Pagination