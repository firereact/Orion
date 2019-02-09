import React, { Component } from 'react';
import ShoppingCart from './shoppingCart';

class SecondPage extends Component {
    render() {
        // console.log(this.props.eachData[0]);
        return (
            <div className='styleSecondPage'>
                <div className='disInBlock' >
                    <img src={`${this.props.eachData[0].ImgPlace}` + this.props.eachData[0].img2} alt="Sorry" />
                    <img src={`${this.props.eachData[0].ImgPlace}` + this.props.eachData[0].img3} alt="Sorry" />
                </div>
                <div className='disInBlock'>
                    <ShoppingCart data={this.props.eachData[0].price}/>
                </div>
            </div>
        );
    }
}

export default SecondPage;

