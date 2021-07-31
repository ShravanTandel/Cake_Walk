import React from 'react'
import Home from './components/Home'
import Menu from './components/Menu'
import Offers from './components/Offers'
import Cart from './components/Cart'
import About from './components/About'
import Error from './components/Error'
import Navbar1 from './components/Navbar1'
import { Switch, Route } from 'react-router'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import ProductScreen from './components/Products/ProductScreen'
import { ToastContainer } from 'react-toastify'
import ScrollToTop from './components/ScrollToTop'
import LoginScreen from './components/forms/LoginScreen'


const App = () => {
  return (
    <>
    <Navbar1 />
    <ScrollToTop />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/menu" component={Menu}/>
      <Route exact path="/offers" component={Offers}/>
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contactus" component={ContactUs}/>
      <Route exact path="/login" component={LoginScreen}/>
      <Route path="/menu/products/:id" component={ProductScreen}/>
      <Route component={Error}/>
    </Switch>
    <ToastContainer />
    <Footer />
    </>
  )
}

export default App
