import React from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navbar1 = () => {
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
      <div className="row">
        <div className="col-10 mx-auto">
          <Navbar expand="lg" collapseOnSelect>
            <LinkContainer to="/">
              <Navbar.Brand>
                <strong className="brand-name">Cake_Walk</strong>
              </Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to="/about">
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/menu">
                  <Nav.Link>Menu</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/offers">
                  <Nav.Link>Offers</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contactus">
                  <Nav.Link>Contact Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <StyledBadge badgeContent={4} color="secondary">
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default Navbar1;
