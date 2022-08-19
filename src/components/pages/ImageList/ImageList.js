import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageList = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get('https://api.unsplash.com/search/photos', {
        params: { query: 'rainbow trout' },
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
        },
      })
      .then(res => setImages(res.data.results))
      .catch(err => setError(true));
  }, [images]);

  if (error) {
    return <div>"Error Fetching Data"</div>;
  } else {
    return images.map(image => {
      return (
        <div key={image.id}>
          <div>{image.description}</div>
          <img src={image.urls.thumb} alt={image.alt_description} />
        </div>
      );
    });
  }
};

export default ImageList;
