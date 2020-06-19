import React from "react";

const Items = (props) => (
  <div className="items-container">
    {
      props.items.map(item => (
        <figure key={item.id}>
          <img src={item.thumbnailUrl} alt={item.title} />
          <figcaption>
            <h3>{item.title}</h3>
          </figcaption>
        </figure>
      ))
    }
  </div>
)

export default Items;