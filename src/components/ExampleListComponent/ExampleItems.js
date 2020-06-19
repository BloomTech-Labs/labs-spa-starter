import React from "react";
import PropTypes from "prop-types";

const ExampleItems = (props) => (
  <div className="items-container">
    {
      props.data.map(item => (
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

export default ExampleItems;

ExampleItems.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      // Here we require an id of type number or string to prevent a "unique key prop" warning
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      title: PropTypes.string,
      url: PropTypes.string,
      thumbnailUrl: PropTypes.string,
    })
  ).isRequired,
};