import * as actionTypes from './../../actions/actionTypes'
import { updateObject } from './../../utility';

const initialState = {
  users: [],
  loading: false,
  authenticated: false
};

const fetchUserStart = ( state, action ) => {
  return updateObject( state, { loading: true } );
};

const fetchUserSuccess = ( state, action ) => {
  return updateObject( state, {
      users: action.users,
      loading: false
  } );
};

const fetchUserFail = ( state, action ) => {
  return updateObject( state, { loading: false } );
};

const loginReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
      case actionTypes.FETCH_USER_START: return fetchUserStart( state, action );
      case actionTypes.FETCH_USER_SUCCESS: return fetchUserSuccess( state, action );
      case actionTypes.FETCH_USER_FAIL: return fetchUserFail( state, action );
      default: return state;
  }
};

export default loginReducer;