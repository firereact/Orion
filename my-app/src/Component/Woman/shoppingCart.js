import React, { Component } from 'react';

class ShoppingCart extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 1,
        }
        this.plusValue=this.plusValue.bind(this);
        this.minusValue = this.minusValue.bind(this);
        this.countPayMany = this.countPayMany.bind(this);

    }
    plusValue(){
        let durationCount = this.state.count;
        this.setState({
            count: ++durationCount,
        })
    }
    minusValue(){
        let durationCount = this.state.count;
        if (durationCount > 1){
            this.setState({
                count: --durationCount,
            })
        }
    }

    countPayMany(){
        // console.log(this.props.data);
        let sum = this.state.count * Number(this.props.data);
        return sum;
    }
    render() {
        return (
            <div className='styleShoppingCart'>
                <div className='textShopCart'>
                     Color : This is for color<br/>
                     Price : {this.props.data} AMD<br/>
                     Size : <select>
                                <option>xs</option>
                                <option>s</option>
                                <option>m</option>
                            </select><br/>
                    Count : <input type='button' value='-' className='buttonStyle' onClick={this.minusValue}/> 
                                     {this.state.count} 
                            <input type='button' value='+' className='buttonStyle' onClick={this.plusValue}  />
                </div>
                <div className='stylePay'>
                     You must pay: {this.countPayMany()} AMD
                </div>
                <div>
                    <input type='button' value='Buy' className='buyButStyle'/>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;

