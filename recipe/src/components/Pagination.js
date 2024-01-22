import React, { useState } from "react";

function Pagination(props) {
  // console.log(props.filtereddishes);
  // console.log(props);

  let [activepage, setactivepage] = useState(1);

  if (props.currentPage == 1) {
    activepage = 1;
  }

  let numberofpages = [];
  for (
    let i = 1;
    i < Math.ceil(props.filtereddishes.length / props.itemsPerPage) + 1;
    i++
  ) {
    numberofpages.push(i);
  }
  // console.log(numberofpages);

  let pages = numberofpages.map((item) => {
    return (
      <li
        id={item}
        onClick={(e) => {
          setactivepage(e.target.id);
          // console.log(item);
          props.setCurrentPage(item);
        }}
        className={`pagestyle ${item == activepage ? "active" : ""}`}
      >
        {item}
      </li>
    );
  });

  return (
    <section>
      <ul className="pagination flex">{pages}</ul>
    </section>
  );
}

export default Pagination;
