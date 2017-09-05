import {extendObservable} from 'mobx';

class TiendaController {
	constructor(){
		extendObservable(this,
		{
			platillos: [
			{nombre: "1/8 de Plato",
			    descripcion: "plato muy rico",
			    precio: 7.00,
			    cantidad: 0},
			{nombre: "1/4 de Plato",
			    descripcion: "plato muy rico",
			    precio: 10.00,
			    cantidad: 0},
			{nombre: "1/2 de Plato",
			    descripcion: "plato muy rico",
			    precio: 15.00,
			    cantidad: 0}],
			bebidas: [
			{nombre: 'primerBebida',
				descripcion: 'bebida muy rica',
				precio: 20,
				cantidad: 0},
			{nombre: 'segundaBebida',
				descripcion: 'bebida muy rica',
				precio: 30,
				cantidad: 0},
			{nombre: 'tercerBebida',
				descripcion: 'bebida muy rica',
				precio: 40,
				cantidad: 0}]   

		});
	}
	ponerEnLaOrden(indicePlatillo, cantidadPlatillo){
		this.platillos.forEach((value, index)=>{
				if(indicePlatillo === index){
					this.platillos[index].cantidad = cantidadPlatillo;
				}
			}
		)
	}

	bebidasEnLaOrden(indicePlatillo, cantidadPlatillo){
		this.bebidas.forEach((value, index)=>{
				if(indicePlatillo === index){
					this.bebidas[index].cantidad = cantidadPlatillo;
				}
			}
		)
	}
}
var VarTiendaController = new TiendaController;

export default VarTiendaController;