import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'
const initialState = {
    product:null,
    error: false,
    loading:false
}
const fetchProductStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchProductSuccess = ( state, action ) => {
    console.log("fetch product Success: ", action.product)
    return updateObject( state, {
        product: action.product,
        loading: false
    } );
};

const fetchProductFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const ProductViewReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_PRODUCT_START: return fetchProductStart(state, action);    
        case actionTypes.FETCH_PRODUCT_SUCCESS: return fetchProductSuccess(state, action);   
        case actionTypes.FETCH_PRODUCT_FAIL: return fetchProductFail(state, action);
        default: return state;
    }
};
export default ProductViewReducer;