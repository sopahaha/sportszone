import { useState } from "react";
import { Button } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const entrar = (e) => {
    e.preventDefault();
    console.log(email, senha);
  };

  return (
    <div className="login-container">
      <h2>Entrar</h2>
      <form onSubmit={entrar}>
        <label>
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control" // Adicione a classe do React Bootstrap
          />
        </label>
        <label>
          <span>Senha</span>
          <input
            type="password"
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value);
            }}
            className="form-control" // Adicione a classe do React Bootstrap
          />
        </label>
        <Button type="submit" className="btn btn-primary">Entrar</Button> {/* Estilizado como um botão primário do Bootstrap */}
      </form>
    </div>
  );
};

export default Login;
