import React from "react";
import { useParams } from "react-router";
import Rating from "./Rating";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductScreen = ({match}) => {
  const { id } = useParams();
  const [product, setProduct] = useState([])

  useEffect(() => {
    async function getProductDate(){
      const { data } = await axios.get(`http://127.0.0.1:8000/api/products/${id}`)
      setProduct(data)
    }
    getProductDate()
  },[])

  return (
    <>
      <div className="container-fuild">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="row screen">
              <div className="col-md-6 col-10 pt-5 pt-lg-0 order-2 order-lg-1 text-center productscreen-img">

                <img src={product.imageurl} alt="....." />
                <h5 className="my-3">{product.name}</h5> <br />
                        <Rating rating={product.rating} />
              </div>
              <div className="col-md-6 col-10 pt-5 pt-lg-0 order-2 order-lg-1 productscreen-img">
                <ul className="list-group">
                  <li className="list-group-item">
                    <h3>{product.name}</h3>
                  </li>
                  <li className="list-group-item">
                    <Rating rating={product.rating} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
