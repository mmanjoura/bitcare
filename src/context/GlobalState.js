import React, { Component } from 'react';

import UserContext from './user-context';

class GlobalState extends Component {
  state = {
    user: 
      { 

        firstName: 'Alan', 
        lastName: 'Sheerer',
        email: 'alan.sheerer@gmail.com',
        phoneNumer: 12345,
        password: '13132323ddfdfj',
        passwordConfirm: '34343434'
        }
  };

  addUser = user => {
    console.log('Adding user', user);

    setTimeout(() => {
      this.setState({ cart: {} });
    }, 700);
  };


  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          addUser: this.addUser
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default GlobalState;