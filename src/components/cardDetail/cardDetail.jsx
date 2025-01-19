import React from 'react';
import { useParams, NavLink } from 'react-router-dom';

const CardDetail = ({ cards }) => {
  const { id } = useParams();
  const card = cards.find(card => card.id === id);

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div>
      <h1>{card.title}</h1>
      <img src={card.image} alt={card.title} style={{ width: '100%', height: 'auto' }} />
      <p>{card.subTitle}</p>
      <p>${card.price}</p>
      <p>{card.description}</p>
      <NavLink to="/">Back to Collection</NavLink>
    </div>
  );
};

export default CardDetail;
