import React from "react";

const Items = ({ items }) => (
  <div>
    {
      items.map(item => (
        <figure key={item.id}>
          <img src={item.img_url} alt={item.img_description} />
        </figure>
      ))
    }
  </div>
)

export default Items;