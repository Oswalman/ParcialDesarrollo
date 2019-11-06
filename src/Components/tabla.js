import React, { Component } from 'react'

export default class table extends Component {
    constructor(props){
        super(props);
        this.state={show: false}

    }
   
    
    render() {
        return (
        
    <tr>
      <th scope="row">{this.props.id}</th>
      <td>{this.props.Nom_Pet}</td>
      <td>{this.props.Fecha}</td>
      
    </tr>

        )
    }
}