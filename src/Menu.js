import React, {Component} from 'react';
import Platos from './Platos';
import Bebidas from './Bebidas';
import Pedidos from './Pedidos';
 

 class Menu extends Component{
 	render(){
 		return(
 			<div className="container">
 			    <div className="jumbotron">
 			        <h2>La Carabana</h2>
 			    </div>
 			    <Platos/>
 			    <Pedidos/>
 			</div>
 			)
 	}
 }

 export default Menu;

 