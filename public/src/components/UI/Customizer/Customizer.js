import React from 'react'
import Aux from './../../../hoc/Aux/Aux';

const customizer = (props) => {
    return(
        <Aux>
        <div className="customizer-backdrop" />
        <div className="customizer"> 
        <div className="customizer-toggle"><i className="icon-cog" /></div>
        <div className="customizer-body">
          <div className="btn-group mb-4">
            <button className="btn btn-white btn-rounded btn-block dropdown-toggle my-0" type="button" data-toggle="dropdown">Choose Template</button>
            <div className="dropdown-menu"><a className="dropdown-item" href="../template-1/index.html">Template 1 (Clothing)</a><a className="dropdown-item" href="../template-2/index.html">Template 2 (Furniture)</a><a className="dropdown-item" href="../template-3/index.html">Template 3 (Electronics)</a></div>
          </div>
          <div className="customizer-title">Choose color</div>
          <div className="customizer-color-switch"><a className="active" href="#" data-color="default" style={{backgroundColor: '#0da9ef'}} /><a href="#" data-color="2ecc71" style={{backgroundColor: '#2ecc71'}} /><a href="#" data-color="f39c12" style={{backgroundColor: '#f39c12'}} /><a href="#" data-color="e74c3c" style={{backgroundColor: '#e74c3c'}} /></div>
          <div className="customizer-title">Header option</div>
          <div className="form-group">
            <select className="form-control form-control-rounded input-light" id="header-option">
              <option value="sticky">Sticky</option>
              <option value="static">Static</option>
            </select>
          </div>
          <div className="customizer-title">Footer option</div>
          <div className="form-group">
            <select className="form-control form-control-rounded input-light" id="footer-option">
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </div><a className="btn btn-primary btn-rounded btn-block margin-bottom-none" href="https://wrapbootstrap.com/theme/unishop-universal-e-commerce-template-WB0148688/?ref=rokaux">Buy Unishop</a>
        </div>
        </div>
        </Aux>
     
    );
}

export default customizer;