import React, { Component } from 'react';
import ManAndWomanImg from '../Man/manImg';
class NewWoman extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrImages: this.props.arrImages,
            place: this.props.place,
            completeF: this.props.completeF
        }
    }
    render() {
        return (
            <div>
                <div>
                    <div >
                        <img src='./Img/Part3-New/woman/p3-1/b1.png' alt='Sorry' className='newPartHeadImg'></img>
                    </div>
                    <div className='imgCentre'  >
                        <ManAndWomanImg
                            arrImages={this.state.arrImages}
                            place={this.state.place}
                            completeF={this.state.completeF}
                        />
                    </div>
                </div>
            </div>   
        );
    }
}

export default NewWoman;









// ****Es jnjelu ktor klini bayc im@ petqa vercnel u nkarel myus ejum
// let arr =[];
// this.state.imagesWoman.map( (element) => {
//         if (outId !== element.id) {
//             arr.push(element);
//         }                
// })
// console.log(arr);
// this.setState({
//     imagesWoman:arr,
// })
