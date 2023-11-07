import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Dribbble } from "react-bootstrap-icons";

function NavBarC() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#b3b3b3" }}>
      <Container>
        <Navbar.Brand href="#home">
          <Dribbble />
          SportsZone
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Entrar</Nav.Link>
            <Nav.Link href="/cadastro">Cadastrar Produto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarC;
