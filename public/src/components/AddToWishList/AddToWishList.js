import React from 'react';
import Aux from '../../hoc/Aux/Aux';

const addtowishlist = () => {

    return (
        <Aux>
                <div className="modal fade bs-example-modal-sm" role="dialog" id="modalAddToWishlist">
                <div className="modal-dialog modal-sm">
                <div className="modal-content">
                    <button type="button" className="close icon-clear" data-dismiss="modal" />
                    <div className="text-center">
                    <div className="divider divider--xs" />
                    <div className="loading">
                        <div className="divider divider--sm" />
                        <div className="loader">
                        <div className="bar" />
                        <div className="bar" />
                        <div className="bar" />
                        <div className="bar" />
                        <div className="bar" />
                        </div>
                    </div>
                    <p className="success">Product added to wishlist successfully! </p>
                    <div className="divider divider--xs"> </div>
                    </div>
                </div>
                </div>
            </div>
            </Aux>
    )
};

export default addtowishlist;