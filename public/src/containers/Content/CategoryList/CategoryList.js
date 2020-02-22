import React, {Component} from 'react';
import Category from './Category/Category';



class CategoryList extends Component {

    render(){
        
        return(
             <Category name={this.props.name} image={this.props.image}/>
        );

    }
}

export default CategoryList;