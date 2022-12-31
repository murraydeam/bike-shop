import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = () => {
  const match = useParams();
  const product = products.find((p) => p.id == match.id);

  return <div>{product.name}</div>;
};

export default ProductScreen;