import React, { Component } from 'react';
import TextProduct from './Discover/textProduct';

class OurModels extends Component {
    constructor(props){
        super(props);
        this.state = {
            OurModelsArray:[
                {
                id: 1,
                img: 'a8.png',
                title: 'Dresses',
                text:['For daytime, short printed',
                       'dresses in a casual style or' ,
                       'formal designs for the office. ',
                       'For evening, long and elegant ',
                       'dresses for special occasions.',
                     ]
                },
                {
                    id: 2,
                    img: 'a9.png',
                    title: 'Scirts',
                    text: ['Midi and maxi skirts are the ',
                            'key proposals of the season.',
                            'In their more daring version in leather',
                            'check, pleated and in tulle, they are ',
                            'ideal for party outfits.'],
                },
                {
                    id: 3,
                    img: 'a10.png',
                    title: 'Shirts',
                    text:['From the most versatile' ,
                        'white shirt to party tops' ,
                        'and blouses that follow the ',
                        'trends of the season: balloon' ,
                        'sleeves, bows in collar or cuffs',
                         'and printed designs.'],
                },
                {
                    id: 4,
                    img: 'a11.png',
                    title: 'Bags',
                    text: ['The accessory that' ,
                            'complements the perfect' ,
                            'outfit. For special occasions',
                            'party or hand bags and for daytime', 
                            'shoulder bags, cross body' ,
                            'or leather backpack.'
                          ]   
                }],
            place: [{
                ImgPlace: 'Img/HomeEdit/p2-3/',
            }],
        }
    }
    render() {
        // console.log(this.state.OurModelsArray);
        return(
            this.state.OurModelsArray.map((image) => {
                // console.log(image.text)
                return (
                    <div key={image.id} className='gavImg'>
                        <div className='d'>
                            <img src={this.state.place[0].ImgPlace + image.img} alt='Sorry'></img>
                        </div>
                        <div className='d'>
                            <TextProduct textArray={image.text} />
                        </div>
                    </div>
                );
            })           
        );
    }
}

export default OurModels;
