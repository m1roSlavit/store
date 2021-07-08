import React from "react";

const BookListItem = ({id, title, author, imgUrl, price, onAddedToCart}) => {
  return (
    <div className="card mr-3" style={{width: "18rem"}}>
      <img src={imgUrl} className="card-img-top" alt="card-photo" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{author}</p>
        <p className="card-text">{price}$</p>
        <button className="btn btn-primary" onClick={() => onAddedToCart(id)}>Add to card</button>
      </div>
    </div>
  );
}

export default BookListItem;