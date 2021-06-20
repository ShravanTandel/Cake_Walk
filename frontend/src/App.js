import React from 'react'
import Home from './components/Home'
import Menu from './components/Menu'
import Offers from './components/Offers'
import Cart from './components/Cart'
import About from './components/About'
import Error from './components/Error'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import ProductScreen from './components/Products/ProductScreen'


const App = () => {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/menu" component={Menu}/>
      <Route exact path="/offers" component={Offers}/>
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contactus" component={ContactUs}/>
      <Route path="/products/:id" component={ProductScreen}/>
      <Route component={Error}/>
    </Switch>
    {/* <Footer /> */}
    </>
  )
}

export default App
