import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import ShopCategories from './../../components/UI/OffCanvas/ShopCategories/ShopCategories';
import Services from './../../components/UI/OffCanvas/Services/Services';
import Footer from './../../components/UI/Footer/Footer';

class Layout extends Component {
    
    render(){
        return(
            <Aux>
                <ShopCategories />
                    {this.props.children}
                <Services />
                <Footer />
            </Aux>
        )

    }
}
        

        

export default Layout;