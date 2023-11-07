import CardC from "../components/CardC";
import CarouselC from "../components/CarouselC";

const cards = [
  { nome: "Tênis de Corrida", descricao: "Leve e ágil", img: "/tenis.jpg" },
  { nome: "Bola de Basquete", descricao: "Excelente aderência", img:"/bola-baskete[.jpg"},
  { nome: "Raquete de Tênis", descricao: "Potência e controle" ,img:"tenis.webp"},
  { nome: "Luvas de Boxe", descricao: "Proteção e conforto",img:"luva.jpg" },
  { nome: "Prancha de Surfe", descricao: "Deslize nas ondas", img:"prancha.jpg"},
  // { nome: "Bicicleta de Montanha", descricao: "Aventura na trilha" },
  // { nome: "Camiseta de Futebol", descricao: "Conforto e estilo" },
  // { nome: "Skate Elétrico", descricao: "Mobilidade urbana" },
  // { nome: "Raquete de Badminton", descricao: "Jogo de agilidade" },
  // { nome: "Mochila de Hidratação", descricao: "Mantenha-se hidratado" },
];

const Home = () => {
  return (
    <div>
      <CarouselC />
      <div style={{ padding: "80px 0" }}>
        <h2>Nossos produtos</h2>
        <div className="card-group">
          {cards.map((card, i) => (
            <CardC data={card} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
