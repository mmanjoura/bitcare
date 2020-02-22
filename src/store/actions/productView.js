import * as actionTypes from './actionTypes'
import axios from '../../axios-instance'

export const fetchProductSuccess = (product) => {
    return {
        type: actionTypes.FETCH_PRODUCT_SUCCESS,
        product: product
    }
}
export const fetchProductFail = (error) => {
    return {
        type: actionTypes.FETCH_PRODUCT_FAIL,
        error: error
    }
}
export const fetchProductStart = () => {
    return {
        type: actionTypes.FETCH_PRODUCT_START
    }
}

export const fetchProduct = (productId) => {
    return dispatch => {
        dispatch(fetchProductStart());
        axios.get('content?type=Product&id=' + productId)
            .then(res => {
                const fetchedProduct = res.data.data[0];
                console.log('Product Data:', fetchedProduct)
       
                dispatch(fetchProductSuccess(
                    fetchedProduct
                ));
                console.log('product data', fetchedProduct)
            })
            .catch(err => {
                dispatch(fetchProductFail(err));
            })

    };
}