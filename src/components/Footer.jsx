import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light" style={{padding:"20px"}}>
      <Container>
        <Row>
          <Col md={4}>
            <h4>Sobre a SportsZone</h4>
            <p>
              A SportsZone é sua loja de esportes de confiança, oferecendo uma
              ampla variedade de produtos esportivos de alta qualidade para
              atletas de todos os níveis.
            </p>
          </Col>
          <Col md={4}>
            <h4>Links Rápidos</h4>
            <ul>
              <li>
                <a href="#">Página Inicial</a>
              </li>
              <li>
                <a href="#">Produtos</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h4>Redes Sociais</h4>
            <ul>
              <li>
                <a href="#">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">
              © 2023 SportsZone. Todos os direitos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
