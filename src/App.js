import React, { Component } from 'react';
import './App.css';
// import { Button } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      title: "CRUD Motorista",
      act: 0,
      index: '',
      datas: []
    }
  }

  componentDidMount(){
    this.refs.mot_cpf.focus()
  }

  fSubmit = (e) =>{
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let cpf = this.refs.mot_cpf.value;
    let rg = this.refs.mot_rg.value;
    let nome = this.refs.mot_nome.value;
    let renach = this.refs.mot_renach.value;
    let telefone = this.refs.mot_telefone.value;
    let status = this.refs.mot_status.value;
    let cep = this.refs.mot_cep.value;
    let rua = this.refs.mot_rua.value;
    let bairro = this.refs.mot_bairro.value;

    if(this.state.act === 0){
      let data = {
        cpf, rg, nome, renach, telefone, status, cep, rua, bairro
      }
      datas.push(data);
    }else{
      let index = this.state.index;
      datas[index].cpf = cpf;
      datas[index].rg = rg;
      datas[index].nome = nome;
      datas[index].renach = renach;
      datas[index].telefone = telefone;
      datas[index].status = status;
      datas[index].cep = cep;
      datas[index].rua = rua;
      datas[index].bairro = bairro;
    }

    this.setState({
      datas: datas,
      act: 0
    })

    this.refs.myForm.reset();
    this.refs.mot_cpf.focus();
  }

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i, 1);
    this.setState({
      datas: datas
    })

    this.refs.myForm.reset();
    this.refs.mot_cpf.focus();
  }

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.mot_cpf.value = data.cpf;
    this.refs.mot_rg.value = data.rg;
    this.refs.mot_nome.value = data.nome;
    this.refs.mot_renach.value = data.renach;
    this.refs.mot_telefone.value = data.telefone;
    this.refs.mot_status.value = data.status;
    this.refs.mot_cep.value = data.cep;
    this.refs.mot_rua.value = data.rua;
    this.refs.mot_bairro.value = data.bairro;

    this.setState({
      act: 1,
      index: i
    })

    this.refs.mot_cpf.focus();
  }

  render(){
    let datas = this.state.datas;
    return (
      <React.Fragment>
        <div className="App">
          <h2>{this.state.title}</h2>
          <form ref="myForm" className="myForm">
            <input type="text" ref="mot_cpf" placeholder="CPF" className="formField"></input>
            <input type="text" ref="mot_rg" placeholder="RG" className="formField"></input>
            <input type="text" ref="mot_nome" placeholder="Nome" className="formField"></input>
            <input type="text" ref="mot_renach" placeholder="Renach" className="formField"></input>
            <input type="text" ref="mot_telefone" placeholder="Telefone" className="formField"></input>
            <input type="text" ref="mot_status" placeholder="Status do Motorista" className="formField"></input>
            <input type="text" ref="mot_cep" placeholder="CEP" className="formField"></input>
            <input type="text" ref="mot_rua" placeholder="Rua" className="formField"></input>
            <input type="text" ref="mot_bairro" placeholder="Bairro" className="formField"></input>
            <button onClick={this.fSubmit} className="myButton">Enviar</button>
          </form>
          <pre>
            {
              datas.map((data, i) =>
              <li key={i} className="myList">
                {i+1}. {data.cpf}, {data.rg}, {data.nome}, {data.renach}, {data.telefone}, {data.status},
                {data.cep}, {data.rua}, {data.bairro},
                <button onClick={()=>this.fRemove(i)} className="myListButton">Remover</button>
                <button onClick={()=>this.fEdit(i)} className="myListButton">Editar</button>
              </li>
            )}
          </pre>
        </div>
      </React.Fragment>
      
      
    );
  }
  
}

export default App;
