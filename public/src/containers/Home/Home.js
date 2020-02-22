import React, {Component} from 'react';
import { connect } from 'react-redux';

import FeaturedProduct from './../../components/UI/OffCanvas/FeaturedProduct/FeaturedProduct';
import * as Globals from './../../hoc/Utils/Globals';
import * as actions from '../../store/actions/product';
import Aux from './../../hoc/Aux/Aux';
import TopCategories from './../../components/UI/OffCanvas/TopCategories/TopCategories';
import Promotions from './../../components/UI/OffCanvas/Promotions/Promotions';

class Home extends Component {

componentDidMount () {
    this.props.onFetchProducts();
}
    render(){
        let collectionNamme = "";
        if(this.props.loading)
        {
            return <p>loading </p>
        }else
        {
        // FeaturedProducts
         const featuredProducts = this.props.products.map((product, index) => {
        return (
            <FeaturedProduct 
            key={product.id}
            discount={100}
            name={product[index].name}
            price={product[index].price}
            image={Globals.BASE_URL + product[index].images[0]}
         
            />
            )
        })

        // TopCategories 
        const topCategories = this.props.products.filter((product, index) => {
            // console.log("Product: ", product[index].collections[0].toUpperCase());
            // console.log("Constant: ",  Globals.TOP_CATEGORIES);
            return product[index].collections[0].toUpperCase() === Globals.TOP_CATEGORIES
        }).map((product, index) => {
            collectionNamme = product[index].collections[0];
            return (
              
                <TopCategories
                key={product.id}
                discount={100}
                name={product[index].name}
                price={product[index].price}
                image={product[index].images}
                // collectionNamme={product[index].collections[0]}
                // category={product[index].category}
                />
                )
        })
       
        console.log('top categories: ', featuredProducts)
          return(
              <Aux>
                {/* TopCategories */} 
                <section className="container padding-top-3x">
                    <h3 className="text-center mb-30">Top Categories</h3>
                    <div className="row">
                        {topCategories}
                    </div>
                    <div className="text-center"><a className="btn btn-outline-secondary margin-top-none" href="shop-categories.html">All Categories</a></div>
                </section>

                <Promotions />

                {/* Featured Products */}   
                <section className="container padding-top-3x padding-bottom-3x">
                    <h3 className="text-center mb-30">{collectionNamme}</h3>
                    <div className="owl-carousel" data-owl-carousel="{ &quot;nav&quot;: false, &quot;dots&quot;: true, &quot;margin&quot;: 30, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;576&quot;:{&quot;items&quot;:2},&quot;768&quot;:{&quot;items&quot;:3},&quot;991&quot;:{&quot;items&quot;:4},&quot;1200&quot;:{&quot;items&quot;:4}} }">
                    { featuredProducts }
                    </div>
                </section>
              </Aux>
         
          ) 
        }
    
    }
}

const mapStateToProps = state => {

    return {
     
        products: state.productData.products,
        loading: state.productData.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchProducts: () => dispatch( actions.fetchProducts() )
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);