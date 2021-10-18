import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getProducts, deleteProduct, createProduct} from '../store/actions/productsActions'

var newProduct = {name: "Created Name", title: "Created Title"}

 class products extends Component {
    componentDidMount(){
        this.props.getProducts();
    }

    componentDidUpdate(){
        this.props.getProducts();
    }

    ondeleteProduct(id){
        debugger;
        this.props.deleteProduct(id);
    }

    onCreateProduct(newProduct){
        this.props.createProduct(newProduct);
    }

    

    render() {
        const {products} = this.props.products
        console.log(products)
        
        return (<>
            <div>
                <div>
                <h2>Create product</h2>
                Name: <input type="text" name="productName"/>
                <br/>
                Title: <input type="text" name="productTitle"/>
                <br/>
                Category: <input type="text" name="productCategory"/>
                <br/>
                </div>

                <button onClick={()=>this.onCreateProduct(newProduct)}>Create</button>
            </div>
            <div>
                <h3>Products:</h3>
                {products.map(u => 
                     <React.Fragment key={u.id}>
                         <h6 >{u.name} {u.title}</h6> 
                     <button onClick={()=>this.ondeleteProduct(u.id)}>-</button>
                     </React.Fragment>
                )}
            </div>
            </>
        )
    }
}

const mapStateToProps  = (state) => ({products:state.products});

export default connect(mapStateToProps, {getProducts, deleteProduct, createProduct})(products);