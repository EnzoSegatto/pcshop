import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/cima.css';

function Menu() {
  const Logo = 'https://cdn.discordapp.com/attachments/826586755229810688/1171415213350846575/Design_sem_nome.png?ex=655c986e&is=654a236e&hm=19cb180b1a96ceb7b0ddd1ee58180a58c75bd252e4809b8ded1eb67c52263a5b&';

  return (
    <div className="header">
      <div className="logo-container">
        <img
          src={Logo}
          alt="Logo"
          width={100}
          height={100}
        />
      </div>
      <div className="links">
        <Navbar bg="" expand="lg" variant="dark">
          <Container>
            <Nav className="ml-auto">
              <Nav.Link href="/produtos">Cadastrar</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/">Inicio</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Menu;
