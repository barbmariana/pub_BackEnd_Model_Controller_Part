import React from "react";

class Home extends React.Component {

    constructor(){
        super()
        this.state = {
            funcionario: []
        }
    this.getFuncionario = this.getFuncionario.bind(this)
    }
    
   async getFuncionario() {
      const api = await fetch("http://localhost:4200/funcionarios");
      let data =  await api.json()
      this.setState({funcionario:data})
    }



  render() {
    return (

      <div>
        <select name="select" id="">
            <option value="Produtos">Produtos</option>
            <option value="Estoque">Estoque</option>
            <option value="Funcionarios">Funcionarios</option>
            <option value="Unidades">Unidades</option>
            <option value="Categoria">Categoria</option>
        </select>
        <button onClick={this.getFuncionario}>Listar</button>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Nome</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {
                this.state.funcionario.map((item)=>{
                 <div>
                    <p>{item.id_funcionario}</p> 
                 </div>   
                })
              }
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
