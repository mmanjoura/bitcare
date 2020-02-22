import React, {Component} from 'react'
import { connect } from 'react-redux';
import axios from './../../axios-instance'

import Aux from './../../hoc/Aux/Aux';
import PageTitle from './../../components/UI/OffCanvas/PageTitle/PageTitle';
import Login from './../../containers/Account/Login';
import Register from './../../containers/Account/Register';
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';


class Account extends Component {

    componentDidMount(){
        console.log("State in Account component: ", this.state)
    }

    render(){
        return(
            <Aux>
            <PageTitle title="Login/Register" />
            <div className="container padding-bottom-3x mb-2">
                <div className="row">
                <Login />
                <Register/>
                </div>
            </div>
            </Aux>
        );
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

export default connect(mapStateToProps) (withErrorHandler(Account, axios));