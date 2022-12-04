import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Item List</Navbar.Brand>
            <Nav className="me-auto nav_bar_wrapper">
              <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
              <Link to="/add" style={{ textDecoration: 'none' }}>Add Products</Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
