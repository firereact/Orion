import React, { Component } from 'react';

class TextProduct extends Component {
    render() {
        return (
            this.props.textArray.map((textImg , index) => {
                return (
                    <div key={index} className='textProduct' >
                        {textImg} <br />
                    </div>
                );
            })
        );
    }
}

export default TextProduct;



