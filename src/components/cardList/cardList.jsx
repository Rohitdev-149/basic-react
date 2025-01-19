import React from 'react';
import { Link } from 'react-router-dom';

const CardList = ({ cards }) => {
  return (
    <div>
      {cards.map(card => (
        <div key={card.id}>
          <h2>{card.title}</h2>
          <p>{card.description}</p>
          <Link to={`/card/${card.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default CardList;
