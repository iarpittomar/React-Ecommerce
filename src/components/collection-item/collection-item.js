import React from "react";
import "./collection-item.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <sapn className="price">{price}</sapn>
      </div>
    </div>
  );
};

export default CollectionItem;
