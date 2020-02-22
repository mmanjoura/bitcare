import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Globals from './../../hoc/Utils/Globals';
import * as actions from '../../store/actions/products';
import Aux from './../../hoc/Aux/Aux';

import Promotions from './../../components/UI/OffCanvas/Collections/Promotions/Promotions';
import MainSlider from './../../components/UI/OffCanvas/MainSlider/MainSlider';
import FeaturedProduct from './../../components/UI/OffCanvas/Collections/FeaturedProduct/FeaturedProduct';
import TopCategories from './../../components/UI/OffCanvas/Collections/TopCategories/TopCategories';
import ProductWidgets from './../../components/UI/OffCanvas/Collections/ProductWidgets/ProductWidgets';
import PopularBrands from './../../components/UI/OffCanvas/Collections/PopularBrands/PopularBrands';
import TopSellers from './../../components/UI/OffCanvas/Collections/ProductWidgets/TopSellers/TopSellers';

import axios from './../../axios-instance';
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';
import { addProductToCart } from './../../store/actions/cart';

class Home extends Component {

componentDidMount () {
    this.props.onFetchProducts();
}
    render(){

        if(this.props.loading)
        {
            return <p>loading </p>
        }else
        {
       
         const featuredProducts = this.props.featuredProducts.map((product, index) => {
  
                return (
               <Link to={"/" + product[index].id} key={product.id}>
                    <FeaturedProduct 
                    discount={100}
                    name={product[index].name}
                    price={product[index].price}
                    image={Globals.BASE_URL + product[index].images[0]}
                    clicked={this.props.addProductToCart}
                    /> 
               </Link>
           
                    )
            
  
        })

        const topCategories = this.props.topCategories.map((category, index) => {
            return (
                <TopCategories 
                key={category.id}
                key={category.id}
                discount={100}
                name={category[index].name}
                price={category[index].price}
                image={category[index].images}
                />
                )
            })

        const topSellers = this.props.topSellers.map((product, index) => {
            return (
             
                    <TopSellers 
                    key={product.id}
                    name={product[index].name}
                    price={product[index].price}
                    image={Globals.BASE_URL + product[index].images}
                    />
                
                )
            })

        console.log('top categories: ', topCategories)
          return(
              <Aux>
                <MainSlider />
                
                {/* TopCategories */} 
                <section className="container padding-top-3x">
                    <h3 className="text-center mb-30">{Globals.TOP_CATEGORIES}</h3>
                    <div className="row">
                        {topCategories}
                    </div>
                    <div className="text-center"><a className="btn btn-outline-secondary margin-top-none" href="shop-categories.html">All Categories</a></div>
                </section>

                <Promotions />

                {/* Featured Products */}   
                <section className="container padding-top-3x padding-bottom-3x">
                    <h3 className="text-center mb-30">{Globals.FEATURED_PRODUCTS}</h3>
                    <div className="owl-carousel" data-owl-carousel="{ &quot;nav&quot;: false, &quot;dots&quot;: true, &quot;margin&quot;: 30, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;576&quot;:{&quot;items&quot;:2},&quot;768&quot;:{&quot;items&quot;:3},&quot;991&quot;:{&quot;items&quot;:4},&quot;1200&quot;:{&quot;items&quot;:4}} }">
                    { featuredProducts }
                    </div>
                </section>
                <ProductWidgets>
             
                </ProductWidgets>
                <PopularBrands />
           
              </Aux>
         
          ) 
        }
    }
}

const mapStateToProps = state => {

    return {
     
        products: state.productData.products,
        topCategories:state.productData.topCategories,
        featuredProducts:state.productData.featuredProducts,
        topSellers:state.productData.topSellers,
        loading: state.productData.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchProducts: () => dispatch( actions.fetchProducts() )
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (withErrorHandler(Home, axios));