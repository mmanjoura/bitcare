
//Action creators
import * as actionTypes from './actionTypes'
import axios from '../../axios-instance'
import * as globals from './../../hoc/Utils/Globals'

export const fetchProductsSuccess = (products) =>{
    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        products: products
    }
}
export const fetchProductsFail = (error) =>{
    return {
        type: actionTypes.FETCH_PRODUCTS_FAIL,
        error: error
    }
}
export const fetchProductsStart = () =>{
    return {
        type: actionTypes.FETCH_PRODUCTS_START
    }
}
// export const fetchTopCategoriesSuccess = (topCategories) =>{
//     return {
//         type: actionTypes.FETCH_TOP_CATEGORIES_SUCCESS,
//         topCategories: topCategories
//     }
// }

export const fetchProducts = () => {
    return dispatch => {
        dispatch(fetchProductsStart());
        axios.get( 'contents?type=Product' )
            .then( res => {
                const fetchedProducts = [];
                for ( let key in res.data.data ) {
                    fetchedProducts.push( {
                        ...res.data.data,
                        id: key
                    } );
 
                }
   
                
                
                dispatch(fetchProductsSuccess(fetchedProducts));
                console.log('product data', fetchedProducts)
                //dispatch(fetchTopCategoriesSuccess(fetechedTopCategories));
                //console.log('top categories data', fetechedTopCategories)
            } )
            .catch( err => {
                dispatch(fetchProductsFail(err));
            } )

    };
}

