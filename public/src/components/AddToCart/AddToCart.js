import React from 'react';
import Aux from '../../hoc/Aux/Aux';

const addtocart = () => {

    return(
        <Aux>
            <div className="modal fade bs-example-modal-sm" role="dialog" id="modalAddToCart">
            <div className="modal-dialog modal-sm">
            <div className="modal-content">
                <button type="button" className="close icon-clear" data-dismiss="modal" />
                <div className="text-center">
                <div className="divider divider--xs" />
                <p>Product added to cart successfully! </p>
                <div className="divider divider--xs" />
                <a href="#" className="btn btn--wd">Go to Cart</a>
                <div className="divider divider--xs" />
                </div>
            </div>
            </div>
        </div>
        </Aux>
    )

};

export default addtocart;