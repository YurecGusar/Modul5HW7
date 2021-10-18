import {GET_PRODUCTS, PRODUCTS_ERROR, DELETE_PRODUCT, POST_PRODUCTS} from '../types'
import axios from 'axios'

export const getProducts = () => async dispatch => {
    
    try{
        const res = await axios.get(`https://localhost:44377/api/Products`)
        dispatch( {
            type: GET_PRODUCTS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: PRODUCTS_ERROR,
            payload: console.log(e),
        })
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    try{
        debugger;
        await axios.delete(`https://localhost:44377/api/Products/${id}`)

        dispatch({
            type: DELETE_PRODUCT,
            payload: id
        })
    }
    catch(e){
        dispatch({
            type: PRODUCTS_ERROR,
            payload: console.log(e),
        })
    }
}

export const createProduct = (newProduct) => async (dispath) =>{
    try{
        debugger;
        await axios.post(`https://localhost:44377/api/Products`, newProduct)
        debugger;
        dispath({
            type: POST_PRODUCTS,
            payload: newProduct
        })
    }
    catch(e){
        dispath({
            type: PRODUCTS_ERROR,
            payload: console.log(e),
        })
    }
}