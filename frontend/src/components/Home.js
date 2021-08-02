import React from "react";
import { NavLink } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import web from "../images/Cake_image 1.png";
import web from "../images/Nice_Image.png";
import Footer from "./Footer";
// import Menu from './Menu'

const Home = () => {
  return (
    <>
      <section id="header" className="">
        <div className="container-fuild nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 col-10 order-1 order-lg-2 header-img">
                    <img
                        src={web}
                        className="img-fuild animated"
                        alt="home img"
                        
                    />
                    </div>
                    <div className="col-md-6 col-10 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1 className="small">Wanna suprise your <strong className="brand-name">friends and family</strong> on their birthday then why wait</h1>

                    <div className="mt-3">
                        <NavLink to="/menu" className="btn-get-started">
                        <button type="button" className="btn btn-outline-warning">Order Now</button>
                        </NavLink>
                    </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
