import '../css/cima.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menu() {
  const Logo = 'https://www.canva.com/design/DAFze_8ho5I/AWdj-Bf8kndS4TRQ1u4BvA/view?utm_content=DAFze_8ho5I&utm_campaign=designshare&utm_medium=link&utm_source=editor'


  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <div className="head"><img width={100} height={100} src={Logo}/></div>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/produtos">Produtos</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

   export default Menu
   