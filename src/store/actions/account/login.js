import * as actionTypes from './../actionTypes';
import axios from './../../../axios-instance';

export const fetchUserSuccess = ( users ) => {
  return {
      type: actionTypes.FETCH_USER_SUCCESS,
      users: users
  };
};

export const fetchUserFail = ( error ) => {
  return {
      type: actionTypes.FETCH_USER_FAIL,
      error: error
  };
};

export const fetchUserStart = () => {
  return {
      type: actionTypes.FETCH_USER_START
  };
};

export const fetchUser = () => {
  return dispatch => {
      dispatch(fetchUserStart());
      axios.get('contents?type=User')
          .then( res => {
              const fetchedUser = [];
              for ( let key in res.data.data ) {
                  fetchedUser.push( {
                      ...res.data.data,
                      id: key
                  } );
              }
              console.log("Fetched Users", fetchedUser)
              dispatch(fetchUserSuccess(fetchedUser));
          } )
          .catch( err => {
              dispatch(fetchUserFail(err));
          } );
  };
};