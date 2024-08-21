import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const CarouselCard = () => {
    return (

        <>
            <Carousel className='mt-5' style={{ marginLeft: '5rem' }}>
                <Carousel.Item interval={10000}>
                    <CardGroup>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./public/img/roma.png" />
                            <Card.Body>
                                <Button variant="primary">Roma</Button>
                            </Card.Body>

                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./public/img/roma.png" />
                            <Card.Body>
                                <Button variant="primary">Roma</Button>
                            </Card.Body>

                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./public/img/roma.png" />
                            <Card.Body>
                                <Button variant="primary">Roma</Button>
                            </Card.Body>

                        </Card>
                    </CardGroup>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <CardGroup>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./public/img/roma.png" />
                            <Card.Body>
                                <Button variant="primary">Roma</Button>
                            </Card.Body>

                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./public/img/roma.png" />
                            <Card.Body>
                                <Button variant="primary">Roma</Button>
                            </Card.Body>

                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./public/img/roma.png" />
                            <Card.Body>
                                <Button variant="primary">Roma</Button>
                            </Card.Body>

                        </Card>
                    </CardGroup>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselCard
