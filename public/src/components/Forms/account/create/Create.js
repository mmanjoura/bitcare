import React from 'react';

const create = (props) => {

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
                           <input onChanged={props.changed} value={props.value} type="text" className="input--wd input--wd--full" placeholder="First name *" />
                           <input onChanged={props.changed} value={props.value} type="text" className="input--wd input--wd--full" placeholder="Last name *" />
                           <input onChanged={props.changed} value={props.value} type="text" className="input--wd input--wd--full" placeholder="Email address *" />
                           <div className="checkbox-group">
                           <input onChanged={props.changed} value={props.value} type="checkbox" id="checkBox1" />
                           <label htmlFor="checkBox1"> <span className="check" /> <span className="box" />Sign Up for Newsletter</label>
                           </div>
                           <div className="divider divider--xs" />
                           <h6 className="text-uppercase text-left">Login Information</h6>
                           <input onChanged={props.changed} value={props.value} type="password" className="input--wd input--wd--full" placeholder="Password *" />
                           <input onChanged={props.changed} value={props.value} type="password" className="input--wd input--wd--full" placeholder="Confirm password *" />
                           <div className="checkbox-group">
                           <input onChanged={props.changed} value={props.value} type="checkbox" id="checkBox2" />
                           <label htmlFor="checkBox2"> <span className="check" /> <span className="box" />Remember Me</label>
                           </div>
                           <div className="divider divider--xs" />
                           <button type="submit" className="btn btn--wd text-uppercase wave">Submit</button>
                       </form>
                       <div className="card--form__footer"> <a href="#">&lt;&nbsp;Back</a> </div>
                       </div>
                   </div>
                   </div>
                   <div className="divider divider--xl" />
               </div>
               </section>
 
    )
    

};

export default create;