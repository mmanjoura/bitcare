import React from 'react';
import Aux from './../../../hoc/Aux/Aux'

const details = (props) => {
    const sizeVariations = props.sizeVariations.map(
        (size, index) => {
            return(
                <option key={index}>{size}</option> 
            );
        }
    );

    const colorVariations = props.colorVariations.map(
        (color, index) => {
            return(
                <option key={index}>{color}</option> 
            );
        }
    );
       
    console.log("size vatiation: ", props.sizeVariations)
    return(
            <Aux>
                <div className="col-md-6">
                    <div className="padding-top-2x mt-2 hidden-md-up" />
                    <div className="rating-stars"><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star" />
                    </div><span className="text-muted align-middle">&nbsp;&nbsp;4.2 | 3 customer reviews</span>
                    <h2 className="padding-top-1x text-normal">{props.name}</h2><span className="h2 d-block">
                    <del className="text-muted text-normal">${props.price}</del>&nbsp; ${props.price + 10}</span>
                    <p>{props.description}</p>
                    <div className="row margin-top-1x">
                    <div className="col-sm-4">
                        <div className="form-group">
                        <label htmlFor="size">Men's size</label>
                        <select className="form-control" id="size">
                            <option>Chooze size</option>
                                {sizeVariations}
                        </select>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="form-group">
                        <label htmlFor="color">Choose color</label>
                        <select className="form-control" id="color">
                        {colorVariations}
                        </select>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="form-group">
                        <label htmlFor="quantity">Quantity</label>
                        <select className="form-control" id="quantity">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        </div>
                    </div>
                    </div>
                    <div className="pt-1 mb-2"><span className="text-medium">SKU:</span> #{props.code}</div>
                    <div className="padding-bottom-1x mb-2"><span className="text-medium">Categories:&nbsp;</span><a className="navi-link" href="#">Men’s shoes,</a><a className="navi-link" href="#"> Snickers,</a><a className="navi-link" href="#"> Sport shoes</a></div>
                    <hr className="mb-3" />
                    <div className="d-flex flex-wrap justify-content-between">
                    <div className="entry-share mt-2 mb-2"><span className="text-muted">Share:</span>
                        <div className="share-links"><a className="social-button shape-circle sb-facebook" href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="socicon-facebook" /></a><a className="social-button shape-circle sb-twitter" href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="socicon-twitter" /></a><a className="social-button shape-circle sb-instagram" href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><i className="socicon-instagram" /></a><a className="social-button shape-circle sb-google-plus" href="#" data-toggle="tooltip" data-placement="top" title="Google +"><i className="socicon-googleplus" /></a></div>
                    </div>
                    <div className="sp-buttons mt-2 mb-2">
                        <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart" /></button>
                        <button className="btn btn-primary" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!"><i className="icon-bag" /> Add to Cart</button>
                    </div>
                    </div>
                </div>
            </Aux>
    );
}

export default details;