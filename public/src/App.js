import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

import Content from './containers/Content/Content';
import Search from './components/Search/Search';
import Compare from './components/Compare/Compare';
import AddToCart from './components/AddToCart/AddToCart';
import AddToWishList from './components/AddToWishList/AddToWishList';
import ProductView from './containers/ProductView/ProductView'

import Create from './containers/Account/Create/Create';
import ShoppingCart from './containers/ShoppingCart/ShoppingCart';
import WishList from './containers/WishList/WishList';
import Login from './containers/Login/Login';
import Checkout from './containers/Checkout/Checkout';
import Order from './containers/Account/Order/Order';
import Address from './containers/Account/Address/Address';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';

import Aux from './hoc/Aux/Aux';

import MainSlider from './components/UI/OffCanvas/MainSlider/MainSlider';

import Home from './containers/Home/Home';
import ProductWidgets from './components/UI/OffCanvas/ProductWidgets/ProductWidgets';
import PopularBrands from './components/UI/OffCanvas/PopularBrands/PopularBrands';



class App extends Component {
  state = {
    ingredients: null,
    price: 0
}
  render() {
    return (
       /* 
       
          <Switch>
            <Route path="/register" component= {Create} />
            <Route path="/product" component={ProductView} />
            <Route path="/shoppingcart" component={ShoppingCart} />
            <Route path="/wishlist" component={WishList} />
            <Route path="/login" component={Login} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/accountorder" component={Order} />
            <Route path="/accountaddress" component={Address} />
            <Route path="/about" component={About} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/" component= {Content} />
          </Switch>
          <Compare />
          <AddToCart />
          <AddToWishList />
          <Search />
        */
    <Aux>
      <Layout>
      
        {/* Page Content*/}
        {/* Main Slider*/}
          <MainSlider />
        {/* Top Categories*/}
        {/* Featured Products Carousel*/}
          <Home  />
        {/* Product Widgets*/}
         <ProductWidgets />
        {/* Popular Brands*/}
          <PopularBrands />
      </Layout>
    </Aux>


    );
  }
}

export default App;
