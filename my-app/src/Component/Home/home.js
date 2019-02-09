import React, { Component } from 'react';
import HomeHead from './home1';
import Discover from './Discover/discover';
import OurModels from './ourModels';



class Home extends Component {
    render() {
        return (
             <div>
                <HomeHead />
                <Discover />
                    <div className='d'>
                        <div className='styleGavTitle'>
                             Our  <br />
                            garments
                        </div>
                        <div className='styleOurModelsDiv'>
                            <OurModels />
                        </div>
                    </div>
            </div> 

        );
    }
}

export default Home;
