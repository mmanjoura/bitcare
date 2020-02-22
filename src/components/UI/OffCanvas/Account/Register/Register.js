import React from 'react';
import Aux from './../../../../../hoc/Aux/Aux';

const register = (props) => {
    return(
            <Aux>
                    <div className="col-md-6">
                    <div className="padding-top-3x hidden-md-up" />
                    <h3 className="margin-bottom-1x">No Account? Register</h3>
                    <p>Registration takes less than a minute but gives you full control over your orders.</p>
                    <form className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                        <label htmlFor="reg-fn">{props.firstName}</label>
                        <input className="form-control" type="text" id="reg-fn" required />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                        <label htmlFor="reg-ln">{props.lastName}</label>
                        <input className="form-control" type="text" id="reg-ln" required />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                        <label htmlFor="reg-email">{props.password}</label>
                        <input className="form-control" type="email" id="reg-email" required />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                        <label htmlFor="reg-phone">{props.phoneNumber}</label>
                        <input className="form-control" type="text" id="reg-phone" required />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                        <label htmlFor="reg-pass">{props.password}</label>
                        <input className="form-control" type="password" id="reg-pass" required />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                        <label htmlFor="reg-pass-confirm">{props.passwordConfirm}</label>
                        <input className="form-control" type="password" id="reg-pass-confirm" required />
                        </div>
                    </div>
                    <div className="col-12 text-center text-sm-right">
                        <button className="btn btn-primary margin-bottom-none" onClick={props.onSubmit} type="submit">Register</button>
                    </div>
                    </form>
                </div>
            </Aux>
    );
}

export default register;