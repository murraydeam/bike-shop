import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import Rating from "../components/Rating";

const ProductScreen = ({ match }) => {
  const item = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get(`/api/products/${item.id}`);
      setProduct(data);
    }

    fetchProduct();
  }, []);

  return (
    <div className="productScreenContainer">
      <Link to={"/"} className="btn btn-dark my-3">
        Back
      </Link>
      <Row>
        <Col md={4}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={5}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews}`}
                color={"#f8e825"}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>{product.price}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>
                <strong>Description : </strong>
                {product.descriptionLong}
              </p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>{product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item display='flex'>
              <Button
                className="btn-block"
                disabled={product.countInStock == 0}
                type="button"
                
              >
                Add to Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
