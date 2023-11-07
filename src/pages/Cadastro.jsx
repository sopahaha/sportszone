import  { useState } from "react";
import { Button } from "react-bootstrap";
import "./ProductForm.css"; 

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const cadastrarProduto = (e) => {
    e.preventDefault();
    console.log("Nome do Produto: " + productName);
    console.log("Descrição do Produto: " + productDescription);
  };

  return (
    <div className="product-form-container">
      <h2>Cadastrar Produto</h2>
      <form onSubmit={cadastrarProduto}>
        <label>
          <span>Nome do Produto</span>
          <input
            type="text"
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
            className="form-control"
          />
        </label>
        <label>
          <span>Descrição do Produto</span>
          <textarea
            value={productDescription}
            onChange={(e) => {
              setProductDescription(e.target.value);
            }}
            className="form-control"
          />
        </label>
        <Button type="submit" className="btn btn-primary">Cadastrar Produto</Button>
      </form>
    </div>
  );
};

export default ProductForm;
