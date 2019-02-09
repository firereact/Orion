import React, { Component } from 'react';
//This component we can use im woman and in man part to 
class PriceProduct extends Component {
    constructor(props){
        super(props)
        this.state = {
            price:this.props.myPrice
        }
        this.eachPrice=this.eachPrice.bind(this);
    }
    eachPrice(){
        this.props.completeF(this.props.id);
    }
    render() {
        return (
            <div  key={this.props.id} >
                <div onClick={this.eachPrice}>
                        {this.state.price}
                </div>
            </div>
        );
    }
}

export default PriceProduct;

