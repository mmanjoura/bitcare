import React, { Component } from 'react';
import UserContext from './../../context/user-context';
import { connect } from 'react-redux';

import axios from './../../axios-instance';
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';
import * as actions from './../../store/actions/account/register';



class Register extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        passwordConfirm: ''
    };
onChange = (evt) => {
    this.setState({
        [evt.target.name]: evt.target.value
    });

}
onSubmit = (e) => {
    e.preventDefault();

    const user = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        password: this.state.password

    }
    let formData = new FormData();
    
    formData.append("firstName", this.state.firstName);
    formData.append("lastName", this.state.lastName);
    formData.append("email", this.state.email);
    formData.append("phoneNumber", this.state.phoneNumber);
    formData.append("password", this.state.password);
 
    this.props.onRegisterUser(formData);

}

    render () {
  
            return (
                <UserContext.Consumer>
                    {context => (
          
                        <React.Fragment>
                       
                        <div className="col-md-6">
                        <div className="padding-top-3x hidden-md-up" />
                        <h3 className="margin-bottom-1x">Nooo Account? Register</h3>
                        <p>Registration takes less than a minute but gives you full control over your orders.</p>
                        <form className="row" onSubmit={this.onSubmit}>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <label htmlFor="reg-fn">First Name</label>
                            <input value={this.state.firstName} name="firstName" value={this.state.firstName} onChange={this.onChange} className="form-control" type="text" id="reg-fn" required />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <label htmlFor="reg-ln">Last Name</label>
                            <input value={this.state.lastName} name="lastName" value={this.state.lastName} onChange={this.onChange} className="form-control" type="text" id="reg-ln" required />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <label htmlFor="reg-email">Email</label>
                            <input value={this.state.email} name="email" value={this.state.email} onChange={this.onChange} className="form-control" type="email" id="reg-email" required />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <label htmlFor="reg-phone">Phone Number</label>
                            <input value={this.state.phoneNumber} name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChange} className="form-control" type="text" id="reg-phone" required />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <label htmlFor="reg-pass">Password</label>
                            <input value={this.state.password} name="password" value={this.state.password} onChange={this.onChange} className="form-control" type="password" id="reg-pass" required />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <label htmlFor="reg-pass-confirm">Password Confirm</label>
                            <input value={this.state.passwordConfirm} name="passwordConfirm" value={this.state.passwordConfirm} onChange={this.onChange} className="form-control" type="password" id="reg-pass-confirm" required />
                            </div>
                        </div>
                        <div className="col-12 text-center text-sm-right">
                            <button className="btn btn-primary margin-bottom-none" type="submit">Register</button>
                        </div>
                        </form>
                    </div>
            
                </React.Fragment>     
            )}
            </UserContext.Consumer>
            );
    }
}
const mapStateToProps = state => {
    return {
        loading: state.registerData.loading
    }
};


const mapDispatchToProps = dispatch => {
    return {
        onRegisterUser: (userData) => dispatch(actions.registerUser(userData))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Register, axios));