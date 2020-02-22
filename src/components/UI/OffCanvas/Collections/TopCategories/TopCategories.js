import React from 'react';
import Aux from './../../../../../hoc/Aux/Aux';
import * as Globals from './../../../../../hoc/Utils/Globals'


const topCategories = (props) => {
    return(
        <Aux>
          <div className="col-md-4 col-sm-6">
          <div className="card mb-30">
              <a className="card-img-tiles" href="shop-grid-ls.html">
              <div className="inner">
              <div className="main-img"><img src={Globals.BASE_URL + props.image[0]} alt="Category" /></div>
              <div className="thumblist"><img src={Globals.BASE_URL + props.image[0]} alt="Category" />
              <img src={Globals.BASE_URL + props.image[0]} alt="Category" /></div>
          </div></a>
          <div className="card-body text-center">
              <h4 className="card-title">{props.category}</h4>
              <p className="text-muted">Starting from ${props.price}</p><a className="btn btn-outline-primary btn-sm" href="shop-grid-ls.html">View Products</a>
          </div>
          </div>
          </div>
        </Aux>
    )
}
export default topCategories;