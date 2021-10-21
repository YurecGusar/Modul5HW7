import {DELETE_PRODUCT, GET_PRODUCTS, POST_PRODUCTS, UPDATE_PRODUCT} from '../types'

const initialState = {
    products:[],
    loading:true,
    newProduct: {name: "", title: ""},
    product: {name: "", title: ""}
}

export default function(state = initialState, action){
    switch(action.type){

        case GET_PRODUCTS:
            return {
                ...state,
                products:action.payload,
                loading:false

            }
        case DELETE_PRODUCT:
            return {
                ...state,
                products:state.products.filter(({ id }) => id !== action.payload),
                loading:false
            }
        case POST_PRODUCTS:
            state.products.push(action.payload);
            var newProd = state.products;
            return {
                ...state,
                products:newProd,
                loading:false
            }
        case UPDATE_PRODUCT:
            return {
                ...state,
                products:state.products,
                loading:false
            }
        default: return state;
    }
}