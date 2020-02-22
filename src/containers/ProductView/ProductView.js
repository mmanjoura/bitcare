import React, {Component} from 'react'
import { connect } from 'react-redux';

import * as actions from '../../store/actions/productView';
import Aux from './../../hoc/Aux/Aux';
import Gallery from './Gallery/Gallery';
import Details from './Details/Details';
import PageTitle from './../../components/UI/OffCanvas/PageTitle/PageTitle';
import Reviews from './../../containers/ProductView/Reviews/Reviews'
import axios from './../../axios-instance';
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';
import * as Globals from './../../hoc/Utils/Globals';


class ProductView extends Component {

    componentDidMount () {
        this.props.onFetchProduct(this.props.match.params.id);
    }

    render(){
   
            if (this.props.product) {
                console.log("this.State.products: ...", this.props.product.images)
                const imagesGallery = this.props.product.images.map(
                    (image, index) => {
                        return (
                            <div className="gallery-item" data-hash={index} key={index}>
                                <a href={Globals.BASE_URL + image} data-size="1000x667">
                                <img src={Globals.BASE_URL + image} alt="Product" /></a>
                            </div>
                        );
                    }
                );

                const imagesThumbs = this.props.product.images.map(
                    (image, index) => { 
                        return (
                            <li className={ index ? 0 : "active"  }  key={index}>
                            <a href={"#" + index}><img src={Globals.BASE_URL + image} alt="Product" /></a>
                            </li>
                            
                        );
                    }
                );
          
                return (

                    <Aux>
                    <PageTitle title="single product"/>
                    <div className="container padding-bottom-3x mb-1">
                        <div className="row">
                            <Gallery>
                            <div className="product-carousel owl-carousel gallery-wrapper">
                            {imagesGallery}
                            </div>
                            <ul className="product-thumbnails">
                            {imagesThumbs}
                            </ul>
                            
                            </Gallery>
                            <Details sizeVariations={this.props.product.size_variations} colorVariations={this.props.product.color_variations} name={this.props.product.name} description={this.props.product.description} price={this.props.product.price} code={this.props.product.code}/>
                        </div>
                        <Reviews />
                        {/* Related Products Carousel*/}
                        <h3 className="text-center padding-top-2x mt-2 padding-bottom-1x">You May Also Like</h3>
                        {/* Carousel*/}
                        <div className="owl-carousel" data-owl-carousel="{ &quot;nav&quot;: false, &quot;dots&quot;: true, &quot;margin&quot;: 30, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;576&quot;:{&quot;items&quot;:2},&quot;768&quot;:{&quot;items&quot;:3},&quot;991&quot;:{&quot;items&quot;:4},&quot;1200&quot;:{&quot;items&quot;:4}} }">
                    {/* Product*/}
                    <div className="grid-item">
                        <div className="product-card">
                        <div className="product-badge text-danger">22% Off</div><a className="product-thumb" href="shop-single.html">
                        <img src="img/shop/products/09.jpg" alt="Product" /></a>
                        <h3 className="product-title"><a href="shop-single.html">Rocket Dog</a></h3>
                        <h4 className="product-price">
                            <del>$44.95</del>$34.99
                        </h4>
                        <div className="product-buttons">
                            <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart" /></button>
                            <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
                        </div>
                        </div>
                    </div>
                    {/* Product*/}
                    <div className="grid-item">
                        <div className="product-card">
                        <div className="rating-stars"><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star" />
                        </div><a className="product-thumb" href="shop-single.html"><img src="img/shop/products/03.jpg" alt="Product" /></a>
                        <h3 className="product-title"><a href="shop-single.html">Oakley Kickback</a></h3>
                        <h4 className="product-price">$155.00</h4>
                        <div className="product-buttons">
                            <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart" /></button>
                            <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
                        </div>
                        </div>
                    </div>
                    {/* Product*/}
                    <div className="grid-item">
                        <div className="product-card"><a className="product-thumb" href="shop-single.html"><img src="img/shop/products/12.jpg" alt="Product" /></a>
                        <h3 className="product-title"><a href="shop-single.html">Vented Straw Fedora</a></h3>
                        <h4 className="product-price">$49.50</h4>
                        <div className="product-buttons">
                            <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart" /></button>
                            <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
                        </div>
                        </div>
                    </div>
                    {/* Product*/}
                    <div className="grid-item">
                        <div className="product-card">
                        <div className="rating-stars"><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" />
                        </div><a className="product-thumb" href="shop-single.html"><img src="img/shop/products/11.jpg" alt="Product" /></a>
                        <h3 className="product-title"><a href="shop-single.html">Top-Sider Fathom</a></h3>
                        <h4 className="product-price">$90.00</h4>
                        <div className="product-buttons">
                            <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart" /></button>
                            <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
                        </div>
                        </div>
                    </div>
                    {/* Product*/}
                    <div className="grid-item">
                        <div className="product-card"><a className="product-thumb" href="shop-single.html"><img src="img/shop/products/04.jpg" alt="Product" /></a>
                        <h3 className="product-title"><a href="shop-single.html">Waist Leather Belt</a></h3>
                        <h4 className="product-price">$47.00</h4>
                        <div className="product-buttons">
                            <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart" /></button>
                            <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
                        </div>
                        </div>
                    </div>
                    {/* Product*/}
                    <div className="grid-item">
                        <div className="product-card">
                        <div className="product-badge text-danger">50% Off</div><a className="product-thumb" href="shop-single.html"><img src="img/shop/products/01.jpg" alt="Product" /></a>
                        <h3 className="product-title"><a href="shop-single.html">Unionbay Park</a></h3>
                        <h4 className="product-price">
                            <del>$99.99</del>$49.99
                        </h4>
                        <div className="product-buttons">
                            <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart" /></button>
                            <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </Aux>
               
                );
            }else{
                return <p>loading </p>
            }
           
    
        }

    

    
}

const mapStateToProps = state => {
    console.log("state.ProductViewData.product", state)

    return {
     
        product: state.productViewData.product,
        loading: state.productViewData.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchProduct: (productId) => dispatch( actions.fetchProduct(productId) )
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (withErrorHandler(ProductView, axios));