import React, {Component} from 'react'

class Category extends Component {
    render(){
        return(
       
            <div className="product-category hover-squared" > 
            <a href="#">
            <img src={this.props.image} data-lazy={this.props.image} alt="#" /></a>
            <div className="product-category__hover caption" />
            <div className="product-category__info">
              <div className="product-category__info__ribbon">
                <h5 className="product-category__info__ribbon__title">{this.props.name}</h5>
                <div className="product-category__info__ribbon__count">32 products</div>
              </div>
            </div>
          </div>
        
        
        );
    }
}

export default Category;