import * as actionTypes from './actionTypes'
import axios from '../../axios-instance'

export const addProductToCart = product => {
    return dispatch => {
      setTimeout(() => {
        dispatch({
          type: actionTypes.ADD_PRODUCT_TO_CART,
          payload: product
        });
      }, 700);
    };
  };
  
  export const removeProductFromCart = productId => {
      return dispatch => {
        setTimeout(() => {
          dispatch({
            type: actionTypes.REMOVE_PRODUCT_FROM_CART,
            payload: productId
          });
        }, 700);
      };
    };