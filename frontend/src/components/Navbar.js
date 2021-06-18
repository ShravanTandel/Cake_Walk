import React from "react";
import { NavLink } from "react-router-dom";
// import {Link} from 'react-scroll'
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Navbar = () => {
  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 0,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 0px",
    },
  }))(Badge);

  return (
    <>
      <div className="container-fuild nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  <strong className="brand-name">Cake_Walk</strong>
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo02"
                  aria-controls="navbarTogglerDemo02"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarTogglerDemo02"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu-active"
                        className="nav-link"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu-active"
                        className="nav-link"
                        to="/menu"
                      >
                        Menu
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu-active"
                        className="nav-link"
                        to="/offers"
                      >
                        Offers
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu-active"
                        className="nav-link"
                        to="/contactus"
                      >
                        Contact Us
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu-active"
                        className="nav-link"
                        to="/cart"
                      >
                        <StyledBadge badgeContent={4} color="secondary">
                          <ShoppingCartIcon />
                        </StyledBadge>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
