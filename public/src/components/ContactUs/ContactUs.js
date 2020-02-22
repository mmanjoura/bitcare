import React from 'react';
import Aux from '../../hoc/Aux/Aux'

const contactus = () => {
    return(
            <Aux>
            <section className="content content--parallax content--parallax--high top-null bottom-null" data-image="images/parallax-bg-03.jpg"> </section>
            <section className="content content--fill top-null">
              <div className="container">
                <form id="contactform" className="contact-form" name="contactform" method="post" noValidate>
                  <div className="row">
                    <div className="col-sm-7">
                      <h2 className="text-uppercase text-center">LEAVE A COMMENT</h2>
                      <div id="success">
                        <p>Your message was sent successfully!</p>
                      </div>
                      <div id="error">
                        <p>Something went wrong, try refreshing and submitting the form again.</p>
                      </div>
                      <div className="input-group input-group--wd">
                        <input type="text" className="input--full" name="name" />
                        <span className="input-group__bar" />
                        <label>Your Name (required)</label>
                      </div>
                      <div className="input-group input-group--wd">
                        <input type="text" className="input--full" name="email" />
                        <span className="input-group__bar" />
                        <label>Your Email (required)</label>
                      </div>
                      <div className="input-group input-group--wd">
                        <input type="text" className="input--full" name="subject" />
                        <span className="input-group__bar" />
                        <label>Subject</label>
                      </div>
                      <div className="input-group input-group--wd">
                        <textarea className="textarea--full" name="message" defaultValue={""} />
                        <span className="input-group__bar" />
                        <label>Your Message</label>
                      </div>
                      <button type="submit" id="submit" className="btn btn--wd text-uppercase wave">Send Message</button>
                    </div>
                    <div className="divider divider--sm visible-xs" />
                    <div className="col-sm-5 text-center">
                      <div className="divider divider--lg visible-lg" />
                      <h2 className="text-uppercase">Let’s Start Now!</h2>
                      <p>In pellentesque lorem condimentum dui morbi pulvinar dui non quam pretium ut lacinia tortor. Fusce lacinia tempor malesuada. Fringilla penatibus orci est non mollit, suspendisse pulvinar egestas a donec. Vulputate mi dui suscipit, molestie vulputate libero fusce iaculis suscipit. Sapien pede libero.</p>
                      <p>Main Office: 7563 St. Vincent Place, Glasgow<br />
                        Phones: 321321321, 321321321<br />
                        Email: <a href="#">info@mydomain.com</a></p>
                    </div>
                  </div>
                </form>
              </div>
            </section>
            <section className="content fullwidth top-null bottom-null">
              <div id="map" />
              {/* 		   <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6115.684863819771!2d-82.9719195443651!3d39.96727545833253!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf3846176f3dff5ed!2sLa+Aurora!5e0!3m2!1sen!2sus!4v1416911994304" class="map"></iframe> */} 
            </section>
            </Aux>
    );
}

export default contactus;