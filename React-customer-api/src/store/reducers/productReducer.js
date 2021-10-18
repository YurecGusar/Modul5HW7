import {DELETE_PRODUCT, GET_PRODUCTS, POST_PRODUCTS} from '../types'

const initialState = {
    products:[],
    loading:true,
    newProduct: {name: "", title: ""}
}

export default function(state = initialState, action){
    debugger;
    switch(action.type){

        case GET_PRODUCTS:
            return {
                ...state,
                products:action.payload,
                loading:false

            }
        case DELETE_PRODUCT:
            debugger;
            return {
                ...state,
                products:state.products.filter(({ id }) => id !== action.payload),
                loading:false
            }
        case POST_PRODUCTS:
            debugger;
            return {
                ...state,
                newProduct:state.newProduct,
                loading:false
            }
        default: return state
    }
}