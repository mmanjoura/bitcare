import React from 'react';
import Aux from './../../../../../hoc/Aux/Aux';
import { Link } from 'react-router-dom'


const featuredProducts = (props) => {
    return(
        <Aux>
          {/* Product*/}
          <div className="grid-item">
            <div className="product-card">
              <div className="product-badge text-danger">
              {props.discount}% Off
              </div>
      
             
                <img src={props.image} alt="Product" />
           
              <h3 className="product-title">
              {props.name}</h3>
              <h4 className="product-price">
                <del>${props.price}</del>${props.price}
              </h4>
              <div className="product-buttons">
                <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart" /></button>
                <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
              </div>
            </div>
          </div>
        </Aux>
    );
}
export default featuredProducts;