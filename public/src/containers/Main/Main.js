import React, {Component} from 'react';
import Aux from './../../hoc/Aux/Aux';
import Layout from './../../hoc/Layout/Layout';

class Main extends Component {

    render(){
        return(
                <Aux>
                    <Layout>
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

                {/* Services*/
                    </Layout>
                </Aux>
        );
    }
}

export default Main;