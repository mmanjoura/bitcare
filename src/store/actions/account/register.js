import * as actionTypes from './../actionTypes';
import axios from './../../../axios-instance';

export const registerUserSuccess = ( id, userData ) => {
  return {
      type: actionTypes.REGISTER_USER_SUCCESS,
      orderId: id,
      userData: userData
  };
};

export const registerUserFail = ( error ) => {
  return {
      type: actionTypes.REGISTER_USER_FAIL,
      error: error
  };
}

export const registerUserStart = () => {
  return {
      type: actionTypes.REGISTER_USER_START
  };
};

export const registerUser = ( userData ) => {
  console.log("userData: ", userData)
  //let formData = new FormData();
 // formData.append('user',userData)
 // console.log("Form data: ", formData)
  return dispatch => {
      dispatch( registerUserStart() );
      axios.post( 'content/create?type=User', userData)
          .then( response => {
            
              dispatch( registerUserSuccess( response.data.name, userData ) );
          } )
          .catch( error => {
            console.log(error);
              dispatch( registerUserFail( error ) );
          } );
  };
};

export const registerUserInit = () => {
  return {
      type: actionTypes.REGISTER_USER_INIT
  };
};

