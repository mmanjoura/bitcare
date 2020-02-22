import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';

import Customizer from './../../components/UI/Customizer/Customizer';
import ShopCategores from './../../components/UI/OffCanvas/ShopCategories/ShopCategories';
import MobileMenu from './../../components/UI/OffCanvas/MobileMenu/MobileMenu';
import TopBar from './../../components/UI/TopBar/TopBar';
import Header from './../../components/UI/Header/Header';
import Services from './../../components/UI/OffCanvas/Services/Services';
import Footer from './../../components/UI/Footer/Footer';

class Layout extends Component {
    
    render(){
        return(
            <Aux>
                <div className="offcanvas-wrapper">
                    {/* Template Customizer*/}
                    <Customizer />
                    {/* Off-Canvas Category Menu*/}
                    <div className="offcanvas-container" id="shop-categories">
                        <ShopCategores />
                    </div>
                    {/* Off-Canvas Mobile Menu*/}
                        <MobileMenu />
                    {/* Topbar*/}
                    <div className="topbar">
                        <TopBar />
                    </div>
                    {/* Navbar*/}
                    {/* Remove "navbar-sticky" class 
                    to make navigation bar scrollable with the page.*/}
                    <header className="navbar navbar-sticky">
                        <Header />
                    </header>
                    {/* Off-Canvas Wrapper*/}
                        {this.props.children}

                    {/* Services*/}
                    <Services />
                  <Footer />
                  </div>
               
            </Aux>
        )

    }
}
        

        

export default Layout;