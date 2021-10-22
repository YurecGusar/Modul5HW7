import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getProducts, deleteProduct, createProduct, updateProduct} from '../store/actions/productsActions'

 class products extends Component {
    constructor(props){
        super(props);
        this.state = {
            testProducts:[],
            newProduct:{
                id: 0,
                name: "", // лучше undefined
                title: ""
            },
            editProduct:{
                id: 0,
                name: "", // лучше undefined
                title: ""
            },
            renderUpdateComp:false
        };
        debugger;
    }

    componentDidMount() {
        this.props.getProducts();
    }

    onCreateProduct(newProduct) {
        if(newProduct.name != "" || newProduct.title != ""){
            this.props.createProduct(newProduct);
        }
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
        const {products} = this.props.products;
        console.log(products);
        return (<>
            <div>                
                <div>
                <h2>Create product</h2>
                <div>Name: <input type="text" onChange={this.onChangeName} name="productName" value={this.state.newProduct.name}/></div>
                <div>Title: <input type="text" onChange={this.onChangeTitle} name="productTitle" value={this.state.newProduct.title}/></div>
                </div>
                <button onClick={()=>this.onCreateProduct(this.state.newProduct)}>Create</button>
            </div>
            <div>
                <h3>Products:</h3>
                {products.map(p => <div>
                    <React.Fragment key={p.id}>
                        <UpdateProduct product={p} renderUpdateComp={this.state.renderUpdateComp} updateProduct={this.props.updateProduct} deleteProduct={this.props.deleteProduct}/>
                    </React.Fragment>
                    </div>
                )}
            </div>
            </>
        )
    }
}

class UpdateProduct extends React.Component{
    constructor(props){
        super(props);
        this.state={
            renderUpdateComp:false,
            newProduct: this.props.product,
            oldProduct: this.props.product,
            cancleUpdate: false
        }
    }

    onEditClick() {
        this.state.renderUpdateComp ? this.setState({renderUpdateComp: false}) : this.setState({renderUpdateComp: true});
        this.setState({oldProduct: this.state.newProduct});
    }

    onUpdate(product){
        this.props.updateProduct(product);
        this.onEditClick();
    }

    onChangeName = (e) => {
        let value = e.target.value;
        this.setState({
            newProduct:{
                name:value,
                title:this.state.newProduct.title,
                id:this.state.newProduct.id
            } 
        });
    }

    onChangeTitle = (e) => {
        let value = e.target.value;
        this.setState( {
            newProduct: {
                title:value,
                name:this.state.newProduct.name,
                id:this.state.newProduct.id
            } 
        });
    }

    ondeleteProduct(id) {
        this.props.deleteProduct(id);
    }

    onCancleClick(){
        this.onEditClick();
        this.setState({newProduct: this.state.oldProduct})
    }

    render(){
        if(this.state.renderUpdateComp == true){
            return <>
            <div><input type="text" value={this.state.newProduct.name} onChange={this.onChangeName}></input></div>
            <input type="text" value={this.state.newProduct.title} onChange={this.onChangeTitle}></input>
            <button onClick={()=>this.onCancleClick()}>Cancle</button>
            <button onClick={()=>this.onUpdate(this.state.newProduct)}>Edit</button>
            </>;
        }
        else{
            return <>
                <div>{this.state.newProduct.name}</div>
                <div>{this.state.newProduct.title}</div>
                <button onClick={()=>this.onEditClick()}>Edit</button>
                <button onClick={()=>this.ondeleteProduct(this.state.newProduct.id)}>Delete</button>
        </>
        }
    }
}

const mapStateToProps  = (state) => ({products:state.products});
export default connect(mapStateToProps, {getProducts, deleteProduct, createProduct, updateProduct})(products);