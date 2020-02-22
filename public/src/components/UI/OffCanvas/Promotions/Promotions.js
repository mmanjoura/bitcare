import React from 'react';
import Aux from './../../../../hoc/Aux/Aux';

const promotions = (props) => {
    return(
        <Aux>
                    {/* Promo #1*/}
          <section className="container-fluid padding-top-3x">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 mb-30">
              <div className="rounded bg-faded position-relative padding-top-3x padding-bottom-3x"><span className="product-badge text-danger" style={{top: '24px', left: '24px'}}>Limited Offer</span>
                <div className="text-center">
                  <h3 className="h2 text-normal mb-1">New</h3>
                  <h2 className="display-2 text-bold mb-2">Sunglasses</h2>
                  <h4 className="h3 text-normal mb-4">collection at discounted price!</h4>
                  <div className="countdown mb-3" data-date-time="12/30/2019 12:00:00">
                    <div className="item">
                      <div className="days">00</div><span className="days_ref">Days</span>
                    </div>
                    <div className="item">
                      <div className="hours">00</div><span className="hours_ref">Hours</span>
                    </div>
                    <div className="item">
                      <div className="minutes">00</div><span className="minutes_ref">Mins</span>
                    </div>
                    <div className="item">
                      <div className="seconds">00</div><span className="seconds_ref">Secs</span>
                    </div>
                  </div><br /><a className="btn btn-primary margin-bottom-none" href="#">View Offers</a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mb-30" style={{minHeight: '270px'}}>
              <div className="img-cover rounded" style={{backgroundImage: 'url(img/home01.jpg)'}} />
            </div>
          </div>
        </section>
        {/* Promo #2*/}
        <section className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12">
            <div className="fw-section rounded padding-top-4x padding-bottom-4x" style={{backgroundImage: 'url(img/home02.jpg)'}}><span className="overlay rounded" style={{opacity: '.35'}} />
              <div className="text-center">
                <h3 className="display-4 text-normal text-white text-shadow mb-1">Old Collection</h3>
                <h2 className="display-2 text-bold text-white text-shadow">HUGE SALE!</h2>
                <h4 className="d-inline-block h2 text-normal text-white text-shadow border-default border-left-0 border-right-0 mb-4">at our outlet stores</h4><br /><a className="btn btn-primary margin-bottom-none" href="contacts.html">Locate Stores</a>
              </div>
            </div>
          </div>
        </div>
      </section>
     
        </Aux>
    );
}

export default promotions;