import React from 'react';
import Aux from './../../../../hoc/Aux/Aux';

const mainSlider = (props) => {
    return(
        <Aux>
        <section className="hero-slider" style={{backgroundImage: 'url(img/main-bg.jpg)'}}>
        <div className="owl-carousel large-controls dots-inside" data-owl-carousel="{ &quot;nav&quot;: true, &quot;dots&quot;: true, &quot;loop&quot;: true, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 7000 }">
          <div className="item">
            <div className="container padding-top-3x">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
                  <div className="from-bottom"><img className="d-inline-block w-150 mb-4" src="img/logo02.png" alt="Puma" />
                    <div className="h2 text-body text-normal mb-2 pt-1">Puma Backpacks Collection</div>
                    <div className="h2 text-body text-normal mb-4 pb-1">starting at <span className="text-bold">$37.99</span></div>
                  </div><a className="btn btn-primary scale-up delay-1" href="shop-grid-ls.html">View Offers</a>
                </div>
                <div className="col-md-6 padding-bottom-2x mb-3"><img className="d-block mx-auto" src="img/02.png" alt="Puma Backpack" /></div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="container padding-top-3x">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
                  <div className="from-bottom"><img className="d-inline-block w-200 mb-4" src="img/logo01.png" alt="Converse" />
                    <div className="h2 text-body text-normal mb-2 pt-1">Chuck Taylor All Star II</div>
                    <div className="h2 text-body text-normal mb-4 pb-1">for only <span className="text-bold">$59.99</span></div>
                  </div><a className="btn btn-primary scale-up delay-1" href="shop-single.html">Shop Now</a>
                </div>
                <div className="col-md-6 padding-bottom-2x mb-3"><img className="d-block mx-auto" src="img/01.png" alt="Chuck Taylor All Star II" /></div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="container padding-top-3x">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
                  <div className="from-bottom"><img className="d-inline-block mb-4" src="img/logo03.png" style={{width: '125px'}} alt="Motorola" />
                    <div className="h2 text-body text-normal mb-2 pt-1">Smart Watch Moto 360 2nd</div>
                    <div className="h2 text-body text-normal mb-4 pb-1">for only <span className="text-bold">$299.99</span></div>
                  </div><a className="btn btn-primary scale-up delay-1" href="shop-single.html">Shop Now</a>
                </div>
                <div className="col-md-6 padding-bottom-2x mb-3"><img className="d-block mx-auto" src="img/03.png" alt="Moto 360" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
        </Aux>
    );
}

export default mainSlider;