import React from "react";
import { useParams } from "react-router";
import Rating from "./Rating";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  listProductDetails,
  listProductPricings,
} from "../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../LoaderAndError/Loader";
import Message from "../LoaderAndError/Message";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../../actions/cartActions";
import ErrorIcon from "@material-ui/icons/Error";

const ProductScreen = ({ match }) => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const productPricings = useSelector((state) => state.productPricings);
  const { error, loading, product } = productDetails;
  const { error1, loading1, pricing } = productPricings;
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(0);
  const [ pricingObject1, setPricingObject1 ] = useState({});
  const quantity = [1, 2, 3, 4, 5];
  const [ qty, setQty ] = useState(0);

  const sizeChange = (e) => {
    setSize(e.target.value);
    const pricingObject = pricing.find((pricingO) => {
      return pricingO.size === e.target.value;
    });
    setPricingObject1(pricingObject);
    setPrice(pricingObject.price);
    setQty(0)
  };

  const quantityChange = (e) => {
    setQty(e.target.value);
    setPrice(pricingObject1.price * (e.target.value))
  }
  useEffect(() => {
    dispatch(listProductDetails(id));
    dispatch(listProductPricings(id));
  }, [dispatch, id]);

  const addToCartHalder = () => {
    dispatch(addToCart(pricingObject1.product, size, price, qty));
    history.push("/cart");
    toast.success(`Added to the Cart, Go to Menu section to order more`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <div className="container-fuild">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div
              onClick={() => {
                history.goBack();
              }}
              className="btn btn-light buttonsize"
            >
              {/* <ArrowBackIosIcon />Go Back */}
              Go Back
            </div>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message messagetype="danger">
                <ErrorIcon />
                {error}
              </Message>
            ) : (
              <div className="row screen">
                <div className="col-md-6 col-10 pt-5 pt-lg-0 order-2 order-lg-1 text-center productscreen-img">
                  <img src={product.image} alt="....." />
                  <div className="my-3">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <strong>Description: </strong>
                        <p>{product.description}</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-10 pt-5 pt-lg-0 order-2 order-lg-1 productscreen-img">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <h3>{product.name}</h3>
                    </li>
                    <li className="list-group-item">
                      <Rating rating={product.rating} />
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-sm-6">
                          <h5>
                            <strong>Price:</strong>
                          </h5>
                        </div>
                        <div className="col-sm-6">
                          {price === 0 ? (
                            <h5>Choose quantity to know price</h5>
                          ) : (
                            price
                          )}
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-md-6">
                          <h5>
                            <strong>Size: </strong>
                          </h5>
                        </div>
                        <div className="col-md-6">
                          <select
                            className="form-select"
                            value={size}
                            onChange={sizeChange}
                          >
                            <option></option>
                            {pricing.map((x) => (
                              <option key={x.id} value={x.size}>
                                {x.size} kg
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-md-6">
                          <h5>
                            <strong>Quantity: </strong>
                          </h5>
                        </div>
                        <div className="col-md-6">
                          <select
                            className="form-select"
                            value={qty}
                            onChange={quantityChange}
                          >
                            <option></option>
                            {quantity.map((x) => (
                              <option key={x} value={x}>
                                {x}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <button
                        onClick={addToCartHalder}
                        disabled={price === 0 || qty === 0}
                        className="btn btn-dark"
                      >
                        Add to Cart
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
