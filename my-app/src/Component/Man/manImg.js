import React, { Component } from 'react';
import PriceProduct from '../Woman/price';

class ManAndWomanImg extends Component {
    render() {
        // console.log( this.props);
        return (
            this.props.arrImages.map((image) => {
                // console.log(image.id);
                return (
                    <div key={image.id} className='manImgStyle'>
                        <div>
                            <img src={this.props.place[0].ImgPlace + image.headImg} alt="Sorry" />
                        </div>
                        <div className='forPrice'>
                            <PriceProduct myPrice={image.price} completeF={this.props.completeF} id={image.id} />
                        </div>
                    </div>   
                );
            })
        );
    }
}

export default ManAndWomanImg;