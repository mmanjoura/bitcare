import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'
const initialState = {
    products:[],
    topCategories:[],
    featuredProducts:[],
    popularBrands:[],
    topSellers:[],
    newArrivals:[],
    bestRated:[],
    error: false,
    loading:false
}
const fetchProductsStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchProductsSuccess = ( state, action ) => {
    return updateObject( state, {
        products: action.products,
        topCategories: action.topCategories,
        featuredProducts: action.featuredProducts,
        popularBrands: action.popularBrands,
        topSellers: action.topSellers,
        newArrivals: action.newArrivals,
        bestRated: action.bestRated, 
        loading: false
    } );
};

const fetchProductsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const ProductsReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_PRODUCTS_START: return fetchProductsStart(state, action);    
        case actionTypes.FETCH_PRODUCTS_SUCCESS: return fetchProductsSuccess(state, action);   
        case actionTypes.FETCH_PRODUCTS_FAIL: return fetchProductsFail(state, action);
        default: return state;
    }
};
export default ProductsReducer;