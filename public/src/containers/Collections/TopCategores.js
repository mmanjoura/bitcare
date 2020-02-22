import React, {Component} from 'react';
import TopCategores from './../../components/UI/OffCanvas/TopCategories/TopCategories';
import { connect } from 'react-redux';
import * as Globals from '../../hoc/Utils/Globals';
import * as actions from './../../store/actions/product'

class TopCategores extends Component {


componentDidMount () {

    this.props.onFetchProducts();
    
}
    render(){
        if(this.props.loading)
        {
            return <p>loading </p>
        }else
        {
         const productList = this.props.products.map((product, index) => {
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
          return(
            <section className="container padding-top-3x padding-bottom-3x">
                <h3 className="text-center mb-30">Featured Products</h3>
                <div className="owl-carousel" data-owl-carousel="{ &quot;nav&quot;: false, &quot;dots&quot;: true, &quot;margin&quot;: 30, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;576&quot;:{&quot;items&quot;:2},&quot;768&quot;:{&quot;items&quot;:3},&quot;991&quot;:{&quot;items&quot;:4},&quot;1200&quot;:{&quot;items&quot;:4}} }">
                {productList}
                </div>
            </section>
          ) 
        }
    
    }
}

const mapStateToProps = state => {

    return {
     
        topCategories: state.productData.topCategories
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchProducts: () => dispatch( actions.fetchProducts() )
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (TopCategores);