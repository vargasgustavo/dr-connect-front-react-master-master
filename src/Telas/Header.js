import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../images/logo.svg'
import '../css/Header.css'

const Header = () => {
    return (
        <div class="header">
            {/* <Navbar bg="white" variant="default">
                <Navbar.Brand href="/"><img src={Logo} alt='' /></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/" style={{
                        "color": "#1d1d1d"
                    }}>Home</Nav.Link>
                    <Nav.Link href="/nossos-servicos" style={{
                        "color": "#1d1d1d"
                    }}>Nossos serviços</Nav.Link>
                    <Nav.Link href="/cadastre-se"style={{
                        "color": "#1d1d1d"
                    }}>Cadastre-se</Nav.Link>
                </Nav>
            </Navbar> */}
        </div >
    )
}

export default Header;