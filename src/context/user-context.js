import React from 'react';

export default React.createContext({
  user: { 
        firstName: 'Alan', 
        lastName: 'Sheerer',
        email: 'alan.sheerer@gmail.com',
        phoneNumer: 12345,
        password: '13132323ddfdfj',
        passwordConfirm: '34343434'
        },

        addUser: user => {
          console.log("Our user is: ", user)
        }
});