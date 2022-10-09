import React from "react";
import "./category.style.scss";

export default function Category({ category }) {
  const { imageUrl, title } = category;
  return (
    <div className="categories-containert">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-container">
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
}
