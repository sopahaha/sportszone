import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardC({ data }) {
  return (
    <Card style={{ minWidth: "18rem", margin: "20px" }}>
      <img src={data.img} alt="" />
      <Card.Body>
        <Card.Title>{data.nome}</Card.Title>
        <Card.Text>{data.descricao}</Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default CardC;
