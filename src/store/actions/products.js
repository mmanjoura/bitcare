import * as actionTypes from './actionTypes'
import axios from '../../axios-instance'
import * as Globals from '../../hoc/Utils/Globals';

export const fetchProductsSuccess = (
    products,
    topCategories,
    featuredProducts,
    popularBrands,
    topSellers,
    newArrivals,
    bestRated
) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        products: products,
        topCategories: topCategories,
        featuredProducts: featuredProducts,
        popularBrands: popularBrands,
        topSellers: topSellers,
        newArrivals: newArrivals,
        bestRated: bestRated
    }
}
export const fetchProductsFail = (error) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAIL,
        error: error
    }
}
export const fetchProductsStart = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_START
    }
}

export const fetchProducts = () => {
    return dispatch => {
        dispatch(fetchProductsStart());
        axios.get('contents?type=Product')
            .then(res => {
                const fetchedProducts = [];
                for (let key in res.data.data) {
                    fetchedProducts.push({
                        ...res.data.data,
                        id: key
                    });
                }

                const collection = (collectionName) => {
                    return fetchedProducts.filter((product, index) => {
                        for (let i = 0; i < product[index].collections.length; i++) {
                            if (product[index].collections[i].toUpperCase() === collectionName) {
                                return true;
                            }
                        }
                    })
                }
                console.log('Collections: ', collection(Globals.BEST_RATED))

                dispatch(fetchProductsSuccess(
                    fetchedProducts,
                    collection(Globals.TOP_CATEGORIES),
                    collection(Globals.FEATURED_PRODUCTS),
                    collection(Globals.POPULAR_BRANDS),
                    collection(Globals.TOP_SELLERS),
                    collection(Globals.NEW_ARRIVALS),
                    collection(Globals.BEST_RATED)
                ));
                console.log('product data', fetchedProducts)
            })
            .catch(err => {
                dispatch(fetchProductsFail(err));
            })

    };
}