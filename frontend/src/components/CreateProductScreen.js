import React from "react";
import Loader from "./LoaderAndError/Loader";
import Message from "./LoaderAndError/Message";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorIcon from "@material-ui/icons/Error";
// import { makeStyles } from "@material-ui/core";
import { getCategoryItems } from "../actions/productActions";
import { Row, Col } from "react-bootstrap";
import Footer from "./Footer";
import { Form, Button } from "react-bootstrap";
import { createProduct } from "../actions/productActions";

const CreateProductScreen = ({ location, history }) => {
  //   const classes = useStyle();
  const [categoryItem, setCategoryItem] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [offer, setOffer] = useState(0);
  const [available, setAvailable] = useState(false);
  const [image, setImage] = useState("");
  // const [offer, setOffer] = useState("")

  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const getCategory = useSelector((state) => state.getCategory);
  const {
    loading: loadingCategory,
    error: errorCategory,
    category,
  } = getCategory;
  //   console.log(category)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryItems());
    if(image !== "")
    {
        // console.log(categoryItem, name, description, offer, available, image)
        dispatch(createProduct({ categoryItem, name, description, offer, available, image }))
    }
  }, [dispatch, image]);

  const submitHandler = (e) => {
    e.preventDefault();
    setImage(e.target.image.files[0])
  };
  return (
    <>
      <div className="container-fuild nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <h2>Create Product</h2>
            {loadingCategory ? (
              <Loader />
            ) : errorCategory ? (
              <Message messagetype="danger">
                <ErrorIcon />
                {errorCategory}
              </Message>
            ) : (
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="category">
                  <Form.Label>Category</Form.Label><br></br>
                  <div style = {{ width: "1000px", }}>
                  <select value = {categoryItem} onChange = {(e) => setCategoryItem(e.target.value)} required>
                      <option selected = "selected" >Choose Category</option>
                    {
                        category.map(categoryOne => (
                            <option key = {categoryOne.id} value={categoryOne.id}>{categoryOne.name}</option>
                        ))
                    }
                  </select>
                  </div>
                </Form.Group>
                <br></br>
                <Form.Group controlId="product name">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter product name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <br></br>

                <Form.Group>
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="file"
                    id="image"
                    name="image"
                    required
                  ></Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group controlId="offer">
                  <Form.Label>Offer</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter offer"
                    value={offer}
                    onChange={(e) => setOffer(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group controlId="availablle">
                  <Form.Check
                    type="checkbox"
                    label="Product Available"
                    onChange={(e) => setAvailable(e.target.checked)}
                  />
                </Form.Group>
                <br></br>
                <Button type="submit" variant="primary">
                  Create Product
                </Button>
              </Form>
            )}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProductScreen;
