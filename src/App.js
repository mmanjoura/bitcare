import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Aux from './hoc/Aux/Aux';
import Home from './containers/Home/Home';
import ProductView from './containers/ProductView/ProductView';
import GlobalState from './context/GlobalState';

import MobileMenu from './components/UI/OffCanvas/MobileMenu/MobileMenu';
import TopBar from './components/UI/TopBar/TopBar';
import Header from './components/UI/Header/Header';
import Account from './containers/Account/Account';


class App extends Component {

  render() {
    return (
      <GlobalState>
            <Aux>
              <Layout>
                <MobileMenu />
                <TopBar />
                <Header />
                  <Switch>
                  <Route path="/" exact component= {Home} />
                  <Route path="/account" exact component={Account} />
                  <Route path="/:id" exact component={ProductView} />
                  </Switch>
              </Layout>
            </Aux>
      </GlobalState>
    );
  }
}
export default App;
