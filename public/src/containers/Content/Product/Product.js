import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Image from 'react-image-resizer';

class Product extends Component {
    render(){
      console.log("this is another propL", this.props.mainImage)
        return(
       
            <div className="product-preview-wrapper">
            <div className="product-preview">
              <div className="product-preview__image">
   
              <Link to="/product">
                <Image src={this.props.mainImage}  
                width={240}
                height={240} 
                data-lazy={this.props.mainImage} 
                onClick={this.props.clicked} />
              </Link></div>
              <div className="product-preview__info text-center">
                <div className="product-preview__info__btns"><a href="#" className="btn btn--round ajax-to-cart"><span className="icon-ecommerce" /></a> 
                <a href="quick-view.html" className="btn btn--round btn--dark btn-quickview" data-toggle="modal" data-target="#quickView"><span className="icon icon-eye" /></a></div>
                <div className="product-preview__info__title">
                  <h2><a href="#">{this.props.name}</a></h2>
                </div>
                <div className="rating"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /></div>
                <div className="price-box">${this.props.price}</div>
                <div className="product-preview__info__description">
                  <p>Nulla at mauris leo. Donec quis ex elementum, tincidunt elit quis, cursus tortor. Sed sollicitudin enim metus, ut hendrerit orci dignissim venenatis.</p>
                  <p>Suspendisse consectetur odio diam, ut consequat quam aliquet at.</p>
                </div>
                <div className="product-preview__info__link"><a href="#" className="compare-link"><span className="icon icon-bars" /><span className="product-preview__info__link__text">Add to compare</span></a> <a href="#" className="ajax-to-wishlist"><span className="icon icon-favorite" /><span className="product-preview__info__link__text">Add to wishlist</span></a>
                <a href="#" className="btn btn--wd buy-link"><span className="icon icon-ecommerce" /><span className="product-preview__info__link__text">Add to cart</span></a></div>
              </div>
            </div>
          </div>
       
        );
    }
}

export default Product;