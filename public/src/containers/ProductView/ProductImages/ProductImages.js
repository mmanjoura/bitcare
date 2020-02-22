import React, {Component} from 'react';
import Aux from './../../../hoc/Aux/Aux';
import Image from './ProductImage/ProductImage';

class ProductImages extends Component {
    render(){
        return(
            <Aux>
                <Image dataimage={this.props.dataimage} datazoomimage={this.props.datazoomimage} />
            </Aux>
     
        );
    }
}

export default ProductImages;