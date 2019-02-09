import React, { Component } from 'react';
// Stex kpahem tvyalner@ hima bayc piti poxvi vor kods karch lini
class Discover extends Component {
    render() {
        return (
            <div className='disStyle'>
                <div className='titleStyle'>
                    DISCOVER
                    </div>
                <div className='backDiv' >
                    <div className='d titleWoman forAllTitle'>Woman</div>
                    <div className='d titleMan forAllTitle'>Man</div>
                </div>
                <div className='backDivNewNow' >
                    <div className='text forAllTitle' >
                        New Now<br/>
                    Meet our weekly new arrivals. Wear them now, thank us later #MANGONewNow
                    </div>
                </div>
                <div>
                    <div className='d imgWoman1'></div>
                    <div className='d imgWoman2'></div>
                </div> 
            </div>

        );
    }
}

export default Discover;
