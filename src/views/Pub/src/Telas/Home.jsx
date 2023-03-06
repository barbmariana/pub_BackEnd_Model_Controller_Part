import React from "react";

class Home extends React.Component {

  constructor() {
    super()

    
    this.state = {
      select: "",
      funcionario: [],
      unidade:[],
      produto:[],
      fornecedor:[],
      categoria:[],
      estoque:[],
    }
    this.getFuncionario = this.getFuncionario.bind(this)
    this.getCategoria = this.getCategoria.bind(this)
    this.getEstoque = this.getEstoque.bind(this)
    this.getFornecedor = this.getFornecedor.bind(this)
    this.getProduto = this.getProduto.bind(this)
    this.getUnidade = this.getUnidade.bind(this)
    this.Verificacao = this.Verificacao.bind(this)
  }

  Verificacao(){
    
    console.log(this.state.select);
    switch (this.state.select) {
      case "Funcionarios":
          this.getFuncionario()
        break;
    
      default:
        break;
    }
  }

  async getFuncionario() {
    const api = await fetch("http://localhost:4200/funcionarios");
    let data = await api.json()
    this.setState({ funcionario: data })
  }
  
  async getUnidade() {
    const api = await fetch("http://localhost:4200/unidade");
    let data = await api.json()
    this.setState({ unidade: data })
  }
  async getFornecedor() {
    const api = await fetch("http://localhost:4200/fornecedor");
    let data = await api.json()
    this.setState({ fornecedor : data })
  }
  async getCategoria() {
    const api = await fetch("http://localhost:4200/categoria");
    let data = await api.json()
    this.setState({ categoria: data })
  }
  async getEstoque() {
    const api = await fetch("http://localhost:4200/estoque");
    let data = await api.json()
    this.setState({ estoque: data })
  }
  async getProduto() {
    const api = await fetch("http://localhost:4200/produto");
    let data = await api.json()
    this.setState({ produto : data })
  }

  
  
  



  render() {
    return (

      <div className="container">
        <div className="col-12">
        <div className="row">
          <select name="select" id="idSelect" onChange={(e)=>{
            this.setState({select: e.target.value })
          }} >
              <option value="Produtos">Produtos</option>
              <option value="Estoque">Estoque</option>
              <option value="Funcionarios">Funcionarios</option>
              <option value="Unidades">Unidades</option>
              <option value="Categoria">Categoria</option>
          </select> 
        </div>
        
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Id</th>
              <th scope="col">Nome</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody> 
              {
                this.state.funcionario.map((item) => {
                  return (
                    <tr key={item.id_funcionario}> 
                      <th scope="row" >1</th>
                      <td>{item.id_funcionario}</td>
                      <td>{item.nome_funcionario}</td>
                      <td>{item.email_funcionario}</td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
        <button onClick={this.Verificacao}>Listar</button>
        </div>
      </div>
    );
  }
}

export default Home;
