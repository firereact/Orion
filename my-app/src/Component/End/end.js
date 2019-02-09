import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';


class End extends Component {
    render() {
        return (
            <Grid fluid className='endStyle'>
                <Row>
                    <Col md={3} mdOffset={1} className="logoStyleEnd" >
                        Orion
                    </Col>
                    <Col md={2} >
                        <Row>
                            <a href='https://www.facebook.com' rel="noopener noreferrer" target='_blank'> <Col md={6} className='f'></Col></a>
                            <a href='https://www.instagram.com' rel="noopener noreferrer" target='_blank'><Col md={6} className='i'></Col></a>
                        </Row>
                        <Row>
                            <a href='https://www.youtube.com/watch?v=UnKJL_ifwkk' rel="noopener noreferrer" target='_blank'><Col md={6} className='y'></Col></a>
                            <a href='https://twitter.com' rel="noopener noreferrer" target='_blank'><Col md={6} className='t'></Col></a>
                        </Row>
                    </Col>
                    <Col md={1} className='destiText'>
                        <Row><h4>NEW NOW</h4></Row>
                        <Row>Rust ColoursNew!</Row>
                        <Row>Animal Print</Row>
                        <Row>Essential prices</Row>
                        <Row>Trousers</Row>
                        <Row>Cardigans and sweaters</Row>
                        <Row>Shirts</Row>
                        <Row>T-shirts and tops</Row>
                        <Row>Jumpsuits</Row>
                        <Row>Dresses</Row>
                    </Col>
                    <Col md={2} mdOffset={1} className='destiText'>
                        <Row><h4>TYPES OF PRODUCT</h4></Row>
                        <Row>Shoes</Row>
                        <Row>Clothers</Row>
                        <Row>Acsessores</Row>
                        <Row>Bags</Row>
                    </Col>
                    <Col md={1} className='destiText'>
                        <Row>
                            <a href='#up'><Col md={12} className='logoForUp'></Col></a>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
export default End

