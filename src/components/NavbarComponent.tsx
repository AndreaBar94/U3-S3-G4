import Nav from 'react-bootstrap/Nav';

function NavbarComponent() {
    return (
        <Nav
        className="navbar justify-content-center p-3 bg-opacity-50"
        activeKey="/home"
        >
            <Nav.Item>
                <Nav.Link className="navBtn" href="#" id="home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="navBtn" href="#">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="navBtn" href="#">Browse</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default NavbarComponent;