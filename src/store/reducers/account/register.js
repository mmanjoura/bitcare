import * as actionTypes from './../../actions/actionTypes'
import { updateObject } from './../../utility';



const initialState = {
  users:[],
  loading: false,
  registered: false
};

const registerUserInit = ( state, action ) => {
  return updateObject( state, { registered: false } );
};

const registerUserStart = ( state, action ) => {
  return updateObject( state, { loading: false } );
};

const registerUserSuccess = ( state, action ) => {
  const newUser = updateObject( action.userData, { id: action.userId } );
  return updateObject( state, {
      loading: false,
      registered: true,
      users: state.users.concat( newUser )
  } );
};

const registerUserFail = ( state, action ) => {
  return updateObject( state, { loading: false } );
};

const registerReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
      case actionTypes.REGISTER_USER_INIT: return registerUserInit( state, action );
      case actionTypes.REGISTER_USER_START: return registerUserStart( state, action );
      case actionTypes.REGISTER_USER_SUCCESS: return registerUserSuccess( state, action )
      case actionTypes.REGISTER_USER_FAIL: return registerUserFail( state, action );
      default: return state;
  }
};

export default registerReducer;