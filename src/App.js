import React from 'react';
import logo from './logo.svg';
import './App.css';

import Table from './Components/tabla'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      package:[],
      bandera:true,
      especialidadname:''
    }
    this.mostrar=this.mostrar.bind(this);
    this.performLogin=this.performLogin.bind(this);
    this.onChange=this.onChange.bind(this)
    

  }
  mostrar(){
    this.setState({bandera:!this.state.bandera});

  }

  performLogin(elem){
    elem.preventDefault()
    
    var url = 'http://seekhealth.bucaramanga.upb.edu.co/api/especialidades';

    let data = {especialidadname: this.state.especialidadname
                }
                console.log(data);
  
        fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
        }).then(res => res.json())
        .catch(error => console.error('Errors:', error))
         

}
onChange(elem) {
  this.setState({[elem.target.name] : elem.target.value})
}

  render() {
    fetch('http://seekhealth.bucaramanga.upb.edu.co/api/especialidades', { method : 'GET'})
    .then(response => response.json())
    .then( data  =>{
        this.setState({package : data})            
    })

    const info=this.state.package;

    return (
      <div className="container-fluid">
        <button type="button"  onClick={this.mostrar} class="btn btn-danger">Ocultar</button>
      <table className="table" style={{visibility : this.state.bandera? "visible": "hidden"}}>
      <thead className="thead-dark">
          <tr>
          <th scope="col">Post_Id</th>
          <th scope="col">Nombre especialidad</th>
         
          
          </tr>
      </thead>
      <tbody>
      {info.map(lost => (
          
              <Table
              key={lost._id}
              id={lost._id}
              Nom_Pet={lost.especialidadname}
         
            />
          ))}</tbody>
          </table>

          <form onSubmit={this.performLogin} className="col-12">
          <div className="form-group">
          <input type="text" className="form-control" onChange={this.onChange} name="especialidadname" placeholder="Nombre de especialidad" required></input>
          </div>
          <button type="submit"  className="btn btn-primary" >Agregar</button>     
          </form>
          

      </div>

    )
  }
}





