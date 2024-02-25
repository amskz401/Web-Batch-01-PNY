import React from "react";

export default function Item( {item} ) {
  return (
    <div className="col-md-3">
      <div className="card">
        <img src={`${item.thumbnail}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <a href="" className="btn btn-primary">
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
}
