import React from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const Search = () => {
    return (
        <>

            <Row className='row mt-3 search'>
                <Container>
                    <Row>
                        <Col md={{ span: 5, offset: 5 }}>
                            <Image src="./public/img/logoReservalo.png" rounded />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                        <Col><Button variant="primary">Primary</Button></Col>
                    </Row>
                </Container>
            </Row>
        </>
    )

}

export default Search
