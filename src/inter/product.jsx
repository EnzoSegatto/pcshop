
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../css/main.css'
import React from 'react';
import '../css/cadastro.css';

function BasicExample() {
  return (
    <div className="cadastro">
      <h1>Cadastrar Produtos</h1>
      <form>
        <div className="form-group">
          <label htmlFor="produtotecnologia">Produto Tecnologia</label>
          <input type="text" id="produtotecnologia" name="produtotecnologia" />
        </div>
        <div className="form-group">
          <label htmlFor="id_produtotecnologia">ID do Produto Tecnologia</label>
          <input type="text" id="id_produtotecnologia" name="id_produtotecnologia" />
        </div>
        <div className="form-group">
          <label htmlFor="descricao">Descrição</label>
          <input type="text" id="descricao" name="descricao" />
        </div>
        <div className="form-group">
          <label htmlFor="marca">Marca</label>
          <input type="text" id="marca" name="marca" />
        </div>
        <div className="form-group">
          <label htmlFor="dataFabricacao">Data de Fabricação</label>
          <input type="date" id="dataFabricacao" name="dataFabricacao" />
        </div>
        <div className="form-group">
          <label htmlFor="quantidadeEstoque">Quantidade em Estoque</label>
          <input type="number" id="quantidadeEstoque" name="quantidadeEstoque" />
        </div>
        <div className="button-group">
          <button type="submit" className="submit-button">Cadastrar</button>
          <button type="reset" className="reset-button">Limpar</button>
        </div>
      </form>
    </div>
  );
}

export default BasicExample;