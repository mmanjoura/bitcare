import React from 'react';
import Aux from './../../../../../hoc/Aux/Aux';

const login = (props) => {
    return(
        <Aux>
            <div className="col-md-6">
                <form className="login-box" method="post">
                <div className="row margin-bottom-1x">
                    <div className="col-xl-4 col-md-6 col-sm-4"><a className="btn btn-sm btn-block facebook-btn" href="#"><i className="socicon-facebook" />&nbsp;Facebook login</a></div>
                    <div className="col-xl-4 col-md-6 col-sm-4"><a className="btn btn-sm btn-block twitter-btn" href="#"><i className="socicon-twitter" />&nbsp;Twitter login</a></div>
                    <div className="col-xl-4 col-md-6 col-sm-4"><a className="btn btn-sm btn-block google-btn" href="#"><i className="socicon-googleplus" />&nbsp;Google+ login</a></div>
                </div>
                <h4 className="margin-bottom-1x">Or using form below</h4>
                <div className="form-group input-group">
                    <input className="form-control" type="email" placeholder="Email" required /><span className="input-group-addon"><i className="icon-mail" /></span>
                </div>
                <div className="form-group input-group">
                    <input className="form-control" type="password" placeholder="Password" required /><span className="input-group-addon"><i className="icon-lock" /></span>
                </div>
                <div className="d-flex flex-wrap justify-content-between padding-bottom-1x">
                    <div className="custom-control custom-checkbox">
                    <input className="custom-control-input" type="checkbox" id="remember_me" defaultChecked />
                    <label className="custom-control-label" htmlFor="remember_me">Remember me</label>
                    </div><a className="navi-link" href="account-password-recovery.html">Forgot password?</a>
                </div>
                <div className="text-center text-sm-right">
                    <button className="btn btn-primary margin-bottom-none" type="submit">Login</button>
                </div>
                </form>
            </div>
        </Aux>
    );
}

export default login;