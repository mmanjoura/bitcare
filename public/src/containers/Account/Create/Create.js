import React, { Component } from 'react';
import axios from '../../../axios-instance';


class Create extends Component {

    state =  {
        // "AcceptLicense": false,
        // "AcceptNews": false,
        // "AcceptPrivate": false,
        // "Addresses": [],
        // "Avatar": "",
        // "Balance": null,
        // "Birthday": "",
        // "ConfirmToken": "",
        // "Confirmed": false,
        // "DefaultBillingAddress": null,
        // "DefaultShippingAddress": null,
        // "Email": "mus.man@gmail.com",
        // "Gender": "",
        // "ID": 0,
        // "Name": "",
        // "Password": "",
        // "RecoverToken": "",
        // "RecoverTokenExpiry": "",
        // "Role": ""

        user: null
    };

    accountDataHandler = () => {

        const account = {
            "AcceptLicense": false,
            "AcceptNews": false,
            "AcceptPrivate": false,
            "Addresses": [
                {
                    "Address1": "576 O'Connell Ville",
                    "Address2": "Suite 236",
                    "City": "Wolffmouth",
                    "ContactName": "Flo Emard",
                    "ID": 10,
                    "Phone": "1-040-115-6032 x324"
                }
            ],
            "Avatar": "",
            "Balance": 0,
            "Birthday": "",
            "ConfirmToken": "",
            "Confirmed": false,
            "DefaultBillingAddress": 0,
            "DefaultShippingAddress": 0,
            "Email": "floooooemard@example.com",
            "Gender": "Female",
            "ID": 10,
            "Name": "Flo Emard",
            "Password": "",
            "RecoverToken": "",
            "RecoverTokenExpiry": "",
            "Role": ""
        }

        this.setState(
            {
                user: account
            }
        );

        axios.post('users', {
            "AcceptLicense": false,
            "AcceptNews": false,
            "AcceptPrivate": false,
            "Addresses": [
                {
                    "Address1": "576 O'Connell Ville",
                    "Address2": "Suite 236",
                    "City": "Wolffmouth",
                    "ContactName": "Flo Emard",
                    "ID": 10,
                    "Phone": "1-040-115-6032 x324"
                }
            ],
            "Avatar": "",
            "Balance": 0,
            "Birthday": "",
            "ConfirmToken": "",
            "Confirmed": false,
            "DefaultBillingAddress": 0,
            "DefaultShippingAddress": 0,
            "Email": "flo_emard@example.com",
            "Gender": "Female",
            "ID": 10,
            "Name": "Flo Emard",
            "Password": "",
            "RecoverToken": "",
            "RecoverTokenExpiry": "",
            "Role": ""
        })
            .then(response => {
                console.log( 'Posting Data', response);
            });

    }
 
      

    render () {
      
            return (

                <section className="content content--fill top-null">
                <div className="container">
                    <h2 className="h-pad-sm text-uppercase text-center">Create an Account</h2>
                    <h6 className="text-uppercase text-center">Please enter the following information to create your account.</h6>
                    <div className="divider divider--sm" />
                    <div className="row">
                    <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
                        <div className="card card--form">
                        <div className="divider divider--xs" />
                        <form action="#" className="contact-form">
                            <h6 className="text-uppercase text-left">Personal Information</h6>
                            <input onChanged={this.props.changed} value={this.props.value} type="text" className="input--wd input--wd--full" placeholder="First name *" />
                            <input onChanged={this.props.changed} value={this.props.value} type="text" className="input--wd input--wd--full" placeholder="Last name *" />
                            <input onChanged={this.props.changed} value={this.props.value} type="text" className="input--wd input--wd--full" placeholder="Email address *" />
                            <div className="checkbox-group">
                            <input onChanged={this.props.changed} value={this.props.value} type="checkbox" id="checkBox1" />
                            <label htmlFor="checkBox1"> <span className="check" /> <span className="box" />Sign Up for Newsletter</label>
                            </div>
                            <div className="divider divider--xs" />
                            <h6 className="text-uppercase text-left">Login Information</h6>
                            <input onChanged={this.props.changed} value={this.props.value} type="password" className="input--wd input--wd--full" placeholder="Password *" />
                            <input onChanged={this.props.changed} value={this.props.value} type="password" className="input--wd input--wd--full" placeholder="Confirm password *" />
                            <div className="checkbox-group">
                            <input onChanged={this.props.changed} value={this.props.value} type="checkbox" id="checkBox2" />
                            <label htmlFor="checkBox2"> <span className="check" /> <span className="box" />Remember Me</label>
                            </div>
                            <div className="divider divider--xs" />
                            <button  onClick={this.accountDataHandler} className="btn btn--wd text-uppercase wave">Submit</button>
                        </form>
                        <div className="card--form__footer"> <a href="#">&lt;&nbsp;Back</a> </div>
                        </div>
                    </div>
                    </div>
                    <div className="divider divider--xl" />
                </div>
                </section>
  
     )
    }
}

export default Create;