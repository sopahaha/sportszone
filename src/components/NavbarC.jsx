import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Dribbble } from "react-bootstrap-icons";

function NavBarC() {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#b3b3b3", flexDirection: "column" }}
    >
      <Dribbble size={100}/>
      <Container>
        <Navbar.Brand href="/">
          <h1>SportsZone</h1>
        </Navbar.Brand>
        <div className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Entrar</Nav.Link>
            <Nav.Link href="/cadastro">Cadastrar Produto</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBarC;
