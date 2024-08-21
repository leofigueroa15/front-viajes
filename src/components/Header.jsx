import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


const Header = () => {
    return (
        <>

            <Navbar expand="lg" className="bg-body-tertiary py-5 header">
                <Container>
                    <Navbar.Brand href="#"></Navbar.Brand>
                </Container>
            </Navbar>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#">viajando.com</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Button variant="outline-success">Login</Button>
                            <Button variant="outline-success">Registrate</Button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
