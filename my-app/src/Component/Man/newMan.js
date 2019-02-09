import React, { Component } from 'react';
import ManAndWomanImg from './manImg';

class NewMan extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props.completeF)
        this.state ={
            arrImages: this.props.arrImages,
            place:this.props.place,
            completeF:this.props.completeF
        }
        // console.log(this.state)
    }
    render() {
        return (
            <div className='b '>
                <div className='midText' >
                    NEW NOWMeet our weekly new arrivals. Wear them now, thank us later #ORIONNewNow
                </div>
                <div className='imgCentre'>
                    <ManAndWomanImg 
                        arrImages={this.state.arrImages}
                        place={this.state.place}
                        completeF={this.state.completeF}
                        />
                </div>
            </div>
        );
    }
}
export default NewMan;


