import React from 'react';
import Tour from './Tour.jsx';
const Tours = ({tours, onRemove}) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} onRemove={onRemove} />
        })}
      </div>
    </section>
  )
};

export default Tours;