import React, { useState } from 'react';

const Tour = ({id, image, duration, title, price, description, onRemove}) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <article className="single-tour">
      <img src={image} alt={title} />
      <footer>
        <div className="tour-info">
          <h4>{title}</h4>
          <h4 className="tour-price">₹{price}</h4>
        </div>
        <p>⚪ {duration}</p>
        <p>
          {readMore ? description : `${description.substring(0, 150)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => onRemove(id)}>not interested</button>
      </footer>
    </article>
  )
};

export default Tour;