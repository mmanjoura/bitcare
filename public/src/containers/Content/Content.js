import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Slider from '../../components/Slider/Slider';
import CategoryList from './../Content/CategoryList/CategoryList'
import axios from './../../axios-instance'
import Product from './Product/Product';




class Content extends Component {
  state = {
    products: [],
    productImages:[],
    promiseIsResolved: false,
    err: null,
    selectedProductId: null,
    src: ''
}


componentDidMount () {
    axios.get('contents?type=Product')
        .then(response => {
            this.setState({products: response.data.data}, () => {
              this.setState({promiseIsResolved: true});
            });
        })
        .catch(error => {
          this.setState({error: true});
      });
}
productClickedHandler = (id) => {
  this.setState({
    selectedProductId: id
  });
}



render(){
      
      const categoryList = this.state.products.map(
        category => {
            return <CategoryList 
                    key={category.id} 
                    name={category.name} 
                    //image={category.ColorVariations[0].Images} 
                    />
        }
    );
    if(!this.state.promiseIsResolved)
    {
      return null
    }
    else{
      const productList = this.state.products.map(
        (product, index) => {
          console.log("index: ", index);
            return <Product 
                    key={product.id} 
                    price={product.price} 
                    name={product.name} 
                    thumbImage={"http://localhost:8080/" + product.image[0]}
                    mainImage={"http://localhost:8080/" + product.image[0]}
                    zoomImage={"http://localhost:8080/" + product.image[0]}
                    
                    clicked={() => this.productClickedHandler(product.id)}
                    id={this.state.selectedProductId}
                    />
        }
      );
      
      console.log("Product List is empty", productList);
   
      return(
        <Aux>
        <Slider />
        <section className="content">
        <div className="container">
          <div className="row hide-outer-animation">
            <div className="col-md-7 col-lg-8">
              <div className="text-center">
                <div className="banner banner--image hover-squared animation" data-animation="fadeInLeft" data-animation-delay="0s" onclick="location.href='#';"> <img src="images/banner-01-new.jpg"  className="img-responsive" />
                  <div className="banner--image__text banner--image__text--left banner--image__text--light text-center">
                    <h5>Get Contemporary</h5>
                    <h3 id="responsive_headline"><strong>The High Her</strong></h3>
                    <h6>Frame your face and shoulders
                      with the silhouette of season<br />
                      <strong>Up to 65% OFF</strong></h6>
                  </div>
                  <div className="product-category__hover caption" />
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="banner banner--icon hover-squared animation" data-animation="fadeInRight" data-animation-delay="0s" onclick="location.href='#';">
                <div className="banner--icon__icon"> <span className="icon icon-sales" /> </div>
                <div className="banner--icon__text text-center">
                  <h4 className="text-uppercase">TOTAL SALE</h4>
                  <div className="banner--icon__text__divider" />
                  <div className="text-uppercase">UP TO 70% OFF YOUR FAVOURITE BRANDS</div>
                </div>
                <div className="product-category__hover caption" />
              </div>
              <div className="banner banner--icon banner--last banner--light hover-squared animation" data-animation="fadeInRight" data-animation-delay="0s" onclick="location.href='#';">
                <div className="banner--icon__icon"> <span className="icon icon-box" /> </div>
                <div className="banner--icon__text text-center">
                  <h4 className="text-uppercase">Gift CERTIFICATES</h4>
                  <div className="banner--icon__text__divider" />
                  <div className="text-uppercase">Gift certificates are the simplest, speediest way to send something special! </div>
                </div>
                <div className="product-category__hover caption" />
              </div>
            </div>
          </div>
        </div>
      </section>    
      <section className="content">
        <div className="container"> 
          {/* Modal */}
          <div className="modal quick-view zoom" id="quickView" style={{opacity: 1}}>
            <div className="modal-dialog">
              <div id="modalLoader-wrapper"><div id="modalLoader" /></div>
              <div className="modal-content">
              </div>
            </div>
          </div>
          {/* /.modal */}
          <h2 className="text-center text-uppercase">Featured Products</h2>
          <div className="row product-carousel mobile-special-arrows animated-arrows product-grid four-in-row">
          {productList}
           
          </div>
        </div>
      </section>
      <section className="content content--fill">
        <div className="container">
          <h2 className="text-center text-uppercase">products categories</h2>
          <div className="product-category-carousel mobile-special-arrows animated-arrows slick">
            {categoryList}
          </div>
        </div>
      </section>
      <section className="content content--parallax top-null" data-image="images/parallax-bg.jpg">
        <div className="container">
          <div className="blog-widget">
            <h2 className="blog-widget__title text-uppercase">From The Blog</h2>
            <div className="blog-carousel mobile-special-arrows  animated-arrows">
              <div className="blog-widget__item">
                <div className="blog-widget__item__image-cell pull-left"><img src="images/blog-author-img-01.jpg"  /></div>
                <div className="blog-widget__item__offset-text pull-right">
                  <h3 className="blog-widget__item__offset-text__title text-uppercase">uismod, turpis sollicitudin lobortis </h3>
                  <div className="blog-widget__item__offset-text__date"><span>Friday, 29 May 2015</span></div>
                  <div className="blog-widget__item__offset-text__teaser">
                    <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>
                  <a href="#" className="btn btn--wd">READ MORE</a> </div>
              </div>
              <div className="blog-widget__item">
                <div className="blog-widget__item__image-cell pull-left"><img src="images/blog-author-img-01.jpg"  /></div>
                <div className="blog-widget__item__offset-text pull-right">
                  <h3 className="blog-widget__item__offset-text__title text-uppercase">nostrud exercitation ullamco</h3>
                  <div className="blog-widget__item__offset-text__date"><span>Friday, 29 May 2015</span></div>
                  <div className="blog-widget__item__offset-text__teaser">
                    <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>
                  <a href="#" className="btn btn--wd">READ MORE</a> </div>
              </div>
              <div className="blog-widget__item">
                <div className="blog-widget__item__image-cell pull-left"><img src="images/blog-author-img-01.jpg"  /></div>
                <div className="blog-widget__item__offset-text pull-right">
                  <h3 className="blog-widget__item__offset-text__title text-uppercase">tempor incididunt ut labore</h3>
                  <div className="blog-widget__item__offset-text__date"><span>Friday, 29 May 2015</span></div>
                  <div className="blog-widget__item__offset-text__teaser">
                    <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>
                  <a href="#" className="btn btn--wd">READ MORE</a> </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content content--fill top-null">
        <div className="container">
          <h2 className="text-center text-uppercase">products brands</h2>
          <div className="brands brands-carousel animated-arrows mobile-special-arrows">
            <div className="brands__item"><a href="#"><img src="images/brand-empty.png" data-lazy="images/brand-01.png"  /></a></div>
            <div className="brands__item"><a href="#"><img src="images/brand-empty.png" data-lazy="images/brand-02.png"  /></a></div>
            <div className="brands__item"><a href="#"><img src="images/brand-empty.png" data-lazy="images/brand-03.png"  /></a></div>
            <div className="brands__item"><a href="#"><img src="images/brand-empty.png" data-lazy="images/brand-04.png"  /></a></div>
            <div className="brands__item"><a href="#"><img src="images/brand-empty.png" data-lazy="images/brand-05.png"  /></a></div>
            <div className="brands__item"><a href="#"><img src="images/brand-empty.png" data-lazy="images/brand-06.png"  /></a></div>
            <div className="brands__item"><a href="#"><img src="images/brand-empty.png" data-lazy="images/brand-07.png"  /></a></div>
            <div className="brands__item"><a href="#"><img src="images/brand-empty.png" data-lazy="images/brand-01.png"  /></a></div>
            <div className="brands__item"><a href="#"><img src="images/brand-empty.png" data-lazy="images/brand-02.png"  /></a></div>
            <div className="brands__item"><a href="#"><img src="images/brand-empty.png" data-lazy="images/brand-03.png"  /></a></div>
          </div>
        </div>
      </section> 
     </Aux>
     
      )
    }
      
  }
}


export default Content