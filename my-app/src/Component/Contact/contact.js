import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';


class Contact extends Component {
    render() {
        return (
            <Grid fluid className='con'>
                <Row className='contactPartStyle'>
                    <Col md={4} mdOffset={4} className='titleStyle'>Contact Us</Col>
                </Row>

                <Row>
                    <Col md={6} mdOffset={1}>
                        <Row>
                            <Col md={4} mdOffset={4} className='midTextSize'>
                                Send us a message
                          </Col>
                        </Row>
                        <Row className='forMarginRow'>
                            <Col md={6} className='smTextSize'>
                                First Name<br />
                                <input type='text' placeholder='Enter Name'></input>
                            </Col>
                            <Col md={6} className='smTextSize'>
                                Last Name<br />
                                <input type='text' placeholder='Enter Last Name'></input>
                            </Col>
                        </Row>
                        <Row className='forMarginRow'>
                            <Col md={6} className='smTextSize'>
                                Email<br />
                                <input type='text' placeholder='Enter Name'></input>
                            </Col>
                            <Col md={6} className='smTextSize'>
                                Phone<br />
                                <input type='text' placeholder='Enter Last Name'></input>
                            </Col>
                        </Row>
                        <Row className='forMarginRow'>
                            <Col md={6} className='smTextSize'>
                                Message<br />
                                <textarea placeholder='Write your message'></textarea>
                            </Col>
                        </Row>
                        <Row className='forMarginRow'>
                            <Button className='buttonStyle'>Send</Button>
                        </Row>
                    </Col>
                </Row>

            </Grid>


        );
    }
}
export default Contact

