import React, { useEffect } from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const Navbar1 = ({history}) => {
  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 0,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 0px",
    },
  }))(Badge);

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch();

//   useEffect(() => {
//     if(userInfo){
//         history.push("/")
//     }
// }, [userInfo])

  const logoutHandler = () => {
    dispatch(logout())
  }

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
                <LinkContainer to="/contactus">
                  <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
                {
                   userInfo ? (
                    <LinkContainer to='/userorder'>
                                        <Nav.Link>My Orders</Nav.Link>
                                    </LinkContainer>
                   ):""
                }

                {userInfo ? (
                                <NavDropdown title="Profile" id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>User Details</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                </NavDropdown>
                            ) : (
                                    <LinkContainer to='/login'>
                                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                                    </LinkContainer>
                                )}
                {userInfo && userInfo.isAdmin ? (
                                <NavDropdown title="Admin" id='username'>
                                    <LinkContainer to='/admin/users/'>
                                        <NavDropdown.Item>User Details</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/products/'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/orderList/'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>

                                </NavDropdown>
                            ) : ""}
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <StyledBadge badgeContent={ cartItems.length } color="secondary">
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
