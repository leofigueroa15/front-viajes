import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormLabel from 'react-bootstrap/esm/FormLabel';

const Information = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" className='mt-5 mb-0'>
                <Container>
                    <Nav>
                        <Navbar.Text>
                            <Row>
                                <Col>
                                    <Image src="./public/img/logoReservalo.png" roundedCircle />
                                </Col>
                                <Col>
                                    <FormLabel style={{ display: 'block' }}>
                                        EXPANDE TU PRESENCIA ONLINE
                                    </FormLabel>
                                    <FormLabel>
                                        Gracias a nuestro sistema de reserva, podras mejorar tu desempeño y verlo reflejado en las ganacias de tu negocio.
                                    </FormLabel>
                                </Col>
                                <Col>
                                    <Image src="./public/img/logoReservalo.png" roundedCircle />
                                </Col>
                                <Col>
                                    <FormLabel style={{ display: 'block' }}>
                                        EXPANDE TU PRESENCIA ONLINE
                                    </FormLabel>
                                    <FormLabel>
                                        Gracias a nuestro sistema de reserva, podras mejorar tu desempeño y verlo reflejado en las ganacias de tu negocio.
                                    </FormLabel>
                                </Col>
                                <Col>
                                    <Image src="./public/img/logoReservalo.png" roundedCircle />
                                </Col>
                                <Col >
                                    <FormLabel style={{ display: 'block' }}>
                                        EXPANDE TU PRESENCIA ONLINE
                                    </FormLabel>
                                    <FormLabel>
                                        Gracias a nuestro sistema de reserva, podras mejorar tu desempeño y verlo reflejado en las ganacias de tu negocio.
                                    </FormLabel>
                                </Col>
                            </Row>
                        </Navbar.Text>

                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Information
