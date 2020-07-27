import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RenderProfileListPage = props => (
  <div>
    <p>
      <Link to="/">Home</Link>
    </p>
    {props.data.map(item => (
      <figure key={item.id}>
        <img src={item.avatarUrl} alt={item.name} />
        <figcaption>
          <h3>{item.name}</h3>
        </figcaption>
      </figure>
    ))}
  </div>
);

export default RenderProfileListPage;

// Don't forget your prop types! It will save you a lot of debugging headache as you add more features.
RenderProfileListPage.propTypes = {
  data: PropTypes.arrayOf(
    // Here is an example of enforcing an object structure that we expect to receive in our props:
    PropTypes.shape({
      // Here we require an id of type number or string to prevent a "unique key prop" warning
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string,
      email: PropTypes.string,
      avatar: PropTypes.string,
    })
  ).isRequired,
};
