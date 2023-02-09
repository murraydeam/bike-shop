import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card
      className="my-3 p-3 rounded"
      style={{
        height: "350px",
      }}
    >
      <Link to={`./product/${product.id}`}>
        <Card.Img height={150} width={"150"} src={product.image} />
      </Link>
      <Card.Body className="mt-3 card-body">
        <Link to={`/product/${product.id}`}>
          <Card.Title as="div">
            <p>{product.name}</p>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my3">
            {product.rating} stars from {product.numReviews} reviews
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color={"#f8e825"}
            />
          </div>
        </Card.Text>

        <Card.Text as="h3">{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
