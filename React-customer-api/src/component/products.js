import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getProducts, deleteProduct, createProduct} from '../store/actions/productsActions'

let newProduct = {name: "Created Name", title: "Created Title"}

 class products extends Component {
    constructor(props){
        super(props);
        this.state = {
            newProduct:{
                name: "",
                title: ""
            }
        }
    }

    componentDidMount() {
        this.props.getProducts();
    }

    componentDidUpdate() {
        this.props.getProducts();
    }

    ondeleteProduct(id) {
        debugger;
        this.props.deleteProduct(id);
    }

    onCreateProduct(newProduct) {
        this.props.createProduct(newProduct);
        this.setState( {
            newProduct: {
                name:"",
                title:""
            } 
        });
    }

    onChangeName = (e) => {
        let value = e.target.value;
        this.setState({
            newProduct:{
                name:value,
                title:this.state.newProduct.title
            } 
        });
    }

    onChangeTitle = (e) => {
        let value = e.target.value;
        this.setState( {
            newProduct: {
                title:value,
                name:this.state.newProduct.name
            } 
        });
    }

    render() {
        const {products} = this.props.products
        console.log(products)
        const {newProduct} = this.state;
        return (<>
            <div>                
                <div>
                <h2>Create product</h2>
                Name: <input type="text" onChange={this.onChangeName} name="productName" value={this.state.newProduct.name}/>
                <br/>
                Title: <input type="text" onChange={this.onChangeTitle} name="productTitle" value={this.state.newProduct.title}/>
                <br/>
                </div>
                <button onClick={()=>this.onCreateProduct(newProduct)}>Create</button>
            </div>
            <div>
                <h3>Products:</h3>
                {products.map(p => 
                     <React.Fragment key={p.id}>
                         <h6 >{p.name} {p.title}</h6> 
                     <button onClick={()=>this.ondeleteProduct(p.id)}>-</button>
                     </React.Fragment>
                )}
            </div>
            </>
        )
    }
}

const mapStateToProps  = (state) => ({products:state.products});

export default connect(mapStateToProps, {getProducts, deleteProduct, createProduct})(products);