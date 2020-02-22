import React from 'react';
import Aux from './../../../../hoc/Aux/Aux';

const services = (props) => {
    return(
            <Aux>
                 {/* Services*/}
      <section className="container padding-top-3x padding-bottom-2x">
      <div className="row">
        <div className="col-md-3 col-sm-6 text-center mb-30"><img className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="img/services/01.png" alt="Shipping" />
          <h6>Free Worldwide Shipping</h6>
          <p className="text-muted margin-bottom-none">Free shipping for all orders over $100</p>
        </div>
        <div className="col-md-3 col-sm-6 text-center mb-30"><img className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="img/services/02.png" alt="Money Back" />
          <h6>Money Back Guarantee</h6>
          <p className="text-muted margin-bottom-none">We return money within 30 days</p>
        </div>
        <div className="col-md-3 col-sm-6 text-center mb-30"><img className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="img/services/03.png" alt="Support" />
          <h6>24/7 Customer Support</h6>
          <p className="text-muted margin-bottom-none">Friendly 24/7 customer support</p>
        </div>
        <div className="col-md-3 col-sm-6 text-center mb-30"><img className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="img/services/04.png" alt="Payment" />
          <h6>Secure Online Payment</h6>
          <p className="text-muted margin-bottom-none">We posess SSL / Secure Certificate</p>
        </div>
      </div>
    </section> 
            </Aux>
    )
}
export default services;