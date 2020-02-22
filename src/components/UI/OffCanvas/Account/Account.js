import React, {Component} from 'react'
import Aux from './../../../../hoc/Aux/Aux';
import PageTitle from './../../OffCanvas/PageTitle/PageTitle';
import Login from './Login/Login';
import Register from './Register/Register';


class Account extends Component {

    render(){
        return(
            <Aux>
            <PageTitle title="Login/Register" />
            <div className="container padding-bottom-3x mb-2">
                <div className="row">
                <Login />
                {console.log("Here are the props",this.props)}
                <Register {...this.props}/>

                </div>
            </div>
            </Aux>
        );
    }
}

export default Account;