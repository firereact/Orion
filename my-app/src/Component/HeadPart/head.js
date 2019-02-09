import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './headStyle.css'
import NewMan from '../Man/newMan';
import SecondPage from '../Woman/secondPage';
import NewWoman from '../Woman/newWoman';
import Home from '../Home/home';
import Contact from '../Contact/contact';
import End from '../End/end';


// Router

import { Router, Route, Link } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();


// Stex kpahem tvyalner@ hima bayc piti poxvi vor kods karch lini
class Head extends Component {
    constructor(props){
        super(props);
        this.state = {
            eachImgData: [{
                id: null,
                headImg: null,
                price: null,
                img2: null,
                img3: null,
            }],
            //Mans array
            imagesMan: [
                {
                    id: 11,
                    headImg: '1.1.png',
                    price: '89000',
                    img2: '1.1-1.png',
                    img3: '1.1-2.png',
                },
                {
                    id: 22,
                    headImg: '1.2.png',
                    price: '16750',
                    img2: '1.2-1.png',
                    img3: '1.2-2.png',
                },
                {
                    id: 33,
                    headImg: '2.1.png',
                    price: '29750',
                    img2: '2.1-1.png',
                    img3: '2.1-2.png',
                },
                //stugum anelu hamar
                {
                    id: 44,
                    headImg: '2.2.png',
                    price: '50650',
                    img2: '2.2-1.png',
                    img3: '2.2-2.png',
                },
                {
                    id: 55,
                    headImg: '3.1.png',
                    price: '36850',
                    img2: '3.1-1.png',
                    img3: '3.1-2.png',
                },
                {
                    idm: 66,
                    headImg: '3.2.png',
                    price: '50650',
                    img2: '3.2-1.png',
                    img3: '3.2-2.png',
                }],
            placeManImg: [{
                ImgPlace: 'Img/Part3-New/man/p3-3/',
            }],
            imagesWoman: [
                {
                    id: 1,
                    headImg: '1.png',
                    price: '50980',
                    img2: '1.1.png',
                    img3: '1.2.png',
                },
                {
                    id: 2,
                    headImg: '2.png',
                    price: '56000',
                    img2: '2.1.png',
                    img3: '2.2.png',
                },
                {
                    id: 3,
                    headImg: '3.png',
                    price: '12987',
                    img2: '3.1.png',
                    img3: '3.2.png',
                }
            ],
            placeWomanImg: [{
                ImgPlace: 'Img/Part3-New/woman/p3-2/',
            }],
        }
        this.complete = this.complete.bind(this);
    }
    complete(outId) {
        if(outId > 10 && outId < 99){
            this.state.imagesMan.map((element) => {
                if (outId === element.id) {
                    this.setState({
                        eachImgData: [{
                            id: element.id,
                            headImg: element.headImg,
                            price: element.price,
                            img2: element.img2,
                            img3: element.img3,
                            ImgPlace: 'Img/Part3-New/man/p3-3/',
                        }],
                    })
                }
                return element
            })
        }else{
            this.state.imagesWoman.map((element) => {
                if (outId === element.id) {
                        this.setState({
                            eachImgData: [{
                                id: element.id,
                                headImg: element.headImg,
                                price: element.price,
                                img2: element.img2,
                                img3: element.img3,
                                ImgPlace: 'Img/Part3-New/woman/p3-2/',
                            }],
                        })                    
                }
                return element
        })

        }
        
    }
    render() {
        return (
            <Router history={history} >
            <div>
                <Grid fluid className='allHeadPart' id='up' >
                    <Row>
                        <Col md={2} mdOffset={1} className="logoStyle ">ORION</Col>
                        <Col md={3} mdOffset={1} >
                            <Row>
                                    <Link to='/' >
                                        <Col md={3} className='headText'>Home</Col>
                                    </Link>
                                    <Link to='/woman' >
                                        <Col md={3} className='headText'>Woman</Col>
                                    </Link>
                                    <Link to='/man' >
                                        <Col md={3} className='headText'>Man</Col>
                                    </Link>
                                    <Link to='/edits' >
                                        <Col md={3} className='headText'>Edits</Col>
                                    </Link>
                            </Row>
                        </Col>
                        <Col md={2} mdOffset={3}>
                            <Row>
                                    <Link to='/contact1' >
                                        <Col md={6} className='headText'>Contact</Col>
                                    </Link>
                                <Col md={6} className='headText'>Sign In</Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
                <div> 
                        <Route exact path='/' component={
                            () => (
                                <div>
                                    <Home />
                                </div>
                            )
                        } />
                        <Route exact path='/contact1' component={
                            () => (
                                <div>
                                    <Contact />
                                </div>
                            )
                        } />
                        <Route exact path='/man' 
                               component={
                                () => (
                                    <div>
                                        <NewMan
                                            arrImages={this.state.imagesMan}
                                            place={this.state.placeManImg}
                                            completeF={this.complete}
                                        />  
                                        <div>
                                            <SecondPage eachData={this.state.eachImgData} />
                                        </div>                            
                                    </div>
                                )
                                } 
                        />
                        <Route exact path='/woman'
                            component={
                                () => (
                                    <div>
                                        <NewWoman
                                            arrImages={this.state.imagesWoman}
                                            place={this.state.placeWomanImg}
                                            completeF={this.complete}
                                        />
                                        <div>
                                            <SecondPage eachData={this.state.eachImgData} />
                                        </div>
                                    </div>
                                )
                            }
                        />
                    <End /> 
                </div>
            </div>
            </Router>

        );
    }
}

export default Head;


