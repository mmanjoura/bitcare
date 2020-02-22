import React, {Component} from 'react';

class Login extends Component {
    render(){
        return(
            <section className="content content--fill top-null">
            <div className="container">
              <h2 className="h-pad-sm text-uppercase text-center">Already Registered?</h2>
              <h6 className="text-uppercase text-center">If you have an account with us, please log in.</h6>
              <div className="divider divider--sm" />
              <div className="row">
                <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
                  <div className="card card--form"> <a href="#" className="icon card--form__icon icon-user-circle" />
                    <form action="#" className="contact-form">
                      <input type="text" className="input--wd input--wd--full" placeholder="Email" />
                      <input type="password" className="input--wd input--wd--full" placeholder="Password" />
                      <div className="checkbox-group">
                        <input type="checkbox" id="checkBox1" />
                        <label htmlFor="checkBox1"> <span className="check" /> <span className="box" />Remember me</label>
                      </div>
                      <div className="divider divider--xs" />
                      <button type="submit" className="btn btn--wd text-uppercase wave waves-effect">Sign In</button>
                    </form>
                    <div className="card--form__footer"> <a href="#">Forgot Your Password?</a><br /><a href="#">&lt;&nbsp;Back</a> </div>
                  </div>
                </div>
              </div>
              <div className="divider divider--md" />
              <h2 className="h-pad-sm text-uppercase text-center">New Here?</h2>
              <h6 className="text-uppercase text-center">Registration is free and easy!</h6>
              <div className="divider divider--xs" />
              <div className="text-center"><a href="create-account.html" className="btn btn--wd text-uppercase wave">create an account</a></div>
              <div className="divider divider--md" />
            </div>
          </section>
        );
    }
}

export default Login;