import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" className="flex" variant="dark" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Proshop</Navbar.Brand>
                    </LinkContainer>
                    <Nav className="ml-auto">
                        <LinkContainer to="/">
                            <Nav.Link >Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/cart">
                            <Nav.Link >Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/signin">
                            <Nav.Link >Sign in</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
