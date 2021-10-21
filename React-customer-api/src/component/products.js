import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getProducts, deleteProduct, createProduct, updateProduct} from '../store/actions/productsActions'

let newProduct = {name: "Created Name", title: "Created Title"}

 class products extends Component {
    constructor(props){
        super(props);
        this.state = {
            newProduct:{
                id: 0,
                name: "", // лучше undefined
                title: "",
                renderUpdateComp: false
            },
            renderUpdateComp:false
        }
    }

    componentDidMount() {
        this.props.getProducts();
    }

    ondeleteProduct(id) {
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

    onEditClick() {
        this.state.renderUpdateComp ? this.setState({renderUpdateComp: false}) : this.setState({renderUpdateComp: true});
    }

    render() {
        const {products} = this.props.products;
        console.log(products);
        const {newProduct} = this.state;
        // const {renderUpdateComp} = this.state;
        return (<>
            <div>                
                <div>
                <h2>Create product</h2>
                Name: <input type="text" onChange={this.onChangeName} name="productName" value={this.state.newProduct.name}/>
                <br/>
                Title: <input type="text" onChange={this.onChangeTitle} name="productTitle" value={this.state.newProduct.title}/>
                <br/>
                </div>
                <button onClick={()=>this.onCreateProduct(this.state.newProduct)}>Create</button>
            </div>
            <div>
                <h3>Products:</h3>
                {products.map(p => 
                     <React.Fragment key={p.id}>
                         <h6 >{p.name} {p.title}</h6> 
                     <button onClick={()=>this.ondeleteProduct(p.id)}>Delete</button>
                     <button onClick={()=>this.onEditClick()}>Edit</button>
                     <EditComponent renderUpdateComp={this.state.renderUpdateComp}/>
                     </React.Fragment>
                )}
            </div>
            </>
        )
    }
}

class EditComponent extends React.Component{

    constructor(props){
        super(props);
    }
    render(){

        if(this.props.renderUpdateComp){
            return (
                <div>True</div>
            );
        }
        else{
            return "";
        }

        // return <>
        //     {this.props.renderUpdateComp ? "true" : ""}
        // </>;
    }
}

const mapStateToProps  = (state) => ({products:state.products});

export default connect(mapStateToProps, {getProducts, deleteProduct, createProduct, updateProduct})(products);