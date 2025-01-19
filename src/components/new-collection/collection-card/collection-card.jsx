import React, { useEffect } from "react";
import "./collection-card.css";
import { NavLink } from "react-router-dom";

function CollectionCard({ image, title, sub_title, price, onClick }) {
  return (
    <NavLink to="/card/:id">
      <div className="collecionCardMain" onClick={onClick}>
        <div
          className="collecionCardMain-img"
          style={{
            background: "url('" + image + "')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="collecionCardMain-title">{title}</div>
        <div className="collecionCardMain-subtitle">{sub_title}</div>
        <div className="collecionCardMain-price">${price}</div>
      </div>
    </NavLink>
  );
}

export default CollectionCard;