import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Favorites = () => {
    return (

        <Container className='mt-5'>
            <Row>
                <Col>
                    <h3 className='text-center mb-5'>Favoritos</h3>
                </Col>
            </Row>
            <Row>
                <Card style={{ width: '18rem', marginLeft: '2rem' }}>
                    <Card.Img variant="top" src="./public/img/roma.png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button style={{color: 'black'}} variant="link">Link</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginLeft: '13rem' }}>
                    <Card.Img variant="top" src="./public/img/roma.png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button style={{color: 'black'}} variant="link">Link</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginLeft: '10rem' }}>
                    <Card.Img variant="top" src="./public/img/roma.png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button style={{color: 'black'}} variant="link">Link</Button>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Col>
                    <Button style={{color: 'black', marginLeft: '35rem'}} className='ml-5 mt-5' variant="link">"Ver mas favoritos"</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Favorites
